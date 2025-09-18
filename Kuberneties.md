# Kubernetes

---

<details open>
<summary><strong>Kubernetes Overview</strong></summary>

* **Pod**
  In a POD, only one main application runs but it can have multiple containers. Each pod gets its own IP address and pods communicate internally using these IPs.

* **Node**
  Nodes are worker machines. If one node crashes, others take over the workload because of Kubernetes’ replication (blueprint) mechanism.

* **Service**
  Service provides a stable IP address and load balancing over multiple pods (copies of the same app).
  Types of Service:

    * **Internal**: Used for internal communication, e.g., DB access restricted inside the cluster.
    * **External**: Exposes an app to outside traffic (e.g., public URL). Uses **Ingress** as an entry point, which routes requests to services.

* **Ingress**
  Entry point for external traffic. It receives requests and forwards them to appropriate services inside the cluster.

* **ConfigMap**
  Used to inject configuration data (like DB configs) into pods without rebuilding images.

* **Secret**
  Securely stores sensitive data such as usernames and passwords.

* **StatefulSet**
  Manages stateful applications like databases, ensuring stable network IDs and storage.

* **Stateless (Deployment)**
  Used for stateless applications with replicas, where no persistent state is stored in pods.

* **Volume**
  Persistent storage for logs, data, etc., which can be local to the node or remote (network storage).

</details>

---

<details open>
<summary><strong>Google Kubernetes Engine (GKE) Architecture</strong></summary>

### 🏗️ GKE Overview

Managed Kubernetes service by Google Cloud Platform (GCP). It manages control plane components for you.

### 🧱 Key Components

1. **Control Plane (Managed by Google)**

    * Kubernetes API Server — main API endpoint

    * etcd — distributed key-value store for cluster state

    * Scheduler — decides which node runs which pod

    * Controller Manager — monitors cluster and manages state

    * Cloud Controller Manager — integrates Kubernetes with GCP services (load balancers, disks)

   > Autopilot mode: Google manages nodes.
   > Standard mode: You manage node pools.

2. **Node Pool (Managed/User-managed)**

    * Group of VM instances running:

        * kubelet (node agent)
        * kube-proxy (network proxy)
        * Container runtime (containerd)

3. **Add-ons & Integrations**

    * GCP IAM for access control
    * Cloud Monitoring & Logging
    * Load balancing with GCP LB
    * Persistent storage integration
    * VPC-native networking

---

### 🔗 Architecture Diagram (Text)

```
                +---------------------+
                |  GCP Management     |
                |  Console / gcloud   |
                +---------------------+
                          |
                          v
                +---------------------+
                |  GKE Control Plane  | <--- Managed by Google
                |  API Server, etcd   |
                |  Scheduler, CMs     |
                +---------------------+
                          |
           --------------------------------
          |               |               |
          v               v               v
+----------------+  +----------------+  +----------------+
| Node Pool A    |  | Node Pool B    |  | Node Pool C    |
| VM Instances   |  | GPU-enabled    |  | Preemptible    |
| kubelet, proxy |  | for ML         |  | for CI/CD      |
+----------------+  +----------------+  +----------------+
          |               |               |
          v               v               v
     +--------+      +--------+       +--------+
     |  Pods  |      |  Pods  |       |  Pods  |
     +--------+      +--------+       +--------+
```

---

### 🧠 Deployment Options

* **Standard Mode** — You manage nodes
* **Autopilot Mode** — Fully managed nodes by Google

</details>

---

<details>
<summary><strong>GKE YouTube Demo Commands</strong></summary>

### Part 1: Create a Sample Website Using Docker Container

```bash
docker run -p 8080:80 nginx:latest
docker cp index.html [container-id]:/usr/share/nginx/html/
docker commit [container-id] cad/web:version1
docker tag cad/web:version1 us.gcr.io/youtube-demo-255723/cad-site:version1
docker push us.gcr.io/youtube-demo-255723/cad-site:version1
```

---

### Part 2: Deploying Container in GKE Cluster

```bash
gcloud config set project youtube-demo-255723
gcloud config set compute/zone us-central1-a
```

Create a GKE cluster:

```bash
gcloud container clusters create gk-cluster --num-nodes=1
gcloud container clusters get-credentials gk-cluster
# Configures kubectl to use your new cluster
```

Deploy an application:

```bash
kubectl create deployment web-server --image=us.gcr.io/youtube-demo-255723/cad-site:version1
```

Expose the deployment as a service:

```bash
kubectl expose deployment web-server --type LoadBalancer --port 80 --target-port 80
```

Inspect running pods:

```bash
kubectl get pods
```

Check service details:

```bash
kubectl get service
```

---

### Sources

* [https://cloud.google.com/container-registry/docs/pushing-and-pulling](https://cloud.google.com/container-registry/docs/pushing-and-pulling)
* [https://docs.docker.com/engine/reference/commandline/commit/](https://docs.docker.com/engine/reference/commandline/commit/)
* [https://cloud.google.com/sdk/gcloud/reference/container/clusters/create](https://cloud.google.com/sdk/gcloud/reference/container/clusters/create)
* [https://cloud.google.com/kubernetes-engine/docs/concepts/architecture](https://cloud.google.com/kubernetes-engine/docs/concepts/architecture)

</details>

---