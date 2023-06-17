# Java-Interview-Qus

## variables:
* ```local``` - Inside the body of method, and it can not be static.
* ```instance``` - Inside the body of class.
* ```static``` - It can not be local, we can share the copy and share among all the instances of class. Memory is allocated only once when the class is loaded.
***
## Float and double
Double is more precious than float, where double takes 8 bytes and can provide precision up to 15 to 16 digits and float takes 4 bytes and provides precision upto 6 to 7.
*	Both double and float are approximate types and not precise(accurate or exact).
## int vs Integer 

https://stackoverflow.com/questions/8660691/what-is-the-difference-between-integer-and-int-in-java




***
```
final - keyword 

finally - block used after try catch 

finalize - method for clean up. Garbage collection 
```
 ***
### Compile time Error

#### Two types:-
1. Syntax Error
2. Semantic Error

### Run Time error
if divisible by 0.

***

### *  Constant *
public static final String name="Sarath";
### * Value *
final String dontChange="India";
### * Field *
protected String rever="Gana";
### * Property *
private String age;
***
#### CLASS – Class is a collection of objects.
#### OBJECTS – Is a memory representation of a class
#### Implicit and Explicit - So in simple world implicit is done by jvm or language and explicit is done by programmer.

| Types              | Explanation                                                                                                  |
|--------------------|--------------------------------------------------------------------------------------------------------------|
| import java.io.*;  | All the classes of io package can be imported.                                                               |
| class              | The class contains the data and methods to be used in the program. Methods define the behavior of the class. |
| static void Main() | static keyword tells us that this method is accessible without instantiating the class.                      |
| void               | this method will not return anything. Main() method is the entry point.                                      |
| System.in          | standard input stream that is used to read characters from the keyboard or other input devices.              |
| System.out         | standard output stream used to produce the result of the program.                                            |
| println()          | to display the text in console and takes to next line.                                                       |                                                 



***
## Primary main features of java:

1. Platform Independent

2. Object oriented programming language

    i - Abstraction

    ii - Encapsulation

    iii - Inheritance

    iv - Polymorphism

3. Simple

4. Robust

5. Secure

6. Distributed

7. Multithreading

8. Portable

## Identifiers
* starts with alphabets and underscore and dollar symbol.
* Case sensitive.
* Keyword cant be used as identifier.



# Modifier in Java
## 1. Access modifiers


| Access Modifiyers | Access within class | Access within package | Access outside package by subclass only | Access outside package and not in subclass |
|-------------------|---------------------|-----------------------|-----------------------------------------|--------------------------------------------|
| Public            | y                   | y                     | y                                       | y                                          |
| Protected         | y                   | y                     | y                                       |
| Default           | y                   | y                     |                                         
| Private           | y                   |


### private access modifier

* The private access modifier is accessible only within class.

* You cannot access to private field outside the class that defines that private. Java will notify error at the compile time of the class.
```
class Sarath

{

private String name = "sarath"; --> this can be accessed within class

}



class friend

{

Sarath sar = new Sarath("tom");

String var = sar.name; //throws compilation error

}
```


### private constructor

If you create a class and have a private constructor, we cant create a object of this class in another class.



### Default access modifier

The deffault access modifier is also known as the package-private, which means all the members are availabe inside the package but not accassible by other package outside the package.



## 2- Non-access Modifiyers

```static``` – static keyword is mainly used for memory management

```Native``` - is a modifier only applicable for method.

```Final``` – final is a keyword for constant

```Abstract``` -  non-access modifier, used for classes and methods

```Strictfp``` -  (Removed in java 17)to ensure that floating points operations give the same result on any platform

***

# OOP(Object Oriented Programming)

Oops refers to languages that uses objects in programming.

Oop's concepts consists of Polymorphism, Encapsulation, Inheritance, Abstraction, Class, Object, Method.

## 1 . Polymorphism

Differentiate between entities with the same name efficiency.

Mainly for two types

    i . Overloading

Eg: Same method name for multiple methods but with different parameters.

Constructor overloading:-https://www.geeksforgeeks.org/constructor-overloading-java/?ref=rp

