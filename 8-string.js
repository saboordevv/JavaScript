//! now we will learn about string 
//?A string in JavaScript is a primitive data type that represents a sequence of characters, where the characters are enclosed within single quotes (' '), double quotes (" "), or backticks (` `).

//! lenght property of string
// let str ="hello world";
// console.log(str.length);
//? it also count the spaces

//! Escape is string
//? An escape sequence is a combination of a backslash (\) followed by a character, used to represent special characters or control formatting within a string
// 1. \"  → Double quote
// let a = "He said \"Hello\"";
// console.log(a); 
// // He said "Hello"

// // 2. \'  → Single quote
// let b = 'It\'s my book';
// console.log(b); 
// // It's my book

// // 3. \\  → Backslash
// let c = "This is a backslash: \\";
// console.log(c); 
// // This is a backslash: \

// // 4. \n  → New line
// let d = "Hello\nWorld";
// console.log(d);
// // Hello
// // World

// // 5. \t  → Tab (space)
// let e = "Hello\tWorld";
// console.log(e);
// // Hello    World

// // 6. \r  → Carriage return (rarely used)
// let f = "Hello\rWorld";
// console.log(f);
// // World   (overwrites "Hello" in many consoles)

// // 7. \b  → Backspace
// let g = "Hello\bWorld";
// console.log(g);
// // HellWorld  (removes 'o')

// // 8. \f  → Form feed (rare, mostly ignored in modern consoles)
// let h = "Hello\fWorld";
// console.log(h);
// // Hello World (may behave like space)

// // 9. \v  → Vertical tab (rare)
// let i = "Hello\vWorld";
// console.log(i);
// // Hello World (spacing effect)

// // 10. \0  → Null character
// let j = "Hello\0World";
// console.log(j);
// // HelloWorld (null is invisible)

// // 11. \uXXXX → Unicode character
// let k = "Heart: \u2764";
// console.log(k);
// // Heart: ❤

// // 12. \xXX → Hexadecimal character
// let l = "Letter A: \x41";
// console.log(l);
// // Letter A: A


//! string search method
//?The indexOf() method returns the index (position) of the first occurrence of a specified substring within a string. If the substring is not found, it returns -1.

//? index of is case sensitive method of string 
// let str3 ="Abdul Saboor";
// console.log(str3.indexOf('saboor'));// return -1 because Saboor is capital and we are finding the smaill value 


// let str1 = "Amina";
// console.log(str1.indexOf("n"));

// let str2 = "my name is Javascript";
// console.log(str2.indexOf('name'));

//! last indexof method in js
// let str5 = "Iam a js developer and i love to do code in js";
// console.log(str5.lastIndexOf('js'));//it will find value from last 



//! to change string in array we use array.form method
// let str4 ="Abdul Saboor";
// let str4Arr = Array.from(str4);
// // console.log(str4Arr);

// let strMap = str4Arr.map((curEle,index) =>
// ` ${curEle} - ${index}`);
// console.log(strMap );

//! search method
//? The search() method returns the index of the first match of a string against a regular expression (or substring). If no match is found, it returns -1.

//!| Feature          | `search()`     | `indexOf()` |
// | ---------------- | -------------- | ----------- |
// | Supports regex   | ✔️ Yes         | ❌ No        |
// | Start position   | ❌ No           | ✔️ Yes      |
// | Case-insensitive | ✔️ (via regex) | ❌           |

// let str6 = "My name is abdul saboor";
// console.log(str6.search(/Abdul Saboor/i));


//! Match function
//?match() searches a string for a specified pattern and returns the matched results.
// let str7 = "I love js and i like to work in js and js is very important to learn";
// console.log(str7.match("js"));

//! matchall
//?matchAll() returns all matches with complete details including capturing groups and indexes.
// let str8 = "I love js and i like to work in js and js is very important to learn";

// let results = str8.matchAll(/Js/gi);

// for (let item of results) {
//     console.log(item);
// }

//! Includes 
//? includes() checks whether a string contains a specific substring and returns true or false.
// let str9 = "I love js and i like to work in js and js is very important to learn";
// let results = str9.includes('js');
// console.log(results);


// let text = "I love JavaScript";
// console.log(text.includes("Java"));
// The method includes("Java") checks whether the substring "Java" exists inside the string.
// "JavaScript" contains "Java" at the beginning.

//!startsWith() checks whether a string begins with a specified substring and returns true or false.
// let text = "I love JavaScript";
// console.log(text.startsWith("I"));
// console.log(text.startsWith("love"));

//!endsWith() checks whether a string ends with a specified substring and returns true or false.
// let text = "I love JavaScript";
// console.log(text.endsWith("Script"));

//!Extracting string
//?extracting part of a string means getting a substring from a larger string. There are a few core methods, and each behaves slightly differently
//?slice() is a string method used to extract a portion of a string and return it as a new string, without changing the original string.

// let str = "JavaScript";
// let result = str.slice(0, 4);
// console.log(result);

// Now we learn about extracting characters in js
//method charat
// let str10 = "my name is saboor";
// console.log(str10.charAt(6));

// es2022 we will use at() method
//at() returns the character at a given index in a string. It supports both positive and negative indexing, which makes it more flexible than traditional methods.and it also work on negative value
// let str11 = "Abdul Saboor";
// console.log(str11.at(1));
// console.log(str11.at(-11));

//The replace() method in JavaScript strings is used to search for a value and replace it with another value, returning a new string (it does not modify the original string).
// let str11 = "hello world";
// console.log(str11.replace("hello","saboor"));

