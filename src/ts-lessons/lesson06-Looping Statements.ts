/**
 * ====================================================================
 * LESSON 06 — Looping Statements in TypeScript (Basics)
 * Focus: while | do–while | for | for-of | for-in
 * ====================================================================
 *
 * Loops allow repeating actions until a condition is met.
 * They are heavily used in Playwright automation for:
 *  ✔ retries
 *  ✔ pagination
 *  ✔ waiting logic
 *  ✔ iterating elements
 *  ✔ data-driven testing
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) while loop
 * 2) do–while loop
 * 3) for loop
 * 4) for-of loop (arrays)
 * 5) for-in loop (objects)
 * 6) break and continue
 * 7) Playwright automation examples
 * 8) Interview questions
 */

/**
 * ====================================================================
 * 1) WHILE LOOP
 * ====================================================================
 */

let i = 1;
while (i <= 3) {
  console.log(`Iteration ${i}`);
  i++;
}

/**
 * Playwright-style retry example
 */
async function retryClick(page: any): Promise<void> {
  let retries = 0;

  while (retries < 5) {
    if (await page.locator("#submit").isVisible()) {
      await page.click("#submit");
      break;
    }
    retries++;
    await page.waitForTimeout(1000);
  }
}

/**
 * ====================================================================
 * 2) DO–WHILE LOOP
 * ====================================================================
 */

let j = 1;
do {
  console.log(`Count: ${j}`);
  j++;
} while (j <= 3);

/**
 * ====================================================================
 * 3) FOR LOOP
 * ====================================================================
 */

for (let k = 1; k <= 5; k++) {
  console.log(k);
}

/**
 * Playwright example — click all items
 */
async function clickAllItems(page: any): Promise<void> {
  const items = page.locator(".item");
  const count = await items.count();

  for (let i = 0; i < count; i++) {
    await items.nth(i).click();
  }
}

/**
 * ====================================================================
 * 4) FOR–OF LOOP (Arrays)
 * ====================================================================
 */

const colors = ["red", "blue", "green"];
for (const color of colors) {
  console.log(color);
}

/**
 * Data-driven testing example
 */
const credentials: [string, string][] = [
  ["admin", "admin123"],
  ["user", "user123"],
];

for (const [username, password] of credentials) {
  console.log(`Testing login with ${username}`);
}

/**
 * ====================================================================
 * 5) FOR–IN LOOP (Objects)
 * ====================================================================
 */

const user = { name: "John", age: 30 };

for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}

/**
 * ====================================================================
 * 6) BREAK AND CONTINUE
 * ====================================================================
 */

for (let n = 1; n <= 5; n++) {
  if (n === 3) continue;
  if (n === 5) break;
  console.log(n);
}

/**
 * ====================================================================
 * PLAYWRIGHT AUTOMATION CONTEXT
 * ====================================================================
 *
 * Create:
 *   playwright-examples/lesson06-loops-basics.spec.ts
 *
 * Common uses:
 * ✔ retry until visible
 * ✔ iterate locators
 * ✔ data-driven testing
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 06
 * ====================================================================
 *
 * 1) Difference between while and do–while?
 * 2) When would you use for vs for-of?
 * 3) What does break do?
 * 4) What causes infinite loops?
 * 5) How are loops used in Playwright retries?
 */

/**
 * ====================================================================
 * LESSON 06 SUMMARY
 * ====================================================================
 *
 * ✔ Loops repeat logic
 * ✔ while → retries
 * ✔ for → known iterations
 * ✔ for-of → arrays
 * ✔ for-in → object keys
 */

/**
 * ====================================================================
 * LESSON 6.1 — Advanced Loops (Retries, Pagination, API Polling)
 * Focus: Retry logic | Pagination | API polling | Nested loops | Parallel
 * ====================================================================
 *
 * Advanced looping patterns are heavily used in Playwright automation to:
 *  ✔ handle flaky UI steps (retry)
 *  ✔ navigate paginated pages (pagination)
 *  ✔ wait for async backend states (API polling)
 *  ✔ process tables/lists safely
 *  ✔ improve speed with parallel execution (Promise.all)
 */

