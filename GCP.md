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

# Stack Trace

- https://googlecloudplatform.github.io/spring-cloud-gcp/4.1.3/reference/html/trace.html
- https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples/spring-cloud-gcp-trace-sample
- https://github.com/GoogleCloudPlatform/spring-cloud-gcp/blob/main/spring-cloud-gcp-starters/spring-cloud-gcp-starter-trace/pom.xml
