//! now we learn about if else conditional statements

let a = 10;
let b = 20;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than a");
}


//! else if statements
let c = 30;
let d = 20;

if (c > d) {
    console.log("c is greater than d");
} else if (d > c) {
    console.log("d is greater than c");
} else {
    console.log("c and d are equal");
}


//! nested if else statements
let e = 10;
let f = 20;
let g = 30;

if (e > f) {
    console.log("e is greater than f");
} else if (f > g) {
    console.log("f is greater than g");
} else {
    console.log("g is greater than f");
}


//! switch statement
let h = 10;
let i = 20;
let j = 30;

switch (h) {
    case 10:
        console.log("h is 10");
        break;
    case 20:
        console.log("h is 20");
        break;
    case 30:
        console.log("h is 30");
        break;
    default:
        console.log("h is not 10, 20, or 30");
}



//! make if else for grading system
let score =85;

function gradingSystem(score){
 if(score >= 90 && score <= 100){
    return a;
 }   
 else if(score >= 80 && score <= 89){
    return b;
 }   
 else if(score >= 70 && score <= 79){
    return c;
 }   
 else if(score >= 60 && score <= 69){
    return d;
 }   
 else if(score >= 50 && score <= 59){
    return f;
 }   
}

console.log(gradingSystem(score));