/**
 * ====================================================================
 * TOPICS COVERED
 * ====================================================================
 * 1) Classic for loop (counter loop)
 * 2) for-of vs for-in (values vs keys)
 * 3) break / continue (control flow)
 * 4) Retry loop with try/catch (Playwright-friendly)
 * 5) Pagination loop (navigate pages + validate content)
 * 6) API polling loop (wait for backend state)
 * 7) Safe locator iteration (tables, lists)
 * 8) Nested loops (categories -> items)
 * 9) Async loops: sequential vs parallel (await vs Promise.all)
 * 10) Senior tips + interview questions
 */

/**
 * ====================================================================
 * EXPANDED DEFINITIONS
 * ====================================================================
 *
 * Retry loop:
 * - Repeat an action until it succeeds or max attempts reached.
 * - In automation, UI steps can fail due to timing, slow rendering, or
 *   transient network issues.
 *
 * Pagination loop:
 * - Iterate through page numbers/next buttons to validate items across pages.
 *
 * API polling:
 * - Keep calling an API endpoint until a desired status appears or timeout occurs.
 *
 * Sequential vs parallel:
 * - `await` inside a loop runs tasks one-by-one (safer but slower).
 * - `Promise.all` runs tasks in parallel (faster but must be used carefully).
 */

/**
 * ====================================================================
 * 1) FOR LOOP (Classic Counter Loop)
 * ====================================================================
 */

for (let i = 0; i < 5; i++) {
  console.log(`Index: ${i}`);
}

/**
 * ====================================================================
 * 2) FOR-OF (Values) vs FOR-IN (Keys)
 * ====================================================================
 */

// for-of -> values (best for arrays)
const colors = ["red", "blue", "green"];
for (const color of colors) {
  console.log(color);
}

// for-in -> keys (best for objects)
const user = { name: "John", age: 30 };
for (const key in user) {
  console.log(`${key}: ${user[key as keyof typeof user]}`);
}

/**
 * ====================================================================
 * 3) BREAK & CONTINUE
 * ====================================================================
 */

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // skip 3
  if (i === 5) break;    // stop loop
  console.log(i);
}

/**
 * ====================================================================
 * 4) ADVANCED RETRY LOGIC LOOP (Playwright Pattern)
 * ====================================================================
 *
 * NOTE:
 * In real Playwright code, prefer built-in waiting (`locator.waitFor`,
 * `expect(locator).toBeVisible()`) when possible.
 * Use custom retries only when you need special handling.
 */

type PageLike = {
  click(selector: string): Promise<void>;
  waitForTimeout(ms: number): Promise<void>;
  locator(selector: string): { isVisible(): Promise<boolean>; count(): Promise<number> };
  goto(url: string): Promise<void>;
};

async function retryClick(
  page: PageLike,
  selector: string,
  maxAttempts: number = 5,
  delayMs: number = 500
): Promise<void> {
  let attempts = 0;

  while (attempts < maxAttempts) {
    try {
      await page.click(selector);
      console.log(`Click succeeded: ${selector}`);
      return; // success -> exit
    } catch (error) {
      attempts++;
      console.log(`Retry #${attempts} for ${selector}`);
      await page.waitForTimeout(delayMs);
    }
  }

  throw new Error(`Failed to click ${selector} after ${maxAttempts} attempts`);
}

/**
 * ====================================================================
 * 5) PAGINATION LOOP (Playwright)
 * ====================================================================
 */

async function validatePaginatedPages(
  page: PageLike,
  baseUrl: string,
  maxPages: number = 10
): Promise<void> {
  for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
    await page.goto(`${baseUrl}?page=${pageNum}`);
    console.log(`Loaded Page: ${pageNum}`);

    const count = await page.locator(".product-card").count();
    console.log(`Found ${count} products`);

    // Example check: stop early if no items
    if (count === 0) break;
  }
}

/**
 * ====================================================================
 * 6) API POLLING LOOP (Backend State Check)
 * ====================================================================
 *
 * In real tests, Playwright can do request calls using request.newContext()
 * or you might use an API client. Here we keep it generic.
 */

