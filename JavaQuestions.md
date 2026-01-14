# [Java Questions Link](https://www.java2novice.com/-)

[java visual rep](https://algorithm-visualizer.org/brute-force/insertion-sort)

<details open>
<summary>1. Java Program to Remove All Whitespaces Without Using replace()</summary>

### ✅ Problem
Remove all white spaces from a string **without using `replace()`**, using **Java 8 syntax** (Streams, Lambdas).

---

### 🔧 Java 8 Stream Solution

```java
import java.util.stream.Collectors;

public class RemoveWhiteSpaces {
    public static void main(String[] args) {
        String input = "  Java  8   Stream    Example  ";

        // Remove whitespaces without using replace()
        String result = input.chars()
            .filter(c -> !Character.isWhitespace(c))
            .mapToObj(c -> String.valueOf((char) c))
            .collect(Collectors.joining());

        System.out.println("Original : '" + input + "'");
        System.out.println("Without Spaces : '" + result + "'");
    }
}
````

```java

import java.util.*;
import java.util.stream.*;

public class Main
{
	public static void main(String[] args) {
		String str1 = "Communication process";
		
		Set<Character> uniqCharSet = new LinkedHashSet<>();
		
		String str2 = str1.chars().mapToObj(c -> String.valueOf((char) c)).distinct().collect(Collectors.joining());
		
		System.out.println(str2);
	}
}

```

---

### 📌 Output

```
Original : '  Java  8   Stream    Example  '
Without Spaces : 'Java8StreamExample'
```

---

### 🧠 Notes

* `.chars()` creates an `IntStream` of character codes.
* `.filter(c -> !Character.isWhitespace(c))` removes all whitespace.
* `.collect(Collectors.joining())` joins characters back into a string.

</details>

---

<details open>
<summary>2. Find the First Non-Duplicate Character in a String (Java 8)</summary>

### ✅ Problem
Find the first non-repeating character in a string.

Examples:
- `"Apple"` → `'A'`
- `"Madam"` → `'D'`

---

### 🔧 Java 8 Solution

```java
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FirstUniqueChar {
    public static void main(String[] args) {
        String input = "Apple";

        // Convert to uppercase for case-insensitive comparison (optional)
        String upperInput = input.toUpperCase();

        Optional<Character> firstNonRepeat = upperInput.chars()
            .mapToObj(c -> (char) c)
            .collect(Collectors.groupingBy(Function.identity(), LinkedHashMap::new, Collectors.counting()))
            .entrySet()
            .stream()
            .filter(entry -> entry.getValue() == 1)
            .map(Map.Entry::getKey)
            .findFirst();

        if (firstNonRepeat.isPresent()) {
            System.out.println("First non-duplicate character: " + firstNonRepeat.get());
        } else {
            System.out.println("No unique character found.");
        }
    }
}
```

---

### 📌 Output

```
First non-duplicate character: A
```

---

### 🧠 Notes

* `LinkedHashMap` maintains insertion order.
* `groupingBy(..., Collectors.counting())` counts character frequency.
* `findFirst()` returns the first character with frequency `1`.

```java
import java.util.*;
import java.util.stream.Collectors;

public class NonRepeatingNames {
    public static void main(String[] args) {
        List<String> names = List.of("Alice", "Bob", "Alice", "Charlie", "Bob", "David");
        Set<String> seen = new HashSet<>();
        Set<String> duplicates = new HashSet<>();
        
                // First pass: identify duplicates
                names.stream()
                        .filter(s -> !seen.add(s)) // For every element, try to add it to `seen`.
                                                   // If `add` returns false, it's a duplicate.
                        .forEach(duplicates::add); // Add all duplicates to the `duplicates` set.
        
                // Second pass: filter the original list again
                List<String> nonRepeatingNames = names.stream()
                        .filter(s -> !duplicates.contains(s)) // Keep elements that are not in the `duplicates` set.
                        .collect(Collectors.toList());
        
                System.out.println("Original list: " + names);
                System.out.println("Non-repeating names: " + nonRepeatingNames);
                // Output: [Charlie, David]
        }
}
```

```java

import java.util.*;
import java.util.stream.*;

public class Main
{
	public static void main(String[] args) {
		List<Integer> names = List.of(1,2,3,3,2,5,6,7,9);

        List<Integer> uniqueOnlyOnce = names.stream()
                .filter(name -> Collections.frequency(names, name) > 1)
                .collect(Collectors.toList());

        System.out.println(uniqueOnlyOnce);
	}
}

```

```java

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ChekUniqueInString {

    public static void main(String[] args) {
        String value = "hello world";
        List<Character> valueCharArr = value.chars()
                .mapToObj(s -> (char) s)
                .collect(Collectors.toList());
        valueCharArr.stream()
                .filter(s -> Collections.frequency(valueCharArr, s) == 1)
                .forEach(System.out::println);
    }
}

```

</details>

---

<details open>
<summary>3. Java Program to Find the Top 3 Highest Repeated Characters</summary>

### ✅ Problem

Given a string, find the **top 3 characters** that appear most frequently.

---

### 🧪 Example

For input:
```

"mississippi"

```

Expected Output:
```

s : 4
i : 4
p : 2

````

---

### 🔧 Java 8 Stream Solution

```java
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Top3FrequentCharacters {
    public static void main(String[] args) {
        String input = "mississippi";

        Map<Character, Long> frequencyMap = input.chars()
            .mapToObj(c -> (char) c)
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));

        frequencyMap.entrySet().stream()
            .sorted(Map.Entry.<Character, Long>comparingByValue(Comparator.reverseOrder()))
            .limit(3)
            .forEach(entry -> System.out.println(entry.getKey() + " : " + entry.getValue()));
    }
}
```

---

### 📌 Output for `"mississippi"`:

```
s : 4
i : 4
p : 2
```

---

### 🧠 Notes

* `groupingBy` with `Collectors.counting()` computes frequency.
* Sorted by value in **descending order**.
* `.limit(3)` picks the top 3.

</details>

---


<details open>
<summary>4. Find Missing Elements from One Array Compared to Another</summary>

### ✅ Problem

Given two arrays:

```java
int[] a = {1, 1, 2, 5, 6, 9};
int[] b = {2, 9, 5};
````

Find the elements in `a` that are **not present** in `b`, considering **duplicates**.

---

### 🧪 Expected Output

```
Missing elements: [1, 6]
```

---

### 🔧 Java 8 Solution (with Frequency Handling)

```java
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FindMissingElements {
    public static void main(String[] args) {
        int[] a = {1, 1, 2, 5, 6, 9};
        int[] b = {2, 9, 5};

        // Convert b to frequency map
        Map<Integer, Long> bFreq = Arrays.stream(b)
            .boxed()
            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        // Collect missing elements from a
        List<Integer> missing = new ArrayList<>();

        Arrays.stream(a).forEach(num -> {
            if (bFreq.getOrDefault(num, 0L) > 0) {
                bFreq.put(num, bFreq.get(num) - 1); // reduce count
            } else {
                missing.add(num);
            }
        });

        System.out.println("Missing elements: " + missing);
    }
}
```

---

### 📌 Output

```
Missing elements: [1, 6]
```

---

### 🧠 Notes

* Handles **frequency of duplicates** (e.g., only one `1` in `b` would not match two in `a`).
* Efficient and works with **any data order**.

---

Great question!

Let’s walk through **how to analyze the time complexity** of the Java 8 program that finds the **missing elements** when comparing two arrays `a` and `b`, considering duplicates.

---

### ✅ **Code Recap** (Core Logic Only)

```java
Map<Integer, Long> bFreq = Arrays.stream(b)
    .boxed()
    .collect(Collectors.groupingBy(...));

List<Integer> missing = new ArrayList<>();

Arrays.stream(a).forEach(num -> {
    if (bFreq.getOrDefault(num, 0L) > 0) {
        bFreq.put(num, bFreq.get(num) - 1);
    } else {
        missing.add(num);
    }
});
```

---

### 🧠 **Steps to Analyze Time Complexity**

Let’s assume:

* `n = a.length`
* `m = b.length`

#### 1. **Creating the frequency map for array `b`**

```java
Arrays.stream(b).boxed().collect(Collectors.groupingBy(...));
```

* Each of the `m` elements is processed once.
* Grouping and counting takes **O(m)** time.

#### 2. **Iterating over array `a`**

```java
Arrays.stream(a).forEach(num -> {...});
```

* Iterates over all `n` elements.
* Each lookup and update in a `HashMap` (i.e., `bFreq`) is **O(1)** on average.
* So, this loop runs in **O(n)** time.

#### 3. **Adding to missing list**

* Each unmatched element is added to a list (at most `n` elements).
* `missing.add(num)` is **O(1)** per operation → total **O(n)**.

---

### ✅ **Final Time Complexity**

```text
O(m)    // for building frequency map from array b
+ O(n)  // for scanning array a and updating/checking map
= O(n + m)
```

---

### ⏱️ **Time Complexity = `O(n + m)`**

* **Efficient linear time algorithm**, considering both arrays only once.
* Assumes `HashMap` operations (get, put) are **O(1) on average**.

---

### 📦 **Space Complexity**

* Frequency map stores up to `m` unique keys → **O(m)**.
* Missing list can store up to `n` elements → **O(n)**.

**Total space complexity: O(n + m)**

---

</details>

---

<details open>
<summary>6. Get Even Numbers from an Array Using Stream (Java 8)</summary>

### ✅ Problem
Extract all even numbers from an integer array using Java 8 streams.

---

### 🔧 Java 8 Solution

```java
import java.util.Arrays;

public class EvenNumbersStream {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        int[] evens = Arrays.stream(numbers)
            .filter(n -> n % 2 == 0)
            .toArray();

        System.out.println("Even numbers: " + Arrays.toString(evens));
    }
}
```

---

### 📌 Output

```
Even numbers: [2, 4, 6, 8, 10]
```

</details>

---

<details open>
<summary>7. Print a given array cyclically in a loop to output the desired pattern</summary>

Given Array: `[1, 2, 3, 4, 5, 6]`

Sample Outputs:
```
- **Group (Columns)**: 4  
  **Iterations (Rows)**: 7  
  **Output**:

