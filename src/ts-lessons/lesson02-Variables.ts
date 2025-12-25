/**
 * ====================================================================
 * LESSON 02 – Variables
 * ====================================================================
 *
 * Variables are used to store data in memory.
 * In TypeScript, variables can have explicit types or inferred types.
 *
 * A correct understanding of variables is critical for:
 *  - Writing predictable code
 *  - Avoiding scope-related bugs
 *  - Building reliable automation frameworks
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 *
 * 1. Variable declaration keywords (var, let, const)
 * 2. Scope (function scope vs block scope)
 * 3. Declaration vs initialization
 * 4. Re-declaration rules
 * 5. Re-assignment vs immutability
 * 6. Hoisting and Temporal Dead Zone (TDZ)
 * 7. Best practices for Playwright automation
 */

/**
 * ====================================================================
 * VARIABLE SYNTAX
 * ====================================================================
 *
 * SYNTAX:
 *   KEYWORD variableName : dataType = value;
 *
 * Type Annotation:
 *   let age: number = 20;
 *
 * Type Inference:
 *   let score = 100; // inferred as number
 *
 * Best Practice:
 * - Prefer inference for local variables
 * - Prefer annotation for function parameters and APIs
 */

/**
 * ====================================================================
 * VARIABLE KEYWORDS OVERVIEW
 * ====================================================================
 *
 * --------------------------------------------------------------
 * | Keyword | Scope     | Reassignable | Hoisted?            | Usage
 * --------------------------------------------------------------
 * | var     | function  | yes          | yes (undefined)     | ❌ Avoid
 * | let     | block     | yes          | yes (TDZ)           | ✅ Mutable values
 * | const   | block     | no           | yes (TDZ)           | ✅ Default choice
 * --------------------------------------------------------------
 */

/**
 * ====================================================================
 * 1. SCOPE (Where variables are accessible)
 * ====================================================================
 *
 * Scope defines where a variable can be accessed.
 *
 * TypeScript supports:
 *  - Function Scope → function () { }
 *  - Block Scope    → if {}, for {}, while {}, {}
 */

/**
 * Example — var (function scope)
 */
function varScope(): void {
  if (true) {
    var message = "welcome";
  }

  // Accessible due to function scope
  console.log(message);
}

varScope();

/**
 * Example — let & const (block scope)
 */
function blockScope(): void {
  if (true) {
    let msg = "welcome";
    const greet = "hello";

    console.log(msg);    // ✔ allowed
    console.log(greet);  // ✔ allowed
  }

  // console.log(msg);   // ❌ Error: block scoped
  // console.log(greet); // ❌ Error: block scoped
}

blockScope();

/**
 * ====================================================================
 * 2. DECLARATION vs INITIALIZATION
 * ====================================================================
 *
 * Declaration   → variable is created
 * Initialization → value is assigned
 */

// var
var x;
x = 10;

// let
let y;
y = 20;

// const (must initialize immediately)
// const z;   // ❌ Error
const z = 30;

/**
 * ====================================================================
 * 3. RE-DECLARATION
 * ====================================================================
 *
 * var   → ✔ allowed (dangerous)
 * let   → ❌ not allowed in same scope
 * const → ❌ not allowed
 */

// var (avoid)
var city = "Istanbul";
var city = "Ankara";

// let
let country = "Turkey";
// let country = "India"; // ❌ Compile-time error

/**
 * ====================================================================
 * 4. RE-ASSIGNMENT vs IMMUTABILITY
 * ====================================================================
 *
 * var   → ✔ allowed
 * let   → ✔ allowed
 * const → ❌ reassignment not allowed
 */

let counter = 1;
counter = 2;

const pi = 3.14;
// pi = 4; // ❌ Error

/**
 * IMPORTANT:
 * const prevents reassignment, NOT mutation.
 */

const user = {
  name: "Taner",
};

user.name = "Updated"; // ✔ mutation allowed
// user = {};          // ❌ reassignment not allowed

/**
 * ====================================================================
 * 5. HOISTING & TEMPORAL DEAD ZONE (TDZ)
 * ====================================================================
 *
 * Hoisting means variables are processed before execution.
 */

// var hoisting
console.log(a); // undefined
var a = 10;

// let / const (TDZ)
// console.log(b); // ❌ ReferenceError
let b = 20;

// console.log(c); // ❌ ReferenceError
const c = 30;

/**
 * Summary:
 * - var   → hoisted + initialized as undefined
 * - let   → hoisted, not initialized (TDZ)
 * - const → hoisted, not initialized (TDZ)
 */

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION – BEST PRACTICES
 * ====================================================================
 *
 * In Playwright tests:
 *  - Use const for locators, URLs, configs
 *  - Use let only when reassignment is required
 *  - Never use var
 */

const BASE_URL = "https://example.com";

async function navigate(url: string): Promise<void> {
  console.log(`Navigating to ${url}`);
}

navigate(BASE_URL);

/**
 * ====================================================================
 * INTERVIEW QUESTIONS (Lesson 02)
 * ====================================================================
 *
 * 1. Difference between var, let, and const?
 * 2. What is block scope?
 * 3. What is hoisting?
 * 4. What is the Temporal Dead Zone?
 * 5. Why should var be avoided?
 * 6. Can const objects be mutated?
 * 7. Which keyword do you use by default and why?
 */

/**
 * ====================================================================
 * LESSON 02 REVIEW & SUMMARY
 * ====================================================================
 *
 * ✔ Variables store data
 * ✔ Prefer const by default
 * ✔ Use let for reassignment
 * ✔ Avoid var completely
 * ✔ Scope & hoisting are common interview topics
 */
