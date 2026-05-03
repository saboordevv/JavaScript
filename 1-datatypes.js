//!Datatypes in js 

const { useId } = require("react");

//? primitives datatypes
let name = "John"; // string
let age = 30; // number
let price = 199966677377828198981090930909289811n;// bigInt
let isStudent = true; // boolean
let nullValue = null; // null
let undefinedValue; // undefined
let symbolValue = Symbol("symbol"); // symbol

//? non-primitive datatypes / reference datatypes
let person = { name: "John", age: 30 }; // object
let numbers = [1, 2, 3, 4, 5]; // array
function greet() {
    console.log("Hello!");
} // function


let a = 10;
let b = a;
a=a+2;
console.log(a); // Output: 12
console.log(b); // Output: 10


let arr=[1,2,3,4,5,6];
let arr2=arr;
console.log(arr2); // Output: [1, 2, 3, 4, 5,6]
arr2.push(7);
console.log(arr); // Output: [1, 2, 3, 4, 5,6,7]
console.log(arr2); // Output: [1, 2, 3, 4, 5,6,7]
//! in this you think that arr2 is a copy of arr but it is not it is a reference to the same array in memory so if we change arr then arr2 will also change



//! how to write string in js
let str="hello world";//double quotes
let str1 = 'hello world';//single quotes
let str2 = `hello world`;//backticks

//! how to write multi line string in js
let multiLineStr = "This is a multi-line string.\nIt can span multiple lines.";
console.log(multiLineStr);



//! This is max value of number in js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991


let bigIntValue = 9007199254740991n; // This is a BigInt literal
console.log(typeof bigIntValue); // Output: bigint


//! how to use symbol in js
let obj={
    id:1,
    name:"John",
    age:30,
}
let newid=Symbol("id");
obj[newid]=2;
console.log(obj); // Output: { id: 1, name: 'John', age: 30, [Symbol(id)]: 2 }


//! we learn about dynamic typing in js