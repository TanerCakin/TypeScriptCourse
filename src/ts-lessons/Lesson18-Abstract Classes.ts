/*
===========================================================
LESSON 18 — ABSTRACT CLASSES IN TYPESCRIPT
TypeScript for Playwright
===========================================================

TOPICS COVERED
-----------------------------------------------------------
1. What is an abstract class?
2. Abstract methods
3. Concrete (implemented) methods
4. Abstract vs Interface
5. Abstract class with inheritance
6. Abstract classes in Playwright
7. Rules & best practices
*/

////////////////////////////////////////////////////////////
// 1) WHAT IS AN ABSTRACT CLASS?
////////////////////////////////////////////////////////////
/*
Definition:
An abstract class is a class that CANNOT be instantiated.
It is used as a BASE class for other classes.

Purpose:
- Provide common behavior
- Enforce method implementation in child classes
*/

abstract class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Abstract method (no implementation)
    abstract sound(): void;

    // Concrete method (with implementation)
    move(): void {
        console.log(this.name + " is moving");
    }
}

// ❌ Not allowed
// let a = new Animal("Test");

////////////////////////////////////////////////////////////
// 2) ABSTRACT METHOD
////////////////////////////////////////////////////////////
/*
Definition:
An abstract method:
- Has NO body
- Must be implemented by child classes
*/

class Dog extends Animal {

    constructor(name: string) {
        super(name);
    }

    sound(): void {
        console.log("Bark...");
    }
}

let d = new Dog("Buddy");
d.sound();
d.move();

////////////////////////////////////////////////////////////
// 3) ABSTRACT CLASS WITH MULTIPLE CHILD CLASSES
////////////////////////////////////////////////////////////

class Cat extends Animal {

    constructor(name: string) {
        super(name);
    }

    sound(): void {
        console.log("Meow...");
    }
}

////////////////////////////////////////////////////////////
// 4) ABSTRACT CLASS vs INTERFACE
////////////////////////////////////////////////////////////
/*
Abstract Class:
- Can have implementation
- Can have constructors
- Supports access modifiers
- Supports static members

Interface:
- No implementation
- No constructors
- No access modifiers
- No static enforcement
*/

////////////////////////////////////////////////////////////
// 5) ABSTRACT CLASS + INHERITANCE RULES
////////////////////////////////////////////////////////////
/*
RULES:
1) Abstract class cannot be instantiated
2) Child must implement ALL abstract methods
3) Child can override concrete methods (optional)
4) super() must be called in child constructor
*/

////////////////////////////////////////////////////////////
// 6) ABSTRACT CLASS IN PLAYWRIGHT (REAL USE CASE)
////////////////////////////////////////////////////////////
/*
BasePage defines common behavior.
Child pages implement page-specific logic.
*/

abstract class BasePage {

    protected page: any;

    constructor(page: any) {
        this.page = page;
    }

    // Concrete method
    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    // Abstract method (must be implemented)
    abstract isPageLoaded(): Promise<boolean>;
}

class LoginPage extends BasePage {

    constructor(page: any) {
        super(page);
    }

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
// 7) ABSTRACT CLASS vs CLASS + INTERFACE
////////////////////////////////////////////////////////////
/*
Use abstract class when:
✔ You need shared implementation
✔ You want to force method implementation
✔ You want constructors & access modifiers

Use interface when:
✔ You only need structure
✔ You want multiple inheritance
*/

////////////////////////////////////////////////////////////
// 8) COMMON MISTAKES
////////////////////////////////////////////////////////////
/*
❌ Trying to create object of abstract class
❌ Forgetting to implement abstract methods
❌ Using abstract keyword without inheritance
*/

////////////////////////////////////////////////////////////
// 9) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////
/*
1) What is an abstract class?
2) Difference between abstract class and interface?
3) Can abstract class have constructors?
4) Can abstract class have implemented methods?
5) Why abstract classes are used in Playwright?
*/

////////////////////////////////////////////////////////////
// END OF LESSON 18
////////////////////////////////////////////////////////////
