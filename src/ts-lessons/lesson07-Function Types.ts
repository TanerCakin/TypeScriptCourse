/**
 * ====================================================================
 * LESSON 08 — Functions in TypeScript (Interview + Playwright Focus)
 * ====================================================================
 *
 * TypeScript allows standalone functions (unlike Java, where methods must
 * belong to a class). In automation, functions are used everywhere:
 *  - utilities (wait/click helpers)
 *  - data builders
 *  - reusable assertions
 *  - API helpers
 *
 * In one line:
 * ✅ TS functions can stand alone; Java methods must live inside a class.
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) Function vs Method (TS vs Java concept)
 * 2) Named functions (declaration)
 * 3) Anonymous functions (function expressions)
 * 4) Arrow functions (lambda)
 * 5) Rest parameters
 * 6) Optional + default parameters
 * 7) Function types as variables
 * 8) Type alias / interface for functions
 * 9) Callback & higher-order functions
 * 10) Generic functions
 * 11) Function overloading
 * 12) Methods in objects/classes (Page Object Model)
 * 13) Async functions (Promise-based) for Playwright
 * 14) Playwright automation examples + interview questions
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS
 * ====================================================================
 *
 * Named function:
 * - declared with `function name() {}`
 *
 * Anonymous function:
 * - function without a name, assigned to a variable
 *
 * Arrow function:
 * - shorter syntax, commonly used for callbacks and async helpers
 * - does NOT bind its own `this`
 *
 * Rest parameters:
 * - collects multiple arguments into an array
 *
 * Optional parameters:
 * - `param?: type` (must come after required params)
 *
 * Default parameters:
 * - `param: type = defaultValue`
 *
 * Function type:
 * - type signature describing parameters + return type
 *
 * Callback/HOF:
 * - function passed into another function / returned from a function
 *
 * Generics:
 * - functions that work with multiple types using `<T>`
 *
 * Overloading:
 * - multiple signatures for the same function name
 */

/**
 * ====================================================================
 * A) NAMED FUNCTION (Function Declaration)
 * ====================================================================
 */

function sayHello(): void {
  console.log("Hello TypeScript");
}
sayHello();

function add(a: number, b: number): number {
  return a + b;
}
const sum = add(10, 5);
console.log(sum); // 15

/**
 * Rest parameters (same type)
 */
function calculateTotal(...prices: number[]): number {
  let total = 0;
  for (const price of prices) total += price;
  return total;
}
console.log(calculateTotal(10, 20, 30)); // 60

/**
 * Rest parameters (multiple types)
 */
function logValues(...args: (string | number | boolean)[]): void {
  for (const value of args) console.log(value);
}
logValues("Test", 123, true, "done");

/**
 * Optional parameters
 */
function displayDetails(id: number, name: string, mailId?: string): void {
  console.log("ID:", id);
  console.log("Name:", name);
  if (mailId !== undefined) console.log("Email:", mailId);
}
displayDetails(1, "John");
displayDetails(2, "Mary", "mary@test.com");

/**
 * Default parameters
 */
function calculatePrice(amount: number, taxRate: number = 0.18): number {
  return amount + amount * taxRate;
}
console.log(calculatePrice(100));       // default 18%
console.log(calculatePrice(100, 0.1));  // 10%

/**
 * ====================================================================
 * B) ANONYMOUS FUNCTION (Function Expression)
 * ====================================================================
 */

const showMessage = function (): void {
  console.log("Anonymous function called");
};
showMessage();

const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log(multiply(3, 4)); // 12

/**
 * ====================================================================
 * C) ARROW FUNCTION (Preferred in TS)
 * ====================================================================
 */

const greet = (): void => {
  console.log("Hello TypeScript");
};
greet();

const subtract = (a: number, b: number): number => a - b;
console.log(subtract(10, 4)); // 6

// implicit return
const square = (n: number): number => n * n;
console.log(square(5)); // 25

/**
 * NOTE:
 * Arrow functions do NOT bind their own `this`.
 * This prevents common bugs in callbacks.
 */

/**
 * ====================================================================
 * D) FUNCTION TYPE (As a Variable Type)
 * ====================================================================
 */

let calculator: (x: number, y: number) => number;

calculator = (x, y) => x + y;
console.log(calculator(2, 3)); // 5

/**
 * ====================================================================
 * E) TYPE ALIAS / INTERFACE FOR FUNCTIONS
 * ====================================================================
 */

type StringFormatter = (value: string) => string;
const toUpper: StringFormatter = (v) => v.toUpperCase();
console.log(toUpper("taner"));

interface Comparator {
  (a: number, b: number): number;
}
const compare: Comparator = (a, b) => a - b;
console.log(compare(10, 3));

/**
 * ====================================================================
 * F) CALLBACK & HIGHER-ORDER FUNCTIONS
 * ====================================================================
 */

function applyTwice(fn: (n: number) => number, value: number): number {
  return fn(fn(value));
}

const double = (n: number) => n * 2;
console.log(applyTwice(double, 5)); // 20

/**
 * ====================================================================
 * G) GENERIC FUNCTION
 * ====================================================================
 */

function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(10));
console.log(identity<string>("Test"));

/**
 * ====================================================================
 * H) OVERLOADED FUNCTION
 * ====================================================================
 */

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(2, 3));     // 5
console.log(combine("A", "B")); // "AB"

/**
 * ====================================================================
 * I) METHODS (Functions inside objects/classes)
 * ====================================================================
 */

const logger = {
  prefix: "[LOG]",
  log(message: string): void {
    console.log(`${this.prefix} ${message}`);
  },
};
logger.log("Started");

/**
 * Playwright Page Object Model style method
 */
class LoginPage {
  constructor(private page: any) {}

  async login(username: string, password: string): Promise<void> {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click("#loginBtn");
  }
}

/**
 * ====================================================================
 * J) ASYNC FUNCTION (Promise-based) — Playwright style
 * ====================================================================
 */

const clickAndWait = async (
  page: any,
  selector: string,
  timeout: number = 1000
): Promise<void> => {
  await page.click(selector);
  await page.waitForTimeout(timeout);
};

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION EXAMPLES (Project Requirement)
 * ====================================================================
 *
 * Create:
 *   playwright-examples/lesson08-functions.spec.ts
 *
 * What you put there:
 * - reusable helpers (clickAndWait, retry actions)
 * - typed utility functions
 * - callbacks for data-driven steps
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 08
 * ====================================================================
 *
 * 1) Difference between function declaration and function expression?
 * 2) Why are arrow functions preferred in callbacks?
 * 3) What does “arrow functions don’t bind this” mean?
 * 4) What are rest parameters vs optional parameters?
 * 5) What is a function type signature?
 * 6) When would you use generics in a function?
 * 7) What is function overloading and why is it useful?
 * 8) How do async functions work in Playwright?
 */

