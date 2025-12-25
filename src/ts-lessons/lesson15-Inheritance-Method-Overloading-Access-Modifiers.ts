/*
===========================================================
LESSON 15 — INHERITANCE | METHOD OVERLOADING | ACCESS MODIFIERS
TypeScript for Playwright
===========================================================

TOPICS COVERED
-----------------------------------------------------------
1. Method Overloading
2. Constructor vs Method Overloading
3. Inheritance
4. super() keyword
5. Access Modifiers
6. Parent & Child Constructor Relationship


////////////////////////////////////////////////////////////
// 1) METHOD OVERLOADING
////////////////////////////////////////////////////////////

Definition:
Method overloading allows defining multiple method signatures
with the same method name but different parameters.

RULE:
- Only ONE method implementation is allowed
- Multiple method signatures are allowed


class MathUtil {

    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {
        if (c !== undefined) {
            return a + b + c;
        }
        return a + b;
    }
}

let mu = new MathUtil();
console.log(mu.add(10, 20));
console.log(mu.add(10, 20, 30));

////////////////////////////////////////////////////////////
// 2) CONSTRUCTOR vs METHOD OVERLOADING
////////////////////////////////////////////////////////////

Constructor Overloading:
- Controls how an object is created
- Uses constructor signatures

Method Overloading:
- Controls how a method behaves
- Uses method signatures


////////////////////////////////////////////////////////////
// 3) INHERITANCE
////////////////////////////////////////////////////////////

Definition:
Inheritance allows a class (child) to reuse properties and
methods of another class (parent).

Parent class → Base / Super class
Child class  → Derived / Sub class


class Animal {

    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

////////////////////////////////////////////////////////////
// 4) EXTENDS KEYWORD
////////////////////////////////////////////////////////////

class Dog extends Animal {

    constructor(name: string) {
        super(name); // calling parent constructor
    }

    ////////////////////////////////////////////////////////
    // 5) METHOD OVERRIDING
    ////////////////////////////////////////////////////////
   
    Definition:
    Child class provides its own implementation
    of a parent class method.
  

    makeSound(): void {
        console.log(this.name + " barks");
    }
}

let dog = new Dog("Buddy");
dog.makeSound();

////////////////////////////////////////////////////////////
// 6) SUPER() KEYWORD
////////////////////////////////////////////////////////////

Definition:
super() is used to:
- Call parent class constructor
- Access parent class methods

RULE:
- super() must be the FIRST statement in child constructor


////////////////////////////////////////////////////////////
// 7) ACCESS MODIFIERS
////////////////////////////////////////////////////////////

public    → accessible everywhere (default)
protected → accessible in same class & child classes
private   → accessible only inside same class


class Person {

    public firstName: string;
    protected age: number;
    private ssn: string;

    constructor(firstName: string, age: number, ssn: string) {
        this.firstName = firstName;
        this.age = age;
        this.ssn = ssn;
    }

    getSSN(): string {
        return this.ssn; // allowed
    }
}

class Employee extends Person {

    constructor(name: string, age: number, ssn: string) {
        super(name, age, ssn);
    }

    showDetails(): void {
        console.log(this.firstName); // public → allowed
        console.log(this.age);       // protected → allowed
        // console.log(this.ssn);    // ❌ private → not allowed
    }
}

////////////////////////////////////////////////////////////
// 8) PARENT & CHILD CONSTRUCTOR RELATIONSHIP
////////////////////////////////////////////////////////////

RULES:
1) Parent constructor runs FIRST
2) Child constructor must call super()
3) Child cannot access parent private members


let emp = new Employee("John", 30, "123-45-6789");
emp.showDetails();

////////////////////////////////////////////////////////////
// 9) INHERITANCE IN PLAYWRIGHT (REAL USE CASE)
////////////////////////////////////////////////////////////

BasePage → shared logic
LoginPage → specific page logic


class BasePage {
    protected page: any;

    constructor(page: any) {
        this.page = page;
    }
}

class LoginPage extends BasePage {

    constructor(page: any) {
        super(page);
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.fill("#username", username);
        await this.page.fill("#password", password);
        await this.page.click("#loginBtn");
    }
}

////////////////////////////////////////////////////////////
🔹 Method Overloading
No parent–child relationship
Occurs in the same class

Samemethod name
Different parameters (number or type)
Improves flexibility
One implementation in TypeScript (with multiple signatures)

🔹 Method Overriding
Parent–child relationship required
Inheritance (extends) is mandatory
Same method name
Same method signature
Child class replaces parent implementation(child uses own implementation not parent's)
Enables runtime polymorphism

////////////////////////////////////////////////////////////
// 10) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////

1) Difference between method overloading and overriding?
2) Constructor vs method overloading?
3) What is inheritance?
4) What is super()?
5) Access modifiers difference?
6) Can child access parent private members?
7) Parent-child constructor execution order?


////////////////////////////////////////////////////////////
// END OF LESSON 15
////////////////////////////////////////////////////////////

IMPORTANT
If I create an object of a child class and store it in a parent class variable,
can I access child class methods using the parent reference?

NO — you cannot access child-specific members using a parent class reference.

...............
class Parent {
    show(): void {
        console.log("Parent show");
    }
}
...............
class Child extends Parent {
    display(): void {
        console.log("Child display");
    }

    show(): void {
        console.log("Child show");
    }
}
..................
Child object stored in Parent reference
let p: Parent = new Child();
✔ Object is Child
✔ Reference type is Parent

..................
Accessing child-only method
p.display(); // ❌ ERROR

❌ Why?
Because:
The reference type is Parent
Parent does NOT know about display() - it is only exist in child class not parent
👉 Compile-time checking is done using the reference type.

..................
✅ Accessing overridden method
p.show(); // ✅ Child show

✅ Why does this work?

Because:

show() exists in Parent
Child overrides it
Runtime polymorphism decides which method runs

👉 Method call depends on actual object, not reference.
🔥 This is called POLYMORPHISM
One reference, many behaviors

Inheritance always goes from Parent → Child
Never from Child → Parent

What this means
✅ Parent → Child
Child inherits:
Parent properties
Parent methods

Child can:
Use them
Override them
Extend them

❌ Child → Parent (NOT possible)

Parent does NOT inherit:
Child properties
Child methods
Parent does NOT know child exists



===========================================================
SUPER KEYWORD IN TYPESCRIPT — ALL USAGES
===========================================================

DEFINITION
-----------------------------------------------------------
The `super` keyword is used to refer to the immediate parent
class in inheritance.

It is used to:
1) Call the parent class constructor
2) Call parent class methods
3) Access parent class properties (protected / public)


////////////////////////////////////////////////////////////
// 1) USING super() TO CALL PARENT CONSTRUCTOR
////////////////////////////////////////////////////////////

Rule:
- super() must be the FIRST statement in the child constructor
- Required if parent has a constructor


class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Child extends Parent {

    constructor(name: string) {
        super(name); // calls Parent constructor
    }
}

let c = new Child("John");

////////////////////////////////////////////////////////////
// 2) USING super.method() TO CALL PARENT METHOD
////////////////////////////////////////////////////////////

Definition:
Used when child overrides a method but still wants
to reuse parent method logic.


class Animal {

    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    makeSound(): void {
        super.makeSound(); // calls parent method
        console.log("Dog barks");
    }
}

let d = new Dog();
d.makeSound();

////////////////////////////////////////////////////////////
// 3) USING super TO ACCESS PARENT PROPERTIES
////////////////////////////////////////////////////////////

Rule:
- Parent property must be public or protected
- private properties are NOT accessible


class Vehicle {

    protected speed: number = 60;
}

class Car extends Vehicle {

    showSpeed(): void {
        console.log("Speed:", super.speed);
    }
}

let car = new Car();
car.showSpeed();

////////////////////////////////////////////////////////////
// 4) super IN METHOD OVERRIDING
////////////////////////////////////////////////////////////

Used when:
- Parent method is overridden
- Child wants to extend (not replace) behavior


class BasePage {

    open(): void {
        console.log("Opening base page");
    }
}

class LoginPage extends BasePage {

    open(): void {
        super.open(); // reuse base logic
        console.log("Opening login page");
    }
}

let page = new LoginPage();
page.open();

////////////////////////////////////////////////////////////
// 5) WHAT super CANNOT DO
////////////////////////////////////////////////////////////

❌ Cannot access private parent members
❌ Cannot be used without inheritance
❌ Cannot be used in static context to access instance members


////////////////////////////////////////////////////////////
// 6) super VS this (IMPORTANT)
////////////////////////////////////////////////////////////

this  → refers to current object (child)
super → refers to parent class


////////////////////////////////////////////////////////////
// 7) super IN PLAYWRIGHT (REAL USE CASE)
////////////////////////////////////////////////////////////

BasePage → common logic
LoginPage → page-specific logic


class BasePagePW {
    protected page: any;

    constructor(page: any) {
        this.page = page;
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }
}

class LoginPagePW extends BasePagePW {

    constructor(page: any) {
        super(page);
    }

    async openLogin(): Promise<void> {
        await super.navigate("/login");
    }
}

////////////////////////////////////////////////////////////
// 8) INTERVIEW ONE-LINERS
////////////////////////////////////////////////////////////

1) super() is used to call the parent constructor
2) super.method() is used to call parent methods
3) super accesses immediate parent only
4) super must be first statement in child constructor
5) super cannot access private members
// super CAN be used to access parent class properties
// ONLY if they are public or protected.
// super CANNOT access private parent properties.



| Usage              | Purpose                 |
| ------------------ | ----------------------- |
| `super()`          | Call parent constructor |
| `super.method()`   | Call parent method      |
| `super.property`   | Access parent property  |
| `super` + override | Extend parent behavior  |

*/
////////////////////////////////////////////////////////////
// END
////////////////////////////////////////////////////////////
