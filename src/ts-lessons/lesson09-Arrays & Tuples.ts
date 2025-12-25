/**
 * ====================================================================
 * LESSON 09 — Arrays & Tuples in TypeScript
 * Focus: TypeScript for Playwright Automation
 * ====================================================================
 *
 * Arrays and Tuples are core data structures used to store multiple values.
 * TypeScript adds strong typing on top of JavaScript arrays, making
 * automation code safer, clearer, and interview-ready.
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) Arrays in TypeScript (typed, union, readonly)
 * 2) Common array operations (access, loop, push/pop)
 * 3) Important array methods (map, filter, reduce, find)
 * 4) Multi-dimensional arrays
 * 5) Arrays in Playwright automation (real use cases)
 * 6) Tuples in TypeScript
 * 7) Tuple vs Array (key differences)
 * 8) Tuples in Playwright automation
 * 9) Spread operator with arrays
 * 10) Functions using arrays (input/output)
 * 11) Senior best practices + interview questions
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS
 * ====================================================================
 *
 * Array:
 * - Stores multiple values
 * - Usually same type
 * - Dynamic length
 *
 * Tuple:
 * - Fixed-length array
 * - Fixed type order
 * - Used for structured data
 *
 * Why important in automation?
 * - Data-driven tests
 * - Iterating locators
 * - API response handling
 * - Configuration handling
 */

/**
 * ====================================================================
 * 1) ARRAYS IN TYPESCRIPT
 * ====================================================================
 */

// Recommended syntax
let numbers: number[] = [1, 2, 3, 4];

// Generic syntax (less common)
let names: Array<string> = ["John", "Mike", "Anna"];

// Union types (mixed values)
let mixedData: (number | string)[] = [1, "two", 3, "four"];

// Readonly arrays (config-style)
let roles: readonly string[] = ["admin", "user"];
// roles.push("guest"); // ❌ compile-time error

/**
 * ====================================================================
 * 2) COMMON ARRAY OPERATIONS
 * ====================================================================
 */

let fruits: string[] = ["apple", "banana", "orange"];

// Access & modify
console.log(fruits[0]); // apple
fruits[1] = "mango";

// Length
console.log(fruits.length);

// Push / Pop
fruits.push("grape");
fruits.pop();

// Iteration
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Preferred
for (const fruit of fruits) {
  console.log(fruit);
}

/**
 * ====================================================================
 * 3) IMPORTANT ARRAY METHODS (VERY COMMON)
 * ====================================================================
 */

// map → transform
let prices: number[] = [100, 200, 300];
let discounted = prices.map(p => p * 0.9);

// filter → select
let evenNumbers = [1, 2, 3, 4, 5].filter(n => n % 2 === 0);

// reduce → aggregate
let total = [10, 20, 30].reduce((sum, val) => sum + val, 0);

// find → first match
let foundFruit = fruits.find(f => f === "apple");

/**
 * ====================================================================
 * 4) MULTI-DIMENSIONAL ARRAYS
 * ====================================================================
 */

let matrix: number[][] = [
  [1, 2],
  [3, 4]
];

console.log(matrix[1][0]); // 3

/**
 * ====================================================================
 * 5) ARRAYS IN PLAYWRIGHT (REAL USE CASES)
 * ====================================================================
 */

// 5.1 Loop through elements
async function logItems(page: any): Promise<void> {
  const items = page.locator(".item");
  const count = await items.count();

  for (let i = 0; i < count; i++) {
    console.log(await items.nth(i).innerText());
  }
}

// 5.2 Data-driven testing
const credentials: string[][] = [
  ["admin", "admin123"],
  ["user", "user123"]
];

/**
 * playwright-examples/lesson09-arrays-tuples.spec.ts
 *
 * for (const [username, password] of credentials) {
 *   await page.fill("#username", username);
 *   await page.fill("#password", password);
 *   await page.click("#loginBtn");
 * }
 */

/**
 * ====================================================================
 * 6) TUPLES IN TYPESCRIPT
 * ====================================================================
 */

// Fixed-length, fixed-order
let employee: [number, string] = [101, "John"];

let userInfo: [number, string, boolean] = [1, "Admin", true];

// Readonly tuple
let config: readonly [string, number] = ["timeout", 3000];
// config[1] = 5000; // ❌ error

/**
 * ====================================================================
 * 7) ARRAY vs TUPLE (KEY DIFFERENCE)
 * ====================================================================
 *
 * Array:
 * ✔ Same type
 * ✔ Dynamic length
 *
 * Tuple:
 * ✔ Fixed length
 * ✔ Fixed type order
 */

/**
 * ====================================================================
 * 8) TUPLES IN PLAYWRIGHT (REAL USE CASES)
 * ====================================================================
 */

// API response mapping
let apiResult: [number, string] = [200, "Success"];

// Structured test data
let loginData: [string, string] = ["admin", "admin123"];

/**
 * ====================================================================
 * 9) SPREAD OPERATOR WITH ARRAYS
 * ====================================================================
 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

let combined = [...arr1, ...arr2]; // [1,2,3,4,5]

/**
 * ====================================================================
 * 10) FUNCTIONS USING ARRAYS
 * ====================================================================
 */

// Array as parameter
function search(ele: number, arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) return true;
  }
  return false;
}

let nums: number[] = [10, 20, 30, 40, 50];
console.log(search(30, nums));   // true
console.log(search(100, nums));  // false

// Array as return type
function capitalizeWords(arr: string[]): string[] {
  let result: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i].toUpperCase();
  }
  return result;
}

let words: string[] = ["hello", "typescript", "playwright"];
console.log(capitalizeWords(words));

/**
 * ====================================================================
 * 11) SENIOR DEVELOPER BEST PRACTICES
 * ====================================================================
 *
 * ✔ Prefer type[] syntax
 * ✔ Avoid any[]
 * ✔ Use for-of for iteration
 * ✔ Use tuples for fixed structured data
 * ✔ Use readonly arrays for configs
 * ✔ Prefer map/filter/reduce over loops
 * ✔ Arrays are the backbone of data-driven Playwright tests
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 09
 * ====================================================================
 *
 * 1) Difference between array and tuple?
 * 2) How do you declare a typed array in TS?
 * 3) What is a readonly array?
 * 4) Explain map, filter, reduce.
 * 5) When would you use a tuple instead of an array?
 * 6) How are arrays used in Playwright automation?
 * 7) What happens if tuple order is changed?
 */

/**
 * ====================================================================
 * LESSON 09 REVIEW & SUMMARY 
 * ====================================================================
 *
 * ✅ Arrays → dynamic collections, data-driven tests
 * ✅ Tuples → fixed, structured data
 * ✅ Type safety prevents many runtime bugs
 */
