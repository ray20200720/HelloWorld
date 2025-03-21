在 Java 中，**表達式（Expression）**是由變量、運算符、方法調用等組成的語法結構，可以計算出一個值。表達式是 Java 程序的基本組成部分，廣泛用於賦值、條件判斷、循環等場景。以下是 Java 表達式的詳細說明和如何使用它們的示例。

---

### 1. **表達式的組成**
Java 表達式通常由以下部分組成：
- **操作數（Operands）**：變量、常量或方法調用。
- **運算符（Operators）**：用於對操作數進行操作，例如 `+`、`-`、`*`、`/` 等。

例如：
```java
int a = 10;
int b = 5;
int sum = a + b; // a + b 是一個表達式
```

---

### 2. **表達式的類型**
根據運算符和操作數的不同，表達式可以分為以下幾類：

#### (1) **算術表達式**
用於執行數學運算。
```java
int result = (a + b) * 2; // 算術表達式
```

#### (2) **關係表達式**
用於比較兩個值，返回布爾值（`true` 或 `false`）。
```java
boolean isEqual = (a == b); // 關係表達式
```

#### (3) **邏輯表達式**
用於組合多個條件，返回布爾值。
```java
boolean isValid = (a > 0 && b > 0); // 邏輯表達式
```

#### (4) **賦值表達式**
用於為變量賦值。
```java
int c = a + b; // 賦值表達式
```

#### (5) **三元表達式**
用於簡化 `if-else` 語句。
```java
int max = (a > b) ? a : b; // 三元表達式
```

#### (6) **方法調用表達式**
用於調用方法並返回結果。
```java
int length = "Hello".length(); // 方法調用表達式
```

---

### 3. **表達式的使用場景**
表達式可以用於以下場景：

#### (1) **賦值語句**
```java
int sum = a + b; // 將表達式的結果賦值給變量
```

#### (2) **條件語句**
```java
if (a > b) { // 使用關係表達式作為條件
    System.out.println("a 大於 b");
}
```

#### (3) **循環語句**
```java
for (int i = 0; i < 10; i++) { // 使用表達式初始化、條件判斷和更新
    System.out.println(i);
}
```

#### (4) **方法返回值**
```java
public int add(int a, int b) {
    return a + b; // 返回表達式的結果
}
```

---

### 4. **表達式的示例**
以下是一些常見的表達式示例：

#### (1) **算術表達式**
```java
int a = 10, b = 5;
int sum = a + b; // 15
int product = a * b; // 50
int remainder = a % b; // 0
```

#### (2) **關係表達式**
```java
boolean isEqual = (a == b); // false
boolean isGreater = (a > b); // true
```

#### (3) **邏輯表達式**
```java
boolean isValid = (a > 0 && b > 0); // true
boolean isZero = (a == 0 || b == 0); // false
```

#### (4) **賦值表達式**
```java
int c = a + b; // 15
c += 10; // 25
```

#### (5) **三元表達式**
```java
int max = (a > b) ? a : b; // 10
```

#### (6) **方法調用表達式**
```java
String message = "Hello";
int length = message.length(); // 5
```

---

### 5. **表達式的優先級**
Java 表達式中的運算符具有優先級，決定了表達式的計算順序。例如：
- `*` 和 `/` 優先於 `+` 和 `-`。
- 可以使用括號 `()` 來改變優先級。

**示例**：
```java
int result = 10 + 5 * 2; // 先計算 5 * 2，結果為 20
int result2 = (10 + 5) * 2; // 先計算 10 + 5，結果為 30
```

---

### 6. **表達式的綜合示例**
以下是一個綜合示例，展示了表達式的各種用法：
```java
public class Main {
    public static void main(String[] args) {
        int a = 10, b = 5;

        // 算術表達式
        int sum = a + b;
        int product = a * b;

        // 關係表達式
        boolean isEqual = (a == b);

        // 邏輯表達式
        boolean isValid = (a > 0 && b > 0);

        // 三元表達式
        int max = (a > b) ? a : b;

        // 方法調用表達式
        String message = "Hello";
        int length = message.length();

        // 輸出結果
        System.out.println("Sum: " + sum);
        System.out.println("Product: " + product);
        System.out.println("Is Equal: " + isEqual);
        System.out.println("Is Valid: " + isValid);
        System.out.println("Max: " + max);
        System.out.println("Message Length: " + length);
    }
}
```

---

### 總結
Java 表達式是程序的基本組成部分，用於執行計算、條件判斷、賦值等操作。通過靈活使用表達式，可以編寫出簡潔、高效的 Java 代碼。理解表達式的組成、類型和優先級是掌握 Java 編程的關鍵。
