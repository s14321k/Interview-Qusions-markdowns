# Docker

## Container

- Container is a small microVM which runs on top of Linux. It has all the dependencies of application code, client libraries. 

## simple image creation

**Create a container image**
```
$ docker run -d -p 8800:80 httpd
```
- -d - to detach and run in the background
- -p - to open up a port and publish on my host ip and access it remotely

**Show the web page**
```
$ curl localhost:8800
```

**Kill the Container**
```
$ curl localhost:8800
```

-----------------------------------------------------------------------
---

# All Docker Commands

## 🔹 **1. Setup & Info Commands**

**step-by-step guide to essential Docker commands**, grouped by purpose, with a brief explanation of **when and why to use each**.


| Command | Purpose |
|--------|---------|
| `docker version` | Check Docker client/server versions. Use it to verify Docker is installed. |
| `docker info` | Get system-wide Docker info: containers, images, storage, etc. |
| `docker system df` | Show disk usage by Docker (images, volumes, etc.). |

---

## 🔹 **2. Image Management**

### ✅ Pulling images
```bash
docker pull <image-name>
```
Example:
```bash
docker pull nginx
```
Downloads an image from Docker Hub.

---

### ✅ Listing images
```bash
docker images
```
Shows all images on your machine.

---

### ✅ Deleting images
```bash
docker rmi <image-id or name>
```
Removes one or more Docker images.

---

## 🔹 **3. Container Lifecycle**

### ✅ Run a new container
```bash
docker run <options> <image>
```
Example:
```bash
docker run -d -p 8080:80 nginx
```
Runs `nginx` in the background (`-d`), maps port 8080 to 80.

Useful options:
- `-d`: detached mode
- `-p`: port mapping
- `--name`: name the container
- `-v`: mount volume
- `--rm`: remove container after exit

---

### ✅ List containers
```bash
docker ps        # only running
```
***even more details (like containers that have already exited earlier)***
```bash
docker ps -a     # all (including stopped)
```
This will list all containers, including:

- Running
- Exited
- Stopped
- Dead

---

### ✅ Stop a container
```bash
docker stop <container-name or id>
```

---

### ✅ Start a stopped container
```bash
docker start <container-name or id>
```

---

### ✅ Restart a container
```bash
docker restart <container-name or id>
```

---

### ✅ Kill a container
```bash
docker kill <image>
```

---
### ✅ Remove a container
**🧹 To remove all stopped containers:**
```bash
$ docker rm $(docker ps -a -q)
or
$ docker container prune
```

**🧹 To remove everything (containers + volumes + networks + images):**
```bash
$ docker system prune -a
```
```bash
docker rm <container-name or id>
```

---

## 🔹 **4. Working with Containers**

### ✅ Run a shell in a running container
```bash
docker exec -it <container-name> bash
```
Use this to debug inside a container.

---

### ✅ Run a one-time command inside a container
```bash
docker run --rm <image> <command>
```
Example:
```bash
docker run --rm alpine echo hello
```

---

### ✅ View logs of a container
```bash
docker logs <container-name>
```

---

### ✅ Copy files to/from a container
```bash
docker cp <container>:<path> <local-path>
docker cp <local-path> <container>:<path>
```

---

## 🔹 **5. Docker Volumes (Persistent Storage)**

### ✅ Create a volume
```bash
docker volume create <name>
```

### ✅ List volumes
```bash
docker volume ls
```

### ✅ Mount a volume in a container
```bash
docker run -v <volume-name>:/app/data <image>
```

### ✅ Remove volume
```bash
docker volume rm <name>
```

---

## 🔹 **6. Docker Networks**

### ✅ Create a network
```bash
docker network create <name>
```

### ✅ Connect container to a network
```bash
docker network connect <network> <container>
```

---

## 🔹 **7. Cleanup & Maintenance**

### ✅ Remove all stopped containers
```bash
docker container prune
```

### ✅ Remove unused images, networks, volumes
```bash
docker system prune
```

### ✅ Remove everything (be careful!)
```bash
docker system prune -a --volumes
```

---

