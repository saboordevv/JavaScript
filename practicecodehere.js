console.log("Practice code here!");

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