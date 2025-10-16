# 🚀 React + ES6 Quick Setup & Core Concepts

## 🧩 Prerequisite
Make sure **Node.js** is installed on your system.

---

## ⚙️ Create a React App

### **Step 1:** Create and enter your React project
```bash
npx create-react-app React-app
cd React-app
````

---

## 🖥️ Start the Server

### **Type 1: Using Live Server (VS Code Extension)**

* Install **Live Server** by *Ritwick Dey* from the VS Code Marketplace.
* Open your `index.html`, right-click, and select **"Start Live Server"**.

### **Type 2: Using React’s built-in server**

```bash
cd ./projectname/
npm start
```

---

## 📚 Working with Classes

File structure example:

```
/src
  ├── person.js
  ├── teacher.js
  └── index.js
```

---

### 🧱 `person.js`

```js
// person.js

export class Person {
  constructor(pname) {
    this.pname = pname;
  }

  walk() {
    console.log("Person Walk");
  }

  talk = () => {
    console.log("Lambda arrow function");
  };
}
```

**Explanation:**

* `constructor(pname)` initializes a new instance with the property `pname`.
* `walk()` is a regular method.
* `talk` is an **arrow function property** — it binds `this` to the current instance automatically.

---

### 🧱 `teacher.js`

```js
// teacher.js

import { Person } from './person.js';

export class Teacher extends Person {
  constructor(name, degree) {
    super(name); // Calls the parent (Person) constructor
    this.degree = degree;
  }

  teach() {
    console.log("Teacher Teach");

    const classPerson = new Person("Sarathkumar"); // Creating a new Person instance

    classPerson.walk(); // Output: "Person Walk"
    classPerson.talk(); // Output: "Lambda arrow function"

    let classPer = classPerson.walk; // Stores the function reference
    console.log(classPer); // Logs the walk function definition
  }
}
```

**Explanation:**

* `extends` allows `Teacher` to inherit from `Person`.
* `super(name)` invokes the parent class constructor.
* Demonstrates object creation and method calls.

---

### 🧱 `index.js`

```js
// index.js

import { Teacher } from "./teacher.js";

const teacher1 = new Teacher("Sarath", "BCA");
teacher1.teach();

console.log(document);
document.getElementById("divId").innerHTML = "Written in JS";

// Object Example
let person = {
  name: "Sarath",
  walk: function () {
    console.log(this); // refers to the person object
  },
  talk() {
    console.log("talk");
  },
  balk: () => {
    console.log("balk");
  },
};

// Dot Notation
person.name = "Sarath Kumar";

// Bracket Notation
person["name"] = "Sarathkumar";

// Calling methods
person.walk(); // logs person object
person.talk(); // "talk"
person.balk(); // "balk"
```

---

## 🧠 Topics Covered

1. Object
2. Dot notation
3. Bracket notation
4. Without binding
5. With binding
6. Predicate function
7. Arrow functions
8. `Array.map()` & Template Literals `` `${}` ``
9. Object Destructuring & Nested Destructuring
10. Spread Operator (`...`) – adds old array into new array
11. Rest Operator (`...`) – allows multiple arguments in functions
12. Array Destructuring `[]`
13. Object Destructuring `{}`

---

### 💡 Key Takeaway

Understanding **classes**, **`this` context**, **arrow functions**, and **destructuring** helps you write cleaner, modern ES6+ JavaScript — especially in React environments.

---

🧩 **Tip:**
Always use `let` and `const` appropriately to avoid scope and hoisting issues.
Your code becomes predictable, safe, and easier to debug.

---


---

## 🧩 Without Binding vs With Binding

In JavaScript, functions are **first-class objects**, meaning they can be assigned to variables, passed around, and called independently.  
However, when you detach a method from its object, the `this` reference is lost — unless you **bind** it.

```js
// Without binding
const walk1 = person.walk; // functions are objects in JS
walk1(); // global call — 'this' will be undefined or the global object
console.log(walk1);

document.getElementById("person1").innerHTML =
  "Person without binding " + walk1;

// With binding
const walk2 = person.walk.bind(person);
walk2(); // correctly binds 'this' to the person object
console.log(walk2);