1 2 3 4
5 6 1 2
3 4 5 6
1 2 3 4
5 6 1 2
3 4 5 6
1 2 3 4

- **Group**: 5  
  **Iterations**: 2  
  **Output**:


1 2 3 4 5
6 1 2 3 4

- **Group**: 3  
  **Iterations**: 3  
  **Output**:

1 2 3
4 5 6
1 2 3

```

### 🔸 Standard Java Implementation

```java
public class CyclicArrayPrinter {
  public static void main(String[] args) {
      int[] arr = {1, 2, 3, 4, 5, 6};
      int group = 4;       // Number of columns
      int iterations = 7;  // Number of rows

      int index = 0;
      for (int i = 0; i < iterations; i++) {
          for (int j = 0; j < group; j++) {
              System.out.print(arr[index] + " ");
              index = (index + 1) % arr.length; // Wrap around
          }
          System.out.println();
      }
  }
}
```

---

### 🔹 Java 8 Stream-Based Version

```java
import java.util.stream.IntStream;

public class CyclicArrayPrinter {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6};
        int group = 4;       // Number of columns
        int iterations = 7;  // Number of rows

        final int[] index = {0};  // Mutable wrapper for lambda

        IntStream.range(0, iterations).forEach(row -> {
            IntStream.range(0, group).forEach(col -> {
                System.out.print(arr[index[0]] + " ");
                index[0] = (index[0] + 1) % arr.length;
            });
            System.out.println();
        });
    }
}
```
</details>

---

<details open>
<summary>8. Method Overloading Resolution in Java (String vs Object)</summary>

### ✅ Code:
```java
public class SimpleClass {
    public void method(String str) {
        System.out.println("String method " + str);
    }

    public void method(Object object) {
        System.out.println("Object method " + object);
    }

    public static void main(String[] args) {
        SimpleClass instance = new SimpleClass();
        instance.method("Hello");                   // ①
        instance.method(new String("World"));       // ②
        String str = new String("Mango");
        instance.method((Object)str);               // ③
        instance.method(null);                      // ④
    }
}
```

---

### 🔍 Explanation of Each Call:

#### ✅ Call ①: `instance.method("Hello");`

* `"Hello"` is a **String literal**
* Compiler chooses `method(String)` because it's more specific than `Object`
* **Output:** `String method Hello`

---

#### ✅ Call ②: `instance.method(new String("World"));`

* Argument is of type `String`
* Compiler resolves to `method(String)`
* **Output:** `String method World`

---

#### ✅ Call ③: `instance.method((Object)str);`

* Argument is explicitly cast to `Object`
* Compiler sees the type as `Object`
* Chooses `method(Object)`
* **Output:** `Object method Mango`

---

#### ✅ Call ④: `instance.method(null);`

* `null` is applicable to both `String` and `Object`
* But `String` is **more specific**
* So `method(String)` is chosen
* **Output:** `String method null`

---

### 📌 Final Output:

```
String method Hello
String method World
Object method Mango
String method null
```

> ℹ️ If both overloads had the same specificity and `null` was passed, it would result in a **compile-time ambiguity error**.

</details>

---

<details open>
<summary>9. Group cars by color prefix (Java 8 Stream)</summary>

### ✅ Problem Statement

Given:

```java
String[] colors = {"Red", "Green", "Blue"};
List<String> carsList = Arrays.asList("1audi", "2ferrari", "3nexa", "1swift", "2baleno", "3verna");
````

You want to group the cars based on the prefix digit (1 → Red, 2 → Green, 3 → Blue), and strip the digit from the car name.

---

### 🔧 Java 8 Stream Solution

```java
import java.util.*;
import java.util.stream.Collectors;

public class CarColorGrouping {
    public static void main(String[] args) {
        String[] colors = {"Red", "Green", "Blue"};
        List<String> carsList = Arrays.asList("1audi", "2ferrari", "3nexa", "1swift", "2baleno", "3verna");

        Map<String, List<String>> grouped = carsList.stream()
            .collect(Collectors.groupingBy(
                car -> {
                    int colorIndex = Character.getNumericValue(car.charAt(0)) - 1;
                    return colors[colorIndex];
                },
                Collectors.mapping(car -> car.substring(1), Collectors.toList())
            ));

        // Print the result
        grouped.forEach((color, cars) -> System.out.println(color + " : " + cars));
    }
}
```

---

### 📌 Output

```
Red : [audi, swift]
Green : [ferrari, baleno]
Blue : [nexa, verna]
```

---

### 🧠 Notes

* Uses `Character.getNumericValue(car.charAt(0)) - 1` to map digit to color index.
* Uses `Collectors.mapping()` to strip the prefix and collect car names.

</details>

---

<details open>
<summary><strong>➕ 10. Add Two Numbers Using Java Streams</strong></summary>

### 💡 Concept

Even though Java Streams are typically used for collections, you can use them creatively to sum just **two numbers**.

---

### ✅ Example 1: Using `Stream.of()`

```java
import java.util.stream.Stream;

public class StreamAddition {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 20;

        int sum = Stream.of(num1, num2)
                        .mapToInt(Integer::intValue)
                        .sum();

        System.out.println("Sum: " + sum); // Output: Sum: 30
    }
}

```

* `Stream.of()` creates a stream of the two numbers.
* `.mapToInt()` converts the stream to an `IntStream`.
* `.sum()` gives the total.