Constructor Overloading is somewhat similar to method overloading.

    ii. Overriding

In other words it is called as Dynamic Method Dispatch or Run time polymorphism in java

Eg: 	class A

Class B extends A



Overriding:- https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/



## 2 . Inheritance

Inheritance is a important pillar in OOP.

Java doesnt support multiple inheritance. Due to ambiguity problem.

It is the mechanism in Java whose (fields and methods) are inherited by another subclass.

    i. SuperClass

The class whose fields and methods are inherited is called SuperClass or BaseClass or ParentClass.

    ii. SubClass

The class that inherits the other class is known as Subclass or DerivedClass or ExtendedClass.



## 3 . Encapsulation - hiding the information.
i.The internal state of every object is protected by hiding its attributes.

ii. It increases usability and maintenance of code.



## 4 . Abstraction

i. Abstract class can have abstract method (incomplete method) and non-abstract method. This class can be 		extended.

ii. Declared with Abstract keyword



## 5 . Interface

Interface class can have only abstract method (incomplete method). This class should be implemented.

Marker interface vs Functional Interface
-
In Java, a Marker interface is an interface without any methods or fields declaration, means it is an empty interface. Similarly, a Functional Interface is an interface with just one abstract method declared in it.

- Cloneable/Runnable (Functional interface)

This is an interface class, which implements Clonable/Runnable

- Callable – run()
- Runable – call()
- Comparable – compareTo()

Note:

Before java 1.8, interface can have only abstract method, i.e method without body.

After java 1.8 default and static method declaration is allowed,
-
+ @Functional interface – Single abstract method. (Can be predefined and also user defined)


Eg:

    public interface DefaultStaticExampleInterface
    {
        default void show()
        {
            System.out.println("In Java 8- default method - DefaultStaticExampleInterface");
        }
        static void display()
        {
            System.out.println("In DefaultStaticExampleInterface I");
        }
    }

