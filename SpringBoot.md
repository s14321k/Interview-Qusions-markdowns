https://www.interviewbit.com/rest-api-interview-questions/
https://www.baeldung.com/spring-mvc-session-attributes

https://www.marcobehler.com/guides/spring-and-spring-boot-versions


<!-- TOC -->
  * [1. Difference between spring and spring boot?](#1-difference-between-spring-and-spring-boot)
  * [2. Mention the need for it.](#2-mention-the-need-for-it)
  * [3. Features of spring boot](#3-features-of-spring-boot)
  * [4. Possible sources of external configuration](#4-possible-sources-of-external-configuration)
  * [5. Attributes in spring](#5-attributes-in-spring)
  * [6. @Component, @Bean, @Configuration](#6-component-bean-configuration)
    * [@Configuration](#configuration)
    * [Class Declaration](#class-declaration)
    * [Collabrator](#collabrator)
    * [Traditional Approach](#traditional-approach)
    * [Bean Configuration](#bean-configuration)
    * [Life cycle of bean](#life-cycle-of-bean)
      * [Configre the life cycle methods by](#configre-the-life-cycle-methods-by)
  * [7. JPARepository vs CRUDRepository](#7-jparepository-vs-crudrepository)
  * [8. How configuration works in Spring](#8-how-configuration-works-in-spring)
  * [9. Is REST API stateless or stateful?](#9-is-rest-api-stateless-or-stateful)
  * [10. Spring Boot Architecture](#10-spring-boot-architecture)
  * [11. Spring Architecture](#11-spring-architecture)
  * [12. HandlerInterseptor & Filter](#12-handlerinterseptor--filter)
  * [13. Exception Handling in Spring boot](#13-exception-handling-in-spring-boot)
      * [@ControllerAdvice](#controlleradvice)
      * [@ExceptionHandler](#exceptionhandler)
  * [14. @Qualifier, @Primary, @Autowired, @Required](#14-qualifier-primary-autowired-required)
    * [@Qualifier](#qualifier)
    * [@Autowired](#autowired)
  * [15. @Controller vs @RestController](#15-controller-vs-restcontroller)
    * [@Controller](#controller)
    * [@RestController](#restcontroller)
  * [16. Dependency Injection](#16-dependency-injection)
  * [17. @Transaction](#17-transaction)
<!-- TOC -->


## 1. Difference between spring and spring boot?

| Sping                                                            | Spring boot        |                
|------------------------------------------------------------------|--------------------|
| Frame work                                                       | module of spring   |
| provides tools and libraries  <br/> to create customised web app | Spring app project |
| more complex                                                     | less complex       |


## 2. Mention the need for it.
- Stand alone app
- Auto dependency
- Embedded  http servers
- Auto configuration
- Reduce developers  effort
- Reducing boiler plate code

## 3. Features of spring boot
- Starter dependency
- Spring initializer
- Spring actuator
- Logging and security

## 4. Possible sources of external configuration
- Application properties
- Command line properties
- Profile specific properties

## 5. Attributes in spring
- @Autowired to create instance of interface class
- @ModelAttribute("location") Location location, ModelMap map)
- @PathVariable

## 6. @Component, @Bean, @Configuration

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


- ![img_17.png](img_17.png)
#### Configre the life cycle methods by
1. XML configuration
2. Spring Interfaces
3. Annotations

https://bushansirgur.in/spring-boot-bean-annotation-with-example/


## 7. JPARepository vs CRUDRepository

| JPA Repository | CRUD Repository                                     |                
|----------------|-----------------------------------------------------|
| JPA also provides some extra methods related to JPA <br/>such as delete records in batch and flushing data directly to a database.   | It provides only CRUD functions like findOne, saves, etc.               |


## 8. How configuration works in Spring
- Spring @Configuration annotation is part of the spring core framework. 
- Spring Configuration annotation indicates that the class has @Bean definition methods. 
- So Spring container can process the class and generate Spring Beans to be used in the application.

  https://www.digitalocean.com/community/tutorials/spring-configuration-annotation


## 9. Is REST API stateless or stateful?
- A. REST APIs are stateless because, rather than relying on the server remembering previous requests, REST applications require each request to contain all of the information necessary for the server to understand it.


## 10. Spring Boot Architecture
- ![img_13.png](img_13.png)
- ![img_12.png](img_12.png)

## 11. Spring Architecture
- The Model encapsulates the application data and in general they will consist of POJO.
- The View is responsible for rendering the model data and in general it generates HTML output that the client's browser can interpret.
- The Controller is responsible for processing user requests and building an appropriate model and passes it to the view for rendering.

## 12. HandlerInterseptor & Filter
https://www.baeldung.com/spring-mvc-handlerinterceptor-vs-filter

## 13. Exception Handling in Spring boot
- https://www.tutorialspoint.com/spring_boot/spring_boot_exception_handling.htm

#### @ControllerAdvice
- to handle the exceptions globally.
#### @ExceptionHandler
 - t`o handle the specific exceptions and sending the custom responses to the client.

## 14. @Qualifier, @Primary, @Autowired, @Required
### @Qualifier
https://www.youtube.com/watch?v=2YC5pIXR7e4&ab_channel=SimpleProgramming
https://www.educative.io/courses/guide-spring-5-spring-boot-2/B1WwWk0pw5N#Why-is-@Qualifier-annotation-used?

### @Autowired
https://bushansirgur.in/spring-boot-autowire-annotation-with-example/

## 15. @Controller vs @RestController
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

![img_18.png](img_18.png)


## 16. Dependency Injection

https://www.javatpoint.com/dependency-injection-in-spring

Dependency Injection (DI) is a design pattern that removes the dependency from the programming code so that it can be easy to manage and test the application.
Dependency Injection makes our programming code loosely coupled.

Spring framework provides two ways to inject dependency

- By Constructor
- By Setter method

## 17. @Transaction
https://stackoverflow.com/a/54326437/11962586
- Used to roll back the process.
- If A is sending 100$ to B. If the transactionn is not successful, then  roll back happens.

## 18. SSO
### ```Single sign on``` with ```Spring security OAuth2```

## LDAP
The most common LDAP use case is providing a central location for accessing and managing directory services. 
LDAP enables organizations to store, manage, and secure information about the organization, its users, and assets–like usernames and passwords.

## @PostConstruct , @PreDestroy
https://stackoverflow.com/q/46668418/11962586

## @Transient
