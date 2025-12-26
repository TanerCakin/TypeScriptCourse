/**
 * ====================================================================
 * LESSON 03 — Data Types | Type Safety | Annotations & Type Inference
 * ====================================================================
 *
 * In TypeScript, data types describe what kind of values variables can
 * store. TypeScript uses static typing to catch mistakes at compile time.
 *
 * This lesson is critical for automation because typed test data and typed
 * helper functions prevent flaky tests and reduce runtime bugs.
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) JavaScript vs TypeScript typing (Dynamic vs Static)
 * 2) Type Safety (compile-time error prevention)
 * 3) Running TypeScript (tsc vs tsx)
 * 4) Type Annotation vs Type Inference
 * 5) Primitive Types (number, string, boolean, null, undefined, any, union, void)
 * 6) Non-Primitive Types (overview: array, object, function, class, interface, tuple)
 * 7) Playwright usage examples for typed automation data
 * 8) Interview questions + lesson review
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS
 * ====================================================================
 *
 * Dynamic typing (JavaScript):
 * - Variable types can change at runtime.
 * - This is flexible but risky in large projects.
 *
 * Static typing (TypeScript):
 * - Types are checked at compile time.
 * - Invalid assignments cause compile-time errors.
 *
 * Type Safety:
 * - Prevents mixing incompatible types (e.g., string + number).
 * - Reduces runtime bugs and makes refactoring safer.
 *
 * Type Annotation:
 * - You explicitly specify a type: let age: number = 30;
 *
 * Type Inference:
 * - TypeScript automatically infers a type: let age = 30;
 */

/**
 * ====================================================================
 * JS vs TS Typing Behavior
 * ====================================================================
 */

// JavaScript style (dynamic typing behavior)
let ageJs = 30;
console.log(typeof ageJs); // number

ageJs = "Thirty";
console.log(typeof ageJs); // string
console.log(ageJs);        // Thirty

// TypeScript style (static typing)
let data = 10; // inferred number
// data = "ten"; // ❌ Error: Type 'string' is not assignable to type 'number'

/**
 * ====================================================================
 * Type Safety
 * ====================================================================
 */

// JS is not type safe (this would be allowed in JS)
let message = "Hello";
message = 10 as any; // forcing JS-like behavior (DON'T do this in real TS)

// TS is type safe
let num1: string = "2";
let num2: number = 3;

// ✅ type safety example (compile-time error):
// const result = num1 * num2; // ❌ Error: The left-hand side must be a number

/**
 * Fixed correct version:
 */
const fixedNum1: number = Number(num1);
const fixedResult: number = fixedNum1 * num2;
console.log(fixedResult);

/**
 * ====================================================================
 * Running TypeScript
 * ====================================================================
 *
 * Node.js cannot run .ts directly.
 *
 * Option 1 (compile):
 *   tsc lesson03-data-types.ts
 *   node lesson03-data-types.js
 *
 * Option 2 (recommended - direct run):
 *   tsx lesson03-data-types.ts
 */

/**
 * ====================================================================
 * Type Annotation vs Type Inference
 * ====================================================================
 */

// Annotation
let ageAnnotated: number = 30;

// Inference
let ageInferred = 30;

// ageInferred = "30"; // ❌ Error

/**
 * ====================================================================
 * SECTION 1 — Primitive Data Types
 * ====================================================================
 */

// 1) number
let price: number = 99.5;

// 2) string
let name: string = "Taner";

// Template literals
let firstName = "John";
let lastName = "Kenedy";
let greeting = `Hello ${firstName} ${lastName}`;
console.log(greeting);

// 3) boolean
let isActive: boolean = true;

// 4) null
let response: null = null;

// 5) undefined
let y: undefined = undefined;

// 6) any (avoid)
let anyData: any = 10;
anyData = "Hello"; // allowed (dangerous)

// 7) union
let id: number | string;
id = 100;
id = "A100";

// 8) void (functions that return nothing)
function log(): void {
  console.log("logging...");
}

log();

/**
 * ====================================================================
 * SECTION 2 — Non-Primitive Types (Overview)
 * ====================================================================
 *
 * Non-primitive values are stored by reference (heap).
 * They are usually mutable (can be modified).
 */

// Array
let nums: number[] = [1, 2, 3];

// Tuple
let emp: [number, string] = [1, "John"];

// Object
const user = { name: "Taner", role: "QA" };

// Function type example
function add(a: number, b: number): number {
  return a + b;
}

// Class / Interface are non-primitive concepts (deep dive in later lessons)
class Person {}
interface UserShape {
  name: string;
}

/**
 * ====================================================================
 * Primitive vs Non-Primitive (Short Summary)
 * ====================================================================
 *
 * Primitive:
 * - store single values
 * - immutable
 * - stored by value
 *
 * Non-Primitive:
 * - complex structures
 * - mutable
 * - stored by reference
 */

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION EXAMPLES (per project requirement)
 * ====================================================================
 *
 * You said you will keep Playwright usage in a separate folder.
 * So this section is “conceptual here” + real spec file goes to:
 *   playwright-examples/lesson03-data-types.spec.ts
 */

// Example 1: Strongly typed test data
type LoginUser = {
  username: string;
  password: string;
};

const loginUsers: LoginUser[] = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
];

// Example 2: Union type for environments
type Env = "dev" | "staging" | "prod";
const env: Env = "staging";

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 03
 * ====================================================================
 * 1) Dynamic vs static typing — what’s the difference?
 * 2) What is type inference? Give an example.
 * 3) What is type annotation? When would you use it?
 * 4) Why is `any` dangerous?
 * 5) What is a union type? Where is it useful in automation?
 * 6) Explain primitive vs non-primitive (value vs reference).
 * 7) Why does TypeScript improve Playwright test reliability?
 */

/**
 * ====================================================================
 * REVIEW 
 * ====================================================================
 *
 * ✅ Good:
 * - Strong explanation of JS vs TS behavior
 * - Covers the most common primitive types
 * - Introduces union + void (useful in automation)
 */
