<!-- TOC -->
* [GCP Commands](#gcp-commands)
    * [To run Cloud PostgreSQL](#to-run-cloud-postgresql)
    * [To get SSL certificates for Cloud SQL](#to-get-ssl-certificates-for-cloud-sql)
    * [Local Development](#local-development)
    * [Push Docker Image from Local](#push-docker-image-from-local)
  * [🚀 GCP Compute Services Comparison](#-gcp-compute-services-comparison)
  * [🔍 Use Case Recommendations](#-use-case-recommendations)
  * [🎯 Visual Summary](#-visual-summary)
<!-- TOC -->

# GCP Commands

---

<details>
<summary><strong>GCP Commands</strong></summary>

* `gcloud auth login`
* `gcloud config set project <proj-name>`
* `gcloud sql instances describe <instance-name>`

---

### To run Cloud PostgreSQL

* Go to **Google Cloud Console → SQL → Cloud SQL Studio**

---

### To get SSL certificates for Cloud SQL

* Navigate to **Connection → Security**
* Download these files:

  * `server-ca.pem` (Server certificate)
  * `client-cert.pem` (Client certificate)
  * `client-key.pem` (Client private key)

</details>

---

<details>
<summary><strong>O'Reilly Project Commands</strong></summary>

### Local Development

1. Change version in `build.gradle` (check latest version in Google Artifact Registry)
2. Build the project:

   ```bash
   ./gradlew clean build
   ```
3. Build and push to GCP Artifact Registry:

   ```bash
   ./gradlew jib
   ```
4. Build the Docker image locally:

   ```bash
   ./gradlew jibDockerBuild
   ```
5. Run the container locally to test (replace `$version`):

   ```bash
   docker run -p 8080:8080 us-central1-docker.pkg.dev/orly-gcp-us-dev-dig-sms-99/opc-hub/opc-hub-pol:$version
   ```

   Test Swagger UI at: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

---

### Push Docker Image from Local

6. Authenticate with Google Cloud:

   ```bash
   gcloud auth login
   ```
7. Configure Docker to use GCP credentials:

   ```bash
   gcloud auth configure-docker us-central1-docker.pkg.dev
   ```
8. Push the image to the Docker registry:

   ```bash
   docker push us-central1-docker.pkg.dev/orly-gcp-us-dev-dig-sms-99/opc-hub/opc-hub-pol:$version
   ```

</details>

---

<details>
<summary><strong>Kubernetes Commands for Deployment</strong></summary>

9. Install GKE authentication plugin (if not installed):

   ```bash
   gcloud components install gke-gcloud-auth-plugin
   ```
10. Verify nodes in the cluster:

    ```bash
    kubectl get nodes
    ```
11. Update Deployment image version (replace `$version`):

    ```bash
    kubectl set image deployment/opc-hub-pol opc-hub-pol=us-central1-docker.pkg.dev/orly-gcp-us-dev-dig-sms-99/opc-hub/opc-hub-pol:$version
    ```
12. Check updated deployment status in Kubernetes cluster:

    ```bash
    kubectl get pods
    kubectl rollout status deployment/opc-hub-pol
    ```

</details>

---

## 🚀 GCP Compute Services Comparison

**clear comparison between App Engine, Cloud Run, Cloud Functions, and GKE**—the four major compute options in **Google Cloud Platform (GCP)**—so you can choose the right one based on your needs:

| Feature / Service      | **App Engine**                      | **Cloud Run**                             | **Cloud Functions**                        | **GKE (Kubernetes Engine)**             |
| ---------------------- | ----------------------------------- | ----------------------------------------- | ------------------------------------------ | --------------------------------------- |
| **Type**               | PaaS                                | Serverless Containers (CaaS)              | FaaS (Function as a Service)               | Container Orchestration (IaaS-like)     |
| **Unit of Deployment** | Application                         | Container image                           | Single function                            | Pods / Containers                       |
| **Scaling**            | Automatic                           | Automatic / manual                        | Automatic                                  | Manual / auto (with config)             |
| **Startup Time**       | Fast (Standard) / Slower (Flexible) | Very fast (seconds)                       | Instant (cold starts for infrequent usage) | Medium                                  |
| **Custom Runtimes**    | Yes (Flexible), Limited (Standard)  | Yes (any container)                       | No (only supported languages)              | Yes (full control)                      |
| **Language Support**   | Predefined (Java, Python, etc.)     | Any via Docker                            | Limited (Node.js, Python, Go, Java, etc.)  | Any (via containers)                    |
| **Traffic Splitting**  | ✅ Yes                               | ✅ Yes                                     | ❌ No                                       | ✅ Yes (via Ingress/Service)             |
| **Background Jobs**    | ✅ Flexible only                     | ✅ Supported (long-running ok)             | ❌ Not ideal                                | ✅ Fully supported                       |
| **Best For**           | Web/mobile backends                 | Microservices, APIs, webhooks, batch jobs | Event-driven, lightweight triggers         | Complex systems, orchestration, control |
| **Pricing**            | Free tier + usage based             | Per-request + usage                       | Per invocation                             | Node-based billing                      |
| **Infra Management**   | None                                | Minimal                                   | None                                       | Full control needed                     |

---

## 🔍 Use Case Recommendations

| Scenario                                       | Recommended Service     |
| ---------------------------------------------- | ----------------------- |
| Quick app/web backend with minimal setup       | **App Engine**          |
| Run any language in a Docker container         | **Cloud Run**           |
| Respond to events (e.g., file upload, pub/sub) | **Cloud Functions**     |
| You need fine control over infra/networking    | **GKE (Kubernetes)**    |
| Long-running or background processing          | **Cloud Run / GKE**     |
| Monolith app you want to scale easily          | **App Engine Flexible** |
| Microservices with moderate complexity         | **Cloud Run / GKE**     |

---

## 🎯 Visual Summary

```text
Lightweight event trigger → Cloud Functions
App, simple backend      → App Engine
Containerized microservice → Cloud Run
Complex orchestration     → GKE
```

---

Good question 👍 — let’s break it down carefully.

When you see **Google Cloud Pub/Sub** being used with **Cloud Run** or **Cloud Functions**, it’s usually because of **how these services are designed** compared to Kafka or gRPC.

---

# ⚖️ Why **Pub/Sub** instead of **Kafka** or **gRPC** in Cloud Run / Cloud Functions?

### 1. **Cloud Functions / Cloud Run are serverless & event-driven**

* They **scale to zero** when idle and spin up on demand.
* Pub/Sub integrates natively: push or pull events trigger the function automatically.
* You don’t need to manage connections, brokers, or workers → Pub/Sub handles delivery + retries.
  👉 With **Kafka**, you’d need a **long-running consumer** to poll a topic. Cloud Functions don’t stay alive for that.

---

### 2. **gRPC is synchronous, but Functions are async**

* **gRPC** works best for **low-latency, always-on microservices** talking directly.
* Cloud Functions are **short-lived, ephemeral**, designed for **event triggers** (not open streams).
* Using gRPC would require the function to stay active to handle requests → not cost-efficient in serverless.

---

### 3. **Pub/Sub fits the “fire-and-forget” event model**

* Functions usually **react to events**:

  * New file uploaded to GCS → Pub/Sub event → Cloud Function processes it.
  * API request → Publish to Pub/Sub → Function scales out and handles jobs.
* Pub/Sub guarantees **at-least-once delivery**, retries, dead-letter topics.

Kafka could do this too, but in GCP:

* Kafka = extra infra (self-manage or use Confluent Cloud).
* Pub/Sub = fully managed, integrated with IAM, billing, and Cloud Run triggers.

---

### 4. **Simplicity and ecosystem integration**

* Pub/Sub integrates directly with:

  * Cloud Storage
  * Cloud Run
  * Cloud Functions
  * BigQuery, Dataflow, Firestore, etc.
* Kafka has richer features for event streaming, but is heavier and overkill for lightweight serverless event triggers.

---

# ✅ When to choose what (Rule of Thumb)

* **Pub/Sub + Cloud Run/Functions**

  * Event-driven workloads.
  * Serverless scale-to-zero needed.
  * Native GCP ecosystem integration.
  * Example: “Process every uploaded image asynchronously.”

* **Kafka + Kubernetes (GKE, VM-based microservices)**

  * Large-scale event streaming with high throughput.
  * Need replay, ordering guarantees, stream processing (Flink, ksqlDB).
  * Example: “Process billions of user activity logs for analytics.”

* **gRPC between microservices**

  * Real-time request/response, streaming APIs.
  * Low latency, strongly typed communication.
  * Example: “Payment service calling fraud-detection service.”

---

⚡ So in short:
👉 In **Cloud Run/Functions**, Pub/Sub is used because it’s **event-driven, managed, and integrates natively with ephemeral, scale-to-zero workloads**. Kafka and gRPC don’t fit as neatly into that serverless model.

---

Perfect 👍 — here’s an **ASCII flow diagram** (Markdown) showing how **Pub/Sub, Kafka, and gRPC** typically integrate with **Cloud Run / Cloud Functions vs Microservices**.

```markdown
# Event-driven vs Streaming vs RPC: Architecture Flows

------------------------------------------------------
1. Cloud Functions / Cloud Run with Pub/Sub (Serverless)
------------------------------------------------------

+-------------+         (publish event)        +----------------+
|  Producer   | -----------------------------> |  Pub/Sub Topic |
|  (API, App) |                                +--------+-------+
                                                 (trigger)
                                                        v
                                               +--------+--------+
                                               | Cloud Function  |
                                               | / Cloud Run     |
                                               | (ephemeral,     |
                                               |  scale-to-zero) |
                                               +-----------------+

- Pub/Sub delivers message
- Function auto-starts, processes event, shuts down
- No idle cost, at-least-once delivery


-----------------------------------
2. Kafka with Microservices (Always-On)
-----------------------------------

+-------------+        (publish)        +----------------+
|  Producer   | ----------------------> |  Kafka Topic   |
|  Service A  |                         +--------+-------+
                                              (poll/consume)
                                                   v
                                          +--------+--------+
                                          | Service B        |
                                          | (long-running,   |
                                          |  consumer group) |
                                          +------------------+

- Service B must stay alive to poll topic
- Handles high-throughput streaming
- Stateful, supports replay, partitions, ordering


----------------------------
3. gRPC for Microservices
----------------------------

+----------------+     (direct RPC call)     +----------------+
| Client Service | ------------------------> | Server Service |
|   (caller)     |                           |   (callee)     |
|                | <------------------------ |                |
+----------------+     (response)            +----------------+

- Low-latency, synchronous or streaming
- Caller must know server & schema (Protobuf)
- Not event-driven, requires always-on services
```

---

# 🔑 Key Takeaways

* **Pub/Sub + Cloud Functions/Run** → Event-driven, serverless, auto-scaling, scale-to-zero.
* **Kafka** → High-throughput, persistent streaming backbone, needs long-running consumers.
* **gRPC** → Real-time RPC between always-on microservices, tightly coupled schema.

---

Choosing between **Cloud Functions** and **Cloud Run** depends on the nature of your application, workload, and requirements. Let’s break it down carefully:

---

### **1. Cloud Functions**

* **Type:** Serverless Functions (FaaS – Function as a Service)
* **Trigger-based:** Automatically runs in response to events (HTTP requests, Pub/Sub messages, Firestore changes, etc.)
* **Execution:** Short-lived tasks (typically <9 minutes)
* **Scaling:** Fully automatic, scales from 0 to N instances depending on demand
* **Deployment:** Simple – just upload your code
* **Language support:** Node.js, Python, Go, Java, Ruby, .NET, etc.
* **Best for:**

  * Event-driven tasks
  * Lightweight APIs or microservices
  * Backend for mobile or web apps that respond to triggers
  * Tasks that don’t need custom runtime or OS-level control

**Pros:**

* No server management
* Pay only for actual execution time
* Easy to integrate with other Google Cloud services

**Cons:**

* Limited execution time
* Limited control over the runtime environment
* Harder to handle complex workflows or long-running processes

---

### **2. Cloud Run**

* **Type:** Serverless Containers
* **Trigger-based:** Can handle HTTP requests directly
* **Execution:** Can run long-lived tasks
* **Scaling:** Automatically scales from 0 to N instances based on traffic
* **Deployment:** Deploy a container (Docker or OCI) – any language, any library, any binary
* **Best for:**

  * HTTP-based microservices
  * Applications that need custom dependencies or libraries
  * Workloads that require long-running processes or larger memory/CPU
  * Migrating existing containerized apps to serverless

**Pros:**

* Full control over runtime and environment
* Supports long-running services
* Can run any programming language or framework via container
* Can respond to high traffic spikes

**Cons:**

* Slightly more complex deployment (requires Docker/containers)
* Billing is per instance time (even when idle instances exist, but scales to zero when no traffic)

---

### **Decision Guide**

| Criteria              | Cloud Functions                 | Cloud Run                                 |
| --------------------- | ------------------------------- | ----------------------------------------- |
| Execution Type        | Short, event-driven             | Long-running HTTP services                |
| Runtime Flexibility   | Limited (predefined languages)  | Fully customizable (any container)        |
| Scaling               | Automatic, instant              | Automatic, may have small startup latency |
| Deployment Complexity | Very simple                     | Moderate (containerization needed)        |
| Cost                  | Pay per execution               | Pay per instance runtime                  |
| Use Case Examples     | Pub/Sub triggers, webhook, CRON | REST APIs, microservices, backend apps    |

---

✅ **Rule of Thumb:**

* If you have **simple event-driven logic** or lightweight API endpoints → **Cloud Functions**
* If you need **full control, long-running tasks, or complex services** → **Cloud Run**

---

# Stack Trace

- https://googlecloudplatform.github.io/spring-cloud-gcp/4.1.3/reference/html/trace.html
- https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples/spring-cloud-gcp-trace-sample
- https://github.com/GoogleCloudPlatform/spring-cloud-gcp/blob/main/spring-cloud-gcp-starters/spring-cloud-gcp-starter-trace/pom.xml
- https://cloud.google.com/logging/docs

## OpenTelemetry
- https://opentelemetry.io/
- 
