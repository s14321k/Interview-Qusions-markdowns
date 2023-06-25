# Hibernate
https://www.tutorialspoint.com/hibernate/hibernate_examples.htm

## 1. Eager/Lazy loading in Hibernate

```Eager loading``` is a design pattern in which data initialization occurs.
- This FetchType means that the associated entity will be fetched together with the main entity when the main entity is fetched from the database. This can be useful in cases where the associated entity is always required, but can also result in a performance decrease if the associated entity is large and/or has many associations itself.
- The FetchType.EAGER option indicates that the associated entity should be fetched eagerly, which means that it will be fetched at the same time as the parent entity.

```Lazy Loading``` is a design pattern that we use to defer initialization of a object as long as it is possible.
- This is the default FetchType in Hibernate. It means that the associated entity will be fetched only when it is accessed for the first time. This can improve performance in cases where the associated entity is not required most of the time.
- This can be more efficient than eagerly fetching the entity, especially if the entity has a lot of data and is not needed for every use of the parent entity.


## 2. SessionFactory
- The main contract here is the creation of Session instances. Usually an application has a single SessionFactory instance and threads servicing client requests obtain Session instances from this factory.
- The internal state of a SessionFactory is immutable. Once it is created this internal state is set. This internal state includes all of the metadata about Object/Relational Mapping.
- Most importantly, the SessionFactory in Hibernate is responsible for the creation of Session objects. The Hibernate Session provides methods such as save, delete and update, all of which are used to perform CRUD-based operations on the database to which the SessionFactory connects.
- The SessionFactory is a thread safe object and used by all the threads of an application. The SessionFactory is a heavyweight object; it is usually created during application start up and kept for later use. You would need one SessionFactory object per database using a separate configuration file.

## 3. How data connection setup, configuration and steps