### Sum largest and smallest num

```java

import java.util.*;
import java.util.stream.*;

public class Main
{
	public static void main(String[] args) {
		int[] value = {4,9,2,1,8};
		
		System.out.println(Arrays.stream(value).max().getAsInt()-Arrays.stream(value).min().getAsInt());
	}
}

```

---

### ✅ Example 2: Using `IntStream.of()`

```java
import java.util.stream.IntStream;

public class StreamAddition {
    public static void main(String[] args) {
        int sum = IntStream.of(5, 7).sum();
        System.out.println("Sum: " + sum); // Output: Sum: 12
    }
}
```

This is more concise using `IntStream` directly.

---

### 🔍 When is this useful?

* Demonstrating stream operations
* Summing dynamic inputs
* Replacing traditional loops with a functional style

</details>

---

<details open>
<summary><strong>✖️ 11. Multiply Numbers Using Java Streams</strong></summary>

### ✅ Option 1: Using `reduce()` for Multiplication

```java
import java.util.stream.IntStream;

public class MultiplyReduce {
    public static void main(String[] args) {
        int result = IntStream.of(2, 3, 4)
                              .reduce(1, (a, b) -> a * b);

        System.out.println("Product: " + result); // Output: 24
    }
}
```

🧠 `reduce(1, (a, b) -> a * b)`:

* `1` is the identity (neutral) for multiplication.
* `(a * b)` multiplies elements cumulatively.

---

### ✅ Option 2: Multiply Inside `map()` (with paired data)

```java
import java.util.stream.IntStream;

public class MultiplyArrays {
    public static void main(String[] args) {
        int[] a = {2, 4, 6};
        int[] b = {3, 5, 7};

        IntStream.range(0, a.length)
                 .map(i -> a[i] * b[i])
                 .forEach(System.out::println);  // Output: 6, 20, 42
    }
}
```

Here, each pair from two arrays is multiplied using `map()`.

---

### ✅ Option 3: Multiply a Fixed Number Inside `map()`

```java
import java.util.stream.Stream;

public class MultiplyFixed {
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 6;

        int result = Stream.of(num1)
                           .map(n -> n * num2)
                           .findFirst()
                           .orElse(0);

        System.out.println("Product: " + result); // Output: 30
    }
}
```

---

### ✅ Option 4: Multiply List Elements with `reduce()`

```java
import java.util.Arrays;

public class MultiplyList {
    public static void main(String[] args) {
        int product = Arrays.asList(2, 3, 5)
                            .stream()
                            .reduce(1, (a, b) -> a * b);

        System.out.println("Product: " + product); // Output: 30
    }
}
```

Note: You must use `reduce(1, ...)` as identity, or use `Optional<Integer>` if using no identity.

---

### 🧠 Summary

| Use Case                   | Method     | Code Technique                |
| -------------------------- | ---------- | ----------------------------- |
| Multiply multiple values   | `reduce()` | `.reduce(1, (a, b) -> a * b)` |
| Multiply pairs from arrays | `map()`    | `.map(i -> a[i] * b[i])`      |
| Multiply with fixed number | `map()`    | `.map(n -> n * fixed)`        |

---

Multiplication is a natural use case for `reduce()` in functional style. Let me know if you'd like to include **BigDecimal multiplication** or **parallel streams**!

</details>

---

<details open>
<summary><strong>🧮 12. Find Distinct and Non-Distinct Values from Two Arrays</strong></summary>

* ✅ **Distinct values** → values that appear in either array, but only once across both
* ✅ **Non-distinct values** → values that appear in **both arrays** (i.e., common elements)

### 🧾 Input Arrays

```java
int[] one = {1, 2, 3, 4, 5};
int[] two = {4, 5, 6, 7, 8};
```

---

### ✅ 1. Non-Distinct Values (Common Elements)

```java
import java.util.*;
import java.util.stream.*;

public class CommonValues {
    public static void main(String[] args) {
        int[] one = {1, 2, 3, 4, 5};
        int[] two = {4, 5, 6, 7, 8};

        Set<Integer> setOne = Arrays.stream(one).boxed().collect(Collectors.toSet());

        List<Integer> common = Arrays.stream(two)
                                     .filter(setOne::contains)
                                     .distinct()
                                     .boxed()
                                     .collect(Collectors.toList());

        System.out.println("🔁 Common (Non-Distinct): " + common);
    }
}
```

🧠 This collects elements that are in both arrays:
**Output:** `🔁 Common (Non-Distinct): [4, 5]`

---

### ✅ 2. Distinct (Appearing Only in One of the Arrays)

```java
import java.util.*;
import java.util.stream.*;

public class DistinctValues {
    public static void main(String[] args) {
        int[] one = {1, 2, 3, 4, 5};
        int[] two = {4, 5, 6, 7, 8};

        Set<Integer> setOne = Arrays.stream(one).boxed().collect(Collectors.toSet());
        Set<Integer> setTwo = Arrays.stream(two).boxed().collect(Collectors.toSet());

        // Union of both sets
        Set<Integer> union = new HashSet<>(setOne);
        union.addAll(setTwo);

        // Intersection (common)
        Set<Integer> intersection = new HashSet<>(setOne);
        intersection.retainAll(setTwo);

        // Remove common from union to get only distincts
        union.removeAll(intersection);

        System.out.println("✅ Distinct (Unique to One Array): " + union);
    }
}
```

💡 This filters values that appear only in **one** array.
**Output:** `✅ Distinct (Unique to One Array): [1, 2, 3, 6, 7, 8]`

---

### 📌 Summary

| Type               | Output               |
| ------------------ | -------------------- |
| Common (Duplicate) | `[4, 5]`             |
| Distinct (Unique)  | `[1, 2, 3, 6, 7, 8]` |

You can even combine both into one method if needed.

</details>

---

<details open>
<summary><strong>🔠 13. Count Character Occurrences in a String</strong></summary>

### 🧾 Input

```java
String str = "aaabbaccb";
```

---

### ✅ Option 1: Using Java 8 Streams

```java
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class CharFrequency {
    public static void main(String[] args) {
        String str = "aaabbaccb";

        Map<Character, Long> freqMap = str.chars()                           // IntStream of characters
                                          .mapToObj(c -> (char) c)           // Convert to Character Stream
                                          .collect(Collectors.groupingBy(
                                              Function.identity(),           // Group by character itself
                                              Collectors.counting()          // Count occurrences
                                          ));

        System.out.println("Character Frequencies: " + freqMap);
    }
}



import java.util.*;
import java.util.stream.Collectors;

public class OccurrencesExample {
    public static void main(String[] args) {
        String[] s = {"AA", "BB", "AA", "CC"};

        Map<String, Long> occurrences = Arrays.stream(s)
                .collect(Collectors.groupingBy(e -> e, Collectors.counting()));

        System.out.println(occurrences);
    }
}

```

📦 **Output:**

```
Character Frequencies: {a=4, b=3, c=2}

{AA=2, BB=1, CC=1}

```

---

### ✅ Option 2: Classic Way (for interviews)

```java
import java.util.*;

public class CharCountManual {
    public static void main(String[] args) {
        String str = "aaabbaccb";
        Map<Character, Integer> map = new HashMap<>();

        for (char ch : str.toCharArray()) {
            map.put(ch, map.getOrDefault(ch, 0) + 1);
        }

        System.out.println("Character Frequencies: " + map);
    }
}
```

---

### 🧠 Summary

| Approach       | Key Features                        |
| -------------- | ----------------------------------- |
| `Streams`      | Elegant, functional, concise        |
| `Classic Loop` | Interview-friendly, easily readable |


</details>

<details open>
<summary><strong>Occurances</strong></summary>

