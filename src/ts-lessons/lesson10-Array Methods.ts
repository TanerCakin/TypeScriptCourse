/**
 * ====================================================================
 * LESSON 10 — Array Methods in TypeScript
 * ====================================================================
 *
 * Array methods are used everywhere in automation:
 *  ✔ iterating UI elements
 *  ✔ transforming API responses
 *  ✔ filtering test data
 *  ✔ assertions and validations
 *
 * This lesson organizes array methods from
 * exactly how interviewers expect you to explain them.
 */

export {}; // keeps file scoped (recommended in IntelliJ / TS projects)

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) Basic array properties & mutating methods
 * 2) Iteration methods
 * 3) Transformation methods (map, filter, find)
 * 4) Reduction (reduce)
 * 5) Sorting & reordering
 * 6) Copying & slicing (non-mutating)
 * 7) Condition checking (some, every)
 * 8) Utility methods
 * 9) Playwright automation examples
 * 10) Interview questions + best practices
 */

/**
 * ====================================================================
 * SAMPLE DATA
 * ====================================================================
 */

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];

/**
 * ====================================================================
 * 1) VERY BASIC & MOST COMMON METHODS
 * ====================================================================
 */

/**
 * length
 * Returns number of elements.
 */
console.log(numbers.length);

/**
 * push()
 * Adds element(s) to the END (mutates array).
 */
numbers.push(6);
console.log(numbers);

/**
 * pop()
 * Removes LAST element (mutates).
 */
numbers.pop();
console.log(numbers);

/**
 * unshift()
 * Adds element(s) to the BEGINNING.
 */
fruits.unshift("mango");
console.log(fruits);

/**
 * shift()
 * Removes FIRST element.
 */
fruits.shift();
console.log(fruits);

/**
 * includes()
 * Checks if value exists.
 */
console.log(fruits.includes("banana")); // true

/**
 * indexOf()
 * Returns index or -1.
 */
console.log(fruits.indexOf("orange"));

/**
 * ====================================================================
 * 2) ITERATION (NO TRANSFORMATION)
 * ====================================================================
 */

/**
 * forEach()
 * Loops over items, returns NOTHING.
 * ❗ Cannot break or return values.
 */
numbers.forEach((n) => {
  console.log("forEach:", n);
});

/**
 * ====================================================================
 * 3) ITERATION + TRANSFORMATION (VERY IMPORTANT)
 * ====================================================================
 */

/**
 * map()
 * Transforms each element → NEW array.
 */
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

/**
 * filter()
 * Keeps elements that match condition.
 */
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers);

/**
 * find()
 * Returns FIRST matching element (or undefined).
 */
const found = numbers.find((n) => n > 3);
console.log(found);

/**
 * ====================================================================
 * 4) REDUCTION (ONE VALUE RESULT)
 * ====================================================================
 */

/**
 * reduce()
 * Combines all elements into ONE value.
 */
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

/**
 * ====================================================================
 * 5) SORTING & REORDERING
 * ====================================================================
 */

/**
 * sort()
 * Sorts array (MUTATES original).
 * Always use a copy to stay safe.
 */
const sortedAsc = [...numbers].sort((a, b) => a - b);
console.log(sortedAsc);

/**
 * reverse()
 * Reverses order (mutates).
 */
const reversed = [...numbers].reverse();
console.log(reversed);

/**
 * ====================================================================
 * 6) COPYING & SLICING (SAFE OPERATIONS)
 * ====================================================================
 */

/**
 * slice()
 * Copies part of array (NO mutation).
 */
const sliced = numbers.slice(1, 3);
console.log(sliced);

/**
 * concat()
 * Merges arrays → NEW array.
 */
const moreFruits = fruits.concat(["grape", "pear"]);
console.log(moreFruits);

/**
 * ====================================================================
 * 7) CONDITION CHECKING
 * ====================================================================
 */

/**
 * some()
 * At least ONE element matches condition.
 */
console.log(numbers.some((n) => n > 4)); // true

/**
 * every()
 * ALL elements must match condition.
 */
console.log(numbers.every((n) => n > 0)); // true

/**
 * ====================================================================
 * 8) CONVERT / UTILITY
 * ====================================================================
 */

/**
 * join()
 * Converts array → string.
 */
console.log(fruits.join(", "));

/**
 * Array.isArray()
 * Checks if value is an array.
 */
console.log(Array.isArray(numbers));

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION USE CASES (PROJECT REQUIREMENT)
 * ====================================================================
 *
 * Create:
 *   playwright-examples/lesson10-array-methods.spec.ts
 *
 * Examples of real usage:
 */

/**
 * Example 1 — Filter visible elements
 * const visibleTexts = await page
 *   .locator(".item")
 *   .allInnerTexts();
 *
 * const filtered = visibleTexts.filter(t => t.includes("Active"));
 */

/**
 * Example 2 — Map API response to test data
 * const users = response.data.map(u => u.username);
 */

/**
 * Example 3 — Reduce prices from UI
 * const prices = [100, 200, 300];
 * const total = prices.reduce((a, b) => a + b, 0);
 */

/**
 * ====================================================================
 * SENIOR DEVELOPER BEST PRACTICES
 * ====================================================================
 *
 * ✔ Prefer map/filter/reduce over loops
 * ✔ Avoid mutating arrays in tests
 * ✔ Always clone before sort/reverse
 * ✔ Avoid forEach when you need results
 * ✔ Use find instead of filter()[0]
 * ✔ Arrays power data-driven Playwright tests
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 10
 * ====================================================================
 *
 * 1) Difference between map and forEach?
 * 2) Why is reduce powerful?
 * 3) What methods mutate arrays?
 * 4) Difference between find and filter?
 * 5) some() vs every()?
 * 6) Why should sort be used carefully?
 * 7) Show a Playwright use-case for map/filter.
 */

/**
 * ====================================================================
 * LESSON 10 REVIEW 
 * ====================================================================
 *
 * ✅ You now understand array methods from basics to advanced
 * ✅ You can explain them clearly in interviews
 * ✅ You can apply them directly in Playwright automation
 */
