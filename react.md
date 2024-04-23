
# React

## Install 
- node js
- ide

## Create React App
- Open a folder.
- in terminal, enter `npx create-react-app react-app-name`
  - `npx` is a `npm` package runner when installing node.
  - for `npm` approach `npm install creact-react-app -g` to install globally.
- navigate to the folder `cd ./react-app-name`
- after completion, to run the app `npm start`

# React Basics

## Component
- Client side rendering
- Component describe a part of user interface.
- They are usable and nested inside other components.
- Easy to build mobile applications using react native. No need to learn, java, Kotlin or swift.

*Two types*
- Stateless functional component
- Stateful class component

### Stateless / Dumb / Presentational / functional component
- JavaScript functions that return HTML that describes UI
- Previously App.js was using class. Now changed to funtion.
- Name of the component should always start with capital case. eg - `function App() {}`

```mermaid
graph LR

A[Properties(props)] -- JavaScript Function --> B[HTML (JSX)]
```
- Use functional component as much as possible
- Advantages are
  - Absence of `this` keyword used in class component
  - Solution without using `state`
  - Mainly responsible for the UI.


### Stateful / Smart / Container / class component
- ES6 classes that extends Component class from react library.
- This must contain render() method to render HTML.

```mermaid
graph LR

A[Properties(props)] -- ES6 class --> B[HTML (JSX)]
```
- Advantages are
  - Feature rich
  - Maintatin their own private data - `state`
  - Complex UI logic
  - Provide lifecycle hooks

### JSX - JavaScript XML allows us to write HTML.
- Jsx stands for the javascript xml which allows to write the HTML inside the js.

### Fragments <><other tags /></> (empty tag in react)
- In react when we want to wrap a tags, but we dont want to use div or other tags. In that case we can use fragments.

### Hooks (2018)
- Hooks lets us to use state and other react features without writing a class

### Props
- Props are immutable.
- Props are passed to the component from outside component, so it is immutable.
- We can pass strings, arrays, functions from one component to other component, emojis etc.
- Props are like parameters passed to a function.

### State
> **What is a state?**
- States is an object which holds the information which controls the behaviour of the component.
- State is like a local variable declared inside function body, so state is mutable.
- State are mutable, i.e, values can be changed.

> **Why use State?**
- Props are immutable.
- Values which can change dynamically.
- State varable can be string, boolean, object or an array.

> **Rules of State / Hooks**
- State should be declared on top of the component. Check Message.jsx for refferance.
- Do not call hook / state inside the loops, conditions or nested functions.
- Only call hooks from react functions not just any regular js function.
- State/Hooks does not automaticaly merge the objects.






