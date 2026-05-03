//! decleartion and initialization of variables
var a;// declered but not initialized
var b = 10; //declered and initialized
var c = "Hello";
//! we did not use var keyword because it have issue like 
//? 1. it can be redeclared and reinitialized
//? 2. it is function scoped
//? 3. it can cause confusion and bugs in larger codebases
//? 4 it add it self to window object in browser
//? 5. it can lead to unintended consequences and make code harder to debug
//? 6. it can cause issues with hoisting and variable shadowing
//? 7. it can make it difficult to track variable usage and dependencies in larger codebases


//! explain point 1 of var
//? 1. it can be redeclared and reinitialized
var a = 5;  
var a = 10; // redeclaration of variable a
console.log(a); // Output: 10

//? 2. it is function scoped
// function Text(){
//     if(true){
//         var a = 5;
//     }
//     console.log(a); // Output: 5 (due to function scoping)
// }

//! we use let because it van not redeclared and reinitialized
let d = 5;  
// let d = 10; // This will cause an error: SyntaxError: Identifier 'd' has already been declared
d = 10; // This is allowed, we can reassign the value of d
console.log(d); // Output: 10 


//! now we learn about const
//? const is used to declare variables that cannot be reassigned after they are initialized.
const e = 5;
// e = 10; // This will cause an error: TypeError: Assignment to constant variable.
console.log(e); // Output: 5



//! now talk about the scope of variables
//! global,block,function
//? gobal scope: variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.

let globalVariable = "I am a global variable";
function accessGlobalVariable() {
    console.log(globalVariable); // Output: I am a global variable
}
accessGlobalVariable(); // Calling the function to access the global variable
// globalVariable can also be accessed outside the function
console.log(globalVariable); // Output: I am a global variable




//? block scope: variables declared with let or const inside a block (e.g., inside an if statement or a loop) are in the block scope and cannot be accessed outside of that block.

// example of block scope
function blockScopeExample() {
    if (true) {
        let blockVariable = "I am a block variable";
        console.log(blockVariable); // Output: I am a block variable
   }
   //?  let blockVariable = "I am a block variable"; // This will cause an error: ReferenceError: blockVariable is not defined
}

//! function scope: variables declared with var inside a function are in the function scope and cannot be accessed outside of that function.
function functionScopeExample() {
    var functionVariable = "I am a function variable";
    console.log(functionVariable); // Output: I am a function variable
}
// functionScopeExample(); // Calling the function to access the function variable
//? var functionVariable = "I am a function variable"; // This will cause an error: ReferenceError: functionVariable is not defined

//! now we learn about reassignment and redeclaration of variables
//? reassignment: changing the value of a variable after it has been declared. This is allowed for variables declared with var and let, but not for variables declared with const.
//! reassignment let
let f = 5;
f = 10;
//! reassignment var
var g = 5;
//! ressignment const
g = 10;
//! reassignment const
const h = 5;
// h = 10; // This will cause an error: TypeError: Assignment to constant variable.

//? redeclaration: declaring a variable with the same name more than once. This is allowed for variables declared with var, but not for variables declared with let and const.
//! redeclaration var
var i = 5;  
var i = 10; // This is allowed for var
console.log(i); // Output: 10   
//! redeclaration let
let j = 5;
// let j = 10; // This will cause an error: SyntaxError: Identifier 'j' has already been declared
//! redeclaration const
const k = 5;
// const k = 10; // This will cause an error: SyntaxError: Identifier 'k' has already been declared


//! temporald dead zone: the period of time during which a variable is not accessible until it is declared. This applies to variables declared with let and const, but not to variables declared with var.
//? example of temporal dead zone
console.log(z);
let z = 5; // This will cause an error: ReferenceError: Cannot access 'z' before initialization


//! hoisting: the behavior of moving variable declarations to the top of their scope. This applies to variables declared with var, but not to variables declared with let and const.

console.log(a); // Output: undefined (due to hoisting)
let a =5;

console.log(b); // This will cause an error: ReferenceError: Cannot access 'b' before initialization


console.log(j);// This will cause an error: ReferenceError: Cannot access 'j' before initialization
var j=5;

console.log("Abdul Saboor");