Got it 👍 You want to find the occurrences (frequency) of each element in a `List<Integer>` using **Java Streams**.
Here’s how you can do it:

```java
import java.util.*;
import java.util.stream.Collectors;

public class Occurrences {
    public static void main(String[] args) {
        List<Integer> allData = List.of(1, 2, 3, 5, 4, 3, 2, 2, 1);

        Map<Integer, Long> occurrences = allData.stream()
                .collect(Collectors.groupingBy(e -> e, Collectors.counting()));

        System.out.println(occurrences);
    }
}
```

### ✅ Output:

```
{1=2, 2=3, 3=2, 4=1, 5=1}
```

### Explanation:

* `groupingBy(e -> e, Collectors.counting())` → groups elements by themselves and counts occurrences.
* The result is a `Map<Integer, Long>` (since `counting()` returns `Long`).

👉 If you want `Integer` counts instead of `Long`, you can map it like this:

```java
Map<Integer, Integer> occurrences = allData.stream()
        .collect(Collectors.groupingBy(e -> e, Collectors.collectingAndThen(Collectors.counting(), Long::intValue)));
```

</details>

---

<details open>
<summary><strong>🔢 14. Get Last 4 Even Numbers from List</strong></summary>

To find the **last 4 even numbers** from this list:

```text
7, 8, 5, 4, 2, 3, 6, 9, 8, 5, 4, 2, 3
```

### 🧾 Input

```java
List<Integer> numbers = Arrays.asList(7, 8, 5, 4, 2, 3, 6, 9, 8, 5, 4, 2, 3);
```

---

### ✅ Java Stream Approach

```java
import java.util.*;
import java.util.stream.*;

public class LastEvenNumbers {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(7, 8, 5, 4, 2, 3, 6, 9, 8, 5, 4, 2, 3);

        List<Integer> last4Even = IntStream.range(0, numbers.size())
            .mapToObj(i -> numbers.get(numbers.size() - 1 - i))  // Reverse traversal
            .filter(n -> n % 2 == 0)
            .limit(4)
            .collect(Collectors.toCollection(LinkedList::new));  // Maintain order

        Collections.reverse(last4Even);  // Optional: To keep it in original order

        System.out.println("Last 4 Even Numbers: " + last4Even);
    }
}
```

---

### 📦 Output

```
Last 4 Even Numbers: [6, 8, 4, 2]
```

---

### 💡 Explanation

| Step                 | Description                  |
| -------------------- | ---------------------------- |
| `range + get(index)` | Traverse in reverse order    |
| `filter(n % 2 == 0)` | Select only even numbers     |
| `limit(4)`           | Get only the last 4 found    |
| `reverse()`          | Restore original input order |

</details>

---

<details open>
<summary><strong>🔢 15. First 3 Even and Last 3 Odd Numbers</strong></summary>

* **First 3 even numbers**
* **Last 3 odd numbers**

```
(5, 8, 9, 7, 2, 4, 1, 3, 6)
```

### 🧾 Input

```java
List<Integer> numbers = Arrays.asList(5, 8, 9, 7, 2, 4, 1, 3, 6);
```

---

### ✅ Java Stream Approach

```java
import java.util.*;
import java.util.stream.*;

public class EvenOddNumbers {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(5, 8, 9, 7, 2, 4, 1, 3, 6);

        // First 3 even numbers
        List<Integer> first3Even = numbers.stream()
                                         .filter(n -> n % 2 == 0)
                                         .limit(3)
                                         .collect(Collectors.toList());

        // Last 3 odd numbers - reverse the list, filter odd, limit 3, then reverse again to restore order
        List<Integer> last3Odd = IntStream.range(0, numbers.size())
                                         .mapToObj(i -> numbers.get(numbers.size() - 1 - i))
                                         .filter(n -> n % 2 != 0)
                                         .limit(3)
                                         .collect(Collectors.toCollection(LinkedList::new));
        Collections.reverse(last3Odd);

        System.out.println("First 3 Even Numbers: " + first3Even);
        System.out.println("Last 3 Odd Numbers: " + last3Odd);
    }
}
```

---

### 📦 Output

```
First 3 Even Numbers: [8, 2, 4]
Last 3 Odd Numbers: [1, 3, 7]
```

---

### 💡 Explanation

| Task         | Logic                                           |
| ------------ | ----------------------------------------------- |
| First 3 even | Filter even, take first 3 in original order     |
| Last 3 odd   | Reverse, filter odd, take first 3, then reverse |


</details>

---

<details open>
<summary><strong>🛠️ 16. Capitalize Character After Space</strong></summary>

### Original Problems

* `charValu.size` should be `charValu.length`.
* Comparing characters uses single quotes `' '` not double quotes `" "`.
* `StringBuffer` variable is not initialized.
* `charValu[i+1].toString()` is invalid; `char` is primitive.
* You risk **IndexOutOfBoundsException** when `i+1` exceeds array length.
* `System.out.println` is the correct method (not `Sysout`).

---

### Corrected Java Code

```java
public class CapitalizeAfterSpace {
    public static void main(String[] args) {
        String valu = "Hi this is sarath. Im attending interview";
        char[] charValu = valu.toCharArray();
        StringBuffer repValu = new StringBuffer();

        for (int i = 0; i < charValu.length; i++) {
            if (charValu[i] == ' ') {
                repValu.append(charValu[i]);  // append the space
                // Check boundary before accessing next character
                if (i + 1 < charValu.length) {
                    repValu.append(Character.toUpperCase(charValu[i + 1]));
                    i++; // Skip the next character since it's processed
                }
            } else {
                repValu.append(charValu[i]);
            }
        }

        System.out.println(repValu.toString());
    }
}
```

---

### Output

```
Hi This Is Sarath. Im Attending Interview
```

---

### Explanation

| Line                           | Explanation                            |
|--------------------------------|----------------------------------------|
| `if (charValu[i] == ' ')`      | Check for space character              |
| `repValu.append(charValu[i]);` | Append space itself                    |
| `if (i + 1 < charValu.length)` | Boundary check before next char access |
| `Character.toUpperCase(...)`   | Convert next char to uppercase         |
| `i++;`                         | Skip the next char as it's processed   |

---

### Alternative: Using `split()` and Streams for Capitalization

```java
String valu = "Hi this is sarath. Im attending interview";
String result = Arrays.stream(valu.split(" "))
                      .map(word -> word.length() > 0 
                                    ? Character.toUpperCase(word.charAt(0)) + word.substring(1)
                                    : word)
                      .collect(Collectors.joining(" "));
System.out.println(result);
```

</details>

---

<details open>
<summary><strong>🔢 17. Find Second Largest Number in an Array (with utils, without utils, and Streams)</strong></summary>

---

### 🧾 Example Input

```java
int[] arr = {12, 35, 1, 10, 34, 1};
```

---

### ✅ Using Java Utils (`Arrays` & `Collections`)

```java
import java.util.*;

public class SecondLargestWithUtils {
    public static void main(String[] args) {
        Integer[] arr = {12, 35, 1, 10, 34, 1};  // Use Integer array for Collections

        List<Integer> list = Arrays.asList(arr);

        Set<Integer> set = new HashSet<>(list);

        List<Integer> distinctList = new ArrayList<>(set);
        Collections.sort(distinctList, Collections.reverseOrder());

        if (distinctList.size() >= 2) {
            System.out.println("Second Largest: " + distinctList.get(1));
        } else {
            System.out.println("No second largest element");
        }
    }
}
```

---

### ✅ Without Using Utils (Manual Loop)

```java
public class SecondLargestWithoutUtils {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num < largest) {
                secondLargest = num;
            }
        }

        if (secondLargest == Integer.MIN_VALUE) {
            System.out.println("No second largest element");
        } else {
            System.out.println("Second Largest: " + secondLargest);
        }
    }
}
```

---

