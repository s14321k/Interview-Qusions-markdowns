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

1. How will you handle if one microservice is malfunctioning

- By creating multiple instances by running the same application on different ports. So that if one gets malfunction, then other will handle.

2. Filter & aggregation in stream API
3. Why we use microservices.

- API gateway handles the load. By default it has load balancer. In spite of configuring load balancer in the client service, api gate way will handle the load balancing for all the services.
-

1. Explain Circuit Breaker in microservice.

- Has three states,

  - open - all calls allowed
  - closed - all calls closed
  - half- open - only few calls allowed

- These three can be configured in recilience4j properties

6. Why MongoDB.
7. How will you maintain load balance in microservice.

## API Gateway

> Explain gate way (API Gateway) function in micro service.
> Pre-filter and post-filter

- `Pre-Filter` When the consumer sends the request to API gateway, API gate way(spring cloud API Gateway) will authenticate and sends the request to the respective micro-service app.
- `Post-Filter` Responce from the micro-service application will be logged inside the API Gate way or adding the headers to the responce by API Gateway. This is handled in Post-Filter.

An API Gateway is a server that acts as an intermediary for requests from clients seeking services from backend servers. It is a fundamental component in a microservices architecture, providing a centralized entry point for managing and routing requests to the appropriate services.

Here's a simple explanation of its uses:

1. **Request Routing**: The API Gateway routes incoming client requests to the appropriate backend service. It knows where each microservice resides and forwards the requests accordingly.

2. **Load Balancing**: It distributes incoming requests evenly across multiple instances of a service, ensuring no single instance is overwhelmed and improving the application's availability and responsiveness.

3. **Security**: The gateway can handle authentication and authorization, ensuring that only authorized clients can access the services. It can also enforce security policies and manage API keys or tokens.

4. **Centralized Logging and Monitoring**: It collects logs and metrics for all requests passing through, providing a centralized point for monitoring and troubleshooting.

5. **Rate Limiting and Throttling**: The API Gateway can control the rate of requests sent to the backend services, protecting them from being overwhelmed by too many requests in a short period (rate limiting) or by regulating the traffic flow (throttling).

6. **Caching**: It can cache responses to frequent requests, reducing the load on backend services and improving response times for clients.

7. **Protocol Translation**: The gateway can translate between different protocols. For example, it can accept HTTP requests from clients and convert them to a different protocol used by backend services.

8. **Transformation and Aggregation**: The API Gateway can transform request and response formats and aggregate multiple service calls into a single request, simplifying the client's interaction with the microservices.

Overall, an API Gateway simplifies client interactions with a microservices-based application by handling various cross-cutting concerns in a centralized and efficient manner.
