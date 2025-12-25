/**
 * ====================================================================
 * LESSON 12 — String Methods in TypeScript
 * Focus: Strings | Immutability | Playwright Automation
 * ====================================================================
 *
 * IMPORTANT CONCEPT (INTERVIEW MUST-KNOW):
 * ------------------------------------------------------------
 * ✔ Strings in JavaScript / TypeScript are IMMUTABLE
 * ✔ String methods NEVER modify the original string
 * ✔ Every method returns a NEW string
 *
 * This is extremely important for:
 * - assertions
 * - text validation
 * - selector building
 * - safe transformations in automation
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) Basic string info methods
 * 2) Case conversion
 * 3) Searching & checking
 * 4) Extracting string parts
 * 5) Replacing content
 * 6) Split & join
 * 7) Trimming whitespace
 * 8) Concatenation
 * 9) Repeat & padding
 * 10) Comparison & locale methods
 * 11) Regex matching
 * 12) Conversion methods
 * 13) String immutability (critical)
 * 14) Playwright automation use cases
 * 15) Interview summary
 */

/**
 * ====================================================================
 * 1) BASIC STRING INFO METHODS
 * ====================================================================
 */

let str: string = "TypeScript";

// length
console.log(str.length); // 10

// charAt()
console.log(str.charAt(0)); // T

// charCodeAt()
console.log(str.charCodeAt(0)); // Unicode of 'T'

// at() — supports negative index
console.log(str.at(-1)); // t

/**
 * ====================================================================
 * 2) CASE CONVERSION METHODS
 * ====================================================================
 */

let msg: string = "Hello World";

console.log(msg.toUpperCase()); // HELLO WORLD
console.log(msg.toLowerCase()); // hello world

/**
 * ====================================================================
 * 3) SEARCHING METHODS
 * ====================================================================
 */

// includes()
console.log(str.includes("Script")); // true

// startsWith()
console.log(str.startsWith("Type")); // true

// endsWith()
console.log(str.endsWith("Script")); // true

// indexOf()
console.log(str.indexOf("S")); // 4

// lastIndexOf()
console.log("banana".lastIndexOf("a")); // 5

/**
 * ====================================================================
 * 4) EXTRACTING STRING PARTS
 * ====================================================================
 */

// slice(start, end?)
console.log(str.slice(0, 4)); // Type
console.log(str.slice(-6));   // Script

// substring(start, end?)
console.log(str.substring(4, 10)); // Script

// substr(start, length) ❌ deprecated (still seen in legacy code)
console.log(str.substr(4, 6)); // Script

/**
 * ====================================================================
 * 5) REPLACING CONTENT
 * ====================================================================
 */

let sentence: string = "Hello World";

// replace() → first match only
console.log(sentence.replace("World", "TypeScript"));

// replaceAll()
let text: string = "dog dog dog";
console.log(text.replaceAll("dog", "cat"));

/**
 * ====================================================================
 * 6) SPLIT & JOIN
 * ====================================================================
 */

// split()
let csv: string = "apple,banana,orange";
let fruits: string[] = csv.split(",");
console.log(fruits);

// join() (array method but used with strings)
console.log(fruits.join(" | "));

/**
 * ====================================================================
 * 7) TRIMMING METHODS
 * ====================================================================
 */

let input: string = "   admin   ";

console.log(input.trim());      // "admin"
console.log(input.trimStart()); // "admin   "
console.log(input.trimEnd());   // "   admin"

/**
 * ====================================================================
 * 8) CONCATENATION METHODS
 * ====================================================================
 */

let a: string = "Hello";
let b: string = "TypeScript";

// concat()
console.log(a.concat(" ", b));

// Template literals (PREFERRED)
console.log(`Hello ${b}`);

/**
 * ====================================================================
 * 9) REPEAT & PAD METHODS
 * ====================================================================
 */

// repeat()
console.log("Hi ".repeat(3)); // Hi Hi Hi

// padStart()
let id: string = "5";
console.log(id.padStart(3, "0")); // 005

// padEnd()
console.log(id.padEnd(3, "0")); // 500

/**
 * ====================================================================
 * 10) COMPARISON & LOCALE METHODS
 * ====================================================================
 */

// localeCompare()
console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0

/**
 * ====================================================================
 * 11) REGEX MATCHING METHODS
 * ====================================================================
 */

let email: string = "test@example.com";

// match()
console.log(email.match(/@/)); // ["@"]

// matchAll()
let data: string = "a1 b2 c3";
for (const match of data.matchAll(/\d/g)) {
  console.log(match[0]); // 1, 2, 3
}

// search()
console.log(email.search("@")); // index of "@"

/**
 * ====================================================================
 * 12) CONVERSION METHODS
 * ====================================================================
 */

let value: number = 123;

// toString()
console.log(value.toString());

// valueOf()
console.log(str.valueOf());

/**
 * ====================================================================
 * 13) STRING IMMUTABILITY (VERY IMPORTANT)
 * ====================================================================
 */

let original: string = "hello";
let changed = original.toUpperCase();

console.log(original); // hello
console.log(changed);  // HELLO

/**
 * ✔ original string is NOT changed
 * ✔ all methods return NEW strings
 */

/**
 * ====================================================================
 * 14) PLAYWRIGHT AUTOMATION USE CASES (PROJECT REQUIREMENT)
 * ====================================================================
 *
 * Create:
 *   playwright-examples/lesson12-string-methods.spec.ts
 */

// Dynamic selector
// await page.click(`text=${buttonText}`);

// Title validation
// const title = await page.title();
// expect(title.includes("Dashboard")).toBe(true);

// Clean user input
// await page.fill("#username", username.trim());

/**
 * ====================================================================
 * 15) QUICK SUMMARY (INTERVIEW GOLD)
 * ====================================================================
 *
 * MOST USED STRING METHODS:
 * - length
 * - toUpperCase(), toLowerCase()
 * - includes()
 * - startsWith(), endsWith()
 * - slice(), substring()
 * - replace(), replaceAll()
 * - split()
 * - trim()
 * - repeat()
 * - padStart(), padEnd()
 *
 * KEY RULE:
 * ❗ Strings are IMMUTABLE — methods return NEW strings
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 12
 * ====================================================================
 *
 * 1) What does string immutability mean?
 * 2) Difference between slice() and substring()?
 * 3) replace() vs replaceAll()?
 * 4) includes() vs indexOf()?
 * 5) How are strings used in Playwright selectors?
 * 6) Why is trim() important in automation?
 */

/**
 * ====================================================================
 * LESSON 12 REVIEW 
 * ====================================================================
 *
 * ✅ You can confidently work with strings
 * ✅ You understand immutability (critical concept)
 * ✅ You can apply string methods in Playwright tests
 */
