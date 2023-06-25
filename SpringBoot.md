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

## 7. JPARepository vs CRUDRepository

| JPA Repository | CRUD Repository                                     |                
|----------------|-----------------------------------------------------|
| JPA also provides some extra methods related to JPA <br/>such as delete records in batch and flushing data directly to a database.   | It provides only CRUD functions like findOne, saves, etc.               |

## 8. How configuration works in Spring
- Spring @Configuration annotation is part of the spring core framework. 
- Spring Configuration annotation indicates that the class has @Bean definition methods. 
- So Spring container can process the class and generate Spring Beans to be used in the application.

  https://www.digitalocean.com/community/tutorials/spring-configuration-annotation