//replaceAll() returns a new string where every match of a specified value is replaced with another value.
//
// let str = "Hello World Hello";
// let result = str.replaceAll("Hello", "Hi");
// console.log(result);
// // "Hi World Hi"

//todo : upperxase and lower case methods in js

// let str11="Abdul Saboor";
// console.log(str11.toUpperCase());
// console.log(str11.toLowerCase());


//todo trim method remove all extra spaces from both ends of a string

// let str11 = "  hello world     ";
// console.log(str11.length);
// console.log(str11);
// let str11trim = str11.trim();
// console.log(str11trim);
// console.log(str11trim.length);

// todo split method is use to make string in array
// let str11 = "Mango , Banana , Orange";
// console.log(str11);
// let strArr = str11.split(",");
// console.log(strArr);


//todo interview question
// write funcation print the a to z

// let str1="hello world";
// for (let Alpha = 65; Alpha <= 90; Alpha++) {
//     console.log(String.fromCharCode(Alpha));
// }

//todo write a funcation to check is all vowels are present in string or not

// const checkVowels = (str) =>{
//     const vowels = "aeiuo"
//     for (const strElement of vowels) {
//         console.log(str.includes(strElement));
//     }
// }
//  checkVowels("hello saboor you are so intresting");


//todo notes for string
//* =========================================
//* JavaScript String Notes (Complete)
//* =========================================

//* =========================================
//* 1. Basic Strings
//* =========================================

let str1 = "Hello";
let str2 = 'Hello';

console.log(str1, str2);

//* =========================================
//* 2. String Property
//* =========================================

// length → total characters including spaces
let str = "Hello World";
console.log(str.length); // 11

//* =========================================
//* 3. Escape Characters
//* =========================================

let escapeStr = "He said \"Hello\" and used \\ backslash";
console.log(escapeStr);

//* =========================================
//* 4. String Search Methods
//* =========================================

// indexOf() → first occurrence
let text = "Hello JavaScript";
console.log(text.indexOf("JavaScript")); // 6

// lastIndexOf() → last occurrence
let text2 = "JS JS JS";
console.log(text2.lastIndexOf("JS")); // 6

// search() → supports RegEx
let text3 = "Hello JavaScript";
console.log(text3.search(/javascript/i)); // 6

// match() → returns array
let text4 = "JS JS JS";
console.log(text4.match(/JS/g)); // ["JS","JS","JS"]

// matchAll() → iterator
let text5 = "JS JS";
let matches = text5.matchAll(/JS/g);
for (let m of matches) {
    console.log(m[0]);
}

// includes() → true/false
let text6 = "Hello";
console.log(text6.includes("H")); // true

// startsWith()
console.log(text6.startsWith("He")); // true

// endsWith()
console.log(text6.endsWith("lo")); // true

//* =========================================
//* 5. Extracting String Parts
//* =========================================

// slice()
let text7 = "JavaScript";
console.log(text7.slice(0, 4)); // Java
console.log(text7.slice(-6));   // Script

// substring()
let text8 = "JavaScript";
console.log(text8.substring(0, 4)); // Java
console.log(text8.substring(-5));   // treated as 0

// substr() ❌ deprecated

//* =========================================
//* 6. Extracting Characters
//* =========================================

// charAt()
let text9 = "Hello";
console.log(text9.charAt(1)); // e

// charCodeAt()
console.log("A".charCodeAt(0)); // 65

// at() → supports negative index
console.log(text9.at(-1)); // o

//* =========================================
//* 7. Replacing Content
//* =========================================

// replace() → first match
let text10 = "Hello World";
console.log(text10.replace("World", "JS"));

// replace() with regex
let text11 = "World World";
console.log(text11.replace(/world/gi, "JS"));

// replaceAll()
let text12 = "JS JS JS";
console.log(text12.replaceAll("JS", "JavaScript"));

//* =========================================
//* 8. Other Useful Methods
//* =========================================

// toUpperCase()
console.log("js".toUpperCase());

// toLowerCase()
console.log("JS".toLowerCase());

// trim()
let text13 = "   Hello   ";
console.log(text13.trim());

// split()
let text14 = "a,b,c";
console.log(text14.split(","));

// join()
let arr = ["a", "b", "c"];
console.log(arr.join(","));

//* =========================================
//* 9. Extra Methods Used
//* =========================================

// Array.from()
console.log(Array.from("abc"));

// map()
let mapped = ["a", "b"].map((c, i) => c + i);
console.log(mapped);

// filter()
let filtered = [1, 2, 3].filter(n => n > 1);
console.log(filtered);

// Set → unique values
let unique = new Set([1, 1, 2, 3]);
console.log(unique);

//* =========================================
//* 10. Interview Programs
//* =========================================

// Print a–z
for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
}

// Count vowels
const countVowels = (str) => {
    let count = 0;
    for (let ch of str) {
        if ("aeiou".includes(ch)) count++;
    }
    return count;
};
console.log(countVowels("hello world"));

// Check all vowels present
const checkAllVowel = (str) => {
    for (let v of "aeiou") {
        if (!str.includes(v)) return false;
    }
    return true;
};
console.log(checkAllVowel("aeioubcdf"));

//* =========================================
//* 11. Pangram Checker
//* =========================================

const pangramChecker = (str) => {
    let inputArr = str.toLowerCase().split("");

    const values = inputArr.filter(
        (char) =>
            char.charCodeAt() >= "a".charCodeAt() &&
            char.charCodeAt() <= "z".charCodeAt()
    );

    return new Set(values).size === 26;
};

console.log(
    pangramChecker("The quick brown fox jumps over the lazy dog")
);

//* =========================================
//* END OF NOTES
//* =========================================