### ✅ Using Java Streams

```java
import java.util.*;
import java.util.stream.*;

public class SecondLargestWithStreams {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};

        OptionalInt secondLargest = Arrays.stream(arr)
            .distinct()
            .boxed()
            .sorted(Comparator.reverseOrder())
            .skip(1)
            .mapToInt(Integer::intValue)
            .findFirst();

        if (secondLargest.isPresent()) {
            System.out.println("Second Largest: " + secondLargest.getAsInt());
        } else {
            System.out.println("No second largest element");
        }
    }
}
```

---

### 📌 Explanation

| Approach      | Details                                                           |
| ------------- | ----------------------------------------------------------------- |
| Using Utils   | Convert to list, remove duplicates, sort descending, pick 2nd     |
| Without Utils | Traverse array, track largest & second largest manually           |
| Using Streams | Stream distinct elements, sort descending, skip first, find first |


</details>

Find the 3 largeest number in array

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class TopThreeNumbers {
public static void main(String[] args) {
int[] nums = {1, 2, 3, 5, 1, 5, 8, 6, 4, 8};

        // Convert to stream → box to Integer → sort in reverse → limit to 3 → collect
        List<Integer> top3 = Arrays.stream(nums)
                .boxed()                               // convert int to Integer
                .sorted((a, b) -> b - a)               // sort in descending order
                .distinct()                            // optional: remove duplicates
                .limit(3)                              // take top 3
                .collect(Collectors.toList());

        System.out.println("Top 3 largest numbers: " + top3);
    }
}
```


---

<details open>
<summary><strong>✅ 18. Filter Even and Odd Numbers using Streams</strong></summary>

* `.map()` is for transforming elements; to filter, use `.filter()`.
* The condition `(s/2) == 0` doesn’t check for even numbers — you want `s % 2 == 0`.
* The lambda must always return a value (in `.map`), but here you want to keep or discard items — so `.filter()` is the right method.

```java
import java.util.*;
import java.util.stream.*;

public class EvenOddFilter {
    public static void main(String[] args) {
        List<Integer> nums = IntStream.rangeClosed(1, 100)
                                      .boxed()
                                      .collect(Collectors.toList());

        // Filter even numbers
        List<Integer> evenNums = nums.stream()
                                     .filter(s -> s % 2 == 0)
                                     .collect(Collectors.toList());

        // Filter odd numbers
        List<Integer> oddNums = nums.stream()
                                    .filter(s -> s % 2 != 0)
                                    .collect(Collectors.toList());

        System.out.println("Even Numbers: " + evenNums);
        System.out.println("Odd Numbers: " + oddNums);
    }
}
```

---

### Explanation

| Operation   | Stream Method | Condition    |
| ----------- | ------------- | ------------ |
| Filter even | `.filter()`   | `s % 2 == 0` |
| Filter odd  | `.filter()`   | `s % 2 != 0` |

</details>

---

<details>
<summary>🧩 Example using <code>Runnable</code> and <code>wait/notify</code></summary>

```java
public class OddEvenPrinter {

    private static final Object lock = new Object();
    private static int count = 1;
    private static final int MAX = 10;

    public static void main(String[] args) {

        Runnable printOdd = () -> {
            while (count <= MAX) {
                synchronized (lock) {
                    while (count % 2 == 0) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                    }
                    if (count <= MAX) {
                        System.out.println("Odd: " + count);
                        count++;
                        lock.notify();
                    }
                }
            }
        };

        Runnable printEven = () -> {
            while (count <= MAX) {
                synchronized (lock) {
                    while (count % 2 == 1) {
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            Thread.currentThread().interrupt();
                        }
                    }
                    if (count <= MAX) {
                        System.out.println("Even: " + count);
                        count++;
                        lock.notify();
                    }
                }
            }
        };

        Thread t1 = new Thread(printOdd);
        Thread t2 = new Thread(printEven);

        t1.start();
        t2.start();
    }
}
```

✅ **Output (approx):**
```
Odd: 1
Even: 2
Odd: 3
Even: 4
Odd: 5
Even: 6
Odd: 7
Even: 8
Odd: 9
Even: 10
```

---

🧠 Explanation

- `count` is shared by both threads.
- `lock` ensures **synchronization**.
- When one thread is not supposed to print (e.g. even thread sees an odd number), it calls `lock.wait()` and releases the lock.
- After printing, the thread increments `count` and calls `lock.notify()` to wake up the other thread.
- This repeats until the count reaches 10.

</details>

---

<details>
<summary>⚙️ Alternative using <code>Callable</code> + <code>ExecutorService</code></summary>

You can also use `Callable<Void>` if you prefer an executor-based approach:

```java
import java.util.concurrent.*;

public class OddEvenCallable {

    private static final Object lock = new Object();
    private static int count = 1;
    private static final int MAX = 10;

    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        Callable<Void> oddTask = () -> {
            while (count <= MAX) {
                synchronized (lock) {
                    while (count % 2 == 0) lock.wait();
                    if (count <= MAX) {
                        System.out.println("Odd: " + count);
                        count++;
                        lock.notify();
                    }
                }
            }
            return null;
        };

        Callable<Void> evenTask = () -> {
            while (count <= MAX) {
                synchronized (lock) {
                    while (count % 2 == 1) lock.wait();
                    if (count <= MAX) {
                        System.out.println("Even: " + count);
                        count++;
                        lock.notify();
                    }
                }
            }
            return null;
        };

        executor.submit(oddTask);
        executor.submit(evenTask);

