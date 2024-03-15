<!-- TOC -->
* [Java 8 streams vs collections](#java-8-streams-vs-collections)
  * [Stream API](#stream-api)
    * [1. **Intermediate Operations:**](#1-intermediate-operations)
    * [2. **Terminal Operations:**](#2-terminal-operations)
    * [Methods of Stream API](#methods-of-stream-api)
* [JAVA8 to JAVA17](#java8-to-java17)
  * [Java 8](#java-8)
  * [1. Lambda Expression and Stream API](#1-lambda-expression-and-stream-api)
    * [Why do we need lambda?](#why-do-we-need-lambda)
    * [Before Lambda and Stream API](#before-lambda-and-stream-api)
    * [Using Stream and Lambda, IntStream](#using-stream-and-lambda-intstream)
      * [Why lambda expression is used?](#why-lambda-expression-is-used)
      * [map() and  flatMap() in streamAPI](#map-and--flatmap-in-streamapi)
  * [2. Method Reference](#2-method-reference)
    * [Without Method Reference](#without-method-reference)
    * [Using Method Referance](#using-method-referance)
  * [3. Default Methods](#3-default-methods)
  * [4. Type Annotations](#4-type-annotations)
    * [1. Local variable definition @NotNull](#1-local-variable-definition-notnull)
    * [2. Constructor Call @NotEmpty](#2-constructor-call-notempty)
    * [3. Generic Type @Email](#3-generic-type-email)
  * [5. Double colon operator in java](#5-double-colon-operator-in-java)
      * [Syntax](#syntax)
  * [6. Optional](#6-optional)
    * [Why use `Optional`?](#why-use-optional)
    * [Basics of `Optional`:](#basics-of-optional)
    * [Example:](#example)
  * [Date Time API](#date-time-api)
* [Java 9](#java-9)
  * [1. Closing a Resource with try-with-resources](#1-closing-a-resource-with-try-with-resources)
  * [2. Private interface methods](#2-private-interface-methods)
<!-- TOC -->

***

# [Java 8 streams vs collections](https://www.java2novice.com/java_interview_questions/java-8-streams-vs-collection-framework/)
## Stream API
Can be categorized into two types: intermediate operations and terminal operations.

### 1. **Intermediate Operations:**
  - These operations transform a stream into another stream. 
  - They are usually lazy, meaning they don't process elements until a terminal operation is invoked. 
  - Examples include `filter`, `map`, `flatMap`, `distinct`, `sorted`, `peek`, `limit`, and `skip`.

### 2. **Terminal Operations:**
  - These operations produce a result or a side-effect. 
  - When a terminal operation is invoked, the stream is processed, and the result is obtained. 
  - Terminal operations are eager and consume the stream. Examples include `forEach`, `toArray`, `reduce`, `collect`, `min`, `max`, `count`, `anyMatch`, `allMatch`, `noneMatch`, `findAny`, `findFirst`, `iterator`, `spliterator`, `isParallel`, `sequential`, `parallel`, and `unordered`.

These two categories help in understanding the role and purpose of each method within the Stream API. Intermediate operations allow you to build a pipeline of transformations, and terminal operations produce a final result or perform an action. Combining these operations enables powerful and concise stream processing in Java.

### Methods of Stream API
The Stream API in Java provides a rich set of methods for working with streams. Here's a comprehensive list of methods along with their return types and a brief description of how to use them:

1. **Intermediate Operations:**

  - **`filter(Predicate<T> predicate): Stream<T>`**
    - Returns a stream consisting of the elements that match the given predicate.
    - Example: `stream.filter(x -> x > 5)`

  - **`map(Function<T, R> mapper): Stream<R>`**
    - Returns a stream consisting of the results of applying the given function to the elements.
    - Example: `stream.map(x -> x * 2)`

  - **`flatMap(Function<T, Stream<R>> mapper): Stream<R>`**
    - Returns a stream consisting of the results of replacing each element with the contents of a mapped stream.
    - Example: `stream.flatMap(x -> Stream.of(x, x * 2))`

  - **`distinct(): Stream<T>`**
    - Returns a stream consisting of the distinct elements (according to their natural order or provided comparator) of the original stream.
    - Example: `stream.distinct()`

  - **`sorted(): Stream<T>`**
    - Returns a stream consisting of the elements sorted according to their natural order.
    - Example: `stream.sorted()`

  - **`peek(Consumer<T> action): Stream<T>`**
    - Returns a stream consisting of the elements of this stream, additionally performing the provided action on each element.
    - Example: `stream.peek(x -> System.out.println(x))`

  - **`limit(long maxSize): Stream<T>`**
    - Returns a stream consisting of the elements of this stream, truncated to be no longer than `maxSize`.
    - Example: `stream.limit(5)`

  - **`skip(long n): Stream<T>`**
    - Returns a stream consisting of the remaining elements of this stream after discarding the first `n` elements.
    - Example: `stream.skip(3)`

2. **Terminal Operations:**

  - **`forEach(Consumer<T> action): void`**
    - Performs an action for each element of the stream.
    - Example: `stream.forEach(x -> System.out.println(x))`

  - **`toArray(): Object[]`**
    - Returns an array containing the elements of this stream.
    - Example: `Object[] array = stream.toArray()`

  - **`reduce(BinaryOperator<T> accumulator): Optional<T>`**
    - Performs a reduction on the elements of the stream using an associative accumulation function and returns an Optional.
    - Example: `Optional<Integer> result = stream.reduce((a, b) -> a + b)`

  - **`collect(Collector<T, A, R> collector): R`**
    - Performs a mutable reduction operation on the elements of the stream using a Collector.
    - Example: `List<Integer> list = stream.collect(Collectors.toList())`

  - **`min(Comparator<T> comparator): Optional<T>`**
    - Returns the minimum element of the stream according to the provided comparator.
    - Example: `Optional<Integer> min = stream.min(Comparator.naturalOrder())`

  - **`max(Comparator<T> comparator): Optional<T>`**
    - Returns the maximum element of the stream according to the provided comparator.
    - Example: `Optional<Integer> max = stream.max(Comparator.naturalOrder())`

  - **`count(): long`**
    - Returns the count of elements in the stream.
    - Example: `long count = stream.count()`

  - **`anyMatch(Predicate<T> predicate): boolean`**
    - Returns whether any elements of the stream match the given predicate.
    - Example: `boolean anyMatch = stream.anyMatch(x -> x > 5)`

  - **`allMatch(Predicate<T> predicate): boolean`**
    - Returns whether all elements of the stream match the given predicate.
    - Example: `boolean allMatch = stream.allMatch(x -> x > 5)`

  - **`noneMatch(Predicate<T> predicate): boolean`**
    - Returns whether no elements of the stream match the given predicate.
    - Example: `boolean noneMatch = stream.noneMatch(x -> x < 0)`

  - **`findAny(): Optional<T>`**
    - Returns an arbitrary element of the stream (or an empty Optional if the stream is empty).
    - Example: `Optional<Integer> anyElement = stream.findAny()`

  - **`findFirst(): Optional<T>`**
    - Returns the first element of the stream (or an empty Optional if the stream is empty).
    - Example: `Optional<Integer> firstElement = stream.findFirst()`

  - **`iterator(): Iterator<T>`**
    - Returns an iterator for the elements of the stream.
    - Example: `Iterator<Integer> iterator = stream.iterator()`

  - **`spliterator(): Spliterator<T>`**
    - Returns a Spliterator for the elements of the stream.
    - Example: `Spliterator<Integer> spliterator = stream.spliterator()`

  - **`isParallel(): boolean`**
    - Returns whether the stream is parallel.
    - Example: `boolean isParallel = stream.isParallel()`

  - **`sequential(): Stream<T>`**
    - Returns an equivalent sequential stream.
    - Example: `Stream<Integer> sequentialStream = stream.sequential()`

  - **`parallel(): Stream<T>`**
    - Returns an equivalent parallel stream.
    - Example: `Stream<Integer> parallelStream = stream.parallel()`

  - **`unordered(): Stream<T>`**
    - Returns an equivalent stream with an unordered characteristic.
    - Example: `Stream<Integer> unorderedStream = stream.unordered()`

These are the main methods provided by the Java Stream API. The examples provided are illustrative and may not represent actual use cases in your application. Make sure to adapt them based on your specific requirements.


# [JAVA8 to JAVA17](https://reflectoring.io/java-release-notes/)

# [Java8 and java17](https://pretius.com/blog/java-17-features/)

## [Java 8](https://www.tutorialspoint.com/java8/index.htm)
- [1. Lambda Expression and Stream API](#1-lambda-expression-and-stream-api)
- [2. Method Reference](#2-method-reference)
- [3. Default Methods](#3-default-methods)
- [4. Type Annotations](#4-type-annotations)
5. Repeating Annotations
6. Method Parameter Reflection

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

<pre tabindex="0" style="color:#f8f8f2;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(71,0,255,0.18);">
<code class="language-java" data-lang="java">
<span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">LambdaExpressions</span>
<span style="color:#f92672">{</span>
    <span style="color:#66d9ef">public</span> <span style="color:#66d9ef">static</span> List<span style="color:#f92672">&lt;</span>Car<span style="color:#f92672">&gt;</span> <span style="color:#a6e22e">findCarsOldWay</span><span style="color:#f92672">(</span>List<span style="color:#f92672">&lt;</span>Car<span style="color:#f92672">&gt;</span> cars<span style="color:#f92672">)</span>
    <span style="color:#f92672">{</span>
    List<span style="color:#f92672">&lt;</span>Car<span style="color:#f92672">&gt;</span> selectedCars <span style="color:#f92672">=</span> <span style="color:#66d9ef">new</span> ArrayList<span style="color:#f92672">&lt;&gt;();</span>
        <span style="color:#66d9ef">for</span> <span style="color:#f92672">(</span>Car car <span style="color:#f92672">:</span> cars<span style="color:#f92672">)</span> 
        <span style="color:#f92672">{</span>
            <span style="color:#66d9ef">if</span> <span style="color:#f92672">(</span>car<span style="color:#f92672">.</span><span style="color:#a6e22e">kilometers</span> <span style="color:#f92672">&lt;</span> 50000<span style="color:#f92672">)</span> 
            <span style="color:#f92672">{</span>
                selectedCars<span style="color:#f92672">.</span><span style="color:#a6e22e">add</span><span style="color:#f92672">(</span>car<span style="color:#f92672">);</span>
            <span style="color:#f92672">}</span>
        <span style="color:#f92672">}</span>
        <span style="color:#66d9ef">return</span> selectedCars<span style="color:#f92672">;</span>
    <span style="color:#f92672">}</span>
<span style="color:#f92672">}</span>
</code></pre>


### Using Stream and Lambda, [IntStream](https://www.tutorialspoint.com/how-to-use-intstream-in-lambdas-and-method-references-in-java#:~:text=An%20IntStream%20interface%20extends%20the,lambda%20expressions%20and%20method%20references.)

<pre tabindex="0" style="color:#f8f8f2;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(121,98,48,0.44);">
<code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">LambdaExpressions</span>
<span style="color:#f92672">{</span>
    <span style="color:#66d9ef">public</span> <span style="color:#66d9ef">static</span> List<span style="color:#f92672">&lt;</span>Car<span style="color:#f92672">&gt;</span> <span style="color:#a6e22e">findCarsUsingLambda</span><span style="color:#f92672">(</span>List<span style="color:#f92672">&lt;</span>Car<span style="color:#f92672">&gt;</span> cars<span style="color:#f92672">)</span>
        <span style="color:#f92672">{</span>
            <span style="color:#66d9ef">return</span> cars<span style="color:#f92672">.</span><span style="color:#a6e22e">stream</span><span style="color:#f92672">().</span><span style="color:#a6e22e">filter</span><span style="color:#f92672">(</span>car <span style="color:#f92672">-&gt;</span> car<span style="color:#f92672">.</span><span style="color:#a6e22e">kilometers</span> <span style="color:#f92672">&lt;</span> 50000<span style="color:#f92672">)</span>
        <span style="color:#f92672">.</span><span style="color:#a6e22e">collect</span><span style="color:#f92672">(</span>Collectors<span style="color:#f92672">.</span><span style="color:#a6e22e">toList</span><span style="color:#f92672">());</span>
    <span style="color:#f92672">}</span>
<span style="color:#f92672">}</span>
</code>
</pre>

#### [Why lambda expression is used?](https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/lambda-quickstart/index.html#section2)
- Lambda expression is a block of code which takes in parameter and returns a value. It is similar to methods, but do not need a name.

#### map() and  flatMap() in streamAPI
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

<pre tabindex="0" style="color:#f8f8f2;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(133,51,8,0.37);"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">MethodReference</span>
<span style="color:#f92672">{</span>
    List<span style="color:#f92672">&lt;</span>String<span style="color:#f92672">&gt;</span> withoutMethodReference <span style="color:#f92672">=</span>
            cars<span style="color:#f92672">.</span><span style="color:#a6e22e">stream</span><span style="color:#f92672">().</span><span style="color:#a6e22e">map</span><span style="color:#f92672">(</span>car <span style="color:#f92672">-&gt;</span> car<span style="color:#f92672">.</span><span style="color:#a6e22e">toString</span><span style="color:#f92672">())</span>
                    <span style="color:#f92672">.</span><span style="color:#a6e22e">collect</span><span style="color:#f92672">(</span>Collectors<span style="color:#f92672">.</span><span style="color:#a6e22e">toList</span><span style="color:#f92672">());</span>
<span style="color:#f92672">}</span>
</code>
</pre>

### Using Method Referance

<pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">MethodReference</span> 
<span style="color:#f92672">{</span>
    List<span style="color:#f92672">&lt;</span>String<span style="color:#f92672">&gt;</span> methodReference <span style="color:#f92672">=</span> cars<span style="color:#f92672">.</span><span style="color:#a6e22e">stream</span><span style="color:#f92672">().</span><span style="color:#a6e22e">map</span><span style="color:#f92672">(</span>Car<span style="color:#f92672">::</span>toString<span style="color:#f92672">)</span>
            <span style="color:#f92672">.</span><span style="color:#a6e22e">collect</span><span style="color:#f92672">(</span>Collectors<span style="color:#f92672">.</span><span style="color:#a6e22e">toList</span><span style="color:#f92672">());</span>
<span style="color:#f92672">}</span>
</code></pre>

## 3. Default Methods

We are adding a new method but not implementing it inside all client classes.

<pre tabindex="0" style="color:#f8f8f2;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(13,224,206,0.18);"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">DefaultMethods</span> 
<span style="color:#f92672">{</span>

    <span style="color:#66d9ef">public</span> <span style="color:#66d9ef">interface</span> <span style="color:#a6e22e">Logging</span> 
    <span style="color:#f92672">{</span>
        <span style="color:#66d9ef">void</span> <span style="color:#a6e22e">log</span><span style="color:#f92672">(</span>String message<span style="color:#f92672">);</span>

        <span style="color:#66d9ef">default</span> <span style="color:#66d9ef">void</span> <span style="color:#a6e22e">log</span><span style="color:#f92672">(</span>String message<span style="color:#f92672">,</span> Date date<span style="color:#f92672">)</span> 
        <span style="color:#f92672">{</span>
            System<span style="color:#f92672">.</span><span style="color:#a6e22e">out</span><span style="color:#f92672">.</span><span style="color:#a6e22e">println</span><span style="color:#f92672">(</span>date<span style="color:#f92672">.</span><span style="color:#a6e22e">toString</span><span style="color:#f92672">()</span> <span style="color:#f92672">+</span> <span style="color:#e6db74">": "</span> <span style="color:#f92672">+</span> message<span style="color:#f92672">);</span>
        <span style="color:#f92672">}</span>
    <span style="color:#f92672">}</span>
<span style="color:#f92672">}</span>
</code></pre>

## 4. Type Annotations

 - a local variable definition
 - constructor calls 
 - type casting 
 - generics 
 - throw clauses and more

### 1. Local variable definition @NotNull

<span style="color:#a6e22e">@NotNull</span> - To ensure that our local variable does not end up as a null value

<pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(147,13,224,0.18);"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">TypeAnnotations</span> 
<span style="color:#f92672">{</span>
    <span style="color:#66d9ef">public</span> <span style="color:#66d9ef">static</span> <span style="color:#66d9ef">void</span> <span style="color:#a6e22e">main</span><span style="color:#f92672">(</span>String<span style="color:#f92672">[]</span> args<span style="color:#f92672">)</span> 
    <span style="color:#f92672">{</span>
        <span style="color:#a6e22e">@NotNull</span> String userName <span style="color:#f92672">=</span> args<span style="color:#f92672">[</span>0<span style="color:#f92672">];</span>
    <span style="color:#f92672">}</span>
<span style="color:#f92672">}</span>
</code></pre>

### 2. Constructor Call @NotEmpty
<span style="color:#a6e22e">@NotEmpty</span> - We make sure that we  cannot create an empty ArrayList

<pre tabindex="0" style="color:#f8f8f2;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(40,166,42,0.2);"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">TypeAnnotations</span>
<span style="color:#f92672">{</span>

    <span style="color:#66d9ef">public</span> <span style="color:#66d9ef">static</span> <span style="color:#66d9ef">void</span> <span style="color:#a6e22e">main</span><span style="color:#f92672">(</span>String<span style="color:#f92672">[]</span> args<span style="color:#f92672">)</span>
    <span style="color:#f92672">{</span>
        List<span style="color:#f92672">&lt;</span>String<span style="color:#f92672">&gt;</span> request <span style="color:#f92672">=</span>
                <span style="color:#66d9ef">new</span> <span style="color:#a6e22e">@NotEmpty</span> ArrayList<span style="color:#f92672">&lt;&gt;(</span>Arrays<span style="color:#f92672">.</span><span style="color:#a6e22e">stream</span><span style="color:#f92672">(</span>args<span style="color:#f92672">).</span><span style="color:#a6e22e">collect</span><span style="color:#f92672">(</span>
                        Collectors<span style="color:#f92672">.</span><span style="color:#a6e22e">toList</span><span style="color:#f92672">()));</span>
    <span style="color:#f92672">}</span>
<span style="color:#f92672">}</span>
</code></pre>

Again, an annotation processor can evaluate the annotation and check if the array list is not empty.

### 3. Generic Type @Email

<span style="color:#a6e22e">@Email</span> One of our requirements is that each email has to be in a format <name>@<company>.com. If we use type annotations, we can do it easily

<pre tabindex="0" style="color:#f8f8f2;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(13,111,224,0.18);"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">TypeAnnotations</span> 
<span style="color:#f92672">{</span>

    <span style="color:#66d9ef">public</span> <span style="color:#66d9ef">static</span> <span style="color:#66d9ef">void</span> <span style="color:#a6e22e">main</span><span style="color:#f92672">(</span>String<span style="color:#f92672">[]</span> args<span style="color:#f92672">)</span> 
    <span style="color:#f92672">{</span>
        List<span style="color:#f92672">&lt;</span><span style="color:#a6e22e">@Email</span> String<span style="color:#f92672">&gt;</span> emails<span style="color:#f92672">;</span>
    <span style="color:#f92672">}</span>
<span style="color:#f92672">}</span>
</code></pre>


## 5. Double colon operator in java
- Double colon (::) operator, also known as method reference operator in Java, is used to call a method by referring to it with the help of its class directly. 
- They behave exactly as the lambda expressions.
- The only difference it has from lambda expressions is that this uses direct reference to the method by name instead of providing a delegate to the method.

#### Syntax
```<Class name>::<method name>```

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

### Example:

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

## [Date Time API](https://www.geeksforgeeks.org/new-date-time-api-java8/)
1. Not thread safe : Unlike old java.util.Date which is not thread safe the new date-time API is immutable and doesn’t have setter methods.
2. Less operations : In old API there are only few date operations but the new API provides us with many date operations.

## [StringJoiner](https://www.javatpoint.com/java-stringjoiner)
* It is used to construct a sequence of charecters seperated by a delimeter like comma(,), hyphen(-) etc.

## [Record class](
https://www.linkedin.com/advice/0/how-do-you-use-records-sealed-classes-features-introduced#:~:text=In%20Java%2017%2C%20records%20simplify,hashCode()%2C%20and%20toString().)
* record class and sealed classes.
---

# Java 9

## 1. Closing a Resource with try-with-resources
```
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

## 2. Private interface methods

https://www.tutorialspoint.com/java8/index.htm


## [Records in java](https://howtodoinjava.com/java/java-record-type/)
* Like `Enum` Records is also a special class.