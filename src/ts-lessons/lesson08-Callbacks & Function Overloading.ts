/**
 * ====================================================================
 * LESSON 08 — Callbacks & Function Overloading (TypeScript + Playwright)
 * ====================================================================
 *
 * This lesson focuses on two advanced function concepts used a lot in
 * real automation frameworks:
 *  1) Callback functions (functions passed into other functions)
 *  2) Function overloading (multiple call signatures, one implementation)
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) What is a callback function?
 * 2) Callback function typing: (value: number) => void
 * 3) How callbacks are used in automation utilities
 * 4) What is function overloading?
 * 5) Overload signatures vs implementation
 * 6) Overloading by different parameter types
 * 7) Overloading by different parameter counts
 * 8) Playwright automation examples
 * 9) Interview questions + common pitfalls
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS
 * ====================================================================
 *
 * Callback function:
 * - A function passed as an argument to another function.
 * - It is executed later (usually after some work is done).
 *
 * In short:
 * - One function calls another function.
 * - That “another function” is the callback.
 *
 * Function overloading:
 * - Multiple function signatures (same name) with different parameters.
 * - Only ONE implementation contains the actual function body.
 * - TypeScript checks calls at compile time using the overload signatures.
 */

/**
 * ====================================================================
 * SECTION 1 — CALLBACK FUNCTIONS
 * ====================================================================
 *
 * Syntax idea:
 *   function test(parameter) {}
 *   test(argument)
 *
 * Here, the "parameter" is the variable in the function definition.
 * The "argument" is the value you pass when calling the function.
 */

// Callback Function Example
function processData(data: number, callback: (value: number) => void): void {
  console.log("Processing data...");
  callback(data);
}

function displayResult(result: number): void {
  console.log("Result is:", result);
}

// Passing a function as an argument (callback)
processData(10, displayResult);

/**
 * Notes:
 * - callback is a function PARAMETER
 * - its type is: (value: number) => void
 *   meaning: takes a number and returns nothing
 */

/**
 * Callback as an arrow function
 */
processData(20, (value) => console.log("Arrow callback result:", value));

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION EXAMPLE — CALLBACK UTILITY
 * ====================================================================
 *
 * In Playwright frameworks, callbacks are used to:
 * - wrap steps (logging + screenshots on failure)
 * - retry operations
 * - build reusable “run step” helpers
 *
 * This is a generic pattern (typed), you can use it in tests.
 */

type StepFn<T> = () => Promise<T>;

async function runStep<T>(stepName: string, step: StepFn<T>): Promise<T> {
  console.log(`STEP START: ${stepName}`);
  try {
    const result = await step();
    console.log(`STEP PASS: ${stepName}`);
    return result;
  } catch (err) {
    console.log(`STEP FAIL: ${stepName}`);
    throw err;
  }
}

// Example usage (no Playwright import needed here)
runStep("Example callback step", async () => {
  return "done";
}).then(console.log);

/**
 * ====================================================================
 * SECTION 2 — FUNCTION OVERLOADING
 * ====================================================================
 *
 * Overloading allows defining multiple signatures with the same name
 * but different parameters, handled by a single implementation.
 *
 * It improves readability and reusability:
 * - instead of addNumbers() and addStrings()
 * - you use combine() with correct type signatures
 */

/**
 * Example 1 — Overloading by parameter TYPES
 */

// Overload signatures (NO body)
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Single implementation (must be compatible with all signatures)
function combine(a: any, b: any): any {
  return a + b;
}

// Valid calls (TypeScript picks the correct signature)
const n = combine(2, 3);       // number
const s = combine("A", "B");   // string

console.log(n, s);

/**
 * Example 2 — Overloading by parameter COUNT
 */

function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
  if (c !== undefined) return a + b + c;
  return a + b;
}

console.log(add(10, 20));      // 30
console.log(add(10, 20, 30));  // 60

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION EXAMPLE — OVERLOADING FOR LOCATORS
 * ====================================================================
 *
 * Real-world idea:
 * You might accept either:
 * - a CSS selector string
 * - OR a Locator object
 *
 * In Playwright tests, this makes helper functions flexible but still type-safe.
 */

// Minimal “Locator-like” type (to keep this lesson self-contained)
type LocatorLike = { click(): Promise<void> };

function clickTarget(target: string): Promise<void>;
function clickTarget(target: LocatorLike): Promise<void>;
async function clickTarget(target: any): Promise<void> {
  if (typeof target === "string") {
    console.log(`Would click selector: ${target}`);
    return;
  }
  await target.click();
}

/**
 * ====================================================================
 * COMMON PITFALLS (Reviewed)
 * ====================================================================
 *
 * 1) Overload signatures must be above the implementation.
 * 2) Implementation must handle ALL cases safely.
 * 3) Avoid overusing `any` — prefer unions when possible.
 *
 * Example safer implementation style:
 *   function combine(a: number | string, b: number | string) { ... }
 *
 * But note:
 * - unions can lose strict return typing in some cases
 * - overloads keep return types precise
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 08
 * ====================================================================
 *
 * 1) What is a callback function? Give a real automation example.
 * 2) Explain the type: (value: number) => void
 * 3) What is the difference between parameter and argument?
 * 4) What is function overloading in TypeScript?
 * 5) Why do overload signatures not have a function body?
 * 6) Why must there be only one implementation?
 * 7) Overload vs union types: when would you choose each?
 * 8) How are callbacks used in Playwright framework utilities?
 */

/**
 * ====================================================================
 * LESSON 08 REVIEW & SUMMARY 
 * ====================================================================
 *
 * ✅ You learned:
 * - Callbacks: passing functions as arguments
 * - Overloading: multiple signatures, one implementation
 *
 * ✅ Automation relevance:
 * - callbacks for step wrappers and reusable helpers
 * - overloading for flexible utilities (selector or locator)
 */
