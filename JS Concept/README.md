# Javascript Concept Clear

### How To Use Let & Const Varriable ? 

`Let` The Let  The let statement declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used.
    

`Const` Constants are block-scoped, much like variables declared using the `let` keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared. However, if a constant is an object or array its properties or items can be updated or removed. 

### Differnce Between Let And Const

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