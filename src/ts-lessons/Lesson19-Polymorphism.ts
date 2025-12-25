/*
===========================================================
LESSON 19 — POLYMORPHISM IN TYPESCRIPT
TypeScript for Playwright
===========================================================

TOPICS COVERED
-----------------------------------------------------------
1. What is Polymorphism?
2. Types of Polymorphism
3. Method Overriding (Runtime Polymorphism)
4. Parent Reference → Child Object
5. Polymorphism with Abstract Classes
6. Polymorphism with Interfaces
7. Polymorphism in Playwright
8. Rules, Best Practices & Interview Questions


////////////////////////////////////////////////////////////
// 1) WHAT IS POLYMORPHISM?
////////////////////////////////////////////////////////////

Definition:
Polymorphism means "many forms".

In OOP:
- Same method name
- Different behavior
- Based on object type at runtime

Key idea:
One parent reference can refer to different child objects.


////////////////////////////////////////////////////////////
// 2) TYPES OF POLYMORPHISM
////////////////////////////////////////////////////////////

1) Compile-time Polymorphism
   - Method overloading
   - Decided at compile time

2) Runtime Polymorphism
   - Method overriding
   - Decided at runtime (MOST IMPORTANT)


////////////////////////////////////////////////////////////
// 3) METHOD OVERRIDING (RUNTIME POLYMORPHISM)
////////////////////////////////////////////////////////////

class Animal {

    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    makeSound(): void {
        console.log("Dog barks");
    }
}

class Cat extends Animal {

    makeSound(): void {
        console.log("Cat meows");
    }
}

////////////////////////////////////////////////////////////
// 4) PARENT REFERENCE → CHILD OBJECT
////////////////////////////////////////////////////////////

IMPORTANT RULE:
- Reference type decides what can be accessed
- Object type decides which implementation runs


let a1: Animal = new Dog();
let a2: Animal = new Cat();

a1.makeSound(); // Dog barks
a2.makeSound(); // Cat meows

////////////////////////////////////////////////////////////
// 5) WHAT CANNOT BE DONE (IMPORTANT)
////////////////////////////////////////////////////////////

class Bird extends Animal {
    fly(): void {
        console.log("Bird flies");
    }
}

let a3: Animal = new Bird();

// a3.fly(); // ❌ ERROR — parent reference cannot access child-only methods

////////////////////////////////////////////////////////////
// 6) POLYMORPHISM WITH ABSTRACT CLASSES
////////////////////////////////////////////////////////////

abstract class Shape {

    abstract area(): number;

    display(): void {
        console.log("Calculating area");
    }
}

class Circle extends Shape {

    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {

    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

let shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(s => {
    s.display();
    console.log(s.area());
});

////////////////////////////////////////////////////////////
// 7) POLYMORPHISM WITH INTERFACES
////////////////////////////////////////////////////////////

interface Payment {
    pay(amount: number): void;
}

class CreditCardPayment implements Payment {
    pay(amount: number): void {
        console.log("Paid", amount, "using Credit Card");
    }
}

class PaypalPayment implements Payment {
    pay(amount: number): void {
        console.log("Paid", amount, "using PayPal");
    }
}

let payments: Payment[] = [
    new CreditCardPayment(),
    new PaypalPayment()
];

payments.forEach(p => p.pay(100));

////////////////////////////////////////////////////////////
// 8) POLYMORPHISM IN PLAYWRIGHT (REAL USE CASE)
////////////////////////////////////////////////////////////

Different pages share same base behavior,
but implement page-specific logic.


abstract class BasePage {

    constructor(protected page: any) {}

    abstract isPageLoaded(): Promise<boolean>;

    async open(url: string): Promise<void> {
        await this.page.goto(url);
    }
}

class LoginPage extends BasePage {

    async isPageLoaded(): Promise<boolean> {
        return await this.page.isVisible("#loginBtn");
    }
}

class DashboardPage extends BasePage {

    async isPageLoaded(): Promise<boolean> {
        return await this.page.isVisible("#dashboard");
    }
}

async function verifyPage(pageObj: BasePage) {
    if (await pageObj.isPageLoaded()) {
        console.log("Page loaded");
    }
}

////////////////////////////////////////////////////////////
// 9) RULES & BEST PRACTICES (INTERVIEW GOLD)
////////////////////////////////////////////////////////////
/*
✔ Use parent reference for flexibility
✔ Override methods for custom behavior
✔ Avoid casting unless absolutely necessary
✔ Prefer interfaces / abstract classes
✔ Use polymorphism to reduce if-else chains
*/

////////////////////////////////////////////////////////////
// 10) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////
/*
1) What is polymorphism?
2) Difference between compile-time and runtime polymorphism?
3) What is method overriding?
4) Parent reference vs child object?
5) Why polymorphism is important in Playwright?
*/

////////////////////////////////////////////////////////////
// END OF LESSON 19
////////////////////////////////////////////////////////////