        executor.shutdown();
    }
}
```

This behaves the same, but uses an `ExecutorService` to manage threads.

</details>

---

**cleaner and safer version** using `Lock` and `Condition` instead of `wait/notify`.

---

<details>
<summary>🧩 Using <code>Lock</code> and <code>Condition</code> (Recommended Way)</summary>

```java
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class OddEvenLockExample {

    private static int count = 1;
    private static final int MAX = 10;

    private static final Lock lock = new ReentrantLock();
    private static final Condition oddTurn = lock.newCondition();
    private static final Condition evenTurn = lock.newCondition();

    public static void main(String[] args) {
        Runnable oddPrinter = () -> {
            while (count <= MAX) {
                lock.lock();
                try {
                    while (count % 2 == 0) {
                        oddTurn.await(); // wait until it's odd's turn
                    }
                    if (count <= MAX) {
                        System.out.println("Odd: " + count);
                        count++;
                        evenTurn.signal(); // signal even thread
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    lock.unlock();
                }
            }
        };

        Runnable evenPrinter = () -> {
            while (count <= MAX) {
                lock.lock();
                try {
                    while (count % 2 == 1) {
                        evenTurn.await(); // wait until it's even's turn
                    }
                    if (count <= MAX) {
                        System.out.println("Even: " + count);
                        count++;
                        oddTurn.signal(); // signal odd thread
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    lock.unlock();
                }
            }
        };

        Thread t1 = new Thread(oddPrinter, "OddThread");
        Thread t2 = new Thread(evenPrinter, "EvenThread");

        t1.start();
        t2.start();
    }
}
```

---

✅ **Output:**

```

Odd: 1
Even: 2
Odd: 3
Even: 4
Odd: 5
Even: 6
Odd: 7
Even: 8
Odd: 9
Even: 10

```

---

<details>
<summary>🧠 Why this is better than <code>wait/notify</code></summary>

* `Condition` objects (`oddTurn` and `evenTurn`) are **more readable** than arbitrary `wait()`/`notify()` calls.
* `Lock` provides **fine-grained control** over which condition to signal.
* No need for `synchronized` blocks — the `lock` ensures mutual exclusion.
* Avoids accidental wake-ups (spurious wakeups) better than plain `Object.wait()`.

</details>

---

<details open>
<summary><strong>🔍 19. String vs StringBuilder Comparison Explained</strong></summary>

```java
String s1 = "Java";
String s2 = "Java";
StringBuilder sb1 = new StringBuilder();
sb1.append("Ja").append("va");

System.out.println(s1 == s2);                // true or false?
System.out.println(s1.equals(s2));           // true or false?
System.out.println(sb1.toString() == s1);    // true or false?
System.out.println(sb1.toString().equals(s1));// true or false?
```

---

### What prints and why?

| Line                                             | Output  | Explanation                                                                                 |
|--------------------------------------------------|---------|---------------------------------------------------------------------------------------------|
| `System.out.println(s1 == s2);`                  | `true`  | Both refer to the same interned string literal in the String Pool, so references are equal. |
| `System.out.println(s1.equals(s2));`             | `true`  | Contents are the same, so `.equals()` returns true.                                         |
| `System.out.println(sb1.toString() == s1);`      | `false` | `sb1.toString()` creates a new String object, so reference comparison is false.             |
| `System.out.println(sb1.toString().equals(s1));` | `true`  | Contents are the same, so `.equals()` returns true.                                         |

---

### Important points:

* **`==` on Strings** compares *reference* equality (are both variables pointing to the same object?).
* **String literals like `"Java"` are interned**, so identical literals share the same reference.
* `StringBuilder.toString()` creates a *new* String object each time, so reference is different from `s1`.
* `.equals()` compares the *content* of strings.

---

### How to make `sb1.toString() == s1` true?

You can intern the string explicitly:

```java
System.out.println(sb1.toString().intern() == s1);  // true
```

Because `.intern()` returns the canonical representation from the String Pool.

</details>

<details>
<summary><strong>✨ 20. Find Palindromes using Streams</strong></summary>

* Palindrome: a string that reads the same forwards and backwards.  
* To check, compare the string with its reverse.  
* Using streams, you can filter only palindrome words.

```java
import java.util.*;
import java.util.stream.*;

public class PalindromeFinder {
    public static void main(String[] args) {
        String[] data = {"level", "hoodi", "madam", "java", "racecar"};

        // Find palindromes
        List<String> palindromes = Arrays.stream(data)
                                         .filter(PalindromeFinder::isPalindrome)
                                         .collect(Collectors.toList());

        System.out.println("Palindromes: " + palindromes);
    }

    // Helper method to check palindrome
    private static boolean isPalindrome(String str) {
        return str.equalsIgnoreCase(
            new StringBuilder(str).reverse().toString()
        );
    }
}
````

---

### Explanation

| Operation          | Stream Method     | Logic                                                         |
|--------------------|-------------------|---------------------------------------------------------------|
| Convert array      | `Arrays.stream()` | Turn the array into a stream.                                 |
| Filter palindromes | `.filter()`       | Keep only words where `word.equalsIgnoreCase(reverse(word))`. |
| Collect results    | `.collect()`      | Collect into a `List<String>`.                                |

---

### Example Output

```
Palindromes: [level, madam, racecar]
```

</details>

---

<details open>
<summary><strong>Check if a given string is palindrome using recursion.</strong></summary>

```java

/*
* Java program to check if a given inputted string is palindrome or not using recursion.
*/

import java.util.*;
public class InterviewBit { 
   public static void main(String args[]) { 
       Scanner s = new Scanner(System.in);
       String word = s.nextLine();
       System.out.println("Is "+word+" palindrome? - "+isWordPalindrome(word));
   } 
   
   
   public static boolean isWordPalindrome(String word){ 
       String reverseWord = getReverseWord(word); 
       //if word equals its reverse, then it is a palindrome
       if(word.equals(reverseWord)){ 
           return true; 
       } 
       return false; 
   } 
   
   public static String getReverseWord(String word){ 
       if(word == null || word.isEmpty()){ 
           return word; 
       } 
       
       return word.charAt(word.length()- 1) + getReverseWord(word.substring(0, word.length() - 1)); 
   }
}

```

</details>

---

<details open>
<summary><strong>⚡ 21. Sort Map by Values (Streams, TreeMap, Comparator)</strong></summary>

* By default, `HashMap` doesn’t maintain order.  
* We can sort by **keys** easily using `TreeMap`, but sorting by **values** requires:  
  - Streams (`.sorted(Map.Entry.comparingByValue())`)  
  - `TreeMap` with custom comparator  
  - Collecting into `LinkedHashMap` to preserve sorted order  

```java
import java.util.*;
import java.util.stream.*;

public class MapSortByValue {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("David", 95);
        scores.put("Jane", 80);
        scores.put("Mary", 97);
        scores.put("Lisa", 78);
        scores.put("Dino", 65);

        // 1️⃣ Using Streams - Ascending by value
        Map<String, Integer> asc = scores.entrySet().stream()
                .sorted(Map.Entry.comparingByValue())
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new
                ));

        // 2️⃣ Using Streams - Descending by value
        Map<String, Integer> desc = scores.entrySet().stream()
                .sorted(Collections.reverseOrder(Map.Entry.comparingByValue()))
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (e1, e2) -> e1,
                        LinkedHashMap::new
                ));

        // 3️⃣ Using TreeMap with Comparator (sort by key only)
        Map<String, Integer> treeByKey = new TreeMap<>(scores);

        System.out.println("Original: " + scores);
        System.out.println("Sorted Asc by Value: " + asc);
        System.out.println("Sorted Desc by Value: " + desc);
        System.out.println("TreeMap Sorted by Key: " + treeByKey);
    }
}

```

---

### Explanation

| Method                  | Approach                                                                |
|-------------------------|-------------------------------------------------------------------------|
| Streams + `sorted`      | Sort by values (`comparingByValue`), then collect into `LinkedHashMap`. |
| Streams + reverseOrder  | Same as above, but descending order.                                    |
| TreeMap with Comparator | Sorts by **keys**, not values (but useful to show difference).          |

---

### Example Output

```
Original: {David=95, Jane=80, Mary=97, Lisa=78, Dino=65}
Sorted Asc by Value: {Dino=65, Lisa=78, Jane=80, David=95, Mary=97}
Sorted Desc by Value: {Mary=97, David=95, Jane=80, Lisa=78, Dino=65}
TreeMap Sorted by Key: {David=95, Dino=65, Jane=80, Lisa=78, Mary=97}
```

</details>

---

<details open>
<summary><strong>🌀 22. Swap Values without Using Another Variable</strong></summary>

* Normally, swapping uses a temporary variable:  

```java
  int temp = val1; 
  val1 = val2; 
  val2 = temp;
```

* But we can do it without an extra variable using:

  * **Arithmetic (Addition/Subtraction or Multiplication/Division)**
  * **Bitwise XOR**

```java
public class SwapValues {
    public static void main(String[] args) {
        int val1 = 9;
        int val2 = 10;

        System.out.println("Before Swap: val1 = " + val1 + ", val2 = " + val2);

        // 1️⃣ Using Addition & Subtraction
        val1 = val1 + val2;  // 19
        val2 = val1 - val2;  // 9
        val1 = val1 - val2;  // 10
        System.out.println("After Swap (Add/Sub): val1 = " + val1 + ", val2 = " + val2);

        // Reset values
        val1 = 9; val2 = 10;

        // 2️⃣ Using Multiplication & Division (⚠️ works only if no zero & no overflow)
        val1 = val1 * val2;  // 90
        val2 = val1 / val2;  // 9
        val1 = val1 / val2;  // 10
        System.out.println("After Swap (Mul/Div): val1 = " + val1 + ", val2 = " + val2);

        // Reset values
        val1 = 9; val2 = 10;

        // 3️⃣ Using XOR (bitwise)
        val1 = val1 ^ val2;  // XOR result
        val2 = val1 ^ val2;  // gets original val1
        val1 = val1 ^ val2;  // gets original val2
        System.out.println("After Swap (XOR): val1 = " + val1 + ", val2 = " + val2);
    }
}
```

---

### Explanation

| Method                    | Logic                                                                         |
| ------------------------- | ----------------------------------------------------------------------------- |
| Addition & Subtraction    | Add both → subtract back to extract original values.                          |
| Multiplication & Division | Multiply → divide back to extract original values. (⚠️ risky: zero/overflow). |
| XOR Bitwise               | XOR twice cancels out, restoring swapped values.                              |

---

### Example Output

```
Before Swap: val1 = 9, val2 = 10
After Swap (Add/Sub): val1 = 10, val2 = 9
After Swap (Mul/Div): val1 = 10, val2 = 9
After Swap (XOR): val1 = 10, val2 = 9
```

</details>

---

<details open>
<summary><strong>🎯 23. Two Sum using Streams</strong></summary>

* Stream approach:  
  - Use **IntStream.range** to iterate over indices.  
  - For each index `i`, find a matching index `j` where `nums[i] + nums[j] == target`.  
  - Stop at the first valid pair.  

```java
import java.util.*;
import java.util.stream.*;

public class TwoSumStream {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15, 7};
        int target = 9;

        int[] result = twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
    }

    public static int[] twoSum(int[] nums, int target) {
        return IntStream.range(0, nums.length)          // stream of indices i
                .boxed()
                .flatMap(i -> IntStream.range(i + 1, nums.length)  // for each i, pair with j > i
                        .filter(j -> nums[i] + nums[j] == target)
                        .mapToObj(j -> new int[]{i, j}))
                .findFirst()   // return first match
                .orElseThrow(() -> new IllegalArgumentException("No solution found"));
    }
}
````

---

### Explanation

| Operation              | Stream API Used                        | Purpose                                              |
|------------------------|----------------------------------------|------------------------------------------------------|
| Generate indices       | `IntStream.range(0, n)`                | Iterate over all possible `i`.                       |
| Pair with next indices | `flatMap(IntStream.range)`             | Generate all pairs `(i, j)` with `j > i`.            |
| Filter matching sums   | `.filter(nums[i] + nums[j] == target)` | Keep only pairs that match the target.               |
| Return first match     | `.findFirst()`                         | Get first valid pair (since problem guarantees one). |

---

### Example Output

```
Indices: [0, 1]
```

</details>

---

<details open>
<summary><strong>🗂️ 24. Group Employees by Department & Filter by Year using Streams</strong></summary>

* **Group by Department** → use `Collectors.groupingBy(Employee::getDepartment)`.  
* **Filter by Joining Year** → use `getJoiningDate().getYear() > 2018`.  

```java
import java.time.LocalDate;
import java.util.*;
import java.util.stream.*;

class Employee {
    private int id;
    private String name;
    private int age;
    private String department;
    private double salary;
    private LocalDate joiningDate;

    public Employee(int id, String name, int age, String department, double salary, LocalDate joiningDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
        this.joiningDate = joiningDate;
    }

    public String getDepartment() {
        return department;
    }

    public LocalDate getJoiningDate() {
        return joiningDate;
    }

    public String getName() {
        return name;
    }

    public String toString() {
        return name + " (" + department + ", " + joiningDate + ")";
    }
}

public class EmployeeGroupFilter {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee(1, "Alice", 28, "HR", 55000, LocalDate.of(2020, 1, 10)),
            new Employee(2, "Bob", 35, "IT", 75000, LocalDate.of(2017, 3, 15)),
            new Employee(3, "Charlie", 30, "IT", 80000, LocalDate.of(2021, 6, 20)),
            new Employee(4, "David", 40, "Finance", 90000, LocalDate.of(2016, 11, 30)),
            new Employee(5, "Eva", 22, "HR", 45000, LocalDate.of(2022, 7, 5)),
            new Employee(6, "Frank", 26, "Finance", 65000, LocalDate.of(2019, 5, 18))
        );

        // 1️⃣ Group employees by department
        Map<String, List<Employee>> groupedByDept = employees.stream()
            .collect(Collectors.groupingBy(Employee::getDepartment));

        // 2️⃣ Filter employees who joined after 2018
        List<Employee> joinedAfter2018 = employees.stream()
            .filter(e -> e.getJoiningDate().getYear() > 2018)
            .collect(Collectors.toList());

        System.out.println("Grouped by Department: " + groupedByDept);
        System.out.println("Joined after 2018: " + joinedAfter2018);

        // 1️⃣ Sort by joining date ascending
        List<Employee> asc = employees.stream()
            .sorted(Comparator.comparing(Employee::getJoiningDate))
            .collect(Collectors.toList());

        // 2️⃣ Sort by joining date descending
        List<Employee> desc = employees.stream()
            .sorted(Comparator.comparing(Employee::getJoiningDate).reversed())
            .collect(Collectors.toList());

        System.out.println("Ascending: " + asc);
        System.out.println("Descending: " + desc);

        // Find the second highest salary
        Optional<Employee> secondHighestPaidEmployee = employees.stream()
                // Sort employees by salary in descending order
                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
                // Remove employees with duplicate salaries
                .distinct()
                // Skip the first employee (the one with the highest salary)
                .skip(1)
                // Find the next employee
                .findFirst().;
  
        // Print the result if an employee is found
        secondHighestPaidEmployee.ifPresentOrElse(
                employee -> System.out.println("Second highest paid employee: " + employee),
                () -> System.out.println("Could not find the second highest paid employee.")
        );
    }
}
````

