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
```

📦 **Output:**

```
Character Frequencies: {a=4, b=3, c=2}
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

<details>
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
| ------------------------------ | -------------------------------------- |
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


---

<details>
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
| ------------------------------------------------ | ------- | ------------------------------------------------------------------------------------------- |
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
