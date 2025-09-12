# System architecture — ASCII diagram (with Zipkin / OpenTelemetry)

Below is a full ASCII architecture diagram (Markdown code block) that shows frontend → APIs → microservices → messaging → storage → observability (Zipkin / OpenTelemetry) flows. After the diagram I list the numbered flow steps and short explanations so you can trace how data and events move.

```markdown
# Modern system: Frontend, API (REST/GraphQL), gRPC microservices, Kafka, RabbitMQ, Elasticsearch, DBs, OpenTelemetry/Zipkin

                                +---------------------+
                                |     Frontend UI     |
                                | (Web / Mobile / CLI)|
                                +----------+----------+
                                           |
             (A) REST/GraphQL over HTTPS   |   (B) WebSocket / Subscriptions
                                           v
                                +----------+----------+
                                |     API Gateway     |
                                | (Auth, Rate-limit,  |
                                |  GraphQL Gateway,   |
                                |  REST endpoints)    |
                                +----+--------+-------+
                                     |        |
                         (1) REST/GraphQL   (2) Fetch aggregate data
                                     |        v
                                     |   +----+------+
                                     |   |  Edge-    |
                                     |   |  Resolver |
                                     |   +----+------+
                                     |        |
                                     v        v
                     +---------------+--------+-----------------+
                     | Internal Service Mesh / Load Balancer    |
                     | (Service discovery, TLS, LB)             |
                     +----------+----------------+---------------+
                                |                |
               (3) gRPC (fast)  |                |  HTTP (admin/metrics)
                   calls        |                |
                                v                v
              +-----------------+----+     +-----+---------------+
              |   Auth Service       |     |   Profile Service   |
              |   (gRPC + HTTP)      |     |   (gRPC + DB)       |
              +--+----------------+--+     +------------+--------+
                 |                |                     |
                 |                |  (4) writes/updates |
                 |                v                     v
                 |         +------+-------+   +---------+---------+
                 |         | Relational   |   |   NoSQL / Cache   |
                 |         | DB (Postgres)|   | (Redis/Cassandra) |
                 |         +--------------+   +-------------------+
                 |
                 |  (5) publish events
                 v
       +---------+---------------------------------------------------+
       |                         Kafka                               |
       |           (topics: OrderCreated, PaymentCompleted,          |
       |            ProfileUpdated, AnalyticsEvents...)              |
       +-----+------------------------+-------------------+----------+
             |                        |                   |
   (6) stream consumers        (7) sink/connectors       (8) analytics
             |                        |                   |
             v                        v                   v
   +---------+-------+        +-------+----------+   +----+-----------+
   |  Search Index   |        |  Elastic-        |   |  Stream-       |
   |  Updater (svc)  |        |  search Sink     |   |  Processing    |
   | consumes topic  |        |  (Elasticsearch) |   |  (Spark/ksql)  |
   +-----------------+        +------------------+   +----------------+
             |
             | (9) index documents for full-text search
             v
       +-----+-----------------+
       |   Elasticsearch       |
       +-----------------------+

   Meanwhile, for background jobs / guaranteed delivery:

       +-------------------------------------------+
       |               RabbitMQ (AMQP)             |
       |    (task queues: email, pdf-render, sms)  |
       +---+-----------------+---------------------+
           |                 |
 (10) workers consume      (11) ack / retry / DLQ
           |                 |
           v                 v
   +-------+-------+     +----+----------+
   | Email Worker  |     |  PDF Worker   |
   +---------------+     +---------------+

   Observability / Tracing / Logging / Metrics (cross-cutting):

   [All services instrumented with OpenTelemetry SDK/Agent]
                         |
                         v
                +--------+---------+
                | OpenTelemetry    |
                | Collector (OTLP) |
                +---+----+---+-----+
                    |    |   |
    (A) traces ---->|    |   |-->  (B) metrics  --> Prometheus / Metrics DB
                    |    |   |
                    |    |   +-->  (C) logs      --> ELK / Loki
                    |    |
                    |    +------>  (D) tracing backend
                    |                 (Zipkin / Jaeger / Tempo)
                    |
                    +--------->  APM / Tracing UI (Zipkin/Jaeger/Grafana Tempo)

   Notes:
   - Zipkin can receive spans from the OpenTelemetry Collector (OTLP -> Zipkin exporter).
   - Services may export directly OTLP or Zipkin format; Collector unifies and routes.
```

---

## Numbered flow explanation (detailed)

1. **Client → API Gateway (REST/GraphQL)**

   * Browser/mobile sends REST call or GraphQL query to API Gateway.
   * Gateway handles auth, rate-limiting, caching, and routes requests to internal services or resolves via GraphQL resolvers.

2. **GraphQL resolvers / Edge-Resolvers**

   * If a GraphQL query needs aggregated data from multiple microservices, the gateway or an edge resolver composes several gRPC calls to different services.

3. **Service-to-service calls using gRPC**

   * Internal microservices communicate synchronously with **gRPC** for low latency and typed contracts (Protobuf). Example: Profile Service calls Auth Service to validate a token.

4. **Services update state in databases**

   * Services persist canonical state to relational (Postgres), NoSQL, or caches (Redis). `PUT`/`POST` style semantics are handled within services.

5. **Services publish domain events to Kafka**

   * After state changes, services publish immutable events to Kafka topics (e.g., `OrderCreated`). This enables multiple downstream consumers without tight coupling.

6. **Event consumers process streams**

   * Services that need to react asynchronously (analytics, notifications) subscribe to Kafka topics as consumers (consumer groups). Kafka gives durable retention and replay.

