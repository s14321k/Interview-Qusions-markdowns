
<!-- TOC -->
* [Hibernate](#hibernate)
  * [1. Eager/Lazy loading in Hibernate](#1-eagerlazy-loading-in-hibernate)
  * [2. SessionFactory](#2-sessionfactory)
  * [3. How data connection setup, configuration and steps](#3-how-data-connection-setup-configuration-and-steps)
  * [4. Hibernate and implementation](#4-hibernate-and-implementation)
<!-- TOC -->




# Hibernate
https://www.tutorialspoint.com/hibernate/hibernate_examples.htm


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


## 5. Stored Procedure
- https://www.baeldung.com/stored-procedures-with-hibernate-tutorial


## get() and load()

In Hibernate, `get()` and `load()` are two methods used to retrieve data from a relational database. Both methods are used to load an object from the database, but they have some differences in terms of their behavior and when they should be used.

1. `get()` method:

The `get()` method is used to retrieve an object from the database based on its primary key (unique identifier). If the object with the specified primary key is not found in the database, the `get()` method returns `null`. The `get()` method always hits the database and retrieves the object immediately.

Here is an example of how to use the `get()` method in Hibernate:

```java
Session session = sessionFactory.openSession();
Transaction transaction = session.beginTransaction();

MyEntity myEntity = session.get(MyEntity.class, 1L); // Load an entity with primary key 1

transaction.commit();
session.close();
```

2. `load()` method:

The `load()` method is also used to retrieve an object from the database based on its primary key. However, it differs from `get()` in its behavior. When you use `load()`, Hibernate doesn't hit the database immediately to retrieve the object. Instead, it returns a proxy object with the specified primary key, and the actual database query is executed only when you access the properties of the loaded object. If the object with the specified primary key is not found in the database, a `ObjectNotFoundException` is thrown when you try to access its properties.

Here is an example of how to use the `load()` method in Hibernate:

```java
Session session = sessionFactory.openSession();
Transaction transaction = session.beginTransaction();

MyEntity myEntity = session.load(MyEntity.class, 1L); // Load an entity with primary key 1

// No database query executed at this point

System.out.println(myEntity.getName()); // Database query executed here

transaction.commit();
session.close();
```

In summary, you should use the `get()` method when you want to immediately load an object from the database, and you are not sure if the object exists in the database. On the other hand, you can use the `load()` method when you expect the object to exist and you want to potentially benefit from lazy loading, which can be more efficient in some cases. However, you should be cautious when using `load()` to avoid `ObjectNotFoundException` if the object doesn't exist in the database. 