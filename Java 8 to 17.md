<!-- TOC -->
* [Java 8](#java-8)
  * [1. Lambda Expression and Stream API](#1-lambda-expression-and-stream-api)
    * [Before Lambda and Stream API](#before-lambda-and-stream-api)
    * [Using Steam and Lambda](#using-steam-and-lambda)
  * [2. Method Reference](#2-method-reference)
    * [Without Method Reference](#without-method-reference)
    * [Using Method Referance](#using-method-referance)
  * [3. Default Methods](#3-default-methods)
  * [4. Type Annotations](#4-type-annotations)
    * [1. Local variable definition    <span style="color:#a6e22e">@NotNull</span>](#1-local-variable-definition-span-stylecolora6e22enotnullspan)
    * [2. Constructor Call <span style="color:#a6e22e">@NotEmpty</span>](#2-constructor-call-span-stylecolora6e22enotemptyspan)
    * [3. Generic Type <span style="color:#a6e22e">@Email</span>](#3-generic-type-span-stylecolora6e22eemailspan)
  * [5. Double colon operator in java](#5-double-colon-operator-in-java)
      * [Syntax](#syntax)
* [Java 9](#java-9)
  * [1. Closing a Resource with try-with-resources](#1-closing-a-resource-with-try-with-resources)
  * [2. Private interface methods](#2-private-interface-methods)
<!-- TOC -->

***
[JAVA8 to JAVA17](https://reflectoring.io/java-release-notes/)

# [Java 8](https://www.tutorialspoint.com/java8/index.htm)
1. Lambda Expression and Stream API
2. Method Reference
3. Default Methods
4. Type Annotations
5. Repeating Annotations
6. Method Parameter Reflection

## 1. Lambda Expression and Stream API

The stream API and lambda expressions are the new features that move us closer to functional programming.

### Before Lambda and Stream API

<pre tabindex="0" style="color:#f8f8f2;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(71,0,255,0.18);"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">LambdaExpressions</span>
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


### Using Stream and Lambda

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

### 1. Local variable definition    <span style="color:#a6e22e">@NotNull</span>

To ensure that our local variable does not end up as a null value

<pre tabindex="0" style="color:#f8f8f2;background-color:#272822;-moz-tab-size:4;-o-tab-size:4;tab-size:4; padding: 10px 5px 10px 52px;border-radius: 20px;background:rgba(147,13,224,0.18);"><code class="language-java" data-lang="java"><span style="color:#66d9ef">public</span> <span style="color:#66d9ef">class</span> <span style="color:#a6e22e">TypeAnnotations</span> 
<span style="color:#f92672">{</span>
    <span style="color:#66d9ef">public</span> <span style="color:#66d9ef">static</span> <span style="color:#66d9ef">void</span> <span style="color:#a6e22e">main</span><span style="color:#f92672">(</span>String<span style="color:#f92672">[]</span> args<span style="color:#f92672">)</span> 
    <span style="color:#f92672">{</span>
        <span style="color:#a6e22e">@NotNull</span> String userName <span style="color:#f92672">=</span> args<span style="color:#f92672">[</span>0<span style="color:#f92672">];</span>
    <span style="color:#f92672">}</span>
<span style="color:#f92672">}</span>
</code></pre>

### 2. Constructor Call <span style="color:#a6e22e">@NotEmpty</span>
We make sure that we  cannot create an empty ArrayList

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

### 3. Generic Type <span style="color:#a6e22e">@Email</span>
One of our requirements is that each email has to be in a format <name>@<company>.com. If we use type annotations, we can do it easily

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

## 6. Optional<Object>
![img.png](images/Cache Flow.png)


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