## 🔹 **8. Docker Compose (multi-container setup)**

### ✅ Start all services
```bash
docker-compose up -d
```

### ✅ Stop all services
```bash
docker-compose down
```

### ✅ Build or rebuild images
```bash
docker-compose build
```

---

## ✅ Bonus: Useful Commands Summary Table

| Task | Command |
|------|---------|
| Run a container | `docker run` |
| List containers | `docker ps [-a]` |
| Start/stop | `docker start/stop` |
| Remove | `docker rm/rmi` |
| Show logs | `docker logs` |
| Shell into container | `docker exec -it <name> bash` |
| System cleanup | `docker system prune` |

----------------------------------------------------------------------------
---




# Docker in Spring boot

---

**To create a Docker image from a Spring Boot application and push it to Docker Hub (or any other container registry), follow these steps:**

---

### **Step 1: Package the Spring Boot Application**
Make sure your application is packaged into a JAR file.

```bash
./mvnw clean package
# or if you're using Gradle
./gradlew build
```

This creates a `target/your-app.jar` (for Maven) or `build/libs/your-app.jar` (for Gradle).

---

### **Step 2: Create a Dockerfile**

Create a file named `Dockerfile` in the root of your project:

```Dockerfile
# Use a lightweight base image with Java
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the jar file
COPY target/your-app.jar app.jar

# Expose port (optional, for documentation)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
```

> ⚠️ Replace `target/your-app.jar` with the actual path to your built JAR file.

---

### **Step 3: Build the Docker Image**

Run the following command in the directory containing your Dockerfile:

```bash
docker build -t your-dockerhub-username/your-app-name:tag .
```

Example:

```bash
docker build -t johndoe/springboot-app:1.0 .
```

---

### **Step 4: Test the Docker Image Locally (Optional)**

```bash
docker run -p 8080:8080 johndoe/springboot-app:1.0
```

---

### **Step 5: Log in to Docker Hub**

```bash
docker login
```

Enter your Docker Hub username and password when prompted.  

---

### **Step 6: Push the Docker Image**

```bash
docker push johndoe/springboot-app:1.0
```

---

### ✅ Optional: Automate with Jib (if using Maven or Gradle)

