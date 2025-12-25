/**
 * ====================================================================
 * LESSON 04 — Operators in TypeScript
 * ====================================================================
 *
 * Operators are symbols that tell TypeScript/JavaScript to perform:
 *  - calculations
 *  - comparisons
 *  - logical decisions
 *  - assignments
 *  - safe property access (optional chaining)
 *
 * TypeScript adds type checking around operator usage, helping catch
 * many mistakes before runtime (especially in automation code).
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) Arithmetic operators
 * 2) Comparison operators (== vs ===)
 * 3) Logical operators (&&, ||, !)
 * 4) Assignment operators (basic + modern: ||=, &&=, ??=)
 * 5) Unary operators (+, -)
 * 6) Increment operators (pre vs post)
 * 7) Ternary operator
 * 8) Optional chaining (?.) & Nullish coalescing (??)
 * 9) Template literals & string operators
 * 10) Playwright automation use cases
 * 11) Interview questions + common pitfalls
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS
 * ====================================================================
 *
 * Arithmetic:
 * - math operations (+, -, *, /, %, **)
 *
 * Comparison:
 * - checks relationships (>, <, >=, <=) and equality (===, !==)
 * - prefer strict equality to avoid hidden type conversions
 *
 * Logical:
 * - combine conditions (&&, ||) or negate (!)
 * - short-circuit evaluation can skip executing the right side
 *
 * Assignment:
 * - updates variables (=, +=, -= ...)
 * - modern assignments:
 *    ||= sets value if left is falsy
 *    &&= sets value if left is truthy
 *    ??= sets value if left is null/undefined only
 *
 * Optional chaining (?.):
 * - prevents runtime errors when accessing nested properties safely
 *
 * Nullish coalescing (??):
 * - fallback only for null/undefined (not for 0, "", false)
 */

/**
 * ====================================================================
 * 1) Arithmetic Operators
 * ====================================================================
 */

let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

/**
 * IMPORTANT:
 * If one operand is a string, + becomes concatenation.
 */
console.log(10 + "5"); // "105"

/**
 * Safer approach (when you expect numbers):
 */
console.log(10 + Number("5")); // 15

/**
 * ====================================================================
 * 2) Comparison Operators
 * ====================================================================
 *
 * ==  compares value only (performs type coercion)  ❌ avoid
 * === compares value + type (strict)               ✅ prefer
 */

let x = 10;
let y = "10";

console.log(x == y);   // true  (unsafe coercion)
console.log(x === y);  // false (type-safe)

/**
 * ====================================================================
 * 3) Logical Operators
 * ====================================================================
 */

let loggedIn = true;
let isAdmin = false;

console.log(loggedIn && isAdmin); // false
console.log(loggedIn || isAdmin); // true
console.log(!loggedIn);           // false

/**
 * Short-circuit examples:
 */
const leftFalse = false && (() => {
  console.log("will not run");
  return true;
})();

const leftTrue = true || (() => {
  console.log("will not run");
  return false;
})();

console.log(leftFalse, leftTrue);

/**
 * ====================================================================
 * 4) Assignment Operators (Basic + Advanced)
 * ====================================================================
 */

let total = 0;
for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log(total); // 15

let xpath = "//div";
xpath += "[@class='card'][1]";
console.log(xpath);

/**
 * Modern assignment operators (ES2021+):
 * ||= assigns if left is falsy (0, "", false, null, undefined, NaN)
 * ??= assigns if left is null or undefined only
 * &&= assigns if left is truthy
 */

let val = 0;
val ||= 5; // because 0 is falsy -> becomes 5
console.log(val); // 5

let cfg: string | undefined = undefined;
cfg ??= "default"; // only null/undefined triggers
console.log(cfg); // "default"

let token = "abc";
token &&= "refreshed"; // token is truthy -> assigns right side
console.log(token); // "refreshed"

/**
 * Retry mechanism example (simple pattern):
 */
let attempts = 0;
while (attempts++ < 3) {
  console.log(`Attempt ${attempts}`);
}

/**
 * Exponential backoff example:
 */
let delay = 1000;
delay *= 2;
console.log(delay); // 2000

/**
 * ====================================================================
 * 5) Unary Operators (+, -)
 * ====================================================================
 */

console.log(+"25"); // 25  (string -> number)
console.log(-5);    // -5  (negation)

/**
 * ====================================================================
 * 6) Increment Operators — Pre vs Post
 * ====================================================================
 */

let post = 10;
let postResult = post++; // returns old value
console.log(postResult, post); // 10, 11

let pre = 10;
let preResult = ++pre; // increments first
console.log(preResult, pre); // 11, 11

/**
 * BEST PRACTICE:
 * Keep increments on their own line for readability.
 */
// ❌ avoid: x = ++i + i++

/**
 * ====================================================================
 * 7) Ternary Operator
 * ====================================================================
 */

let score = 70;
let status = score >= 60 ? "Pass" : "Fail";
console.log(status);

/**
 * ====================================================================
 * 8) Optional Chaining (?.) & Nullish Coalescing (??)
 * ====================================================================
 */

type Profile = { name: string };
type User = { profile?: Profile };

const user1: User = {};
const safeName = user1.profile?.name ?? "Guest";
console.log(safeName); // "Guest"

/**
 * || vs ?? difference:
 */
const zero = 0;
console.log(zero || 10); // 10  (0 is falsy)
console.log(zero ?? 10); // 0   (0 is not null/undefined)

/**
 * ====================================================================
 * 9) Template Literals & String Operators
 * ====================================================================
 */

let fn = "John";
let ln = "Kenedy";
let greet = `Hello ${fn} ${ln}`;
console.log(greet);

/**
 * Useful for dynamic selectors / URLs / logs in automation.
 */

/**
 * ====================================================================
 * 10) Playwright Automation Use Cases (Project Requirement)
 * ====================================================================
 *
 * You said Playwright usage will be in a separate folder per lesson.
 * So create this file:
 *   playwright-examples/lesson04-operators.spec.ts
 *
 * Below are TypeScript patterns you will use inside that spec:
 */

// Example: safe count with fallback (Playwright locator count returns number)
async function safeCount(getCount: () => Promise<number> | undefined): Promise<number> {
  const count = (await getCount?.()) ?? 0;
  return count;
}

// Example: dynamic locator string building
function nthCardXPath(n: number): string {
  return `//div[@class='card'][${n}]`;
}

console.log(nthCardXPath(1));

/**
 * ====================================================================
 * 11) Interview Questions (Lesson 04)
 * ====================================================================
 *
 * 1) Difference between == and === ?
 * 2) Explain pre-increment vs post-increment.
 * 3) What is short-circuit evaluation?
 * 4) How do ?? and || differ?
 * 5) Why prefer strict equality in TypeScript?
 * 6) How does optional chaining prevent runtime crashes?
 * 7) When would you use ||= or ??= ?
 * 8) Why is number + string dangerous in JS/TS?
 */

/**
 * ====================================================================
 * COMMON PITFALLS (Reviewed)
 * ====================================================================
 *
 * ❌ number + string => string concatenation ("105")
 * ❌ using ++ inside complex expressions
 * ❌ || treats 0 and "" as falsy (might overwrite valid values)
 * ❌ using == instead of ===
 * ❌ accessing nested props without ?. can crash at runtime
 */

/**
 * ====================================================================
 * LESSON 04 SUMMARY
 * ====================================================================
 *
 * ✔ Operators power conditions, calculations, and automation logic
 * ✔ Prefer === / !== to avoid coercion
 * ✔ Understand short-circuiting for safer conditions
 * ✔ Use ?. and ?? to prevent runtime crashes in tests

 */
