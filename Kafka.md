# Kafka

# ⚡ Kafka Performance Design Choices

## Why Kafka Fast

![WhyKafkaFast](images/Kafka/WhyKafkaFast.jpg)

![MessagingQueArchitech](images/Kafka/MessagingQueArchitech.gif)

[Kafka Hello World](https://www.javainuse.com/spring/spring-boot-apache-kafka-hello-world)

# 📨 Evolution of Message Queue Architectures
### IBM MQ → RabbitMQ → Kafka → Pulsar

---

<details>
<summary><strong>🔹 IBM MQ</strong></summary>

- **Introduced:** 1993 (originally called *MQSeries*).
- **Renamed:** WebSphere MQ in 2002 → IBM MQ in 2014.
- **Overview:**  
  IBM MQ is one of the earliest enterprise-grade messaging systems, providing **reliable, transactional message delivery** between systems.
- **Key Strengths:**
    - Strong **ACID guarantees**
    - Designed for **banking and financial systems**
    - Robust **message persistence** and **security**
- **Industry Use:** Still widely used in the financial sector, generating over **$1 billion in revenue in 2020**.

</details>

---

<details>
<summary><strong>🔹 RabbitMQ</strong></summary>

- **Architecture:** Built on **AMQP (Advanced Message Queuing Protocol)**.
- **Core Concept:** Messages are sent to an **Exchange**, which routes them to **Queues** based on exchange type and routing keys.
- **Exchange Types:**
    - **Direct:** Message sent to queues with matching routing keys.
    - **Topic:** Message sent to queues with matching patterns.
    - **Fanout:** Message broadcast to all queues bound to the exchange.
- **Flow:**  
  **Producer → Exchange → Queue → Consumer**
- **Use Case:**  
  Ideal for **task queues**, **message routing**, and **application-level communication**.

</details>

---

<details>
<summary><strong>🔹 Kafka</strong></summary>

- **Created by:** LinkedIn, open-sourced in **2011**.
- **Nature:** A **distributed event streaming platform** optimized for **high-throughput** and **low-latency** data pipelines.
- **Architecture Concepts:**
    - **Producer, Broker, Topic, Partition, Consumer**
    - Data is stored in an **append-only log** for fault tolerance.
- **Advantages:**
    - Highly **scalable and durable**
    - Efficient for **real-time data streaming**
    - Simplifies **event-driven architecture**
- **Impact:**  
  Kafka’s design replaced many traditional **AMQP-based systems** and became the backbone of **modern data pipelines**.

</details>

---

<details>
<summary><strong>🔹 Pulsar</strong></summary>

- **Developed by:** Yahoo, now an **Apache open-source project**.
- **Architecture:** Designed as an **all-in-one messaging and streaming platform**.
- **Key Strengths:**
    - **Two-layer architecture:**
        - **Serving Layer:** Brokers handle message serving.
        - **Persistent Layer:** BookKeeper manages durable message storage.
    - **Tiered Storage:** Seamless integration with **object storage (e.g., AWS S3)** for long-term retention.
    - **Multi-tenancy & Geo-replication:** Built-in support for multi-region, cloud-native deployments.
    - **Dynamic Scaling:** Easier **partition migration** and cluster elasticity than Kafka.
- **Positioning:**  
  Pulsar combines **message queuing + event streaming** capabilities into one platform.

</details>

---

### ⚙️ Summary Comparison

| Feature | IBM MQ | RabbitMQ | Kafka | Pulsar |
|----------|---------|-----------|--------|---------|
| **Released** | 1993 | 2007 | 2011 | 2016 |
| **Type** | Enterprise Messaging | Message Broker | Event Streaming | Messaging + Streaming |
| **Protocol** | Proprietary | AMQP | Custom TCP | Custom |
| **Persistence** | Strong | Configurable | Log-based | Tiered (BookKeeper + Object Storage) |
| **Scalability** | Moderate | Moderate | High | Very High |
| **Ideal Use** | Financial systems | Application messaging | Event streaming, analytics | Cloud-native messaging & storage |

---

📘 **In Summary:**  
Message queue architectures have evolved from **enterprise-centric, transactional systems (IBM MQ)** to **lightweight brokers (RabbitMQ)**, then to **distributed streaming systems (Kafka)**, and finally to **cloud-native unified platforms (Pulsar)** — each iteration improving scalability, flexibility, and real-time data processing.

---

<details>
<summary><strong>1️⃣ Sequential I/O</strong></summary>

Kafka’s first performance advantage comes from its reliance on **Sequential I/O**.  
Instead of randomly reading or writing data on disk, Kafka performs **sequential writes**, which are significantly faster and more predictable — allowing it to handle **high-throughput message streams** efficiently.

</details>

---

<details>
<summary><strong>2️⃣ Zero Copy Principle</strong></summary>

The second major design choice behind Kafka’s exceptional performance is the **Zero Copy Principle**, which minimizes unnecessary data transfers between the **application** and **kernel** contexts.

---

### 🔹 Data Flow Overview

Below is how data is transmitted between the **producer** and **consumer**, illustrating what *zero-copy* means.

---

#### 🧩 Step 1: Producer Writes Data
- **1.1 – 1.3:** The producer writes data to disk sequentially.

---

#### ❌ Step 2: Consumer Reads Data *Without* Zero-Copy

| Step | Description |
|------|--------------|
| 2.1 | Data is loaded from disk to OS cache. |
| 2.2 | Data is copied from OS cache to the Kafka application. |
| 2.3 | Kafka application copies the data into the socket buffer. |
| 2.4 | Data is copied from the socket buffer to the network card. |
| 2.5 | The network card sends data out to the consumer. |

---

#### ✅ Step 3: Consumer Reads Data *With* Zero-Copy

| Step | Description |
|------|--------------|
| 3.1 | Data is loaded from disk to OS cache. |
| 3.2 | OS cache directly copies data to the network card via the **sendfile()** command. |
| 3.3 | The network card sends data out to the consumer. |

---

### 🧠 Why It Matters
**Zero-copy** is essentially a shortcut that saves multiple redundant data copies between **user space (application context)** and **kernel space**, resulting in:
- Reduced **CPU overhead**
- Faster **data transmission**
- Higher **throughput** and **lower latency**

</details>