document.getElementById("person2").innerHTML =
  "Person with binding " + walk2;
```

**Explanation:**
- `walk1()` is called without the `person` context, so `this` loses its binding.
- `.bind(person)` creates a new function where `this` always refers to `person`.
- Binding is especially useful when passing methods as callbacks.

---

## 🧮 Predicate Functions

Predicate functions are **simple functions that return a value** based on computation or condition.  
They help make code modular and readable.

```js
// Predicate function
const square1 = function (number) {
  return number * number;
};

document.getElementById("squr1").innerHTML =
  "Square through predicate function: " + square1(2);
```

**Explanation:**
- `square1` is a standard function expression.
- It explicitly returns a computed value.

---

## ⚡ Arrow Functions (ES6)

Arrow functions provide a **concise syntax** and **lexical `this` binding**, which means they do not redefine `this` inside their body.

```js
// Using arrow function
const square2 = (number) => number * number;
console.log("square2 ::: " + square2(2));

// Multi-line arrow function with explicit return
const square3 = (number) => {
  let addNum = number * number;
  addNum = number + addNum;
  return addNum;
};
console.log("square3 ::: " + square3(3));

document.getElementById("squr2").innerHTML =
  "Square through Arrow function: " + square2(3);
```

**Key Notes:**
- Arrow functions can use **implicit return** for single-line expressions.
- Great for short, functional operations like in `.map()`, `.filter()`, and `.reduce()`.
- They do **not** have their own `this`, which makes them ideal for callbacks and inner functions.

---

🧩 **Tip:**  
Use `bind()` when you need to preserve `this` in a callback.  
Use **arrow functions** when you want lexical `this` behavior automatically.

---

Excellent continuation 👏 — you’re documenting your ES6 learning beautifully.

Here’s your next section, formatted as part of your **`react-es6-basics.md`** (or similar) Markdown file — with clean code blocks, clear headings, and concise explanations.  
You can directly append this to your existing `.md` file.

---

## 🔍 Predicate Functions with `Array.filter()`

Predicate functions return **true or false** based on a condition.  
They’re commonly used with methods like `.filter()` to extract elements matching specific criteria.

```js
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// Using Predicate Function
// A predicate function takes one value and returns true/false
const activeJobs1 = jobs.filter(function (job) {
  return job.isActive;
});

// JSON.stringify converts objects to strings for display
document.getElementById("actJobs1").innerHTML =
  "Active jobs (predicate function): " + JSON.stringify(activeJobs1);

// Using Arrow Function
const activeJobs2 = jobs.filter((job) => job.isActive);
document.getElementById("actJobs2").innerHTML =
  "Active jobs (arrow function): " + JSON.stringify(activeJobs2);
```

**Explanation:**
- `.filter()` returns a **new array** containing only elements where the condition is `true`.
- Predicate functions are ideal for filtering data collections.
- Arrow functions make them concise and readable.

---

## 🎨 `Array.map()` and Template Literals

`.map()` creates a **new array** by applying a function to each element in the original array.  
Template literals (backticks `` ` ``) make string concatenation clean and expressive.

```js
const colors = ["red", "blue", "white"];

const funcItems = colors.map(function (color) {
  return "<li>" + color + "</li>";
});

const arrowItems = colors.map((color) => `<li>${color}</li>`); // Template literal syntax
console.log(arrowItems + "\n" + funcItems);
```

**Explanation:**
- Both `map()` versions return an array of `<li>` elements.
- Template literals allow you to embed variables directly:
  ```js
  `<li>${color}</li>`
  ```
- Easier to read and maintain than traditional string concatenation.

---

## 🧩 Object Destructuring & Nested Destructuring

Destructuring lets you **unpack values** from arrays or objects into separate variables.  
It’s one of the most powerful ES6 features for writing clean, declarative code.

```js
const address = {
  street: "Dabai",
  city: "Dubai",
  country: "Kabai",
};

// Basic Object Destructuring
let { street, city, country } = address;

console.log(street);  // Dabai
console.log(city);    // Dubai
console.log(country); // Kabai

// Assigning to New Variable Names + Default Values
let { street: st, city: ct, country: cn, place: pc = "Tvk" } = address;
// If 'place' doesn't exist in the object, default "Tvk" is used

console.log(st); // Dabai
console.log(ct); // Dubai
console.log(cn); // Kabai
console.log(pc); // Tvk

// Using Destructuring in Function Parameters
function objDesCall({ street, city }) {
  console.log(`The name is ${street} and the city is ${city}`);
}

objDesCall(address);
```

