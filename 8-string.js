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
let str8 = "I love js and i like to work in js and js is very important to learn";

let results = str8.matchAll(/Js/gi);

for (let item of results) {
    console.log(item);
}



