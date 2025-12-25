/*
Why we need a class, why we create a class is to create an object.
Class        → Blueprint for objects
Constructor  → Initializes object
Method       → Function inside class/object
Function     → Standalone reusable block
new          → Creates object from class
this         → Refers to current instance
static means “belongs to the class, not to objects.”
                    Created once
                    Shared by all instances
                    Accessed using the class name

                    Why do we need static?
                        Without static, every object gets its own copy of properties and methods.
                        With static, there is only one shared copy


===========================================================
LESSON 14 — CLASSES IN TYPESCRIPT
TypeScript for Playwright | Class | Property Types | Methods
===========================================================

TOPICS COVERED
-----------------------------------------------------------
1. Class
2. Readonly properties
3. Optional properties
4. Static variables and methods


////////////////////////////////////////////////////////////
// 1) CLASS — BASIC DEFINITION
////////////////////////////////////////////////////////////

Definition:
A class is a blueprint for creating objects.
It groups properties (data) and methods (behavior).


class Student {

    ////////////////////////////////////////////////////////
    // 2) PROPERTIES
    ////////////////////////////////////////////////////////

    // Readonly property
    // Can be assigned only once (inside constructor)
    readonly studentId: number;

    // Regular property
    name: string;

    // Optional property
    email?: string;

    ////////////////////////////////////////////////////////
    // 3) CONSTRUCTOR
    ////////////////////////////////////////////////////////
  
    Constructor:
    - Called automatically when an object is created
    - Used to initialize properties
  

    constructor(sid: number, sname: string, email?: string) {
        this.studentId = sid;
        this.name = sname;
        this.email = email; // If not passed, it remains undefined
    }

    ////////////////////////////////////////////////////////
    // 4) INSTANCE METHOD
    ////////////////////////////////////////////////////////

    Instance Method:
    - Belongs to the object
    - Accesses properties using `this`


    displayInfo(): void {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);

        if (this.email) {
            console.log("Email:", this.email);
        } else {
            console.log("Email is not provided");
        }
    }

    ////////////////////////////////////////////////////////
    // 5) STATIC PROPERTY
    ////////////////////////////////////////////////////////
 
    Static Property:
    - Belongs to the class itself
    - Shared by all objects
    1) Static properties/methods are common (shared) across all objects
    2) Static properties/methods are accessed using the CLASS NAME
    3) Static properties/methods CANNOT be accessed using object instances


    static schoolName: string = "Global High School";

    ////////////////////////////////////////////////////////
    // 6) STATIC METHOD
    ////////////////////////////////////////////////////////

    Static Method:
    - Called using class name
    - Cannot access instance properties directly


    static displaySchoolName(): void {
        console.log("School Name:", Student.schoolName);
    }
}

////////////////////////////////////////////////////////////
// 7) OBJECT CREATION
////////////////////////////////////////////////////////////

let student1 = new Student(101, "Scott", "scott@mail.com");
let student2 = new Student(102, "John"); // email not provided

student1.displayInfo();
student2.displayInfo();

////////////////////////////////////////////////////////////
// 8) ACCESSING STATIC MEMBERS
////////////////////////////////////////////////////////////

Student.displaySchoolName();

// Student.schoolName = "New School"; // Allowed (static)
// student1.studentId = 200; // ❌ Error (readonly)

////////////////////////////////////////////////////////////
// 9) SUMMARY (IMPORTANT INTERVIEW POINTS)
////////////////////////////////////////////////////////////


✔ readonly → value cannot be changed after construction
✔ optional (?) → property may be undefined
✔ static → belongs to class, not object
✔ constructor initializes object state
✔ instance methods use `this`


////////////////////////////////////////////////////////////
// 10) CLASSES IN PLAYWRIGHT (REAL USE CASE)
////////////////////////////////////////////////////////////

Classes are used heavily in Playwright Page Object Model (POM)


class LoginPage {

    async login(page: any, username: string, password: string): Promise<void> {
        await page.fill("#username", username);
        await page.fill("#password", password);
        await page.click("#loginBtn");
    }
}

////////////////////////////////////////////////////////////
// 11) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////


1) What is a class in TypeScript?
2) Difference between readonly and regular property?
3) What is an optional property?
4) What are static variables and methods?
5) Can static methods access instance variables?
6) How are classes used in Playwright?


===========================================================
CONSTRUCTOR OVERLOADING — NOTES (TYPESCRIPT)
===========================================================

DEFINITION
-----------------------------------------------------------
Constructor overloading allows creating objects in multiple
ways using different parameter lists.

TypeScript does NOT allow multiple constructor implementations.
Instead, it supports constructor overloading using:
1) Multiple constructor signatures
2) A single constructor implementation

-----------------------------------------------------------
RULES
-----------------------------------------------------------
1) Only ONE constructor implementation is allowed
2) Multiple constructor signatures are allowed
3) Signatures must appear before the implementation
4) Implementation must handle all cases
5) Optional parameters (?) are commonly used

-----------------------------------------------------------
SYNTAX
-----------------------------------------------------------

class Example {

    constructor();                    // signature 1
    constructor(a: number, b: number); // signature 2

    constructor(a?: number, b?: number) {
        // implementation
    }
}

-----------------------------------------------------------
EXAMPLE
-----------------------------------------------------------

class Calculator {

    constructor();
    constructor(a: number, b: number);

    constructor(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log("Sum:", a + b);
        } else {
            console.log("Default constructor called");
        }
    }
}

new Calculator();
new Calculator(10, 20);

-----------------------------------------------------------
WHY OPTIONAL PARAMETERS (?)
-----------------------------------------------------------
Optional parameters allow the constructor to support
both default and parameterized creation.

-----------------------------------------------------------
WHAT IS NOT ALLOWED
-----------------------------------------------------------

❌ Multiple constructor bodies
❌ Multiple constructor implementations

-----------------------------------------------------------
INTERVIEW ONE-LINER
-----------------------------------------------------------
TypeScript supports constructor overloading using multiple
constructor signatures with a single implementation that
handles all cases using optional parameters.

===========================================================
END
===========================================================


////////////////////////////////////////////////////////////
// END OF LESSON 14
////////////////////////////////////////////////////////////



*/