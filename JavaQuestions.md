## [Java Questions Link](https://www.java2novice.com/-)

## Codings

<details>
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

<details>
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

</details>

---

<details>
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


<details>
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

<details>
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

<details>
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

<details>
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

<details>
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