```java
import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> numList = Arrays.asList(20000, 30000, 50000, 90000, 50000, 40000, 70000);

        Integer secondLargest = numList.stream()
                .distinct()                                  // remove duplicates
                .sorted(Comparator.reverseOrder())            // sort in descending order
                .skip(1)                                      // skip the largest
                .findFirst()                                  // get the next one
                .orElse(null);                                // handle empty list

        System.out.println("Second largest number: " + secondLargest);
    }
}

```

---

### Explanation

| Operation           | Stream API                                                           |
|---------------------|----------------------------------------------------------------------|
| Group by department | `Collectors.groupingBy(Employee::getDepartment)`                     |
| Filter by year      | `.filter(e -> e.getJoiningDate().getYear() > 2018)`                  |
| Collect results     | `.collect(Collectors.toList())`                                      |
| Sort by date asc    | `.sorted(Comparator.comparing(Employee::getJoiningDate))`            |
| Sort by date desc   | `.sorted(Comparator.comparing(Employee::getJoiningDate).reversed())` |

---

### Example Output

```
Grouped by Department: 
{HR=[Alice (HR, 2020-01-10), Eva (HR, 2022-07-05)], 
 IT=[Bob (IT, 2017-03-15), Charlie (IT, 2021-06-20)], 
 Finance=[David (Finance, 2016-11-30), Frank (Finance, 2019-05-18)]}

Joined after 2018: 
[Alice (HR, 2020-01-10), Charlie (IT, 2021-06-20), Eva (HR, 2022-07-05), Frank (Finance, 2019-05-18)]
Ascending: [David (2016-11-30), Bob (2017-03-15), Frank (2019-05-18), Alice (2020-01-10), Charlie (2021-06-20), Eva (2022-07-05)]
Descending: [Eva (2022-07-05), Charlie (2021-06-20), Alice (2020-01-10), Frank (2019-05-18), Bob (2017-03-15), David (2016-11-30)]
```

</details>

<details>
<summary><strong>Sort by value in Map</strong></summary>

In Java, a `HashMap` doesn’t maintain any order. If you want to sort it **by values**, you can use streams (Java 8+) or a `List<Map.Entry<K,V>>` with a comparator.

Here’s a simple **Java 8+ solution** using streams:

