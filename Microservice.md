## [YouTube](https://www.youtube.com/watch?v=tGGo15irME8&t=2305s&ab_channel=CodeDecode)
## [GIT hub](https://github.com/codedecode25/Microservices_vaccination_citizen)

[YOUTUBE](https://www.youtube.com/@CodeDecode/playlists)
[CircuitBreaker Pattern](https://www.vinsguru.com/circuit-breaker-pattern/)


## 1. [Caching in microservice](https://www.linkedin.com/pulse/exploring-caching-patterns-microservices-architecture-saeed-anabtawi/)

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

2. **Server-Side Load Balancing**:

   Server-side load balancing is typically performed by an intermediary component, such as a reverse proxy or an API gateway. These components route incoming requests to appropriate instances of services based on load balancing algorithms.

    - **Nginx or HAProxy**: You can use reverse proxy servers like Nginx or HAProxy to perform server-side load balancing. They can distribute traffic to multiple instances of your services based on load balancing algorithms like round-robin, least connections, or IP hashing.

    - **API Gateway (e.g., Spring Cloud Gateway or Netflix Zuul)**: API gateways can be used as server-side load balancers. They provide routing and load balancing capabilities. Spring Cloud Gateway, for example, can be used to route requests to various microservices.

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
> Load Balancing



- `Pre-Filter` When the consumer sends the request to API gateway, API gate way(spring cloud API Gateway) will authenticate and sends the request to the respective micro-service app.
- `Post-Filter` Responce from the micro-service application will be logged inside the API Gate way or adding the headers to the responce by API Gateway. This is handled in Post-Filter.