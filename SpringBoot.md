https://www.interviewbit.com/rest-api-interview-questions/
https://www.baeldung.com/spring-mvc-session-attributes

https://www.marcobehler.com/guides/spring-and-spring-boot-versions

<!-- TOC -->
  * [Top 15 Q&A](#top-15-qa)
  * [Difference between spring and spring boot?](#difference-between-spring-and-spring-boot)
  * [Spring Boot Profiles](#spring-boot-profiles)
  * [Mention the need for it.](#mention-the-need-for-it)
  * [Features of spring boot](#features-of-spring-boot)
  * [Possible sources of external configuration](#possible-sources-of-external-configuration)
  * [Optimizing Spring boot](#optimizing-spring-boot)
  * [Attributes in spring](#attributes-in-spring)
  * [@Component, @Bean, @Configuration](#component-bean-configuration)
    * [@Configuration](#configuration)
    * [Class Declaration](#class-declaration)
    * [Collabrator](#collabrator)
    * [Traditional Approach](#traditional-approach)
    * [Bean Configuration](#bean-configuration)
    * [Life cycle of bean](#life-cycle-of-bean)
      * [Configre the life cycle methods by](#configre-the-life-cycle-methods-by)
  * [JPARepository vs CRUDRepository](#jparepository-vs-crudrepository)
  * [How configuration works in Spring](#how-configuration-works-in-spring)
  * [Is REST API stateless or stateful?](#is-rest-api-stateless-or-stateful)
  * [Spring integration using RestTemplate](#spring-integration-using-resttemplate-)
    * [To Make GET Requests](#to-make-get-requests)
  * [Spring integration using WebClient](#spring-integration-using-webclient)
    * [The `WebClient`](#the-webclient-)
    * [1. Creating a `WebClient` Instance:](#1-creating-a-webclient-instance)
      * [Builder Pattern:](#builder-pattern)
    * [2. Building and Executing Requests:](#2-building-and-executing-requests)
      * [HTTP Methods:](#http-methods)
      * [URI Configuration:](#uri-configuration)
      * [Request Headers:](#request-headers)
      * [Request Body:](#request-body)
    * [3. Retrieving and Handling Responses:](#3-retrieving-and-handling-responses)
      * [Retrieving the Response Body:](#retrieving-the-response-body)
      * [Handling the Response Body:](#handling-the-response-body)
    * [4. Handling Errors:](#4-handling-errors)
      * [Error Handling:](#error-handling)
    * [5. Additional Configurations:](#5-additional-configurations)
      * [Request Configuration:](#request-configuration)
      * [Timeout Configuration:](#timeout-configuration)
    * [6. Building and Executing Requests Asynchronously (Reactive Model):](#6-building-and-executing-requests-asynchronously-reactive-model)
      * [Reactive APIs:](#reactive-apis)
      * [Reactive Stream Support:](#reactive-stream-support)
    * [7. Customization and Extensibility:](#7-customization-and-extensibility)
      * [Customization:](#customization)
    * [Example:](#example)
  * [WebClient vs FiegnClient](#webclient-vs-fiegnclient)
    * [WebClient:](#webclient)
    * [Feign:](#feign)
    * [Choosing Between WebClient and Feign:](#choosing-between-webclient-and-feign)
  * [Spring Boot Architecture](#spring-boot-architecture)
  * [Spring Architecture](#spring-architecture)
  * [HandlerInterseptor & Filter](#handlerinterseptor--filter)
  * [Exception Handling in Spring boot](#exception-handling-in-spring-boot)
      * [@ControllerAdvice](#controlleradvice)
      * [@ExceptionHandler](#exceptionhandler)
  * [Annotations in Spring boot](#annotations-in-spring-boot)
  * [MongoRelated Annotations](#mongorelated-annotations)
  * [Entity or Model Annotations](#entity-or-model-annotations)
  * [@Qualifier, @Primary, @Autowired, @Required](#qualifier-primary-autowired-required)
    * [@Qualifier](#qualifier)
    * [@Primary](#primary)
    * [@Autowired](#autowired)
      * [Autowiring is of 4 types in spring](#autowiring-is-of-4-types-in-spring)
      * [**Field Injection:**](#field-injection)
      * [**Method Injection:**](#method-injection)
      * [**Constructor Injection:**](#constructor-injection)
      * [**Qualifier Annotation:**](#qualifier-annotation)
      * [**Optional Annotation:**](#optional-annotation)
  * [@Controller vs @RestController](#controller-vs-restcontroller)
    * [@Controller](#controller)
    * [@RestController](#restcontroller)
  * [@Transactional](#transactional)
    * [@Transactional propagation isolation](#transactional-propagation-isolation)
      * [@Transactional(propagation = Propagation.REQUIRED)](#transactionalpropagation--propagationrequired)
      * [@Transactional(propagation = Propagation.REQUIRES_NEW)](#transactionalpropagation--propagationrequiresnew)
  * [(Pagiantion using JPA)[https://www.baeldung.com/spring-data-jpa-pagination-sorting]](#pagiantion-using-jpahttpswwwbaeldungcomspring-data-jpa-pagination-sorting)
  * [Dependency Injection](#dependency-injection)
  * [SSO (Single Sign On)](#sso-single-sign-on)
    * [```Single sign on``` with ```Spring security OAuth2``` or ```KeyClock```](#single-sign-on-with-spring-security-oauth2-or-keyclock)
  * [SPRING METHOD SECURITY](#spring-method-security)
  * [AOP (Aspect-Oriented Programming)](#aop-aspect-oriented-programming-)
  * [(Projections and Aggregations)[https://www.javaprogramto.com/2020/05/spring-boot-data-mongodb-projections-aggregations.html]](#projections-and-aggregationshttpswwwjavaprogramtocom202005spring-boot-data-mongodb-projections-aggregationshtml)
  * [Role Based Authorizations](#role-based-authorizations)
  * [GateWay](#gateway)
  * [Authorization Tutorial](#authorization-tutorial)
  * [Load Balancing](#load-balancing)
  * [LDAP (Lightweight Directory Access Protocol)](#ldap-lightweight-directory-access-protocol)
  * [Spring boot vs Spring Webflux](#spring-boot-vs-spring-webflux)
  * [Spring Boot Questions](#spring-boot-questions)
<!-- TOC -->

## [Top 15 Q&A](https://www.java67.com/2018/06/top-15-spring-boot-interview-questions-answers-java-jee-programmers.html)

## Difference between spring and spring boot?

| Sping                                                            | Spring boot        |                
|------------------------------------------------------------------|--------------------|
| Frame work                                                       | module of spring   |
| provides tools and libraries  <br/> to create customised web app | Spring app project |
| more complex                                                     | less complex       |

## [Spring Boot Profiles](https://medium.com/javarevisited/getting-started-with-spring-boot-profiles-1e00159f0542#:~:text=Profiles%20in%20Spring%20Boot%20are,configurations%20for%20your%20production%20environment.)
 - Profiles in Spring Boot are a way to define different sets of configurations for your application depending on the environment it is being run in. For example, you might have one set of configurations for your development environment and another set of configurations for your production environment. These configurations might include things like database settings (i want to use a database for tests and another for dev purposes ), Bean Creation (ex : i want a bean to be created only if I’m in the development process it’s possible with profiles ).
 - Profiles can be defined using property files, YAML files, or even Java code. By default, Spring Boot will use the “default” profile if no other profile is specified. To activate a profile, you can set the “spring.profiles.active” property to the name of the profile you want to use.
 - Create different properties files for each environment
 - `spring.profiles.active=dev`
 - Use meaningful profile names: Use profile names that clearly indicate the environment they are intended for (e.g. “local” ,“dev”, “prod”, “test”, “qa”).

## Mention the need for it.
- Stand alone app
- Auto dependency
- Embedded  http servers
- Auto configuration
- Reduce developers  effort
- Reducing boiler plate code

## Features of spring boot
- Starter dependency
- Spring initializer
- Spring actuator
- Logging and security

## Possible sources of external configuration
- Application properties
- Command line properties
- Profile specific properties

## [Optimizing Spring boot](https://medium.com/@harshgajjar7110/supercharge-your-spring-boot-app-5-proven-tactics-to-optimize-performance-and-boost-speed-3e4309761358)

## Attributes in spring
- @Autowired to create instance of interface class
- @ModelAttribute("location") Location location, ModelMap map)
- @PathVariable

## @Component, @Bean, @Configuration

### @Configuration

https://www.digitalocean.com/community/tutorials/spring-configuration-annotation
- Spring @Configuration annotation is part of the spring core framework. 
- Spring Configuration annotation indicates that the class has @Bean definition methods. 
- So Spring container can process the class and generate Spring Beans to be used in the application
### Class Declaration
```
  public class Company 
  {
      private Address address;
    
      public Company(Address address) {
      this.address = address;
      }

      // getter, setter and other properties
  }
```

### Collabrator
```
public class Address 
{
    private String street;
    private int number;

    public Address(String street, int number) {
        this.street = street;
        this.number = number;
    }

    // getters and setters
}
```

### Traditional Approach

Normally, we create objects with their classes' constructors:

```java
Address address = new Address("High Street", 1000);
Company company = new Company(address);
```

### Bean Configuration

First off, let's decorate the Company class with the @Component annotation:

```java
@Component
public class Company 
{
// this body is the same as before
}
```
Here's a configuration class supplying bean metadata to an IoC(Inversion of control) container:

```java
@Configuration
@ComponentScan(basePackageClasses = Company.class)
public class Config 
{

    @Bean
    public Address getAddress() 
    {
        return new Address("High Street", 1000);
    }
}
```

### Life cycle of bean
- The lifecycle of any object means when & how it is born, how it behaves throughout its life, and when & how it dies. Similarly, the bean life cycle refers to when & how the bean is instantiated, what action it performs until it lives, and when & how it is destroyed. In this article, we will discuss the life cycle of the bean.


- ![img_17.png](images/img_17.png)
#### Configre the life cycle methods by
1. XML configuration
2. Spring Interfaces
3. Annotations

https://bushansirgur.in/spring-boot-bean-annotation-with-example/


## JPARepository vs CRUDRepository

| JPA Repository | CRUD Repository                                     |                
|----------------|-----------------------------------------------------|
| JPA also provides some extra methods related to JPA <br/>such as delete records in batch and flushing data directly to a database.   | It provides only CRUD functions like findOne, saves, etc.               |


## How configuration works in Spring
- Spring @Configuration annotation is part of the spring core framework. 
- Spring Configuration annotation indicates that the class has @Bean definition methods. 
- So Spring container can process the class and generate Spring Beans to be used in the application.

  https://www.digitalocean.com/community/tutorials/spring-configuration-annotation


## Is REST API stateless or stateful?
- A. REST APIs are stateless because, rather than relying on the server remembering previous requests, REST applications require each request to contain all of the information necessary for the server to understand it.

## [Spring integration using RestTemplate](https://howtodoinjava.com/spring-boot2/resttemplate/spring-restful-client-resttemplate-example/) 
- Classes and methods used
### To Make GET Requests
- **getForObject(url, classType)** – retrieve a representation by doing a GET on the URL. The response (if any) is unmarshalled to the given class type and returned.
- **getForEntity(url, responseType)** – retrieve a representation as ResponseEntity by doing a GET on the URL.
- **exchange(url, httpMethod, requestEntity, responseType)** – execute the specified RequestEntity and return the response as ResponseEntity.
- **execute(url, httpMethod, requestCallback, responseExtractor)** – execute the httpMethod to the given URI template, prepare the request with the RequestCallback, and read the response with a ResponseExtractor.

## Spring integration using WebClient
In Spring Boot, you can use the `RestTemplate` or the `WebClient` to make HTTP requests as a client. The `WebClient` is a more modern and flexible choice, introduced in Spring WebFlux, and it supports both synchronous and reactive programming models.

Here's a basic example of using `WebClient` in a Spring Boot application:

1. **Add Dependencies:**
   Make sure you have the necessary dependencies in your `pom.xml` (if you're using Maven) or `build.gradle` (if you're using Gradle).

   For Maven, add the following dependencies:

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-webflux</artifactId>
   </dependency>
   ```

2. **Create a WebClient Bean:**
   In your configuration class or main application class, create a `WebClient` bean.

   ```java
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   import org.springframework.web.reactive.function.client.WebClient;

   @Configuration
   public class WebClientConfig {

       @Bean
       public WebClient.Builder webClientBuilder() {
           return WebClient.builder();
       }
   }
   ```

3. **Use WebClient in a Service or Controller:**
   Inject the `WebClient` bean into your service or controller and use it to make HTTP requests.

   ```java
   import org.springframework.beans.factory.annotation.Autowired;
   import org.springframework.stereotype.Service;
   import org.springframework.web.reactive.function.client.WebClient;
   import reactor.core.publisher.Mono;

   @Service
   public class MyService {

       private final WebClient webClient;

       @Autowired
       public MyService(WebClient.Builder webClientBuilder) {
           this.webClient = webClientBuilder.baseUrl("https://api.example.com").build();
       }

       public String fetchData() {
           // Make a GET request
           String result = webClient.get()
                   .uri("/endpoint")
                   .retrieve()
                   .bodyToMono(String.class)
                   .block();

           return result != null ? result : "Error fetching data";
       }
   }
   ```

   Note that in a real-world application, you would likely handle the response using reactive programming constructs, such as `Mono` and `Flux`, instead of blocking with `block()`.

4. **Configure WebClient Properties:**
   You can customize various properties of the `WebClient` using the `WebClient.Builder`, such as timeouts, connection pool configuration, etc.

   ```java
   this.webClient = webClientBuilder
           .baseUrl("https://api.example.com")
           .defaultHeader("Authorization", "Bearer yourAccessToken")
           .build();
   ```


Certainly! If you want to use `WebClient` without injecting it as a bean, you can create and use it directly within your service or controller without the need for a separate configuration class. Here's an example:

```java
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class MyService {

    private final WebClient webClient;

    public MyService() {
        this.webClient = WebClient.builder()
                .baseUrl("https://api.example.com")
                .build();
    }

    public String fetchData() {
        // Make a GET request
        String result = webClient.get()
                .uri("/endpoint")
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return result != null ? result : "Error fetching data";
    }
}
```

In this example, the `WebClient` instance is created directly in the `MyService` class without the need for a separate configuration class. This approach is suitable for simpler use cases where you don't need to customize the `WebClient` instance extensively or reuse it across multiple classes.

Just like in the previous examples, make sure to replace "https://api.example.com" with the actual base URL of the API you are interacting with and adjust the request configuration based on your requirements.

### The `WebClient` 
- class in Spring WebFlux provides a fluent API for building and consuming HTTP-based services. 
- It is part of the reactive programming support in Spring and can be used in both reactive and non-reactive applications. Here are some of the key methods and implementations provided by `WebClient`:

### 1. Creating a `WebClient` Instance:

#### Builder Pattern:
- **`WebClient.builder()`**: Creates a builder for `WebClient` instances.

### 2. Building and Executing Requests:

#### HTTP Methods:
- **`get()`**: Initiates a GET request.
- **`post()`**: Initiates a POST request.
- **`put()`**: Initiates a PUT request.
- **`delete()`**: Initiates a DELETE request.
- **`head()`**: Initiates a HEAD request.
- **`options()`**: Initiates an OPTIONS request.
- **`patch()`**: Initiates a PATCH request.

#### URI Configuration:
- **`uri(String uriTemplate, Object... uriVariables)`**: Sets the URI template for the request.
- **`uri(URI uri)`**: Sets the URI for the request.

#### Request Headers:
- **`header(String headerName, String... headerValues)`**: Adds a header to the request.

#### Request Body:
- **`body(BodyInserter<?, ? super ClientHttpRequest> bodyInserter)`**: Sets the body of the request.

### 3. Retrieving and Handling Responses:

#### Retrieving the Response Body:
- **`retrieve()`**: Initiates the request and retrieves the response body.

#### Handling the Response Body:
- **`bodyToMono(Class<T> responseBodyType)`**: Converts the response body to a `Mono` of the specified type.
- **`bodyToFlux(Class<T> responseBodyType)`**: Converts the response body to a `Flux` of the specified type.

### 4. Handling Errors:

#### Error Handling:
- **`onStatus(Predicate<HttpStatus> predicate, Function<ClientResponse, Throwable> exceptionFunction)`**: Configures error handling based on the HTTP status.
- **`onStatus(int statusCode, Function<ClientResponse, Throwable> exceptionFunction)`**: Configures error handling based on the HTTP status code.
- **`onStatus(HttpStatus.Series series, Function<ClientResponse, Throwable> exceptionFunction)`**: Configures error handling based on the HTTP status series.

### 5. Additional Configurations:

#### Request Configuration:
- **`exchange()`**: Initiates the request and returns a `ClientResponse` without handling the response body directly.

#### Timeout Configuration:
- **`timeout(Duration timeout)`**: Sets the timeout for the request.

### 6. Building and Executing Requests Asynchronously (Reactive Model):

#### Reactive APIs:
- **`retrieve()`**: Returns a `Mono<ClientResponse>` representing the response.
- **`bodyToMono(Class<T> responseBodyType)`**: Returns a `Mono<T>` representing the response body.

#### Reactive Stream Support:
- **`bodyToFlux(Class<T> responseBodyType)`**: Returns a `Flux<T>` representing the response body as a stream.

### 7. Customization and Extensibility:

#### Customization:
- **`filter(ExchangeFilterFunction filter)`**: Adds a filter to the client, allowing custom modifications to the request and response.

### Example:

```java
WebClient webClient = WebClient.builder()
        .baseUrl("https://api.example.com")
        .defaultHeader("Authorization", "Bearer yourAccessToken")
        .build();

String result = webClient.get()
        .uri("/endpoint")
        .retrieve()
        .bodyToMono(String.class)
        .block();
```

This is a basic overview, and there are more methods and options available. The actual methods you use depend on your specific use case and the requirements of the API you are interacting with. The reactive nature of `WebClient` allows for non-blocking and efficient communication with HTTP-based services in a reactive application.

## WebClient vs FiegnClient
Both WebClient and Feign are client-side HTTP libraries commonly used in Java-based applications, particularly in the context of microservices and web services. They serve similar purposes but have different approaches and use cases. Here's an overview of WebClient and Feign:

### WebClient:

1. **Reactive Programming:**
    - **Programming Model:** WebClient is part of the Spring WebFlux framework and embraces reactive programming. It is designed to work well with reactive streams, making it suitable for building non-blocking and asynchronous applications.

2. **Fluent API:**
    - **Builder Pattern:** WebClient provides a fluent API, allowing you to build and customize HTTP requests using method chaining. This makes it flexible and easy to use.

3. **Reactive Streams Support:**
    - **Mono and Flux:** WebClient returns reactive types such as `Mono` and `Flux` from the Reactor project. This allows for handling responses in a reactive, non-blocking manner.

4. **Spring Ecosystem Integration:**
    - **Spring Integration:** WebClient integrates seamlessly with the broader Spring ecosystem, making it a natural choice for Spring Boot applications. It plays well with other Spring features, such as security and configuration.

5. **Fine-Grained Control:**
    - **Filter Mechanism:** WebClient allows you to apply filters for fine-grained control over the request and response processing. Filters can be used for tasks like logging, authentication, or customizing headers.

6. **Asynchronous and Synchronous:**
    - **Flexibility:** WebClient supports both asynchronous and synchronous communication, making it versatile for different use cases.

### Feign:

1. **Declarative Approach:**
    - **Interface-Based:** Feign follows a declarative approach where you define an interface with annotated methods that correspond to the API endpoints. Feign then generates the necessary HTTP requests based on these annotations.

2. **Spring Cloud Integration:**
    - **Cloud-Native Features:** Feign is often used in conjunction with Spring Cloud for building microservices. It provides features like load balancing and service discovery when used in a cloud-native environment.

3. **Ease of Use:**
    - **Annotation-Driven:** Feign simplifies the client-side HTTP communication by allowing developers to use annotations to describe the HTTP API. This can lead to cleaner and more concise code.

4. **Ribbon Integration:**
    - **Load Balancing:** Feign integrates with Netflix Ribbon for client-side load balancing. This is particularly useful in a microservices architecture where multiple instances of a service may be available.

5. **Fallback Mechanism:**
    - **Circuit Breaker Support:** Feign supports circuit breaker patterns, allowing you to define fallback methods that are invoked when a remote service is unavailable.

6. **Synchronous by Default:**
    - **Blocking Calls:** Feign is synchronous by default, meaning that method calls block until the HTTP response is received. This can simplify the code but may not be suitable for highly concurrent or reactive applications.

### Choosing Between WebClient and Feign:

- **Reactive vs. Declarative:**
    - Use WebClient if you prefer a reactive programming model, especially in Spring Boot applications with a focus on non-blocking, asynchronous communication.
    - Use Feign if you prefer a declarative, annotation-driven approach and are working in a Spring Cloud environment.

- **Flexibility vs. Simplification:**
    - Use WebClient if you need fine-grained control over the HTTP requests, filters, and reactive streams.
    - Use Feign if you prioritize simplicity and ease of use, especially when working in a microservices architecture with Spring Cloud.

- **Integration:**
    - Consider the broader Spring ecosystem and whether you need specific features provided by either WebClient or Feign. For example, if you are using Spring Boot and want seamless integration, WebClient might be a natural choice.

In summary, the choice between WebClient and Feign depends on your project requirements, development preferences, and the broader ecosystem in which your application operates. Both libraries have their strengths, and the decision should be based on factors such as programming model, ease of use, and specific features needed for your use case.

## Spring Boot Architecture
- ![img_13.png](images/img_13.png)
- ![img_12.png](images/img_12.png)

## Spring Architecture
- The Model encapsulates the application data and in general they will consist of POJO.
- The View is responsible for rendering the model data and in general it generates HTML output that the client's browser can interpret.
- The Controller is responsible for processing user requests and building an appropriate model and passes it to the view for rendering.

## [HandlerInterseptor & Filter](https://www.baeldung.com/spring-mvc-handlerinterceptor-vs-filter)

 - [StackOverflow](https://stackoverflow.com/q/35856454)
 - HandlerInterseptor
   - preHandle()
   - postHandle()
   - afterCompletion()
 ```java
public class LogInterceptor implements HandlerInterceptor 
{
    private Logger logger = LoggerFactory.getLogger(LogInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
throws Exception 
    {
        logger.info("preHandle");
        return true;    
    }

   @Override
   public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
   throws Exception 
   {
        logger.info("postHandle");
   }

   @Override
   public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
   throws Exception 
   {
        logger.info("afterCompletion");
   }

}
```

![img.png](images/SpringMvcLifeCycle.png)

## [Exception Handling in Spring boot](https://www.tutorialspoint.com/spring_boot/spring_boot_exception_handling.htm)

#### @ControllerAdvice
- to handle the exceptions globally.
#### @ExceptionHandler
 - to handle the specific exceptions and sending the custom responses to the client.

![img.png](images/AnnotationGlobalException.png)

## [Annotations in Spring boot](https://www.javatpoint.com/spring-boot-annotations)
 - @SpringBootApplication - Combination of
   - @EnableAutoConfiguration -
   - @Configuration - is a class level annotation.
   - @ComponentScan(basePackages = "com.hhs")
 - @Required - Applied at the bean setter method. This should be populated at configuration time with the required property.
 - @Autowired - provides annotation-based autowiring by providing @Autowired.
   - @Qualifier
   - @Primary
 - @Bean - is a method level annotation.
 - @Component - 
   - @Controller - 
   - @RestController - 
   - @Service - 
   - @Repository - 
    - @Query - To write custom quries
    - @Modifing
    - @EntityGraph - ![img.png](images/AnnotationEntityGraph.png)
    - Projection - Creating interface to write particular queries in custom we can use projection.
 - @RequestMapping - 
   - @GetMapping - 
   - @PutMapping - 
   - @PostMapping - 
   - @DeleteMapping - 
   - @PatchMapping -
 - @Aspect - 
 - (@Async)[https://www.baeldung.com/spring-async]
 - @ConditionalOnProperties -
 - (@PropertySource)[https://github.com/ysm-dev/kingbbode.github.io/blob/1a457952e9fa34d834ead979c8e5bd02a25c3975/_posts/seminar/2016/2016-04-30-Spring-Camp-2016.md]

## MongoRelated Annotations
 - @Document(collection ="collection_name")
 - @EnableMongoAuditing
 - @LastModifiedDate

## Entity or Model Annotations
 - @Data - (Equivalent to @Getter @Setter @RequiredArgsConstructor @ToString @EqualsAndHashCode
 - @Entity
 - @Table(name = "")
 - @NoArgsConstructor
 - @AllArgsConstructor
 - @MappedSuperclass   //Acts as a parent class for all other classes id fields
 - @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_one_generator")
 - @SequenceGenerator(name = "", sequenceName = "", allocationSize = 1)
  
  **Annotations to extract the values from the URI**

Spring Boot provides a wide range of parameter binding annotations for various purposes. Here are some other commonly used annotations beyond the ones you mentioned:

In Spring Boot, annotations are used to define various aspects of a method, such as request mapping, parameter binding, and more. 
The annotations you mentioned, `@PathVariable`, `@ModelAttribute`, and `@RequestParam`, are commonly used for handling different parts of an HTTP request. Here's an explanation of each of them:

1. `@PathVariable`: This annotation is used to extract values from the URI (Uniform Resource Identifier) template and bind them to method parameters. It's often used when you want to capture values from the URL, for example, in a RESTful API. Here's an example:

```java
@RequestMapping("/user/{id}")
public String getUser(@PathVariable("id") Long userId) {
    // Your code here
}
```

In this example, the `@PathVariable` annotation captures the `id` from the URL and maps it to the `userId` method parameter.

2. `@ModelAttribute`: This annotation is used to bind a method parameter to a model attribute, which is typically used in the context of the Model-View-Controller (MVC) pattern. It is commonly used to populate form objects and pass data between the controller and the view. Here's an example:

```java
@RequestMapping("/addUser")
public String addUser(@ModelAttribute User user) {
    // Your code here
}
```

In this example, the `@ModelAttribute` annotation binds the `User` object to the form data.

3. `@RequestParam`: This annotation is used to extract values from the request parameters, which are typically part of the query string in a URL. It's commonly used when you want to retrieve values from the query parameters of an HTTP request. Here's an example:

```java
@RequestMapping("/search")
public String searchUsers(@RequestParam("query") String searchQuery) {
    // Your code here
}
```
In this example, the `@RequestParam` annotation retrieves the `query` parameter from the request URL.

4. `@RequestBody`: This annotation is used to bind the request body to a method parameter. It is often used for handling JSON or XML request payloads in RESTful APIs.

```java
@PostMapping("/createUser")
public ResponseEntity<User> createUser(@RequestBody User user) {
    // Your code here
}
```

5. `@RequestHeader`: It's used to extract values from HTTP headers.

```java
@GetMapping("/userAgent")
public String getUserAgent(@RequestHeader("User-Agent") String userAgent) {
    // Your code here
}
```

6. `@CookieValue`: This annotation allows you to extract values from cookies in the request.

```java
@GetMapping("/getCookie")
public String getCookieValue(@CookieValue("sessionId") String sessionId) {
    // Your code here
}
```

7. `@RequestAttribute`: Used to access values stored as request attributes (usually set by an interceptor).

```java
@GetMapping("/processData")
public String processData(@RequestAttribute("someData") String data) {
    // Your code here
}
```

8. `@SessionAttribute`: It's used to bind a session attribute to a method parameter.

```java
@GetMapping("/getSessionData")
public String getSessionData(@SessionAttribute("userId") Long userId) {
    // Your code here
}
```

9. `@PathVariableMap` and `@RequestParamMap`: These annotations allow you to access all path or request parameters as a map.

10. `@ModelAttribute` on method arguments: In addition to annotating method parameters, you can also use `@ModelAttribute` at the method level to add common attributes to the model for all handler methods in the controller.

11. Custom annotations: You can create your custom annotations to encapsulate and abstract common parameter binding patterns.

Spring Boot and Spring MVC provide extensive support for handling various aspects of web requests and responses, so there are many more annotations available. The choice of which annotation to use depends on the specific requirements of your application and the data you need to handle within your controllers.
 
 
 - @EnableAutoConfiguration - 
 - @SpringBootApplication - 
 - @EnableCaching
 - @Cacheable("envProperty") - ![img.png](images/AnnotationCachingSpringBoot.png)
 - @InitBinder - To trim the values passed in @RequestParam and @ModelAttribute


## @Qualifier, @Primary, @Autowired, @Required
### [@Qualifier](https://medium.com/@AlexanderObregon/deciphering-dependency-management-exploring-qualifier-and-primary-annotations-in-spring-3864b2ec4382)
- https://www.youtube.com/watch?v=2YC5pIXR7e4&ab_channel=SimpleProgramming
- https://www.educative.io/courses/guide-spring-5-spring-boot-2/B1WwWk0pw5N#Why-is-@Qualifier-annotation-used?

The ***@Qualifier*** annotation is used to resolve ambiguity by specifying which exact bean should be wired where there are multiple beans of the same type. Let’s illustrate with an example:

```java
public interface GreetingService 
{
    String sayHello();
}

@Service("frenchGreetingService")
public class FrenchGreetingService implements GreetingService 
{
    @Override
    public String sayHello() 
    {
        return "Bonjour le monde!";
    }
}

@Service("englishGreetingService")
public class EnglishGreetingService implements GreetingService 
{
    @Override
    public String sayHello() 
    {
        return "Hello World!";
    }
}

@Component
public class Application 
{
    private final GreetingService greetingService;

    @Autowired
    public Application(@Qualifier("englishGreetingService") GreetingService greetingService) 
    {
        this.greetingService = greetingService;
    }

    public String greet() 
    {
        return greetingService.sayHello();
    }
}
```

### @Primary

The ***@Primary*** annotation indicates that a bean should be given preference when multiple beans match a single autowiring candidate. For instance:

```java
@Service("frenchGreetingService")
public class FrenchGreetingService implements GreetingService {
    @Override
    public String sayHello() {
        return "Bonjour le monde!";
    }
}

@Primary
@Service("englishGreetingService")
public class EnglishGreetingService implements GreetingService {
    @Override
    public String sayHello() {
        return "Hello World!";
    }
}

@Component
public class Application {
    private final GreetingService greetingService;

    @Autowired
    public Application(GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    public String greet() {
        return greetingService.sayHello();
    }
}
```


### [@Autowired](https://bushansirgur.in/spring-boot-autowire-annotation-with-example/)

#### [Autowiring is of 4 types in spring](http://javainsimpleway.com/autowiring-in-spring/)
[List of java interview questions](https://www.java2novice.com/java_interview_questions/spring-autowire-modes/)

1) byName

2) byType

3) constructor

4) autodetect

In Spring Framework, the @Autowired annotation is used for automatic dependency injection. It allows Spring to automatically resolve and inject collaborating beans into your bean. The @Autowired annotation can be applied to fields, methods, and constructors. Here are the different types of @Autowired annotations:

#### **Field Injection:**

```java
@Autowired
private SomeBean someBean;
```
This is the most common usage of @Autowired. It injects the bean directly into a class field.

#### **Method Injection:**

```java
private SomeBean someBean;

@Autowired
public void setSomeBean(SomeBean someBean) {
    this.someBean = someBean;
}
```
You can also apply @Autowired to a setter method. This method will be called by the Spring container after the bean is instantiated, and it will inject the specified bean.

#### **Constructor Injection:**

```java
private final SomeBean someBean;

@Autowired
public MyService(SomeBean someBean) {
    this.someBean = someBean;
}
```
Constructor injection is a recommended practice, and it's considered good design. It ensures that the required dependencies are injected at the time of object creation.

#### **Qualifier Annotation:**

When you have multiple beans of the same type, you can use the @Qualifier annotation along with @Autowired to specify which bean should be injected.

```java
@Autowired
@Qualifier("someSpecificBean")
private SomeBean someBean;
```

#### **Optional Annotation:**

If a bean of the required type is not found, and the dependency is optional, you can use the @Autowired annotation along with the @org.springframework.lang.Nullable annotation or Java 8's Optional.

```java
@Autowired(required = false)
private SomeBean someBean;
```
or

```java
@Autowired
private Optional<SomeBean> someBean;
```
The required attribute is set to true by default, meaning that the dependency must be satisfied. If set to false, Spring will not throw an exception if it can't find a matching bean.

These are the main types of @Autowired annotations you might encounter in a Spring application. They provide flexibility and allow you to express how dependencies should be injected into your Spring beans.


## @Controller vs @RestController
### @Controller
- In @Controller, we need to use @ResponseBody on every handler method.
- In @Controller, we can return a view in Spring Web MVC.
- In @Controller, we need to use @ResponseBody on every handler method.
- Specialization of @Component
- Serves as the roll of controller
- Used in Spring MVC
- The dispatcher scans such annotated classes for mapped methods and detects @RequestMapping annotations.

### @RestController
- In @RestController, we don’t need to use @ResponseBody on every handler method.
- In @RestController, we can not return a view.

![img_18.png](images/img_18.png)

## [@Transactional](https://stackoverflow.com/a/54326437/11962586)
- Used to roll back the process.
- If A is sending 100$ to B. If the transaction is not successful, then  roll back happens.

### [@Transactional propagation isolation](https://www.baeldung.com/spring-transactional-propagation-isolation)

#### @Transactional(propagation = Propagation.REQUIRED)
Required is the default propagation. Spring checks if there is an active transaction, and nothing exists, it creates a new one. Otherwise the business logic appends to the currently active transaction.

#### @Transactional(propagation = Propagation.REQUIRES_NEW)
When the propagation is Requires_New, spring suspends the current transaction if it exists and creates a new one.

## (Pagiantion using JPA)[https://www.baeldung.com/spring-data-jpa-pagination-sorting]
 - Pagination and Sorting using Spring Data JPA
 - If we are getting huge ammount of data, then we do pagination by sending particular 

## [Dependency Injection](https://www.javatpoint.com/dependency-injection-in-spring)

Dependency Injection (DI) is a design pattern that removes the dependency from the programming code so that it can be easy to manage and test the application.
Dependency Injection makes our programming code loosely coupled.

Spring framework provides two ways to inject dependency

- By Constructor
- By Setter method

In Spring Boot, dependency injection is a fundamental concept that helps manage and wire together the components of your application. There are several types of dependency injection you can use in Spring Boot:

1. **Constructor Injection**:
    - Constructor injection is the most common and recommended form of dependency injection in Spring Boot. You inject dependencies through a constructor of a class.
    - Example:
      ```java
      @Service
      public class MyService {
          private final MyRepository repository;
 
          @Autowired
          public MyService(MyRepository repository) {
              this.repository = repository;
          }
      }
      ```

2. **Setter Injection**:
    - Setter injection involves using setter methods to inject dependencies.
    - Example:
      ```java
      @Service
      public class MyService {
          private MyRepository repository;
 
          @Autowired
          public void setRepository(MyRepository repository) {
              this.repository = repository;
          }
      }
      ```

3. **Field Injection**:
    - Field injection directly injects dependencies into fields of a class using annotations.
    - Example:
      ```java
      @Service
      public class MyService {
          @Autowired
          private MyRepository repository;
      }
      ```
    - Field injection is generally discouraged because it makes it harder to test and maintain code.

4. **Method Injection**:
    - Method injection involves injecting dependencies through custom methods.
    - Example:
      ```java
      @Service
      public class MyService {
          private MyRepository repository;
 
          @Autowired
          public void injectRepository(MyRepository repository) {
              this.repository = repository;
          }
      }
      ```

5. **Interface-Based Injection**:
    - Spring Boot can perform dependency injection based on interfaces. When you have multiple implementations of an interface, you can use `@Autowired` or `@Qualifier` to specify which implementation to inject.
    - Example:
      ```java
      @Service
      public class MyService {
          private final MyRepository repository;
 
          @Autowired
          public MyService(MyRepository repository) {
              this.repository = repository;
          }
      }
      ```

6. **Qualifier and Primary**:
    - When you have multiple beans of the same type, you can use `@Qualifier` or `@Primary` annotations to specify which one to inject.
    - Example:
      ```java
      @Service
      public class MyService {
          private final MyRepository primaryRepository;
 
          @Autowired
          public MyService(@Qualifier("primary") MyRepository primaryRepository) {
              this.primaryRepository = primaryRepository;
          }
      }
      ```

Remember to use dependency injection in Spring Boot to achieve loose coupling and to make your code more maintainable, testable, and scalable. The choice of which type of dependency injection to use depends on your specific use case and coding style, but constructor injection is generally considered a best practice.

## SSO (Single Sign On)
### ```Single sign on``` with ```Spring security OAuth2``` or ```KeyClock```
SSO, or Single Sign-On, is an authentication process that allows a user to access multiple applications or services with a single set of credentials (username and password) after the initial login. In other words, it enables users to log in once and gain access to various systems and services without having to enter their credentials repeatedly. SSO is widely used in various IT and web applications to enhance user convenience and security.

Here are some key points about SSO:

1. **Single Authentication:** With SSO, users authenticate themselves once with their username and password, and a trusted system (an identity provider) verifies their identity.

2. **Access to Multiple Services:** After successful authentication, the user can access a variety of services, applications, and resources without the need to provide their credentials again.

3. **Common Use Cases:** SSO is commonly used in organizations to simplify access to multiple internal applications and external services, including email, cloud services, intranet portals, and more.

4. **Identity Providers:** SSO relies on an Identity Provider (IdP) that verifies the user's identity during the initial login. Popular identity providers include Microsoft Azure Active Directory, Okta, and Google Identity Platform.

5. **Federated Identity:** In many SSO implementations, identity providers and service providers (the applications or services the user accesses) establish trust relationships through federated identity protocols like SAML (Security Assertion Markup Language), OAuth, or OpenID Connect.

6. **User Experience:** SSO enhances the user experience by reducing the number of login prompts and passwords to remember, making it more convenient and user-friendly.

7. **Security Benefits:** SSO can improve security by enabling centralized authentication and authorization policies, allowing organizations to enforce strong password policies and multi-factor authentication.

8. **User Provisioning and De-provisioning:** SSO often includes user provisioning and de-provisioning capabilities, allowing administrators to grant or revoke access to services as employees join or leave the organization.

9. **Logging and Auditing:** SSO solutions often provide centralized logging and auditing capabilities, helping organizations monitor and track user access to various systems.

10. **Single Log-Out:** SSO typically includes a "single log-out" feature, allowing users to log out from all services simultaneously with a single action.

11. **Challenges:** While SSO offers many benefits, it can also introduce risks. If a user's SSO credentials are compromised, it potentially grants an attacker access to multiple services. Therefore, strong security measures like multi-factor authentication (MFA) are often used in conjunction with SSO to mitigate such risks.

SSO is a crucial component of modern identity and access management (IAM) systems and is widely adopted in both enterprise and consumer-facing applications to improve user convenience and security.

## [SPRING METHOD SECURITY](https://www.baeldung.com/spring-security-method-security)


## AOP (Aspect-Oriented Programming) 
In Spring Boot it is a powerful technique for managing cross-cutting concerns in your application. Cross-cutting concerns are aspects of your application that affect multiple parts of the codebase, such as logging, security, transaction management, and error handling. AOP allows you to modularize and separate these concerns from your main business logic.

In Spring Boot, you can use AOP to achieve the following:

1. **Logging:** Log method entry/exit, input parameters, and output results.

2. **Security:** Enforce security-related concerns like authentication and authorization.

3. **Caching:** Add caching to methods for better performance.

4. **Exception Handling:** Handle exceptions gracefully and uniformly across the application.

5. **Transaction Management:** Ensure that methods are executed within a transaction context.

To implement AOP in a Spring Boot application, follow these steps:

1. **Add Dependencies:** First, make sure you have the necessary dependencies in your project. In a Spring Boot application, you typically include the `spring-boot-starter-aop` dependency.

2. **Create Aspects:** An aspect is a Java class that defines cross-cutting concerns. You can use annotations or XML configurations to define aspects. For example, you can create a class with the `@Aspect` annotation to specify that it's an aspect.

```java
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logMethodEntry() {
        // Add logging logic here
    }
}
```

3. **Define Pointcuts:** Pointcuts are expressions that define where in your application code an aspect should be applied. In the example above, `execution(* com.example.service.*.*(..))` is a pointcut expression that matches all methods in classes in the `com.example.service` package.

4. **Configure AOP:** In Spring Boot, you can use Java-based configuration or XML-based configuration to enable AOP. With Java-based configuration, you can use the `@EnableAspectJAutoProxy` annotation in a configuration class to enable AOP.

```java
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
public class AopConfig {
    // AOP-related configuration can be added here
}
```

5. **Use Aspects:** Annotate the methods or classes where you want the aspect to be applied with the appropriate AOP annotations. For example, if you want to apply the `LoggingAspect` to a service class, you can use the `@Component` annotation along with the `@Autowire` annotation.

```java
import org.springframework.stereotype.Service;

@Service
public class MyService {
    // Your business logic here
}
```

By doing this, the `LoggingAspect` will log method entry for methods in the `MyService` class.

Spring Boot's AOP capabilities are based on the AspectJ framework, which provides a rich and powerful way to define and use aspects. You can explore various aspects of AOP in Spring Boot to enhance your application's modularity and maintainability.

## (Projections and Aggregations)[https://www.javaprogramto.com/2020/05/spring-boot-data-mongodb-projections-aggregations.html]

## [Role Based Authorizations](https://www.codejava.net/frameworks/spring-boot/spring-boot-security-role-based-authorization-tutorial)

## [GateWay](https://spring.io/guides/gs/gateway/)

## [Authorization Tutorial](https://auth0.com/blog/spring-boot-authorization-tutorial-secure-an-api-java/)

## Load Balancing
Load balancing in a Spring Boot application is a crucial component of building scalable and fault-tolerant systems. Load balancing distributes incoming network traffic across multiple servers to ensure that no single server is overwhelmed and to improve performance, reliability, and availability. There are several ways to achieve load balancing in a Spring Boot application, but one common approach is to use a reverse proxy server or a load balancer in front of your Spring Boot instances. Here are some examples of load balancing with Spring Boot:

1. **Using a Reverse Proxy (e.g., Nginx or Apache):**

   Nginx and Apache are popular reverse proxy servers that can be used for load balancing. In this setup, the reverse proxy distributes incoming requests to multiple Spring Boot instances. Here's a simple Nginx configuration as an example:

   ```nginx
   http {
       upstream spring_boot_servers {
           server localhost:8080;
           server localhost:8081;
           # Add more servers as needed
       }

       server {
           listen 80;

           location / {
               proxy_pass http://spring_boot_servers;
           }
       }
   }
   ```

   In this example, Nginx listens on port 80 and distributes incoming requests to Spring Boot instances running on localhost:8080 and localhost:8081.

2. **Using Spring Cloud with Eureka and Ribbon:**

   Spring Cloud provides tools to build microservices-based applications, including load balancing. Eureka is a service discovery server, and Ribbon is a client-side load balancer. Here's an example of how to set up load balancing using Spring Cloud:

   Add dependencies to your Spring Boot project:

   ```xml
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
   </dependency>
   <dependency>
       <groupId>org.springframework.cloud</groupId>
       <artifactId>spring-cloud-starter-netflix-ribbon</artifactId>
   </dependency>
   ```

   Configure your application to register with Eureka and use Ribbon for load balancing in your `application.properties` or `application.yml`:

   ```properties
   eureka.client.serviceUrl.defaultZone=http://eureka-server-url
   ```

   Use the `@LoadBalanced` annotation with `RestTemplate` to make requests to other services via service names:

   ```java
   @Bean
   @LoadBalanced
   public RestTemplate restTemplate() {
       return new RestTemplate();
   }
   ```

   With this setup, you can make requests to other services using service names, and Ribbon will handle the load balancing for you.

3. **Using Kubernetes:**

   If you're running your Spring Boot application in a Kubernetes cluster, Kubernetes can handle load balancing for you. Define a Kubernetes Service resource, and it will distribute incoming traffic to the pods running your Spring Boot instances.

   Here's an example of a Kubernetes Service YAML configuration:

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: spring-boot-service
   spec:
     selector:
       app: spring-boot-app
     ports:
       - protocol: TCP
         port: 8080
         targetPort: 8080
     type: LoadBalancer
   ```

   In this example, the service named "spring-boot-service" will distribute traffic to pods with the label "app: spring-boot-app" on port 8080.

These are just a few examples of how you can implement load balancing in a Spring Boot application. The choice of load balancing approach depends on your specific infrastructure and requirements.

















---
## LDAP (Lightweight Directory Access Protocol)
The most common LDAP use case is providing a central location for accessing and managing directory services.
LDAP enables organizations to store, manage, and secure information about the organization, its users, and assets–like usernames and passwords.

LDAP stands for Lightweight Directory Access Protocol. It is a widely used protocol for accessing and managing directory information services. LDAP is a standardized protocol, typically running over the TCP/IP network, and it's often used for centralized user and resource management in networked environments. Here are some key points about LDAP:

1. **Directory Services:** LDAP is commonly used for maintaining directory services, which are hierarchical and organized collections of data. These directories store information about various resources and entities in a structured and easily searchable format.

2. **Hierarchical Data Structure:** LDAP directories are organized in a hierarchical tree-like structure, where data is represented as entries. Each entry can have attributes that describe the entity it represents. Entries are identified by a globally unique Distinguished Name (DN).

3. **Common Use Cases:** LDAP is used in various applications and services for user authentication, authorization, address book and contact information storage, email systems, and more. It's especially prevalent in enterprise environments.

4. **LDAP Server:** An LDAP server is responsible for storing and managing the directory information. Popular LDAP server software includes Microsoft Active Directory, OpenLDAP, and Novell eDirectory.

5. **LDAP Clients:** LDAP clients are applications or services that interact with the LDAP server to read, modify, and search directory information. Common LDAP clients include email clients, user authentication systems, and directory browsers.

6. **Protocol Operations:** LDAP defines a set of operations for interacting with the directory server, such as searching for entries, adding or modifying entries, and deleting entries. These operations are carried out using the LDAP protocol.

7. **Security:** LDAP can operate over a secure connection (LDAP over SSL or LDAPS) to protect sensitive data and credentials during transmission. Authentication mechanisms like username and password, as well as digital certificates, can be used to secure the connection.

8. **Schema:** LDAP directories define a schema that specifies the types of data that can be stored in the directory, including which attributes are mandatory or optional. The schema ensures consistency and data integrity.

9. **LDIF:** LDAP Data Interchange Format (LDIF) is a common format for representing LDAP directory entries in a human-readable text format. It's often used for importing and exporting data to and from LDAP directories.

LDAP is a fundamental technology in networked environments, facilitating the centralized management of user accounts, access control, and other directory-related information. It plays a crucial role in many organizations, helping them streamline authentication, authorization, and information storage for a wide range of services and applications.

`Eg`- let's consider an example of how LDAP might be used in an organization for managing user accounts and authentication. In this example, we'll explore how LDAP could be used for a company's internal directory.

**Scenario**: A company named "ABC Corp" wants to implement a centralized directory service to manage user accounts and authentication for its employees across various departments and teams. They decide to use LDAP for this purpose.

**Implementation**:

1. **LDAP Server Setup**: ABC Corp sets up an LDAP server (e.g., using OpenLDAP or Microsoft Active Directory) to store directory information. The LDAP server is hosted on a dedicated server or cloud-based service.

2. **Directory Structure**: The LDAP directory is organized in a hierarchical structure. At the top, there is a root Distinguished Name (DN) like "dc=abc,dc=corp," and below that, entries for departments, teams, and individual users are organized. For example:

- `ou=Sales,ou=Departments,dc=abc,dc=corp`
- `ou=Marketing,ou=Departments,dc=abc,dc=corp`
- `cn=John Doe,ou=Sales,ou=Departments,dc=abc,dc=corp`
- `cn=Jane Smith,ou=Marketing,ou=Departments,dc=abc,dc=corp`

3. **Attributes**: Each user entry has attributes like `cn` (Common Name), `uid` (User ID), `sn` (Surname), `mail` (Email), and `userPassword` (Password). Additionally, there might be attributes for access control, such as `memberOf`, which lists the groups a user belongs to.

4. **Authentication**: When a user logs in to their computer or a company application, the application can query the LDAP server to verify the username and password. If the provided credentials match those in the directory, access is granted.

5. **Group Memberships**: The "memberOf" attribute in user entries is used to define group memberships. For example, users in the Sales department may be members of the "Sales" group. Group memberships can be used for access control, allowing or denying access to specific resources or services based on group affiliation.

6. **Updates and Maintenance**: LDAP allows administrators to easily add, modify, or delete user accounts. When an employee joins or leaves the company or changes departments, their LDAP entry is updated accordingly.

7. **Security**: LDAP communication can be secured using LDAPS (LDAP over SSL) to protect user credentials during transmission. Access control lists (ACLs) can be configured to restrict who can read or modify directory entries.

In summary, LDAP provides ABC Corp with a centralized and structured way to manage user accounts, their attributes, and authentication across the organization. It simplifies user access to company resources and allows for efficient management of user data.

This is just one example of how LDAP can be used. LDAP's flexibility makes it suitable for various directory and authentication needs in different types of organizations.


## [Spring boot vs Spring Webflux](https://medium.com/deno-the-complete-reference/spring-boot-vs-spring-webflux-performance-comparison-for-hello-world-case-386da4e9c418)


## Spring Boot Questions
1. rest api status code.
2. Normal vs stereotype annotation and its uses with example.
3. How will you generate base64UrlEncode(payload)
4. Spring profiles
5. Different ways to autoincrement ID value
6. @OneToMany , @ManyToMany & @JoinColumn
7. Rest-template vs webclient
8. JWT & Auth token generation
9. Spring boot annotations
10. Spring boot Autoconfiguration. Describe in detail.
11. Autowiring in spring boot
12. Application properties vs YML
13. Spring Boot Global Exception Handling
14. How to configure hibernate in your spring boot application?
15. How hibernate retrieve the database values?
16. what about JPA Repository
17. @service vs @Repository
18. scopes of spring bean
19. features of springboot
20. In rest API how to receive in spring boot
21. How to write Junit test cases for service class in spring boot
22. How to connect two database in the properties file?
23. Application.properties have two or more db connections how will you use it in your POJO?
24. what is entity graph?
25. In what way you call the value from the application.properties file in your class file?
26. Hibernate annotation?
27. How do you map the primary key to another table.
28. What annotation is used to store Primary key field from parent table to child table?
29. Why Spring Boot over Spring?
30. What are all annotations that by default comes from spring boot when using different packages.
31. What is Controller advice?
32. Controller vs RestController
33. RestController in detail with example.
34. Spring MVC vs spring boot.
35. Use of @SpringBootApplication?
36. What is IOC and Dependency injection? Explain in detail.
37. Use of @componentScan, how to scan a particular class?
38. What is @Autowired & @Qualifier. Explain in detail.
39. Spring profiles - if there are two application.properties how will you access a particular one?
40. What is Sonar Qube. How will you implement in your application?
41. What is swager and actuater. Expalin how we can implement in application and what are the use?
42. What is ORM why we use that?
43. What is hibernate. How hibernate differes from jpa?
44. What is the purpose of using @entity and @id?
45. write any stored procedure.
46. What are environments you know. How to differentiate that environments?
47. What is aspect
48. how to configure server properties to dev ,qa,prod env
49. how will you generate jwt token and you pass the jwt to backend and which class is processing the token?
50. How will you maintain login details
51. How jwt token gets changed? and how it remains for the particular user?
52. How will you maintain load balance.
53. How will you maintain load balance in cloud?
54. Different ways to create primary key using Spring Data JPA?