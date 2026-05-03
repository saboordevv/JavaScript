//! Arthemetic Operator
let a = 20;
let b = 10;a
console.log("a + b =", a + b);//Addition
console.log("a - b =", a - b);//Subtraction
console.log("a * b =", a * b);//Multiplication
console.log("a / b =", a / b);//Division
console.log("a % b =", a % b);//Modulus
console.log("a ** b =", a ** b);//Exponentiation


//! if we use + between two numbers it will add them
//! if we use + between a number and a string it will concatenate them
console.log("a + b =", a + b);//Number + Number
console.log("a + b =", a + "hello"); //String + Number
console.log("a + b =", "hello" + b); //Number + String



//! now we will learn about  comparasion operators 
//? The single equal is to store the value in a variable
//? The double equal is to compare the value of two variables
//? The triple equal is to compare the value and the type of two variables



console.log("a == b =", a == b);//Equality
console.log("a != b =", a != b);//Inequality
console.log("a === b =", a === b);//Strict Equality
console.log("a !== b =", a !== b);//Strict Inequality
console.log("a > b =", a > b);//Greater Than
console.log("a < b =", a < b);//Less Than
console.log("a >= b =", a >= b);//Greater Than or Equal To
console.log("a <= b =", a <= b);//Less Than or Equal To

//! now we learn about  Assignment operators 
 //? =
 //? +=
 //? -=
 //? *=
 //? /=
 //? %=
 //? **=

 console.log("a += b =", a += b);//Addition and assignment
 console.log("a -= b =", a -= b);//Subtraction and assignment
 console.log("a *= b =", a *= b);//Multiplication and assignment
 console.log("a /= b =", a /= b);//Division and assignment
 console.log("a %= b =", a %= b);//Modulus and assignment
 console.log("a **= b =", a **= b);//Exponentiation and assignment
 

 //! now we lear about the logical operators
 //? &&
 //? ||
 //? ! 

 console.log("a && b =", a && b);//Logical AND
 console.log("a || b =", a || b);//Logical OR
 console.log("a ! b =", a !== b);//Logical NOT


//! unary operator
let num = "13";
console.log(typeof num);//Type of a
console.log(typeof +num);//Type of a


console.log(typeof a);//Type of a
console.log("++a =", ++a);//Prefix increment
console.log("a++ =", a++);//Postfix increment
console.log("--a =", --a);//Prefix decrement
console.log("a-- =", a--);//Postfix decrement

//! ternary operator
let age =18;
age >= 18 ? console.log("You can drive the car ") : console.log("You can't drive the car");
