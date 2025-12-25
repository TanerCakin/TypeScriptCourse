/*
===========================================================
LESSON 20 — CLASS vs ABSTRACT CLASS vs INTERFACE
TypeScript for Playwright
===========================================================

This lesson explains:
1. What is a Class?
2. What is an Abstract Class?
3. What is an Interface?
4. Key differences
5. When to use which
6. Playwright real-world usage
*/

////////////////////////////////////////////////////////////
// 1) CLASS
////////////////////////////////////////////////////////////
/*
Definition:
A class is a blueprint for creating objects.
It can contain:
- Properties
- Methods with implementation
- Constructors
- Access modifiers
- Static members

A class CAN be instantiated using `new`.
*/

class User {

    constructor(
        public name: string,
        private password: string
    ) {}

    login(): void {
        console.log(this.name + " logged in");
    }
}

let u = new User("John", "secret");
u.login();

////////////////////////////////////////////////////////////
// 2) ABSTRACT CLASS
////////////////////////////////////////////////////////////
/*
Definition:
An abstract class is a base class that CANNOT be instantiated.
It is used to:
- Share common behavior
- Force child classes to implement certain methods

Abstract class can contain:
- Abstract methods (no body)
- Concrete methods (with body)
- Constructors
- Access modifiers
*/

abstract class BasePage {

    constructor(protected page: any) {}

    // abstract method (must be implemented)
    abstract isPageLoaded(): Promise<boolean>;

    // concrete method (shared logic)
    async open(url: string): Promise<void> {
        await this.page.goto(url);
    }
}

// ❌ Not allowed
// new BasePage(page);

////////////////////////////////////////////////////////////
// 3) INTERFACE
////////////////////////////////////////////////////////////
/*
Definition:
An interface defines a CONTRACT (structure).
It contains:
- Property signatures
- Method signatures

Interface:
- Has NO implementation
- Has NO constructor
- Cannot be instantiated
*/

interface LoginContract {
    login(username: string, password: string): Promise<void>;
}

////////////////////////////////////////////////////////////
// 4) USING ABSTRACT CLASS + INTERFACE TOGETHER
////////////////////////////////////////////////////////////

class LoginPage extends BasePage implements LoginContract {

    async isPageLoaded(): Promise<boolean> {
        return await this.page.isVisible("#loginBtn");
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.fill("#username", username);
        await this.page.fill("#password", password);
        await this.page.click("#loginBtn");
    }
}

////////////////////////////////////////////////////////////
// 5) KEY DIFFERENCES (MOST IMPORTANT)
////////////////////////////////////////////////////////////
/*
Feature / Concept
-----------------------------------------------------------
Class
- Can be instantiated
- Has implementation
- Single inheritance
- Can implement interfaces

Abstract Class
- Cannot be instantiated
- Partial implementation
- Single inheritance
- Can implement interfaces

Interface
- Cannot be instantiated
- No implementation
- Multiple inheritance supported
- Implemented by classes
*/

////////////////////////////////////////////////////////////
// 6) COMPARISON TABLE (INTERVIEW GOLD)
////////////////////////////////////////////////////////////
/*
| Feature                     | Class | Abstract Class | Interface |
|----------------------------|-------|----------------|-----------|
| Can be instantiated        |  Yes  |       No       |    No     |
| Has constructor            |  Yes  |      Yes       |    No     |
| Has implementation         |  Yes  |   Partial      |    No     |
| Abstract methods           |  No   |      Yes       |    Yes    |
| Access modifiers           |  Yes  |      Yes       |    No     |
| Multiple inheritance       |  No   |      No        |    Yes    |
| Implements interfaces      |  Yes  |      Yes       |    N/A    |
*/

////////////////////////////////////////////////////////////
// 7) WHEN TO USE WHAT (VERY IMPORTANT)
////////////////////////////////////////////////////////////
/*
Use CLASS when:
✔ You want to create objects
✔ Full implementation is available

Use ABSTRACT CLASS when:
✔ You want shared logic + forced methods
✔ BasePage pattern in Playwright

Use INTERFACE when:
✔ You want a contract only
✔ Multiple inheritance is needed
✔ You want loose coupling
*/

////////////////////////////////////////////////////////////
// 8) PLAYWRIGHT REAL-WORLD DESIGN
////////////////////////////////////////////////////////////
/*
Best Practice:
- Abstract Class → BasePage (shared behavior)
- Interface      → Page contracts
- Class          → Actual page implementation
*/

////////////////////////////////////////////////////////////
// 9) COMMON MISTAKES
////////////////////////////////////////////////////////////

❌ Trying to instantiate abstract class
❌ Expecting interface to have implementation
❌ Using class instead of interface for contracts
❌ Using interface when shared logic is required


////////////////////////////////////////////////////////////
// 10) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////

1) Difference between class and interface?
2) Abstract class vs interface?
3) Can abstract class have constructor?
4) Why Playwright uses abstract base classes?
5) Can a class extend abstract class and implement interface?
*/

////////////////////////////////////////////////////////////
// END OF LESSON 20
////////////////////////////////////////////////////////////
