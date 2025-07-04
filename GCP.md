<!-- TOC -->
* [GCP Commands](#gcp-commands)
    * [To run Cloud PostgreSQL](#to-run-cloud-postgresql)
    * [To get SSL certificates for Cloud SQL](#to-get-ssl-certificates-for-cloud-sql)
    * [Local Development](#local-development)
    * [Push Docker Image from Local](#push-docker-image-from-local)
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
