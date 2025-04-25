
# Can we overload main method?

**can** overload the `main` method in Java, but the JVM will only call the standard `main` method with the signature:

```java
public static void main(String[] args)
```

### Example of Overloading `main`:
```java
public class MainOverloadExample {
    // Standard main method (entry point for JVM)
    public static void main(String[] args) {
        System.out.println("Standard main method");
        
        // Calling overloaded main methods
        main(10);
        main("Overloaded main");
    }

    // Overloaded main method with an int parameter
    public static void main(int a) {
        System.out.println("Overloaded main with int: " + a);
    }

    // Overloaded main method with a String parameter
    public static void main(String str) {
        System.out.println("Overloaded main with String: " + str);
    }
}
```

### Output:
```
Standard main method
Overloaded main with int: 10
Overloaded main with String: Overloaded main
```

### Key Points:
- Overloading means defining multiple methods with the same name but different parameters.
- The JVM **only calls** `public static void main(String[] args)`.
- Other `main` methods can be explicitly called within the program.


🚀



# What happens if we remove static from main method?

If you remove `static` from the `main` method in Java, the program will **compile successfully** but will fail at **runtime** with an error like:

```
Error: Main method is not static in class MainOverloadExample, please define the main method as:
   public static void main(String[] args)
```

### Why does this happen?

1. **JVM Calls `main` Without Creating an Object**
    - The Java Virtual Machine (JVM) **directly** invokes the `main` method when a program starts.
    - If `main` is **not static**, it belongs to an instance of the class.
    - But the JVM doesn't create an instance of your class before calling `main`, so it cannot call a non-static method.

2. **Static Methods Can Be Called Without an Object**
    - `static` means the method belongs to the **class itself**, not an instance.
    - This allows the JVM to call `main` **without instantiating the class**.

### What Happens if `main` is Non-Static?
```java
public class Test {
    public void main(String[] args) { // Removed 'static'
        System.out.println("Non-static main");
    }
}
```
#### Expected Error at Runtime:
```
Error: Main method is not static in class Test, please define the main method as:
   public static void main(String[] args)
```

### How to Call Non-Static `main` Manually?
If you **really** want to use a non-static `main`, you must create an instance first:

```java
public class Test {
    public void main(String[] args) { // Non-static main
        System.out.println("Non-static main method");
    }

    public static void main(String[] args) { // Standard main
        Test obj = new Test();
        obj.main(args); // Manually calling non-static main
    }
}
```
✅ This will work, but the JVM **will never** directly invoke a non-static `main`.

### Conclusion:
- **Always declare `main` as `public static void main(String[] args)`** for execution by the JVM.
- If you remove `static`, the JVM cannot call it, and you get a runtime error.

🚀