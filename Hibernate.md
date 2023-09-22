
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
- 