Impliments

    public class DefaultStaticExampleClass implements DefaultStaticExampleInterface
    {
    }


    public class Main
    {
        static void main(String args[])
        {
            // Call interface static method on Interface
        DefaultStaticExampleInterface.display();
        DefaultStaticExampleClass defaultStaticExampleClass = new DefaultStaticExampleClass();
        // Call default method on Class 
        defaultStaticExampleClass.show(); 
    }

### Implements and Extends --> https://www.edureka.co/blog/implements-in-java/

```Implement``` - implement keyword is used when we want to inherit interface class.

Multiple interface class can be inherited at a time.

```Extends``` - By extending the class, it can use the methods of super class.

# Collections

Why the Collections Framework?

We do not need to write the code to implement these data structures and algorithms.

Used for specific data structures

***** {Parent-->child} *****

| iterable <----- Collections <------- list, set, queue |
|-------------------------------------------------------|

![img_10.png](img_10.png)


1.	Java does not provide direct implementations of the Collection interface but provides implementations of its sub interfaces like

- List Interface - List is an orderd collection like java

- Set Interface - It cant have duplicate elements

- Queue Interface - First in first out



      List - Can have many values also duplicate values
      
      Set - To have unique data
      
      Map - To store data in key value

### Methods used:-

- add()
- addall()
- size()
- remove() 
- removeall() 
- clear() 

  

      Collection<intiger> numb = new ArrayList<>(); --> Collection does work with index number. 

 

## 1. List
      List<String> fruitList = new ArrayList<>();
      fruitList.add("Strawberry");
      String[] array = fruitList.toArray(new String[fruitList.size()]);  

  

* ```ArrayList```	-	internally uses dinamic Array, non syncronized 


      ArrayList<String> list=new ArrayList<String>();
      list.add("Ajay");
      list.add("Viky");
      List.add(1, “sarath”);	//To add a value at particular position
      Iterator itr=list.iterator();
      while(itr.hasNext()) 

 

- ```LinkedList``` - internally uses doubly linked list, non syncronized, manipulation is fast because no shifting is required 


      LinkedList<String> al=new LinkedList<String>();
      al.add("Ajay");
      Iterator<String> itr=al.iterator();
      while(itr.hasNext()) 

 

- ```Singly LinkedList```  - Java Program to create and display a singly linked list - javatpoint 

Linear data structure, in which each pointer points to the next element in list. 

- ```Doubly LinkedList``` - Java program to create and display a doubly linked list - javatpoint 

Linear data structure, which can be described as the collection of nodes. Nodes are connected through the pointers.  

#### One of the limitations of the singly linked list is that it can be traversed in only one direction that is forward. The doubly linked list has overcome this limitation by providing an additional pointer that points to the previous node. With the help of the previous pointer, the doubly linked list can be traversed in a backward direction thus making insertion and deletion operation easier to perform. So, a typical node in the doubly linked list consists of three fields: 

___Data___ represents the data value stored in the node. 

___Previous___ represents a pointer that points to the previous node. 

___Next___ represents a pointer that points to next node in the list.

* ```Vector```	 - similar to ArrayList, but syncronized and contains many methods which are not part of collection frame work


      Vector<String> v=new Vector<String>();
      v.add("Ayush");
      Iterator<String> itr=v.iterator();
      while(itr.hasNext()) 

// pending https://www.javatpoint.com/collections-in-java  //

## 2. Set

Unorderd set which means it doesnt allow to store duplicate values. Can store one null value. 

Set can be instanciated as

      Set<data-type> s1 = new HashSet<data-type>();   
      
      Set<data-type> s2 = new LinkedHashSet<data-type>();   
      
      Set<data-type> s3 = new TreeSet<data-type>();  

Set is implemented by HashSet, LinkedHashSet, TreeSet 

- ```HashSet``` - No insertion order. same as set. 


      HashSet<String> set=new HashSet<String>();
      set.add("Ajay");
      Iterator<String> itr=set.iterator();
      while(itr.hasNext()) 

 

- ```LinkedHashSet``` - Maintains insertion order. Same as set 


      LinkedHashSet<String> set=new LinkedHashSet<String>();
      set.add("Ajay");
      Iterator<String> itr=set.iterator();
      while(itr.hasNext()) 

 

- ```TreeSet``` - One of the most important implementations of the SortedSet interface in Java that uses a Tree for storage.

## 3. Map 

Map is used for key,value purpose. Key should be unique.

- ```HashMap``` 

  * Hashmap is non syncronized in nature so performance is also high.
  * Not thread safe.
  * If one thread is iterating HashMap and the other try to add/modify then lead to run-time exception. 

- ```ConcurrentHashMap``` 
  * ConcurrentHashMap is syncronized, so performance is slow.
  * Tread safe.
  * We wont get exception during modification. 

    1. HashMap makes absolutely no guarantees about the iteration order. It can (and will) even change completely when new elements are added. 

    2. It has pair values(keys,values) 

    3. NO duplication key values 

    4. unordered unsorted 

    5. It allows one null key and more than one null values.
 

      public class HashMap<K,V> extends AbstractMap<K,V> implements Map<K,V>, Cloneable, Serializable 

- ```TreeMap``` will iterate according to the "natural ordering" of the keys according to their compareTo() method (or an externally supplied Comparator). Additionally, it implements the SortedMap interface, which contains methods that depend on this sort order. 

  - Ordered and sortered version
  - based on hashing data structures 

        public class TreeMap<K,V> extends AbstractMap<K,V> implements NavigableMap<K,V>, Cloneable, Serializable 

- ```LinkedHashMap``` will iterate in the order in which the entries were put into the map 

  - It is ordered version of map implementation
  - Based on linked list and hashing data structures


     public class LinkedHashMap<K,V> extends HashMap<K,V> implements Map<K,V>

- ```HashTable```

  - same as hash map 

  - It does not allow null keys and null values 


      public class Hashtable<K,V> extends Dictionary<K,V> implements Map<K,V>, Cloneable, Serializable 

## Exception Handling 

In Java, an exception is an event that disrupts the normal flow of the program. It is an object which is thrown at runtime. 

```
Throwable
|
|__ Exception
   |
   |__ (IOException, SQLException, ClassNotFoundException, RuntimeException) Checked Exceptions 
         | 
         |__ (ArithmeticException, NullPointerException, NumberFormatException, IndexOutOfBoundException
                  |
                  |__ ArrayOutOfBoundException, StringIndexOutOfBoundException)Unchecked Exceptions 
```
 
__throw and throws__

__Checked and Unchecked Exceptions__


## Syncronization 

 	Process syncronizatin 

 	Tread Syncronization 

## Aplet

   - public void init(): is used to initialized the Applet. It is invoked only once.
   - public void start(): is invoked after the init() method or browser is maximized. It is used to start the Applet.
   - public void stop(): is used to stop the Applet. It is invoked when Applet is stop or browser is minimized.
   - public void destroy(): is used to destroy the Applet. It is invoked only once. 

## Serialization and Deserialization

Serialization in Java allows us to convert an Object to stream that we can send over the network or save it as file or store in DB for later usage. Deserialization is the process of converting Object stream to actual Java Object to be used in our program. 

- State of an object to bytestream. 

- For serializing the object we call writeObject() method and ObjectOutputStream class. 

- For deserializing the object we call readObject() method and ObjectInputStream class. 

- Only objects that supports the java.io.serializable interface can be written to streams. 



# Autoboxing and Unboxing
  

# String Manipulation__

# Cohesion and Coupling in Java 

Sofware should be Highly Cohesive and Loosely coupled 

https://stackoverflow.com/a/227957/11962586 

## Coupling

![img_8.png](img_8.png) 

### Loose coupling 

They are mostly independent. If the only knowledge that class A has about class B, is what class B has exposed through its interface, then class A and class B are said to be loosely coupled. In order to over come from the problems of tight coupling between objects, spring framework uses dependency injection mechanism with the help of POJO/POJI model and through dependency injection its possible to achieve loose coupling. 

### Tight Coupling 

Here if the class A method is changed, then all other classes which create the object of A class should also be 		changed. 

 

## Cohesion

![img_9.png](img_9.png)

Explanation: In the above image, we can see that in low cohesion only one class is responsible to execute lots of jobs that are not in common which reduces the chance of reusability and maintenance. But in high cohesion, there is a separate class for all the jobs to execute a specific job, which results in better usability and maintenance. 

__Difference between high cohesion and low cohesion:__

High cohesion is when you have a class that does a well-defined job. Low cohesion is when a class does a lot of jobs that don’t have much in common. 

High cohesion gives us better-maintaining facility and Low cohesion results in monolithic classes that are difficult to maintain, understand and reduce re-usability

## GenericServlet

GenericServlet is a class which implements Servlet, ServletConfig, Serializable  

  

 

## Session factory in hibernate 

## Jsp litterals 

Classloader 

<tiles:importAttribute name="body" scope="page" ignore="true"/> 

<tiles:useAttribute id="jspform" name="body"/> 

---

---



Java Questions from Customer






| Communication      | Check                                                                                           |                
|--------------------|-------------------------------------------------------------------------------------------------|
| Coding Skill       | Should be ready for write pseudo code                                                           |
| Java Concept       | Java Concept, Spring, collections, Threads , Java 8                                             |
| Database knowledge | Schema, data model…etc                                                                          |
| Unix               | Basic commands , cp, grep, mv, cd, pwd, ls, ftp, ssh, find. Ps,                                 |
| SQL/PLSQL          | Joining of the two table ( one to many, may to One mapping scenario), inter join, Outerjoin etc |
| CI/CD              | Deployments..                                                                                   |



# Java Questions

1. Brief of the projects undertaken
2. What is the roles and responsibilities
3. Project – Explain Application architecture
4. What are the framework used in the project and candidate familiarized with
## 5. What is Rest API
   - Representationl state transfer.
## 6. How to understand the dependency
   - Dependency injection is used to make a class independent of its dependencies or to create a loosely coupled program. Dependency injection is useful for improving the reusability of code. Likewise, by decoupling the usage of an object, more dependencies can be replaced without needing to change class.
## 7. What is Spring framework and how its works
## 8. How security implemented
## 9. What design patterns are used, explain the reason for the usage

## 10. How configuration works in Spring
## 11. How data connection setup, configuration and steps
## 12. Details the spring configuration call
## 13. Boot sequence of the application
## 14. How to compile simple applications
## 15. What are required to run simple Java applications
## 16. What is the difference between JDK and JRE
## 17. Is it possible run the application with JRE
## 18. What is JVM
## 19. What are collection, how collections are used
## 20. Hashmap, what is the complexity of traversing
## 21. Java version work, and what features are used
## 22. Stream API
- Using collections framework in Java, a developer has to use loops and make repeated checks. Another concern is efficiency; as multi-core processors are available at ease, a Java developer has to write parallel code processing that can be pretty error-prone.
- To resolve such issues, Java 8 introduced the concept of stream that lets the developer to process data declaratively and leverage multicore architecture without the need to write any specific code for it.
- https://www.tutorialspoint.com/java8/java8_streams.htm
  - __forEach()__ - to iterate each element of the stream.
  ```
     Random random = new Random();
     random.ints().limit(10).forEach(System.out::println);
  ```
  - __map()__ - used to map each element to its corresponding result.
  ```
   List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
   //get list of unique squares
   List<Integer> squaresList = numbers.stream().map( i -> i*i).distinct().collect(Collectors.toList());
  ```
  - __filter()__ - used to eliminate elements based on a criteria.
  ```
      List<String>strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
      //get count of empty string
      int count = strings.stream().filter(string -> string.isEmpty()).count();
  ```
  - __sorted()__ - Used to sort the stream
  ```
     Random random = new Random();
     random.ints().limit(10).sorted().forEach(System.out::println);
  ```
## 23. Hibernate and implementation
## 24. Cqrs Pattern, what is the solution scenario used
## 25. What build tool used
## 26. What is the difference between install and deploy
## 27. connection pooling in java
## 28. Equals() & HashCode(), Equals() vs compareTo()
   - ![img_6.png](img_6.png)
   - ```
        String a = "Andrew";  
        String b = "Andrew";  
  
        if(a.equals(b)){   //checking the equality of objects using equals() methods  
            System.out.println("a & b are equal variables, and their respective hashvalues are:" + " "+ a.hashCode() + " & " + b.hashCode());
     
        String c = "Maria";  
        String d= "Julie";  
  
        if(!c.equals(d)){    //checking  the equality of objects using equals() method  
            System.out.println("\nc & d are Un-equal variables, and their respective hashvalues are:" + " "+ c.hashCode() + " & " + d.hashCode());    
     ```
     ___Output___
   - ```
         a & b are equal variables, and their respective hash values are: 1965574029 & 1965574029

         c & d are Un-equal variables, and their respective hash values are: 74113750 & 71933245
     ```
## 29. Eden space in java
## 30. PermGen Space (Permanent Generation)
![img.png](img.png)
## 31. URL vs URI

- In short, all URLs are URIs, but not all URIs are URLs.
- URI syntax ```scheme:[//authority]path[?query][#fragment]```
- ![img_1.png](img_1.png)
## 32. Session management
  - Session management can be achieved in one of the following ways-
    - Cookies
    - Hidden form field
    - URL Rewriting
    - HttpSession
    - https://www.javainuse.com/spring/springboot_session
## 33. Loggers
- ![img_7.png](img_7.png)

## 34. String vs StringBuffer vs StringBuilder

  ### String vs StringBuffer


    Since String is immutable in Java, 
    whenever we do String manipulation like 
    concatenation, substring, etc. 
    it generates a new String 
    and discards the older String for garbage collection. 
    These are heavy operations and generate 
    a lot of garbage in heap. 
    So Java has provided StringBuffer and StringBuilder classes 
    that should be used for String manipulation. 
    StringBuffer and StringBuilder are mutable objects in Java. 
    They provide 
                  append(), insert(), delete(), and substring() 
    methods for String manipulation.
   
![img_11.png](img_11.png)
- String is immutable whereas StringBuffer and StringBuilder are mutable classes.
- StringBuffer is thread-safe and synchronized whereas StringBuilder is not. That’s why StringBuilder is faster than StringBuffer.
- String concatenation operator (+) internally uses StringBuffer or StringBuilder class.
- For String manipulations in a non-multi threaded environment, we should use StringBuilder else use StringBuffer class.

***
