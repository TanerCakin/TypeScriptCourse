/*
A signature describes how something can be called or used, without showing how it is implemented.
It tells:
Name
Parameters (types & order)
Return type
…but not the body (logic).
It defines:
Method name → add
Parameters → a: number, b: number
Return type → number
❌ No implementation
❌ No {} body

1️⃣ Compile Time Error
👉 Detected before the code runs
👉 Found by TypeScript compiler / IDE
2️⃣ Run Time Error
👉 Occurs while the program is running
👉 TypeScript cannot detect it at compile time

/*
| **Operator** | **Purpose**                     | **Common Example**              |            |        |   |            |
| ------------ | ------------------------------- | ------------------------------- | ---------- | ------ | - | ---------- |
| `typeof`     | Check primitive type at runtime | `typeof value === "string"`     |            |        |   |            |
| `instanceof` | Check class instance            | `user instanceof User`          |            |        |   |            |
| `in`         | Check property existence        | `"email" in user`               |            |        |   |            |
| `?.`         | Safe property access            | `user?.profile?.name`           |            |        |   |            |
| `??`         | Fallback for null / undefined   | `name ?? "Guest"`               |            |        |   |            |
| `===`        | Strict equality                 | `id === 10`                     |            |        |   |            |
| `!==`        | Strict inequality               | `role !== "admin"`              |            |        |   |            |
| `&&`         | Logical AND                     | `isLoggedIn && isAdmin`         |            |        |   |            |
| `            |                                 | `                               | Logical OR | `token |   | "default"` |
| `!`          | Logical NOT                     | `!isVisible`                    |            |        |   |            |
| `?:`         | Ternary operator                | `age >= 18 ? "Adult" : "Minor"` |            |        |   |            |
| `=`          | Assignment                      | `let count = 0`                 |            |        |   |            |
| `+=`         | Increment / add & assign        | `count += 1`                    |            |        |   |            |
| `++`         | Increment (short form)          | `i++`                           |            |        |   |            |
| `...`        | Spread / rest                   | `fn(...args)`                   |            |        |   |            |
| `as`         | Type assertion                  | `value as string`               |            |        |   |            |
| `await`      | Wait for async result           | `await page.click()`            |            |        |   |            |

*/
