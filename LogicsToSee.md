
Here’s your **refactored and collapsible version** of the `main` method overloading explanation using **Markdown with collapsible sections** (perfect for tools like GitHub or Markdown previewers that support HTML):

---

<details>
<summary><strong>Can we overload the <code>main</code> method in Java?</strong></summary>

Yes, we **can overload** the `main` method in Java, but the JVM will only call the standard `main` method with this signature:

```java
public static void main(String[] args)
```

---

<details>
<summary><strong>🔁 Example: Overloading <code>main</code></strong></summary>

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

</details>

---

<details>
<summary><strong>🖨️ Output</strong></summary>

```
Standard main method  
Overloaded main with int: 10  
Overloaded main with String: Overloaded main
```

</details>

---

<details>
<summary><strong>📝 Key Points</strong></summary>

* ✅ Overloading = same method name, different parameter types or count
* 🚫 JVM calls only `public static void main(String[] args)`
* ✅ Overloaded `main` methods must be **called manually** from within your code

</details>

</details>

---

<details>
<summary><strong>❓ What happens if we remove <code>static</code> from the <code>main</code> method?</strong></summary>

Removing `static` from the `main` method compiles successfully but causes a **runtime error**:

```
Error: Main method is not static in class Test, please define the main method as:
   public static void main(String[] args)
```

---

<details>
<summary><strong>🧠 Why does this happen?</strong></summary>

1. **JVM Calls `main` Without Creating an Object**

   * The JVM directly looks for `public static void main(String[] args)` to start the program.
   * A **non-static** method needs an object, but the JVM **doesn’t create** one automatically.

2. **Static = Class-level Method**

   * A `static` method belongs to the class, not to an instance.
   * JVM can call it **without instantiating** the class.

</details>

---

<details>
<summary><strong>🧪 Code Example (With Error)</strong></summary>

```java
public class Test {
    public void main(String[] args) { // Removed 'static'
        System.out.println("Non-static main");
    }
}
```

🧨 **Runtime Error**:

```
Error: Main method is not static in class Test
```

</details>

---

<details>
<summary><strong>✅ How to Call a Non-Static <code>main</code> Manually?</strong></summary>

```java
public class Test {
    public void main(String[] args) { // Non-static main
        System.out.println("Non-static main method");
    }

    public static void main(String[] args) { // Correct static main
        Test obj = new Test();
        obj.main(args); // Manually calling the non-static method
    }
}
```

✅ This works, but the JVM **still uses** the static `main` to start execution.

</details>

---

<details>
<summary><strong>📌 Conclusion</strong></summary>

* Always declare the entry point as:

  ```java
  public static void main(String[] args)
  ```

* JVM will not execute the `main` method if `static` is missing.

* You can **manually** call a non-static `main`, but it's not recommended as the program entry point.

</details>

</details>

---

<details>
<summary><strong>Write a Java Program to print Fibonacci Series using Recursion.</strong></summary>

```java
class InterviewBit {
    public static void printFibonacci(int val_1, int val_2, int num){
        //Base Case
        if(num == 0)
            return;

        //Printing the next Fibonacci number    
        System.out.print( val_1 + val_2 + " ");

        //Recursively calling for printing Fibonacci for remaining length
        printFibonacci(val_2, val_1+val_2, --num);
    }
    public static void main(String args[]) {
        System.out.println(" *** Fibonacci Series *** ");

        //Printing the first two values
        System.out.print("0 1 ");

        //Calling Method to print the fibonacci for length 10
        printFibonacci(0, 1, 10);
    }
}
```

</details>

---

<details>
<summary><strong>Write a Java program to check if the two strings are anagrams.</strong></summary>

The main idea is to validate the length of strings and then if found equal, convert the string to char array and then sort the arrays and check if both are equal.