Instead of writing a Dockerfile manually, you can use [Google Jib](https://github.com/GoogleContainerTools/jib), which builds optimized Docker images without Docker installed.

-----------------------------------------------------------------------------
------------------

## ✅ Sample Spring Boot Project Structure

**sample project structure** along with a **GitHub Actions workflow** to build your Spring Boot app and push the Docker image to Docker Hub automatically on every push to the `main` branch.

```
springboot-docker-app/
├── src/
│   └── main/
│       └── java/
│           └── com/example/demo/
│               └── DemoApplication.java
├── target/
│   └── demo-0.0.1-SNAPSHOT.jar   # After build
├── pom.xml
├── Dockerfile
└── .github/
    └── workflows/
        └── docker-image.yml
```

---

## 🐳 Sample Dockerfile (in root directory)

```Dockerfile
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

## 🚀 GitHub Actions Workflow (`.github/workflows/docker-image.yml`)

```yaml
name: Build and Push Docker Image

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set up JDK
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'

      - name: Build JAR with Maven
        run: ./mvnw clean package -DskipTests

      - name: Log in to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: your-dockerhub-username/springboot-docker-app:latest
```

---

## 🛡️ Set Secrets in GitHub Repository

Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**:

- `DOCKER_USERNAME` → your Docker Hub username
- `DOCKER_PASSWORD` → your Docker Hub password or personal access token

---

Once set up, pushing code to the `main` branch will:

1. Build the JAR
2. Build a Docker image
3. Push it to your Docker Hub repo


------------------------------------------------------------------------------------
---

# Spring boot image creation

To create a Docker image for your Spring Boot application, you need to follow these steps:

---

### ✅ Prerequisites

- You have a Spring Boot project (JAR or WAR built with Maven/Gradle).
- Docker is installed on your machine.

---

### 📦 Step 1: Package Your Spring Boot Application

If using Maven:

```bash
./mvnw clean package
```

If using Gradle:

```bash
./gradlew clean build
```

After this, you should have a `*.jar` file in the `target/` (Maven) or `build/libs/` (Gradle) directory.

---

### 🐳 Step 2: Create a `Dockerfile`

Place this `Dockerfile` in the root of your project:

```Dockerfile
# Use an OpenJDK base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file into the container
COPY target/your-app-name.jar app.jar

# Expose port (adjust if your app uses a different port)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
```

Replace `your-app-name.jar` with the actual JAR file name.

---

### 🏗️ Step 3: Build the Docker Image

Run this command in the same directory as your `Dockerfile`:

```bash
docker build -t your-app-name .
```

---

### ▶️ Step 4: Run the Docker Container

```bash
docker run -p 8080:8080 your-app-name
```

This maps your local port 8080 to the container's port 8080.

---

### 📌 Optional Tips

- Use `.dockerignore` to avoid copying unnecessary files.
- For multi-stage builds (to reduce image size), you can build the JAR inside Docker too.
- You can push the image to Docker Hub or another registry for deployment.

Would you like a multi-stage Dockerfile or one tailored for GraalVM/native-image?

---

----------------------------------------------------------------------------
---


# docker-compose.yml file


### docker-compose.yml
- This file is located at the docker folder in spring boot application

sms proj docker-compose.yml

```yml
services:
  db:
    container_name: opc-hub
    image: postgres:17
  volumes:
    - ./init.sql:/docker-entrypoint-initdb.d/init.sql
  ports:
    - "5432:5432"
  environment:
    POSTGRES_USER: your_user
    POSTGRES_PASSWORD: your_password
    POSTGRES_DB: your_database
```

chat gpt 
```yml
version: '3.8'

services:
  db:
    image: postgres:17
    container_name: postgres-db
    restart: always
    environment:
      POSTGRES_USER: your_user
      POSTGRES_PASSWORD: your_password
      POSTGRES_DB: your_database
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

#### Run this docker-compose.yml

- Go to the directory folder where it is present in cmd

```bash
$ docker-compose up
```

------------------------------------------------------------------------------------
---


# CURL Commands

Absolutely! Here's a practical and **comprehensive list of commonly used `curl` commands and syntax**, especially useful when working with **Dockerized APIs**, **microservices**, or **Spring Boot apps**.

These are things you’d typically do when testing or interacting with an API hosted on `localhost` (or inside a Docker container).

---

## 🔹 **1. Basic HTTP GET**

```bash
curl http://localhost:8080
```
➡️ Sends a GET request to root endpoint (`/`) on port 8080.

---

## 🔹 **2. GET with custom path**

```bash
curl http://localhost:8080/api/users
```
➡️ Access `/api/users` endpoint — commonly used with REST APIs.

---

## 🔹 **3. GET with headers (e.g., Auth)**

```bash
curl -H "Authorization: Bearer <token>" http://localhost:8080/api/users
```
➡️ Sends a GET request with a JWT or OAuth token.

---

## 🔹 **4. POST with JSON data**

```bash
curl -X POST http://localhost:8080/api/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John", "email": "john@example.com"}'
```
➡️ Sends a POST request with a JSON body.

---

## 🔹 **5. PUT (update request)**

```bash
curl -X PUT http://localhost:8080/api/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "Jane"}'
```

---

## 🔹 **6. DELETE request**

```bash
curl -X DELETE http://localhost:8080/api/users/1
```
➡️ Deletes user with ID 1.

---

## 🔹 **7. See full HTTP response (status, headers, body)**

```bash
curl -i http://localhost:8080/api/users
```

- `-i`: show response headers + body.
- Helpful for checking `200 OK`, `404 Not Found`, etc.

---

## 🔹 **8. Save response to a file**

```bash
curl http://localhost:8080/api/data -o output.json
```

---

## 🔹 **9. Follow redirects**

```bash
curl -L http://localhost:8080/redirect-me
```

---

## 🔹 **10. Form submission (x-www-form-urlencoded)**

```bash
curl -X POST http://localhost:8080/login \
     -d "username=admin&password=secret"
```

---

## 🔹 **11. Basic Authentication**

```bash
curl -u admin:secret http://localhost:8080/secure
```

---

## 🔹 **12. Send custom headers**

```bash
curl -H "X-Request-ID: abc123" http://localhost:8080/api
```

---

## 🔹 **13. Upload a file**

```bash
curl -F "file=@/path/to/file.txt" http://localhost:8080/upload
```

---

## 🔹 **14. Test Docker container API**

Assuming you started a Spring Boot app like:
```bash
docker run -p 8800:8080 my-spring-app
```

You can test:
```bash
curl http://localhost:8800/actuator/health
```

---

## 🔹 Bonus: Curl Cheat Sheet Summary

| Task | Command |
|------|---------|
| Basic GET | `curl http://localhost:8080` |
| POST JSON | `curl -X POST -H "Content-Type: application/json" -d '{"key":"val"}' URL` |
| PUT/DELETE | `curl -X PUT/DELETE URL` |
| Auth Header | `curl -H "Authorization: Bearer TOKEN" URL` |
| Basic Auth | `curl -u user:pass URL` |
| Follow Redirect | `curl -L URL` |
| Save Output | `curl URL -o file.txt` |
| Show Headers | `curl -i URL` |

---

# Other most used commands

**essential command-line tools** commonly used by developers (especially when working with Docker, APIs, microservices, or Spring Boot apps). Here's a curated list of the **most commonly used commands** (apart from `curl`) with when/why to use them:

---

## 🔹 1. **`wget`** – alternative to `curl` (simpler for downloads)

```bash
wget http://localhost:8080/file.zip
```

- Great for downloading files (like API exports, artifacts).
- Less flexible than `curl`, but easier for plain downloads.

---

## 🔹 2. **`httpie`** – human-friendly `curl` alternative

```bash
http GET http://localhost:8080/api/users
http POST http://localhost:8080/api/users name=John
```

- Much cleaner than `curl` for REST APIs.
- Example:
  ```bash
  http POST :8080/api login=user password=pass
  ```

✅ Install it via:
```bash
pip install httpie
```

---

## 🔹 3. **`ping`** – test if a host/IP is reachable

```bash
ping localhost
ping google.com
```

- Checks basic network connectivity.

---

## 🔹 4. **`netstat` / `ss`** – check active ports

```bash
netstat -tuln   # show listening ports
ss -tuln        # modern alternative to netstat
```

- Useful for seeing if your Docker container or Spring Boot app is bound to the correct port.

---

## 🔹 5. **`telnet` / `nc` (netcat)** – test port connectivity

```bash
telnet localhost 8080
nc -zv localhost 8080
```

- Checks if a port is open and accepting connections (e.g., is your app running?).

---

## 🔹 6. **`jq`** – JSON viewer/parser

```bash
curl localhost:8080/api | jq
```

- Beautifies JSON output in terminal.
- Can also filter specific fields: `jq '.data[0].name'`

✅ Install with:
```bash
sudo apt install jq  # or brew install jq
```

---

## 🔹 7. **`docker logs`** – debug container output

```bash
docker logs <container-name>
```

- See logs of a running or crashed Docker container.

---

## 🔹 8. **`docker exec`** – run commands inside a container

```bash
docker exec -it <container-name> bash
```

- Useful for debugging inside a running container.

---

## 🔹 9. **`kubectl`** (if using Kubernetes)

```bash
kubectl get pods
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- bash
```

- For managing apps deployed in Kubernetes clusters.

---

## 🔹 10. **`lsof`** – check which process is using a port

```bash
lsof -i :8080
```

- Find out what app is using port 8080.

---

## ✅ Summary of Most Common Tools (Beyond `curl`)

| Tool | Purpose |
|------|---------|
| `http` (httpie) | Easier curl alternative |
| `ping`, `telnet`, `nc` | Check connectivity |
| `wget` | Download files |
| `jq` | Pretty print JSON |
| `netstat`, `ss`, `lsof` | Port checks |
| `docker logs/exec` | Debug containers |
| `kubectl` | Kubernetes control |

---

