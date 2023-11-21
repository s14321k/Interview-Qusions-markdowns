# Features Of Angular

## Template Engine

## Data Binding

## Forms

## Routing

## Observables

## PWA - Download as a native app for mob/desktop

## tsconfig.json
- change the "strict": true mode in tsconfig.json
- noImplicitAny in tsconfig.json
- sourceMap to debug code
- noEmit for not to generate js file
-  "outDir": "./dist" to see the generated output

# TypeScript v4 (Microsoft) -> (Google)
- Strongly typed programming language
- Superset of JavaScript
- Compiles to JavaScript
- TypeScript comes with its own compiler called TSC.

## Type Safety


## Installing and creating first typeScript program
- Install node - 20.9.0(current)
- Create Folder
- in terminal -> npm init
- Should see package.json in folder
- in terminal -> npm i typscript
- in terminal -> Use this ``tsc --init`` or this ``npx tsc --init``
- Create a dataTypes.ts file for practice.
- in terminal -> ``tsc`` or ``npx tsc``  ->  creates dataTypes.js file.
- After writing code in .ts file, in terminal type -> npx tsc -> node dataTypes

## SPA (Single page application)
- SPA does not make requests to server for every URL requests. Like AJAX

## Angular Helps
- Angular has routing functionality.
- SSR(Server side rendering) good for SEO(Search engine optimization) which supports SPA.

## Agenda
### DATA types
- string
- number
- boolean
- array
- enum
- tuple
- any
- void
- never

### Different ways to write functions
- Name function
- Function expression
- Arrow function

### Generic function

### Optional Parameters 

### Required Parameters

### Rest Parameters

### Type Inference
Type script has the ability to determine the type of data type assigned. Like ``let name = "Sarath"``, ts finds this is a string.

### Union and intersection Types

### Generics

### Literal types

### Decorators are annotations in angular
- Can modify the behavior of class, method at run time.
- Used internally by angular.


# Angular

## install Angular

### To crreate empty and add projects
- To install angular cli - `npm i @angular/cli -g`
- To check the version - `ng --version` or `ng version`

``If face any issue to check the version, then try this.``

Run the bellow commands in shell.
1. **Get-ExecutionPolicy** - If the policy is set to "Restricted" or "AllSigned," you need to change it to allow script execution. 
2. **Set-ExecutionPolicy Unrestricted** -Scope CurrentUser - this will change the mode
3. * To revert back use this command - **Set-ExecutionPolicy Unrestricted -Scope CurrentUser**

- To create new work space empty - `ng new angularProj --createApplicationfalse`
- Install npm  - `npm i` or `npm install`
- install packages - `ng g app hotelInventory`

### To create work space with default project

- `ng new hoteInventory`
- To create under specific version `npx @angular/cli@13 new hotelInventoryAngular`
- If karma.conf.js doesn't exist, then run this command ``ng generate config karma``
- ``npx browserslist`` - To check the browser compatibility
- ``ng serve -o`` - To run the application.
- To kill the  process ``ctrl + c`` to terminate.
  - ``ng build`` to build the app. Now new folder `dist` will get created. inside that `index.html` file is present.
  - [No modules.js file?](https://angular.io/guide/standalone-migration)
  - https://angular.io/guide/standalone-components
  - https://stackoverflow.com/a/76753364
- To create a new component- ``ng generate Home -standalone --inline-template`` or ``ng generate component compName`` or using short cuts ``ng g c compName``
- To change the `selector` prifix, // To change the app to sar or vice versa, go to angular.json and change the value in prefix

## Binding Syntax

- There are three ways,
  - Interpolation syntax - using the variable name assigned inside the component `{{ varName }}`
  - Property Binding
  - Event Binding

## Directives
- They are reusable elements and changes the behavior and appearance on DOM
- Directive wont be having templates where Components have.
- Directives can implement all life cycle hooks

### Types of Directives
#### Built in directives
- Structural directives
  - *ngIf - eg in rooms.component.html[hotelInventoryAngular13](../../VisualStudio/TSAngular/hotelInventoryAngular13/src/app/rooms/rooms.component.html)  //(..%2F..%2FVisualStudio%2FTSAngular%2FhotelInventoryAngular13)
  - *ngFor
  - *ngSwitch
- Attribute directives
  - ngClass
  - sgStyle
- Componet directives








 