type ApiLike = {
  get(path: string): Promise<{ data: { state?: string } }>;
};

async function pollStatus(
  api: ApiLike,
  path: string,
  targetState: string,
  maxTries: number = 10,
  delayMs: number = 1000
): Promise<boolean> {
  let tries = 0;

  while (tries < maxTries) {
    const response = await api.get(path);
    const status = response.data.state ?? "unknown";

    console.log(`Status: ${status} (try ${tries + 1}/${maxTries})`);

    if (status === targetState) return true;

    tries++;
    await new Promise((res) => setTimeout(res, delayMs));
  }

  return false;
}

/**
 * ====================================================================
 * 7) LOOPING THROUGH ELEMENTS SAFELY
 * ====================================================================
 */

type LocatorLike = {
  count(): Promise<number>;
  nth(i: number): { innerText(): Promise<string>; click(): Promise<void> };
};

async function logTableRows(rows: LocatorLike): Promise<void> {
  const totalRows = await rows.count();

  for (let i = 0; i < totalRows; i++) {
    const rowText = await rows.nth(i).innerText();
    console.log(rowText);
  }
}

/**
 * ====================================================================
 * 8) NESTED LOOPS (Categories -> Items)
 * ====================================================================
 */

async function checkCategories(page: PageLike): Promise<void> {
  const categories = ["Electronics", "Books", "Toys"];

  for (const category of categories) {
    // Example: click category tab
    await retryClick(page, `text=${category}`, 3, 300);

    const items = page.locator(".item");
    const count = await items.count();

    for (let i = 0; i < count; i++) {
      console.log(`Checking ${category} → Item ${i + 1}`);
      // You could click nth item in real code
      // await page.locator(".item").nth(i).click();
    }
  }
}

/**
 * ====================================================================
 * 9) ASYNC LOOPS — SEQUENTIAL vs PARALLEL
 * ====================================================================
 *
 * Sequential (safe, but slower):
 * for (const url of urls) await page.goto(url);
 *
 * Parallel (fast, but use carefully with shared Page):
 * - If all tasks share ONE page, parallel navigation conflicts.
 * - Parallel is better for independent API calls or multiple pages/contexts.
 */

async function runParallelApiCalls(api: ApiLike, paths: string[]): Promise<void> {
  const tasks = paths.map((p) => api.get(p));
  const responses = await Promise.all(tasks);
  console.log(`Fetched ${responses.length} responses`);
}

/**
 * ====================================================================
 * 10) SENIOR DEVELOPER BEST PRACTICES
 * ====================================================================
 *
 * ✔ Prefer built-in Playwright auto-waiting over manual retries when possible
 * ✔ Always cap retries/polling (max attempts) to avoid infinite loops
 * ✔ Use early breaks to reduce run time (stop when no results)
 * ✔ Keep loops readable — avoid clever one-liners
 * ✔ Understand async behavior: await in loops = sequential
 * ✔ Use Promise.all only when tasks are independent (no shared state)
 */

/**
 * ====================================================================
 * PLAYWRIGHT PROJECT REQUIREMENT
 * ====================================================================
 *
 * Create this spec file:
 *   playwright-examples/lesson07-loops-advanced.spec.ts
 *
 * Put real Playwright code there:
 * - retry click
 * - pagination validation
 * - API polling with request context
 */

/**
 * ====================================================================
 * INTERVIEW QUESTIONS — LESSON 6.1
 * ====================================================================
 *
 * 1) Difference between for, for-of, and for-in?
 * 2) What is an infinite loop? How do you avoid it?
 * 3) How do you implement retry logic safely in automation?
 * 4) Explain pagination looping with an example.
 * 5) What is API polling? When do you use it?
 * 6) How does await affect loops in Playwright?
 * 7) When should Promise.all replace a loop?
 */

/**
 * ====================================================================
 * LESSON 6.1 SUMMARY 
 * ====================================================================
 *
 * ✔ Retry loops handle flaky UI actions
 * ✔ Pagination loops validate lists across pages
 * ✔ API polling waits for backend state
 * ✔ Async loops: sequential vs parallel matters a lot
 */
