# Java-Interview-Qus

variables: 

local 

inside the body of method, and it can not be static. 

instance 

inside the body of class. 

 

static 

it can not be local, we can share the copy and share among all the instances of class. Memory is allocated only once when the class is loaded. 

  

*	Float and double 

Double is more precious than float, where double takes 8 bytes and can provide precision up to 15 to 16 digits 

and float takes 4 bytes and provides precision upto 6 to 7. 

*	Both double and float are approximate types and not precise(accurate or exact). 

``````````````````````````````````````````````````````````````````````````````````` 

 

int vs Integer 

https://stackoverflow.com/questions/8660691/what-is-the-difference-between-integer-and-int-in-java 

 

  

 

 

 

final - keyword 

finally - block used after try catch 

finalize - method for clean up. Garbage collection 

``````````````````````````````````````````````````````````````````````````````````` 

 

*Compile time Error 

Two types:- 

1.Syntax Error 

2.Semantic Error 

*Run Time error 

if divisible by 0. 

  

*//Constant 

public static final String name="Sarath"; 

 

*//Value 

final String dontChange="India"; 

 

*//Field 

protected String rever="Gana"; 

 

*//Property 

private String age; 

 

 

CLASS – Class is a collection of objects. 

OBJECTS – Is a memory representation of a class 

 

 

Implicit and Explicit 

So in simple world implicit is done by jvm or language and explicit is done by programmer. 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

Primary main features of java: 

1.Platform Independent 

2.Object oriented programming language 

i   Abstraction 

ii  Encapsulation 

iii Inheritance 

iv  Polymorphism 

3. Simple 

4. Robust 

5. Secure 

6. Distributed 

7. Multithreading 

8. Portable 

 

import java.io.*; 

All the classes of io package can be imported. 

class 

The class contains the data and methods to be used in the program. Methods define the behavior of the class. 

static void Main() 

static keyword tells us that this method is accessible without instantiating the class. 

void 

this method will not return anything. Main() method is the entry point. 

System.in 

standard input stream that is used to read characters from the keyboard or other input devices. 

System.out 

standard output stream used to produce the result of the program. 

println() 

to display the text in console and takes to next line. 

 

Identifiers  

*starts with alphabets and underscore and dollar symbol. 

*Case sensitive. 

*Keyword cant be used as identifier. 

  

Modifier in Java 

 

1- Access modifiers 

Access Modifiyers 

Access within class 

Access within package 

Access outside package by subclass only 

Access outside package and not in subclass 

Public 

y 

y 

y 

y 

Protected 

y 

y 

y 

 

Default 

y 

y 

 

 

Private 

y 

 

 

 

 

 

 

private access modifier 

*The private access modifier is accessible only within class. 

*You cannot access to private field outside the class that defines that private. Java will notify error at the compile time of the class. 

  

class Sarath 

{ 

private String name = "sarath"; --> this can be accessed within class 

} 

 

class friend 

{ 

Sarath sar = new Sarath("tom"); 

String var = sar.name; //throws compilation error 

} 

 

private constructor 

If you create a class and have a private constructor, we cant create a object of this class in another class. 

 

Default access modifier 

The deffault access modifier is also known as the package-private, which means all the members are availabe inside the package but not accassible by other package outside the package. 

 

2- Non-access Modifiyers 

static – static keyword is mainly used for memory management 

Native - is a modifier only applicable for method. 

Final – final is a keyword for constant 

Abstract -  

Strictfp -  

  

  

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

OOP(Object Oriented Programming) 

Oops refers to languages that uses objects in programming. 

Oop's concepts consists of Polymorphism, Encapsulation, Inheritance, Abstraction, Class, Object, Method. 

  

  

1.Polymorphism 

Differentiate between entities with the same name efficiency. 

Mainly for two types 

i. Overloading 

Eg: Same method name for multiple methods but with different parameters. 

Constructor overloading:-https://www.geeksforgeeks.org/constructor-overloading-java/?ref=rp 

Constructor Overloading is somewhat similar to method overloading. 

ii. Overriding 

In other words it is called as Dynamic Method Dispatch or Run time polymorphism in java 

Eg: 	class A 

Class B extends A 

 

Overriding:- https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/ 

 

2.Inheritance 

Inheritance is a important pillar in OOP. 

Java doesnt support multiple inheritance. Due to ambiguity problem. 

It is the mechanism in Java whose (fields and methods) are inherited by another subclass. 

i. SuperClass 

The class whose fields and methods are inherited is called SuperClass or BaseClass or ParentClass. 

ii. SubClass 

The class that inherits the other class is known as Subclass or DerivedClass or ExtendedClass. 

  

3.Encapsulation - hiding the information.  

i. The internal state of every object is protected by hiding its attributes. 

ii. It increases usability and maintenance of code. 

 

4.Abstraction 

i. Abstract class can have abstract method (incomplete method) and non-abstract method. This class can be 		extended. 

ii. Declared with Abstract keyword 

 

5.Interface 

Interface class can have only abstract method (incomplete method). This class should be implemented. 

Note:  

Before java 1.8, interface can have only abstract method, i.e method without body. 

After java 1.8 default and static method declaration is allowed, 

@Functional interface – Single abstract method. (Can be predefined and also user defined) 

Callable – run() 

Runable – call() 

Comparable – compareTo() 

 

Eg: 

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

 

 

 

Implements and Extends ---- https://www.edureka.co/blog/implements-in-java/ 

  

Implement - implement keyword is used when we want to inherit interface class. 

Multiple interface class can be inherited at a time. 

  

Extends - By extending the class, it can use the methods of super class. 

 

Marker interface vs Functional Interface 

In Java, a Marker interface is an interface without any methods or fields declaration, means it is an empty interface. Similarly, a Functional Interface is an interface with just one abstract method declared in it. 

 

  

Cloneable/Runnable (Functional interface) 

This is an interface class, which implements Clonable/Runnable 
