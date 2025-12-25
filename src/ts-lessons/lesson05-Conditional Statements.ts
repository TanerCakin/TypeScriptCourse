/**
 * ====================================================================
 * LESSON 05 — Conditional Statements in TypeScript
 * ====================================================================
 *
 * Conditional statements control the flow of a program.
 * TypeScript improves conditionals with:
 *  - safer comparisons (===, !==)
 *  - strict typing (prevents invalid conditions)
 *  - better tooling and refactoring safety
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) if statement
 * 2) if–else
 * 3) if–else if chain
 * 4) switch statement
 * 5) ternary operator (?:)
 * 6) short-circuit evaluation (&&, ||)
 * 7) nullish coalescing (??)
 * 8) Playwright automation examples (project requirement)
 * 9) Senior-level tips + interview questions
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS
 * ====================================================================
 *
 * if:
 * - runs code only when a condition is true
 *
 * if–else:
 * - provides two paths: true-path and false-path
 *
 * if–else if:
 * - multiple branches evaluated in order (first match wins)
 *
 * switch:
 * - cleaner than long if-chains when checking the SAME value
 *
 * ternary (?:):
 * - short form of if–else for simple expressions
 *
 * short-circuit (&&, ||):
 * - && only evaluates right side if left is true
 * - || only evaluates right side if left is false
 *
 * nullish coalescing (??):
 * - fallback only when value is null or undefined
 * - unlike ||, it does NOT treat 0/""/false as missing
 */

/**
 * ====================================================================
 * 1) IF STATEMENT
 * ====================================================================
 */

const votingAge = 18;
let age = 20;

if (age >= votingAge) {
  console.log("Eligible to vote");
}

/**
 * ====================================================================
 * 2) IF–ELSE STATEMENT
 * ====================================================================
 */

let isVisible = false;

if (isVisible) {
  console.log("Element is visible");
} else {
  console.log("Element is not visible");
}

/**
 * ====================================================================
 * 3) IF–ELSE IF CHAIN
 * ====================================================================
 */

let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

/**
 * ====================================================================
 * 4) SWITCH STATEMENT
 * ====================================================================
 */

type Role = "admin" | "editor" | "viewer" | "unknown";
let role: Role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Limited access");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("Unknown role");
}

/**
 * Use cases:
 * ✔ API status codes
 * ✔ User roles
 * ✔ Menu navigation conditions
 */

/**
 * ====================================================================
 * 5) TERNARY OPERATOR (?:)
 * ====================================================================
 */

let legalStatus = age >= 18 ? "Adult" : "Minor";
console.log(legalStatus);

/**
 * Best Practice:
 * - Use ternary only for simple expressions
 * - Avoid nesting ternaries (hard to read)
 */

/**
 * ====================================================================
 * 6) SHORT-CIRCUIT EVALUATION (&&, ||)
 * ====================================================================
 */

let isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // runs only if isLoggedIn is true

let input = "";
let result = input || "No value"; // empty string is falsy -> fallback triggers
console.log(result); // "No value"

/**
 * ====================================================================
 * 7) NULLISH COALESCING (??)
 * ====================================================================
 */

let configTimeout: number | null = null;
let timeout = configTimeout ?? 3000; // fallback only for null/undefined
console.log(timeout); // 3000

/**
 * || vs ?? difference
 */
const zero = 0;
console.log(zero || 10); // 10 (0 is falsy)
console.log(zero ?? 10); // 0  (0 is valid)

/**
 * ====================================================================
 * 8) PLAYWRIGHT AUTOMATION EXAMPLES (Project Requirement)
 * ====================================================================
 *
 * You said you want Playwright usage in a separate folder per lesson.
 * Create:
 *   playwright-examples/lesson05-conditionals.spec.ts
 *
 * Below are patterns you will use in that spec file.
 */

// A) Check if element exists before clicking
type LocatorLike = { count(): Promise<number>; isVisible(): Promise<boolean> };
type PageLike = {
  locator(selector: string): LocatorLike;
  click(selector: string): Promise<void>;
  waitForSelector(selector: string, opts: { state: "hidden" | "visible" }): Promise<void>;
  url(): string;
  goto(url: string): Promise<void>;
};

async function clickIfExists(page: PageLike, selector: string): Promise<void> {
  if ((await page.locator(selector).count()) > 0) {
    await page.click(selector);
  } else {
    console.log(`Not found: ${selector}`);
  }
}

// B) Wait for loader to disappear if visible
async function waitLoaderIfVisible(page: PageLike): Promise<void> {
  if (await page.locator(".loader").isVisible()) {
    await page.waitForSelector(".loader", { state: "hidden" });
  }
}

// C) Conditional navigation
async function goToDashboard(page: PageLike): Promise<void> {
  if (page.url().includes("dashboard")) {
    console.log("Already logged in");
  } else {
    await page.goto("https://app/login");
  }
}

// D) Ternary for logging
const isAdmin = true;
console.log(isAdmin ? "Admin access granted" : "User access limited");

// E) Optional chaining + nullish coalescing (API-style object)
type ApiResponse = { data?: { name?: string } };
const response: ApiResponse = {};
const nameFromApi = response.data?.name ?? "Unknown User";
console.log(nameFromApi);

// F) Short-circuit click (use carefully — readability matters)
async function clickConfirmIfExists(page: PageLike): Promise<void> {
  (await page.locator("#confirm").count()) > 0 && (await page.click("#confirm"));
}

/**
 * ====================================================================
 * 9) SENIOR DEVELOPER BEST PRACTICES
 * ====================================================================
 *
 * ✔ Prefer === over == for strict type checking
 * ✔ Avoid deep nesting → use early returns
 * ✔ Use ternary only for simple conditions
 * ✔ Use switch for cleaner multi-condition logic
 * ✔ Use ?. and ?? to avoid runtime crashes
 * ✔ Keep conditions expressive, not clever
 * ✔ Extract complex condition logic into functions
 */

/**
 * ====================================================================
 * 10) INTERVIEW QUESTIONS — LESSON 05
 * ====================================================================
 *
 * 1) Difference between == and === ?
 * 2) Explain short-circuit evaluation in TS.
 * 3) When would you choose switch over if–else?
 * 4) What is nullish coalescing (??)? How is it different from || ?
 * 5) How does optional chaining (?.) prevent runtime failures?
 * 6) Why is ternary preferred for simple assignments?
 * 7) Show a Playwright use-case of conditionals.
 */

/**
 * ====================================================================
 * LESSON 05 REVIEW & SUMMARY
 * ====================================================================
 *
 * ✅ Good:
 * - Clear control-flow patterns (if / else / switch)
 * - Modern TS operators (??) for safer defaults
 * - Practical automation patterns (check existence before click)
 *
 * Pitfalls to remember:
 * - || overwrites valid values like 0 and ""
 * - avoid clever one-liners that reduce readability

 */