```java
import java.util.Arrays;
import java.util.Scanner;
public class InterviewBit {
 public static void main(String[] args) {
   Scanner s = new Scanner(System.in);
   //Input from two strings
   System.out.print("First String: ");
   String string1 = s.nextLine();
   System.out.print("Second String: ");
   String string2 = s.nextLine();
   // check for the length
   if(string1.length() == string2.length()) {
     // convert strings to char array
     char[] characterArray1 = string1.toCharArray();
     char[] characterArray2 = string2.toCharArray();
     // sort the arrays
     Arrays.sort(characterArray1);
     Arrays.sort(characterArray2);
     // check for equality, if found equal then anagram, else not an anagram
     boolean isAnagram = Arrays.equals(characterArray1, characterArray2);
     System.out.println("Anagram: "+ isAnagram);
 }
}
```

</details>

---

<details>
<summary><strong>Write a Java Program to find the factorial of a given number.</strong></summary>

```java
public class FindFactorial {
   public static void main(String[] args) {
       int num = 10;
       long factorialResult = 1l;
       for(int i = 1; i <= num; ++i)
       {
           factorialResult *= i;
       }
       System.out.println("Factorial: "+factorialResult);
   }
}
```

</details>

---

<details>
<summary><strong>Given an array of non-duplicating numbers from 1 to n where one number is missing, write an efficient java program to find that missing number.</strong></summary>

Idea is to find the sum of n natural numbers using the formula and then finding the sum of numbers in the given array. Subtracting these two sums results in the number that is the actual missing number. This results in O(n) time complexity and O(1) space complexity.

```java
public class IBMissingNumberProblem {

   public static void main(String[] args) {

       int[] array={4,3,8,7,5,2,6};
       int missingNumber = findMissingNum(array);
       System.out.println("Missing Number is "+ missingNumber); 
   }

   public static int findMissingNum(int[] array) {
       int n=array.length+1;
       int sumOfFirstNNums=n*(n+1)/2;
       int actualSumOfArr=0;
       for (int i = 0; i < array.length; i++) {
           actualSumOfArr+=array[i];
       }
       return sumOfFirstNNums-actualSumOfArr;
   }
}
```

</details>

---

<details>
<summary><strong>Write a Java Program to check if any number is a magic number or not. A number is said to be a magic number if after doing sum of digits in each step and inturn doing sum of digits of that sum, the ultimate result (when there is only one digit left) is 1.</strong></summary>

Example, consider the number:

* Step 1: 163 => 1+6+3 = 10
* Step 2: 10 => 1+0 = 1 => Hence 163 is a magic number

```java
public class IBMagicNumber{

   public static void main(String[] args) { 
       int num = 163;  
       int sumOfDigits = 0;
       while (num > 0 || sumOfDigits > 9) 
       { 
           if (num == 0) 
           { 
               num = sumOfDigits; 
               sumOfDigits = 0; 
           } 
           sumOfDigits += num % 10; 
           num /= 10; 
       } 

       // If sum is 1, original number is magic number 
       if(sumOfDigits == 1) {
           System.out.println("Magic number");
       }else {
           System.out.println("Not magic number");
       }
   }
}
```

</details>

---

<details>
<summary><strong>Write a Java program to create and throw custom exceptions.</strong></summary>

```java
class InterviewBit {
    public static void main(String args[]) throws CustomException {

        // Throwing the custom exception be passing the message
        throw new CustomException(" This is my custom Exception ");
    }
}
//Creating Custom Exception Class
class CustomException extends Exception{
    //Defining Constructor to throw exception message
    public CustomException(String message){
        super(message);
    }
}
```

</details>

---

<details>
<summary><strong>Write a Java program to reverse a string.</strong></summary>

```java
class InterviewBit{
    public static void main(String[] args){
        //Input String
        String str = "Welcome to InterviewBit";
        
        //Pointers.
        int i = 0, j = str.length()-1;
        
        //Result character array to store the reversed string.
        char[] revString = new char[j+1];
        
        //Looping and reversing the string.
        while(i < j){
            revString[j] = str.charAt(i);
            revString[i] = str.charAt(j);
            i++;
            j--;
        }
        //Printing the reversed String.
        System.out.println("Reversed String = " + String.valueOf(revString));
    }
}
```

</details>

---