```java
import java.util.*;
import java.util.stream.*;

public class SortMapByValue {
    public static void main(String[] args) {
        Map<String, Integer> unsortMap = new HashMap<>();

        unsortMap.put("z", 10);
        unsortMap.put("b", 5);
        unsortMap.put("a", 6);
        unsortMap.put("c", 20);
        unsortMap.put("d", 1);
        unsortMap.put("e", 7);
        unsortMap.put("y", 8);
        unsortMap.put("n", 99);
        unsortMap.put("g", 50);
        unsortMap.put("m", 2);
        unsortMap.put("f", 9);

        System.out.println("Original Map...");
        System.out.println(unsortMap);

        // Sort by value
        Map<String, Integer> sortedMap = unsortMap.entrySet()
            .stream()
            .sorted(Map.Entry.comparingByValue()) // ascending
            .collect(Collectors.toMap(
                Map.Entry::getKey,
                Map.Entry::getValue,
                (oldValue, newValue) -> oldValue,
                LinkedHashMap::new  // preserve order
            ));

        System.out.println("Sorted Map by Value...");
        System.out.println(sortedMap);
    }
}

```

### Output:

```
Original Map...
{a=6, b=5, c=20, d=1, e=7, f=9, g=50, m=2, n=99, y=8, z=10}

Sorted Map by Value...
{d=1, m=2, b=5, a=6, e=7, y=8, f=9, z=10, c=20, g=50, n=99}
```

---

👉 If you want it in **descending order**, just replace:

```java
.sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
```

</details>

---

<details open>
<summary><strong> Reorder numbers so that negative/positive pairs appear together </strong></summary>

Example:
Input:

```java
{-2, 2, 1, 3, -1, -3}
```

Output:

```java
{-1, 1, -2, 2, -3, 3}
```

Here’s a clean **Java Streams** solution:

```java
import java.util.*;
import java.util.stream.*;

public class PairOrdering {
    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(-2, 2, 1, 3, -1, -3);

        // Group by absolute value
        Map<Integer, List<Integer>> grouped = input.stream()
                .collect(Collectors.groupingBy(Math::abs));

        // Sort by order of first occurrence (based on index in input)
        List<Integer> output = grouped.entrySet().stream()
                .sorted(Comparator.comparingInt(e -> input.indexOf(e.getValue().get(0))))
                .flatMap(e -> e.getValue().stream()
                        .sorted(Comparator.comparingInt(Math::abs))) // order within pair
                .collect(Collectors.toList());

        System.out.println(output);
    }
}
```

### ✅ Output:

```
[-1, 1, -2, 2, -3, 3]
```

---

🔎 Explanation:

1. `groupingBy(Math::abs)` → groups numbers by absolute value.

   ```
   {2=[-2, 2], 1=[1, -1], 3=[3, -3]}
   ```
2. Sort groups by the **first occurrence in the input**.
3. Flatten each group with `flatMap`, sorting inside the group so negatives come before positives.

---

</details>

<details>
<summary><strong>Count how many times each number occurs</strong></summary>

* **pair** → how many complete pairs (count ÷ 2)
* **odd** → leftover count (count % 2)

Here’s how you can do it with **Java Streams**:

```java
import java.util.*;
import java.util.stream.*;

public class PairOddCounter {
    public static void main(String[] args) {
        List<Integer> input = Arrays.asList(1, 2, 2, 3, 1, 2, 3, 1, 1, 1);

        Map<Integer, String> result = input.stream()
                .collect(Collectors.groupingBy(
                        n -> n,
                        LinkedHashMap::new, // preserve insertion order
                        Collectors.counting()
                ))
                .entrySet().stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        e -> String.format("[pair = %d, odd = %d]", e.getValue() / 2, e.getValue() % 2),
                        (a, b) -> a,
                        LinkedHashMap::new
                ));

        result.forEach((k, v) -> System.out.println(k + ", " + v));
    }
}
```

---

### ✅ Output:

```
1, [pair = 2, odd = 1]
2, [pair = 1, odd = 1]
3, [pair = 1, odd = 0]
```

</details>

<details>
<summary>Palindrome Check Using Java Streams</summary>
---

### ✅ **Palindrome Check Using Java Streams**

```java
import java.util.stream.IntStream;

public class PalindromeCheck {
    public static boolean isPalindrome(String str) {
        String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return IntStream.range(0, cleaned.length() / 2)
                .allMatch(i -> cleaned.charAt(i) == cleaned.charAt(cleaned.length() - i - 1));
    }

    public static void main(String[] args) {
        String input1 = "Madam";
        String input2 = "Hello";

        System.out.println(input1 + " → " + isPalindrome(input1)); // true
        System.out.println(input2 + " → " + isPalindrome(input2)); // false
    }
}

import java.util.stream.IntStream;

public class ParallelPalindrome {
  public static boolean isPalindrome(String str) {
    String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

    return IntStream.range(0, cleaned.length() / 2)
            .parallel() // 👈 enable parallel processing
            .allMatch(i -> cleaned.charAt(i) == cleaned.charAt(cleaned.length() - i - 1));
  }

  public static void main(String[] args) {
    String input1 = "Madam";
    String input2 = "Hello";

    System.out.println(input1 + " → " + isPalindrome(input1)); // true
    System.out.println(input2 + " → " + isPalindrome(input2)); // false
  }
}

```

---

### 🧠 **Explanation**

* `replaceAll("[^a-zA-Z0-9]", "")`: removes all non-alphanumeric characters.
* `toLowerCase()`: makes the comparison case-insensitive.
* `IntStream.range(0, cleaned.length() / 2)`: iterates from start to the middle.
* `allMatch(...)`: ensures all symmetric character pairs match.


* `IntStream.range(0, cleaned.length() / 2)` → generates index positions to compare.
* `.parallel()` → splits the range across multiple threads.
* `.allMatch(...)` → ensures all comparisons return `true` in all threads.

If **any** pair doesn’t match, it short-circuits and returns `false`.

---

#### Example Output

```
Madam → true
Hello → false
```

---

### ⚙️ **Is parallel really faster?**

In this case, **no** — not for small or medium-sized strings.
Parallel streams add thread-splitting and coordination overhead.

| String Size                  | Sequential Time | Parallel Time       |
|------------------------------|-----------------|---------------------|
| Short (like "madam")         | ✅ Faster        | ❌ Slower (overhead) |
| Large (like 1 million chars) | ⚠️ Slower       | ✅ Can be faster     |

So:

* ✅ Works perfectly fine.
* ⚡ Only beneficial for **very large strings**.

---

</details>



## Find both the count of `'h'` and its positions in the given string.

### Solution:
```java
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class CharStreamExample {
    public static void main(String[] args) {
        String name = "sarathkumar";
        char target = 'h';

        // Count occurrences of 'h'
        long count = name.chars()
                         .filter(ch -> ch == target)
                         .count();

        // Find positions of 'h'
        List<Integer> positions = IntStream.range(0, name.length())
                                           .filter(i -> name.charAt(i) == target)
                                           .boxed()
                                           .collect(Collectors.toList());

        System.out.println("Count of '" + target + "': " + count);
        System.out.println("Positions of '" + target + "': " + positions);
    }
}
```

### Explanation:
1. **Counting 'h' occurrences**:
    - `name.chars()` converts the string into an IntStream of ASCII values.
    - `.filter(ch -> ch == target)` filters out only the occurrences of `'h'`.
    - `.count()` gives the total count.

2. **Finding positions of 'h'**:
    - `IntStream.range(0, name.length())` generates indices from `0` to `name.length() - 1`.
    - `.filter(i -> name.charAt(i) == target)` keeps only the indices where `'h'` appears.
    - `.boxed().collect(Collectors.toList())` converts the stream into a list.

### Output:
```
Count of 'h': 1
Positions of 'h': [5]
```

</details>