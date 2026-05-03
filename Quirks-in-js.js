// ===== TYPE SYSTEM QUIRKS =====
typeof NaN === "number"          // NaN is still a number type (special numeric value)
typeof null === "object"         // historical bug in JS (null is not really an object)
typeof [] === "object"           // arrays are objects internally
Array.isArray([])                // correct way to check for arrays

// ===== NaN WEIRDNESS =====
NaN === NaN                      // false (NaN is not equal to itself)
Number.isNaN(NaN)                // true (correct way to check NaN)

// ===== EQUALITY (== vs ===) =====
[] == false                      // true (empty array → "" → 0 → false)
[] == ![]                        // true (![] = false → same coercion)
"" == 0                          // true (empty string converts to 0)
"0" == 0                         // true (string "0" → number 0)
null == undefined                // true (special loose equality rule)
null === undefined               // false (strict comparison, different types)

// ===== TRUTHY / FALSY =====
Boolean([])                      // true (arrays are truthy)
Boolean({})                      // true (objects are truthy)
Boolean("false")                 // true (non-empty string is truthy)
Boolean(0)                       // false (0 is falsy)

// ===== FLOATING POINT ISSUE =====
0.1 + 0.2 === 0.3                // false (precision error in floating point)
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON // true (correct comparison)

// ===== OBJECT REFERENCES =====
{} === {}                        // false (different memory references)
let a = {}; let b = a;
a === b                          // true (same reference)

// ===== ARRAY WEIRDNESS =====
[1,2] + [3,4]                    // "1,23,4" (arrays converted to strings)
[] + {}                          // "[object Object]" (string coercion)
{} + []                          // 0 (interpreted as block + unary +)

// ===== TYPE COERCION =====
"5" - 2                          // 3 (string converted to number)
"5" + 2                          // "52" (+ triggers string concatenation)
true + true                      // 2 (true → 1, so 1+1)
false + 1                        // 1 (false → 0)

// ===== THIS KEYWORD =====
const obj = {
  name: "Saboor",
  normal: function() { return this.name }, // 'this' refers to object
  arrow: () => this.name                  // arrow inherits 'this' from outer scope (not obj)
};
obj.normal()                  // "Saboor"
obj.arrow()                   // undefined (or global value)

// ===== HOISTING =====
console.log(x)                // undefined (var is hoisted, initialized as undefined)
var x = 5;

console.log(y)                // ReferenceError (let is hoisted but in TDZ)
let y = 10;

// ===== DELETE OPERATOR =====
let obj2 = { a: 1 };
delete obj2.a                 // true (property deleted)
let z = 10;
delete z                      // false (cannot delete variables)

// ===== PARSE INT QUIRK =====
parseInt("10px")              // 10 (stops parsing at non-number)
parseInt("px10")              // NaN (invalid start)

// ===== EMPTY ARRAY COMPARISON =====
[] == ""                      // true (array → "" → equal)
[] == 0                       // true ("" → 0)
[] === ""                     // false (different types)

// ===== MAP PARSEINT BUG =====
["1","2","3"].map(parseInt)   // [1, NaN, NaN] (index passed as radix)

// ===== + OPERATOR STRANGE CASE =====
+true                         // 1 (unary plus converts to number)
+""                           // 0 (empty string → 0)
+"5"                          // 5 (string converted to number)

// ===== NULL VS OBJECT ACCESS =====
null + 1                      // 1 (null → 0)
undefined + 1                 // NaN (undefined → NaN)

// ===== OPTIONAL CHAINING =====
let obj3 = null;
obj3?.name                    // undefined (safe access, no crash)

// ===== DEFAULT PARAMETERS =====
function test(a = 5) { return a }
test(undefined)               // 5 (default used)
test(null)                    // null (null is considered a value)

// ===== SET TIMEOUT QUIRK =====
setTimeout(() => console.log("A"), 0); // goes to event queue (not immediate)
console.log("B");                     // prints first → "B", then "A"