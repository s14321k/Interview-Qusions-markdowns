https://www.interviewbit.com/rest-api-interview-questions/
https://www.baeldung.com/spring-mvc-session-attributes
https://www.educative.io/courses/guide-spring-5-spring-boot-2/B1WwWk0pw5N#Why-is-@Qualifier-annotation-used?
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


## 13. Exception Handling in  spring boot
- https://www.tutorialspoint.com/spring_boot/spring_boot_exception_handling.htm

## 14. Exception Handling in Spring boot
#### @ControllerAdvice
 - to handle the exceptions globally.
#### @ExceptionHandler
 - to handle the specific exceptions and sending the custom responses to the client.


