//! in es2015 the first things introducd was let and const
//? because var was funcation scoped and let is blocked scoped element 

// ===================== VAR vs LET vs CONST (ES2015) =====================

// -------- 1. SCOPE DIFFERENCE --------

// var is function-scoped (NOT block-scoped)
if (true) {
  var x = 10;
}
console.log(x); // ✅ 10 (leaks outside block) ❌ bad practice

// let is block-scoped
if (true) {
  let y = 20;
}
// console.log(y); // ❌ ReferenceError (good: stays inside block)


// -------- 2. REDECLARATION --------

// var allows redeclaration (can cause bugs)
var a = 5;
var a = 10;
console.log(a); // 10 ❌ unsafe

// let does NOT allow redeclaration
let b = 5;
// let b = 10; // ❌ SyntaxError

// const also does NOT allow redeclaration
const c = 15;
// const c = 20; // ❌ SyntaxError


// -------- 3. HOISTING --------

// var is hoisted and initialized with undefined
console.log(m); // undefined ❌ confusing
var m = 100;

// let and const are hoisted BUT in "Temporal Dead Zone"
/// console.log(n); // ❌ ReferenceError (cannot access before declaration)
let n = 200;


// -------- 4. CONST BEHAVIOR --------

// const cannot be reassigned
const PI = 3.14;
// PI = 3.14159; // ❌ Error

// BUT objects/arrays inside const CAN be modified
const obj = { name: "Ali" };
obj.name = "Ahmed"; // ✅ allowed (reference same, content changed)
console.log(obj);


// -------- 5. LOOP DIFFERENCE (IMPORTANT) --------

// var causes issue with closures
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 1000);
}
// Output: 3 3 3 ❌ (same variable shared)

// let fixes it (new scope each iteration)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 1000);
}
// Output: 0 1 2 ✅


// -------- FINAL RULE --------

// Always use const by default
// Use let if value needs to change
// Avoid var completely ❌


//! now we learn about template letral 
let firstName = 'Abdul';
let lastName ='Saboor';
console.log(`My Name is ${firstName} ${lastName}`);

// ===================== TEMPLATE LITERALS =====================

// -------- 1. BASIC STRING --------
const name = "Ali";
console.log(`Hello ${name}`); 
// Output: Hello Ali
// ${} allows inserting variables inside string


// -------- 2. MULTIPLE VARIABLES --------
const a = 5;
const b = 10;
console.log(`Sum of ${a} and ${b} is ${a + b}`);
// Output: Sum of 5 and 10 is 15


// -------- 3. MULTI-LINE STRING --------
const message = `This is line 1
This is line 2
This is line 3`;

console.log(message);
// No need for \n like normal strings


// -------- 4. EXPRESSIONS INSIDE ${} --------
console.log(`Random number: ${Math.random()}`);
// You can run any JS expression inside ${}


// -------- 5. FUNCTION CALL INSIDE TEMPLATE --------
function greet(user) {
  return `Welcome ${user}`;
}
console.log(`${greet("Saboor")}`);
// Output: Welcome Saboor


// -------- 6. CONDITIONAL LOGIC --------
const age = 18;
console.log(`You are ${age >= 18 ? "Adult" : "Minor"}`);
// Output: You are Adult


// -------- 7. HTML TEMPLATE (VERY USEFUL IN WEB DEV) --------
const user = "Saboor";
const html = `
  <div>
    <h1>Hello ${user}</h1>
    <p>This is dynamic content</p>
  </div>
`;

console.log(html);
// Used in frontend (React, DOM rendering, etc)


// -------- 8. OLD WAY vs TEMPLATE --------

// ❌ Old (messy)
console.log("Hello " + name + ", your score is " + a);

// ✅ New (clean)
console.log(`Hello ${name}, your score is ${a}`);


// -------- FINAL IDEA --------
// Template literals = cleaner + readable + powerful strings 🚀


//! now we learn about default parameter
function defaultArgument(a,b=20){
 return a+b;
}
console.log(defaultArgument(2));

// ===================== DEFAULT PARAMETERS =====================

// -------- 1. BASIC DEFAULT VALUE --------
function greet(name = "Guest") {
  return `Hello ${name}`;
}

console.log(greet("Saboor")); // Hello Saboor
console.log(greet());         // Hello Guest (default used)


// -------- 2. MULTIPLE DEFAULT PARAMETERS --------
function sum(a = 0, b = 0) {
  return a + b;
}

console.log(sum(5, 3)); // 8
console.log(sum(5));    // 5 (b = 0)
console.log(sum());     // 0


// -------- 3. DEFAULT WITH EXPRESSIONS --------
function multiply(a, b = a * 2) {
  return a * b;
}

console.log(multiply(5)); // 5 * (5*2) = 50


// -------- 4. DEFAULT WITH FUNCTION --------
function getValue() {
  return 10;
}

function test(a = getValue()) {
  return a;
}

console.log(test());    // 10 (calls function)
console.log(test(5));   // 5


// -------- 5. PASSING undefined vs null --------
function demo(a = 100) {
  return a;
}

console.log(demo(undefined)); // 100 (default used)
console.log(demo(null));      // null (default NOT used)


// -------- 6. OLD WAY (BEFORE ES6) --------

// ❌ older pattern
function oldSum(a, b) {
  b = b || 0; // fails if b = 0 (because 0 is falsy)
  return a + b;
}

console.log(oldSum(5, 0)); // 5 (wrong ❌)


// -------- 7. MODERN WAY --------

// ✅ correct and safe
function newSum(a, b = 0) {
  return a + b;
}

console.log(newSum(5, 0)); // 5 (correct ✅)


// -------- FINAL IDEA --------
// Default parameters provide fallback values when arguments are missing
// Works only when argument is undefined
// Cleaner and safer than old JS patterns

//! fat arraow funcation in js 
//? fat arrow function was replacment of anonymous function
let sum0 =(a,b) =>{
    return a + b;
}

let calculator = (a,b,op)  =>{
     if(op =='+'){
        console.log(a+b);
    }
    else if( op == '-'){
        console.log(a-b);
        
    }

};


let str = "Abdul Saboor";
for(let i = 12;i >=0; i--){
    console.log(str[i]);
}

//? write a function  to check is it palindrome or not 
const palindrome = (str) =>{
  let str2 
    for(let i = str.length; i >=0;  i--){
      str2 += str[i];
  }
  if(str2 == str){
      console.log("true");
  }
  else{
    console.log("false");
    
  }
}