<details>
<summary><strong>Write a Java program to rotate arrays 90 degree clockwise by taking matrices from user input.</strong></summary>

```java
import java.util.Scanner;
public class InterviewBit
{
    public static void main(String[] args) {
	  Scanner sc = new Scanner(System.in);
	  int no;
        System.out.print("Enter size of Array : ");
        no = sc.nextInt();
        int[][] a = new int[no][no];
        System.out.print("Enter  "+ no*no+" Element Array : ");
        
        for(int i = 0; i<no; i++){
            for(int j = 0; j<no; j++){
                a[i][j] = sc.nextInt();
            }
        }
        System.out.print("\nArray Before Rotation\n\n");
        for(int i = 0; i<no; i++){
            for(int j = 0; j<no; j++){
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }
    
        System.out.println("\n");
        //Rotation
        //Transpose
        for(int i = 0; i < no; i++){
            for(int j = i; j < no; j++){
                int temp = a[i][j];
                a[i][j] = a[j][i];
                a[j][i] = temp;
            }
        }
        
        //Reverse Each row
        for(int i = 0; i < no; i++){
            int l, j;
            for(j = 0, l = no -1; j < l; j++){
                int temp = a[i][j];
                a[i][j] = a[i][l];
                a[i][l] = temp;
                l--;
            }
        }
        
        System.out.println("Array After Rotation - \n");
    
        for(int i = 0; i<no; i++){
            for(int j = 0; j<no; j++){
                System.out.print(a[i][j] + " ");
            }
            System.out.println();
        }
    }
}
```

</details>

---

<details>
<summary><strong>Write a java program to check if any number given as input is the sum of 2 prime numbers.</strong></summary>

Example :

Input - 18

Output - 

18 = 13 + 5
18 = 11 + 7

```java
public class InterviewBit
{
    // Method to Check Prime Number
    private static int check_prime(int num){
        int flag = 0;
        for(int i = 2; i<=num/2; i++){
            if(num%i == 0){
                flag = 1;
                return 1;
            }
        }
        if(flag == 0)
            return 0;
        return 1;
    }
    // Method to get print the prime sum
    private static void find(int num){
        for(int i = 2; i <= num/2; i++){
            if(check_prime(i) == 0){
                if(check_prime(num-i) == 0)
                    System.out.println(num + " = "+ (num-i) + " "+ i);
            }
        }
    }
	public static void main(String[] args) {
		find(18);
	}
}
```

</details>

---

<details>
<summary><strong>Write a Java program for solving the Tower of Hanoi Problem.</strong></summary>

```java
public class InterviewBit
{
    //Recursive Method for Solving the Tower of hanoi.
    private static void TOH(char source, char auxiliary, char destination, int numOfDisk){
    	if (numOfDisk > 0){
    		TOH(source, destination, auxiliary, numOfDisk-1);
    		System.out.println("Move 1 disk from "+source+" to "+destination+" using "+auxiliary+".");
    		TOH(auxiliary, source, destination, numOfDisk-1);
    	}
    }
	public static void main(String[] args) {
		TOH('A','B','C', 3);
	}
}
```

</details>

---

<details>
<summary><strong>Implement Binary Search in Java using recursion.</strong></summary>

```java
public class Main
{
    //Recursive method for binary search
    private static boolean binarySearch(int[] arr, int low, int high, int key){
       
        //Calculating Mid.
        int mid = (low + high)/2;
       
        //Base Case.
        if(low > high)
            return false;
       
        //Checking if the key is found in the middle.
        if(arr[mid] == key)
            return true;
       
        //Searching on the left half if a key exists there.  
        if(key < arr[mid])
            return binarySearch(arr, low, mid-1, key);
       
        //Searching on the other half otherwise.
        return binarySearch(arr, mid+1, high, key);
    }
public static void main(String[] args) {
   
   int[] arr = {2, 5, 9, 13, 17, 21, 30};
   if(binarySearch(arr, 0, (arr.length-1), 30))
       System.out.println(" Element Found. ");
   else
       System.out.println(" Element not Found.");
}
}
```

</details>

---
