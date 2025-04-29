# [Kuberneties](https://youtu.be/Wf2eSG3owoA?si=5VqnQFD4Jqe9DZmK)
- Pod - In a POD only one main application and multiple applications can run. Each pod gets its IP address. Each POD can communicate with each other using internal IP address
- Node - If one node crashes the other node can take care of it due to the blue print. ie, copy of main app.
- Service - Service will have a static Address shared with multiple nodes which has the copy of the same application. Kind of microservice.
	    Service has two functionalities. Permanent IP and Load Balancer.
		we have two types of service, internal and external
		Internal - External should not access DB. So using internal service
		External - Url like we need has to be set. For eg, https://www.sarath.com/. To make this we have Ingress. First request goes to Ingress and then goes to Service
 		Ingress - To make this we have Ingress. First request goes to Ingress and then goes to Service.
- ConfigMap - If new DB configuration needed. Just mapping to the DB is enough. No need to setup entire thing
- Secret - To store the username and password
- StatefulSet - Create using statefulSet for Database, to avoid data inconsistencies. Host DB outside from the kuberneties clusture
- StateLess - Deployment for Stateless apps
- Deployment - 
- Volume - Log data and other data are stored in storage drive which can be in the same machine, ie same server node where the pod node is running or can be the remote storage, ie outside the server.

## Architecture design of **Google Kubernetes Engine (GKE)**:

---

### 🏗️ **GKE Architecture Overview**

GKE is a managed Kubernetes service on **Google Cloud Platform (GCP)**. It abstracts away much of the complexity of Kubernetes management and infrastructure provisioning, but the underlying components are standard Kubernetes elements.

---

### 🧱 **Key Components of GKE Architecture**

#### 1. **Control Plane (Managed by Google)**
- **Kubernetes API Server** – Exposes Kubernetes API; main entry point for all administrative tasks.
- **etcd** – Kuberneties own DB to store information. Key-value store for cluster state and metadata.
- **Scheduler** – Will decide the container to be deployed in which node or where to deploy the container. Assigns workloads to nodes.
- **Controller Manager** – Watches cluster state and makes changes to achieve desired state.
- **Cloud Controller Manager** – Integrates Kubernetes with GCP infrastructure (e.g., load balancers, persistent disks). Responsible to connect with other cloud services inside GKE. 

> Note: In **Autopilot mode**, GKE handles all the nodes and infrastructure; in **Standard mode**, you manage node pools.

#### 2. **Node Pool (Managed or User-managed)**
- Group of VM instances (based on GCE - Google Compute Engine).
- Each node runs:
  - **kubelet** – Node agent for managing pods.
  - **kube-proxy** – Handles network routing.
  - **Container Runtime** – Usually containerd, runs containers.

#### 3. **Add-ons and Integrations**
- **GCP IAM** – Controls access to GKE cluster resources.
- **Cloud Monitoring & Logging** – Stackdriver integration for metrics and logs.
- **Load Balancing** – Automatically provisions GCP Load Balancers for exposed services.
- **Persistent Storage** – Integrates with GCE Persistent Disks, Filestore, etc.
- **Networking** – VPC-native clusters with CNI, Pod IPs, and GKE-native networking policies.

---

### 🔗 **Architecture Diagram (Textual)**

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
- **Standard Mode**: You manage node pools.
- **Autopilot Mode**: Fully managed nodes; more opinionated but simplified.

---



## [Youtube GKE Cmd](https://youtu.be/vIKy3pDz3jM?si=CZ8hifKfaekiSERk)


Part - 1:
=======
Create a sample website using docker container

docker run -p 8080:80 nginx:latest
docker cp index.html [container-id]:/usr/share/nginx/html/
docker commit [container-id] cad/web:version1
docker tag cad/web:version1 us.gcr.io/youtube-demo-255723/cad-site:version1
docker push us.gcr.io/youtube-demo-255723/cad-site:version1

PART - 2
=======
Deploying container in GKE cluster

 gcloud config set project youtube-demo-255723
 gcloud config set compute/zone us-central1-a

Creating a GKE cluster

 gcloud container clusters create gk-cluster --num-nodes=1
 gcloud container clusters get-credentials gk-cluster
  This command configures kubectl to use the cluster you created.

Deploying an application to the cluster
 kubectl create deployment web-server --image=us.gcr.io/youtube-demo-255723/cad-site:version1

Exposing the Deployment
 kubectl expose deployment web-server --type LoadBalancer --port 80 --target-port 80

Inspecting and viewing the application
 1. Inspect the running Pods by using
             kubectl get pods
 2. Inspect the hello-server Service by using 
             kubectl get service

Sources:

 • https://cloud.google.com/container-re...
 • https://docs.docker.com/engine/refere...
 • https://cloud.google.com/sdk/gcloud/r...
 • https://cloud.google.com/kubernetes-e...
----------