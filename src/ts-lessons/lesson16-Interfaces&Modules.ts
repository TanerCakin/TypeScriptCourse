/*
===========================================================
LESSON 16 — INTERFACES & MODULES IN TYPESCRIPT
TypeScript for Playwright
===========================================================

TOPICS COVERED
-----------------------------------------------------------
1. Interface
2. Optional & Readonly properties
3. Function type interface
4. Interface vs Type
5. Interface inheritance (extends)
6. implements keyword
7. Modules (export / import)
8. Modules in Playwright
*/

////////////////////////////////////////////////////////////
// 1) INTERFACE — BASIC
////////////////////////////////////////////////////////////
/*
Definition:
An interface defines the structure (shape) of an object.
It enforces a contract that an object must follow.
*/

interface User {
    id: number;
    name: string;
}

let user1: User = {
    id: 1,
    name: "John"
};

////////////////////////////////////////////////////////////
// 2) OPTIONAL & READONLY PROPERTIES
////////////////////////////////////////////////////////////
/*
optional (?) → property may or may not exist
readonly     → property cannot be modified after initialization
*/

interface Config {
    readonly baseUrl: string;
    timeout?: number;
}

let config: Config = {
    baseUrl: "https://example.com"
};

// config.baseUrl = "test"; // ❌ Error

////////////////////////////////////////////////////////////
// 3) FUNCTION TYPE INTERFACE
////////////////////////////////////////////////////////////
/*
Definition:
An interface can describe the signature of a function.
*/

interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn = (x, y) => x + y;
console.log(add(10, 20));

////////////////////////////////////////////////////////////
// 4) INTERFACE VS TYPE (KEY DIFFERENCE)
////////////////////////////////////////////////////////////
/*
interface:
- Used mainly for object shapes
- Can be extended
- Can be merged (declaration merging)

type:
- More flexible
- Supports unions, intersections
*/

////////////////////////////////////////////////////////////
// 5) INTERFACE INHERITANCE (extends)
////////////////////////////////////////////////////////////
/*
Definition:
An interface can inherit from another interface.
*/

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    empId: number;
}

let emp: Employee = {
    name: "Alex",
    age: 30,
    empId: 101
};

////////////////////////////////////////////////////////////
// 6) IMPLEMENTS KEYWORD (CLASS + INTERFACE)
////////////////////////////////////////////////////////////
/*
Definition:
A class uses `implements` to follow an interface contract.
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
// 7) MODULES — EXPORT & IMPORT
////////////////////////////////////////////////////////////
/*
Definition:
Modules allow code to be split across files.
export → makes code available
import → uses exported code
*/

// ---- utils.ts ----
export function greet(name: string): string {
    return `Hello ${name}`;
}

// ---- main.ts ----
// import { greet } from "./utils";
// console.log(greet("John"));

////////////////////////////////////////////////////////////
// 8) DEFAULT EXPORT
////////////////////////////////////////////////////////////
/*
Only one default export per file.
*/

export default class Logger {
    log(message: string): void {
        console.log(message);
    }
}

// import Logger from "./Logger";

////////////////////////////////////////////////////////////
// 9) MODULES IN PLAYWRIGHT (REAL USE CASE)
////////////////////////////////////////////////////////////
/*
- Page Objects → separate files
- Utilities → separate modules
- Interfaces → shared contracts
*/

// pages/LoginPage.ts
export interface LoginPageInterface {
    login(username: string, password: string): Promise<void>;
}

// pages/LoginPageImpl.ts
export class LoginPageImpl implements LoginPageInterface {
    async login(username: string, password: string): Promise<void> {
        console.log("Playwright login");
    }
}

////////////////////////////////////////////////////////////
// 10) BEST PRACTICES (SENIOR LEVEL)
////////////////////////////////////////////////////////////
/*
✔ Use interfaces for object shapes
✔ Use interfaces for Page Object contracts
✔ Use modules to split test code
✔ Prefer named exports for utilities
✔ Use default exports for main classes
*/

////////////////////////////////////////////////////////////
// 11) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////
/*
1) What is an interface?
2) Interface vs type?
3) Can a class implement multiple interfaces?
4) What is implements keyword?
5) What is module in TypeScript?
6) Difference between export and export default?
7) How are interfaces used in Playwright?


| Feature              | **Class**                                           | **Interface**                                                      |
| -------------------- | --------------------------------------------------- | ------------------------------------------------------------------ |
| **Definition**       | Blueprint to create objects **with implementation** | Defines **structure/type** of an object **without implementation** |
| **Contains**         | Properties, **constructors**, methods (with logic)  | Only property & method **signatures**                              |
| **Instantiation**    | Can be instantiated using `new`                     | ❌ Cannot be instantiated                                           |
| **Inheritance**      | Supports **single inheritance** using `extends`     | Supports **multiple inheritance** using `implements`                  |
| **Implements**       | A class can implement one or more interfaces        | Interface **cannot implement** a class                             |
| **Access Modifiers** | Supports `public`, `protected`, `private`           | ❌ Does NOT support access modifiers                                |



*/

////////////////////////////////////////////////////////////
// END OF LESSON 16
////////////////////////////////////////////////////////////
