/**
 * ====================================================================
 * LESSON 01 – Introduction to TypeScript
 * ====================================================================
 * Shortcut: Shift + Alt + A  →  Block comment
 * TypeScript (TS) is a statically typed superset of JavaScript (JS).
 * It adds:
 *  - Type Safety
 *  - Compile-time error checking
 *  - Better IDE support (IntelliSense)
 *  - More predictable and maintainable code
 *
 * TypeScript code is NOT executed directly.
 * It must be compiled to JavaScript or run using a TS runtime (e.g. tsx).
 */

/**
 * ====================================================================
 * TYPE SAFETY (Key Difference Between TS and JS)
 * ====================================================================
 *
 * Once a variable gets a type in TypeScript, it CANNOT be reassigned
 * to a different type.
 */

// Type Inference example
let count = 10;          // inferred as number
// count = "ten";        // ❌ Compile-time error

// JavaScript allows this, TypeScript does not

/**
 * Why Type Safety matters:
 *  - Prevents runtime crashes
 *  - Makes refactoring safe
 *  - Improves large codebases and automation frameworks
 *  - Catches bugs before execution
 */

/**
 * ====================================================================
 * TYPE ANNOTATION vs TYPE INFERENCE
 * ====================================================================
 *
 * Type Annotation → You explicitly specify the type
 * Type Inference  → TypeScript automatically infers the type
 */
// Both behave the same, but annotation is explicit, inference is implicit.

// Type Annotation
let age: number = 25;

// Type Inference
let score = 100;

// score = "high";       // ❌ Error: string is not assignable to number

/**
 * Best Practice:
 * - Prefer type inference when possible
 * - Use type annotations for clarity, public APIs, and function signatures
 */

/**
 * ====================================================================
 * TYPESCRIPT DEVELOPMENT REQUIREMENTS
 * ====================================================================
 *
 * ✔ Node.js
 *   - Executes compiled JavaScript
 *
 * ✔ TypeScript Compiler (tsc)
 *   - Converts .ts files into .js
 *   - Installed via:
 *       npm install -g typescript
 *
 * ✔ Editor (VSCode / IntelliJ)
 *   - Provides TypeScript language support
 */

/**
 * ====================================================================
 * HOW TYPESCRIPT EXECUTION WORKS
 * ====================================================================
 *
 * Step 1: Write TypeScript code
 *    lesson01.ts
 *
 * Step 2: Compile to JavaScript
 *    tsc lesson01.ts
 *
 * Step 3: JavaScript file is generated
 *    lesson01.js
 *
 * Step 4: Run with Node.js
 *    node lesson01.js
 */

/**
 * ====================================================================
 * RUNNING TYPESCRIPT USING TSX (RECOMMENDED)
 * ====================================================================
 *
 * Install tsx globally:
 *    npm install -g tsx
 *
 * Run TypeScript directly:
 *    tsx lesson01.ts
 *
 * Advantages:
 *  - No manual compilation
 *  - Faster development
 *  - Ideal for automation & testing
 */

/**
 * ====================================================================
 * HOW COMPILATION WORKS INTERNALLY
 * ====================================================================
 */

let message: string = "Hello TypeScript";

// After compilation, JavaScript looks like:
// var message = "Hello TypeScript";

/**
 * NOTE:
 * Type information is removed after compilation.
 * Types exist ONLY during development.
 */

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION CONTEXT
 * ====================================================================
 *
 * TypeScript improves Playwright tests by:
 *  - Providing autocomplete for page, locators, and assertions
 *  - Preventing invalid method usage
 *  - Making test code easier to maintain
 */

// Example (simplified – no imports needed for lesson)
async function getPageTitle(titleProvider: () => Promise<string>): Promise<void> {
  const title = await titleProvider();
  console.log(title);
}

/**
 * ====================================================================
 * INTERVIEW QUICK QUESTIONS (FROM THIS LESSON)
 * ====================================================================
 *
 * 1. What is TypeScript?
 * 2. How does TypeScript differ from JavaScript?
 * 3. What is type safety?
 * 4. Difference between type annotation and inference?
 * 5. Why does TypeScript need compilation?
 * 6. What happens to types after compilation?
 * 7. Why is TypeScript preferred in Playwright automation?
 */

/**
 * ====================================================================
 * LESSON 01 SUMMARY
 * ====================================================================
 *
 * ✔ TypeScript adds type safety to JavaScript
 * ✔ Errors are caught at compile time
 * ✔ Types disappear after compilation
 * ✔ tsx allows direct execution of TS
 * ✔ TypeScript is ideal for test automation frameworks
 */
