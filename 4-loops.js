// ===================== BASIC FOR LOOPS =====================

// 1. Print 1 to 10
for (let i = 1; i <= 10; i++) console.log(i);

// 2. Print 10 to 1
for (let i = 10; i >= 1; i--) console.log(i);

// 3. Even numbers 1–20
for (let i = 1; i <= 20; i++) if (i % 2 === 0) console.log(i);

// 4. Odd numbers 1–20
for (let i = 1; i <= 20; i++) if (i % 2 !== 0) console.log(i);

// 5. Sum 1–10
let sum = 0;
for (let i = 1; i <= 10; i++) sum += i;
console.log(sum);

// 6. Factorial of 5
let fact = 1;
for (let i = 1; i <= 5; i++) fact *= i;
console.log(fact);

// 7. Multiplication table of 5
for (let i = 1; i <= 10; i++) console.log(`5 x ${i} = ${5*i}`);

// 8. Reverse string
let str = "hello", rev = "";
for (let i = str.length - 1; i >= 0; i--) rev += str[i];
console.log(rev);

// 9. Count digits
let num = 12345, count = 0;
for (; num > 0; num = Math.floor(num/10)) count++;
console.log(count);

// 10. Sum of digits
num = 1234; sum = 0;
for (; num > 0; num = Math.floor(num/10)) sum += num % 10;
console.log(sum);

// ===================== WHILE LOOPS =====================

// 11. Print 1–10
let i = 1;
while (i <= 10) console.log(i++);

// 12. Reverse number
num = 1234; let revNum = 0;
while (num > 0) {
  revNum = revNum * 10 + num % 10;
  num = Math.floor(num / 10);
}
console.log(revNum);

// 13. Check palindrome number
num = 121; let temp = num, r = 0;
while (temp > 0) {
  r = r * 10 + temp % 10;
  temp = Math.floor(temp / 10);
}
console.log(r === num);

// 14. Find largest digit
num = 9274; let max = 0;
while (num > 0) {
  max = Math.max(max, num % 10);
  num = Math.floor(num / 10);
}
console.log(max);

// 15. Fibonacci (10 terms)
let a = 0, b = 1, c, n = 10;
i = 1;
while (i <= n) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
  i++;
}

// ===================== DO WHILE =====================

// 16. Print 1–5
i = 1;
do {
  console.log(i++);
} while (i <= 5);

// 17. Sum until user number (fixed)
num = 5; sum = 0; i = 1;
do {
  sum += i++;
} while (i <= num);
console.log(sum);

// ===================== ARRAY LOOPS =====================

// 18. Sum array
let arr = [1,2,3,4];
sum = 0;
for (let i = 0; i < arr.length; i++) sum += arr[i];
console.log(sum);

// 19. Max in array
let maxVal = arr[0];
for (let i = 1; i < arr.length; i++)
  if (arr[i] > maxVal) maxVal = arr[i];
console.log(maxVal);

// 20. Reverse array
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) reversed.push(arr[i]);
console.log(reversed);

// ===================== PATTERN QUESTIONS =====================

// 21. *
//    **
//    ***
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) row += "*";
  console.log(row);
}

// 22. Number pattern
// 1
// 12
// 123
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) row += j;
  console.log(row);
}

// ===================== LOGICAL =====================

// 23. Prime check
num = 7; let isPrime = true;
for (let i = 2; i < num; i++)
  if (num % i === 0) isPrime = false;
console.log(isPrime);

// 24. Count vowels
str = "hello"; let vowels = 0;
for (let ch of str)
  if ("aeiou".includes(ch)) vowels++;
console.log(vowels);

// 25. Armstrong number (153)
num = 153; temp = num; sum = 0;
while (temp > 0) {
  let d = temp % 10;
  sum += d*d*d;
  temp = Math.floor(temp/10);
}
console.log(sum === num);

// ===================== MIXED (CONTINUE TO 100 STYLE) =====================

// 26. Square numbers 1–10
for (let i = 1; i <= 10; i++) console.log(i*i);

// 27. Cube numbers
for (let i = 1; i <= 5; i++) console.log(i*i*i);

// 28. Skip multiples of 3
for (let i = 1; i <= 10; i++) if (i % 3 !== 0) console.log(i);

// 29. Break example
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// 30. Continue example
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// 31–100 (compact repetitive patterns)

// Print numbers 1–20
for (let i = 1; i <= 20; i++) console.log(i);

// Print even numbers
for (let i = 2; i <= 20; i+=2) console.log(i);

// Countdown
for (let i = 20; i >= 1; i--) console.log(i);

// Sum even numbers
sum = 0;
for (let i = 2; i <= 20; i+=2) sum += i;
console.log(sum);

