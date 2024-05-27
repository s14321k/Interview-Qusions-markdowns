<!-- TOC -->

- [Java 8 streams vs collections](#java-8-streams-vs-collections)
  - [Stream API](#stream-api)
    - [Stream is a part of collection interface](#stream-is-a-part-of-collection-interface)
      - [Key Differences](#key-differences)
      - [Example](#example)
        - [Collections Example](#collections-example)
        - [Streams Example](#streams-example)
    - [Intermediate \& Terminal](#intermediate--terminal)
  - [Collectors from java.util.stream](#collectors-from-javautilstream)
- [JAVA8 to JAVA17 And Java8 and java17](#java8-to-java17-and-java8-and-java17)
  - [Java 8 (March 2014)](#java-8-march-2014)
  - [Java 9 (September 2017)](#java-9-september-2017)
  - [Java 10 (March 2018)](#java-10-march-2018)
  - [Java 11 (September 2018)](#java-11-september-2018)
  - [Java 12 (March 2019)](#java-12-march-2019)
  - [Java 13 (September 2019)](#java-13-september-2019)
  - [Java 14 (March 2020)](#java-14-march-2020)
  - [Java 15 (September 2020)](#java-15-september-2020)
  - [Java 16 (March 2021)](#java-16-march-2021)
  - [Java 17 (September 2021)](#java-17-september-2021)
  - [Java 8](#java-8)
  - [1. Lambda Expression and Stream API](#1-lambda-expression-and-stream-api)
    - [Why do we need lambda?](#why-do-we-need-lambda)
    - [Before Lambda and Stream API](#before-lambda-and-stream-api)
    - [Using Stream and Lambda, IntStream](#using-stream-and-lambda-intstream)
      - [Why lambda expression is used?](#why-lambda-expression-is-used)
      - [map() and flatMap() in streamAPI](#map-and-flatmap-in-streamapi)
  - [2. Method Reference](#2-method-reference)
    - [Without Method Reference](#without-method-reference)
    - [Using Method Referance](#using-method-referance)
  - [3. Default Methods](#3-default-methods)
  - [4. Type Annotations](#4-type-annotations)
    - [1. Local variable definition @NotNull](#1-local-variable-definition-notnull)
    - [2. Constructor Call @NotEmpty](#2-constructor-call-notempty)
    - [3. Generic Type @Email](#3-generic-type-email)
  - [5. Double colon operator in java](#5-double-colon-operator-in-java)
    - [Syntax](#syntax)
  - [6. Optional](#6-optional)
    - [Why use `Optional`?](#why-use-optional)
    - [Basics of `Optional`:](#basics-of-optional)
      - [Example:](#example-1)
      - [Date Time API](#date-time-api)
      - [StringJoiner](#stringjoiner)
      - [Record class \& Sealed classes](#record-class--sealed-classes)
  - [7. Collections improvements](#7-collections-improvements)
    - [1. **Streams API**](#1-streams-api)
      - [Key Features:](#key-features)
      - [Example:](#example-2)
    - [2. **Default Methods in Interfaces**](#2-default-methods-in-interfaces)
      - [Key Default Methods:](#key-default-methods)
    - [3. **New Methods in the Map Interface**](#3-new-methods-in-the-map-interface)
      - [Key Methods:](#key-methods)
    - [4. **Collectors Utility Class**](#4-collectors-utility-class)
      - [Example:](#example-3)
    - [5. **Improvements in Concurrent Collections**](#5-improvements-in-concurrent-collections)
      - [Example:](#example-4)
- [Java 9](#java-9)
  - [1. Closing a Resource with try-with-resources](#1-closing-a-resource-with-try-with-resources)
    - [2. Private interface methods](#2-private-interface-methods)
    - [Records in java](#records-in-java)

---

# [Java 8 streams vs collections](https://www.java2novice.com/java_interview_questions/java-8-streams-vs-collection-framework/)

## Stream API

[Video Link](https://youtu.be/lyl2Y5rwfx4?si=WiTKZxZDzVDnEVFV)

### Stream is a part of collection interface

In Java, both Streams and Collections are part of the Java Collections Framework, but they serve different purposes and have distinct characteristics. Here's a comparison of Streams and Collections in Java:

| **_Collections_**                                                                                                                                                                                                                                                  | **_Streams_**                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Purpose**: <br/> Collections are primarily used to store and manage groups of objects. They provide various data structures like `List`, `Set`, `Queue`, and `Map`.                                                                                              | **Purpose**: <br/> Streams are used for processing sequences of elements, providing a functional approach to manipulate data. They support operations like filter, map, reduce, and collect. |
| **Data Storage**: <br/> Collections store data in-memory and allow for data retrieval, insertion, deletion, and updating.                                                                                                                                          | **Data Processing**: <br/> Streams process data in a pipeline, allowing for operations to be chained together. They do not store data themselves.                                            |
| **Mutability**: <br/> Collections can be modified (add, remove, update elements).                                                                                                                                                                                  | **Immutability**: <br/> Streams are inherently immutable. Operations on streams produce new streams rather than modifying the original source.                                               |
| **Iteration**: <br/> Collections can be iterated using `for-each` loops or iterators.                                                                                                                                                                              | **Iteration**: <br/> Streams use internal iteration, meaning the stream library does the iteration behind the scenes, unlike the external iteration used with collections.                   |
| **Performance**: <br/> Performance can vary based on the type of collection and the operations performed (e.g., `ArrayList` vs `LinkedList`).                                                                                                                      | **Performance**: <br/> Streams can be optimized for performance, especially with parallel streams that can leverage multi-core processors for parallel processing.                           |
| **Thread Safety**: <br/> Some collections are synchronized (e.g., `Vector`, `Hashtable`), while others are not (e.g., `ArrayList`, `HashMap`). For non-synchronized collections, thread-safety can be achieved using wrappers like `Collections.synchronizedList`. | **Thread Safety**: <br/> Streams themselves are not thread-safe. However, parallel streams can be used for concurrent operations, provided the underlying data source is handled safely.     |

#### Key Differences

- **Usage Context**: Use Collections for data storage and manipulation. Use Streams for data processing and transformation.
- **State**: Collections hold the data and have state (elements stored within them). Streams are stateless and operate on data from collections or other sources.
- **Operations**: Collections focus on CRUD operations (Create, Read, Update, Delete). Streams focus on transformations and processing operations like filter, map, and reduce.
- **Laziness**: Stream operations are lazy; they are not executed until a terminal operation is invoked. Collections operations are eager.
- **Parallelism**: Streams can easily handle parallel operations using `parallelStream()`, while collections require more manual handling for concurrency.

#### Example

##### Collections Example

```java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

for (String name : names) {
    System.out.println(name);
}
```

##### Streams Example

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

names.stream()
     .filter(name -> name.startsWith("A"))
     .map(String::toUpperCase)
     .forEach(System.out::println);  // Outputs: ALICE
```

In summary, choose Collections when you need to store, modify, or access elements, and use Streams when you need to perform complex data processing operations in a functional and declarative style.

### Intermediate & Terminal

Can be categorized into two types:

- `Intermediate operations`
  - Returns a stream.
  - And lazy loading.
  - Means these functions will be invoked only if we declare the terminal operators.
- `Terminal operations`
  - Doesn't return a stream. Instead, returns other objects.
  - And eagerly loaded.
  - Only one terminal is allowed that too at the end.

| **Intermediate Operations:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **Terminal Operations:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| These operations transform a stream into another stream.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | These operations produce a result or a side effect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| They are usually lazy, meaning they don't process elements until a terminal operation is invoked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | When a terminal operation is invoked, the stream is processed, and the result is obtained.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Examples include `filter`, `map`, `flatMap`, `distinct`, `sorted`, `peek`, `limit`, and `skip`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Terminal operations are eager and consume the stream. Examples include `forEach`, `toArray`, `reduce`, `collect`, `min`, `max`, `count`, `anyMatch`, `allMatch`, `noneMatch`, `findAny`, `findFirst`, `iterator`, `spliterator`, `isParallel`, `sequential`, `parallel`, and `unordered`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **`filter(Predicate<T> predicate): Stream<T>`** <br/> Returns a stream consisting of the elements that match the given predicate. <br/> Example: `stream.filter(x -> x > 5)` <br/> <br/> **`map(Function<T, R> mapper): Stream<R>`** <br/> Returns a stream consisting of the results of applying the given function to the elements. <br/> Example: `stream.map(x -> x * 2)` <br/> <br/> **`flatMap(Function<T, Stream<R>> mapper): Stream<R>`** <br/> Returns a stream consisting of the results of replacing each element with the contents of a mapped stream. <br/> Example: `stream.flatMap(x -> Stream.of(x, x * 2))` <br/> <br/> **`distinct(): Stream<T>`** <br/> Returns a stream consisting of the distinct elements (according to their natural order or provided comparator) of the original stream. <br/> Example: `stream.distinct()` <br/> <br/> **`sorted(): Stream<T>`** <br/> Returns a stream consisting of the elements sorted according to their natural order. <br/> Example: `stream.sorted()` <br/> <br/> **`peek(Consumer<T> action): Stream<T>`** <br/> Returns a stream consisting of the elements of this stream, additionally performing the provided action on each element. <br/> Example: `stream.peek(x -> System.out.println(x))` <br/> <br/> **`limit(long maxSize): Stream<T>`** <br/> Returns a stream consisting of the elements of this stream, truncated to be no longer than `maxSize`. <br/> Example: `stream.limit(5)` <br/> <br/> **`skip(long n): Stream<T>`** <br/> Returns a stream consisting of the remaining elements of this stream after discarding the first `n` elements. <br/> Example: `stream.skip(3)` | **`forEach(Consumer<T> action): void`** <br/> Performs an action for each element of the stream. <br/> Example: `stream.forEach(x -> System.out.println(x))` <br/> <br/> **`toArray(): Object[]`** <br/> Returns an array containing the elements of this stream. <br/> Example: `Object[] array = stream.toArray()` <br/> <br/> **`reduce(BinaryOperator<T> accumulator): Optional<T>`** <br/> Performs a reduction on the elements of the stream using an associative accumulation function and returns an Optional. <br/> Example: `Optional<Integer> result = stream.reduce((a, b) -> a + b)` <br/> <br/> **`collect(Collector<T, A, R> collector): R`** <br/> Performs a mutable reduction operation on the elements of the stream using a Collector. <br/> Example: `List<Integer> list = stream.collect(Collectors.toList())` <br/> <br/> **`min(Comparator<T> comparator): Optional<T>`** <br/> Returns the minimum element of the stream according to the provided comparator. <br/> Example: `Optional<Integer> min = stream.min(Comparator.naturalOrder())` <br/> <br/> **`max(Comparator<T> comparator): Optional<T>`** <br/> Returns the maximum element of the stream according to the provided comparator. <br/> Example: `Optional<Integer> max = stream.max(Comparator.naturalOrder())` <br/> <br/> **`count(): long`** <br/> Returns the count of elements in the stream. <br/> Example: `long count = stream.count()` <br/> <br/> **`anyMatch(Predicate<T> predicate): boolean`** <br/> Returns whether any elements of the stream match the given predicate. <br/> Example: `boolean anyMatch = stream.anyMatch(x -> x > 5)` <br/> <br/> **`allMatch(Predicate<T> predicate): boolean`** <br/> Returns whether all elements of the stream match the given predicate. <br/> Example: `boolean allMatch = stream.allMatch(x -> x > 5)` <br/> <br/> **`noneMatch(Predicate<T> predicate): boolean`** <br/> Returns whether no elements of the stream match the given predicate. <br/> Example: `boolean noneMatch = stream.noneMatch(x -> x < 0)` <br/> <br/> **`findAny(): Optional<T>`** <br/> Returns an arbitrary element of the stream (or an empty Optional if the stream is empty). <br/> Example: `Optional<Integer> anyElement = stream.findAny()` <br/> <br/> **`findFirst(): Optional<T>`** <br/> Returns the first element of the stream (or an empty Optional if the stream is empty). <br/> Example: `Optional<Integer> firstElement = stream.findFirst()` <br/> <br/> **`iterator(): Iterator<T>`** <br/> Returns an iterator for the elements of the stream. <br/> Example: `Iterator<Integer> iterator = stream.iterator()` <br/> <br/> **`spliterator(): Spliterator<T>`** <br/> Returns a Spliterator for the elements of the stream. <br/> Example: `Spliterator<Integer> spliterator = stream.spliterator()` <br/> <br/> **`isParallel(): boolean`** <br/> Returns whether the stream is parallel. <br/> Example: `boolean isParallel = stream.isParallel()` <br/> <br/> **`sequential(): Stream<T>`** <br/> Returns an equivalent sequential stream. <br/> Example: `Stream<Integer> sequentialStream = stream.sequential()` <br/> <br/> **`parallel(): Stream<T>`** <br/> Returns an equivalent parallel stream. <br/> Example: `Stream<Integer> parallelStream = stream.parallel()` <br/> <br/> **`unordered(): Stream<T>`** <br/> Returns an equivalent stream with an unordered characteristic. <br/> Example: `Stream<Integer> unorderedStream = stream.unordered()` |

These two categories help in understanding the role and purpose of each method within the Stream API. Intermediate operations allow you to build a pipeline of transformations, and terminal operations produce a final result or perform an action. Combining these operations enables powerful and concise stream processing in Java.

## Collectors from java.util.stream

The `Collectors` class in the `java.util.stream` package provides various static methods for creating `Collector` instances. These methods are used to perform mutable reduction operations on streams, such as accumulating elements into collections, summarizing elements according to various criteria, and more. Here is a list of common methods provided by `Collectors`, along with short explanations and examples:

1. **toList()**

   - Collects elements of a stream into a `List`.
   - Example:
     ```java
     List<String> list = stream.collect(Collectors.toList());
     ```

2. **toSet()**

   - Collects elements of a stream into a `Set`.
   - Example:
     ```java
     Set<String> set = stream.collect(Collectors.toSet());
     ```

3. **toMap()**

   - Collects elements of a stream into a `Map`.
   - Example:
     ```java
     Map<Integer, String> map = stream.collect(Collectors.toMap(String::length, Function.identity()));
     ```

4. **toCollection()**

   - Collects elements of a stream into a specified collection.
   - Example:
     ```java
     Collection<String> collection = stream.collect(Collectors.toCollection(ArrayList::new));
     ```

5. **joining()**

   - Concatenates the elements of a stream into a single `String`.
   - Example:
     ```java
     String result = stream.collect(Collectors.joining(", "));
     ```

6. **joining(CharSequence delimiter)**

   - Concatenates the elements of a stream into a single `String` with a specified delimiter.
   - Example:
     ```java
     String result = stream.collect(Collectors.joining(", "));
     ```

7. **joining(CharSequence delimiter, CharSequence prefix, CharSequence suffix)**

   - Concatenates the elements of a stream into a single `String` with a specified delimiter, prefix, and suffix.
   - Example:
     ```java
     String result = stream.collect(Collectors.joining(", ", "[", "]"));
     ```

8. **counting()**

   - Counts the number of elements in a stream.
   - Example:
     ```java
     long count = stream.collect(Collectors.counting());
     ```

9. **summarizingInt(ToIntFunction<? super T> mapper)**

   - Collects statistics, such as count, sum, min, average, and max, for the elements of a stream.
   - Example:
     ```java
     IntSummaryStatistics stats = stream.collect(Collectors.summarizingInt(String::length));
     ```

10. **summarizingDouble(ToDoubleFunction<? super T> mapper)**

    - Collects statistics for the elements of a stream (double values).
    - Example:
      ```java
      DoubleSummaryStatistics stats = stream.collect(Collectors.summarizingDouble(String::length));
      ```

11. **summarizingLong(ToLongFunction<? super T> mapper)**

    - Collects statistics for the elements of a stream (long values).
    - Example:
      ```java
      LongSummaryStatistics stats = stream.collect(Collectors.summarizingLong(String::length));
      ```

12. **averagingInt(ToIntFunction<? super T> mapper)**

    - Calculates the average of the integer values extracted from the elements of a stream.
    - Example:
      ```java
      double average = stream.collect(Collectors.averagingInt(String::length));
      ```

13. **averagingDouble(ToDoubleFunction<? super T> mapper)**

    - Calculates the average of the double values extracted from the elements of a stream.
    - Example:
      ```java
      double average = stream.collect(Collectors.averagingDouble(String::length));
      ```

14. **averagingLong(ToLongFunction<? super T> mapper)**

    - Calculates the average of the long values extracted from the elements of a stream.
    - Example:
      ```java
      double average = stream.collect(Collectors.averagingLong(String::length));
      ```

15. **groupingBy(Function<? super T, ? extends K> classifier)**

    - Groups elements of a stream by a classifier function.
    - Example:
      ```java
      Map<Integer, List<String>> groupedByLength = stream.collect(Collectors.groupingBy(String::length));
      ```

16. **groupingBy(Function<? super T, ? extends K> classifier, Collector<? super T, A, D> downstream)**

    - Groups elements of a stream by a classifier function, and applies a downstream collector to the grouped elements.
    - Example:
      ```java
      Map<Integer, Set<String>> groupedByLength = stream.collect(Collectors.groupingBy(String::length, Collectors.toSet()));
      ```

17. **partitioningBy(Predicate<? super T> predicate)**

    - Partitions elements of a stream into two groups based on a predicate.
    - Example:
      ```java
      Map<Boolean, List<String>> partitioned = stream.collect(Collectors.partitioningBy(s -> s.length() > 3));
      ```

18. **partitioningBy(Predicate<? super T> predicate, Collector<? super T, A, D> downstream)**

    - Partitions elements of a stream into two groups based on a predicate, and applies a downstream collector to the partitioned elements.
    - Example:
      ```java
      Map<Boolean, Set<String>> partitioned = stream.collect(Collectors.partitioningBy(s -> s.length() > 3, Collectors.toSet()));
      ```

19. **reducing(BinaryOperator<T> op)**

    - Performs a reduction on the elements of a stream using an associative accumulation function, and returns an `Optional`.
    - Example:
      ```java
      Optional<String> concatenated = stream.collect(Collectors.reducing(String::concat));
      ```

20. **reducing(T identity, BinaryOperator<T> op)**

    - Performs a reduction on the elements of a stream using an identity value and an associative accumulation function.
    - Example:
      ```java
      String concatenated = stream.collect(Collectors.reducing("", String::concat));
      ```

21. **`reducing(U identity, Function<? super T, ? extends U> mapper, BinaryOperator<U> op)`**

    - Performs a reduction on the elements of a stream using an identity value, a mapping function, and an associative accumulation function.
    - Example:
      ```java
      Integer sumOfLengths = stream.collect(Collectors.reducing(0, String::length, Integer::sum));
      ```

22. **collectingAndThen(Collector<T, A, C> downstream, Function<C, D> finisher)**

    - Adapts a `Collector` to perform an additional finishing transformation.
    - Example:
      ```java
      List<String> unmodifiableList = stream.collect(Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList));
      ```

23. **maxBy(Comparator<? super T> comparator)**

    - Finds the maximum element of a stream according to a comparator.
    - Example:
      ```java
      Optional<String> max = stream.collect(Collectors.maxBy(Comparator.naturalOrder()));
      ```

24. **minBy(Comparator<? super T> comparator)**
    - Finds the minimum element of a stream according to a comparator.
    - Example:
      ```java
      Optional<String> min = stream.collect(Collectors.minBy(Comparator.naturalOrder()));
      ```

These are the primary methods provided by the `Collectors` class for working with streams in Java. Each method helps to transform or reduce the elements of a stream into a desired result.

# [JAVA8 to JAVA17](https://reflectoring.io/java-release-notes/) And [Java8 and java17](https://pretius.com/blog/java-17-features/)

### Java 8 (March 2014)

1. **Lambda Expressions**: Enable functional programming by allowing you to pass behavior as a parameter.
2. **Streams API**: Facilitates functional-style operations on sequences of elements.
3. **Default Methods**: Allow methods in interfaces to have a default implementation.
4. **Optional Class**: Helps in handling null values more gracefully.
5. **New Date and Time API**: Provides a comprehensive and flexible date-time management system.
6. **Nashorn JavaScript Engine**: Allows JavaScript to be embedded within Java applications.
7. **Method References**: Provide a way to refer to methods without invoking them.
8. **Type Annotations**: Extended the annotation system to support annotations on any use of a type.

### Java 9 (September 2017)

1. **Module System (Project Jigsaw)**: Introduces modularization of the Java platform itself.
2. **JShell**: Interactive tool for learning and prototyping Java code.
3. **Improved Javadoc**: Enhanced with a search capability.
4. **Collection Factory Methods**: New methods to easily create lists, sets, and maps.
5. **Process API Updates**: Improved API for managing and controlling operating system processes.
6. **Reactive Streams**: Incorporates the Flow API to support reactive programming.
7. **Private Interface Methods**: Allow private methods in interfaces.

### Java 10 (March 2018)

1. **Local-Variable Type Inference**: Introduced the `var` keyword to allow local variables to be inferred.
2. **Garbage-Collector Interface**: Clean separation of the garbage collector from other components.
3. **Application Class-Data Sharing**: Improves startup time by sharing common class metadata across processes.

### Java 11 (September 2018)

1. **New String Methods**: Methods like `lines()`, `strip()`, `repeat()`, `isBlank()`, etc.
2. **Local-Variable Syntax for Lambda Parameters**: Allows the use of `var` in lambda expressions.
3. **HTTP Client**: New standard HTTP client API introduced.
4. **Nest-Based Access Control**: Simplifies access between nested classes.
5. **Deprecations and Removals**: Removed Java EE and CORBA modules.

### Java 12 (March 2019)

1. **Switch Expressions (Preview)**: Extends `switch` to be used as an expression.
2. **Default CDS Archives**: Enhances class-data sharing.
3. **Shenandoah GC (Experimental)**: Low-pause time garbage collector.
4. **Microbenchmark Suite**: Introduces a suite for performance testing.

### Java 13 (September 2019)

1. **Text Blocks (Preview)**: Multi-line string literals to improve readability.
2. **Switch Expressions (Preview)**: Further refinements to switch expressions.
3. **Dynamic CDS Archives**: Improves application class-data sharing.

### Java 14 (March 2020)

1. **Pattern Matching for `instanceof` (Preview)**: Simplifies type checks and casting.
2. **Records (Preview)**: Introduces a compact syntax for declaring data carrier classes.
3. **Helpful NullPointerExceptions**: Improved exception messages for `NullPointerException`.
4. **Text Blocks (Second Preview)**: Further refinements to text blocks.

### Java 15 (September 2020)

1. **Sealed Classes (Preview)**: Restricts which classes can extend or implement them.
2. **Hidden Classes**: Supports dynamic class loading.
3. **Text Blocks**: Finalizes the text blocks feature.
4. **Pattern Matching for `instanceof` (Second Preview)**: Further refinements.

### Java 16 (March 2021)

1. **Pattern Matching for `instanceof`**: Finalizes the pattern matching feature.
2. **Records**: Finalizes the records feature.
3. **Sealed Classes (Second Preview)**: Further refinements.
4. **Vector API (Incubator)**: Introduces an API for expressing vector computations.

### Java 17 (September 2021)

1. **Sealed Classes**: Finalizes the sealed classes feature.
2. **Pattern Matching for `switch` (Preview)**: Extends pattern matching to `switch`.
3. **Foreign Function & Memory API (Incubator)**: Enables Java programs to interoperate with code and data outside of the JVM.
4. **New MacOS Rendering Pipeline**: Improved rendering for macOS.
5. **Deprecate the Applet API for Removal**: Signals the eventual removal of the Applet API.
6. **Strongly Encapsulate JDK Internals**: Encapsulates most internal elements of the JDK.

These are the key features and changes introduced in each version. There are many other smaller changes, enhancements, and bug fixes included in each release as well.

## [Java 8](https://www.tutorialspoint.com/java8/index.htm)

1. Lambda Expression and Stream API](#1-lambda-expression-and-stream-api)
2. [Method Reference](#2-method-reference)
3. [Default Methods](#3-default-methods)
4. [Type Annotations](#4-type-annotations)
5. Repeating Annotations
6. Method Parameter Reflection
7. Collections Improvements

## 1. Lambda Expression and Stream API

- The stream API and lambda expressions are the new features that move us closer to functional programming.

### Why do we need lambda?

1. **Conciseness** &rarr; Single method interface instead of anonymous class. Leads to readable code.
2. **Functional Interfaces:** &rarr; Lambda are primarily used with functional interface.
3. **Readability** &rarr; Improves readability with functioal programming concepts like streams and predicate.

```java
   // Without lambda expression
   Runnable runnable = new Runnable()
   {
       public void run()
       {
            System.out.println("Hello, World!");
       }
   };

// With lambda expression
Runnable runnableLambda = () -> System.out.println("Hello, World!");
```

### Before Lambda and Stream API

```java
public class LambdaExpressions
{
    public static List<Car> findCarsOldWay(List<Car> cars)
    {
        List<Car> selectedCars = new ArrayList<>();
        for (Car car : cars)
        {
            if (car.kilometers < 50000)
            {
            selectedCars.add(car);
            }
        }
        return selectedCars;
    }
}
```

### Using Stream and Lambda, [IntStream](https://www.tutorialspoint.com/how-to-use-intstream-in-lambdas-and-method-references-in-java#:~:text=An%20IntStream%20interface%20extends%20the,lambda%20expressions%20and%20method%20references.)

```java
public class LambdaExpressions
{
    public static List<Car> findCarsUsingLambda(List<Car> cars)
    {
        return cars.stream().filter(car -> car.kilometers < 50000).collect(Collectors.toList());
    }
}
```

#### [Why lambda expression is used?](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/lambda-quickstart/index.html#section2)

- Lambda expression is a block of code which takes in parameter and returns a value. It is similar to methods, but do not need a name.

#### map() and flatMap() in streamAPI

In Java Stream API, `map` and `flatMap` are two distinct operations that are used for transforming the elements of a stream. They serve different purposes, and understanding when to use each is important.

1. **`map`**:

- `map` is used to transform each element in a stream to another element based on a provided function.
- It applies the mapping function to each element and produces a one-to-one mapping.
- The result is a stream of the same length as the original, with each element transformed according to the mapping function.
- Use `map` when you want to apply a function to each element in the stream and get a stream of the transformed elements.

Example:

```java
List<String> words = List.of("Hello", "World");
List<Integer> lengths = words.stream()
    .map(String::length)
    .collect(Collectors.toList());
// Result: [5, 5]
```

2. **`flatMap`**:

- `flatMap` is used when you want to transform each element into a stream of values, and then flatten those streams into a single stream.
- It is typically used when the mapping function returns a `Stream` or a collection of elements, and you want to combine the results into a single stream.
- Use `flatMap` when you want to perform a one-to-many mapping operation and flatten the results.

Example:

```java
List<List<Integer>> list = List.of(List.of(1, 2), List.of(3, 4, 5));
List<Integer> flattenedList = list.stream()
    .flatMap(Collection::stream)
    .collect(Collectors.toList());
// Result: [1, 2, 3, 4, 5]
```

In summary, if you want to apply a function to each element in a stream and get a stream of transformed elements, use `map`. If you want to transform each element into a stream of values and then flatten those streams into a single stream, use `flatMap`. The choice between them depends on the nature of the transformation and the desired output structure.

## 2. [Method Reference](https://www.javatpoint.com/java-8-method-reference)

A method reference allows us to call functions in classes using a special kind of syntax ::. There are four kinds of method references:

- Reference to a static method
- Reference to an instance method on a object
- Reference to an instance method on a type
- Reference to a constructor

### Without Method Reference

```java
public class MethodReference
{
    List<String> withoutMethodReference =
            cars.stream().map(car -> car.toString())
                    .collect(Collectors.toList());
}
```

### Using Method Referance

```java
public class MethodReference
{
    List<String> methodReference = cars.stream().map(Car::toString)
            .collect(Collectors.toList());
}
```

## 3. Default Methods

We are adding a new method but not implementing it inside all client classes.

```java
public class DefaultMethods
{

    public interface Logging
    {
        void log(String message);

        default void log(String message, Date date)
        {
            System.out.println(date.toString() + ": " + message);
        }
    }
}
```

## 4. Type Annotations

- a local variable definition
- constructor calls
- type casting
- generics
- throw clauses and more

### 1. Local variable definition @NotNull

```java
public class TypeAnnotations
{
    public static void main(String[] args)
    {
        @NotNull String userName = args[0];
    }
}
```

### 2. Constructor Call @NotEmpty

```java
public class TypeAnnotations
{

    public static void main(String[] args)
    {
        List<String> request =
                new @NotEmpty ArrayList<>(Arrays.stream(args).collect(
                        Collectors.toList()));
    }
}
```

Again, an annotation processor can evaluate the annotation and check if the array list is not empty.

### 3. Generic Type @Email

```java
public class TypeAnnotations
{
    public static void main(String[] args)
    {
        List<@Email String> emails;
    }
}
```

## 5. Double colon operator in java

- Double colon (::) operator, also known as method reference operator in Java, is used to call a method by referring to it with the help of its class directly.
- They behave exactly as the lambda expressions.
- The only difference it has from lambda expressions is that this uses direct reference to the method by name instead of providing a delegate to the method.

#### Syntax

`<Class name>::<method name>`

## 6. Optional

- `Optional` is a class introduced in Java 8 as part of the java.util package.
- It is designed to address the issue of null values and the associated NullPointerExceptions in a more expressive and safer way.
- `Optional` is a container object that may or may not contain a non-null value.

### Why use `Optional`?

1. **Avoidance of Null Checks:**

   - It helps in avoiding explicit null checks in your code, making it more readable and less error-prone.

2. **Expressiveness:**

   - The use of `Optional` makes your code more expressive by indicating that a value may be absent, and you explicitly handle that scenario.

3. **Encouraging Best Practices:**
   - It encourages developers to handle the presence or absence of a value explicitly, promoting better coding practices.

### Basics of `Optional`:

1. **Creating an `Optional`:**
   - Use `Optional.of(value)` to create an `Optional` with a non-null value.
   - Use `Optional.empty()` to create an empty `Optional`.

```java
Optional<String> nonEmptyOptional = Optional.of("Hello");
Optional<String> emptyOptional = Optional.empty();
```

2. **Handling the Value:**
   - Use `get()` to retrieve the value if it is present. However, this method should be used cautiously to avoid NoSuchElementException.

```java
Optional<String> nonEmptyOptional = Optional.of("Hello");
String value = nonEmptyOptional.get(); // Retrieves the value if present
```

3. **Avoiding `get()`:**
   - Instead of using `get()`, use methods like `isPresent()`, `ifPresent(Consumer)`, or `orElse(T)` to safely access the value or provide a default if it's absent.

```java
Optional<String> optional = Optional.ofNullable(getValue());

if (optional.isPresent()) {
   System.out.println("Value is present: " + optional.get());
} else {
   System.out.println("Value is absent");
}

optional.ifPresent(val -> System.out.println("Value: " + val));

String result = optional.orElse("Default Value");
```

4. **Chaining Operations:**

   - You can chain operations using methods like `map`, `filter`, or `flatMap` to perform transformations or additional checks on the value.

   ```java
   Optional<String> optional = Optional.of("Hello");

   Optional<Integer> length = optional.map(String::length);
   ```

5. **Avoiding NullPointerException:**

   - By using `Optional`, you can avoid potential NullPointerExceptions that may occur when directly dealing with nullable values.

   ```java
   // Without Optional
   String value = getValue();
   if (value != null) {
       // proceed with value
   } else {
       // handle absence
   }

   // With Optional
   Optional<String> optional = Optional.ofNullable(getValue());
   optional.ifPresent(val -> {
       // proceed with value
   });
   ```

#### Example:

Here's an example demonstrating the use of `Optional`:

```java
import java.util.Optional;

public class OptionalExample {

    public static void main(String[] args) {
        // Creating an Optional with a non-null value
        Optional<String> nonEmptyOptional = Optional.of("Hello");

        // Creating an empty Optional
        Optional<String> emptyOptional = Optional.empty();

        // Handling the value using ifPresent
        nonEmptyOptional.ifPresent(val -> System.out.println("Value is present: " + val));

        // Using orElse to provide a default value if absent
        String result = emptyOptional.orElse("Default Value");
        System.out.println("Result: " + result);

        // Chaining operations using map
        Optional<Integer> length = nonEmptyOptional.map(String::length);
        length.ifPresent(len -> System.out.println("Length: " + len));
    }

    private static String getValue() {
        // Simulating a method that may return null
        return Math.random() > 0.5 ? "Hello" : null;
    }
}
```

In this example, we create `Optional` instances, handle their values, and chain operations using `map`. The use of `Optional` enhances code readability and safety by explicitly handling the presence or absence of a value.

#### [Date Time API](https://www.geeksforgeeks.org/new-date-time-api-java8/)

1. Not thread safe : Unlike old java.util.Date which is not thread safe the new date-time API is immutable and doesn’t have setter methods.
2. Less operations : In old API there are only few date operations but the new API provides us with many date operations.

#### [StringJoiner](https://www.javatpoint.com/java-stringjoiner)

- It is used to construct a sequence of charecters seperated by a delimeter like comma(,), hyphen(-) etc.

#### [Record class](<https://www.linkedin.com/advice/0/how-do-you-use-records-sealed-classes-features-introduced#:~:text=In%20Java%2017%2C%20records%20simplify,hashCode()%2C%20and%20toString().>) & Sealed classes

- record class and sealed classes.

---

###3 Functional Interface

- **Can we extend functional interface class A with another functional interface class B? Does the class A remains functional interface class?**

```java
@FunctionalInterface
interface A {
    void methodA();
}

@FunctionalInterface
interface B extends A {
    // No additional abstract methods
}
```

- In this example, interface B extends interface A. Since A has one abstract method (methodA), and B does not introduce any new abstract methods, B is also a functional interface.

## 7. Collections improvements

### 1. **Streams API**

The Streams API provides a powerful and expressive way to process collections of objects in a functional style. Streams enable operations such as filtering, mapping, and reducing to be performed in a concise and readable manner.

#### Key Features:

- **Stream Creation**: Collections can be converted to streams using methods like `Collection.stream()` and `Collection.parallelStream()`.
- **Intermediate Operations**: These operations transform a stream into another stream (e.g., `filter()`, `map()`, `sorted()`).
- **Terminal Operations**: These operations produce a result or a side-effect and terminate the stream (e.g., `collect()`, `forEach()`, `reduce()`).

#### Example:

```java
List<String> myList = Arrays.asList("a", "b", "c", "d");
myList.stream()
      .filter(s -> s.startsWith("a"))
      .forEach(System.out::println);
```

### 2. **Default Methods in Interfaces**

Java 8 introduced default methods (also known as defender methods) to interfaces. This allows new methods to be added to interfaces without breaking existing implementations.

#### Key Default Methods:

- **`forEach`**: Iterates over each element of the collection and performs an action.
  ```java
  myList.forEach(System.out::println);
  ```
- **`removeIf`**: Removes elements from the collection that satisfy a given predicate.
  ```java
  myList.removeIf(s -> s.startsWith("a"));
  ```
- **`spliterator`**: Returns a Spliterator over the elements in the collection, which can be used for parallel processing.
- **`stream`**: Returns a sequential Stream with this collection as its source.
- **`parallelStream`**: Returns a possibly parallel Stream with this collection as its source.

### 3. **New Methods in the Map Interface**

The `Map` interface also received several new methods to simplify common operations.

#### Key Methods:

- **`forEach`**: Iterates over each entry in the map and performs an action.
  ```java
  myMap.forEach((key, value) -> System.out.println(key + "=" + value));
  ```
- **`getOrDefault`**: Returns the value associated with the key, or a default value if the key is not present.
  ```java
  String value = myMap.getOrDefault("key", "default value");
  ```
- **`putIfAbsent`**: Adds the specified key-value pair to the map if the key is not already present.
  ```java
  myMap.putIfAbsent("key", "value");
  ```
- **`remove`**: Removes the entry for a key only if it is currently mapped to a specified value.
  ```java
  boolean removed = myMap.remove("key", "value");
  ```
- **`replace`**: Replaces the entry for a key only if it is currently mapped to a specified value.
  ```java
  boolean replaced = myMap.replace("key", "oldValue", "newValue");
  ```
- **`compute`, `computeIfAbsent`, `computeIfPresent`**: Methods for computing a value for a given key based on the old value.
  ```java
  myMap.computeIfAbsent("key", k -> "value");
  ```
- **`merge`**: Merges the value with the existing value for the specified key.
  ```java
  myMap.merge("key", "newValue", (oldValue, newValue) -> oldValue + newValue);
  ```

### 4. **Collectors Utility Class**

Java 8 introduced the `Collectors` utility class which provides various useful reduction operations, such as accumulating elements into collections, summarizing elements according to various criteria, etc.

#### Example:

```java
List<String> filteredList = myList.stream()
                                  .filter(s -> s.startsWith("a"))
                                  .collect(Collectors.toList());
```

### 5. **Improvements in Concurrent Collections**

Java 8 also included enhancements to concurrent collections, especially with new methods to support lambdas and streams. For instance, the `ConcurrentHashMap` class was updated with methods such as `forEach`, `reduce`, and `search`.

#### Example:

```java
ConcurrentMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);
map.put("b", 2);
map.forEach((key, value) -> System.out.println(key + "=" + value));
```

These enhancements significantly improve the expressiveness, conciseness, and functionality of the Java Collections Framework, making it more powerful and easier to use in a functional programming style.

# Java 9

## 1. Closing a Resource with try-with-resources

```java
public class TryWithResources
{
    public static void main(String[] args)
    {
        final BufferedReader br3 = new BufferedReader(
                                    new StringReader("Hello world example3!"));
        try (BufferedReader reader = br3)
        {
            System.out.println(reader.readLine());
        }
        catch (IOException e)
        {
            System.out.println("Error happened!");
        }
    }
}
```

#### 2. Private interface methods

https://www.tutorialspoint.com/java8/index.htm

#### [Records in java](https://howtodoinjava.com/java/java-record-type/)

- Like `Enum` Records is also a special class.
