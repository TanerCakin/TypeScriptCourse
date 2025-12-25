/**
 * ===========================================================
 * LESSON 13 — OBJECTS IN TYPESCRIPT (FINAL)
 * Focus: Objects | Interfaces | Classes | Playwright POM
 * ===========================================================
 *
 * CORE CONCEPT:
 * -----------------------------------------------------------
 * Class     → Blueprint / Şablon
 * Instance  → Concrete object created from a class
 * new       → Creates an instance
 *
 * One class → Many instances
 *
 * Java example:
 *   Car car1 = new Car("Toyota");
 *   Car car2 = new Car("BMW");
 *
 * TypeScript example:
 *   const car1 = new Car("Toyota");
 *   const car2 = new Car("BMW");
 */

/* ===========================================================
   WHAT IS AN OBJECT?
=========================================================== */
/**
 * An object is:
 * - A collection of key–value pairs
 * - Keys → properties
 * - Values → data or methods
 *
 * Objects are the foundation of:
 * - OOP
 * - Page Object Model (Playwright)
 * - API responses
 * - Config & test data
 */

/* ===========================================================
   TOPICS COVERED
=========================================================== *
 * 1) Object literal
 * 2) Inline object types
 * 3) Type aliases
 * 4) Intersection types
 * 5) Interfaces
 * 6) Classes & instances
 * 7) Constructor functions (legacy JS)
 * 8) Object.create()
 * 9) Methods & `this`
 * 10) Dot vs bracket access
 * 11) Optional & readonly props
 * 12) Nested objects
 * 13) Destructuring
 * 14) Spread operator
 * 15) Short method syntax
 * 16) Playwright usage patterns
 */

/* ===========================================================
   1) OBJECT LITERAL (MOST COMMON)
=========================================================== */

const user = {
  id: 1,
  name: "John",
  isActive: true,
};

console.log(user.name);

/* ===========================================================
   2) INLINE OBJECT TYPE (NOT REUSABLE)
=========================================================== */

const student: {
  name: string;
  age: number;
  grade: string;
  getSummary: () => string;
} = {
  name: "Scott",
  age: 15,
  grade: "A",
  getSummary() {
    return `${this.name} is ${this.age} years old (Grade ${this.grade})`;
  },
};

console.log(student.getSummary());

/* ===========================================================
   3) TYPE ALIAS (REUSABLE OBJECT SHAPE)
=========================================================== */

type Product = {
  name: string;
  price: number;
  getInfo(): string;
};

const book1: Product = {
  name: "Learn Java",
  price: 300,
  getInfo() {
    return `${this.name} costs ${this.price}`;
  },
};

/* ===========================================================
   4) INTERSECTION TYPES (ADVANCED)
=========================================================== */

type Personal = { name: string; age: number };
type Contact = { email: string; phone: number };

type Candidate = Personal &
  Contact & {
    getContactInfo(): string;
  };

const candidate: Candidate = {
  name: "John",
  age: 25,
  email: "john@example.com",
  phone: 9876543210,
  getContactInfo() {
    return `${this.name} | ${this.email}`;
  },
};

/* ===========================================================
   5) INTERFACE (PREFERRED FOR OBJECT SHAPES)
=========================================================== */

interface Person {
  id: number;
  name: string;
  age?: number; // optional
}

const person: Person = {
  id: 1,
  name: "Mike",
};

/* ===========================================================
   6) CLASS (PREFERRED FOR POM)
=========================================================== */

class UserAccount {
  constructor(
    private ssn: string,
    public firstName: string,
    public lastName: string
  ) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user1 = new UserAccount("111222333", "John", "Doe");
console.log(user1.getFullName());

/* ===========================================================
   7) CONSTRUCTOR FUNCTION (LEGACY JS)
=========================================================== */

function ProductCtor(this: any, id: number, name: string) {
  this.id = id;
  this.name = name;
}

const legacyProduct = new (ProductCtor as any)(1, "Laptop");

/* ===========================================================
   8) Object.create()
=========================================================== */

const baseUser = { role: "guest" };
const newUser = Object.create(baseUser);
newUser.name = "David";

console.log(newUser.role);

/* ===========================================================
   9) METHODS & `this`
=========================================================== */

const employee = {
  name: "Alice",
  salary: 60000,
  getDetails() {
    return `${this.name} earns ${this.salary}`;
  },
};

console.log(employee.getDetails());

/* ===========================================================
   10) DOT vs BRACKET ACCESS
=========================================================== */

console.log(employee.name);
console.log(employee["salary"]);

const key = "name";
console.log(employee[key]);

/* ===========================================================
   11) OPTIONAL & READONLY
=========================================================== */

interface Config {
  readonly url: string;
  timeout?: number;
}

const config: Config = { url: "https://example.com" };

/* ===========================================================
   12) NESTED OBJECTS
=========================================================== */

interface Address {
  city: string;
  country: string;
}

interface EmployeeWithAddress {
  id: number;
  name: string;
  address: Address;
}

const emp: EmployeeWithAddress = {
  id: 1,
  name: "Alex",
  address: { city: "Berlin", country: "Germany" },
};

/* ===========================================================
   13) DESTRUCTURING
=========================================================== */

const { name, id } = user;
console.log(name, id);

/* ===========================================================
   14) SPREAD OPERATOR
=========================================================== */

const base = { id: 1 };
const extra = { isAdmin: true };

const merged = { ...base, ...extra };

/* ===========================================================
   15) SHORT METHOD SYNTAX
=========================================================== */

const calculator = {
  add(a: number, b: number) {
    return a + b;
  },
};

/* ===========================================================
   16) PLAYWRIGHT OBJECT USAGE (VERY IMPORTANT)
=========================================================== */

class LoginPage {
  constructor(private page: any) {}

  async login(username: string, password: string): Promise<void> {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click("#loginBtn");
  }
}

/* ===========================================================
   17) SENIOR BEST PRACTICES
=========================================================== */
/**
 * ✔ Use interface/type for object contracts
 * ✔ Use classes for Playwright POM
 * ✔ Avoid inline object types when repeated
 * ✔ Use readonly for config
 * ✔ Prefer dot notation
 * ✔ Keep objects small & focused
 */

/* ===========================================================
   18) INTERVIEW QUESTIONS (MUST KNOW)
=========================================================== */
/**
 * 1) What is an object in TypeScript?
 * 2) Interface vs type alias?
 * 3) What is an intersection type (&)?
 * 4) Class vs object literal?
 * 5) What is an instance?
 * 6) readonly vs optional properties?
 * 7) How are objects used in Playwright POM?
 */

/**
 * ===========================================================
 * END OF LESSON 13 — OBJECTS 
 * ===========================================================
 */