**Explanation:**
- `{ street, city, country }` extracts properties directly.
- `{ street: st }` renames variables while destructuring.
- Default values can be assigned (`place: pc = "Tvk"`).
- Functions can destructure arguments for cleaner parameter handling.

---

🧩 **Tip:**  
Combine destructuring with arrow functions for ultra-clean code, e.g.:

```js
const printCity = ({ city }) => console.log(city);
printCity(address);
```

---

✅ **Next Up:**  
We can continue with:
- Spread Operator (`...`)
- Rest Operator (`...`)
- Array Destructuring `[]`
- Object Destructuring `{}` (nested examples)

Perfect 👏 — you’re almost done with the **core ES6 concepts**!

Here’s your next section formatted as a continuation of your `.md` file — fully cleaned up, properly explained, and syntax-highlighted.
You can safely append this to the end of your existing **`react-es6-basics.md`** document.

---

## 🧮 Array Destructuring `[]`

Destructuring is a **simplified way to extract multiple values** from an array into separate variables.  
It makes your code cleaner and eliminates repetitive indexing.

```js
// Array Destructuring
const arrNumbs = [1, 2, 3];

// Extracting specific values (skipping the middle element)
const [num1, , num3] = arrNumbs;

console.log(num1, num3); // Output: 1 3
````

**Explanation:**

* The commas `, ,` let you skip unwanted elements.
* The array’s structure defines how values are assigned.
* Equivalent to:

  ```js
  const num1 = arrNumbs[0];
  const num3 = arrNumbs[2];
  ```

---

## 🌊 Spread Operator (`...`)

The **spread operator** (`...`) expands iterable elements (like arrays or objects) into individual elements.
It’s useful for **copying**, **combining**, or **spreading** values across new arrays or function arguments.

```js
const firstArr = [1, 2, 3];
console.log("Type of:", typeof firstArr); // object

const secndArr = [4, 5, 6];

const arrConcatOP = (arry1, arry2) => {
  // Using concat()
  const combined1 = arry1.concat(arry2);
  console.log("Concatenated:", combined1);

  // Using spread operator
  const combined2 = [...arry1, "a", ...arry2];
  console.log("Spread Combined:", combined2);
};

arrConcatOP(firstArr, secndArr);
```

**Explanation:**

* `concat()` merges arrays traditionally.
* `[...arry1, "a", ...arry2]` uses the spread operator to:

    * Copy elements from `arry1`
    * Add `"a"`
    * Then spread elements from `arry2`
* Easier and more readable than `concat()`.

---

## ✋ Rest Operator (`...`)

The **rest operator** looks identical to the spread operator but does the opposite —
it **collects multiple arguments** into a single array.

```js
// Rest Operator Example
const filter = (...args) => {
  return args.filter((element) => element === 1);
};

console.log(filter(1, 2, 3, 4)); // Output: [1]
```

**Explanation:**

* `(...args)` collects all arguments into an array.
* You can then perform array operations like `.filter()`, `.map()`, etc.
* Handy when you don’t know how many parameters will be passed to a function.

---

### ⚖️ **Spread vs Rest — The Difference**

| Operator           | Purpose           | Example                             |
| ------------------ | ----------------- | ----------------------------------- |
| **Spread (`...`)** | Expands elements  | `const newArr = [...oldArr, 4, 5];` |
| **Rest (`...`)**   | Collects elements | `function sum(...nums) {}`          |

**Mnemonic:**

> Spread *spreads out* values → used when **expanding**.
> Rest *gathers up* values → used when **collecting**.

---

🧩 **Tip:**
Use **destructuring** with **rest** for even cleaner code:

```js
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
```

---

✅ **Now your file covers:**

* Object creation and binding
* Predicate and arrow functions
* Template literals
* Object and array destructuring
* Spread and rest operators

---

