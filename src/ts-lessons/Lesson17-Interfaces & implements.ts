/*
===========================================================
LESSON 17 — INTERFACES & IMPLEMENTS IN TYPESCRIPT
TypeScript for Playwright
===========================================================

TOPICS COVERED
-----------------------------------------------------------
1. What is an Interface?
2. implements keyword
3. Multiple interfaces
4. Interface inheritance (extends)
5. Interface vs Class vs implements
6. Interfaces in Playwright
7. Best practices
*/

////////////////////////////////////////////////////////////
// 1) WHAT IS AN INTERFACE?
////////////////////////////////////////////////////////////
/*
Definition:
An interface defines a CONTRACT (structure) that a class
or object must follow.

- No implementation
- Only property and method signatures
- Used for type safety
*/

interface User {
    id: number;
    name: string;
}

let u1: User = {
    id: 1,
    name: "John"
};

////////////////////////////////////////////////////////////
// 2) IMPLEMENTS KEYWORD
////////////////////////////////////////////////////////////
/*
Definition:
The `implements` keyword is used by a class to follow
the rules defined by an interface.

- Class MUST implement all interface members
- Provides actual implementation
*/

interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void {
        console.log("Bark...");
    }
}

let d = new Dog("Buddy");
d.sound();

////////////////////////////////////////////////////////////
// 3) MULTIPLE INTERFACES (ALLOWED)
////////////////////////////////////////////////////////////
/*
A class can implement MULTIPLE interfaces.
*/

interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

class Duck implements Flyable, Swimmable {

    fly(): void {
        console.log("Duck flies");
    }

    swim(): void {
        console.log("Duck swims");
    }
}

////////////////////////////////////////////////////////////
// 4) INTERFACE INHERITANCE (extends)
////////////////////////////////////////////////////////////
/*
An interface can extend one or more interfaces.
*/

interface Living {
    alive: boolean;
}

interface Mammal extends Living {
    hasFur: boolean;
}

let dogInfo: Mammal = {
    alive: true,
    hasFur: true
};

////////////////////////////////////////////////////////////
// 5) INTERFACE vs CLASS vs IMPLEMENTS
////////////////////////////////////////////////////////////
/*
Class:
- Blueprint with implementation
- Can be instantiated

Interface:
- Contract / structure only
- Cannot be instantiated

implements:
- Used by class to follow interface contract
*/

////////////////////////////////////////////////////////////
// 6) INTERFACES IN PLAYWRIGHT (REAL USE CASE)
////////////////////////////////////////////////////////////
/*
Interfaces are used to define Page Object contracts.
*/

interface LoginPageContract {
    login(username: string, password: string): Promise<void>;
}

class LoginPage implements LoginPageContract {

    async login(username: string, password: string): Promise<void> {
        console.log("Logging in:", username);
    }
}

////////////////////////////////////////////////////////////
// 7) IMPORTANT RULES (INTERVIEW GOLD)
////////////////////////////////////////////////////////////
/*
✔ Interface has no implementation
✔ Class must implement ALL interface members
✔ Interfaces support multiple inheritance
✔ Classes support implementing multiple interfaces
✔ Interfaces do NOT enforce static members
*/

////////////////////////////////////////////////////////////
// 8) COMMON MISTAKES
////////////////////////////////////////////////////////////
/*
❌ Missing interface method in class
❌ Using access modifiers in interface
❌ Expecting interface to enforce static methods
*/

////////////////////////////////////////////////////////////
// 9) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////
/*
1) What is an interface?
2) What does implements do?
3) Can a class implement multiple interfaces?
4) Can an interface extend another interface?
5) Why interfaces are used in Playwright?
6) Interface vs abstract class?
*/

////////////////////////////////////////////////////////////
// END OF LESSON 17
////////////////////////////////////////////////////////////
