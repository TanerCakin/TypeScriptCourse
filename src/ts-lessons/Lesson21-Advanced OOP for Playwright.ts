/*
===========================================================
LESSON 19 — ADVANCED OOP FOR PLAYWRIGHT
TypeScript + Playwright Automation Architecture
===========================================================

This lesson focuses on:
1. Why OOP is critical in Playwright
2. BasePage pattern
3. Inheritance & polymorphism
4. Abstraction with abstract classes
5. Interfaces as contracts
6. Composition over inheritance
7. Dependency Injection (DI) basics
8. Common design patterns used in Playwright
*/

////////////////////////////////////////////////////////////
// 1) WHY OOP IN PLAYWRIGHT?
////////////////////////////////////////////////////////////
/*
Problems without OOP:
❌ Duplicate code
❌ Hard to maintain tests
❌ Tight coupling
❌ Poor scalability

OOP solves:
✔ Reusability
✔ Maintainability
✔ Extensibility
✔ Readability
*/

////////////////////////////////////////////////////////////
// 2) BASE PAGE (ABSTRACT CLASS)
////////////////////////////////////////////////////////////
/*
BasePage holds COMMON logic shared by all pages.
*/

abstract class BasePage {

    protected page: any;

    constructor(page: any) {
        this.page = page;
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForLoad(): Promise<void> {
        await this.page.waitForLoadState("networkidle");
    }

    // Force child pages to define their own page validation
    abstract isPageLoaded(): Promise<boolean>;
}

////////////////////////////////////////////////////////////
// 3) INHERITANCE — PAGE OBJECTS
////////////////////////////////////////////////////////////

class LoginPage extends BasePage {

    async isPageLoaded(): Promise<boolean> {
        return await this.page.isVisible("#loginBtn");
    }

    async login(username: string, password: string): Promise<void> {
        await this.page.fill("#username", username);
        await this.page.fill("#password", password);
        await this.page.click("#loginBtn");
    }
}

class DashboardPage extends BasePage {

    async isPageLoaded(): Promise<boolean> {
        return await this.page.isVisible("#dashboard");
    }

    async logout(): Promise<void> {
        await this.page.click("#logout");
    }
}

////////////////////////////////////////////////////////////
// 4) POLYMORPHISM — BASE REFERENCE
////////////////////////////////////////////////////////////
/*
Same base reference, different behavior at runtime.
*/

async function verifyPage(pageObj: BasePage) {
    if (await pageObj.isPageLoaded()) {
        console.log("Correct page loaded");
    }
}

////////////////////////////////////////////////////////////
// 5) INTERFACES — CONTRACTS
////////////////////////////////////////////////////////////
/*
Interfaces define WHAT a page must do,
not HOW it does it.
*/

interface AuthActions {
    login(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
}

class SecureDashboardPage extends BasePage implements AuthActions {

    async isPageLoaded(): Promise<boolean> {
        return await this.page.isVisible("#secureDashboard");
    }

    async login(username: string, password: string): Promise<void> {
        // optional implementation
    }

    async logout(): Promise<void> {
        await this.page.click("#logout");
    }
}

////////////////////////////////////////////////////////////
// 6) COMPOSITION OVER INHERITANCE
////////////////////////////////////////////////////////////
/*
Prefer HAS-A relationship instead of IS-A when possible.
*/

class HeaderComponent {

    constructor(private page: any) {}

    async openProfile(): Promise<void> {
        await this.page.click("#profile");
    }
}

class DashboardPageWithHeader extends BasePage {

    header: HeaderComponent;

    constructor(page: any) {
        super(page);
        this.header = new HeaderComponent(page);
    }

    async isPageLoaded(): Promise<boolean> {
        return await this.page.isVisible("#dashboard");
    }
}

////////////////////////////////////////////////////////////
// 7) DEPENDENCY INJECTION (BASIC)
////////////////////////////////////////////////////////////
/*
Dependencies are passed, not created internally.
*/

class LoginService {

    constructor(private page: any) {}

    async login(username: string, password: string): Promise<void> {
        await this.page.fill("#username", username);
        await this.page.fill("#password", password);
    }
}

////////////////////////////////////////////////////////////
// 8) COMMON DESIGN PATTERNS IN PLAYWRIGHT
////////////////////////////////////////////////////////////
/*
✔ Page Object Model (POM)
✔ Factory Pattern (browser / page creation)
✔ Singleton (config, env)
✔ Strategy Pattern (auth, payments)
*/

////////////////////////////////////////////////////////////
// 9) SINGLE RESPONSIBILITY PRINCIPLE (SRP)
////////////////////////////////////////////////////////////
/*
Each class should have ONE responsibility.
*/

class LoginValidator {
    static validate(username: string, password: string): boolean {
        return username.length > 0 && password.length > 0;
    }
}

////////////////////////////////////////////////////////////
// 10) STATIC UTILITIES
////////////////////////////////////////////////////////////

class WaitUtils {
    static async waitForSpinner(page: any): Promise<void> {
        await page.waitForSelector(".spinner", { state: "hidden" });
    }
}

////////////////////////////////////////////////////////////
// 11) BEST PRACTICES (SENIOR LEVEL)
////////////////////////////////////////////////////////////
/*
✔ Use abstract BasePage
✔ Use interfaces for contracts
✔ Favor composition over inheritance
✔ Avoid deep inheritance trees
✔ Keep pages thin, logic in services
✔ Use polymorphism to avoid if-else
*/

////////////////////////////////////////////////////////////
// 12) INTERVIEW QUESTIONS
////////////////////////////////////////////////////////////
/*
1) Why is OOP important in Playwright?
2) BasePage vs utility classes?
3) Abstract class vs interface in POM?
4) What is composition and why prefer it?
5) How does polymorphism help in automation?
6) What design patterns do you use in Playwright?
*/

////////////////////////////////////////////////////////////
// END OF LESSON 19 — ADVANCED OOP FOR PLAYWRIGHT
////////////////////////////////////////////////////////////
