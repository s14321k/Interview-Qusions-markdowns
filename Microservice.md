<!-- TOC -->
  * [YouTube](#youtube)
  * [GIT hub](#git-hub)
  * [1. Caching in microservice](#1-caching-in-microservice)
  * [Deployment, Portability and scalability](#deployment-portability-and-scalability)
    * [VM and Containers](#vm-and-containers)
  * [How does Microservices comunicate between each other.](#how-does-microservices-comunicate-between-each-other)
  * [Microservice Architecture](#microservice-architecture)
  * [SERVICE DISCOVERY](#service-discovery)
  * [Load Balancing](#load-balancing)
  * [Microservice Questions](#microservice-questions)
    * [1. How will you handle if one microservice is malfunctioning](#1-how-will-you-handle-if-one-microservice-is-malfunctioning)
    * [2. Why we use microservices.](#2-why-we-use-microservices)
    * [**1. Scalability**](#1-scalability)
    * [**2. Modularity and Maintainability**](#2-modularity-and-maintainability)
    * [**3. Technology Diversity**](#3-technology-diversity)
    * [**4. Faster Time to Market**](#4-faster-time-to-market)
    * [**5. Resilience and Fault Isolation**](#5-resilience-and-fault-isolation)
    * [**6. Continuous Deployment and Delivery**](#6-continuous-deployment-and-delivery)
    * [**7. Improved Business Agility**](#7-improved-business-agility)
    * [**8. Enhanced Testing**](#8-enhanced-testing)
    * [**9. Cloud-readiness**](#9-cloud-readiness)
    * [**10. Reusability**](#10-reusability)
    * [**Challenges to Consider**](#challenges-to-consider)
    * [3. Explain Circuit Breaker in microservice.](#3-explain-circuit-breaker-in-microservice)
    * [Benefits of Using a Circuit Breaker in Microservices](#benefits-of-using-a-circuit-breaker-in-microservices)
    * [Implementation Considerations](#implementation-considerations)
    * [Common Libraries and Tools](#common-libraries-and-tools)
    * [1. **Client-Side Load Balancing**](#1-client-side-load-balancing)
      * [Advantages:](#advantages)
      * [Disadvantages:](#disadvantages)
    * [2. **Server-Side Load Balancing**](#2-server-side-load-balancing)
      * [Advantages:](#advantages-1)
      * [Disadvantages:](#disadvantages-1)
    * [3. **DNS-Based Load Balancing**](#3-dns-based-load-balancing)
      * [Advantages:](#advantages-2)
      * [Disadvantages:](#disadvantages-2)
    * [4. **Service Discovery**](#4-service-discovery)
    * [5. **Distributed Load Balancers**](#5-distributed-load-balancers)
    * [Load Balancing Algorithms](#load-balancing-algorithms)
    * [Monitoring and Auto-Scaling](#monitoring-and-auto-scaling)
    * [Conclusion](#conclusion)
* [API Gateway](#api-gateway)
  * [Microservice Strangler Fig Patterns strategy](#microservice-strangler-fig-patterns-strategy)
<!-- TOC -->

# Microservice

---

## 🔗 Useful Resources

* ▶️ [YouTube - Code Decode](https://www.youtube.com/watch?v=tGGo15irME8&t=2305s&ab_channel=CodeDecode)
* 💻 [GitHub - Microservices Vaccination App](https://github.com/codedecode25/Microservices_vaccination_citizen)
* 🎞️ [Code Decode YouTube Playlists](https://www.youtube.com/@CodeDecode/playlists)
* 🛡️ [Circuit Breaker Pattern (VinsGuru)](https://www.vinsguru.com/circuit-breaker-pattern/)
* 🧠 [Caching in Microservices (LinkedIn)](https://www.linkedin.com/pulse/exploring-caching-patterns-microservices-architecture-saeed-anabtawi/)
* 🔎 [Service Discovery (GeeksForGeeks)](https://www.geeksforgeeks.org/service-discovery-and-service-registry-in-microservices/)

---

<details>
<summary><strong>📦 Microservice Architecture Overview</strong></summary>

Microservices architecture is an approach where an application is composed of **loosely coupled, independently deployable services**. Each service is:

* Focused on a specific business capability.
* Communicates via well-defined APIs.
* Developed and deployed independently.

### 🔑 Key Benefits:

* **Scalability:** Each service can be scaled independently.
* **Flexibility & Agility:** Allows rapid development and deployment.
* **Resilience & Fault Isolation:** Failure in one service doesn't affect others.
* **Technology Diversity:** Services can use different tech stacks.
* **Maintainability:** Smaller, focused codebases are easier to manage.
* **Easy Integration:** REST, gRPC, messaging, etc.

</details>

---

<details>
<summary><strong>🔁 Microservice Communication</strong></summary>

Services communicate using synchronous and asynchronous mechanisms.

### 🔌 Communication Options:

* **Feign Client** (Declarative REST Client)
* **RestTemplate** (Traditional blocking client)
* **WebClient** (Reactive, non-blocking)
* **gRPC / Thrift** (Binary protocols)
* **Message Brokers:** Kafka, RabbitMQ for event-driven communication

</details>

---

<details>
<summary><strong>🚀 Deployment, Portability, and Scalability</strong></summary>

### 🖥️ Virtual Machines (VMs):

* Heavyweight
* Takes minutes to boot
* OS-level abstraction

### 📦 Containers (e.g., Docker):

* Lightweight and portable
* Fast startup time
* Share host OS kernel
* Ideal for microservices

### 📈 Scalability:

* Use orchestration tools like **Kubernetes**, **Docker Swarm** for:

    * Horizontal scaling
    * Auto-healing
    * Load balancing
    * Zero-downtime deployments

</details>

---

<details>
<summary><strong>🧠 Caching in Microservices</strong></summary>

Caching improves performance, reduces latency, and decreases load on services.

### 🔂 Common Caching Patterns:

* **Client-Side Cache:** Stores data locally (e.g., browser cache).
* **Server-Side Cache:** Shared cache used by services (e.g., Redis, Memcached).
* **CDN (Edge Cache):** For static content close to end-users.
* **Write-Through Cache:** Data written to cache and DB simultaneously.
* **Read-Through Cache:** Cache first, DB only if miss.
* **Cache-Aside (Lazy Load):** App fetches data, stores in cache.

### 🛠️ Tools:

* **Spring Cache Abstraction**
* **Redis**
* **Caffeine**
* **Hazelcast**

</details>

---

<details>
<summary><strong>🔍 Service Discovery</strong></summary>

Service discovery helps services find each other dynamically without hardcoding IPs or ports.

### 🧭 How It Works:

1. **Registration:** Services register themselves to a registry.
2. **Discovery:** Other services query the registry to get endpoint info.
3. **Load Balancing:** Requests are spread across healthy service instances.
4. **Health Checks:** Periodic checks to remove failed instances.
5. **Dynamic Updates:** Automatically reflects scaling or shutdown.
6. **Integration with Orchestration Tools:** e.g., Kubernetes, Consul, Eureka

### 🧰 Popular Tools:

* **Netflix Eureka**
* **Consul**
* **etcd**
* **Kubernetes built-in service registry**

### 🔧 Types:

* **Centralized Registry:** e.g., Eureka, Consul
* **DNS-Based Discovery:** Leverages service names via DNS
* **Client-Side Discovery:** Client queries the registry and load balances
* **Server-Side Discovery:** Load balancer (e.g., API Gateway) handles discovery

</details>

---


## 📌 Topics Covered

* [⚖️ Load Balancing in Microservices](#-load-balancing-in-microservices)
* [❓ Common Microservice Interview Questions](#-common-microservice-interview-questions)
* [🔌 Circuit Breaker Pattern](#-circuit-breaker-pattern)

---

<details>
<summary><strong>⚖️ Load Balancing in Microservices</strong></summary>

Load balancing ensures traffic is evenly distributed across service instances, improving **performance**, **reliability**, and **scalability**.

### 🧭 1. Client-Side Load Balancing

In this strategy, the **client selects the service instance** using an internal load-balancing library.

#### 🧰 Tools:

* **Netflix Ribbon** (Deprecated, but conceptually important)
* **Spring Cloud LoadBalancer**
* **Feign Clients with @LoadBalancerClient**

#### 📦 Sample: Ribbon Dependency

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
</dependency>
```

#### 📦 Sample: LoadBalanced Feign Client

```xml
<dependency>
   <groupId>org.springframework.cloud</groupId>
   <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

```java
@LoadBalancerClient(value = "FLIGHT-RESERVATION")
public class ReservationLoadBalancerConfig {
   @Bean
   @LoadBalanced
   public Feign.Builder feiBuilder() {
      return Feign.builder();
   }
}
```

### 🌐 2. Server-Side Load Balancing

Handled by a **gateway or reverse proxy** that distributes requests to service instances.

#### 🔧 Tools:

* **API Gateway** (Spring Cloud Gateway, Netflix Zuul)
* **NGINX**, **HAProxy**
* **AWS ELB**, **Azure Load Balancer**

### 📦 3. Kubernetes-Based Load Balancing

Kubernetes inherently supports load balancing.

* **Services**: Distribute traffic to pods using label selectors.
* **Ingress Controllers**: Manage HTTP load balancing and routing.

### 🔍 4. DNS-Based Load Balancing

Uses DNS records to return different service IPs.

* **Round Robin DNS**
* **Weighted DNS**

⚠️ DNS caching may reduce effectiveness.

### 📡 5. Global/Distributed Load Balancing

For multi-region or high availability:

* **AWS Global Accelerator**
* **Cloudflare Load Balancer**
* **Anycast IP Routing**

### ⚙️ Load Balancing Algorithms

| Algorithm                | Description                        |
| ------------------------ | ---------------------------------- |
| **Round Robin**          | Sequential request distribution    |
| **Least Connections**    | Sends to least busy instance       |
| **IP Hash**              | Sticky sessions based on client IP |
| **Weighted Round Robin** | Based on service capacity          |
| **Random**               | Randomly selects a node            |

### 📊 Monitoring & Auto-scaling

* **Prometheus**, **Grafana** for observability
* **Horizontal Pod Autoscaler (K8s)** for dynamic scaling

</details>

---

<details>
<summary><strong>❓ Common Microservice Interview Questions</strong></summary>

### Q1: 🛑 How do you handle a malfunctioning microservice?

* Deploy **multiple instances** on different ports.
* Use **load balancing** to redirect traffic from the failed instance to healthy ones.
* Implement **circuit breakers**, **health checks**, and **retry logic**.

---

### Q2: 🚀 Why do we use Microservices?

Microservices break down an application into smaller, independent services. Benefits include:

#### ✅ Key Advantages:

1. **Scalability:** Scale only what’s needed.
2. **Modularity & Maintainability:** Small, manageable components.
3. **Technology Diversity:** Use the right tool for the job.
4. **Faster Time to Market:** Independent development/deployment.
5. **Resilience:** Failures don’t affect the whole system.
6. **CI/CD Friendly:** Easier to automate deployments.
7. **Agility:** Quickly adapt to business changes.
8. **Focused Testing:** Better unit and integration testing.
9. **Cloud Readiness:** Works well with Docker, Kubernetes.
10. **Reusability:** Services reused across applications.

#### ⚠️ Challenges:

* Complexity in inter-service communication
* Data consistency
* Infrastructure overhead
* Monitoring and debugging complexity

---

### Q3: 🌐 How will you maintain load balance in microservices?

#### ✅ Strategies:

1. **Client-Side Load Balancing**

    * Uses service discovery + Ribbon/Spring Cloud LoadBalancer.
    * Example: `ReservationLoadBalancerConfig.java`

2. **API Gateway**

    * Routes and load balances requests to services.

3. **Reverse Proxies**

    * NGINX/HAProxy to balance HTTP/TCP traffic.

4. **Kubernetes**

    * Built-in load balancing via `Services` and `Ingress`.

5. **Service Mesh**

    * (e.g., Istio) offers fine-grained control.

6. **Global Load Balancers**

    * Cloud-based solutions for multi-region deployment.

</details>

---

<details>
<summary><strong>🔌 Circuit Breaker Pattern</strong></summary>

A circuit breaker **prevents cascading failures** by stopping calls to a failing service and allowing time for recovery.

### 🔁 Circuit Breaker States

| State         | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| **Closed**    | Normal operation. Requests flow through.                      |
| **Open**      | Too many failures. All calls blocked.                         |
| **Half-Open** | Trial state. A few requests allowed to test service recovery. |

---

### ⚙️ How It Works

1. **Closed**: All requests allowed. Failures are tracked.
2. **Open**: If failure threshold is met, no further calls are allowed.
3. **Half-Open**: After a cooldown period, a few requests are tested.

    * If they succeed → back to Closed.
    * If they fail → back to Open.

---

### ✅ Benefits

* **Fault Isolation**
* **Improved System Stability**
* **Faster Recovery**

---

### 🔧 Configuration (Resilience4j Example)

```yaml
resilience4j.circuitbreaker:
  instances:
    myService:
      slidingWindowSize: 10
      failureRateThreshold: 50
      waitDurationInOpenState: 30s
      permittedNumberOfCallsInHalfOpenState: 3
```

---

### 🧰 Common Libraries

| Tool                             | Notes                                           |
| -------------------------------- | ----------------------------------------------- |
| **Hystrix**                      | Netflix's legacy library (no longer maintained) |
| **Resilience4j**                 | Lightweight, modern, Java 8+ functional         |
| **Spring Cloud Circuit Breaker** | Abstraction for different circuit breaker tools |

---

</details>

---

# API Gateway in Microservices

<details>
<summary><strong>🌐 API Gateway in Microservices</strong></summary>

An **API Gateway** is a **centralized entry point** for handling all requests in a microservices architecture. It performs routing, security, monitoring, load balancing, and more, abstracting the internal system complexity from clients.

---

### 🧭 Key Responsibilities of an API Gateway

| Feature                              | Description                                                        |
| ------------------------------------ | ------------------------------------------------------------------ |
| **Routing**                          | Directs requests to the correct backend service.                   |
| **Load Balancing**                   | Distributes incoming traffic across multiple service instances.    |
| **Authentication & Authorization**   | Ensures only verified clients can access services.                 |
| **Centralized Logging & Monitoring** | Captures logs and metrics for observability.                       |
| **Rate Limiting & Throttling**       | Protects services from overload by limiting request rates.         |
| **Caching**                          | Stores responses for repeated requests to improve performance.     |
| **Protocol Translation**             | Converts between client and backend protocols (e.g., HTTP ↔ gRPC). |
| **Request/Response Transformation**  | Modifies payloads, headers, or response format.                    |
| **Aggregation**                      | Combines responses from multiple services into a single output.    |

---

### ⚖️ Built-in Load Balancing

Most API Gateways (e.g., Spring Cloud Gateway, Apigee, Kong) provide **built-in server-side load balancing**:

* Removes the need for client-side load balancers (e.g., Ribbon).
* Distributes traffic to available service instances automatically.
* Integrates with service discovery for dynamic routing.

---

### 🔐 Filters: Pre and Post

API Gateways use filters for cross-cutting concerns.

#### 🔹 Pre-Filters

* Executed **before routing**.
* Common uses: **authentication**, **logging**, **header validation**.

#### 🔹 Post-Filters

* Executed **after service response**.
* Common uses: **adding headers**, **logging**, **metrics collection**.

---

### 🧰 Popular API Gateway Solutions

| Gateway                  | Type                      | Description                                                                                           |
| ------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Apigee**               | Commercial (Google Cloud) | Enterprise-grade API management. Full support for analytics, rate limiting, monetization, and OAuth2. |
| **Kong Gateway**         | Open Source / Enterprise  | Built on NGINX. Plugin-based. Scalable and performant.                                                |
| **Apache APISIX**        | Open Source               | High-performance, dynamic, cloud-native API Gateway built on OpenResty.                               |
| **Traefik**              | Open Source               | Modern reverse proxy with dynamic service discovery. Great for Docker and Kubernetes.                 |
| **Spring Cloud Gateway** | Open Source (Java/Spring) | Native to Spring ecosystem. Built-in filters, reactive support.                                       |
| **NGINX**                | Open Source / Commercial  | Traditional reverse proxy/load balancer with API management extensions.                               |

---

### ✅ Advantages of API Gateways

* Simplifies client interaction with backend microservices.
* Centralized policy enforcement.
* Reduces complexity on client side.
* Enables observability and security best practices.

---

### ⚠️ Things to Watch Out For

* **Single Point of Failure**: Must ensure gateway is highly available.
* **Latency Overhead**: Adds a hop in request-response cycle.
* **Scaling Needs**: Should scale horizontally to meet traffic demand.

---

</details>

---

Here’s a **collapsible section** comparing **Eureka** and **Apigee Gateway** in terms of features and configuration. This includes:

* Purpose
* Feature set
* Typical use cases
* Configuration overview

Formatted in both **table form** and **collapsible markdown** for clear, structured documentation.

---

<details>
<summary><strong>🔍 Eureka vs Apigee API Gateway – Feature & Configuration Comparison</strong></summary>

### 📊 Feature Comparison Table

| Feature / Capability                | **Eureka (Netflix OSS)**                   | **Apigee (Google Cloud API Gateway)**                |
| ----------------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| **Type**                            | Service Discovery                          | Full-featured API Gateway & Management Platform      |
| **Provider**                        | Netflix OSS, Spring Cloud Netflix          | Google Cloud (Enterprise Product)                    |
| **Primary Role**                    | Registers and discovers microservices      | Routes, secures, monitors, and manages APIs          |
| **Load Balancing**                  | ✖️ (Used with Ribbon / Spring Cloud LB)    | ✔️ Built-in                                          |
| **Authentication & Authorization**  | ✖️ Delegated to other tools                | ✔️ OAuth 2.0, API Keys, JWT                          |
| **Traffic Management (Rate Limit)** | ✖️                                         | ✔️ Policies for throttling, quotas, rate limiting    |
| **Request/Response Transformation** | ✖️                                         | ✔️ Header/body manipulation supported                |
| **Analytics & Monitoring**          | ✖️ Basic via Spring Boot Actuator          | ✔️ Advanced API usage analytics, billing, monitoring |
| **Caching Support**                 | ✖️                                         | ✔️ Built-in response caching                         |
| **Protocol Support**                | Internal only (HTTP, REST)                 | HTTP(S), gRPC, WebSockets                            |
| **API Monetization**                | ✖️                                         | ✔️ Supported                                         |
| **Service Mesh Integration**        | Partial (e.g., with Istio via workarounds) | Not natively, but supports proxying into meshes      |
| **Multi-Cloud / Hybrid Support**    | No                                         | ✔️ Designed for hybrid and multi-cloud deployments   |
| **UI Management Console**           | ✔️ (via Spring Dashboard or Eureka UI)     | ✔️ Full-featured web interface for managing APIs     |

---

### ⚙️ Configuration Overview

| Configuration Step        | **Eureka**                                                | **Apigee**                                         |
| ------------------------- | --------------------------------------------------------- | -------------------------------------------------- |
| **1. Add Dependencies**   | `spring-cloud-starter-netflix-eureka-server`              | No dependencies; managed via GCP & API proxies     |
| **2. Enable Server**      | `@EnableEurekaServer` on a Spring Boot app                | Create API proxies in Apigee UI or via Apigee APIs |
| **3. Register Clients**   | `@EnableEurekaClient` + service name in `application.yml` | Upload or define OpenAPI spec or proxy endpoint    |
| **4. Discovery Settings** | Specify `eureka.client.serviceUrl.defaultZone`            | Define routing targets and policies                |
| **5. Load Balancing**     | Use Ribbon or Spring Cloud LoadBalancer                   | Automatically handled within Apigee                |
| **6. Security & Auth**    | Custom or delegated (e.g., Spring Security, OAuth config) | Built-in: API key validation, OAuth2, JWT policies |
| **7. Logging/Monitoring** | Via Spring Boot Actuator, Zipkin, Sleuth                  | Advanced monitoring dashboards in Apigee Console   |
| **8. Rate Limiting**      | Not built-in (custom logic or Spring Cloud Gateway)       | Policy-driven configuration per API in Apigee      |

---

### ✅ When to Use What?

| Use Case                             | Use **Eureka**              | Use **Apigee**                                      |
| ------------------------------------ | --------------------------- | --------------------------------------------------- |
| Internal service discovery           | ✔️ Yes                      | ✖️ Overkill for internal use only                   |
| Public API management                | ✖️ Not suitable             | ✔️ Ideal for managing and exposing public APIs      |
| API monetization / external clients  | ✖️ Not supported            | ✔️ Monetization, subscriptions, analytics           |
| Lightweight Spring Boot projects     | ✔️ Simple to integrate      | ✖️ Heavyweight; best for large-scale API ecosystems |
| Enterprise-grade security/compliance | ✖️ Custom handling required | ✔️ Built-in policies and regulatory support         |
| Multi-cloud or hybrid deployment     | ✖️ No                       | ✔️ Designed for it                                  |

---

</details>

---

## **basic configuration/code samples** for both **Eureka** (Spring Boot/Netflix OSS) and **Apigee** (Google Cloud API Gateway) to help you get started.

---

<details>
<summary><strong>🔧 Eureka – Service Discovery Setup (Spring Boot)</strong></summary>

### 🖥️ 1. Setup Eureka Server

#### 👉 Dependencies (`pom.xml`)

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

#### 👉 Main Class

```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
```

#### 👉 `application.yml` (Eureka Server)

```yaml
server:
  port: 8761

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
```

---

### 📦 2. Setup Eureka Client (Microservice)

#### 👉 Dependencies (`pom.xml`)

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

#### 👉 Main Class

```java
@SpringBootApplication
@EnableEurekaClient
public class MyServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyServiceApplication.class, args);
    }
}
```

#### 👉 `application.yml` (Eureka Client)

```yaml
spring:
  application:
    name: my-service

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka
```

💡 **Now this microservice will register itself with Eureka**, and other services can discover it using its service ID (`my-service`).

---

</details>

<details>
<summary><strong>🌐 Apigee – API Proxy Setup (Google Cloud)</strong></summary>

Apigee is configured either via the **Apigee Console UI**, **Apigee Management API**, or **gcloud CLI**. Here's how to create a basic proxy.

---

### 🧾 1. Create a Proxy in the Apigee Console

1. Go to: [https://apigee.google.com](https://apigee.google.com)
2. Choose your organization and environment.
3. Click **Develop > API Proxies > +Proxy**
4. Select:

    * **Reverse proxy**
    * **Provide backend URL** (e.g., `https://my-backend-service.com`)
5. Configure routing, authentication, quota, etc.
6. Click **Deploy** to `test` or `prod`.

---

### 💻 2. Example: Proxy via OpenAPI Spec

You can import an OpenAPI (Swagger) spec file and generate the proxy.

```bash
gcloud api-gateway api-configs create my-config \
    --api=my-api \
    --openapi-spec=openapi.yaml \
    --project=my-gcp-project \
    --backend-auth-service-account=my-sa@my-gcp-project.iam.gserviceaccount.com \
    --display-name="My API Config"
```

---

### 🔐 3. Attach Auth, Quota, and Caching Policies (XML)

In Apigee proxies, you define policies in `XML`.

#### 📌 Example: Quota Policy (`quota.xml`)

```xml
<Quota name="QuotaPolicy">
  <Interval>1</Interval>
  <TimeUnit>minute</TimeUnit>
  <Allow>100</Allow>
</Quota>
```

Attach it inside your proxy under `<Step>` tag.

---

### 📄 4. Example: Sample `openapi.yaml`

```yaml
swagger: '2.0'
info:
  title: Example API
  version: 1.0.0
host: my-api-id.a.run.app
x-google-backend:
  address: https://backend.example.com
paths:
  /hello:
    get:
      operationId: sayHello
      responses:
        '200':
          description: A successful response
```

💡 Upload this using `gcloud` or import from Apigee UI.

---

### 📊 5. Monitoring in Apigee

* Navigate to **Analyze > API Metrics**
* View charts on traffic, latency, errors, quota usage, etc.
* Enable **logging to Stackdriver (Cloud Logging)** for detailed logs.

</details>

---

 # **Microservice Strangler Fig Pattern Strategy**

---

<details>
<summary><strong>🌳 Microservice Strangler Fig Pattern Strategy</strong></summary>

### 🔄 **Purpose**

The **Strangler Fig Pattern** is a migration strategy used to **gradually replace a legacy monolithic system** with a new microservices-based architecture. Instead of rewriting everything from scratch, new features are built as microservices while the old system continues to operate. Over time, the legacy parts are "strangled" and fully replaced.

---

### 🌱 **Analogy: The Strangler Fig Tree**

* In nature, a **strangler fig** starts growing beside or on top of a tree.
* Over time, its roots grow down, wrap around the host tree, and eventually **replace it entirely**.
* In software, the **old monolith is the tree**, and the **new microservices are the fig**.

---

### 🧠 **How It Works**

| Phase                             | Description                                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **1. Identify Boundaries**        | Choose a part of the legacy system (e.g., a module or service) that can be separated.                                 |
| **2. Create Proxy/Routing Layer** | Use a façade or API Gateway to intercept requests and direct some to the legacy system and some to new microservices. |
| **3. Replace Incrementally**      | One piece at a time, rewrite legacy functionality as a microservice and update routing.                               |
| **4. Retire Legacy Code**         | Once a module is fully migrated, remove it from the old system. Repeat for the next module.                           |

---

### 🧰 **Tools Often Used**

* **API Gateway / Reverse Proxy** – e.g., Spring Cloud Gateway, NGINX, Apigee
* **Service Mesh** – for more granular control of routing (e.g., Istio)
* **Message Brokers** – to decouple legacy and new systems using events (e.g., Kafka, RabbitMQ)

---

### ✅ **Advantages**

* No need for a risky big-bang rewrite
* Continuous delivery possible during migration
* Minimizes downtime and regression risks
* Parallel development of new and old systems

---

### ⚠️ **Challenges**

* Routing complexity and maintenance during the transition
* Consistent data management between legacy and new systems
* Requires strong architectural planning and communication between teams

---

### 💡 Example Use Case

Imagine a legacy e-commerce app:

* You start by moving **user registration and authentication** to a new microservice.
* Route all login/signup traffic to the new service.
* Continue to move modules like **product catalog**, **order service**, etc., until the monolith is fully replaced.

---

### 📘 Summary

> **The Strangler Fig Pattern** is a safe and strategic approach to migrate from a legacy system to microservices **incrementally**, enabling agility and avoiding complete system overhauls.

</details>

---

# **important topics in Microservices**
---

<details>
<summary><strong>🧱 1. Microservices vs Monolithic Architecture</strong></summary>

| Feature              | Monolithic                        | Microservices                                |
| -------------------- | --------------------------------- | -------------------------------------------- |
| **Architecture**     | Single codebase                   | Distributed services                         |
| **Deployment**       | One deployment for all modules    | Independent deployment per service           |
| **Scalability**      | Scale whole app                   | Scale individual services                    |
| **Technology Stack** | Usually uniform                   | Polyglot possible                            |
| **Fault Isolation**  | Hard (single failure = app crash) | Easy (one service crash doesn’t affect rest) |
| **Maintenance**      | Difficult as app grows            | Easier due to modularity                     |

✅ Use microservices when you need flexibility, scalability, and faster delivery.

</details>

---

<details>
<summary><strong>📬 2. Inter-Service Communication</strong></summary>

Microservices must talk to each other in a decoupled and efficient way:

### 🔹 Synchronous Communication

* **REST API** – Common, simple over HTTP
* **gRPC** – Efficient, contract-first communication (Protobuf)

### 🔹 Asynchronous Communication

* **Message Queues** (RabbitMQ, ActiveMQ)
* **Event Streaming** (Kafka, Pulsar)

🔁 **When to use what?**

| Communication | Use Case                                   |
| ------------- | ------------------------------------------ |
| REST/gRPC     | Real-time, blocking requests               |
| Kafka         | Event-driven, high throughput, scalability |
| RabbitMQ      | Queued, reliable delivery of tasks         |

</details>

---

<details>
<summary><strong>🧩 3. Design Patterns in Microservices</strong></summary>

### 🧠 Common Patterns

* **API Gateway** – Central entry point
* **Circuit Breaker** – Prevent cascading failures
* **Service Discovery** – Dynamic service location (e.g., Eureka)
* **Strangler Fig** – Legacy to microservices migration
* **Saga Pattern** – Manage distributed transactions
* **CQRS** – Command Query Responsibility Segregation
* **Event Sourcing** – Persist system state using event history
* **Bulkhead** – Isolate services to avoid total failure

💡 These patterns solve challenges around **resilience**, **fault-tolerance**, and **scalability**.

</details>

---

<details>
<summary><strong>🔐 4. Security in Microservices</strong></summary>

### 🛡️ Best Practices

* **Authentication**: OAuth2, OpenID Connect
* **Authorization**: Role-based or attribute-based
* **JWT**: Token-based stateless auth
* **API Gateway**: Acts as a security gateway
* **Encrypt Data**: Both at-rest and in-transit
* **Zero Trust Model**: Never trust, always verify

🔐 Security should be **centralized at the gateway** but also **enforced at service level**.

</details>

---

<details>
<summary><strong>📊 5. Observability: Logging, Monitoring, Tracing</strong></summary>

### 📘 Key Concepts

| Feature     | Description                                         |
| ----------- | --------------------------------------------------- |
| **Logging** | Use centralized log collectors (e.g., ELK stack)    |
| **Metrics** | Use Prometheus, Micrometer, Grafana for stats       |
| **Tracing** | Use OpenTelemetry, Jaeger, Zipkin to trace requests |

* **Correlation ID** – Trace a request across services
* **Health Checks** – Expose readiness/liveness endpoints

🧠 **Observability = Monitoring + Logging + Tracing**

</details>

---

<details>
<summary><strong>⚙️ 6. Configuration Management</strong></summary>

### 🧾 Strategies

* **Spring Cloud Config** – Centralized config for all services
* **Kubernetes ConfigMap / Secrets** – Externalize environment settings
* **Vault** – Secure secrets management

### 🔁 Refresh strategies

* Use **Actuator endpoints** or **bus refresh** in Spring to update configs dynamically.

</details>

---

<details>
<summary><strong>🚀 7. Deployment & Orchestration</strong></summary>

### 🧰 Tools

| Layer             | Tools                                 |
| ----------------- | ------------------------------------- |
| **Containers**    | Docker                                |
| **Orchestration** | Kubernetes, Docker Swarm              |
| **Service Mesh**  | Istio, Linkerd                        |
| **CI/CD**         | Jenkins, GitHub Actions, GitLab CI/CD |

### 🏗️ Key Features

* **Horizontal Scaling**
* **Rolling Deployments**
* **Self-healing**
* **Service Discovery (in-built in K8s)**

</details>

---

<details>
<summary><strong>📦 8. Microservices Testing Types</strong></summary>

| Test Type            | Purpose                                 |
| -------------------- | --------------------------------------- |
| **Unit Test**        | Test logic in isolation                 |
| **Integration Test** | Test interaction between components     |
| **Contract Test**    | Verify service communication agreements |
| **End-to-End Test**  | Simulate full user journeys             |
| **Performance Test** | Check behavior under load               |

Tools: **JUnit, TestContainers, WireMock, Postman/Newman, Gatling**

</details>

---

<details>
<summary><strong>🔄 9. Data Management in Microservices</strong></summary>

### 🗃️ Principles

* **Database per service** – No shared DBs
* **Eventual consistency** – Accept delays in sync
* **Distributed Transactions** – Use **Saga** or **Outbox Pattern**

### 🛠️ Tools

* **Kafka / Debezium** – For event-based data sync
* **Change Data Capture (CDC)** – Listen to DB changes

</details>

---

<details>
<summary><strong>📚 10. API Versioning & Documentation</strong></summary>

### 📌 API Versioning Strategies

* URI versioning: `/api/v1/users`
* Header versioning: `Accept-Version: v1`
* Media type versioning: `application/vnd.company.v1+json`

### 📘 Documentation

* **Swagger/OpenAPI** – Interactive API docs
* **SpringDoc** – Swagger integration with Spring Boot

</details>

---


