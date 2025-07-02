https://www.interviewbit.com/rest-api-interview-questions/
https://www.interviewbit.com/spring-boot-interview-questions/
https://www.baeldung.com/spring-mvc-session-attributes
https://www.digitalocean.com/community/tutorials/spring-bean-scopes

https://www.marcobehler.com/guides/spring-and-spring-boot-versions

<!-- TOC -->
  * [Top 15 Q&A](#top-15-qa)
* [Annotations in Spring boot](#annotations-in-spring-boot)
    * [🔁 Bean Scopes](#-bean-scopes)
    * [🌱 Bean Lifecycle Overview](#-bean-lifecycle-overview)
    * [🧷 Other Important Annotations](#-other-important-annotations)
  * [🌱 Spring vs Spring Boot](#-spring-vs-spring-boot)
  * [🔧 Spring Boot Profiles](#-spring-boot-profiles)
  * [❓ Why Use Spring Boot?](#-why-use-spring-boot)
  * [✨ Key Features of Spring Boot](#-key-features-of-spring-boot)
  * [⚙️ External Configuration Sources](#-external-configuration-sources)
    * [🔁 1. Singleton Pattern](#-1-singleton-pattern)
    * [🧩 2. Dependency Injection (DI)](#-2-dependency-injection-di)
    * [📦 3. Factory Pattern](#-3-factory-pattern)
    * [🏭 4. Prototype Pattern](#-4-prototype-pattern)
    * [🧵 5. Proxy Pattern (AOP)](#-5-proxy-pattern-aop)
    * [⚙️ 6. Template Method Pattern](#-6-template-method-pattern)
    * [🧠 7. Observer Pattern (Events)](#-7-observer-pattern-events)
    * [🔐 8. Strategy Pattern](#-8-strategy-pattern)
  * [📚 Spring Boot Advanced Concepts](#-spring-boot-advanced-concepts)
    * [🔄 Bean Lifecycle Phases](#-bean-lifecycle-phases)
    * [🔧 Configure Bean Lifecycle Using:](#-configure-bean-lifecycle-using)
    * [1. **Named Queries**](#1-named-queries)
    * [2. **Dynamic Queries (Criteria API)**](#2-dynamic-queries-criteria-api)
    * [3. **Native SQL Queries**](#3-native-sql-queries)
    * [4. **JPQL (Java Persistence Query Language)**](#4-jpql-java-persistence-query-language)
    * [5. **Criteria API**](#5-criteria-api)
    * [1. **Basic Derived Query**](#1-basic-derived-query)
    * [2. **Derived Query with Parameters**](#2-derived-query-with-parameters)
    * [3. **Custom JPQL Query**](#3-custom-jpql-query)
    * [4. **Native SQL Query**](#4-native-sql-query)
    * [5. **Query with Sorting**](#5-query-with-sorting)
  * [💾 Database Transaction Approaches in Java](#-database-transaction-approaches-in-java)
    * [✅ Summary Table](#-summary-table)
* [Spring Configuration & REST API Client Overview](#spring-configuration--rest-api-client-overview)
    * [Common Methods for GET Requests:](#common-methods-for-get-requests)
    * [Basic Setup:](#basic-setup)
    * [Usage in Service:](#usage-in-service)
    * [Or Without Bean Injection:](#or-without-bean-injection)
    * [Key Methods in `WebClient`:](#key-methods-in-webclient)
    * [Example with headers:](#example-with-headers)
    * [When to choose?](#when-to-choose)
    * [Useful Resources:](#useful-resources)
* [Spring MVC Concepts & Exception Handling](#spring-mvc-concepts--exception-handling)
    * [Overview](#overview)
    * [Lifecycle Methods of HandlerInterceptor:](#lifecycle-methods-of-handlerinterceptor)
    * [References:](#references)
    * [Key Annotations:](#key-annotations)
    * [Example usage:](#example-usage)
* [Spring Boot Annotations for Extracting Values from URI and Requests](#spring-boot-annotations-for-extracting-values-from-uri-and-requests)
    * [Common Spring Boot annotations:](#common-spring-boot-annotations)
* [Spring Dependency Injection & Controller Annotations](#spring-dependency-injection--controller-annotations)
      * [Qualifier usage at method level example:](#qualifier-usage-at-method-level-example)
    * [Field Injection](#field-injection)
    * [Setter Injection](#setter-injection)
    * [Constructor Injection (Recommended)](#constructor-injection-recommended)
    * [With @Qualifier for multiple beans:](#with-qualifier-for-multiple-beans)
    * [Optional dependencies:](#optional-dependencies)
* [Spring Transaction Management & Pagination with JPA](#spring-transaction-management--pagination-with-jpa)
    * [Propagation Types](#propagation-types)
    * [Useful Methods](#useful-methods)
* [Dependency Injection (DI) in Spring Boot](#dependency-injection-di-in-spring-boot)
* [JPA Auditing Annotations](#jpa-auditing-annotations)
    * [🔥 In short:](#-in-short)
* [🍪 Cookies in Spring Boot](#-cookies-in-spring-boot)
    * [1.1 Authentication Cookies](#11-authentication-cookies)
    * [1.2 CSRF Protection Cookies](#12-csrf-protection-cookies)
    * [1.3 User Preference / Custom Cookies](#13-user-preference--custom-cookies)
    * [2.1 Using `ResponseCookie`](#21-using-responsecookie)
    * [2.2 Using `HttpServletResponse`](#22-using-httpservletresponse)
    * [2.3 JavaScript (only if not HttpOnly)](#23-javascript-only-if-not-httponly)
* [🌐 CORS and COR](#-cors-and-cor)
    * [Does CORS affect cookies?](#does-cors-affect-cookies)
    * [Spring Boot CORS Example](#spring-boot-cors-example)
    * [JavaScript (Frontend)](#javascript-frontend)
    * [Spring Boot (Backend)](#spring-boot-backend)
    * [When CORS is needed:](#when-cors-is-needed)
  * [✅ Spring Boot Auto-Configuration - Structured Guide](#-spring-boot-auto-configuration---structured-guide)
    * [Common Conditional Variants:](#common-conditional-variants)
    * [Steps to Create:](#steps-to-create)
    * [Notes:](#notes)
    * [Drawbacks:](#drawbacks)
  * [🔄 Load Balancing in Spring Boot](#-load-balancing-in-spring-boot)
    * [✅ Nginx Example Configuration:](#-nginx-example-configuration)
    * [✅ Dependencies:](#-dependencies)
    * [✅ Configuration (application.properties):](#-configuration-applicationproperties)
    * [✅ LoadBalanced `RestTemplate` Bean:](#-loadbalanced-resttemplate-bean)
    * [✅ Example `spring-boot-service.yaml`:](#-example-spring-boot-serviceyaml)
    * [📌 Final Thoughts:](#-final-thoughts)
* [SSO (Single Sign-On)](#sso-single-sign-on)
  * [🔑 What is SSO?](#-what-is-sso)
  * [🔗 Integration with Spring Security OAuth2 or Keycloak](#-integration-with-spring-security-oauth2-or-keycloak)
  * [📚 Spring Method Security Reference](#-spring-method-security-reference)
* [AOP (Aspect-Oriented Programming) in Spring Boot](#aop-aspect-oriented-programming-in-spring-boot)
  * [How to Implement AOP in Spring Boot](#how-to-implement-aop-in-spring-boot)
  * [Summary](#summary)
  * [LDAP (Lightweight Directory Access Protocol)](#ldap-lightweight-directory-access-protocol)
    * [Setup:](#setup)
    * [Directory Structure:](#directory-structure)
    * [Attributes per user:](#attributes-per-user)
    * [Authentication:](#authentication)
    * [Group Membership:](#group-membership)
    * [Updates:](#updates)
    * [Security:](#security)
    * [Summary](#summary-1)
* [🛠️ Spring Boot Commands](#-spring-boot-commands)
  * [🧰 Gradle Commands](#-gradle-commands)
  * [🔧 Maven Commands](#-maven-commands)
  * [☕ Java Execution Commands](#-java-execution-commands)
  * [📡 HTTP Status Codes 🚀](#-http-status-codes-)
  * [Projections and Aggregations](#projections-and-aggregations)
  * [Role Based Authorizations](#role-based-authorizations)
  * [GateWay](#gateway)
  * [Authorization Tutorial](#authorization-tutorial)
  * [Spring boot vs Spring Webflux](#spring-boot-vs-spring-webflux)
* [Spring Boot Questions](#spring-boot-questions)
<!-- TOC -->

## [Top 15 Q&A](https://www.java67.com/2018/06/top-15-spring-boot-interview-questions-answers-java-jee-programmers.html)

- `Projection interface` - Creating interface to write particular queries in custom we can use projection

# [Annotations in Spring boot](https://www.javatpoint.com/spring-boot-annotations)

<details>
<summary><strong>Core Application</strong></summary>

- `@SpringBootApplication` – Combines @Configuration, @EnableAutoConfiguration, @ComponentScan
- `@Configuration` – Declares the class as a source of Spring beans
- `@EnableAutoConfiguration` – Enables Spring Boot’s auto configuration
- `@ComponentScan` – Scans the package for Spring components
</details>

<details>
<summary><strong>🧩 Bean Definitions & Dependency Injection</strong></summary>

- `@Bean` – Declares a method as a Spring bean definition. The return value is managed by the Spring container.

---

### 🔁 Bean Scopes

> Defines how many instances of a bean Spring will create and how they're shared.

- **`singleton`** *(Default)*  
  ➤ Only one shared instance of the bean is maintained per Spring container.  
  ⚠️ Avoid shared mutable state to prevent thread safety issues.

- **`prototype`**  
  ➤ A new bean instance is created every time it is requested.

- **`request`** *(Web only)*  
  ➤ One bean instance per HTTP request.

- **`session`** *(Web only)*  
  ➤ One bean instance per user session.

- **`global-session`** *(Portlet only)*  
  ➤ One bean instance per global HTTP session.

---

### 🌱 Bean Lifecycle Overview

> The bean lifecycle describes how beans are created, managed, and destroyed.

- Instantiation → Property population → Initialization → Use → Destruction
- Lifecycle callbacks like `@PostConstruct`, `@PreDestroy`, or `InitializingBean`/`DisposableBean` interfaces can be used.

![Bean Lifecycle](images/img_17.png)

---

### 🧷 Other Important Annotations

- `@Primary` – Designates a bean as the default when multiple candidates are available.
- `@Autowired` – Automatically injects dependencies by type.
- `@Qualifier("beanName")` – Used with `@Autowired` to resolve ambiguity by name.
- `@Lazy` – Delays the initialization of a bean until it is first requested.
- `@Value("${property.key}")` – Injects values from properties or environment.
- `@Required` *(legacy)* – Ensures the property is populated; throws an exception if not.
- `@Inject` / `@Resource` – JSR-330/250 alternatives to `@Autowired`.
- `@Scope("scopeName")` – Sets the scope of the bean (e.g., `singleton`, `prototype`, etc.)

</details>

<details>
<summary><strong>Stereotype Annotations</strong></summary>

- `@Component` – Generic Spring-managed bean
- `@Controller` – MVC controller component
- `@RestController` – Combines @Controller and @ResponseBody
- `@Service` – Marks a service layer component
- `@Repository` – Marks DAO with exception translation
</details>

<details>
<summary><strong>Web Annotations</strong></summary>

- `@RequestMapping` – Maps HTTP requests
- `@GetMapping` / `@PostMapping` / etc. – Shortcut mappings
- `@PathVariable` – Binds URI template variables
- `@RequestParam` – Binds query params
- `@RequestBody` / `@ResponseBody` – Bind request/response payload
- `@ModelAttribute` – Binds form data to objects
- `@CrossOrigin` – Enables CORS
- `@SessionAttributes` – Persists model in session
</details>

<details>
<summary><strong>JPA & Data Access</strong></summary>

- `@Entity`, `@Table`, `@Id`, `@GeneratedValue`, `@SequenceGenerator`
- `@Column`, `@Transient`, `@Enumerated`, `@Lob`
- `@Query`, `@Modifying`, `@Transactional`
- `@OneToOne`, `@ManyToOne`, `@ManyToMany`, `@JoinColumn`
- `@DynamicInsert`, `@DynamicUpdate` – Hibernate-specific
- `@Embedded`, `@EmbeddedId`, `@Embeddable`
- `@MappedSuperclass`, `@EntityListeners`, `@EntityGraph`
- `@EnableJpaRepositories`, `@EntityScan`
- `@NamedQuery`, `@Version`, `@PersistenceContext`
</details>

<details>
<summary><strong>MongoDB Annotations</strong></summary>

- `@Document` – Maps Java class to MongoDB collection
- `@EnableMongoAuditing` – Enables auditing features
- `@LastModifiedDate` – Sets last modified timestamp automatically
</details>

<details>
<summary><strong>Lombok & Entity Model Helpers</strong></summary>

- `@Data` – Combines getter/setter/constructor annotations
- `@Builder`, `@NoArgsConstructor`, `@AllArgsConstructor`, `@Singular`
- `@CreatedDate`, `@CreatedBy`, `@LastModifiedDate`, `@LastModifiedBy`
</details>

<details>
<summary><strong>AOP & Asynchronous</strong></summary>

- `@Aspect`, `@Before`, `@After`, `@Around`, `@Pointcut`
- `@Async` – Executes method asynchronously
- `@EnableAsync` – Enables asynchronous processing
</details>

<details>
<summary><strong>Scheduling & Events</strong></summary>

- `@Scheduled` – Schedules method execution
- `@EnableScheduling` – Enables scheduling support
- `@EventListener` – Handles application events
</details>

<details>
<summary><strong>Lifecycle Hooks</strong></summary>

- `@PostConstruct` – Method after bean creation
- `@PreDestroy` – Method before bean destruction
</details>

<details>
<summary><strong>Configuration & Property Binding</strong></summary>

- `@ConfigurationProperties` – Binds config to POJO
- `@Value` – Injects properties or SpEL
- `@PropertySource` – Loads external properties
- `@Import` – Imports other config classes
</details>

<details>
<summary><strong>Conditional Bean Registration</strong></summary>

- `@Conditional` – Generic conditional configuration
- `@Profile` – Conditionally loads beans by profile
- Spring Boot Specific:
    - `@ConditionalOnBean`, `@ConditionalOnMissingBean`
    - `@ConditionalOnClass`, `@ConditionalOnMissingClass`
    - `@ConditionalOnProperty`, `@ConditionalOnResource`
    - `@ConditionalOnWebApplication`, `@ConditionalOnNotWebApplication`
    - `@ConditionalOnJava`, `@ConditionalOnExpression`
</details>

<details>
<summary><strong>Caching</strong></summary>

- `@EnableCaching` – Enables cache abstraction
- `@Cacheable` – Caches method results
- `@CacheEvict` – Removes entries from cache
- `@CachePut` – Updates cache without skipping method logic
</details>

Here is your content **restructured in clean, collapsible Markdown format**, with **corrections, clarity, and consistency** added — perfect for documentation, interviews, or personal notes.

---

## 🌱 Spring vs Spring Boot


<details>
<summary><strong>🔍 Difference between Spring and Spring Boot</strong></summary>

| Spring                                                                 | Spring Boot                                     |
|-----------------------------------------------------------------------|--------------------------------------------------|
| A comprehensive Java application framework                            | A module built on top of Spring Framework       |
| Provides tools & libraries to create flexible, customizable web apps  | Provides a ready-to-use structure for Spring apps |
| Requires extensive configuration                                       | Minimal configuration with defaults             |
| Steeper learning curve                                                 | Developer-friendly and quick to start           |
| Manual setup for server, dependencies, etc.                           | Embedded server and auto dependency management  |
</details>


---

## 🔧 Spring Boot Profiles


<details>
<summary><strong>📂 Spring Boot Profiles (Environment-based Configuration)</strong></summary>

- Profiles in Spring Boot let you define **different sets of configurations** for environments like `dev`, `test`, `prod`, etc.
- Common use cases:
  - Use **different databases** for dev and test environments
  - Conditionally create **Beans only in specific profiles**
- Profiles can be declared in:
  - `application.properties` or `application.yml`
  - Java configuration using `@Profile`
- Activate a profile by setting:


* Use **meaningful profile names** like:

    * `local`, `dev`, `test`, `qa`, `prod`
* Spring uses the **`default`** profile if none is specified.

</details>


---

## ❓ Why Use Spring Boot?


<details>
<summary><strong>💡 Need for Spring Boot</strong></summary>

- ✅ **Standalone** Spring applications without external server setup  
- ✅ **Auto dependency management** with starters  
- ✅ **Embedded HTTP servers** (like Tomcat, Jetty)  
- ✅ **Auto configuration** reduces manual setup  
- ✅ **Less boilerplate** code and faster development  
- ✅ **Convention over configuration**  
</details>

---

## ✨ Key Features of Spring Boot

<details>
<summary><strong>🚀 Features of Spring Boot</strong></summary>

- 🔹 **Starter Dependencies**  
  ➤ Bundles common dependencies into simple starters (e.g., `spring-boot-starter-web`)

- 🔹 **Spring Initializer**  
  ➤ Web-based project scaffolding tool to generate Spring Boot structure

- 🔹 **Spring Actuator**  
  ➤ Exposes endpoints for monitoring and managing app (e.g., `/health`, `/metrics`)

- 🔹 **Embedded Logging & Security**  
  ➤ Built-in logging via Logback/SLF4J and default Spring Security setup
</details>

---

## ⚙️ External Configuration Sources

<details>
<summary><strong>📦 Sources of External Configuration</strong></summary>

- `application.properties` / `application.yml`  
- **Profile-specific config files**  
  - `application-dev.properties`  
  - `application-prod.yml`
- **Command line arguments**  
  ➤ `--server.port=8081`
- **Environment variables**
- **JNDI properties**
- **Servlet context parameters**
</details>

---

<details>
<summary><strong>🎯 Common Design Patterns Used in Spring Boot</strong></summary>

### 🔁 1. Singleton Pattern

- **Definition**: Ensures a class has only one instance and provides a global point of access to it.
- **Spring Use**: By default, all Spring beans are singleton scoped.
- **Example**: Service beans (`@Service`), DAO beans (`@Repository`) – only one instance created and reused.
- **Benefit**: Saves memory and ensures consistent state across the application.

---

### 🧩 2. Dependency Injection (DI)

- **Definition**: A design pattern that removes hard-coded dependencies and makes it possible to change them.
- **Spring Use**: Core to Spring. Spring injects dependencies into beans using:
    - Constructor injection
    - Field injection (`@Autowired`)
    - Setter injection
- **Benefit**: Loose coupling, better testability, and flexibility.

---

### 📦 3. Factory Pattern

- **Definition**: Creates objects without exposing the instantiation logic to the client.
- **Spring Use**: `ApplicationContext.getBean()` acts like a factory.
- **Example**: Bean creation via `@Bean` methods or component scanning.
- **Benefit**: Centralizes object creation logic.

---

### 🏭 4. Prototype Pattern

- **Definition**: Creates new object instances every time they are requested.
- **Spring Use**: Achieved using `@Scope("prototype")`.
- **Use case**: When beans are stateful or thread-unsafe and must not be reused.

---

### 🧵 5. Proxy Pattern (AOP)

- **Definition**: Provides a surrogate or placeholder for another object to control access to it.
- **Spring Use**: Used in AOP for method interception (`@Aspect`, `@Around`, etc.).
- **Use case**: Logging, transactions, security.

---

### ⚙️ 6. Template Method Pattern

- **Definition**: Defines the skeleton of an algorithm in a method, deferring some steps to subclasses.
- **Spring Use**: Seen in `JdbcTemplate`, `RestTemplate`, `JpaTemplate`.
- **Benefit**: Avoids duplicate boilerplate logic and allows for customization.

---

### 🧠 7. Observer Pattern (Events)

- **Definition**: One-to-many dependency between objects so that when one object changes state, all dependents are notified.
- **Spring Use**: Application events using `@EventListener`.
- **Example**: Domain events, custom app events like `UserRegisteredEvent`.

---

### 🔐 8. Strategy Pattern

- **Definition**: Enables selecting an algorithm’s behavior at runtime.
- **Spring Use**: Autowire a list of strategy beans and select based on context or config.
- **Example**: Payment processing, file parsers.

</details>

---

## 📚 Spring Boot Advanced Concepts

* 🌱 Bean Lifecycle
* 🔄 JPARepository vs CrudRepository
* 📊 Custom Queries in JPA
* 🧠 Query Types in `@Repository`-annotated interfaces

<details>
<summary><strong>🔁 Bean Lifecycle in Spring</strong></summary>

### 🔄 Bean Lifecycle Phases

- Instantiation
- Dependency Injection
- Custom Initialization
- Ready for Use
- Destruction

### 🔧 Configure Bean Lifecycle Using:

1. **XML Configuration**
2. **Spring Interfaces**
   - `InitializingBean` and `DisposableBean`
3. **Annotations**
   - `@PostConstruct`
   - `@PreDestroy`

👉 [Reference](https://bushansirgur.in/spring-boot-bean-annotation-with-example/)

</details>

---

<details>
<summary><strong>📊 JPARepository vs CrudRepository</strong></summary>

| `JpaRepository`                                                                                                          | `CrudRepository`                                 |
|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Extends `PagingAndSortingRepository` + more features like batch operations, flush, etc.                                 | Provides only basic CRUD operations              |
| Suitable for complex JPA-based applications with paging, sorting, and bulk update support                               | Simple interface for CRUD operations             |
| Includes methods like `flush()`, `saveAndFlush()`, `deleteInBatch()`                                                    | Contains methods like `save()`, `findById()`, etc. |

</details>

---

<details>
<summary><strong>🧠 Java Persistence API (JPA) – Custom Queries</strong></summary>

### 1. **Named Queries**
Predefined JPQL inside entity classes or XML.

```java
@NamedQuery(name = "User.findByAgeGreaterThan", query = "SELECT u FROM User u WHERE u.age > :age")
````

### 2. **Dynamic Queries (Criteria API)**

Programmatically constructed based on conditions.

```java
CriteriaBuilder cb = em.getCriteriaBuilder();
CriteriaQuery<User> q = cb.createQuery(User.class);
Root<User> root = q.from(User.class);
q.select(root).where(cb.gt(root.get("age"), 25));
```

### 3. **Native SQL Queries**

Uses plain SQL, database-specific.

```java
@Query(value = "SELECT * FROM users WHERE age > :age", nativeQuery = true)
```

### 4. **JPQL (Java Persistence Query Language)**

Object-oriented SQL-like language for entities.

```java
@Query("SELECT u FROM User u WHERE u.age > :age")
```

### 5. **Criteria API**

Type-safe, dynamic query builder.

```java
CriteriaBuilder cb = em.getCriteriaBuilder();
...
query.where(cb.gt(root.get("age"), 25));
```

</details>

---

<details>
<summary><strong>🔎 Query Types in @Repository-annotated Interfaces</strong></summary>

### 1. **Basic Derived Query**

```java
List<User> findByLastName(String lastName);
```

### 2. **Derived Query with Parameters**

```java
List<User> findByAgeGreaterThan(int age);
```

### 3. **Custom JPQL Query**

```java
@Query("SELECT u FROM User u WHERE u.age > :age")
List<User> findByAgeGreaterThan(@Param("age") int age);
```

### 4. **Native SQL Query**

```java
@Query(value = "SELECT * FROM users WHERE age > ?1", nativeQuery = true)
List<User> findByAgeGreaterThan(int age);
```

### 5. **Query with Sorting**

```java
List<User> findByAgeGreaterThanOrderByLastNameAsc(int age);
```

</details>
```

---

## 💾 Database Transaction Approaches in Java

<details>
<summary><strong>1️⃣ Spring Data JPA (with JpaRepository)</strong></summary>

- Simplifies data access using repository interfaces.
- Built-in transaction management using `@Transactional`.

```java
@Repository
public interface UserRepository extends JpaRepository<User, Long> {}

@Service
public class UserService {
    @Autowired private UserRepository userRepository;

    @Transactional
    public User saveUser(User user) {
        return userRepository.save(user);
    }
}
```

</details>

---

<details>
<summary><strong>2️⃣ JdbcTemplate</strong></summary>

* Lightweight alternative using raw SQL.
* Simplifies JDBC boilerplate code.

```java
@Repository
public class UserRepository {
    @Autowired private JdbcTemplate jdbcTemplate;

    public void saveUser(User user) {
        jdbcTemplate.update("INSERT INTO users (name, age) VALUES (?, ?)", user.getName(), user.getAge());
    }
}
```

</details>

---

<details>
<summary><strong>3️⃣ EntityManager (JPA)</strong></summary>

* Provides low-level control over entity persistence.

```java
@Repository
public class UserRepository {
    @PersistenceContext private EntityManager entityManager;

    @Transactional
    public void saveUser(User user) {
        entityManager.persist(user);
    }
}
```

</details>

---

<details>
<summary><strong>4️⃣ Criteria API</strong></summary>

* Type-safe, programmatic query building (for complex queries).

```java
public List<User> findUsersWithAgeGreaterThan(int age) {
    CriteriaBuilder cb = entityManager.getCriteriaBuilder();
    CriteriaQuery<User> query = cb.createQuery(User.class);
    Root<User> root = query.from(User.class);
    query.select(root).where(cb.gt(root.get("age"), age));
    return entityManager.createQuery(query).getResultList();
}
```

</details>

---

<details>
<summary><strong>5️⃣ Spring Data JDBC</strong></summary>

* Simplified alternative to JPA for direct data mapping.

```java
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    @Query("SELECT * FROM users WHERE age > :age")
    List<User> findByAgeGreaterThan(int age);
}
```

</details>

---

<details>
<summary><strong>6️⃣ MyBatis</strong></summary>

* SQL Mapper framework using XML or annotations.

```java
@Mapper
public interface UserMapper {
    @Select("SELECT * FROM users WHERE age > #{age}")
    List<User> findByAgeGreaterThan(int age);
}
```

</details>

---

<details>
<summary><strong>7️⃣ Hibernate Session API</strong></summary>

* Offers native access to Hibernate sessions from JPA.

```java
public List<User> findUsersWithAgeGreaterThan(int age) {
    Session session = entityManager.unwrap(Session.class);
    return session.createQuery("FROM User WHERE age > :age", User.class)
                  .setParameter("age", age)
                  .getResultList();
}
```

</details>

---

<details>
<summary><strong>8️⃣ Spring TransactionTemplate</strong></summary>

* Programmatic transaction control when declarative is not enough.

```java
@Repository
public class UserRepository {
    @Autowired private JdbcTemplate jdbcTemplate;
    @Autowired private TransactionTemplate transactionTemplate;

    public void saveUser(User user) {
        transactionTemplate.execute(status -> {
            jdbcTemplate.update("INSERT INTO users (name, age) VALUES (?, ?)", user.getName(), user.getAge());
            return null;
        });
    }
}
```

</details>
```

---

### ✅ Summary Table

| Approach              | Use Case                                      | Spring Support |
| --------------------- | --------------------------------------------- | -------------- |
| `JpaRepository`       | Standard CRUD with abstraction                | ✅              |
| `JdbcTemplate`        | Raw SQL, fast and simple                      | ✅              |
| `EntityManager`       | Fine-grained control with JPA                 | ✅              |
| `Criteria API`        | Type-safe dynamic queries                     | ✅              |
| `Spring Data JDBC`    | Lightweight mapping with simple domain models | ✅              |
| `MyBatis`             | Full SQL control with XML or annotations      | 🔶 (external)  |
| `Hibernate Session`   | Native Hibernate capabilities                 | 🔶 (low-level) |
| `TransactionTemplate` | Programmatic transaction flow                 | ✅              |

---



# Spring Configuration & REST API Client Overview

<details>
<summary><strong>How configuration works in Spring</strong></summary>

- `@Configuration` is a Spring Core annotation indicating the class declares one or more `@Bean` methods.
- It allows the Spring container to process the class and generate Spring-managed beans.
- Helps with modular and reusable configuration.

🔗 [Learn more](https://www.digitalocean.com/community/tutorials/spring-configuration-annotation)
</details>

---

<details>
<summary><strong>Is REST API stateless or stateful?</strong></summary>

- REST APIs are **stateless**.
- Each request must contain all information needed by the server to understand and process it.
- Server does **not** keep any client state between requests.

</details>

---

<details>
<summary><strong>Spring Integration using <code>RestTemplate</code></strong></summary>

### Common Methods for GET Requests:

- `getForObject(url, classType)`  
  Retrieves response and unmarshals it to the specified class type.

- `getForEntity(url, responseType)`  
  Retrieves response wrapped in a `ResponseEntity`.

- `exchange(url, httpMethod, requestEntity, responseType)`  
  Executes HTTP request with specified entity and returns response.

- `execute(url, httpMethod, requestCallback, responseExtractor)`  
  Execute HTTP method with callbacks for request and response handling.

🔗 [Example & details](https://howtodoinjava.com/spring-boot2/resttemplate/spring-restful-client-resttemplate-example/)
</details>

---

<details>
<summary><strong>Spring Integration using <code>WebClient</code></strong></summary>

- Introduced in Spring WebFlux; supports both synchronous and reactive models.
- More modern and flexible than `RestTemplate`.
- Requires adding the dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
````

### Basic Setup:

```java
@Configuration
public class WebClientConfig {
    @Bean
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}
```

### Usage in Service:

```java
@Service
public class MyService {
    private final WebClient webClient;

    public MyService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://api.example.com").build();
    }

    public String fetchData() {
        return webClient.get()
                        .uri("/endpoint")
                        .retrieve()
                        .bodyToMono(String.class)
                        .block(); // Blocking for simplicity; prefer reactive approach
    }
}
```

### Or Without Bean Injection:

```java
@Service
public class MyService {
    private final WebClient webClient = WebClient.builder()
                                                .baseUrl("https://api.example.com")
                                                .build();

    public String fetchData() {
        return webClient.get()
                        .uri("/endpoint")
                        .retrieve()
                        .bodyToMono(String.class)
                        .block();
    }
}
```

### Key Methods in `WebClient`:

* HTTP methods: `get()`, `post()`, `put()`, `delete()`, `patch()`, etc.
* `uri(...)`: set request URI.
* `header(...)`: add headers.
* `body(...)`: set request body.
* `retrieve()`: execute request and retrieve response body.
* `bodyToMono(Class<T>)` / `bodyToFlux(Class<T>)`: map response to reactive types.
* Error handling: `onStatus(...)`
* Additional: filters, timeouts, exchange(), etc.

### Example with headers:

```java
WebClient webClient = WebClient.builder()
        .baseUrl("https://api.example.com")
        .defaultHeader("Authorization", "Bearer yourAccessToken")
        .build();
```

</details>

---

<details>
<summary><strong>WebClient vs Feign Client</strong></summary>

| Aspect                | WebClient                             | Feign Client                                    |
| --------------------- | ------------------------------------- | ----------------------------------------------- |
| **Programming Model** | Reactive & non-reactive               | Declarative interface-based                     |
| **API Style**         | Fluent, builder pattern               | Annotation-driven interfaces                    |
| **Reactive Support**  | Yes, returns `Mono` and `Flux`        | No, synchronous by default                      |
| **Integration**       | Spring WebFlux, reactive apps         | Spring Cloud (microservices, load balancing)    |
| **Use Cases**         | Fine-grained control, async, reactive | Simple, declarative clients in microservices    |
| **Load Balancing**    | Manual or Spring Cloud integration    | Built-in Ribbon integration (with Spring Cloud) |
| **Fallback Support**  | Custom filters and error handling     | Built-in circuit breaker and fallback support   |
| **Complexity**        | More flexible, but more code          | Easier to use, less boilerplate                 |

### When to choose?

* **WebClient:** Reactive apps, fine-grained HTTP control, non-blocking async calls.
* **Feign:** Simpler, declarative clients for microservices, synchronous calls, Spring Cloud integration.

</details>

---

<details>
<summary><strong>RestClient in Spring 6</strong></summary>

* `WebClient` supports synchronous HTTP but requires `spring-boot-starter-webflux`.
* `RestClient` introduced in Spring 6 avoids adding webflux dependency for synchronous calls.
* Useful if you want simple synchronous HTTP calls without reactive dependencies.

🔗 [More on RestClient](https://howtodoinjava.com/spring/spring-restclient/)

---

### Useful Resources:

* [Vinsguru GitHub Samples](https://github.com/vinsguru/vinsguru-blog-code-samples)
* [Udemy Spring RSocket Course](https://www.udemy.com/course/spring-rsocket/)
* [Vinsguru Blog](https://www.vinsguru.com/)
* [Spring Framework Docs - Rest Clients](https://github.com/spring-projects/spring-framework/blob/699f93fed71f7bfd73d94188dce6b849c92927cc/framework-docs/modules/ROOT/pages/integration/rest-clients.adoc)

</details>


---



# Spring MVC Concepts & Exception Handling

---

<details>
<summary><strong>Spring Architecture</strong></summary>

- **Model:** Encapsulates application data, typically as POJOs.
- **View:** Responsible for rendering model data; usually generates HTML output for the client's browser.
- **Controller:** Processes user requests, builds the model, and passes it to the view for rendering.

</details>

---

<details>
<summary><strong>HandlerInterceptor vs Filter</strong></summary>

### Overview

- **Filters** intercept requests **before** they reach the `DispatcherServlet`. Good for coarse-grained tasks like:
```

* Authentication
* Logging and auditing
* Image and data compression
* Any decoupled functionality outside Spring MVC

```

- **HandlerInterceptors** intercept requests **between** `DispatcherServlet` and Controllers, within Spring MVC, providing access to `Handler` and `ModelAndView`. Ideal for fine-grained tasks like:
```

* Cross-cutting concerns such as application logging
* Detailed authorization checks
* Manipulating Spring context or model

````

### Lifecycle Methods of HandlerInterceptor:

```java
public class LogInterceptor implements HandlerInterceptor {

  private Logger logger = LoggerFactory.getLogger(LogInterceptor.class);

  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
          throws Exception {
      logger.info("preHandle");
      return true; // Continue processing
  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
          throws Exception {
      logger.info("postHandle");
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
          throws Exception {
      logger.info("afterCompletion");
  }
}
```

### References:

* [Baeldung: HandlerInterceptor vs Filter](https://www.baeldung.com/spring-mvc-handlerinterceptor-vs-filter)
* [Medium: Filter vs Interceptor in Spring Boot](https://senoritadeveloper.medium.com/filter-vs-interceptor-in-spring-boot-2e49089f682e)
* [StackOverflow Discussion](https://stackoverflow.com/q/35856454)

![Spring MVC Life Cycle](images/SpringMvcLifeCycle.png)

</details>

---

<details>
<summary><strong>Exception Handling in Spring Boot</strong></summary>

### Key Annotations:

* `@ControllerAdvice`
  Used for **global exception handling** across controllers.

* `@ExceptionHandler`
  Used inside `@ControllerAdvice` or controllers to **handle specific exceptions** and send custom responses.

![Exception Handling Annotations](images/AnnotationGlobalException.png)

### Example usage:

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleNotFound(ResourceNotFoundException ex) {
        return new ResponseEntity<>("Resource Not Found", HttpStatus.NOT_FOUND);
    }

    // Other handlers...
}
```

🔗 [TutorialsPoint: Spring Boot Exception Handling](https://www.tutorialspoint.com/spring_boot/spring_boot_exception_handling.htm)

</details>
```

---




# Spring Boot Annotations for Extracting Values from URI and Requests

---

<details>
<summary><strong>@PathVariable</strong></summary>

- Binds a method parameter to a URI template variable.
- Commonly used in RESTful APIs to capture path segments.

```java
@RequestMapping("/user/{id}")
public String getUser(@PathVariable("id") Long userId) {
    // Use userId here
}
````

🔗 [PathVariable vs PathParam](https://stackoverflow.com/a/49472078)

* `@PathVariable` — Spring MVC
* `@PathParam` — JAX-RS

</details>

---

<details>
<summary><strong>@ModelAttribute</strong></summary>

* Binds a method parameter or method return value to a named model attribute.
* Useful for form binding and passing data between controller and view.

```java
@RequestMapping("/addUser")
public String addUser(@ModelAttribute User user) {
    // User populated from form data
}
```

* Can also be used on methods to add common model attributes.

</details>

---

<details>
<summary><strong>@RequestParam</strong></summary>

* Binds a method parameter to a query parameter in the URL.

```java
@RequestMapping("/search")
public String searchUsers(@RequestParam("query") String searchQuery) {
    // Use searchQuery here
}
```

🔗 [RequestParam vs QueryParam](https://stackoverflow.com/a/55721061)

* `@RequestParam` — Spring MVC
* `@QueryParam` — JAX-RS

</details>

---

<details>
<summary><strong>@RequestBody</strong></summary>

* Binds the HTTP request body to a method parameter.
* Commonly used to receive JSON or XML payloads in REST APIs.

```java
@PostMapping("/createUser")
public ResponseEntity<User> createUser(@RequestBody User user) {
    // Use deserialized User object here
}
```

</details>

---

<details>
<summary><strong>@RequestHeader</strong></summary>

* Extracts values from HTTP headers.

```java
@GetMapping("/userAgent")
public String getUserAgent(@RequestHeader("User-Agent") String userAgent) {
    // Use userAgent string here
}
```

</details>

---

<details>
<summary><strong>@CookieValue</strong></summary>

* Extracts values from cookies sent by the client.

```java
@GetMapping("/getCookie")
public String getCookieValue(@CookieValue("sessionId") String sessionId) {
    // Use sessionId here
}
```

</details>

---

<details>
<summary><strong>@RequestAttribute</strong></summary>

* Accesses request attributes usually set by filters or interceptors.

```java
@GetMapping("/processData")
public String processData(@RequestAttribute("someData") String data) {
    // Use data set in request attribute
}
```

</details>

---

<details>
<summary><strong>@SessionAttribute</strong></summary>

* Binds a session attribute to a method parameter.

```java
@GetMapping("/getSessionData")
public String getSessionData(@SessionAttribute("userId") Long userId) {
    // Use userId stored in session
}
```

</details>

---

<details>
<summary><strong>Other useful annotations & notes</strong></summary>

* `@PathVariableMap` and `@RequestParamMap`: Access all path variables or request parameters as a `Map`.
* `@ModelAttribute` on methods: Add common attributes to the model across multiple handlers.
* You can create **custom annotations** to encapsulate common parameter bindings.

### Common Spring Boot annotations:

* `@EnableAutoConfiguration`
* `@SpringBootApplication`
* `@EnableCaching`
* `@Cacheable("envProperty")`
  ![AnnotationCachingSpringBoot](images/AnnotationCachingSpringBoot.png)
* `@InitBinder` — to customize data binding, e.g., trimming strings from `@RequestParam` and `@ModelAttribute`.

</details>

---


# Spring Dependency Injection & Controller Annotations

---

<details>
<summary><strong>@Qualifier</strong></summary>

- Used to resolve ambiguity when multiple beans of the same type exist.
- Specifies exactly which bean to inject.

```java
public interface GreetingService {
    String sayHello();
}

@Service("frenchGreetingService")
public class FrenchGreetingService implements GreetingService {
    @Override
    public String sayHello() {
        return "Bonjour le monde!";
    }
}

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
    public Application(@Qualifier("englishGreetingService") GreetingService greetingService) {
        this.greetingService = greetingService;
    }

    public String greet() {
        return greetingService.sayHello();
    }
}
````

#### Qualifier usage at method level example:

```java
@Bean
@Primary
@ConfigurationProperties(prefix = "spring.datasource")
public DataSourceProperties ds1DataSourceProperties() {
    return new DataSourceProperties();
}

@Bean
@Primary
@ConfigurationProperties(prefix = "spring.datasource.hikari")
public HikariDataSource ds1DataSource(@Qualifier("ds1DataSourceProperties") DataSourceProperties ds1DataSourceProperties) {
    return ds1DataSourceProperties.initializeDataSourceBuilder().type(HikariDataSource.class).build();
}
```

🔗 [Article on @Qualifier](https://medium.com/@AlexanderObregon/deciphering-dependency-management-exploring-qualifier-and-primary-annotations-in-spring-3864b2ec4382)
🎥 [YouTube - SimpleProgramming](https://www.youtube.com/watch?v=2YC5pIXR7e4&ab_channel=SimpleProgramming)
🎥 [YouTube - Educative](https://www.educative.io/courses/guide-spring-5-spring-boot-2/B1WwWk0pw5N#Why-is-@Qualifier-annotation-used?)

</details>

---

<details>
<summary><strong>@Primary</strong></summary>

* Indicates a bean to be preferred when multiple candidates are present.
* Used to avoid having to specify @Qualifier everywhere.

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
    public Application(GreetingService greetingService) { // injects EnglishGreetingService by default
        this.greetingService = greetingService;
    }

    public String greet() {
        return greetingService.sayHello();
    }
}
```

</details>

---

<details>
<summary><strong>@Autowired</strong></summary>

* Used for automatic dependency injection by type.
* Can be used on fields, setters, constructors.

### Field Injection

```java
@Autowired
private SomeBean someBean;
```

### Setter Injection

```java
private SomeBean someBean;

@Autowired
public void setSomeBean(SomeBean someBean) {
    this.someBean = someBean;
}
```

### Constructor Injection (Recommended)

```java
private final SomeBean someBean;

@Autowired
public MyService(SomeBean someBean) {
    this.someBean = someBean;
}
```

### With @Qualifier for multiple beans:

```java
@Autowired
@Qualifier("someSpecificBean")
private SomeBean someBean;
```

### Optional dependencies:

```java
@Autowired(required = false)
private SomeBean someBean;
```

or with Java 8 Optional:

```java
@Autowired
private Optional<SomeBean> someBean;
```

🔗 [Spring Boot Autowire Example](https://bushansirgur.in/spring-boot-autowire-annotation-with-example/)
🔗 [Autowiring types](http://javainsimpleway.com/autowiring-in-spring/)
🔗 [Interview questions on Autowiring](https://www.java2novice.com/java_interview_questions/spring-autowire-modes/)

</details>

---

<details>
<summary><strong>@Controller vs @RestController</strong></summary>

| Aspect               | @Controller                                   | @RestController                                   |
| -------------------- | --------------------------------------------- | ------------------------------------------------- |
| ResponseBody needed? | Yes, must add `@ResponseBody` to each method  | No, implicit on all methods                       |
| Return type          | Can return views (e.g., JSP, Thymeleaf pages) | Returns JSON/XML directly                         |
| Purpose              | Traditional Spring MVC controller             | REST API controller                               |
| Inheritance          | Specialization of `@Component`                | Specialization of `@Controller` + `@ResponseBody` |

![Controller vs RestController](images/img_18.png)

</details>


# Spring Transaction Management & Pagination with JPA

---

<details>
<summary><strong>@EnableTransactionManagement</strong></summary>

- Applied at the **class level** to enable Spring's annotation-driven transaction management.
- Allows Spring to intercept methods annotated with `@Transactional`.
- Manages automatic **start**, **commit**, and **rollback** of database transactions based on method execution.

</details>

---

<details>
<summary><strong>@Transactional</strong></summary>

- Defines transactional boundaries on methods or classes.
- Automatically rolls back if exceptions occur (e.g., in money transfer, if debit from A fails, rollback to prevent inconsistency).

🔗 [StackOverflow explanation](https://stackoverflow.com/a/54326437/11962586)

### Propagation Types

- **`Propagation.REQUIRED`** (default):  
  Joins an existing transaction if available; otherwise, creates a new one.

- **`Propagation.REQUIRES_NEW`**:  
  Suspends the current transaction (if any) and starts a new, independent transaction.

### Useful Methods

- **`saveAndFlush()`**:  
  Saves an entity and immediately flushes changes to the database (committing within the transaction).

🔗 [Baeldung on Propagation & Isolation](https://www.baeldung.com/spring-transactional-propagation-isolation)

</details>

---

<details>
<summary><strong>Pagination using Spring Data JPA</strong></summary>

- Used to handle large datasets efficiently by retrieving data in chunks (pages).
- Supports sorting and paging out-of-the-box.
- Commonly used methods include `findAll(Pageable pageable)`.

Example:

```java
Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("propertyName"));
Page<Entity> page = repository.findAll(pageable);
````

🔗 [Baeldung Pagination & Sorting Guide](https://www.baeldung.com/spring-data-jpa-pagination-sorting)

</details>



# Dependency Injection (DI) in Spring Boot

<details>
<summary><strong>Why use DI instead of <code>new</code>?</strong></summary>

- **Loose coupling:** DI separates object creation from usage, making code modular and easier to maintain.  
- **Inversion of Control (IoC):** Spring manages object creation and wiring, improving flexibility.  
- **Testability:** Enables easy mocking and unit testing.  
- **Scalability & Reusability:** Interfaces and abstractions let you swap implementations easily.  
- **Centralized configuration:** Manage dependencies in one place (annotations/config files).  
- **Less boilerplate:** No need to manually instantiate or wire dependencies.

</details>

<details>
<summary><strong>Types of Dependency Injection</strong></summary>

1. **Constructor Injection** (Recommended)

```java
@Service
public class MyService {
    private final MyRepository repo;

    @Autowired
    public MyService(MyRepository repo) {
        this.repo = repo;
    }
}
```

2. **Setter Injection**

```java
@Service
public class MyService {
    private MyRepository repo;

    @Autowired
    public void setRepo(MyRepository repo) {
        this.repo = repo;
    }
}
```

3. **Field Injection** (Less preferred)

```java
@Service
public class MyService {
    @Autowired
    private MyRepository repo;
}
```

4. **Method Injection**

```java
@Service
public class MyService {
    private MyRepository repo;

    @Autowired
    public void injectRepo(MyRepository repo) {
        this.repo = repo;
    }
}
```

</details>

<details>
<summary><strong>Handling Multiple Beans</strong></summary>

* Use **@Qualifier** to specify which bean to inject if multiple implementations exist:

```java
@Autowired
public MyService(@Qualifier("primaryRepo") MyRepository repo) {
    this.repo = repo;
}
```

* Use **@Primary** on a bean to make it the default injection candidate.

</details>

<details>
<summary><strong>Pros & Cons of Injection Types</strong></summary>

| Injection Type     | Pros                                     | Cons                               |
| ------------------ | ---------------------------------------- | ---------------------------------- |
| Constructor        | Ensures required dependencies; immutable | Can lead to long constructors      |
| Setter             | Flexible; good for optional dependencies | Can cause inconsistent states      |
| Field (@Autowired) | Concise and easy                         | Harder to test; hides dependencies |

</details>

<details>
<summary><strong>Summary</strong></summary>

Constructor injection is best practice for mandatory dependencies and promotes immutability.
Setter injection suits optional dependencies.
Avoid field injection for better maintainability and testability.

</details>

---

For more details:
[JavaTpoint - Dependency Injection in Spring](https://www.javatpoint.com/dependency-injection-in-spring)

---


# JPA Auditing Annotations

Excellent question — you’re thinking like a pro now!  
Let’s dive deep and clear things up:

Spring Data JPA has **4 main auditing annotations**, supported by a few key components. Here’s a clear summary 👇

---

<details>
<summary><strong>Setup Notes</strong></summary>

- Place `@EntityListeners(AuditingEntityListener.class)` on your entity class to enable auditing.
- Place `@EnableJpaAuditing` on your main Spring Boot application class (with `@SpringBootApplication`).

</details>

---

<details>
<summary><strong>Spring Data JPA Auditing Annotations — Core Table</strong></summary>

| Annotation          | Purpose                         | When Set               | Typical Field Name   |
|---------------------|---------------------------------|------------------------|---------------------|
| `@CreatedDate`       | Stores creation timestamp        | On **INSERT**          | `created_at`        |
| `@CreatedBy`         | Stores creator user              | On **INSERT**          | `created_by`        |
| `@LastModifiedDate`  | Stores last modification time    | On **UPDATE**          | `updated_at`        |
| `@LastModifiedBy`    | Stores last modifier user        | On **UPDATE**          | `updated_by`        |

These 4 annotations are the core of Spring Data JPA auditing.

</details>

---

<details>
<summary><strong>Supporting Components You Should Know</strong></summary>

| Component                      | Purpose                                    |
|-------------------------------|--------------------------------------------|
| `@EnableJpaAuditing`           | Enables auditing support globally          |
| `AuditingEntityListener`       | Listens to entity lifecycle events for auditing |
| `AuditorAware<T>`              | Provides current user information (for `@CreatedBy` and `@LastModifiedBy`) |
| `@EntityListeners(...)`        | Activates entity lifecycle hooks           |

</details>

---

<details>
<summary><strong>Descriptions for Each Auditing Annotation</strong></summary>

| Annotation          | Description                                         |
|---------------------|-----------------------------------------------------|
| `@CreatedDate`       | Auto sets creation timestamp (`LocalDateTime`, etc.) when entity is inserted |
| `@CreatedBy`         | Auto sets user who created entity, via `AuditorAware` implementation |
| `@LastModifiedDate`  | Auto updates timestamp when entity is updated       |
| `@LastModifiedBy`    | Auto updates user who last modified entity          |

</details>

---

<details>
<summary><strong>Lifecycle of Auditing Fields</strong></summary>

| Event                        | Auditing Fields Updated                  |
|------------------------------|------------------------------------------|
| New entity insertion (`save()`) | `@CreatedDate`, `@CreatedBy`              |
| Existing entity update (`save()`) | `@LastModifiedDate`, `@LastModifiedBy`     |

</details>

---

<details>
<summary><strong>Bonus: Beyond Core Annotations (Extra Goodies)</strong></summary>

| Concept                     | Description                                  | Example / Use Case                      |
|-----------------------------|----------------------------------------------|---------------------------------------|
| `@PrePersist`, `@PreUpdate` | JPA lifecycle callbacks for manual auditing | Manually set timestamps if needed     |
| Database Triggers           | DB-level auditing (e.g., MySQL `ON UPDATE`)  | DB auto manages `created_at`, `updated_at` fields |
| Hibernate Interceptors      | Global audit logging via Hibernate hooks      | Capture changes across all entities   |

</details>

---

<details>
<summary><strong>Real-World Recommendations</strong></summary>

- Use **Spring Data Auditing** annotations if you use JPA and want simple audit fields.
- For complex audit logs (audit history tables), consider:
    - Entity listeners
    - Hibernate Envers (full audit history)
    - Custom audit tables

</details>

---

<details>
<summary><strong>Pro Tip: Combine Auditing with DB Defaults</strong></summary>

- Use Spring auditing **together** with DB defaults like `CURRENT_TIMESTAMP`.
- This ensures audit fields get populated even if app crashes or misses the update.

</details>

---

<details>
<summary><strong>Summary Table: Auditing Ecosystem</strong></summary>

| Item                     | Description                          |
|--------------------------|------------------------------------|
| `@CreatedDate`            | Auto-set creation timestamp        |
| `@CreatedBy`              | Auto-set creator user              |
| `@LastModifiedDate`       | Auto-set update timestamp          |
| `@LastModifiedBy`         | Auto-set last modifier user        |
| `@EnableJpaAuditing`      | Enables auditing globally          |
| `AuditorAware<T>`         | Supplies current user info          |
| `AuditingEntityListener`  | Listener to populate audit fields  |

</details>

---

### 🔥 In short:

- The **4 main annotations** (`@CreatedDate`, `@CreatedBy`, `@LastModifiedDate`, `@LastModifiedBy`) do the heavy lifting.
- They’re powered by `@EnableJpaAuditing`, `AuditorAware`, and entity listeners.
- For full audit history, consider Hibernate Envers or DB triggers.

---

# 🍪 Cookies in Spring Boot

<details>
<summary><strong>1. What Cookies Should Be Sent from a Spring Boot Application to the Frontend?</strong></summary>

Cookies are commonly used for **authentication**, **security**, **session management**, and **user preferences**.

### 1.1 Authentication Cookies
- `JSESSIONID`: Session-based authentication.
- `SESSION`: From Spring Session (e.g., Redis, JDBC).
- JWT Cookies:
  - `access_token`: Stores JWT access token.
  - `refresh_token`: Stores JWT refresh token.

```java
ResponseCookie jwtCookie = ResponseCookie.from("access_token", jwtToken)
    .httpOnly(true)
    .secure(true)
    .path("/")
    .maxAge(Duration.ofMinutes(30))
    .sameSite("Strict")
    .build();
response.addHeader(HttpHeaders.SET_COOKIE, jwtCookie.toString());
````

---

### 1.2 CSRF Protection Cookies

* `XSRF-TOKEN`: Used by frontend in state-changing requests.

```java
ResponseCookie csrfCookie = ResponseCookie.from("XSRF-TOKEN", csrfToken)
    .httpOnly(false)
    .secure(true)
    .path("/")
    .sameSite("Strict")
    .build();
response.addHeader(HttpHeaders.SET_COOKIE, csrfCookie.toString());
```

---

### 1.3 User Preference / Custom Cookies

* `theme`: e.g., "dark" or "light".
* `language`: e.g., "en", "fr".

```java
ResponseCookie themeCookie = ResponseCookie.from("theme", "dark")
    .httpOnly(false)
    .secure(false)
    .path("/")
    .maxAge(Duration.ofDays(30))
    .sameSite("Lax")
    .build();
response.addHeader(HttpHeaders.SET_COOKIE, themeCookie.toString());
```

</details>

---

<details>
<summary><strong>2. How to Delete a Frontend Cookie from a Spring Boot Application?</strong></summary>

To delete a cookie:

* Set the **same name** with `""` as value.
* Set `maxAge = 0`.

### 2.1 Using `ResponseCookie`

```java
ResponseCookie deleteCookie = ResponseCookie.from("cookieName", "")
    .path("/")
    .httpOnly(true)
    .secure(true)
    .sameSite("Strict")
    .maxAge(0)
    .build();
response.addHeader(HttpHeaders.SET_COOKIE, deleteCookie.toString());
```

### 2.2 Using `HttpServletResponse`

```java
Cookie cookie = new Cookie("cookieName", "");
cookie.setPath("/");
cookie.setHttpOnly(true);
cookie.setSecure(true);
cookie.setMaxAge(0);
response.addCookie(cookie);
```

### 2.3 JavaScript (only if not HttpOnly)

```js
document.cookie = "cookieName=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
```

</details>

---

<details>
<summary><strong>3. Summary Table of Important Cookies</strong></summary>

| Cookie Name     | Purpose             | HttpOnly | Secure | SameSite | Frontend Readable |
| --------------- | ------------------- | -------- | ------ | -------- | ----------------- |
| `JSESSIONID`    | Session ID          | ✅        | ✅      | Lax      | ❌                 |
| `access_token`  | JWT access token    | ✅        | ✅      | Strict   | ❌                 |
| `refresh_token` | JWT refresh token   | ✅        | ✅      | Strict   | ❌                 |
| `XSRF-TOKEN`    | CSRF token          | ❌        | ✅      | Lax      | ✅                 |
| `theme`         | UI preference       | ❌        | ❌      | Lax      | ✅                 |
| `language`      | Language preference | ❌        | ❌      | Lax      | ✅                 |

</details>

---

<details>
<summary><strong>4. Abbreviations and Their Meanings</strong></summary>

| Abbreviation | Meaning                      |
| ------------ | ---------------------------- |
| CSRF         | Cross-Site Request Forgery   |
| JWT          | JSON Web Token               |
| XSRF         | Spring Security’s CSRF token |
| HTTP         | HyperText Transfer Protocol  |
| HTTPS        | Secure HTTP                  |
| XSS          | Cross-Site Scripting         |

</details>

---

<details>
<summary><strong>5. Conclusion (Cookie Handling)</strong></summary>

* Use **HttpOnly, Secure, and SameSite Strict** for auth cookies.
* **CSRF tokens** should be readable by the frontend.
* **User preferences** don’t require HttpOnly or Secure.
* Deleting cookies = send back with `maxAge=0`.

</details>

---

# 🌐 CORS and COR

<details>
<summary><strong>1. What is CORS?</strong></summary>

**Cross-Origin Resource Sharing (CORS)** is a browser security feature controlling cross-domain requests.

### Does CORS affect cookies?

✅ Yes. To send cookies:

* `Access-Control-Allow-Credentials: true`
* Avoid `*` in `Access-Control-Allow-Origin`.

### Spring Boot CORS Example

```java
@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(List.of("https://frontend.com"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        config.setAllowCredentials(true);
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

</details>

---

<details>
<summary><strong>2. What is COR (Cross-Origin Requests)?</strong></summary>

COR refers to requests from a frontend on one domain to a backend on another.

* Browsers block COR cookies **without CORS**.
* You need:

    * `Access-Control-Allow-Credentials: true`
    * No wildcard `*` in allowed origins.

</details>

---

<details>
<summary><strong>3. How to Send Cookies in COR Requests?</strong></summary>

### JavaScript (Frontend)

```js
fetch("https://api.backend.com/data", {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
});
```

### Spring Boot (Backend)

Ensure:

* `setAllowCredentials(true)`
* No `*` in allowed origins
* Proper cookie flags (`Secure`, `SameSite`)

</details>

---

<details>
<summary><strong>4. Do Cookies Themselves Include CORS?</strong></summary>

No — **CORS is not part of a cookie**. But browsers **enforce CORS** to decide if cookies should be sent.

### When CORS is needed:

* ✅ Yes: Frontend and backend on **different domains**.
* ❌ No: Same domain/subdomain.

</details>

---

<details>
<summary><strong>5. Summary Table: CORS vs Cookies</strong></summary>

| Feature                          | Affects Cookies? | Is It Necessary?                       |
| -------------------------------- | ---------------- | -------------------------------------- |
| CORS                             | ✅ Yes            | ✅ If frontend/backend differ in origin |
| COR                              | ✅ Yes            | ✅ If cookies are used                  |
| Access-Control-Allow-Credentials | ✅ Yes            | ✅ For cookie transmission              |
| SameSite Cookie Attribute        | ✅ Yes            | ✅ For security                         |

</details>

---

<details>
<summary><strong>6. Final Thoughts</strong></summary>

* CORS must be correctly configured to allow cookies in cross-origin requests.
* Use `credentials: 'include'` on frontend requests.
* Avoid `*` origin wildcards if sending cookies.
* Same domain? You likely don’t need CORS!

</details>




Here's your **Spring Boot Auto-Configuration** guide, fully **refactored into collapsible Markdown sections** using `<details>` tags for clarity and expand/collapse behavior:

---

## ✅ Spring Boot Auto-Configuration - Structured Guide

<details>
<summary><strong>🔹 1. Conditional Configuration with <code>@Conditional</code></strong></summary>

- Introduced in **Spring 4**
- Allows **conditional bean registration** in the Spring container
- Powered by the `Condition` interface

### Common Conditional Variants:

| Annotation                     | Condition                           |
|-------------------------------|-------------------------------------|
| `@ConditionalOnBean`           | If a specific bean exists           |
| `@ConditionalOnMissingBean`    | If a bean is missing                |
| `@ConditionalOnClass`          | If a class exists on the classpath  |
| `@ConditionalOnProperty`       | If an environment property is set   |
| `@ConditionalOnResource`       | If a specific resource is available |
| `@ConditionalOnWebApplication` | If the application is a web app     |
| `@Profile`                     | Implemented using `@Conditional`    |

</details>

---

<details>
<summary><strong>🔹 2. Auto-Configuration Evaluation Order</strong></summary>

Spring Boot follows an internal evaluation order when applying auto-configuration:

1. **Servlet Detection** – Checks if servlet-related components exist
2. **Spring MVC Check** – Looks for Spring MVC setup
3. **Spring Security** – Checks for presence of security classes
4. **DataSource Check** – Determines if a `DataSource` bean is present
5. **JPA/Hibernate** – Validates JPA-related conditions
6. **AOP** – Verifies if Aspect-Oriented Programming is enabled

</details>

---

<details>
<summary><strong>🔹 3. Creating Custom Auto-Configuration Modules</strong></summary>

### Steps to Create:

1. Create a standard Spring `@Configuration` class
2. Annotate with conditionals like `@ConditionalOnProperty`, `@ConditionalOnClass`, etc.
3. Register in `resources/META-INF/spring.factories`

```properties
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.example.MyAutoConfiguration
````

### Notes:

* Spring Boot scans all `spring.factories` across JARs
* These configurations are auto-loaded at startup

### Drawbacks:

* Hidden from view unless explicitly checked
* Difficult to test/debug what is actually applied

</details>

---

<details>
<summary><strong>🔹 4. <code>.properties</code> vs <code>.yml</code> Configuration Files</strong></summary>

* Both formats are **functionally equivalent**
* Use either for defining Spring Boot config
* Choose based on:

    * **Readability**
    * **Team preference**
    * **Tooling or CI compatibility**

</details>

---

<details>
<summary><strong>📊 5. Auto-Configuration Flow Diagram</strong></summary>

```plaintext
              ┌──────────────────────────────┐
              │  @SpringBootApplication      │
              │ (Entry Point of Application) │
              └────────────┬─────────────────┘
                           │
      ┌────────────────────┼────────────────────┐
      │                    │                    │
┌──────────────┐   ┌────────────────┐   ┌─────────────────────┐
│ @Configuration│  │@ComponentScan  │   │@EnableAutoConfiguration│
└──────────────┘   └────────────────┘   └─────────────────────┘
                                           │
                             ┌─────────────▼───────────────┐
                             │ META-INF/spring.factories   │
                             └─────────────┬───────────────┘
                                           │
                                ┌──────────▼─────────┐
                                │ Classpath Scanning │
                                └──────────┬─────────┘
                                           │
                         ┌─────────────────▼─────────────────┐
                         │ Conditional Evaluation Begins     │
                         └─────────────────┬─────────────────┘
                                           │
       ┌──────────────────────────────────────────────────────────────┐
       │ Evaluate Conditions:                                          │
       │ - OnBean, OnMissingBean, OnClass, OnProperty, OnResource...  │
       └──────────────────────────────────────────────────────────────┘
                                           │
                                ┌──────────▼─────────┐
                                │ Bean Registered?   │
                                └──────────┬─────────┘
                                           │
                                Yes ───────┘───── No (Ignored)
```

</details>

---


## 🔄 Load Balancing in Spring Boot

Load balancing in a Spring Boot application ensures high availability, fault tolerance, and efficient traffic distribution. Below are several strategies commonly used:

---

<details>
<summary><strong>🔹 1. Using a Reverse Proxy (Nginx / Apache)</strong></summary>

**Nginx and Apache** are popular tools to route traffic across multiple Spring Boot instances.

### ✅ Nginx Example Configuration:

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
````

* Nginx listens on port 80
* Routes requests to Spring Boot apps on ports `8080`, `8081`, etc.

</details>

---

<details>
<summary><strong>🔹 2. Using Spring Cloud (Eureka + Ribbon)</strong></summary>

Spring Cloud provides **Eureka** (Service Registry) and **Ribbon** (Client-side Load Balancer).

### ✅ Dependencies:

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

### ✅ Configuration (application.properties):

```properties
eureka.client.serviceUrl.defaultZone=http://eureka-server-url
```

### ✅ LoadBalanced `RestTemplate` Bean:

```java
@Bean
@LoadBalanced
public RestTemplate restTemplate() {
    return new RestTemplate();
}
```

* Use service names instead of hard-coded URLs
* Ribbon performs client-side load balancing

</details>

---

<details>
<summary><strong>🔹 3. Using Kubernetes Service</strong></summary>

Kubernetes provides **built-in load balancing** using the Service abstraction.

### ✅ Example `spring-boot-service.yaml`:

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

* Routes requests to all pods matching `app: spring-boot-app`
* Exposes service on port `8080`
* Load-balanced by Kubernetes behind the scenes

</details>

---

### 📌 Final Thoughts:

* Choose your load balancing strategy based on **deployment environment**:

    * ✅ **Nginx/Apache** – Best for on-prem or standalone deployments
    * ✅ **Spring Cloud** – Ideal for microservices with service discovery
    * ✅ **Kubernetes** – Preferred in containerized, cloud-native deployments


    
# SSO (Single Sign-On)

## 🔑 What is SSO?

Single Sign-On (SSO) is an authentication process allowing a user to access multiple applications or services with one set of credentials after an initial login. It improves convenience and security by eliminating repeated login prompts.

<details>
<summary><strong>Key Points About SSO</strong></summary>

1. **Single Authentication:** User authenticates once via an Identity Provider (IdP).
2. **Access to Multiple Services:** Enables seamless access without re-entering credentials.
3. **Common Use Cases:** Internal apps, email, cloud services, intranet portals.
4. **Identity Providers:** Examples include Microsoft Azure AD, Okta, Google Identity Platform.
5. **Federated Identity:** Uses protocols like SAML, OAuth, OpenID Connect for trust between IdP and service providers.
6. **User Experience:** Simplifies login, reduces password fatigue.
7. **Security Benefits:** Centralized authentication policies, enables MFA.
8. **User Provisioning:** Allows automated access control for employees joining/leaving.
9. **Logging & Auditing:** Centralized monitoring of access.
10. **Single Log-Out:** Logs out from all services simultaneously.
11. **Challenges:** Credential compromise risks mitigated by MFA and strong policies.

</details>

---

## 🔗 Integration with Spring Security OAuth2 or Keycloak

- Spring Security OAuth2 and Keycloak are popular tools for implementing SSO in Spring Boot.
- They act as the Identity Provider or integrate with one.
- Support OAuth2 and OpenID Connect protocols.

---

## 📚 [Spring Method Security Reference](https://www.baeldung.com/spring-security-method-security)

---

# AOP (Aspect-Oriented Programming) in Spring Boot

AOP is a technique to modularize cross-cutting concerns like logging, security, transactions, and error handling — aspects that affect multiple parts of your app.

---

<details>
<summary><strong>Why Use AOP?</strong></summary>

- **Logging:** Track method entry, exit, and parameters.
- **Security:** Enforce authentication and authorization rules.
- **Caching:** Improve performance by caching method results.
- **Exception Handling:** Centralize error handling logic.
- **Transaction Management:** Manage transactional boundaries declaratively.

</details>

---

## How to Implement AOP in Spring Boot

<details>
<summary><strong>Step-by-step Guide</strong></summary>

1. **Add Dependency**  
   Include the Spring Boot AOP starter in your `pom.xml` or `build.gradle`:

    ```xml
    <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>
    ```

2. **Create an Aspect Class**
   Use the `@Aspect` annotation and define advice methods:

   ```java
   import org.aspectj.lang.annotation.Aspect;
   import org.aspectj.lang.annotation.Before;

   @Aspect
   public class LoggingAspect {
       @Before("execution(* com.example.service.*.*(..))")
       public void logMethodEntry() {
           // Logging logic here
       }
   }
   ```

3. **Define Pointcuts**
   The expression `"execution(* com.example.service.*.*(..))"` targets all methods in the `com.example.service` package.

4. **Enable AOP in Configuration**
   Add `@EnableAspectJAutoProxy` in a configuration class:

   ```java
   import org.springframework.context.annotation.Configuration;
   import org.springframework.context.annotation.EnableAspectJAutoProxy;

   @Configuration
   @EnableAspectJAutoProxy
   public class AopConfig {
       // Additional AOP configuration if needed
   }
   ```

5. **Use Aspects on Beans**
   Annotate your service classes with `@Service` so Spring manages them:

   ```java
   import org.springframework.stereotype.Service;

   @Service
   public class MyService {
       // Business logic
   }
   ```

   The aspect will intercept calls to methods in this class as configured.

</details>

---

## Summary

* AOP cleanly separates cross-cutting concerns from business logic.
* Spring Boot uses AspectJ under the hood for AOP support.
* Applying AOP improves modularity, readability, and maintainability.

---


## LDAP (Lightweight Directory Access Protocol)

LDAP is a widely used protocol for accessing and managing directory information services. It provides a central location for managing user accounts, authentication, and organizational data.

<details>
<summary><strong>What is LDAP?</strong></summary>

- LDAP stands for **Lightweight Directory Access Protocol**.
- It operates over TCP/IP networks and is used for centralized user/resource management.
- Directories are hierarchical and store data in entries identified by Distinguished Names (DNs).
- LDAP servers include Microsoft Active Directory, OpenLDAP, Novell eDirectory.
- LDAP clients query and interact with LDAP servers.

</details>

---

<details>
<summary><strong>Key Concepts and Features</strong></summary>

1. **Directory Services**  
   Hierarchical and searchable collections of data representing users, devices, etc.

2. **Hierarchical Data Structure**  
   Organized in a tree-like format, entries have attributes (e.g., `cn`, `uid`, `mail`).

3. **Common Use Cases**  
   Authentication, authorization, address books, email systems, centralized user management.

4. **LDAP Server & Clients**  
   Servers store/manage directory data; clients query and update entries.

5. **Protocol Operations**  
   Search, add, modify, delete entries over the LDAP protocol.

6. **Security**  
   Supports secure connections (LDAPS), authentication via passwords or certificates.

7. **Schema**  
   Defines attribute types, mandatory/optional fields, ensuring data consistency.

8. **LDIF (LDAP Data Interchange Format)**  
   Text format for importing/exporting LDAP entries.

</details>

---

<details>
<summary><strong>Example Scenario: LDAP in an Organization (ABC Corp)</strong></summary>

### Setup:
- LDAP server installed (OpenLDAP, Active Directory).
- Hosted on dedicated or cloud server.

### Directory Structure:
- Root DN: `dc=abc,dc=corp`
- Departments as organizational units (OUs):
    - `ou=Sales,ou=Departments,dc=abc,dc=corp`
    - `ou=Marketing,ou=Departments,dc=abc,dc=corp`
- Users under departments:
    - `cn=John Doe,ou=Sales,ou=Departments,dc=abc,dc=corp`
    - `cn=Jane Smith,ou=Marketing,ou=Departments,dc=abc,dc=corp`

### Attributes per user:
- `cn` (Common Name)
- `uid` (User ID)
- `sn` (Surname)
- `mail` (Email)
- `userPassword` (Password)
- `memberOf` (Groups user belongs to)

### Authentication:
- Applications query LDAP to validate username and password.
- Access granted if credentials match.

### Group Membership:
- `memberOf` controls access and permissions.

### Updates:
- Admins add/modify/delete entries as employees join, leave, or move departments.

### Security:
- Use **LDAPS** (LDAP over SSL) for encrypted communication.
- ACLs restrict access to directory data.

</details>

---

### Summary

LDAP enables organizations to centrally manage user accounts, authentication, and directory information in a structured and secure way. It simplifies user access and administrative management across enterprise applications and systems.





# 🛠️ Spring Boot Commands

> Make sure to run all commands from the **root directory** of the project.

## 🧰 Gradle Commands

<details>
<summary><strong>🧰 Gradle Commands</strong></summary>

- `./gradlew bootRun`  
  ➤ Runs the Spring Boot application.

- `./gradlew clean bootRun`  
  ➤ Cleans previous build and starts the app.

- `./gradlew build`  
  ➤ Compiles, tests, and builds the app into a JAR/WAR file.

- `./gradlew clean build`  
  ➤ Cleans and rebuilds the entire project.

- `./gradlew bootJar`  
  ➤ Builds an executable JAR file (Spring Boot specific).

- `./gradlew bootWar`  
  ➤ Builds a WAR file (used if packaging is WAR).

- `./gradlew clean`  
  ➤ Deletes the `build/` directory.

- `./gradlew test`  
  ➤ Runs unit tests.

- `./gradlew check`  
  ➤ Runs all checks including tests, code style, etc.

- `./gradlew jacocoTestReport`  
  ➤ Generates a code coverage report using JaCoCo for tests.

- `./gradlew jacocoRootReport`  
  ➤ Aggregates code coverage across multi-module projects.

- `./gradlew jacocoTestCoverageVerification`  
  ➤ Fails the build if test coverage doesn't meet threshold.
</details>

---

## 🔧 Maven Commands

<details>
<summary><strong>🔧 Maven Commands</strong></summary>

- `mvn spring-boot:run`  
  ➤ Runs the Spring Boot application.

- `mvn clean spring-boot:run`  
  ➤ Cleans the project and starts the application.

- `mvn package`  
  ➤ Compiles and builds the app into a JAR/WAR file.

- `mvn clean package`  
  ➤ Cleans and rebuilds the project.

- `mvn spring-boot:repackage`  
  ➤ Repackages the JAR/WAR with Spring Boot support (executability).

- `mvn spring-boot:build-image`  
  ➤ Builds a container image using Cloud Native Buildpacks.

- `mvn clean`  
  ➤ Removes target directory and cleans the project.

- `mvn test`  
  ➤ Runs tests.

- `mvn check`  
  ➤ Not a default Maven phase (likely used via plugins like SpotBugs or Checkstyle).

- `mvn jacoco:report`  
  ➤ Generates code coverage report using JaCoCo.

- `mvn jacoco:check`  
  ➤ Verifies code coverage metrics.
</details>

---

## ☕ Java Execution Commands

<details>
<summary><strong>☕ Java Execution Commands</strong></summary>

- `java -jar target/app.jar`  
  ➤ Runs the compiled app JAR (Maven build).

- `java -jar build/libs/app.jar`  
  ➤ Runs the compiled app JAR (Gradle build).
</details>

---

## 📡 HTTP Status Codes 🚀

<details>
<summary><strong>🔵 1xx – Informational</strong></summary>

- **100 Continue**  
  ➤ The server received the request headers. The client should continue with the request body.

- **101 Switching Protocols**  
  ➤ The server is switching protocols as requested by the client.

- **103 Early Hints**  
  ➤ Prepares the client for the final response by sending some headers early.

</details>

---

<details>
<summary><strong>🟢 2xx – Success</strong></summary>

- **200 OK**  
  ➤ The request was successful.

- **201 Created**  
  ➤ A new resource was successfully created.

- **202 Accepted**  
  ➤ The request has been received but not completed.

- **204 No Content**  
  ➤ The request succeeded, but there is no content in the response.

</details>

---

<details>
<summary><strong>🟡 3xx – Redirection</strong></summary>

- **301 Moved Permanently**  
  ➤ The requested resource has been permanently moved to a new URL.

- **302 Found**  
  ➤ Temporary redirect to a different URL.

- **304 Not Modified**  
  ➤ Resource hasn’t changed since the last request.

- **307 Temporary Redirect**  
  ➤ Request should be repeated at another URL using the same method.

</details>

---

<details>
<summary><strong>🟠 4xx – Client Errors</strong></summary>

- **400 Bad Request**  
  ➤ The server cannot process the malformed request.

- **401 Unauthorized**  
  ➤ Authentication is required to access the resource.

- **403 Forbidden**  
  ➤ You are authenticated but not authorized to access the resource.

- **404 Not Found**  
  ➤ The requested resource could not be found.

- **405 Method Not Allowed**  
  ➤ HTTP method used is not allowed for this endpoint.

- **408 Request Timeout**  
  ➤ The server timed out waiting for the request.

- **429 Too Many Requests**  
  ➤ Too many requests have been sent in a short period (rate limiting).

</details>

---

<details>
<summary><strong>🔴 5xx – Server Errors</strong></summary>

- **500 Internal Server Error**  
  ➤ The server encountered an unexpected condition.

- **502 Bad Gateway**  
  ➤ Invalid response from an upstream server.

- **503 Service Unavailable**  
  ➤ Server is currently unavailable due to overload or maintenance.

- **504 Gateway Timeout**  
  ➤ Upstream server failed to respond in time.

</details>

---







## [Projections and Aggregations](https://www.javaprogramto.com/2020/05/spring-boot-data-mongodb-projections-aggregations.html)

## [Role Based Authorizations](https://www.codejava.net/frameworks/spring-boot/spring-boot-security-role-based-authorization-tutorial)

## [GateWay](https://spring.io/guides/gs/gateway/)

## [Authorization Tutorial](https://auth0.com/blog/spring-boot-authorization-tutorial-secure-an-api-java/)

## [Spring boot vs Spring Webflux](https://medium.com/deno-the-complete-reference/spring-boot-vs-spring-webflux-performance-comparison-for-hello-world-case-386da4e9c418)

# Spring Boot Questions

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
