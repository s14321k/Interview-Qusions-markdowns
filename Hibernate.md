
<!-- TOC -->
* [Hibernate](#hibernate)
  * [1. Eager/Lazy loading in Hibernate](#1-eagerlazy-loading-in-hibernate)
  * [2. SessionFactory](#2-sessionfactory)
  * [3. How data connection setup, configuration and steps](#3-how-data-connection-setup-configuration-and-steps)
  * [4. Hibernate and implementation](#4-hibernate-and-implementation)
  * [5. Stored Procedure](#5-stored-procedure)
  * [6. Prepared Statement](#6-prepared-statement)
    * [PreparedStatement:](#preparedstatement)
    * [StoredProcedure:](#storedprocedure)
    * [Choosing Between PreparedStatement and StoredProcedure:](#choosing-between-preparedstatement-and-storedprocedure)
  * [Cascading](#cascading)
    * [Types of cascading](#types-of-cascading)
      * [1. CascadeType.ALL](#1-cascadetypeall)
      * [2. CascadeType.PERSIST](#2-cascadetypepersist)
      * [3. CascadeType.MERGE](#3-cascadetypemerge)
      * [4. CascadeType.REMOVE](#4-cascadetyperemove)
      * [5. CascadeType.DETACH](#5-cascadetypedetach)
      * [6. CascadeType.REPLICATE](#6-cascadetypereplicate)
      * [7. CascadeType.SAVE_UPDATE](#7-cascadetypesaveupdate)
  * [get() and load()](#get-and-load)
    * [Hibernate and JPA (Java Persistence API)](#hibernate-and-jpa-java-persistence-api-)
<!-- TOC -->




# Hibernate
https://www.tutorialspoint.com/hibernate/hibernate_examples.htm
https://www.geeksforgeeks.org/hibernate-lifecycle/?ref=lbp


## 1. Eager/Lazy loading in Hibernate

```Lazy Loading``` is a design pattern that we use to defer initialization of a object as long as it is possible.
- This is the default FetchType in Hibernate. It means that the associated entity will be fetched only when it is accessed for the first time. This can improve performance in cases where the associated entity is not required most of the time.
- This can be more efficient than eagerly fetching the entity, especially if the entity has a lot of data and is not needed for every use of the parent entity.
- Associated data loads only when we explicitly call getter or size method.
- Use Lazy Loading when you are using one-to-many collections.
- Use Lazy Loading when you are sure that you are not using related entities.


```Eager loading``` is a design pattern in which data initialization occurs.
- This FetchType means that the associated entity will be fetched together with the main entity when the main entity is fetched from the database. This can be useful in cases where the associated entity is always required, but can also result in a performance decrease if the associated entity is large and/or has many associations itself.
- The FetchType.EAGER option indicates that the associated entity should be fetched eagerly, which means that it will be fetched at the same time as the parent entity.
- Data loading happens at the time of their parent is fetched.
- Use Eager Loading when the relations are not too much. Thus, Eager Loading is a good practice to reduce further queries on the Server.
- Use Eager Loading when you are sure that you will be using related entities with the main entity everywhere.

|Key  | Lazy | Eager |
|-----|------|-------|
|Fetching strategy | In Lazy loading, associated data loads only when we explicitly call getter or size method. | In Eager loading, data loading happens at the time of their parent is fetched|
|Default Strategy in ORM Layers | ManyToMany and OneToMany associations used lazy loading strategy by default. | ManyToOne and OneToOne associations used lazy loading strategy by default. |
|Loading Configuration | It can be enabled by using the annotation parameter : | fetch = FetchType.LAZY | It can be enabled by using the annotation parameter : | fetch = FetchType.EAGER |
|Performance | Initial load time much smaller than Eager loading | Loading too much unnecessary data might impact performance |


## 2. SessionFactory
- The main contract here is the creation of Session instances. Usually an application has a single SessionFactory instance and threads servicing client requests obtain Session instances from this factory.
- The internal state of a SessionFactory is immutable. Once it is created this internal state is set. This internal state includes all of the metadata about Object/Relational Mapping.
- Most importantly, the SessionFactory in Hibernate is responsible for the creation of Session objects. The Hibernate Session provides methods such as save, delete and update, all of which are used to perform CRUD-based operations on the database to which the SessionFactory connects.
- The SessionFactory is a thread safe object and used by all the threads of an application. The SessionFactory is a heavyweight object; it is usually created during application start up and kept for later use. You would need one SessionFactory object per database using a separate configuration file.

## 3. How data connection setup, configuration and steps


## 4. Hibernate and implementation


## 5. [Stored Procedure](https://www.baeldung.com/stored-procedures-with-hibernate-tutorial)
 - Stored Procedures are sets of compiled SQL statements residing in the database. They are used to encapsulate and share logic with other programs, and benefit from database-specific features like index hints or specific keywords.

## 6. [Prepared Statement](https://www.geeksforgeeks.org/how-to-use-preparedstatement-in-java/)
- Sometimes it is more convenient to use a PreparedStatement object for sending SQL statements to the database. This special type of statement is derived from the more general class, Statement, that you already know.

A prepared statement in Java is a feature of the JDBC (Java Database Connectivity) API that is used to execute parameterized SQL queries against a database. Prepared statements are precompiled SQL statements that can accept input parameters. They offer several benefits over regular SQL statements, including improved performance, security, and code readability.

Here's how you can create and use a prepared statement in Java:

1. Import the necessary packages:

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
```

2. Establish a database connection:

```java
Connection connection = null;
try {
    connection = DriverManager.getConnection("jdbc:your-database-url", "username", "password");
} catch (SQLException e) {
    e.printStackTrace();
}
```

3. Create a prepared statement:

```java
String sql = "SELECT * FROM your_table WHERE column_name = ?";
try {
    PreparedStatement preparedStatement = connection.prepareStatement(sql);
} catch (SQLException e) {
    e.printStackTrace();
}
```

4. Set parameters in the prepared statement:

```java
String parameterValue = "some_value";
try {
    preparedStatement.setString(1, parameterValue);
} catch (SQLException e) {
    e.printStackTrace();
}
```

You can set parameters for different data types based on the SQL query and the values you want to pass.

5. Execute the prepared statement:

```java
try {
    ResultSet resultSet = preparedStatement.executeQuery();
    while (resultSet.next()) {
        // Process the results
    }
} catch (SQLException e) {
    e.printStackTrace();
}
```

Prepared statements are particularly useful for preventing SQL injection attacks because they automatically handle escaping and quoting of parameters. They also improve performance because the database can reuse the execution plan for the same query with different parameters.

Remember to close the prepared statement and the database connection when you're done with them to release resources properly:

```java
if (preparedStatement != null) {
    try {
        preparedStatement.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}

if (connection != null) {
    try {
        connection.close();
    } catch (SQLException e) {
        e.printStackTrace();
    }
}
```

Both prepared statements and stored procedures are techniques used in database programming, but they serve different purposes and are implemented differently.

### PreparedStatement:

1. **Dynamic SQL:** Prepared statements are used for executing dynamic SQL queries. They are particularly useful when you need to execute the same SQL statement multiple times with different parameter values. Prepared statements can be parameterized, allowing you to set values dynamically.

2. **Security:** Prepared statements help prevent SQL injection attacks by automatically handling parameterization and escaping of values. This makes them a safer choice when dealing with user input.

3. **Execution Plan:** Each execution of a prepared statement may have its own execution plan, depending on the specific parameter values. The database can reuse the execution plan for the same prepared statement with different parameters.

4. **Java Example:**

    ```java
    String sql = "SELECT * FROM your_table WHERE column_name = ?";
    PreparedStatement preparedStatement = connection.prepareStatement(sql);
    preparedStatement.setString(1, parameterValue);
    ResultSet resultSet = preparedStatement.executeQuery();
    ```

### StoredProcedure:

1. **Precompiled Logic:** A stored procedure is a precompiled collection of one or more SQL statements. It's typically stored in the database itself. Stored procedures can contain procedural logic, conditional statements, and business logic, making them more suitable for complex operations.

2. **Performance:** Stored procedures are often compiled and optimized by the database system, providing potential performance benefits. They can reduce network traffic by executing multiple SQL statements on the server side, which is especially useful for complex operations.

3. **Security:** Stored procedures can enhance security by restricting direct access to tables and allowing controlled access through the procedures. However, they may not be as effective in preventing SQL injection if dynamic SQL is used within the stored procedure.

4. **Database Independence:** While prepared statements are part of the JDBC API and can be used with different databases, stored procedures may have database-specific syntax. They might not be as portable across different database systems.

5. **Database Example (using SQL Server):**

    ```sql
    CREATE PROCEDURE GetRecords
        @ParameterName VARCHAR(50)
    AS
    BEGIN
        SELECT * FROM YourTable WHERE YourColumn = @ParameterName;
    END;
    ```

   Example Java code to call the stored procedure:

    ```java
    String sql = "{CALL GetRecords(?)}";
    CallableStatement callableStatement = connection.prepareCall(sql);
    callableStatement.setString(1, parameterValue);
    ResultSet resultSet = callableStatement.executeQuery();
    ```

### Choosing Between PreparedStatement and StoredProcedure:

- **Dynamic vs. Static Queries:** Use prepared statements for dynamic queries where the SQL structure might change based on conditions or user input. Use stored procedures for static queries with precompiled logic.

- **Security Concerns:** If security, especially against SQL injection, is a top priority, prepared statements are often preferred. However, well-designed stored procedures with parameterized inputs can also be secure.

- **Performance:** For simple queries, prepared statements are usually sufficient. For complex operations or frequent execution of the same logic, a stored procedure might offer better performance.

Ultimately, the choice between prepared statements and stored procedures depends on the specific requirements of your application, the complexity of your queries, and your preference for managing logic on the client side (using dynamic SQL) or the server side (using stored procedures).

## Cascading
- Cascading is a feature in Hibernate, which is an object-relational mapping (ORM) tool used in Java to map Java classes to database tables. 
- Cascading refers to the ability to automatically propagate the state of an entity

### [Types of cascading](https://www.geeksforgeeks.org/hibernate-different-cascade-types/)
- Used to manage the relation between the entities.

#### 1. CascadeType.ALL
- Any operation performed in parent entity will be automatically propagated to all child entities.
- If we persist, update or delete happens in parent entity then all child entities associated with it will also be persisted, updated or deleted accordingly.
```java
@OneToMany(mappedBy="customer", cascade=CascadeType.ALL)
private Set<Order> orders;
```

#### 2. CascadeType.PERSIST
#### 3. CascadeType.MERGE
#### 4. CascadeType.REMOVE
#### 5. CascadeType.DETACH
#### 6. CascadeType.REPLICATE
#### 7. CascadeType.SAVE_UPDATE


## get() and load()

In Hibernate, `get()` and `load()` are two methods used to retrieve data from a relational database. Both methods are used to load an object from the database, but they have some differences in terms of their behavior and when they should be used.

1. `get()` method:

The `get()` method is used to retrieve an object from the database based on its primary key (unique identifier). If the object with the specified primary key is not found in the database, the `get()` method returns `null`. The `get()` method always hits the database and retrieves the object immediately.

Here is an example of how to use the `get()` method in Hibernate:

```
Session session = sessionFactory.openSession();
Transaction transaction = session.beginTransaction();

MyEntity myEntity = session.get(MyEntity.class, 1L); // Load an entity with primary key 1

transaction.commit();
session.close();
```

2. `load()` method:

The `load()` method is also used to retrieve an object from the database based on its primary key. However, it differs from `get()` in its behavior. When you use `load()`, Hibernate doesn't hit the database immediately to retrieve the object. Instead, it returns a proxy object with the specified primary key, and the actual database query is executed only when you access the properties of the loaded object. If the object with the specified primary key is not found in the database, a `ObjectNotFoundException` is thrown when you try to access its properties.

Here is an example of how to use the `load()` method in Hibernate:

```
Session session = sessionFactory.openSession();
Transaction transaction = session.beginTransaction();

MyEntity myEntity = session.load(MyEntity.class, 1L); // Load an entity with primary key 1

// No database query executed at this point

System.out.println(myEntity.getName()); // Database query executed here

transaction.commit();
session.close();
```

In summary, you should use the `get()` method when you want to immediately load an object from the database, and you are not sure if the object exists in the database. On the other hand, you can use the `load()` method when you expect the object to exist and you want to potentially benefit from lazy loading, which can be more efficient in some cases. However, you should be cautious when using `load()` to avoid `ObjectNotFoundException` if the object doesn't exist in the database.

### Hibernate and JPA (Java Persistence API) 

are related technologies used for working with relational databases in Java applications. Here are some reasons why you might choose Hibernate over JPA, or vice versa:

Reasons to Choose Hibernate Over JPA:

1. Feature Richness: Hibernate is a full-featured Object-Relational Mapping (ORM) framework that predates the JPA specification. It offers a wide range of features and options for fine-grained control over database operations. If you need advanced mapping options or want to take full advantage of Hibernate's features, you might choose Hibernate.

2. Legacy Systems: If you are working with a legacy codebase that uses Hibernate or have an existing Hibernate-based infrastructure, it might be easier to stick with Hibernate to maintain consistency.

3. Non-standard Features: Hibernate offers non-standard features, such as multi-tenancy support, second-level caching, and dynamic components, which are not part of the JPA standard. If your project requires these features, Hibernate may be the better choice.

4. Vendor-Specific Extensions: Hibernate supports certain vendor-specific extensions that go beyond the JPA standard. If you are working with a specific database and need to leverage these extensions, Hibernate can be a viable option.

Reasons to Choose JPA Over Hibernate:

1. Standardization: JPA is a Java EE standard for ORM, which means it provides a standardized way to work with databases in Java applications. Using JPA can make your code more portable and allow you to switch between different JPA providers (like Hibernate, EclipseLink, etc.) with minimal code changes.

2. Ecosystem Compatibility: If you are building a Java EE or Jakarta EE application, JPA is the natural choice because it's part of the Java EE specification. Using JPA aligns with the standards of the Java EE ecosystem.

3. Simplified API: JPA provides a simpler and more standardized API compared to Hibernate, which can make it easier for developers to learn and work with. If you prefer a more straightforward approach, JPA might be your preference.

4. Integration with Other Java EE Technologies: If you plan to use other Java EE technologies, such as EJBs, CDI, or JTA, JPA integrates seamlessly with them, providing a cohesive and consistent development experience.

Ultimately, the choice between Hibernate and JPA depends on your project's specific requirements and constraints. If you value standardization and portability, JPA is a good choice. If you need advanced features, vendor-specific extensions, or are working with an existing Hibernate codebase, Hibernate might be the better option. In many cases, it's possible to use Hibernate as the JPA provider, combining the best of both worlds by leveraging Hibernate's features while adhering to the JPA standard.