// Count multiples of 5
let count5 = 0;
for (let i = 1; i <= 100; i++) if (i % 5 === 0) count5++;
console.log(count5);

// Generate random loop tasks
for (let i = 1; i <= 10; i++) console.log(Math.random());

// Nested loop multiplication grid
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) console.log(i*j);
}

// Star square
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) row += "*";
  console.log(row);
}

// Number reverse loop
num = 9876; rev = 0;
while (num > 0) {
  rev = rev * 10 + num % 10;
  num = Math.floor(num/10);
}
console.log(rev);

// Do while always runs once
i = 10;
do {
  console.log("Runs once");
} while (i < 5);


// ===================== 41–100 =====================

// 41. Print multiples of 7 up to 100
for (let i = 1; i <= 100; i++) if (i % 7 === 0) console.log(i);

// 42. Sum of odd numbers 1–50
let sumOdd = 0;
for (let i = 1; i <= 50; i += 2) sumOdd += i;
console.log(sumOdd);

// 43. Product of numbers 1–5
let prod = 1;
for (let i = 1; i <= 5; i++) prod *= i;
console.log(prod);

// 44. Count digits in number (while)
let num1 = 987654, cnt = 0;
while (num1 > 0) { cnt++; num1 = Math.floor(num1/10); }
console.log(cnt);

// 45. Sum of squares 1–10
let sumSq = 0;
for (let i = 1; i <= 10; i++) sumSq += i*i;
console.log(sumSq);

// 46. Print ASCII of A–Z
for (let i = 65; i <= 90; i++) console.log(String.fromCharCode(i), i);

// 47. Check perfect number (6)
let n1 = 6, s1 = 0;
for (let i = 1; i < n1; i++) if (n1 % i === 0) s1 += i;
console.log(s1 === n1);

// 48. Swap two numbers
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y);

// 49. Print factors of 20
for (let i = 1; i <= 20; i++) if (20 % i === 0) console.log(i);

// 50. Count vowels (case insensitive)
let str1 = "Hello World", v = 0;
for (let ch of str1.toLowerCase()) if ("aeiou".includes(ch)) v++;
console.log(v);

// 51. Find min in array
let arr1 = [5,2,9,1];
let min = arr1[0];
for (let i = 1; i < arr1.length; i++) if (arr1[i] < min) min = arr1[i];
console.log(min);

// 52. Sum of array using while
let i1 = 0, s2 = 0;
while (i1 < arr1.length) s2 += arr1[i1++];
console.log(s2);

// 53. Count elements > 5
let c5 = 0;
for (let n of arr1) if (n > 5) c5++;
console.log(c5);

// 54. Print reverse array (while)
let i2 = arr1.length - 1;
while (i2 >= 0) console.log(arr1[i2--]);

// 55. Check palindrome string
let s = "madam", revs = "";
for (let i = s.length-1; i>=0; i--) revs += s[i];
console.log(s === revs);

// 56. Print first 10 natural numbers using do-while
let d = 1;
do { console.log(d++); } while (d <= 10);

// 57. Sum until number divisible by 7
let t = 1, s3 = 0;
while (true) {
  if (t % 7 === 0) break;
  s3 += t++;
}
console.log(s3);

// 58. Print digits of number
let num2 = 4567;
while (num2 > 0) {
  console.log(num2 % 10);
  num2 = Math.floor(num2/10);
}

// 59. Count even digits
let num3 = 246813, ce = 0;
while (num3 > 0) {
  if ((num3 % 10) % 2 === 0) ce++;
  num3 = Math.floor(num3/10);
}
console.log(ce);

// 60. Sum of cubes of digits
let num4 = 123, sc = 0;
while (num4 > 0) {
  let d = num4 % 10;
  sc += d*d*d;
  num4 = Math.floor(num4/10);
}
console.log(sc);

// 61. Print table 1–5
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) console.log(`${i}x${j}=${i*j}`);
}

// 62. Count primes 1–50
let pc = 0;
for (let n = 2; n <= 50; n++) {
  let prime = true;
  for (let i = 2; i < n; i++) if (n % i === 0) prime = false;
  if (prime) pc++;
}
console.log(pc);

// 63. Print primes 1–50
for (let n = 2; n <= 50; n++) {
  let p = true;
  for (let i = 2; i < n; i++) if (n % i === 0) p = false;
  if (p) console.log(n);
}

// 64. GCD of two numbers
let a1 = 12, b1 = 18;
while (b1 !== 0) {
  let temp = b1;
  b1 = a1 % b1;
  a1 = temp;
}
console.log(a1);

// 65. LCM of two numbers
let a2 = 12, b2 = 18;
let lcm = (a2*b2)/6;
console.log(lcm);

// 66. Print pattern square numbers
for (let i = 1; i <= 5; i++) console.log(i*i);

