## [YouTube](https://www.youtube.com/watch?v=tGGo15irME8&t=2305s&ab_channel=CodeDecode)

## [GIT hub](https://github.com/codedecode25/Microservices_vaccination_citizen)

[YOUTUBE](https://www.youtube.com/@CodeDecode/playlists)
[CircuitBreaker Pattern](https://www.vinsguru.com/circuit-breaker-pattern/)

## 1. [Caching in microservice](https://www.linkedin.com/pulse/exploring-caching-patterns-microservices-architecture-saeed-anabtawi/)

## How does Microservices comunicate between each other.

- Using `feign client`, `RestClient`, `WebClient`, `RestTemplate`.

## Microservice Architecture

Microservices architecture is an approach to software development where an application is composed of loosely coupled, independently deployable services. Each service is focused on a specific business capability and communicates with other services via well-defined APIs. This architecture promotes modularity, scalability, and flexibility, allowing teams to develop, deploy, and scale services independently. It also enables faster development cycles, easier maintenance, and better fault isolation compared to traditional monolithic architectures.

- **Scalability :** Allows indipendent services (applications) to be scalled.
- **Flexibility and Agility :** Each service can be developed, deployed independently.
- **Resilience and Fault Isolation :** If one service fails, it doesn't bring down entire system.
- **Technology Diversity :** Different microservices can be built using different technologies.
- **Easy Maintenance and Updates :** It's easier to understand, maintain, and update the codebase.
- **Easier Integration :** Microservices communicate with each other through well defined API's.

## [SERVICE DISCOVERY](https://www.geeksforgeeks.org/service-discovery-and-service-registry-in-microservices/)

Service discovery is a crucial aspect of distributed systems, particularly in architectures like microservices where applications are composed of many independent services. It's the mechanism by which various services can find and communicate with each other dynamically, without relying on hard-coded configuration.

Here's how service discovery typically works:

1. **Registration**: When a microservice starts up, it registers itself with the service registry. This registration typically includes metadata such as the service name, host IP address, port, and possibly other attributes like health checks, version, etc.

2. **Discovery**: When a microservice needs to communicate with another service, instead of relying on a static configuration file, it queries the service registry to dynamically discover the location and endpoints of the required service.

3. **Load Balancing**: In addition to providing service location information, service discovery systems often incorporate load balancing mechanisms to distribute incoming requests across multiple instances of a service. This helps improve performance, scalability, and fault tolerance.

4. **Health Monitoring**: Service discovery systems may also monitor the health of registered services by periodically sending health check requests. If a service fails to respond or is unhealthy, it can be automatically removed from the registry, preventing other services from attempting to communicate with it.

5. **Dynamic Updates**: As services scale up or down, or as new services are deployed, the service registry is updated dynamically to reflect these changes. This ensures that all services have an up-to-date view of the available services in the system.

6. **Integration with Orchestration Platforms**: Service discovery often integrates with container orchestration platforms like Kubernetes, Docker Swarm, or Mesos. These platforms manage the lifecycle of containers or virtual machines running microservices and provide additional features like automatic scaling, self-healing, and resource allocation.

There are various tools and technologies available for implementing service discovery, including:

- **DNS-based Solutions**: Services register themselves as DNS records, and other services resolve these DNS records to discover service endpoints.
- **Centralized Service Registries**: Services register themselves with a central server or database, and other services query this registry to discover service endpoints. Examples include Netflix Eureka, Consul, and etcd.

- **Peer-to-Peer Approaches**: Services communicate directly with each other to discover and exchange information about available services. This approach is less common but can be useful in certain scenarios.

Overall, service discovery is a fundamental building block of distributed systems, enabling dynamic and scalable communication between microservices in modern architectures.

## Load Balancing

Load balancing in a microservices architecture is essential for ensuring that incoming network traffic is evenly distributed across multiple instances of a service, helping to improve performance, scalability, fault tolerance, and reliability. There are various strategies and tools for implementing load balancing in a microservices environment:

1. **Client-Side Load Balancing**:

   In client-side load balancing, the responsibility for load balancing is placed on the client making the service requests. This approach is commonly used with microservices and can be achieved through libraries or components like Netflix Ribbon or custom load balancers.

   - **Netflix Ribbon**: Ribbon is a client-side load balancing library provided by Netflix. It allows you to configure load balancing rules for service clients. You can integrate Ribbon with Spring Cloud, and it will automatically distribute requests to available instances of a service. Here's an example configuration in a Spring Boot application:

     ```xml
     <dependency>
         <groupId>org.springframework.cloud</groupId>
         <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
     </dependency>
     ```

     Configure the service client with `@LoadBalanced` `RestTemplate` and specify the service name in your requests, and Ribbon will handle load balancing.

     **For feign client**

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

2. **Server-Side Load Balancing**:

   Server-side load balancing is typically performed by an intermediary component, such as a reverse proxy or an API gateway. These components route incoming requests to appropriate instances of services based on load balancing algorithms.

   - **API Gateway (e.g., Spring Cloud Gateway or Netflix Zuul)**: API gateways can be used as server-side load balancers. They provide routing and load balancing capabilities. Spring Cloud Gateway, for example, can be used to route requests to various microservices.

   - **Nginx or HAProxy**: You can use reverse proxy servers like Nginx or HAProxy to perform server-side load balancing. They can distribute traffic to multiple instances of your services based on load balancing algorithms like round-robin, least connections, or IP hashing.

3. **Container Orchestration Platforms (e.g., Kubernetes)**:

   In a microservices architecture deployed on container orchestration platforms like Kubernetes, load balancing is often provided as an inherent feature of the platform. Kubernetes, for instance, uses Services and Ingress Controllers to balance traffic across pods running your microservices.

   - **Kubernetes Services**: When you deploy microservices in Kubernetes, you create a Service resource that automatically load balances traffic across pods based on the service selector.

   - **Kubernetes Ingress**: For HTTP traffic, Kubernetes provides the Ingress resource, which can be used to manage external access to services and can include load balancing configurations.

4. **Service Discovery**:

   Service discovery tools like Consul or Eureka help with dynamic load balancing by keeping track of available instances of services and providing an up-to-date registry that clients can query to discover services. These tools often integrate with client-side load balancers or can be used in conjunction with server-side load balancing.

5. **Content-Based Routing**:

   In addition to simple load balancing, you can implement content-based routing using an API gateway or custom middleware to route requests to specific instances or services based on the content of the request (e.g., URL path, headers, or request parameters).

Load balancing is a crucial part of designing and maintaining a resilient microservices architecture. The choice of load balancing strategy and tooling depends on your specific requirements, infrastructure, and the technology stack you're using.

## Microservice Questions

### 1. How will you handle if one microservice is malfunctioning

- By creating multiple instances by running the same application on different ports. So that if one gets malfunction, then other will handle.

### 2. Why we use microservices.

- API gateway handles the load. By default it has load balancer. In spite of configuring load balancer in the client service, api gate way will handle the load balancing for all the services.
-

### 3. Explain Circuit Breaker in microservice.

- Has three states,

  - open - all calls blocked due to failure.
  - closed - all calls are good to proceed.
  - half- open - only few calls allowed according to the properties set by percentage.

- These three can be configured in recilience4j properties

_In microservice architectures, a circuit breaker is a design pattern used to detect failures and encapsulate the logic of preventing a failure from constantly recurring, allowing microservices to maintain stability and resilience._

Here's how the circuit breaker pattern works:

1. **Closed State (Normal Operation):**

   - In the closed state, the circuit breaker allows requests to flow normally from one service to another.
   - It monitors the success and failure rates of these requests.

2. **Open State (Failure Detected):**

   - If the failure rate crosses a predefined threshold, the circuit breaker trips and moves to the open state.
   - In this state, requests are immediately failed without trying to send them to the downstream service, preventing further overload or strain on the already failing service.

3. **Half-Open State (Trial Recovery):**
   - After a certain period, the circuit breaker transitions to the half-open state to test if the downstream service has recovered.
   - It allows a limited number of test requests to pass through.
   - If these requests succeed, the circuit breaker will reset back to the closed state.
   - If they fail, it goes back to the open state and the cycle continues.

### Benefits of Using a Circuit Breaker in Microservices

1. **Fault Isolation:** It helps in isolating faults and preventing cascading failures across multiple microservices.
2. **Improved Stability:** By failing fast and gracefully, it prevents services from waiting on unresponsive services, thus improving the overall stability of the system.
3. **Faster Recovery:** It allows the system to recover faster by reducing the load on failing services and giving them time to heal.

### Implementation Considerations

- **Thresholds:** Careful selection of failure thresholds and timeout periods is crucial. These thresholds determine when the circuit breaker trips to the open state.
- **Fallback Mechanisms:** Often used in conjunction with fallback mechanisms to provide default responses or degraded functionality when the circuit breaker is open.
- **Monitoring and Logging:** Effective monitoring and logging are essential to understand the state transitions and behavior of the circuit breaker, aiding in tuning and troubleshooting.

### Common Libraries and Tools

- **Hystrix:** A widely used library by Netflix for implementing circuit breakers.
- **Resilience4j:** A lightweight, easy-to-use library inspired by Hystrix but designed for functional programming.
- **Spring Cloud Circuit Breaker:** An abstraction over different circuit breaker implementations like Hystrix, Resilience4j, and others, integrated with the Spring ecosystem.

In conclusion, the circuit breaker pattern is a crucial component in building resilient microservice architectures, helping to manage failures gracefully and ensuring the overall health of the system.

1. Why MongoDB.
2. How will you maintain load balance in microservice.

- Client side load balance. Refer flightCheckin project -> ReservationLoadBalancerConfig.java
- Throug API gate way. It has service discovery and according to the number of instances it will raise the request to multiple instance to manage load.

Maintaining load balance in a microservice architecture is crucial for ensuring scalability, reliability, and high availability of services. Here are key strategies and tools for effective load balancing in microservices:

### 1. **Client-Side Load Balancing**

In client-side load balancing, the client determines which instance of a microservice to send a request to.

- **Service Discovery Integration:** Clients use a service discovery mechanism (e.g., Consul, Eureka, etc.) to get a list of available service instances.
- **Load Balancer Library:** The client uses a library (like Netflix Ribbon) to choose an instance based on a load-balancing algorithm such as round-robin, random, or least connections.

#### Advantages:

- Reduces the need for an intermediary load balancer.
- Can make intelligent decisions based on client-specific logic.

#### Disadvantages:

- Clients need to be updated if service instances change frequently.
- Potentially more complex client logic.

### 2. **Server-Side Load Balancing**

In server-side load balancing, a load balancer sits between the client and the microservice instances, distributing incoming requests.

- **Reverse Proxies and Load Balancers:** Tools like NGINX, HAProxy, or AWS Elastic Load Balancing can distribute traffic among service instances.
- **Service Meshes:** Service meshes (e.g., Istio, Linkerd) can handle load balancing along with other functionalities like service discovery, security, and observability.

#### Advantages:

- Simplifies client logic by abstracting the load-balancing mechanism.
- Easier to manage and scale load balancing centrally.

#### Disadvantages:

- Introduces an additional component that can become a bottleneck or single point of failure if not properly managed.

### 3. **DNS-Based Load Balancing**

DNS-based load balancing involves configuring the DNS to return different IP addresses (of service instances) for each request, distributing the load at the DNS level.

- **Round Robin DNS:** Distributes traffic by rotating through a list of IP addresses.
- **Weighted Round Robin:** Assigns weights to IP addresses to distribute traffic based on capacity.

#### Advantages:

- Simple to implement.
- No need for additional infrastructure components.

#### Disadvantages:

- DNS caching can lead to uneven load distribution.
- Limited control over the distribution algorithm.

### 4. **Service Discovery**

Service discovery mechanisms help in dynamically discovering service instances. They can be integrated with load balancers for efficient traffic distribution.

- **Consul, Eureka, Zookeeper:** Common service discovery tools that keep track of available service instances.
- **Kubernetes:** Uses built-in service discovery with its DNS service (kube-dns) and native load balancing.

### 5. **Distributed Load Balancers**

In some advanced setups, load balancing is distributed across different regions or data centers.

- **Global Load Balancers:** Tools like AWS Global Accelerator, Cloudflare, or Google Cloud Load Balancer can distribute traffic across multiple regions.
- **Anycast Routing:** Uses the same IP address in multiple locations, routing traffic to the nearest or best-performing instance.

### Load Balancing Algorithms

Choosing the right algorithm is crucial for effective load balancing:

- **Round Robin:** Simple and fair, distributing requests sequentially.
- **Least Connections:** Sends traffic to the instance with the fewest active connections.
- **IP Hash:** Distributes requests based on the client’s IP address, useful for session persistence.
- **Weighted Round Robin/Least Connections:** Assigns weights to instances based on their capacity, distributing traffic accordingly.

### Monitoring and Auto-Scaling

- **Monitoring Tools:** Use monitoring tools like Prometheus, Grafana, and ELK stack to keep track of service performance and load.
- **Auto-Scaling:** Implement auto-scaling policies based on metrics such as CPU usage, memory usage, or request rate to dynamically adjust the number of service instances.

### Conclusion

Maintaining load balance in microservices requires a combination of client-side and server-side strategies, effective service discovery, and the use of appropriate load balancing algorithms. Leveraging modern tools and technologies like service meshes, reverse proxies, and cloud-based load balancers, along with robust monitoring and auto-scaling mechanisms, ensures that your microservices architecture can handle varying loads efficiently and reliably.

## API Gateway

> Explain gate way (API Gateway) function in micro service.
> Pre-filter and post-filter

An API Gateway is a server that acts as an intermediary for requests from clients seeking services from backend servers. It is a fundamental component in a microservices architecture, providing a centralized entry point for managing and routing requests to the appropriate services.

Here's a simple explanation of its uses:

1. **Request Routing**: The API Gateway routes incoming client requests to the appropriate backend service. It knows where each microservice resides and forwards the requests accordingly.

2. **Load Balancing**: It distributes incoming requests evenly across multiple instances of a service, ensuring no single instance is overwhelmed and improving the application's availability and responsiveness.

3. **Security**: The gateway can handle authentication and authorization, ensuring that only authorized clients can access the services. It can also enforce security policies and manage API keys or tokens.

- `Pre-Filter` When the consumer sends the request to API gateway, API gate way(spring cloud API Gateway) will authenticate and sends the request to the respective micro-service app.

- `Post-Filter` Responce from the micro-service application will be logged inside the API Gate way or adding the headers to the responce by API Gateway. This is handled in Post-Filter.

4. **Centralized Logging and Monitoring**: It collects logs and metrics for all requests passing through, providing a centralized point for monitoring and troubleshooting.

5. **Rate Limiting and Throttling**: The API Gateway can control the rate of requests sent to the backend services, protecting them from being overwhelmed by too many requests in a short period (rate limiting) or by regulating the traffic flow (throttling).

6. **Caching**: It can cache responses to frequent requests, reducing the load on backend services and improving response times for clients.

7. **Protocol Translation**: The gateway can translate between different protocols. For example, it can accept HTTP requests from clients and convert them to a different protocol used by backend services.

8. **Transformation and Aggregation**: The API Gateway can transform request and response formats and aggregate multiple service calls into a single request, simplifying the client's interaction with the microservices.

Overall, an API Gateway simplifies client interactions with a microservices-based application by handling various cross-cutting concerns in a centralized and efficient manner.
