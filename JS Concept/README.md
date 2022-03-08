# Javascript Concept Clear

### 1. How To Use Let & Const Varriable ? 

`Let` The Let  The let statement declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used.
    

`Const` Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared. However, if a constant is an object or array its properties or items can be updated or removed. 

### 2. Differnce Between Let And Const

`Let`

**let is block scoped**
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:

```javascript
 let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .
```

**let can be updated but not re-declared** Just like var,  a variable declared with `let` can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

```javascript
    let greeting = "say Hi";
    greeting = "say Hello instead";

    this will return an error:
    
    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
```

    However, if the same variable is defined in different scopes, there will be no error:

```javascript

    let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }

    console.log(greeting); // "say Hi"

    Why is there no error? This is because both instances are treated as different variables since they have different scopes.
```
**Hoisting of let**
Just like  `var`, `let` declarations are hoisted to the top. Unlike `var` which is initialized as `undefined`, the `let` keyword is not `initialized`. So if you try to use a let variable before declaration, you'll get a `Reference Error`.

`Const Variable`

Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.
**const declarations are block scoped** Like let declarations, const declarations can only be accessed within the block they were declared.

**const cannot be updated or re-declared** This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

`Example:`

```javascript
    const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable. 

    As

    const greeting = "say Hi";
    const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

```

**You Can Find Out The Difference Between `Var`, `Let` And `Const`**

1. `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.

2. `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.

3. They are all hoisted to the top of their scope. But while `var` variables are initialized with undefined, `let and const` variables are not initialized.

4. While `var and let` can be declared without being initialized, `const` must be initialized during declaration.