// 67. Print alternating 0/1
for (let i = 1; i <= 10; i++) console.log(i % 2);

// 68. Count digits > 5
let num5 = 56789, cd = 0;
while (num5 > 0) {
  if (num5 % 10 > 5) cd++;
  num5 = Math.floor(num5/10);
}
console.log(cd);

// 69. Reverse words
let words = "hello world".split(" ");
let revw = [];
for (let i = words.length-1; i>=0; i--) revw.push(words[i]);
console.log(revw.join(" "));

// 70. Find duplicates in array
let arr2 = [1,2,2,3];
for (let i = 0; i < arr2.length; i++) {
  for (let j = i+1; j < arr2.length; j++) {
    if (arr2[i] === arr2[j]) console.log(arr2[i]);
  }
}

// 71. Remove duplicates
let unique = [];
for (let n of arr2) if (!unique.includes(n)) unique.push(n);
console.log(unique);

// 72. Count frequency
let freq = {};
for (let n of arr2) freq[n] = (freq[n]||0)+1;
console.log(freq);

// 73. Find second largest
let arr3 = [1,5,3,9];
arr3.sort((a,b)=>b-a);
console.log(arr3[1]);

// 74. Sum of diagonal matrix
let mat = [[1,2],[3,4]], diag = 0;
for (let i = 0; i < mat.length; i++) diag += mat[i][i];
console.log(diag);

// 75. Flatten array
let nested = [[1,2],[3,4]];
let flat = [];
for (let sub of nested) for (let n of sub) flat.push(n);
console.log(flat);

// 76. Count words
let text = "I love JS";
console.log(text.split(" ").length);

// 77. Capitalize words
let cap = text.split(" ").map(w=>w[0].toUpperCase()+w.slice(1));
console.log(cap.join(" "));

// 78. Print triangle numbers
for (let i = 1; i <= 5; i++) console.log((i*(i+1))/2);

// 79. Check anagram
let s1 = "listen", s2 = "silent";
console.log(s1.split("").sort().join("") === s2.split("").sort().join(""));

// 80. Sum of digits using do-while
let num6 = 456, sd = 0;
do {
  sd += num6 % 10;
  num6 = Math.floor(num6/10);
} while (num6 > 0);
console.log(sd);

// 81. Reverse array in-place
let arr4 = [1,2,3];
arr4.reverse();
console.log(arr4);

// 82. Find index of element
console.log(arr4.indexOf(2));

// 83. Check sorted array
let sorted = true;
for (let i = 1; i < arr4.length; i++)
  if (arr4[i] < arr4[i-1]) sorted = false;
console.log(sorted);

// 84. Merge arrays
console.log([...arr1, ...arr4]);

// 85. Intersection of arrays
console.log(arr1.filter(x => arr4.includes(x)));

// 86. Difference of arrays
console.log(arr1.filter(x => !arr4.includes(x)));

// 87. Rotate array left
let arr5 = [1,2,3,4];
arr5.push(arr5.shift());
console.log(arr5);

// 88. Rotate array right
arr5.unshift(arr5.pop());
console.log(arr5);

// 89. Count uppercase letters
let str2 = "HeLLo";
let cu = 0;
for (let ch of str2) if (ch === ch.toUpperCase()) cu++;
console.log(cu);

// 90. Remove spaces
console.log("a b c".replaceAll(" ",""));

// 91. Sum of two arrays
let aA=[1,2], bA=[3,4];
let res=[];
for(let i=0;i<aA.length;i++) res.push(aA[i]+bA[i]);
console.log(res);

// 92. Print Pascal row 1–5
for (let i = 0; i < 5; i++) {
  let val = 1, row="";
  for (let j = 0; j <= i; j++) {
    row += val+" ";
    val = val*(i-j)/(j+1);
  }
  console.log(row);
}

// 93. Count consonants
let cc=0;
for(let ch of "hello")
 if(!"aeiou".includes(ch)) cc++;
console.log(cc);

// 94. Find missing number (1–5)
let arr6=[1,2,4,5];
for(let i=1;i<=5;i++)
 if(!arr6.includes(i)) console.log(i);

// 95. Check power of 2
let p=8;
console.log((p&(p-1))===0);

// 96. Generate random int 1–10
console.log(Math.floor(Math.random()*10)+1);

// 97. Sum until 100 using while
let s4=0, k=1;
while(s4<100) s4+=k++;
console.log(s4);

// 98. Print char positions
for(let i=0;i<"abc".length;i++)
 console.log(i);

// 99. Nested loop count pairs
let countPairs=0;
for(let i=0;i<3;i++)
 for(let j=0;j<3;j++) countPairs++;
console.log(countPairs);

// 100. Infinite loop break demo
let z=0;
while(true){
 if(z===3) break;
 console.log(z++);
}