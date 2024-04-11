<!-- TOC -->
* [Java Interview Question Bank](#java-interview-question-bank)
  * [variables](#variables)
  * [Initialization vs Instantiation](#initialization-vs-instantiation)
  * [Float and double](#float-and-double)
  * [int vs Integer](#int-vs-integer)
  * [final - keyword](#final---keyword)
  * [finally](#finally)
  * [finalize](#finalize)
    * [Garbage collection](#garbage-collection)
    * [Manually invoking garbage collection](#manually-invoking-garbage-collection)
      * [1. **Using `System.gc()`:**](#1-using-systemgc)
      * [2. **Using `Runtime.getRuntime().gc()`:**](#2-using-runtimegetruntimegc)
      * [Important Note](#important-note)
  * [Two types of error:-](#two-types-of-error-)
    * [1. Syntax Error or Compile time Error](#1-syntax-error-or-compile-time-error)
    * [2. Semantic Error or Run Time Error](#2-semantic-error-or-run-time-error)
  * [Exception Handling](#exception-handling)
    * [throw new and throws](#throw-new-and-throws)
    * [Checked and Unchecked Exceptions](#checked-and-unchecked-exceptions)
      * [1. **Checked Exceptions:**](#1-checked-exceptions)
      * [2. **Unchecked Exceptions (Runtime Exceptions):**](#2-unchecked-exceptions-runtime-exceptions)
  * [Try with Resource (java 7 and java 9 improvements)](#try-with-resource--java-7-and-java-9-improvements-)
    * [The first is a typical try-catch-finally block](#the-first-is-a-typical-try-catch-finally-block)
    * [try-with-resources With Multiple Resources](#try-with-resources-with-multiple-resources)
    * [A Custom Resource With AutoCloseable](#a-custom-resource-with-autocloseable)
    * [MultiCatch (From java 7)](#multicatch--from-java-7-)
  * [Class](#class)
    * [Common classes in java](#common-classes-in-java)
      * [1. **Regular (Concrete) Class:**](#1-regular-concrete-class)
      * [2. **Abstract Class:**](#2-abstract-class)
      * [3. **Interface:**](#3-interface)
      * [4. **Final Class:**](#4-final-class)
      * [**5. **Inner Class:**](#5-inner-class)
      * [**Static Nested Class:**](#static-nested-class)
      * [**Anonymous Class:** Anonymous class](#anonymous-class-anonymous-class)
  * [Constructors](#constructors)
    * [1. Default Constructor](#1-default-constructor)
    * [2. Parameterized Constructor](#2-parameterized-constructor)
    * [3. Copy Constructor](#3-copy-constructor)
    * [4. Constructor Chaining](#4-constructor-chaining)
    * [5. Private Constructor](#5-private-constructor)
  * [Primary main features of java](#primary-main-features-of-java)
  * [Identifiers](#identifiers)
* [Modifier in Java](#modifier-in-java)
  * [1. Access modifiers](#1-access-modifiers)
    * [private access modifier](#private-access-modifier)
    * [private constructor](#private-constructor)
    * [Default access modifier](#default-access-modifier)
  * [2- Non-access Modifiers](#2--non-access-modifiers)
  * [Static in class, method and variable](#static-in-class-method-and-variable)
* [OOP(Object Oriented Programming)](#oopobject-oriented-programming)
  * [1. Polymorphism](#1-polymorphism)
    * [Difference between Inheritance and Polymorphism](#difference-between-inheritance-and-polymorphism)
      * [Types](#types)
      * [Overloading](#overloading)
      * [Overriding](#overriding)
    * [Covariant return type](#covariant-return-type)
  * [2 . Inheritance](#2--inheritance)
  * [3 . Encapsulation - hiding the information](#3--encapsulation---hiding-the-information)
  * [4 . Abstraction - Abstract factory pattern](#4--abstraction---abstract-factory-pattern)
  * [5 . Interface](#5--interface)
    * [Marker interface vs Functional Interface](#marker-interface-vs-functional-interface)
    * [Predicate vs Consumer vs Supplier](#predicate-vs-consumer-vs-supplier)
    * [Comparable and Comparator](#comparable-and-comparator)
    * [Implements and Extends](#implements-and-extends)
    * [Interface and Abstract](#interface-and-abstract)
      * [purpose of interface instead of abstract class in java](#purpose-of-interface-instead-of-abstract-class-in-java)
* [Collections](#collections)
  * [Why the Collections Framework?***](#why-the-collections-framework)
    * [Iterator VS Enumarator](#iterator-vs-enumarator)
    * [Collection interface:-](#collection-interface-)
    * [Iterator Interface](#iterator-interface)
    * [Iterable Interface](#iterable-interface)
  * [List](#list)
    * [`ArrayList`](#arraylist)
    * [`Vector`](#vector)
    * [`Stack`](#stack)
    * [`LinkedList`](#linkedlist)
    * [`Singly LinkedList`](#singly-linkedlist)
    * [`Doubly LinkedList`](#doubly-linkedlist)
    * [`Circular LinkedList`](#circular-linkedlist)
  * [Queue](#queue)
    * [`Deque Interface`](#deque-interface)
    * [`ArrayDeque`](#arraydeque)
  * [Set](#set)
    * [`HashSet`](#hashset)
    * [`LinkedHashSet`](#linkedhashset)
    * [`TreeSet`](#treeset)
    * [Choosing the Right Set Implementation](#choosing-the-right-set-implementation)
  * [Map](#map)
    * [`HashMap`](#hashmap)
      * [Equals() & HashCode()](#equals--hashcode--)
      * [equals() vs "=="](#equals---vs---)
      * [**Reference Equality**](#reference-equality)
      * [**Value Equality**](#value-equality)
    * [`ConcurrentHashMap`](#concurrenthashmap)
    * [`TreeMap`](#treemap)
    * [`LinkedHashMap`](#linkedhashmap)
    * [`HashTable`](#hashtable)
  * [Aplet](#aplet)
  * [Serialization and Deserialization](#serialization-and-deserialization)
    * [Transient Keyword](#transient-keyword)
* [Auto-boxing and Auto-Unboxing](#auto-boxing-and-auto-unboxing)
  * [Boxing & AutoBoxing - Primitive values to Object or wrapper class](#boxing--autoboxing---primitive-values-to-object-or-wrapper-class)
  * [UnBoxing & AutoUnBoxing - Object to primitive type](#unboxing--autounboxing---object-to-primitive-type)
* [Cohesion and Coupling in Java](#cohesion-and-coupling-in-java)
  * [Coupling](#coupling)
    * [Loose coupling](#loose-coupling)
    * [Tight Coupling](#tight-coupling)
  * [Cohesion](#cohesion)
* [Multithreading](#multithreading)
  * [Volatile Keyword](#volatile-keyword)
    * [Deadlock](#deadlock)
    * [Race condition](#race-condition)
    * [ConcurrentModificationException / Fail-Fast and Fail-Safe](#concurrentmodificationexception--fail-fast-and-fail-safe)
      * [1. Failsafe](#1-failsafe)
      * [2. Fail-Fast](#2-fail-fast)
      * [Callable vs Runnable](#callable-vs-runnable)
      * [Future - Asynchronous computation](#future---asynchronous-computation)
    * [13. How to handle multithreading in the project](#13-how-to-handle-multithreading-in-the-project)
      * [1. **Understand the Basics:**](#1-understand-the-basics)
      * [2. **Use Thread-safe Data Structures:**](#2-use-thread-safe-data-structures)
      * [3. **Synchronization:**](#3-synchronization)
      * [4. **Atomic Operations:**](#4-atomic-operations)
      * [5. **Thread Pools:**](#5-thread-pools)
      * [6. **Callable and Future:**](#6-callable-and-future)
      * [7. **Concurrency Utilities:**](#7-concurrency-utilities)
      * [8. **Avoid Deadlocks:**](#8-avoid-deadlocks)
      * [9. **Thread Safety in Singleton Classes:**](#9-thread-safety-in-singleton-classes)
      * [10. **Volatile Keyword:**](#10-volatile-keyword)
      * [11. **Thread Interruption:**](#11-thread-interruption)
      * [12. **ThreadLocal:**](#12-threadlocal)
      * [13. **Avoid Excessive Synchronization:**](#13-avoid-excessive-synchronization)
      * [14. **Testing and Debugging:**](#14-testing-and-debugging)
      * [15. **Asynchronous Programming:**](#15-asynchronous-programming)
      * [16. **Java Concurrency Frameworks:**](#16-java-concurrency-frameworks)
      * [17. **Documentation:**](#17-documentation)
      * [18. **Use Modern Java Features:**](#18-use-modern-java-features)
  * [Synchronization](#synchronization)
    * [asynchronize ways](#asynchronize-ways)
      * [Using Threads](#using-threads)
      * [Using ExecutorService](#using-executorservice)
      * [Using CompletableFuture (Java 8+)](#using-completablefuture-java-8)
      * [Using CompletableFuture with Callbacks (Java 8+)](#using-completablefuture-with-callbacks-java-8)
      * [Using Asynchronous Methods (Java 8+)](#using-asynchronous-methods-java-8)
  * [Synchronized in method, block and class level](#synchronized-in-method-block-and-class-level)
  * [Process syncronizatin & Thread Syncronization](#process-syncronizatin--thread-syncronization)
    * [**Process Synchronization:**](#process-synchronization)
    * [**Thread Synchronization:**](#thread-synchronization)
* [Java Questions](#java-questions)
  * [1. Caching in java](#1-caching-in-java)
  * [Size() vs length()](#size-vs-length)
  * [What design patterns are used, explain the reason for the usage](#what-design-patterns-are-used-explain-the-reason-for-the-usage)
  * [10. Pass by value and Pass by reference](#10-pass-by-value-and-pass-by-reference)
  * [14. How to compile simple applications](#14-how-to-compile-simple-applications)
  * [15. What are required to run simple Java applications](#15-what-are-required-to-run-simple-java-applications)
  * [16. What is the difference between JDK and JRE](#16-what-is-the-difference-between-jdk-and-jre)
  * [17. Is it possible run the application with JRE](#17-is-it-possible-run-the-application-with-jre)
  * [18. What is JVM](#18-what-is-jvm)
  * [19. What are collection, how collections are used](#19-what-are-collection-how-collections-are-used)
  * [20. Hashmap, what is the complexity of traversing](#20-hashmap-what-is-the-complexity-of-traversing)
  * [Stream API](#stream-api)
  * [Data Binding](#data-binding)
    * [1. **Static Binding (Early Binding):**](#1-static-binding-early-binding)
    * [2. **Dynamic Binding (Late Binding or Runtime Polymorphism):**](#2-dynamic-binding-late-binding-or-runtime-polymorphism)
  * [24. Cqrs Pattern, what is the solution scenario used](#24-cqrs-pattern-what-is-the-solution-scenario-used)
    * [1. **Separation of Concerns:**](#1-separation-of-concerns)
    * [2. **Scalability:**](#2-scalability)
    * [3. **Flexibility and Optimization:**](#3-flexibility-and-optimization)
    * [4. **Event Sourcing:**](#4-event-sourcing)
    * [5. **Complex Domain Logic:**](#5-complex-domain-logic)
  * [25. What build tool used](#25-what-build-tool-used)
  * [26. What is the difference between install and deploy](#26-what-is-the-difference-between-install-and-deploy)
  * [Eden space in java](#eden-space-in-java)
  * [PermGen Space (Permanent Generation) and Meta Space](#permgen-space-permanent-generation-and-meta-space)
    * [PerGen vs Meta space](#pergen-vs-meta-space)
  * [URL vs URI](#url-vs-uri)
  * [Session management](#session-management)
  * [Loggers](#loggers)
* [Strings](#strings)
  * [String vs StringBuffer vs StringBuilder, String Pool](#string-vs-stringbuffer-vs-stringbuilder-string-pool)
    * [String vs StringBuffer](#string-vs-stringbuffer)
    * [String pool](#string-pool)
    * [String Literal vs String Object](#string-literal-vs-string-object)
      * [String Literal](#string-literal)
  * [String Manipulation__](#string-manipulation__)
  * [concat() vs plus(+) operator](#concat-vs-plus-operator)
  * [Deep copy vs shallow copy](#deep-copy-vs-shallow-copy)
  * [Why string is immutable in java](#why-string-is-immutable-in-java)
    * [String](#string)
    * [***To Create immutable class***](#to-create-immutable-class)
    * [***To Create Singleton class***](#to-create-singleton-class)
  * [Wrapper Class with AutoBoxing](#wrapper-class-with-autoboxing)
  * [URL vs URI](#url-vs-uri-1)
  * [Authentication and Authorization](#authentication-and-authorization)
  * [Association, Composition and Aggregation in Java](#association-composition-and-aggregation-in-java)
  * [Arbitrary Number of Arguments and @SafeVarags](#arbitrary-number-of-arguments-and-safevarags)
* [Junit](#junit)
  * [Java Questions](#java-questions-1)
<!-- TOC -->

# [Java Interview Question Bank](https://www.java2novice.com/java-interview-questions/)

## variables

* ```local``` - Inside the body of method, and it can not be static.
* ```instance``` - Inside the body of class.
* ```static``` - It can not be local, we can share the copy and share among all the instances of class. Memory is allocated only once when the class is loaded.

## Initialization vs Instantiation

* Initialization means assigning initial value to variables while declaring. Following is the simple example of initialization in application.
* Instantiation means defining or creating new object for class to access all properties like methods, operators, fields, etc. from class.

## Float and double

Double is more precious than float, where double takes 8 bytes and can provide precision up to 15 to 16 digits and float takes 4 bytes and provides precision upto 6 to 7.

* Both double and float are approximate types and not precise(accurate or exact).

## [int vs Integer](https://stackoverflow.com/questions/8660691/what-is-the-difference-between-integer-and-int-in-java)

## [final - keyword](https://www.geeksforgeeks.org/final-keyword-in-java/)

![FinalKeyWord.png](images/FinalKeyWord.png)

## finally

* block used after try catch
* System.exit() to scip the finally block.

## finalize

* method for clean up. Garbage collection

### Garbage collection

* Mechanism that automatically deallocates memory occupied by objects that are no longer in use.
* The primary purpose of garbage collection is to manage memory efficiently, preventing memory leaks and reducing the likelihood of manual memory management errors.
* Here are some key aspects of garbage collection in Java:

1. **Automatic Memory Management:**
   Java uses automatic memory management, which means developers don't need to explicitly allocate or deallocate memory. The garbage collector takes care of reclaiming memory occupied by objects that are no longer reachable.

2. **Object Lifecycle:**
   Objects are created dynamically during program execution using the `new` keyword.
   Once an object is no longer referenced by any part of the program, it becomes eligible for garbage collection.

3. **Java Heap:**
   Memory management in Java is centered around the Java Heap, a region of memory reserved for the storage of objects. The garbage collector operates on the heap, identifying and reclaiming memory occupied by unreachable objects.

4. **Garbage Collection Algorithms:**
   Java employs different garbage collection algorithms, including:

* **Serial Garbage Collector:** Suitable for single-threaded environments, it freezes all application threads during garbage collection.

* **Parallel Garbage Collector:** Also known as the throughput collector, it uses multiple threads to perform garbage collection tasks, improving efficiency.

* **Concurrent Mark-Sweep (CMS) Collector:** Works to minimize the pause times experienced by the application by performing most of the garbage collection work concurrently with the application threads.

* **G1 Garbage Collector:** Introduced in Java 7, the G1 collector is designed to provide both low pause times and high throughput by dividing the heap into regions.

5. **`finalize` Method:**
   The `finalize` method in Java allows an object to perform cleanup operations before it is garbage collected. However, it's essential to note that relying on `finalize` for critical resource management is discouraged due to unpredictable execution times.

6. **Tuning and Monitoring:**
   Developers can tune garbage collection parameters based on the specific requirements of their applications. Tools like Java VisualVM and other profiling tools can be used to monitor and analyze garbage collection behavior.

7. **Memory Profiling:**
   Garbage collection helps in preventing memory leaks by reclaiming memory occupied by objects that are no longer needed. This is particularly important in long-running applications or those with dynamic memory usage patterns.

1. **Nullify References:**
   Ensure that you set object references to `null` when they are no longer needed. This makes the objects eligible for garbage collection.

   ```java
   MyClass obj = new MyClass();
   // Do something with obj
   obj = null; // Make obj eligible for garbage collection
   ```

2. **Use Local Variables:**
   Whenever possible, use local variables instead of instance variables. Local variables are automatically eligible for garbage collection once they go out of scope.

   ```java
   void myMethod() 
   {
       MyClass localObj = new MyClass();
       // Do something with localObj
   } // localObj is eligible for garbage collection when myMethod() finishes
   ```

3. **Clear Collections:**
   If you're using collections (e.g., `List`, `Map`, etc.), clear them when you're done with the elements. This makes the individual elements eligible for garbage collection.

   ```java
   List<MyClass> myList = new ArrayList<>();
   // Add elements to myList
   myList.clear(); // Make elements in myList eligible for garbage collection
   ```

4. **Dispose of Resources:**
   If your class uses external resources like file handles or network connections, implement appropriate resource management, and close or release those resources when they are no longer needed.

   ```java
   public class MyResourceClass implements AutoCloseable {
       // Implement AutoCloseable interface
       @Override
       public void close() throws Exception {
           // Release resources here
       }
   }
   ```

5. **Avoid Using `finalize` Method:**
   While Java provides the `finalize` method, it's generally discouraged to rely on it for resource cleanup. Instead, use other mechanisms, like the `AutoCloseable` interface, to manage resources more predictably.

   ```java
   public class MyClass implements AutoCloseable {
       @Override
       public void close() throws Exception {
           // Clean up resources here
       }
   }
   ```

### Manually invoking garbage collection

In Java, the garbage collection process is automatic, managed by the Java Virtual Machine (JVM). The JVM's garbage collector runs in the background, identifying and reclaiming memory that is no longer in use by the program. This automatic garbage collection helps developers avoid memory leaks and focus on writing application logic.

While you cannot manually trigger garbage collection in Java directly from your code, you can suggest to the JVM that it might be a good time to perform garbage collection. Keep in mind that the decision to actually run the garbage collector is still at the discretion of the JVM, and it may choose to ignore your suggestion.

Here are a couple of ways you can suggest garbage collection:

#### 1. **Using `System.gc()`:**

The `System` class provides a `gc()` method that suggests to the JVM that it's an opportune time to run the garbage collector.

```java
System.gc();
```

However, it's important to note that calling `System.gc()` doesn't guarantee that garbage collection will occur immediately. The JVM may choose to ignore this request.

#### 2. **Using `Runtime.getRuntime().gc()`:**

The `Runtime` class also provides a `gc()` method that serves the same purpose as `System.gc()`.

```java
Runtime.getRuntime().gc();
```

#### Important Note

Manually invoking garbage collection is generally discouraged in regular application code. The JVM is designed to manage memory efficiently, and it often knows better when to initiate garbage collection. Explicitly requesting garbage collection can lead to non-portable code and might interfere with the JVM's internal memory management strategies.

In most cases, relying on the automatic garbage collection mechanism is sufficient. If you're facing memory issues or suspect a memory leak, it's better to analyze and optimize your code, use appropriate data structures, and ensure proper resource management rather than relying on manual garbage collection calls.

***

## Two types of error:-

### 1. Syntax Error or Compile time Error

* A syntax error occurs when the structure of your code violates the rules of the programming language.
* It's related to the grammar or syntax of the language, and these errors are detected by the compiler or interpreter during the compilation or interpretation process.
* Syntax errors prevent the program from being executed successfully.

### 2. Semantic Error or Run Time Error

* A semantic error is a logical error in the program that does not violate the syntax of the programming language but leads to incorrect behavior.

## Exception Handling

* In Java, an exception is an event that disrupts the normal flow of the program. It is an object which is thrown at runtime.

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

### throw new and throws

In Java, `throw` and `throws` are related to exception handling, but they serve different purposes:

1. **`throw`:**

* The `throw` keyword is used to explicitly throw an exception in a program. It is followed by an instance of an exception or a subclass of `Throwable`.
* When you use `throw`, you are manually triggering the occurrence of an exception in your code. This can be useful when you want to handle exceptional conditions based on certain criteria.

   Example:

   ```java
   if (someCondition) {
       throw new CustomException("This is a custom exception message");
   }
   ```

   In this example, if `someCondition` is true, a `CustomException` is explicitly thrown.

2. **`throws`:**

* The `throws` keyword is used in the method signature to declare that a method might throw one or more types of exceptions. It is used to indicate the potential exceptions that a method could propagate to its caller.
* Methods that can throw checked exceptions must declare them using the `throws` clause. This alerts the calling code that it needs to handle or declare these exceptions as well.

   Example:

   ```java
   public void myMethod() throws IOException {
       // method code that may throw IOException
   }
   ```

   In this example, the `myMethod` is declaring that it may throw an `IOException`.

In summary, `throw` is used to explicitly throw an exception within your code, while `throws` is used in a method signature to declare the types of exceptions that the method might throw, notifying the calling code about potential exceptions.

### Checked and Unchecked Exceptions

In Java, errors are categorized into two main types: Checked Exceptions and Unchecked Exceptions. Errors, which are distinct from exceptions, are typically severe issues that indicate a serious problem that usually cannot be handled programmatically. Here's an overview of each type and how to handle them:

#### 1. **Checked Exceptions:**

* These are exceptions that the Java compiler forces you to handle explicitly by either catching them or declaring that your method throws them.
* Examples include `IOException`, `SQLException`, and `ClassNotFoundException`.

   **Handling Checked Exceptions:**

* **Try-Catch Blocks:**

    ```java
    try {
        // code that may throw a checked exception
    } catch (IOException e) {
        // handle the exception (e.g., log it or take corrective action)
    }
    ```

    You can catch multiple exceptions by separating them with pipes (`|`):

    ```java
    catch (IOException | SQLException e) {
        // handle IOException or SQLException
    }

* **Throws Clause:**
    If you don't want to handle the exception at the current level, you can declare that your method throws the exception:

    ```java
    public void myMethod() throws IOException {
        // code that may throw IOException
    }
    ```

#### 2. **Unchecked Exceptions (Runtime Exceptions):**

* These exceptions do not need to be explicitly handled or declared. They usually result from programming errors and indicate problems that could have been avoided with proper coding.
* Examples include `NullPointerException`, `ArrayIndexOutOfBoundsException`, and `ArithmeticException`.

   **Handling Unchecked Exceptions:**

  * It's generally not required to handle unchecked exceptions, but you can still catch them if you want to provide a specific response or log the error.

    ```java
    try
    {
        // code that may throw an unchecked exception
    } 
    catch (NullPointerException e) 
    {
        // handle the exception
    }
    ```

  * The best practice is to prevent unchecked exceptions through proper coding practices (e.g., null checks, array bounds checking) rather than relying on exception handling.

Remember that it's crucial to handle exceptions appropriately based on your application's requirements. For example, you might log the error, notify the user, roll back a transaction, or take other corrective actions depending on the context. Additionally, avoiding overly broad catch clauses and handling exceptions at the appropriate level in your application contributes to robust error management.

We can exit finally block by using flag. exit(); in try block.

## Try with Resource [(java 7 and java 9 improvements)](https://www.tutorialspoint.com/java9/java9_try_with_resources_improvement.htm)

### The first is a typical try-catch-finally block

```java
Scanner scanner = null;
try
{
  scanner = new Scanner(new File("test.txt"));
  while (scanner.hasNext())
  {
    System.out.println(scanner.nextLine());
  }
}
catch (FileNotFoundException e)
{
  e.printStackTrace();
}
finally
{
  if (scanner != null)
  {
    scanner.close();
  }
}
```

And here's the new super succinct solution using try-with-resources:

```java
try (Scanner scanner = new Scanner(new File("test.txt")))
{
  while (scanner.hasNext())
  {
    System.out.println(scanner.nextLine());
  }
}
catch (FileNotFoundException fnfe)
{
  fnfe.printStackTrace();
}
```

Here's where to further explore the Scanner class.

### try-with-resources With Multiple Resources

We can declare multiple resources just fine in a try-with-resources block by separating them with a semicolon:

```java
try (Scanner scanner = new Scanner(new File("testRead.txt"));
PrintWriter writer = new PrintWriter(new File("testWrite.txt")))
{
  while (scanner.hasNext())
  {
    writer.print(scanner.nextLine());
  }
}
```

### A Custom Resource With AutoCloseable

To construct a custom resource that will be correctly handled by a try-with-resources block, the class should implement the Closeable or AutoCloseable interfaces and override the close method:

```java
public class MyResource implements AutoCloseable
{
  @Override
  public void close() throws Exception
  {
    System.out.println("Closed MyResource");
  }
}
```

### [MultiCatch (From java 7)](https://www.geeksforgeeks.org/multicatch-in-java/)

[**Can we have a try block without a catch block in Java?**](https://www.tutorialspoint.com/can-we-have-a-try-block-without-a-catch-block-in-java)

* Yes, It is possible to have a try block without a catch block by using a final block.
* As we know, a final block will always execute even there is an exception occurred in a try block, except System.exit() it will execute always.

## Class

**What is a class?**

* **CLASS** - Class is a collection of objects.

### [Common classes in java](https://www.indeed.com/career-advice/interviewing/java-interview-questions-for-5-years-experience)

* There are so many classes in java. A few essentials are final, static, concrete, abstract, inner and POJO.

**OBJECTS** – Is a memory representation of a class

**Implicit and Explicit** - So in simple world implicit is done by jvm or language and explicit is done by programmer.

In Java, classes are used to model and define objects. There are several types of classes based on their functionality and how they are intended to be used. Here are some common types of classes in Java:

#### 1. **Regular (Concrete) Class:**

* A regular class is the most common type of class in Java.
* It can have fields, methods, constructors, and can be instantiated to create objects.
* Example:

```java
public class Car 
{
    // Fields, methods, and constructors
}
```

#### 2. **Abstract Class:**

* An abstract class cannot be instantiated on its own.
* It may have abstract methods (methods without a body) that must be implemented by its subclasses.
* It can also have regular methods with implementations.
* Example:

```java
public abstract class Shape 
{
    // Abstract methods and regular methods
}
```

#### 3. **Interface:**

* An interface is a collection of abstract methods.
* All methods in an interface are implicitly public and abstract (before Java 8) or can have default implementations (from Java 8 onward).
* Example:

```java
public interface Drawable 
{
    void draw(); // Implicitly public and abstract (before Java 8)
}
```

#### 4. **Final Class:**

* A final class cannot be extended (subclassed).
* It is often used when you want to prevent further modification or extension of a class.
* Example:

```java
public final class UtilityClass 
{
    // Methods and fields
}
```

#### 5. **Inner Class:**

* An inner class is a class defined within another class.
* It can be static or non-static.
* Example:

```java
public class Outer 
{
    class Inner 
    {
        // Inner class definition
    }
}
```

#### **Static Nested Class:**

* Similar to an inner class but declared with the `static` keyword.
* It does not have access to the instance variables of the outer class.
* Example:

```java
public class Outer 
{
    static class Nested 
    {
        // Static nested class definition
    }
}
```

#### **Anonymous Class:** [Anonymous class](https://www.programiz.com/java-programming/anonymous-class)

* An anonymous class is a local class without a name.
* It is often used for one-time use, such as instantiating an interface.
* Example:

```java
Runnable myRunnable = new Runnable() 
{
    public void run() 
    {
        // Implementation
    }
};
```

These are some of the common types of classes in Java. Each type serves a specific purpose, and the choice of which type to use depends on the design requirements and the problem being solved.

<https://youtu.be/mr6n66vMA0k>

* In Java, a class can contain another class known as nested class. It's possible to create a nested class without giving any name.

* A nested class that doesn't have any name is known as an anonymous class.

```java
class Polygon
{
  public void display()
  {
    System.out.println("Inside the Polygon class");
  }
}



class AnonymousDemo
{
  public void createClass()
  {
    // creation of anonymous class extending class Polygon
    Polygon p1 = new Polygon()
    {
       public void display()
       {
         System.out.println("Inside an anonymous class.");
       }
    };
    p1.display();
  }
}
```

```java
class Main
{
  public static void main(String[] args)
  {
    AnonymousDemo an = new AnonymousDemo();
    an.createClass();
  }
}
```

**OUTPUT** ```Inside an anonymous class.```

| Types | Explanation |
|--------------------|--------------------------------------------------------------------------------------------------------------|
| import java.io.*; | All the classes of io package can be imported. |
| class | The class contains the data and methods to be used in the program. Methods define the behavior of the class. |
| static void Main() | static keyword tells us that this method is accessible without instantiating the class. |
| void | this method will not return anything. Main() method is the entry point. |
| System.in | standard input stream that is used to read characters from the keyboard or other input devices. |
| System.out | standard output stream used to produce the result of the program. |
| println() | to display the text in console and takes to next line. |

## Constructors

In Java, 
* We can create multiple constructor for a single class and there is no limit.
* Constructors are special methods used for initializing objects. They are called when an object of a class is created using the `new` keyword. There are several types of constructors in Java based on their characteristics:

### 1. Default Constructor
A default constructor is a constructor with no parameters. If you don't explicitly define any constructors in your class, Java automatically provides a default constructor.

```java
public class MyClass {
    // Default constructor
    public MyClass() {
        // Initialization logic
    }
}
```

### 2. Parameterized Constructor
A parameterized constructor is a constructor with one or more parameters. It allows you to initialize object properties with values passed during object creation.

```java
public class MyClass {
    // Parameterized constructor
    public MyClass(int x, String str) {
        // Initialization logic using parameters
    }
}
```

### 3. Copy Constructor
A copy constructor is a constructor that creates a new object by copying the state of an existing object of the same class. It helps in creating a new object with the same state as an existing one.

```java
public class MyClass {
    private int x;
    private String str;

    // Copy constructor
    public MyClass(MyClass original) {
        this.x = original.x;
        this.str = original.str;
    }
}
```

### 4. Constructor Chaining
Constructor chaining occurs when one constructor calls another constructor within the same class using `this()` keyword. This allows code reuse and helps in reducing redundancy.

```java
public class MyClass {
    private int x;
    private String str;

    // Parameterized constructor
    public MyClass(int x, String str) {
        this.x = x;
        this.str = str;
    }

    // Constructor chaining
    public MyClass() {
        this(0, "default");
    }
}
```

### 5. Private Constructor
A private constructor is a constructor with private access modifier. It is typically used in utility classes where you don't want the class to be instantiated.

```java
public class UtilityClass {
    // Private constructor
    private UtilityClass() {
        // Prevent instantiation
    }
}
```

These are the main types of constructors in Java, each serving different purposes in object initialization and instantiation.

## Primary main features of java

1. Platform Independent
2. Object oriented programming language
   * Abstraction
   * Encapsulation
   * Inheritance
   * Polymorphism
3. Simple
4. Robust
5. Secure
6. Distributed
7. Multithreading
8. Portable

## Identifiers

* starts with alphabets and underscore and dollar symbol.
* Case sensitive.
* **Keyword** cant be used as identifier.

In Java, a keyword is a reserved word that has a specific meaning and functionality in the programming language. These words cannot be used as identifiers (such as variable names, method names, or class names) because they are part of the language's syntax and have predefined roles.

Here are some examples of keywords in Java:

1. **`class`:**

* Used to declare a class.

2. **`public`:**

* Indicates that a class, method, or variable is accessible from any other class.

3. **`static`:**

* Indicates that a method or variable belongs to the class rather than an instance of the class.

4. **`void`:**

* Specifies that a method does not return any value.

5. **`main`:**

* The entry point of a Java program. Execution starts from the `main` method.

6. **`new`:**

* Used to create an instance of a class or to allocate memory for an object.

7. **`if`, `else`:**

* Used for conditional statements.

8. **`for`, `while`, `do`:**

* Used for loop constructs.

9. **`return`:**

* Used to exit a method and optionally return a value.

10. **`try`, `catch`, `finally`:**

* Used for exception handling.

11. **`throw`, `throws`:**

* Used to handle and declare exceptions.

These are just a few examples, and there are more keywords in Java. It's important to note that keywords are case-sensitive in Java, so `public` is different from `Public` or `PuBlIc`.

# Modifier in Java

## 1. Access modifiers

| Access Modifiyers | Access within class | Access within package | Access outside package by subclass only | Access outside package and not in subclass |
|-------------------|---------------------|-----------------------|-----------------------------------------|--------------------------------------------|
| Public | y | y | y | y |
| Protected | y | y | y |
| Default | y | y |
| Private | y |

### private access modifier

* The private access modifier is accessible only within class.

* You cannot access to private field outside the class that defines that private. Java will notify error at the compile time of the class.

```java
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

If you create a class and have a private constructor, we cant create an object of this class in another class.

### Default access modifier

The default access modifier is also known as the package-private, which means all the members are availabe inside the package but not accassible by other package outside the package.

## 2- Non-access Modifiers

1. `static` – static keyword is mainly used for memory management.

2. `Native` - is a modifier only applicable for method.

3. `Final` – final is a keyword for constant

4. `Abstract` - non-access modifier, used for classes and methods

5. `Strictfp` - (Removed in java 17)to ensure that floating points operations give the same result on any platform

## Static in class, method and variable

In Java, the `static` keyword can be applied to class-level variables, methods, and inner classes, and its usage imparts different characteristics to the elements it modifies.
[Staitc class](https://www.geeksforgeeks.org/static-class-in-java/)

1. **Static Variables (Class Variables):**

* When a variable is declared with the `static` keyword at the class level, it becomes a static variable, also known as a class variable.
* Static variables are shared among all instances of the class. There is only one copy of a static variable, regardless of how many instances (objects) of the class are created.
* Static variables are typically used for constants or values that are common to all instances of the class.

   ```java
   public class MyClass {
       static int staticVariable = 10;

       // rest of the class code
   }
   ```

2. **Static Methods:**

* When a method is declared with the `static` keyword, it becomes a static method.
* Static methods belong to the class rather than to instances of the class. They can be called using the class name without creating an instance of the class.
* Static methods cannot directly access instance variables or methods; they operate on the class level.

   ```java
   public class MyClass {
       static void myStaticMethod() {
           // static method code
       }

       // rest of the class code
   }
   ```

3. **Static Blocks:**

* A static block is a block of code enclosed in curly braces `{}` and preceded by the `static` keyword. It is executed only once when the class is loaded into memory.
* Static blocks are useful for performing one-time initialization tasks for the class.

   ```java
   public class MyClass {
       static {
           // static block code
       }

       // rest of the class code
   }
   ```

   Static blocks are executed before the execution of the `main` method or the instantiation of any objects of the class.

It's important to note that the `static` keyword cannot be used with local variables inside methods. Additionally, excessive use of static elements can impact the maintainability and testability of your code, so it's recommended to use them judiciously based on the specific requirements of your application.

[Static Block in java < 1.5](https://www.scaler.com/topics/static-block-in-java/)

```java
static{}
```

* Static block in java is used for changing the default value of static variables, initializing static variables of the class, write a set of codes that you want to execute during the class loading in memory.

* In Java Development Kit (JDK) version 1.5 or previous the static block can be executed successfully without the main() method inside the class, but JDK version after 1.5 will throw an error message if there is a static block but no main() method inside the class.

# OOP(Object Oriented Programming)

Oops refers to languages that uses objects in programming.
Oop's concepts consists of Polymorphism, Encapsulation, Inheritance, Abstraction, Class, Object, Method.

## 1. Polymorphism

### [Difference between Inheritance and Polymorphism](https://www.geeksforgeeks.org/difference-between-inheritance-and-polymorphism/?ref=lbp)

* ***Inheritance*** is one which new class is created inherits the properties of already existing class.
* Concept of code reusability.

#### Types

1. Single Inheritance
2. Multi-Level Inheritance
3. Multiple Inheritance
4. Hybrid Inheritance
5. Hirerarchial Inheritance

Differentiate between entities with the same name efficiency.

Mainly for two types

***Compile-time polymorphism(Method overloading)***

***Run-time polymorphism(Method overriding)***

#### Overloading

`Eg: Same method name for multiple methods but with different parameters.`

[Method overloading](https://www.geeksforgeeks.org/method-overloading-in-java/)

[Constructor overloading](https://www.geeksforgeeks.org/constructor-overloading-java/?ref=rp)

Constructor Overloading is somewhat similar to method overloading.

#### [Overriding](https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/)

In other words it is called as Dynamic Method Dispatch or Run time polymorphism in java

`Eg:` `class A`</br>
`Class B extends A`

### Covariant return type

We can change the return type of the child class if it is the subclass of the return type.

## 2 . Inheritance

Inheritance is a important pillar in OOP.

Java doesnt support multiple inheritance. Due to ambiguity problem.

It is the mechanism in Java whose (fields and methods) are inherited by another subclass.

1. SuperClass - The class whose fields and methods are inherited is called SuperClass or BaseClass or ParentClass.

2. SubClass - The class that inherits the other class is known as Subclass or DerivedClass or ExtendedClass.

## 3 . Encapsulation - hiding the information

i. The internal state of every object is protected by hiding its attributes.

ii. It increases usability and maintenance of code.

## 4 . [Abstraction - Abstract factory pattern](https://www.javatpoint.com/abstract-factory-pattern)

i. Abstract class can have abstract method (incomplete method) and non-abstract method. This class can be extended.

ii. Declared with Abstract keyword

## 5 . Interface

Interface class can have only abstract method (incomplete method). This class should be implemented.

### Marker interface vs Functional Interface

* In Java, a Marker interface is an interface without any methods or fields declaration, means it is an empty interface. Similarly, a Functional Interface is an interface with just one abstract method declared in it.

* A marker interface is an interface that doesn't have any methods or constants inside it. It provides run-time type information about objects, so the compiler and JVM have additional information about the object. A marker interface is also called a tagging interface.

* Callable/Runnable (Functional interface)

**Implementing the bellow classes.**

* ***Runnable – run()*** &rarr; Doesn't return. `public void run()`, Doesn't throw exception. Thread can be created using Runnable.
* ***Callable – call()*** &rarr; Returns Object. `public Object call()`, throws an exception. Thread cannot be created using callable.
* ***Cloneale - clone()*** &rarr; Returns Object. `public Object clone()`, throws CloneNotSupportedException.
* ***Comparable – compareTo()***
* ***Comparator - compare()***

****Note:****

Before java 1.8, interface can have only abstract method, i.e method without body.

After java 1.8 default and static method declaration is allowed,

**@FunctionalInterface** – Single abstract method. (Can be predefined and also user defined)

*Eg:*

```java
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
```

***Implements***

```java
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
}
```

### [Predicate](https://codegym.cc/groups/posts/java-predicate) vs Consumer vs Supplier

In Java, "supplier," "consumer," and "predicate" are actually interfaces defined in the `java.util.function` package, introduced in Java 8 as part of the Java Functional Programming features.

1. **Supplier:**
   - Interface: `java.util.function.Supplier<T>`
   - Represents a supplier of results. It has a single method called `get()` that takes no arguments and returns a result.

   ```java
   Supplier<String> supplier = () -> "Hello, Supplier!";
   String result = supplier.get();
   ```

2. **Consumer:**
   - Interface: `java.util.function.Consumer<T>`
   - Represents an operation that accepts a single input argument and returns no result. It has a single method called `accept(T t)`.

   ```java
   Consumer<String> consumer = (s) -> System.out.println("Consumed: " + s);
   consumer.accept("Hello, Consumer!");
   ```

3. **Predicate:**
   - Interface: `java.util.function.Predicate<T>`
   - Represents a predicate (boolean-valued function) of one argument. It has a single method called `test(T t)`.

   ```java
   Predicate<Integer> predicate = (num) -> num > 0;
   boolean result = predicate.test(42);
   ```

In summary:
- `Supplier` supplies a result.
- `Consumer` consumes an argument and performs some operation.
- `Predicate` tests a condition and returns a boolean result.


### [Comparable and Comparator](https://www.javatpoint.com/difference-between-comparable-and-comparator)

|Comparable | Comparator |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1) Comparable provides a single sorting sequence. In other words, we can sort the collection on the basis of a single element such as id, name, and price.| The Comparator provides multiple sorting sequences. In other words, we can sort the collection on the basis of multiple elements such as id, name, and price etc. |
| 2) Comparable affects the original class, i.e., the actual class is modified.| Comparator doesn't affect the original class, i.e., the actual class is not modified. |
| 3) Comparable provides compareTo() method to sort elements.| Comparator provides compare() method to sort elements.|

### [Implements and Extends](https://www.edureka.co/blog/implements-in-java/)

```Implement``` - implement keyword is used when we want to inherit interface class. Multiple interface class can be inherited at a time.

```Extends``` - By extending the class, it can use the methods of super class. Only one class can be extended.

### Interface and Abstract

We can run an abstract class if it has main() method but we can't run an interface because they can't have main method implementation. Interfaces are used to define contract for the subclasses whereas abstract class also define contract but it can provide other methods implementations for subclasses to use.

#### purpose of interface instead of abstract class in java

* Interfaces are used to define contract for the subclasses whereas abstract class also define contract but it can provide other methods implementations for subclasses to use.

# Collections

## Why the Collections Framework?***

* We do not need to write the code to implement these data structures and algorithms.

* Used for specific data structures

****{Parent-->child}****

| iterable <----- Collections <------- list, set, queue |
|-------------------------------------------------------|

### Iterator VS Enumarator

| Iterator                                                                           | Enumeration  |
|------------------------------------------------------------------------------------|---|
| Iterator can do modification like remove while traversal. | Enumeration can't do modification during traversing, acts as read only.|
| Iterator is a universal cursor as it is applicable for all the collection classes. | Enumeration is not a universal cursor as it applies only to legacy classes.|
| Iterator has the remove() method.                                                  |Enumeration does not have the remove() method.|
| Iterator is not a legacy interface. Iterator can be used for the traversal of HashMap, LinkedList, ArrayList, HashSet, TreeMap, TreeSet . | Enumeration is a legacy interface which is used for traversing Vector, Hashtable. |

![ListQueueSet.png](images/ListQueueSet.png)

1. Java does not provide direct implementations of the Collection interface but provides implementations of its sub interfaces like

* List Interface - List is an orderd collection like java
* Set Interface - It cant have duplicate elements
* Queue Interface - First in first out

```markdown
List - Can have many values also duplicate values, Ordered.
Set - To have unique data, UnOrdered.
Map - To store data in key value.
```



**Maintains Insertion Order:**
1. **List Implementations:**
   - `ArrayList`: Maintains the order of elements based on the index.
   - `LinkedList`: Preserves the order of elements based on the sequence in which they were added.

2. **Set Implementation:**
   - `LinkedHashSet`: Extends `HashSet` to allow iteration over elements in the order in which they were inserted.

3. **Map Implementation:**
   - `LinkedHashMap`: Extends `HashMap` to allow iteration over keys or entries in the order in which they were inserted.

**Doesn't Guarantee Insertion Order:**
1. **Set Implementations:**
   - `HashSet`: Does not guarantee any specific order of elements.

2. **Map Implementation:**
   - `HashMap`: Does not guarantee any specific order of keys or entries.

Regarding performance, the choice between maintaining insertion order and not maintaining it may impact the performance based on the specific use case:

- **Maintaining Insertion Order (e.g., using `ArrayList`, `LinkedList`, `LinkedHashSet`, `LinkedHashMap`):**
  - Iterating over elements in the order they were inserted is generally faster in these cases.
  - Searching for an element by value might be slower compared to hash-based collections.

- **Not Guaranteeing Insertion Order (e.g., using `HashSet`, `HashMap`):**
  - Operations like adding, removing, and searching for elements are generally faster, especially for large datasets, due to the use of hashing.
  - If you don't need to maintain the order of insertion, hash-based collections might provide better performance.

Ultimately, the choice between maintaining insertion order and optimizing for performance depends on your specific requirements and the operations you perform most frequently in your application.

### Collection interface:-

* add()
* addall()
* size()
* remove()
* removeall()
* removeIf()
* clear()
* isEmpty()
* hashCode()
* stream()

`Collection<Integer> numb = new ArrayList<>();` --> `Collection does work with index number.`

### Iterator Interface

* Iterator interface provides the facility of iterating the elements in a forward direction only.
* There are only three methods in the Iterator interface. They are:
  * hasNext()
  * next()
  * remove()

### Iterable Interface

* The Iterable interface is the root interface for all the collection classes. The Collection interface extends the Iterable interface and therefore all the subclasses of Collection interface also implement the Iterable interface.
* It contains only one abstract method. i.e.,
  * iterator()

## List

![ArrayListVsLinkedList.png](images/ArrayListVsLinkedList.png)

1) List is an ordered collection it maintains the insertion order, which means upon displaying the list content it will display the elements in the same order in which they got inserted into the list.

```java
List<String> fruitList = new ArrayList<>();
fruitList.add("Strawberry");
String[] array = fruitList.toArray(new String[fruitList.size()]);
```

### `ArrayList`

* internally uses dinamic Array, non syncronized
* In Java, when you create an ArrayList without specifying an initial capacity, it has a default initial capacity of 10.
* This means that the ArrayList starts with an internal array that can initially hold up to 10 elements.
* If you add more than 10 elements, the ArrayList will automatically resize its internal array to accommodate the additional elements.

```java
ArrayList<String> list=new ArrayList<String>();
list.add("Ajay");
list.add("Viky");
List.add(1, “sarath”); //To add a value at particular position
Iterator itr=list.iterator();
while(itr.hasNext())
```

### `Vector`

* similar to ArrayList, but syncronized and contains many methods which are not part of collection frame work

```java
Vector<String> v=new Vector<String>();
v.add("Ayush");
Iterator<String> itr=v.iterator();
while(itr.hasNext())
```

### `Stack`

* Subclass of vector. 
* It implements the last-in-first-out data structure.
* Contains all the methods of vector and also provides methods like push(), peak()

### `LinkedList`

* Internally uses doubly linked list, non synchronized, manipulation is fast because no shifting is required.
* Can contain duplicate elements.
* Maintains insertion order.
* Access time for an element by index is O(n) since you may need to traverse the list from the beginning.

```java
LinkedList<String> al=new LinkedList<String>();
al.add("Ajay");
Iterator<String> itr=al.iterator();
while(itr.hasNext())
```

### [`Singly LinkedList`](https://www.javatpoint.com/java-program-to-create-and-display-a-singly-linked-list)

* Linear data structure, in which each pointer points to the next element in list.
* Each element is called as node. Each node has two components: **Data** and **Pointer** which points to next node in list.
* Traverse through the list till current points to null.

![img.png](images/singlyLinkedList.png)

### `Doubly LinkedList`

* Linear data structure, which can be described as the collection of nodes. Nodes are connected through the pointers.
* A node comprises three sections. node data, pointer to next node, pointer to the previous node.

![img_1.png](images/doublyLinkedList.png)

***One of the limitations of the singly linked list is that it can be traversed in only one direction that is forward.
The doubly linked list has overcome this limitation by providing an additional pointer that points to the previous node.
With the help of the previous pointer, the doubly linked list can be traversed in a backward direction thus making insertion and deletion operation easier to perform.
So, a typical node in the doubly linked list consists of three fields:***

***Data*** represents the data value stored in the node.

***Previous*** represents a pointer that points to the previous node.

***Next*** represents a pointer that points to next node in the list.

// pending <https://www.javatpoint.com/collections-in-java> //

![img.png](images/singlyVsDouble1.png)

![img_1.png](images/singlyVsDouble2.png)

### `Circular LinkedList`

* First node points to the last node and last node points to the first node, where the doubly linked list has the null at the first previous pointer and the last node next pointer

## Queue

Two types,

* **Deque**
* **ArrayDeque**

### `Deque Interface`
* Deque interface extends queue interface. In deque, we can add and remove the elements from both the sides. Deque stands for double ended queue which enables us to perform the operations from both sides.

### `ArrayDeque`

* **Advantages:**
  * Efficient for adding and removing elements at both ends (constant time).
  * ArrayDeque is faster than ArrayList and Stack and has no capacity restrictions.
* **Disadvantages:**
  * Not as efficient for accessing elements in the middle.

## [Set](https://javahungry.blogspot.com/2013/08/how-sets-are-implemented-internally-in.html)

Unordered set. Doesn't allow to store duplicate values. Can store one null value.

Set can be instantiated as

```java
  Set<data-type> s1 = new HashSet<data-type>();
  Set<data-type> s2 = new LinkedHashSet<data-type>();
  Set<data-type> s3 = new TreeSet<data-type>();
```

Set is implemented by HashSet, LinkedHashSet, TreeSet
In Java, `HashSet`, `LinkedHashSet`, and `TreeSet` are three different implementations of the Set interface within the Java Collections Framework. Each of them has its unique characteristics and use cases:

### `HashSet`

* **Internal Structure:**
  * Implemented using a hash table.
  * Uses the hash code of the elements to determine the bucket in which they are stored.
  * Doesn't maintain insertion order.

* **Performance:**
  * Provides constant-time performance for basic operations like add, remove, and contains on average.
  * The actual performance depends on the quality of the hash function and the load factor.

* **Use Case:**
  * Suitable for general-purpose use when you need a fast and unordered set of elements.
  * Ideal when the order of elements does not matter, and you want efficient membership testing.

   ```java
   Set<String> hashSet = new HashSet<>();
   ```

### `LinkedHashSet`

* **Internal Structure:**
  * Extends `HashSet`.
  * Uses a hash table for constant-time performance.
  * Maintains a doubly-linked list to preserve the order of insertion.

* **Performance:**
  * Similar performance characteristics to `HashSet` for basic operations.
  * Provides predictable iteration order, which is the order in which elements were inserted.

* **Use Case:**
  * Useful when you want a set with predictable iteration order.
  * Maintains the order in which elements were inserted or the order in which they were last accessed.

   ```java
   Set<String> linkedHashSet = new LinkedHashSet<>();
   ```

### `TreeSet`

* **Internal Structure:**
  * Implemented as a red-black tree.
  * Maintains elements in a sorted order (natural order or based on a specified comparator).
  * One of the most important implementations of the SortedSet interface in Java that uses a Tree for storage.

* **Performance:**
  * Logarithmic time complexity for basic operations like add, remove, and contains.
  * Offers efficient operations for retrieving elements in a sorted order.

* **Use Case:**
  * Useful when you need a set with elements sorted in a specific order.
  * Allows custom sorting based on a comparator or the natural ordering of elements.

   ```java
    Set<String> treeSet = new TreeSet<>();
   ```

* **Disadvantages:**
  * Slower insertion and removal compared to `HashSet`.

### Choosing the Right Set Implementation

* If you need fast and unordered access with constant-time performance, use `HashSet`.
* If you need a predictable order of insertion, use `LinkedHashSet`.
* If you need a sorted set, use `TreeSet`.

It's important to choose the appropriate implementation based on the specific requirements of your application.

## Map

Map is used for key,value purpose. Key should be unique.

### [`HashMap`](https://prateeknima.medium.com/internal-working-of-hashmap-in-java-e5b67890e152#:~:text=To%20improve%20the%20working%20of,(log%20n)%20retrieval%20performance.)

* Hashmap is non syncronized in nature so performance is also high.
* Not thread safe.
* If one thread is iterating HashMap and the other try to add/modify then lead to run-time exception.
* Default size is 16 and the loadFactor is 0.75.
* Bucket refers to a slot or a location within the internal array where key-value pairs are stored.The purpose of these buckets is to manage potential collisions, which occur when two or more keys hash to the same index in the array.

  **Here's a brief overview of how a HashMap works:**

1. **Hashing:** When you add a key-value pair to a HashMap, the key is hashed to determine the index (or bucket) in the internal array where the entry should be stored. The hash code is obtained using the hashCode() method of the key.

2. **Index Calculation:** The hash code is then transformed into a valid index by applying a hash function. This index determines the bucket in which the key-value pair will be stored.

3. **Collision Handling:** If two keys hash to the same index (a collision), the HashMap uses a mechanism to handle these collisions. The most common approach is chaining, where each bucket contains a linked list of entries. If multiple keys hash to the same index, their entries are stored as nodes in the linked list at that index.

4. **Load Factor and Rehashing:** As the number of key-value pairs in the HashMap grows, the load factor determines when the internal array should be resized to accommodate more entries. When the number of entries exceeds a certain threshold (determined by the load factor), the HashMap is resized (usually doubled), and the existing entries are rehashed to new buckets.

5. **TREEIFY_THRESHOLD=8; and UNTREEIFY_THRESHOLD=6** - When we insert more than 8 elements then the insertion will get inserted in the form of balanced tree instead of linked list.
**HashCode**

* **Use in Hash Collections:**
When you plan to use instances of your class as keys in a HashMap or elements in a HashSet, you should provide a well-implemented hashCode method. This helps distribute objects across buckets more evenly, reducing the likelihood of collisions and improving the performance of hash-based collections.
* **Consistency with equals:**
If you override the equals method in your class to define custom equality, you should also override the hashCode method. According to the general contract, if two objects are equal (as per the equals method), their hash codes should be equal. This ensures proper functioning in hash-based collections.
* **Maintaining Contract with hashCode:**
  * If you override the hashCode method, you should follow the contract specified in the Object class:
    * The result of hashCode should be consistent during the execution of a program, i.e., it should return the same value for the same object.
    * If two objects are equal, their hash codes must be equal.
    * It's not required, but it's generally beneficial if unequal objects have different hash codes to minimize collisions.

* [Traverse through Hashmap](https://www.geeksforgeeks.org/traverse-through-a-hashmap-in-java/)
  * Using an Iterator
  * Using enhanced for Loop (for-each loop)
  * Using forEach() Method
* [HashMap Internal Working](https://youtu.be/-oafFAPgLao?si=pwEA44xe4I1i-WTf)
* [HashMap Internal Working](https://youtu.be/1CJbB6SzjVw?si=WpfGSWu5I_ByVgYA)
* [Key Map]((https://www.baeldung.com/java-custom-class-map-key))
> https://prateeknima.medium.com/internal-working-of-hashmap-in-java-e5b67890e152#:~:text=To%20improve%20the%20working%20of,(log%20n)%20retrieval%20performance>.

#### Equals() & [HashCode()](https://www.digitalocean.com/community/tutorials/java-equals-hashcode)

* ![equalsHashCode.png](images/equalsHashCode.png)

```java
String a = "Andrew";
String b = "Andrew";

if(a.equals(b))
{ //checking the equality of objects using equals() methods
  System.out.println("a & b are equal variables, and their respective hashvalues are:" + " "+ a.hashCode() + " & " + b.hashCode());
}


String c = "Maria";
String d = "Julie";

if(!c.equals(d))
{ //checking the equality of objects using equals() method
   System.out.println("\nc & d are Un-equal variables, and their respective hashvalues are:" + " "+ c.hashCode() + " & " + d.hashCode());
}
```

***Output***

```java
a & b are equal variables, and their respective hash values are: 1965574029 & 1965574029
c & d are Un-equal variables, and their respective hash values are: 74113750 & 71933245
```

#### [equals() vs "=="](https://www.linkedin.com/pulse/difference-between-equals-java-babar-shahzad)

`So, the main difference between "==" and "equals" in Java is that "==" compares the memory location of two objects, while "equals" compares the contents of two objects.`

![equalsVsDoubleEqual.png](images/equalsVsDoubleEqual.png)

#### **Reference Equality**

* In Java, "==" is used for reference equality, which means that it checks whether two objects refer to the same memory location.

```java
String s1 = "hello";
String s2 = new String("hello");

if (s1 == s2) 
{
  System.out.println("s1 and s2 are the same object pointing to the same memory");
} 
else 
{
  System.out.println("s1 and s2 are different objects because they have their seperate memory holders");
}
```

``Output``

```java
s1 and s2 are different objects
```

#### **Value Equality**

* Value equality takes place when two separate objects happen to have the same values or state.This compares values and is closely related to the Object's equals() method.

```java
String s1 = "hello";
String s2 = new String("hello");

if (s1.equals(s2)){ 
  System.out.println("s1 and s2 have the same value");
} else {
  System.out.println("s1 and s2 have different values");
}
```

``Output``

```java
s1 and s2 have the same value
```

```java
class HelloWorld {
    public static void main(String[] args) 
    {
        String s1 = "Java";
        String s2 = "Java";
        StringBuilder sb1 = new StringBuilder();
        sb1.append("Ja").append("va");
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));
        System.out.println(sb1.toString() == s1);
        System.out.println(sb1.toString().equals(s1)); 
    }
}
```

### [`ConcurrentHashMap`](https://javahungry.blogspot.com/2015/02/how-concurrenthashmap-works-in-java-internal-implementation.html)

* ConcurrentHashMap is syncronized, so performance is slow.
* Tread safe.
* We won't get exception during modification.

  1. HashMap makes absolutely no guarantees about the iteration order. It can (and will) even change completely when new elements are added.
  2. It has pair values(keys,values)
  3. NO duplication key values
  4. unordered unsorted
  5. It allows one null key and more than one null values.

* public class HashMap<K,V> extends AbstractMap<K,V> implements Map<K,V>, Cloneable, Serializable

### `TreeMap`

* will iterate according to the "natural ordering" of the keys according to their compareTo() method (or an externally supplied Comparator). Additionally, it implements the SortedMap interface, which contains methods that depend on this sort order.
* Ordered and sortered version
* based on hashing data structures

* public class TreeMap<K,V> extends AbstractMap<K,V> implements NavigableMap<K,V>, Cloneable, Serializable

### `LinkedHashMap`

* will iterate in the order in which the entries were put into the map
* It is ordered version of map implementation
* Based on linked list and hashing data structures
* public class LinkedHashMap<K,V> extends HashMap<K,V> implements Map<K,V>

### `HashTable`

* same as hash map
* It does not allow null keys and null values
* Hash tables are used to store and retrieve data (or records) quickly.
* Hashtables store the records in buckets using hash keys.
* Java Hashtable implements the Serializable and Cloneable interfaces but not the random access interface.

* public class Hashtable<K,V> extends Dictionary<K,V> implements Map<K,V>, Cloneable, Serializable

## Aplet

* ```public void init()```: is used to initialized the Applet. It is invoked only once.
* ```public void start()```: is invoked after the init() method or browser is maximized. It is used to start the Applet.
* ```public void stop()```: is used to stop the Applet. It is invoked when Applet is stop or browser is minimized.
* ```public void destroy()```: is used to destroy the Applet. It is invoked only once.

## Serialization and Deserialization

Serialization in Java allows us to convert an Object to stream that we can send over the network or save it as file or store in DB for later usage. Deserialization is the process of converting Object stream to actual Java Object to be used in our program.

* State of an object to **bytestream**.
* For serializing the object we call writeObject() method and ObjectOutputStream class.
* For deserializing the object we call readObject() method and ObjectInputStream class.
* Only objects that supports the java.io.serializable interface can be written to streams.

### [Transient Keyword](https://www.educative.io/answers/what-is-the-transient-keyword-in-java)

* Is used to avoid serialization. If any object of a data structure is defined as a transient, then it will not be serialized.

# Auto-boxing and Auto-Unboxing

## Boxing & AutoBoxing - Primitive values to Object or wrapper class

```java
Integer valueBoxing = Integer.valueOf(10); //Boxing
or
Integer valueBoxing = 10; //AutoBoxing
```

## UnBoxing & AutoUnBoxing - Object to primitive type

```java
int valueUnBoxing = valueBoxing.intValue(); //UnBoxing
or
int valueUnBoxing = valueBoxing; //AutoUnBoxing
```

# [Cohesion and Coupling in Java](https://stackoverflow.com/a/227957/11962586)

Software should be Highly Cohesive and Loosely coupled

## Coupling

![Coupling.png](images/Coupling.png)

### Loose coupling

They are mostly independent. If the only knowledge that class A has about class B, is what class B has exposed through its interface, then class A and class B are said to be loosely coupled. In order to over come from the problems of tight coupling between objects, spring framework uses dependency injection mechanism with the help of POJO/POJI model and through dependency injection its possible to achieve loose coupling.

### Tight Coupling

Here if the class A method is changed, then all other classes which create the object of A class should also be changed.

## Cohesion

![Cohesion.png](images/Cohesion.png)

**Explanation:** In the above image, we can see that in low cohesion only one class is responsible to execute lots of jobs that are not in common which reduces the chance of reusability and maintenance. But in high cohesion, there is a separate class for all the jobs to execute a specific job, which results in better usability and maintenance.

**Difference between high cohesion and low cohesion:**

High cohesion is when you have a class that does a well-defined job. Low cohesion is when a class does a lot of jobs that don’t have much in common.

High cohesion gives us better-maintaining facility and Low cohesion results in monolithic classes that are difficult to maintain, understand and reduce re-usability

# [Multithreading](https://codegym.cc/groups/multithreading-in-java)

## Volatile Keyword

* Volatile is yet another way (like synchronized, atomic wrapper) of making class thread-safe. Thread safe means that a method or class instance can be used by multiple threads at the same time without problem.

### [Deadlock](https://www.javatpoint.com/deadlock-in-java)

Deadlock is a part of multithreading. Deadlock can occur in a situation when a thread is waiting for an object lock, that is aquired by another thread and second thread is waiting for an object lock that is aquired by first thread. Since both threads are waiting for each other to release the lock.

### Race condition

In layman terms a race condition in which two or more threads compete together to get certain shared resources. For example, if thread a is reading data from the LinkedList and another thread B is trying to delete the same data.

### [ConcurrentModificationException / Fail-Fast and Fail-Safe]( https://www.geeksforgeeks.org/fail-fast-fail-safe-iterators-java/)

In Java, "fail-safe" and "fail-fast" are two different approaches to handling concurrent modifications to data structures, such as collections like ArrayList, HashMap, and HashSet. These approaches determine how the data structure behaves when one thread modifies it while another thread is iterating over it. Here's an explanation of both concepts:

#### 1. Failsafe

* Failsafe iterators do not throw ConcurrentModificationException when the underlying collection is modified while an iterator is traversing it.
* Instead of preventing concurrent modifications, failsafe iterators make a copy of the data structure at the time of creation and iterate over that copy. This means that the iterator works on a snapshot of the data, ensuring that it doesn't see the modifications made by other threads.
* Failsafe iterators are typically used in concurrent collections like ConcurrentHashMap and CopyOnWriteArrayList.

   Example of a failsafe iterator:

   ```java
   Map<String, String> map = new ConcurrentHashMap<>();
   map.put("key1", "value1");
   map.put("key2", "value2");
   
   Iterator<String> iterator = map.keySet().iterator();
   map.put("key3", "value3"); // Failsafe iterator won't throw an exception
   while (iterator.hasNext()) {
       System.out.println(iterator.next()); // It will safely iterate over the snapshot
   }
   ```

#### 2. Fail-Fast

* Fail-fast iterators, on the other hand, are designed to detect concurrent modifications during iteration and immediately throw a ConcurrentModificationException. This is done to avoid potential data corruption and to notify the programmer of a potential problem.
* Fail-fast iterators are used in non-concurrent collections like ArrayList, HashMap, and HashSet.

   Example of a fail-fast iterator:

   ```java
   List<String> list = new ArrayList<>();
   list.add("item1");
   list.add("item2");
   
   Iterator<String> iterator = list.iterator();
   list.add("item3"); // Fail-fast iterator will throw ConcurrentModificationException
   while (iterator.hasNext()) {
       System.out.println(iterator.next());
   }
   ```

It's important to choose the appropriate type of iterator based on the specific requirements of your application. Failsafe iterators are more suitable for situations where concurrent modifications are expected and need to be tolerated, while fail-fast iterators are preferred when concurrent modifications are considered an error that should be immediately detected and reported.

#### Callable vs Runnable

* Callable interface and Runnable interface are used to encapsulate tasks supposed to be executed by another thread.
* Callable allows us to specify the types of result that will be returned by the call() method.
* Runnable interface has run() method that does not return anything.
* Runnable instances can be run by Thread class as well as ExecutorService.
* But Callable instances can only be executed via ExecutorService.

![img.png](images/CallableVsRunnable.png)


#### Future - Asynchronous computation

* The best example of Future is ExecutorService interface. It produces a Future object for tracking progress of one or more asynchronous task and waits for its computation and retrieve the results of the computation. The result is retrieved using the get() method when the computation is completed. And it blocks until it is completed.

### 13. How to handle multithreading in the project

Handling multithreading in a project involves managing and coordinating the execution of multiple threads to achieve parallelism or concurrency. Multithreading is essential for improving the performance and responsiveness of applications. Here are some guidelines on how to handle multithreading in a Java project:

#### 1. **Understand the Basics:**

* Have a solid understanding of basic multithreading concepts, such as threads, synchronization, locks, and thread safety.

#### 2. **Use Thread-safe Data Structures:**

* Utilize thread-safe collections and data structures from the `java.util.concurrent` package to avoid data corruption and ensure consistency in a multithreaded environment.

#### 3. **Synchronization:**

* Use synchronization mechanisms, such as `synchronized` blocks or methods, to control access to shared resources and prevent race conditions.

#### 4. **Atomic Operations:**

* When dealing with simple operations that should be executed atomically, consider using atomic classes from the `java.util.concurrent.atomic` package.

#### 5. **Thread Pools:**

* Prefer using thread pools for managing and reusing threads. The `ExecutorService` and `ThreadPoolExecutor` classes provide a convenient way to implement thread pools.

#### 6. **Callable and Future:**

* Use `Callable` and `Future` interfaces to perform tasks in parallel and retrieve results asynchronously.

#### 7. **Concurrency Utilities:**

* Leverage the high-level concurrency utilities provided by the `java.util.concurrent` package, such as `CountDownLatch`, `CyclicBarrier`, and `Semaphore`, for more complex coordination among threads.

#### 8. **Avoid Deadlocks:**

* Be cautious about potential deadlocks by carefully ordering the acquisition of locks and avoiding circular dependencies.

#### 9. **Thread Safety in Singleton Classes:**

* If using singleton classes, ensure that they are thread-safe. Consider using the double-checked locking pattern or use a thread-safe initialization approach.

#### 10. **Volatile Keyword:**

* Use the `volatile` keyword for variables that are accessed by multiple threads to ensure proper visibility of changes.

#### 11. **Thread Interruption:**

* Be aware of thread interruption. Consider using `Thread.interrupt()` and handling `InterruptedException` appropriately.

#### 12. **ThreadLocal:**

* Utilize `ThreadLocal` to store thread-specific data, avoiding interference between threads.

#### 13. **Avoid Excessive Synchronization:**

* Minimize the scope of synchronized blocks to avoid unnecessary contention and improve performance.

#### 14. **Testing and Debugging:**

* Test your multithreaded code thoroughly, especially for race conditions and deadlocks. Debugging multithreaded applications can be challenging, so use tools like thread dumps and profilers.

#### 15. **Asynchronous Programming:**

* Consider using asynchronous programming patterns and libraries (e.g., CompletableFuture) for managing concurrency and responsiveness in applications.

#### 16. **Java Concurrency Frameworks:**

* Explore higher-level concurrency frameworks and libraries, such as Akka, for building scalable and resilient concurrent systems.

#### 17. **Documentation:**

* Clearly document your multithreading strategy, especially if using complex synchronization mechanisms, to aid maintainability.

#### 18. **Use Modern Java Features:**

* Consider using features introduced in modern Java versions, such as the `java.util.concurrent` enhancements in Java 8 and later.

By following these guidelines, you can effectively handle multithreading in your project and create robust, scalable, and efficient concurrent applications. Keep in mind that multithreading requires careful consideration and testing to ensure correct and reliable behavior.

## Synchronization

* In multithread environment, where multiple threads are executing concurrently, synchronization becomes crucial to prevent issues such as **data corruption, race conditions, and inconsistent states**. Java provides several mechanisms for synchronization, including **synchronized methods, synchronized blocks, and explicit locks**.

* Here are the key differences between synchronized and non-synchronized collection classes in Java:

**Synchronized Collection Classes:**

1. **Thread-Safe:** Synchronized collection classes are designed to be thread-safe, Can be safely used in a multi-threaded environment without external synchronization.
2. **Performance Overhead:** They typically have a performance overhead compared to non-synchronized counterparts because they use locks to ensure thread safety. Locking can lead to contention and reduced performance.
3. **Examples:** Some common synchronized collection classes in Java include `Vector` (a synchronized version of `ArrayList`), `HashTable`, and `Collections.synchronizedList`, `Collections.synchronizedSet`, and `Collections.synchronizedMap`.

Example of a synchronized collection class (using `Collections.synchronizedList`):

```java
List<String> synchronizedList = Collections.synchronizedList(new ArrayList<>());
synchronizedList.add("Item 1");
synchronizedList.add("Item 2");

// The synchronizedList is thread-safe
```

**Non-Synchronized Collection Classes:**

1. **Not Thread-Safe:** Non-synchronized collection classes are not thread-safe by default, and accessing them concurrently from multiple threads can lead to data corruption and unpredictable behavior.
2. **Better Performance:** They tend to have better performance in single-threaded scenarios since they don't incur the overhead of synchronization.
3. **Examples:** Common non-synchronized collection classes include `ArrayList`, `HashSet`, and `HashMap`.

Example of a non-synchronized collection class:

```java
List<String> nonSynchronizedList = new ArrayList<>();
nonSynchronizedList.add("Item 1");
nonSynchronizedList.add("Item 2");

// The nonSynchronizedList is not thread-safe
```

In multithreaded environments, if you need to work with non-synchronized collection classes, you should use external synchronization mechanisms like `synchronized` blocks, `java.util.concurrent` classes (e.g., `ConcurrentHashMap`, `CopyOnWriteArrayList`), or other thread-safe data structures to ensure proper synchronization and avoid data races and inconsistencies.

### asynchronize ways

#### Using Threads

```java
public class MyTask implements Runnable {
  public void run() {
  // Your asynchronous task implementation
  }
}

// Creating and starting a thread
Thread thread = new Thread(new MyTask());
thread.start();
```

#### Using ExecutorService
```java
ExecutorService executor = Executors.newCachedThreadPool();
executor.submit(() -> {
// Your asynchronous task implementation
});
executor.shutdown(); // Remember to shutdown the executor when done.
```

#### Using CompletableFuture (Java 8+)
```java
CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
    // Your asynchronous task implementation
});
```

#### Using CompletableFuture with Callbacks (Java 8+)
```java
CompletableFuture.supplyAsync(() -> {
    // Your asynchronous task implementation
}).thenAccept(result -> {
    // Handle the result asynchronously
});
```

#### Using Asynchronous Methods (Java 8+)
```java
import org.springframework.scheduling.annotation.Async;

public class MyClass {
  @Async
  public void asyncMethod() {
  // Your asynchronous method implementation
  }
}
```


## Synchronized in method, block and class level

Here are the main types of synchronization in Java:

1. **Method Synchronization:**
  * By using the `synchronized` keyword, you can synchronize entire methods. When a thread invokes a synchronized method, it acquires the lock for that method's object, preventing other threads from executing synchronized methods on the same object concurrently.

    ```java
    public synchronized void synchronizedMethod() 
    {
        // Code that needs to be synchronized
    }
    ```

2. **Block Synchronization:**
  * Synchronized blocks allow you to specify a specific object as the lock. Multiple blocks of code can be synchronized independently on different objects.

    ```java
    public void someMethod() 
    {
        // Code outside the synchronized block

        synchronized (lockObject) 
        {
            // Code that needs to be synchronized
        }

        // Code outside the synchronized block
    }
    ```

3. **Class-level Locks:**
  * Java allows the synchronization of static methods or blocks using the `synchronized` keyword. In this case, the lock is associated with the class rather than an instance.

    ```java
    public static synchronized void staticSynchronizedMethod() 
    {
        // Code that needs to be synchronized
    }
    ```

4. **Intrinsic Locks (Monitor Locks):**
  * Every object in Java has an associated monitor, or intrinsic lock. When a thread enters a synchronized method or block, it automatically acquires the lock associated with the object.

5. **`wait()`, `notify()`, and `notifyAll()`:**
  * These methods are used for inter-thread communication and coordination within synchronized blocks. `wait()` causes the current thread to wait until another thread invokes `notify()` or `notifyAll()` on the same object, releasing the lock temporarily.

    ```java
    synchronized (sharedObject) {
        while (conditionIsNotMet()) {
            sharedObject.wait(); // Release the lock and wait
        }
        // Perform actions when the condition is met
    }
    ```

6. **`volatile` Keyword:**
  * The `volatile` keyword is used to declare a variable whose value might be changed by multiple threads. It ensures that any thread reading the variable sees the most recent modification. However, it does not provide atomicity for compound actions, so it's often used for simple flags and indicators.

    ```java
    private volatile boolean flag = false;
    ```

7. **Explicit Locks (ReentrantLock):**
  * Java provides the `ReentrantLock` class as part of the `java.util.concurrent.locks` package. This class allows more fine-grained control over locks and supports features like fairness, timeouts, and lock interruption.

    ```java
    ReentrantLock lock = new ReentrantLock();

    public void someMethod() {
        lock.lock();
        try {
            // Code that needs to be synchronized
        } finally {
            lock.unlock();
        }
    }
    ```

Choosing the appropriate synchronization mechanism depends on the specific requirements of your application. In many cases, using higher-level concurrency utilities from the `java.util.concurrent` package might be preferable for complex synchronization scenarios.

## Process syncronizatin & Thread Syncronization

### **Process Synchronization:**

* Process synchronization refers to the coordination and control mechanisms that ensure the proper execution of multiple processes in a concurrent or parallel computing environment.
* In a multi-process system, where multiple independent processes run concurrently, it's essential to synchronize their activities to avoid conflicts, data corruption, and race conditions.
* Inter-process communication (IPC) mechanisms are used to achieve process synchronization. Common mechanisms include:

1. **Semaphore:**
  * Semaphores are used to control access to a shared resource by multiple processes. They allow a specified number of processes to access a resource simultaneously.

2. **Mutex (Mutual Exclusion):**
  * A mutex is a synchronization primitive that ensures that only one process at a time can access a shared resource. It provides exclusive access to the resource.

3. **Condition Variables:**
  * Condition variables are used to signal and wait for specific conditions to be met. Processes can use condition variables to coordinate their activities.

4. **Message Passing:**
  * Processes communicate by sending and receiving messages. This can be implemented through message queues or other forms of inter-process communication.

5. **Critical Section:**
  * A critical section is a part of the code that accesses shared resources. Process synchronization mechanisms are used to protect critical sections from simultaneous access by multiple processes.

Process synchronization is crucial in scenarios where multiple independent processes need to coordinate their activities, share resources, or communicate with each other.

### **Thread Synchronization:**

Thread synchronization, on the other hand, deals with coordinating the execution of multiple threads within the same process. Threads share the same memory space and resources, which introduces the need for synchronization to ensure data consistency and avoid conflicts. Java provides built-in mechanisms for thread synchronization, as mentioned in the previous responses. These include:

1. **`synchronized` Methods and Blocks:**
  * Using the `synchronized` keyword to make methods or blocks of code thread-safe by acquiring and releasing locks.

2. **`wait()`, `notify()`, and `notifyAll()`:**
  * Methods for inter-thread communication within synchronized blocks.

3. **`volatile` Keyword:**
  * Used for ensuring visibility of changes made by one thread to other threads.

4. **Explicit Locks (ReentrantLock):**
  * Provides a more flexible and fine-grained approach to locking than the implicit locks provided by `synchronized` methods and blocks.

5. **Thread Safety in Collections:**
  * Java provides thread-safe versions of collections in the `java.util.concurrent` package, such as `ConcurrentHashMap` and `CopyOnWriteArrayList`, which are designed to be used in multithreaded environments.

In summary, while process synchronization deals with coordination between independent processes, thread synchronization deals with coordination between threads within the same process.
Both are essential concepts in concurrent programming, ensuring proper interaction and avoiding issues related to data access and modification in shared environments.

# Java Questions

## 1. Caching in java

* Caching is a technique wherein objects in your application are stored in a temporary storage area known as cache.

![CacheFlow.png](images/CacheFlow.png)

## Size() vs length()

* size() is a method specified in java. util. Collection , which is then inherited by every data structure in the standard library.

* length() is a field on any array (arrays are objects, you just don't see the class normally), and length() is a method on java.

## What design patterns are used, explain the reason for the usage

Design patterns are recurring solutions to common problems in software design. They provide proven templates for solving specific design problems, making it easier to create maintainable and scalable software. Here are some commonly used design patterns and the reasons for their usage:

1. [**Singleton Pattern and best practices**](https://www.digitalocean.com/community/tutorials/java-singleton-design-pattern-best-practices-examples):

* **Usage**: The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.
* **Reason**: It is used when you want to control access to a shared resource or when you need a single point of coordination within your application.

***To Create Singleton class***

1. Private static object of the same class
2. Private constructor
3. getInstance method

`Eg - 1`

```java
class Database
{
  private static Database dbObject; //Private static object of the same class
  private Database() //Private constructor
  {

  }

  public static Database getInstance() //getInstance method
  {
    // create object if it's not already created
    if(dbObject == null)
    {
      dbObject = new Database();
    }

    // returns the singleton object
    return dbObject;
  }


  public void getConnection()
  {
    System.out.println("You are now connected to the database.");
  }
}


class Main
{
  public static void main(String[] args)
  {
    Database db1;
    // refers to the only object of Database
    db1= Database.getInstance();
    db1.getConnection();
  }
}

```

`Eg - 2`

```java
public class Singleton {
private static Singleton instance;

    private Singleton() { }
    
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

2. [**Factory Pattern**:](https://www.linkedin.com/pulse/design-pattern-factory-babar-shahzad?trk=article-ssr-frontend-pulse_more-articles_related-content-card)

* [Factory Design pattern](https://www.geeksforgeeks.org/factory-method-design-pattern-in-java/)

* Multiple classes using same interface and to use that.
  * **Usage**: The Factory pattern defines an interface for creating an object but allows subclasses to alter the type of objects that will be created.
  * **Reason**: It is used when you want to abstract the object creation process, providing a flexible way to create objects while hiding the implementation details.

```java
interface Product {
    void create();
}

class ConcreteProduct implements Product {
    @Override
    public void create() {
        System.out.println("Creating a concrete product.");
    }
}

class ProductFactory {
    public static Product createProduct() {
        return new ConcreteProduct();
    }
}
```

3. **Abstract Factory Pattern**:

* **Usage**: The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.
* **Reason**: It is used when you need to ensure that the created objects work together harmoniously or when you want to provide multiple families of related objects.

```java
interface AbstractFactory {
    Product createProduct();
    AnotherProduct createAnotherProduct();
}

class ConcreteFactory implements AbstractFactory {
    @Override
    public Product createProduct() {
        return new ConcreteProduct();
    }
    
    @Override
    public AnotherProduct createAnotherProduct() {
        return new ConcreteAnotherProduct();
    }
}
```

4. **Builder Pattern**:

* **Usage**: The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.
* **Reason**: It is used when you need to create objects with many optional components, making the construction process more readable and maintainable.

```java
class Product {
    private String part1;
    private String part2;
    
    public void setPart1(String part1) {
        this.part1 = part1;
    }
    
    public void setPart2(String part2) {
        this.part2 = part2;
    }
}

class ProductBuilder {
    private Product product = new Product();
    
    public ProductBuilder withPart1(String part1) {
        product.setPart1(part1);
        return this;
    }
    
    public ProductBuilder withPart2(String part2) {
        product.setPart2(part2);
        return this;
    }
    
    public Product build() {
        return product;
    }
}
```

5. **Adapter Pattern**:

* **Usage**: The Adapter pattern allows the interface of an existing class to be used as another interface, making it compatible with client code.
* **Reason**: It is used to bridge the gap between incompatible interfaces or to wrap third-party libraries with your own interface.

```java
interface Target {
    void request();
}

class Adaptee {
    void specificRequest() {
        System.out.println("This is the specific request.");
    }
}

class Adapter implements Target {
    private Adaptee adaptee;
    
    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    
    @Override
    public void request() {
        adaptee.specificRequest();
    }
}
```

6. **Decorator Pattern**:

* **Usage**: The Decorator pattern attaches additional responsibilities to an object dynamically. It provides a flexible alternative to subclassing for extending functionality.
* **Reason**: It is used when you need to add or alter the behavior of objects without modifying their actual classes, promoting code reusability and maintainability.

```java
interface Component {
    void operation();
}

class ConcreteComponent implements Component {
    @Override
    public void operation() {
        System.out.println("This is the concrete component.");
    }
}

class Decorator implements Component {
    private Component component;
    
    public Decorator(Component component) {
        this.component = component;
    }
    
    @Override
    public void operation() {
        component.operation();
    }
}
```

7. **Observer Pattern**:

* **Usage**: The Observer pattern defines a one-to-many dependency between objects, ensuring that when one object changes state, all its dependents are notified and updated.
* **Reason**: It is used to implement distributed event handling systems, where changes in one object should trigger updates in multiple other objects without tight coupling.

````java
import java.util.ArrayList;
import java.util.List;

interface Observer 
{
    void update(String message);
}

class ConcreteObserver implements Observer 
{
    private String name;
    
    public ConcreteObserver(String name) 
    {
        this.name = name;
    }
    
    @Override
    public void update(String message) 
    {
        System.out.println(name + " received message: " + message);
    }
}

class Subject 
{
    private List<Observer> observers = new ArrayList<>();
    
    public void addObserver(Observer observer) 
    {
        observers.add(observer);
    }
    
    public void notifyObservers(String message) 
    {
        for (Observer observer : observers) 
        {
            observer.update(message);
        }
    }
}
````

8. **Strategy Pattern**:

* **Usage**: The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the client to choose the appropriate algorithm at runtime.
* **Reason**: It is used when you need to select an algorithm from a family of algorithms dynamically or when you want to isolate and encapsulate algorithm-specific behavior.

```java
interface Strategy 
{
    void execute();
}

class ConcreteStrategyA implements Strategy 
{
    @Override
    public void execute() 
    {
        System.out.println("Executing strategy A.");
    }
}

class ConcreteStrategyB implements Strategy 
{
    @Override
    public void execute() 
    {
        System.out.println("Executing strategy B.");
    }
}

class Context 
{
    private Strategy strategy;
    
    public void setStrategy(Strategy strategy) 
    {
        this.strategy = strategy;
    }
    
    public void executeStrategy() 
    {
        strategy.execute();
    }
}
```

9. **Command Pattern**:

* **Usage**: The Command pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.
* **Reason**: It is used to decouple the sender and receiver of a request, support undo/redo functionality, or implement transactional behavior.

```java
interface Command {
    void execute();
}

class ConcreteCommand implements Command {
    private Receiver receiver;
    
    public ConcreteCommand(Receiver receiver) {
        this.receiver = receiver;
    }
    
    @Override
    public void execute() {
        receiver.action();
    }
}

class Receiver {
    public void action() {
        System.out.println("Receiver is performing an action.");
    }
}

class Invoker {
    private Command command;
    
    public void setCommand(Command command) {
        this.command = command;
    }
    
    public void executeCommand() {
        command.execute();
    }
}
```

10. **MVC (Model-View-Controller) Pattern**:

* **Usage**: The MVC pattern separates an application into three interconnected components: Model (data and business logic), View (user interface), and Controller (handles user input).
* **Reason**: It is used to achieve separation of concerns, making code more maintainable, scalable, and adaptable to different user interfaces.

These design patterns help improve the structure and maintainability of software systems, promote code reusability, and make it easier to manage complex software development. The choice of pattern depends on the specific problem you're trying to solve and the design goals you want to achieve.

## 10. Pass by value and Pass by reference

* Java is always pass by value. Does not support pass by reference.

## 14. How to compile simple applications

## 15. What are required to run simple Java applications

## 16. What is the difference between JDK and JRE

## 17. Is it possible run the application with JRE

## 18. What is JVM

## 19. What are collection, how collections are used

## 20. Hashmap, what is the complexity of traversing

## [Stream API](https://www.tutorialspoint.com/java8/java8_streams.htm)

* Using collections framework in Java, a developer has to use loops and make repeated checks. Another concern is efficiency; as multi-core processors are available at ease, a Java developer has to write parallel code processing that can be pretty error-prone.

* To resolve such issues, Java 8 introduced the concept of stream that lets the developer to proccess data declaratively and leverage multicore architecture without the need to write any specific code for it.

* **forEach()** - to iterate each element of the stream.

```java
Random random = new Random();
random.ints().limit(10).forEach(System.out::println);
```

* **map()** - used to map each element to its corresponding result.

```java
List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
//get list of unique squares
List<Integer> squaresList = numbers.stream().map( i -> i*i).distinct().collect(Collectors.toList());
```

* **filter()** - used to eliminate elements based on a criteria.

```java
List<String>strings = Arrays.asList("abc", "", "bc", "efg", "abcd","", "jkl");
//get count of empty string
int count = strings.stream().filter(string -> string.isEmpty()).count();
```

* **sorted()** - Used to sort the stream

```java
Random random = new Random();
random.ints().limit(10).sorted().forEach(System.out::println);
```

## Data Binding

![staticVsDynamicBinding.png](images/staticVsDynamicBinding.png)

**Override static method**

* NO, we can't override static methods since method overriding relies on dynamic binding at runtime, but static methods are bonded at compile time with static binding. As a result, we are unable to override static methods.

In Java, binding refers to the association between a method call and the method implementation. There are two types of binding in Java: static binding (also known as early binding) and dynamic binding (also known as late binding or runtime polymorphism).

### 1. **Static Binding (Early Binding):**

* Static binding occurs during compile-time, and the association between a method call and the method implementation is resolved at compile-time.
* The compiler determines at compile-time which method implementation should be invoked based on the reference type.
* Static binding is used for method calls on objects, static methods, and final methods.

   Example:

   ```java
   class Animal {
       void sound() {
           System.out.println("Animal makes a sound");
       }
   }

   class Dog extends Animal {
       void sound() {
           System.out.println("Dog barks");
       }
   }

   public class Test {
       public static void main(String[] args) {
           Animal animal = new Dog();
           animal.sound(); // Static binding based on the reference type (Animal)
       }
   }
   ```

   In this example, even though the actual object is of type `Dog`, the method `sound()` from the `Animal` class is called because the reference type is `Animal`.

### 2. **Dynamic Binding (Late Binding or Runtime Polymorphism):**

* Dynamic binding occurs during runtime, and the association between a method call and the method implementation is resolved at runtime.
* Dynamic binding is achieved through method overriding (when a subclass provides a specific implementation for a method defined in its superclass).
* It is applicable only for non-static, non-final, and non-private methods.

   Example:

   ```java
   class Animal {
       void sound() {
           System.out.println("Animal makes a sound");
       }
   }

   class Dog extends Animal {
       void sound() {
           System.out.println("Dog barks");
       }
   }

   public class Test {
       public static void main(String[] args) {
           Animal animal = new Dog();
           animal.sound(); // Dynamic binding, calls the overridden method in Dog class
       }
   }
   ```

   In this example, because the reference type is `Animal`, but the actual object is of type `Dog`, the `sound()` method in the `Dog` class is called at runtime. This is dynamic binding in action.

Dynamic binding is a fundamental concept in achieving polymorphism in object-oriented programming, allowing for flexibility and extensibility in designing class hierarchies.

## 24. Cqrs Pattern, what is the solution scenario used

The Command Query Responsibility Segregation (CQRS) pattern is a design pattern that separates the responsibilities for reading and writing data in a system. In a traditional architecture, the same model is often used for both reading and writing operations. CQRS suggests splitting the model into two parts: one for handling commands (changing state) and another for handling queries (reading state).

**Solution Scenario for CQRS:**

### 1. **Separation of Concerns:**

* **Scenario:**
  * In a complex application, the requirements for reading data (queries) and writing data (commands) can be different.
  * Performance and scalability considerations may vary between reading and writing operations.

* **Solution:**
  * CQRS allows you to create separate models for handling reads and writes.
  * The read model can be optimized for query performance and can be denormalized to suit the specific needs of different views.
  * The write model focuses on processing commands and updating the system's state.

### 2. **Scalability:**

* **Scenario:**
  * Some systems may experience different scalability requirements for read and write operations.
  * Reads are often more frequent than writes in many applications.

* **Solution:**
  * CQRS enables independent scaling of the read and write components.
  * Read models can be replicated or distributed to multiple servers for improved read performance, while the write model can be optimized for handling command processing.

### 3. **Flexibility and Optimization:**

* **Scenario:**
  * Business requirements for reporting and analytics may differ from the requirements for transactional processing.
  * Read models might need to be denormalized or transformed to suit specific reporting needs.

* **Solution:**
  * CQRS allows flexibility in designing read models tailored to specific query requirements.
  * You can optimize read models for specific use cases, aggregating data from multiple sources or transforming it as needed for presentation.

### 4. **Event Sourcing:**

* **Scenario:**
  * Storing the state changes as a series of events can be valuable for auditing, debugging, or rebuilding the state at any point in time.

* **Solution:**
  * CQRS is often used in conjunction with event sourcing. Instead of storing the current state of the system, events are stored, and the system's state can be reconstructed by replaying these events.
  * Event sourcing can be particularly useful in scenarios where the history of state changes is important.

### 5. **Complex Domain Logic:**

* **Scenario:**
  * In domains with complex business logic, separating read and write responsibilities can lead to a more maintainable and comprehensible system.

* **Solution:**
  * CQRS allows for the creation of a domain model that focuses on handling commands and enforcing business rules without the complexities introduced by read-specific concerns.
  * Read models can be simpler and optimized for efficient querying.

It's important to note that while CQRS provides benefits, it also adds complexity to a system. Therefore, it's generally recommended to apply CQRS in scenarios where the separation of concerns and independent scalability of read and write components provide significant advantages for the specific requirements of the application.

## 25. What build tool used

Apache Maven
Gradle

## 26. What is the difference between install and deploy

* Running an installer executable to install a software application on a computer.
* Deploying a web application to a web server or a cloud service.

## Eden space in java

* Eden space is a java memory pool where objects are created. When the eden space is full, the garbage collector either removes objects

## PermGen Space (Permanent Generation) and Meta Space

![HeapPermgenSpace.png](images/HeapPermgenSpace.png)

### PerGen vs Meta space

![permGenVsMetaData.png](images/permGenVsMetaData.png)

## URL vs URI

* In short, all URLs are URIs, but not all URIs are URLs.
* URI syntax ```scheme:[//authority]path[?query][#fragment]```
* ![UrlUri.png](images/UrlUri.png)

## [Session management](https://www.javainuse.com/spring/springboot_session)

* Session management can be achieved in one of the following ways-
* Cookies
* Hidden form field
* URL Rewriting
* HttpSession

## Loggers

* ![Loggers.png](images/Loggers.png)

# [Strings](https://www.guru99.com/java-strings.html)

## String vs StringBuffer vs StringBuilder, String Pool

### String vs StringBuffer

<div style="padding: 15px 15px 2px 25px;border-radius: 50px; width: 400px;font-family: Arial, Helvetica, sans-serif;background: -moz-linear-gradient(#ffe6cc, #ffa64d);
background: -webkit-linear-gradient(#ffe6cc, #ffa64d);background: -o-linear-gradient(#ffe6cc, #ffa64d);color: black;">
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
</div>

![StringBufferBuilder.png](images/StringBufferBuilder.png)

* String is immutable whereas StringBuffer(Thread safe, syncronized, java1.0, slower) and StringBuilder(Opposite to StrngBuffer, java1.5) are mutable classes.
* StringBuffer is thread-safe and synchronized whereas StringBuilder is not. That’s why StringBuilder is faster than StringBuffer.
* String concatenation operator (+) internally uses StringBuffer or StringBuilder class.
* For String manipulations in a non-multi threaded environment, we should use StringBuilder else use StringBuffer class.

### [String pool](https://www.javatpoint.com/string-pool-in-java)

* String pool is nothing but a storage area in Java heap where string literals stores. It is also known as String Intern Pool
* It is just like object allocation. By default, it is empty and privately maintained by the Java String class.

```java
String literal = "Sarath";  //This is string literal
String object = new String("Sarath"); //This is string object
// Same values in
String literal == String object; //False
String literal == String literal; //True
```

### [String Literal vs String Object](https://www.geeksforgeeks.org/string-initialization-java-string-literal-vs-string-object/)

#### String Literal

* When declaring String, we are actually calling ***intern()*** method

## String Manipulation__

***Concat***

```java
String str1 = "Rock";
String str2 = "Star";
//Method 1 : Using concat
String str3 = str1.concat(str2);
```

## concat() vs plus(+) operator

* concat() method is better than the + operator because it creates a new object only when the string length is greater than zero(0) but the + operator always creates a new string irrespective of the length of the string.

## Deep copy vs shallow copy

* In Shallow copy, a copy of the original object is stored and only the reference address is finally copied.
* In Deep copy, the copy of the original object and the repetitive copies both are stored.

## Why string is immutable in java

* In the String constant pool, a String object is likely to have one or many references.
* If several references point to the same String without even knowing it, it would be bad if one of the references modified that String value.
* That's why String objects are immutable.

* `Integer`, `Long`, `Short`, `Byte`, `Character`, `Float`, `Double`, `Boolean`—specifically highlighted the numeric and boolean wrapper classes. I didn't mean to imply that other wrapper classes, including `String`, are not immutable.

To clarify:

1. **Immutable Wrapper Classes:**

* `Integer`, `Long`, `Short`, `Byte`, `Character`, `Float`, `Double`, `Boolean`

2. **Immutable Non-numeric Wrapper Class:**

* `Character` (It represents a character, not a numeric value.)

3. **Immutable Non-wrapper Class:**

* `String`

The `String` class in Java is indeed immutable,

### String

* **Immutable:**
  * Once a `String` object is created, its value cannot be changed. Any operation that appears to modify a `String` actually creates a new `String` instance.

* **Thread Safety:**
  * Immutability makes strings inherently thread-safe. Multiple threads can safely share and access the same string without the need for synchronization.

* **Consistency:**
  * Immutability ensures that the content of a string remains constant throughout its lifetime, making it easier to reason about and use in various contexts.

* **Hash Code Stability:**
  * Strings can be safely used as keys in hash maps, and their hash codes remain constant over time.

* **Security:**
  * Immutability contributes to the security of the Java platform, especially in scenarios where strings are used in security-sensitive contexts.

In summary, both the numeric and boolean wrapper classes (`Integer`, `Long`, `Short`, `Byte`, `Character`, `Float`, `Double`, `Boolean`) and the `String` class in Java are examples of immutable classes. Immutability provides several benefits, including thread safety, consistency, and security.

### [***To Create immutable class***](https://www.digitalocean.com/community/tutorials/how-to-create-immutable-class-in-java)

* Set the class name as final ``public final calss ClassName``
* set variable declared as final and private ``private final string variablename;``
* No setter(), only getter() should be used. ``getter()``
* Make deep copy for object using constructor.

### ***To Create Singleton class***

1. `private static Database dbObject;` - Private static object of the same class
2. `private Database()` - Private constructor
3. `public static Database getInstance()` - getInstance method

## Wrapper Class with AutoBoxing

* To create a wrapper class

```java
public class MyInteger {
    private int value;

    // Constructor
    public MyInteger(int value) {
        this.value = value;
    }

    // Getter
    public int getValue() {
        return value;
    }

    // Setter
    public void setValue(int value) {
        this.value = value;
    }

    // Additional methods as needed

    // Method demonstrating autoboxing
    public void setIntegerValue(Integer integerValue) {
        // Autoboxing occurs when a primitive int is passed as an argument
        this.value = integerValue;
    }

    public static void main(String[] args) {
        // Creating an instance of the custom wrapper class
        MyInteger myIntWrapper = new MyInteger(42);

        // Accessing the wrapped value
        int retrievedValue = myIntWrapper.getValue();
        System.out.println("Wrapped Value: " + retrievedValue);

        // Modifying the wrapped value
        myIntWrapper.setValue(100);
        System.out.println("Modified Value: " + myIntWrapper.getValue());

        // Demonstrating autoboxing
        myIntWrapper.setIntegerValue(123); // Autoboxing occurs here
        System.out.println("Autoboxed Value: " + myIntWrapper.getValue());
    }
}

```

## URL vs URI

| URL | URI |
|------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL: Uniform Resource Locator has the information<br/> regarding fetching of a resource from its location | Uniform Resource Identifier is the full form of URI<br/> which is used for identifying each resource of the REST architecture. URI is of the format: |
| ```<Protocol><domain><path>``` | ```<protocol>://<service-name>/<ResourceType>/<ResourceID>``` |
| ![img_15.png](images/img_15.png) | ![img_14.png](images/img_14.png) |

## Authentication and Authorization

* Authentication is the process of identifying a user to provide access to a system.
* Authorization is the process of giving permission to access the resources.
* In this, the user or client and server are verified. In this, it is verified that if the user is allowed through the defined policies and rules.

## [Association, Composition and Aggregation in Java](<https://www.geeksforgeeks.org/association-composition-> -java/)

![AssosiationAggregation.png](images/AssosiationAggregation.png)

In Springboot MongoDB for join queries - [Link](https://www.javaprogramto.com/2020/05/spring-boot-data-mongodb-projections-aggregations.html)

Association is a relation between two separate classes which establishes through their objects. Association can be one-to-one, one-to-many, many-to-one, many-to-many. In Object-Oriented programming, an Object communicates to another object to use functionality and services provided by that object. Composition and Aggregation are the two forms of association.

## [Arbitrary Number of Arguments and @SafeVarags](https://www.geeksforgeeks.org/safevarargs-annotation-in-java-9-with-example/)

To use varargs, have to follow the last parameter by an ellipsis (three dots, ...)

```
private void print(List... topics)
{
  for (List<String> topic : topics) 
  {
    System.out.println(topic);
  }
}
```

Here compiler will warn you that I am not going to check your code. I am not going to check the values you will add to ArrayList are of any particular type or not. That’s why it will throw unsafe operation warnings at the compile time.

```
@SafeVarargs
private void print(List... topics)
{
  for (List<String> topic : topics) 
  {
    System.out.println(topic);
  }
}
```

Suppose If you want to run the above code in JDK 7 or JDK 8 then you will get a compilation error because these enhancements are done in Java 9, prior to java 9 – private methods are not allowed to be marked with this annotation.

```
@SafeVarargs
public final void add(T... toAdd)
{
  for (T topic : toAdd) 
  {
    topics.add(topic);
  }
}
```

___
***

Yet to do

<https://www.geeksforgeeks.org/serialversionuid-in-java/>

***

<https://wiki.sei.cmu.edu/confluence/display/java/OBJ58-J.+Limit+the+extensibility+of+classes+and+methods+with+invariants>

***
****

# Junit

<https://www.java2novice.com/junit-examples/junit-annotations/>

***

## Java Questions

1. Sort employee Array using java 7 and 8
2. Difference/similarities between Arraylist vs Linkedlist
3. Explain ConcurrentModification Exception
4. Explain abstract and interface
5. What is functional interface
6. Why we use lambda expression
   Lambda expressions in Java provide a concise and expressive way to represent anonymous functions. They were introduced in Java 8 as part of the Java SE 8 release, along with the functional programming features. Here are some reasons why lambda expressions are used in Java:

1. **Conciseness:**

* Lambda expressions allow you to express instances of single-method interfaces (functional interfaces) more concisely compared to using anonymous classes. This leads to cleaner and more readable code.

   **Example:**

   ```java
   // Without lambda expression
   Runnable runnable = new Runnable() {
       public void run() {
           System.out.println("Hello, World!");
       }
   };

   // With lambda expression
   Runnable runnableLambda = () -> System.out.println("Hello, World!");
   ```

2. **Functional Interfaces:**

* Lambda expressions are primarily used with functional interfaces, which are interfaces with a single abstract method. They allow you to treat functionality as a method argument, enabling a more functional programming style.

   **Example:**

   ```java
   // Functional interface
   interface MyFunctionalInterface {
       void myMethod();
   }

   // Using lambda expression with functional interface
   MyFunctionalInterface myFunction = () -> System.out.println("My Method");
   ```

3. **Readability:**

* Lambda expressions improve the readability of code, especially when dealing with functional programming constructs like streams and predicates. They allow you to express the logic more directly.

   **Example:**

   ```java
   // Without lambda expression
   List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
   numbers.forEach(new Consumer<Integer>() {
       public void accept(Integer n) {
           System.out.println(n);
       }
   });

   // With lambda expression
   numbers.forEach(n -> System.out.println(n));
   ```

4. **Functional Programming:**

* Lambda expressions facilitate functional programming concepts, such as passing behavior as an argument, which makes it easier to write more modular and reusable code.

   **Example:**

   ```java
   List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

   // Without lambda expression
   Collections.sort(names, new Comparator<String>() {
       public int compare(String s1, String s2) {
           return s1.compareTo(s2);
       }
   });

   // With lambda expression
   Collections.sort(names, (s1, s2) -> s1.compareTo(s2));
   ```

5. **Parallelism:**

* Lambda expressions play a crucial role in enabling parallelism and concurrency through the use of the Streams API. They make it easier to write parallelizable code by expressing operations that can be executed concurrently.

   **Example:**

   ```java
   List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

   // Without lambda expression
   int sum = 0;
   for (int number : numbers) {
       sum += number;
   }

   // With lambda expression and parallel stream
   int sumParallel = numbers.parallelStream().reduce(0, (x, y) -> x + y);
   ```

Lambda expressions, along with functional interfaces, contribute to making Java code more expressive, readable, and suitable for functional programming paradigms. They are particularly valuable in scenarios where concise, single-purpose behavior is required, such as in the case of functional interfaces or functional programming constructs like streams and parallel processing.
7. How will you maintain code standards
8. Deployment in GCP
9. How to check application health
10. Explain Polymorphism and encapsulation
11. Major Issues in the project.
12. Singleton design pattern
14. How to deploy in jenkins
15. Thumb rule of Junit testing
16. Why String is immutable?
17. What is try catch finally
18. Stream api
19. Parallel stream
20. Inbuilt methods in stream.
21. Find duplicates using the stream.
22. Sort the numbers using comparator/comparable.
23. Collections in java
24. Predicate in java 8
25. Optional in java 8
26. Uses of map in stream function
27. Multithreading
28. Synchronisation in java
29. Difference between runtime and checked exceptions.
30. Explain the try with resources
31. Serialization
32. Explain Some of the features in Java 8
33. Java streams API methods and its uses with example.
34. In filter streams, what is the return type?
35. What is method reference.
36. How many class you can create inside try with resources?
37. Given an employee array and asked to list it in code by filtering it's name and age using streams.
38. an employee array and asked to list employees with particular employee name and age and asked to return true using stream.
39. how will you group the employeeList by age alone.
40. how do you list sum of ages in an employeeList?
41. Given an employee array and asked to list it in code by filtering it's name.
42. types of string declaration and how it stores internally
43. How to create a immutable class?
44. Brief run() method.
45. Difference between Fail fast and fail safe.
46. Explain Hashmap and hash set.
47. Integer[20,10,25,9,7] find max 3 numbers using streamAPI.
48. What is purpose of default method in interface
49. public class Calculator {
    public int add(int a, int b) {
    return a + b;
    }

        public float add(float a, float b) {
            return a + b;
        }

        public double add(double a, double b) {
            return a + b;
        }

}
How will you simplify the boiler plate code for the above program? return a+b should not be used again and again but it should be compatible for all the three return types?
50. Static Keyword in method, class and variable with example.
51. Throw and Throws explain with example.
52. Default vs Static Methods in functionalInterface in Java8

| Communication | Check |
|--------------------|-------------------------------------------------------------------------------------------------|
| Coding Skill | Should be ready for write pseudo code |
| Java Concept | Java Concept, Spring, collections, Threads , Java 8 |
| Database knowledge | Schema, data model…etc |
| Unix | Basic commands , cp, grep, mv, cd, pwd, ls, ftp, ssh, find. Ps, |
| SQL/PLSQL | Joining of the two table ( one to many, may to One mapping scenario), inter join, Outerjoin etc |
| CI/CD | Deployments.. |
