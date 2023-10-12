https://www.interviewbit.com/rest-api-interview-questions/
https://www.baeldung.com/spring-mvc-session-attributes

https://www.marcobehler.com/guides/spring-and-spring-boot-versions




## Difference between spring and spring boot?

| Sping                                                            | Spring boot        |                
|------------------------------------------------------------------|--------------------|
| Frame work                                                       | module of spring   |
| provides tools and libraries  <br/> to create customised web app | Spring app project |
| more complex                                                     | less complex       |


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

```
Address address = new Address("High Street", 1000);
Company company = new Company(address);
```

### Bean Configuration

First off, let's decorate the Company class with the @Component annotation:

```
@Component
public class Company 
{
// this body is the same as before
}
```
Here's a configuration class supplying bean metadata to an IoC(Inversion of control) container:

```
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


## Spring Boot Architecture
- ![img_13.png](images/img_13.png)
- ![img_12.png](images/img_12.png)

## Spring Architecture
- The Model encapsulates the application data and in general they will consist of POJO.
- The View is responsible for rendering the model data and in general it generates HTML output that the client's browser can interpret.
- The Controller is responsible for processing user requests and building an appropriate model and passes it to the view for rendering.

## HandlerInterseptor & Filter
https://www.baeldung.com/spring-mvc-handlerinterceptor-vs-filter

## Exception Handling in Spring boot
- https://www.tutorialspoint.com/spring_boot/spring_boot_exception_handling.htm

#### @ControllerAdvice
- to handle the exceptions globally.
#### @ExceptionHandler
 - to handle the specific exceptions and sending the custom responses to the client.

## [Annotations in Spring boot](https://www.javatpoint.com/spring-boot-annotations)
    
 - @EnableAutoConfiguration -
 - @Required - Applied at the bean setter method. This should be populated at configuration time with the required property.
 - @Autowired - provides annotation-based autowiring by providing @Autowired.
 - @Configuration - is a class level annotation.
 - @ComponentScan - @ComponentScan(basePackages = "com.javatpoint")
 - @Bean - is a method level annotation.
 - @Component - 
 - @Controller - 
 - @RestController - 
 - @RequestMapping - 
 - @GetMapping - 
 - @PutMapping - 
 - @PostMapping - 
 - @DeleteMapping - 
 - PatchMapping - 
 - @PathVariable - Extract the values from the URI.
 - @RequestParam - 
 - @RequestHeader - 
 - @Service  - 
 - @Repository - 
 - @EnableAutoConfiguration - 
 - @SpringBootApplication - 
 - @

## @Qualifier, @Primary, @Autowired, @Required
### @Qualifier
https://www.youtube.com/watch?v=2YC5pIXR7e4&ab_channel=SimpleProgramming
https://www.educative.io/courses/guide-spring-5-spring-boot-2/B1WwWk0pw5N#Why-is-@Qualifier-annotation-used?

### @Autowired
https://bushansirgur.in/spring-boot-autowire-annotation-with-example/

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

## @Transaction
https://stackoverflow.com/a/54326437/11962586
- Used to roll back the process.
- If A is sending 100$ to B. If the transactionn is not successful, then  roll back happens.

## Dependency Injection

https://www.javatpoint.com/dependency-injection-in-spring

Dependency Injection (DI) is a design pattern that removes the dependency from the programming code so that it can be easy to manage and test the application.
Dependency Injection makes our programming code loosely coupled.

Spring framework provides two ways to inject dependency

- By Constructor
- By Setter method

## SSO
### ```Single sign on``` with ```Spring security OAuth2```

## LDAP
The most common LDAP use case is providing a central location for accessing and managing directory services. 
LDAP enables organizations to store, manage, and secure information about the organization, its users, and assets–like usernames and passwords.

