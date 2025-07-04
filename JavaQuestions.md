## [Java Questions Link](https://www.java2novice.com/-)

## Codings

1. Write a Java Program to remove all white spaces from a string without using replace() – Use Java8 syntax.

2. Find the first non-duplicate character in a String (Eg Apple – ‘A’; Madam – ‘D’)

3. Write a java program to find the 3 highest repeated character

4. Find missing element in the array comparing array a(1,1,2,5,6,9) and b (2,9,5) O/P: 1,6

5. Same method name with different parameter. Which method will get execute?

6. Get  even numbers from an array using stream.

7. Print a given array "cyclically" in a loop to output the desired pattern
   Given Array-[1,2,3,4,5,6]
   Sample output
   Group(No. of Column)- 4 Iterations(No. of rows)- 7 Output will be 1, 2, 3, 4 5, 6, 1, 2 3, 4, 5, 6 1, 2, 3, 4 5, 6, 1, 2 3, 4, 5, 6 1, 2, 3, 4
   if Group- 5 Iterations- 2 Output will be 1, 2, 3, 4, 5 6, 1, 2, 3, 4
   if Group- 3 Iterations- 3 Output will be 1, 2, 3 4, 5, 6 1, 2, 3

```java
public class SimpleClass 
{
    public void method(String str)
	{
        System.out.println("String method " + str);
    }
    public void method(Object object) {
        System.out.println("Object method " + object);
    }
    public static void main(String[] args) {
        SimpleClass instance = new SimpleClass();
        instance.method("Hello");
        instance.method(new String("World"));
        String str = new String("Mango");
        instance.method((Object)str);
        instance.method(null);
    }
}
```

String[] colors = {"Red", "Green", "Blue"};
List<String> carsList = Arrays.listOF(1audi, 2ferrari, 3nexa, 1swift, 2baleno, 3verna);
Here set the Red as key anf first index value 1 should be collected seperately, as well as for 2 and 3.

6.

