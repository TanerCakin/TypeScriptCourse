/**
 * ====================================================================
 * LESSON 11 — Advanced Array Methods in TypeScript
 * Focus: forEach | map | filter | reduce | some | every
 * ====================================================================
 *
 * These array methods are used to iterate, transform, filter,
 * and analyze data in a clean, readable, and functional way.
 *
 * They are EXTREMELY common in:
 *  ✔ Playwright UI automation
 *  ✔ API response handling
 *  ✔ Data-driven testing
 *  ✔ Assertions & validations
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) forEach()  — side effects
 * 2) map()      — transformation
 * 3) filter()   — selection
 * 4) reduce()   — aggregation
 * 5) some()     — any match?
 * 6) every()    — all match?
 * 7) Comparison table
 * 8) Playwright automation use cases
 * 9) Interview questions + best practices
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS (IMPORTANT FOR INTERVIEWS)
 * ====================================================================
 *
 * forEach:
 * - loops through array
 * - returns NOTHING
 * - used for actions (click, log, print)
 *
 * map:
 * - transforms each element
 * - returns a NEW array
 *
 * filter:
 * - selects elements that match a condition
 * - returns a NEW array
 *
 * reduce:
 * - reduces array into ONE value
 * - sum, total, average, object building
 *
 * some:
 * - returns true if AT LEAST ONE element matches
 *
 * every:
 * - returns true ONLY if ALL elements match
 */

/**
 * ====================================================================
 * 1) forEach()
 * ====================================================================
 *
 * Executes a function once for EACH element.
 * ❗ Does NOT return anything.
 */

let nums1: number[] = [10, 20, 30];

nums1.forEach((value, index) => {
  console.log(`forEach -> Index: ${index}, Value: ${value}`);
});

/**
 * Automation note:
 * Use forEach ONLY when you don’t need results.
 */

/**
 * ====================================================================
 * 2) map()
 * ====================================================================
 *
 * Creates a NEW array by transforming each element.
 * Original array is NOT modified.
 */

let nums2: number[] = [1, 2, 3];

let doubledNums = nums2.map((num) => num * 2);

console.log("map ->", doubledNums); // [2, 4, 6]

/**
 * ====================================================================
 * 3) filter()
 * ====================================================================
 *
 * Creates a NEW array containing only elements
 * that satisfy the condition.
 */

let nums3: number[] = [10, 15, 20, 25];

let filteredNums = nums3.filter((num) => num > 15);

console.log("filter ->", filteredNums); // [20, 25]

/**
 * ====================================================================
 * 4) reduce()
 * ====================================================================
 *
 * Reduces an array into a SINGLE value.
 */

let nums4: number[] = [1, 2, 3, 4];

let sum = nums4.reduce((total, num) => total + num, 0);

console.log("reduce ->", sum); // 10

/**
 * ====================================================================
 * 5) some()
 * ====================================================================
 *
 * Returns TRUE if AT LEAST ONE element
 * matches the condition.
 */

let nums5: number[] = [1, 3, 5, 8];

let hasEven = nums5.some((num) => num % 2 === 0);

console.log("some ->", hasEven); // true

/**
 * ====================================================================
 * 6) every()
 * ====================================================================
 *
 * Returns TRUE only if ALL elements
 * match the condition.
 */

let nums6: number[] = [2, 4, 6];

let allEven = nums6.every((num) => num % 2 === 0);

console.log("every ->", allEven); // true

/**
 * ====================================================================
 * QUICK COMPARISON TABLE (MEMORIZE THIS)
 * ====================================================================
 *
 * Method     | Returns        | Purpose
 * -----------|----------------|---------------------------
 * forEach()  | void           | Perform action
 * map()      | new array      | Transform data
 * filter()   | new array      | Select data
 * reduce()   | single value   | Aggregate data
 * some()     | boolean        | Any match?
 * every()    | boolean        | All match?
 */

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION USE CASES (PROJECT REQUIREMENT)
 * ====================================================================
 *
 * Examples:
 */

// map → transform UI data
// const texts = await page.locator(".item").allInnerTexts();
// const upper = texts.map(t => t.toUpperCase());

// filter → select elements
// const visible = texts.filter(t => t.includes("Active"));

// reduce → calculate totals
// const prices = [100, 200, 300];
// const totalPrice = prices.reduce((a, b) => a + b, 0);

// some → check if condition exists
// const hasError = messages.some(m => m.includes("Error"));

// every → validate all elements
// const allVisible = statuses.every(s => s === "Visible");

/**
 * ====================================================================
 * SENIOR DEVELOPER BEST PRACTICES
 * ====================================================================
 *
 * ✔ Prefer map/filter/reduce over loops
 * ✔ Avoid mutating arrays
 * ✔ Do NOT use forEach when you need results
 * ✔ Use find instead of filter()[0]
 * ✔ Keep array logic expressive and readable
 * ✔ These methods are core to clean automation code
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 11
 * ====================================================================
 *
 * 1) Difference between map and forEach?
 * 2) When should reduce be used?
 * 3) some() vs every()?
 * 4) Why does forEach return void?
 * 5) How are array methods used in Playwright?
 * 6) Why are functional methods preferred over loops?
 */

/**
 * ====================================================================
 * LESSON 11 REVIEW 
 * ====================================================================
 *
 * ✅ You can now clearly explain ALL major array methods
 * ✅ You know when to use each one
 * ✅ You can apply them in real Playwright automation
 */