7. **Kafka Connect / Sink to Elasticsearch**

   * A sink connector or a consumer service indexes events/documents into **Elasticsearch** for full-text search, aggregations, or dashboarding.

8. **Stream processing**

   * Real-time transforms or aggregations (ksqlDB, Flink, Spark) consume Kafka topics and produce derived streams/metrics.

9. **Search queries served from Elasticsearch**

   * API/GraphQL can query Elasticsearch directly (via its REST API) or through a service that shapes documents for frontend consumption.

10. **RabbitMQ for background tasks**

    * For jobs needing guaranteed delivery, retries, or complex routing (e.g., email, image processing), producers push messages to RabbitMQ exchanges and workers consume from queues.

11. **Worker ack / DLQ pattern**

    * Workers process tasks, ack on success, NACK/requeue on failure, or push to Dead Letter Queue after retry exhaustion.

## Observability: Zipkin vs OpenTelemetry (how they fit)

* **OpenTelemetry (OTel)** is the instrumentation standard (SDKs, semantic conventions). Instrument your services with OTel to emit traces, metrics, and logs.
* **OpenTelemetry Collector** receives telemetry (OTLP), can process/aggregate/enrich, and export to multiple backends.
* **Zipkin / Jaeger / Tempo** are tracing backends/visualizers. The Collector can export traces to Zipkin format or directly to Jaeger/Tempo. Zipkin is a simple trace UI; Jaeger/Tempo/Grafana provide richer features.
* Typical flow: `Instrumented Service -> OpenTelemetry Collector -> Zipkin/Jaeger/Tempo` and also `Collector -> Prometheus (metrics)`, `Collector -> ELK (logs)`.

---

## Quick mapping to your earlier question list

* **REST / GraphQL**: client-facing API layer (API Gateway).
* **gRPC**: internal, low-latency RPC between services.
* **Kafka**: durable event backbone for publish/subscribe and replay.
* **RabbitMQ**: reliable task/worker queue for background jobs.
* **Elasticsearch**: search & analytics datastore (sink of events).
* **OpenTelemetry / Zipkin**: observability/tracing stack — instrument services with OTel, collect and view traces in Zipkin/Jaeger/Grafana.

---

```markdown
# Modern DevOps / Cloud-Native Architecture (ASCII)

                       +----------------------------------+
                       |        Source Control (Git)      |
                       |   GitHub / GitLab / Bitbucket    |
                       +------------------+---------------+
                                          |
          (1) CI/CD Trigger (commit/push) |
                                          v
                +-------------------------+-------------------------+
                |                  CI/CD Layer                    - |
                |---------------------------------------------------|
                | Jenkins | GitHub Actions | GitLab CI | Tekton     |
                +------------------+--------------------------------+
                                   |
                 (2) Build / Test / Package Artifacts (Docker images)
                                   v
                          +--------+---------+
                          |   Container Build|
                          |   Docker / Podman|
                          +--------+---------+
                                   |
                  (3) Push to Registry (Harbor, ECR, GCR, DockerHub)
                                   v
                         +---------+-------------+
                         |   Container Registry  |
                         +---------+-------------+
                                   |
             (4) Deploy Infra via IaC (Terraform, Ansible, Pulumi, CFN)
                                   v
        +-------------------+    +-----------------------+
        | Provision Infra   |    | Configure Servers     |
        | Terraform / Pulumi|    | Ansible (agentless)   |
        +-------------------+    +-----------------------+
                  |                           |
                  v                           v
         +--------+---------+          +------+------+
         |  Cloud Infra     |          | VMs / Hosts |
         | AWS / Azure / GCP|          | Baremetal   |
         +------------------+          +-------------+
                  |
   (5) Orchestration / Platform Layer
                  v
        +---------+-------------------------------+
        |   Container Orchestration (Kubernetes)  |
        |   - OpenShift (enterprise flavor)       |
        |   - Nomad (simpler alternative)         |
        +---------+-------------------------------+
                  |
     (6) App Deployments / GitOps with ArgoCD
                  v
         +--------+--------+
         |  Applications   |
         |  (Microservices)|
         +--------+--------+
                  |
      (7) Observability / Monitoring / Logging
                  v
   +--------------+------------------------------+
   |   Metrics: Prometheus → Grafana dashboards  |
   |   Logs: ELK / Loki                          |
   |   Traces: OpenTelemetry → Zipkin / Jaeger   |
   +---------------------------------------------+

```

---

# 🔑 Flow Explanation

1. **Source Control** → Developers push code to Git.
2. **CI/CD (Jenkins, GitHub Actions, GitLab CI, Tekton)** → Automates build, test, and packaging pipelines.
3. **Docker/Podman** → Build containers from source → push to registry.
4. **Terraform/Pulumi** → Provision cloud infra (VMs, networks, DBs). **Ansible** → Configure OS / middleware.
5. **Kubernetes/OpenShift** → Deploy & orchestrate containers at scale.
6. **ArgoCD (GitOps)** → Deploy apps declaratively from Git repos into Kubernetes.
7. **Observability** → Prometheus for metrics, Grafana for visualization, ELK/Loki for logs, OpenTelemetry for telemetry → Zipkin/Jaeger for distributed tracing.

---

⚡ This diagram shows **where each tool fits**:

* **Jenkins** → CI/CD automation
* **Terraform/Ansible** → Infrastructure provisioning/config
* **Docker/Podman** → Container packaging
* **Kubernetes/OpenShift** → Orchestration / platform layer
* **ArgoCD** → GitOps deployment
* **Prometheus/Grafana/Zipkin** → Observability

---