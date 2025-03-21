在 Java 中，**控制流語句（Control Flow Statements）**用於控制程序的執行順序。通過控制流語句，可以根據條件執行不同的代碼塊、重複執行某段代碼或跳轉到程序的特定部分。以下是 Java 中常見的控制流語句及其用法。

---

### 1. **條件語句（Conditional Statements）**
用於根據條件執行不同的代碼塊。

#### (1) **if 語句**
- 如果條件為 `true`，則執行代碼塊。
```java
int a = 10;
if (a > 5) {
    System.out.println("a 大於 5");
}
```

#### (2) **if-else 語句**
- 如果條件為 `true`，執行 `if` 代碼塊；否則執行 `else` 代碼塊。
```java
int a = 3;
if (a > 5) {
    System.out.println("a 大於 5");
} else {
    System.out.println("a 小於或等於 5");
}
```

#### (3) **if-else if-else 語句**
- 用於多條件判斷。
```java
int a = 7;
if (a > 10) {
    System.out.println("a 大於 10");
} else if (a > 5) {
    System.out.println("a 大於 5 但小於或等於 10");
} else {
    System.out.println("a 小於或等於 5");
}
```

#### (4) **switch 語句**
- 用於根據變量的值執行不同的代碼塊。
```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("星期一");
        break;
    case 2:
        System.out.println("星期二");
        break;
    case 3:
        System.out.println("星期三");
        break;
    default:
        System.out.println("無效的天數");
}
```

---

### 2. **循環語句（Loop Statements）**
用於重複執行某段代碼。

#### (1) **for 循環**
- 用於已知重複次數的情況。
```java
for (int i = 0; i < 5; i++) {
    System.out.println("i 的值: " + i);
}
```

#### (2) **while 循環**
- 用於條件為 `true` 時重複執行代碼塊。
```java
int i = 0;
while (i < 5) {
    System.out.println("i 的值: " + i);
    i++;
}
```

#### (3) **do-while 循環**
- 先執行代碼塊，再檢查條件。至少執行一次。
```java
int i = 0;
do {
    System.out.println("i 的值: " + i);
    i++;
} while (i < 5);
```

#### (4) **增強 for 循環（for-each 循環）**
- 用於遍歷數組或集合。
```java
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println("num 的值: " + num);
}
```

---

### 3. **跳轉語句（Jump Statements）**
用於跳轉到程序的特定部分。

#### (1) **break 語句**
- 用於終止循環或 `switch` 語句。
```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // 當 i 等於 5 時終止循環
    }
    System.out.println("i 的值: " + i);
}
```

#### (2) **continue 語句**
- 用於跳過當前循環的剩餘代碼，繼續下一次循環。
```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // 跳過偶數
    }
    System.out.println("i 的值: " + i);
}
```

#### (3) **return 語句**
- 用於從方法中返回值並終止方法的執行。
```java
public int add(int a, int b) {
    return a + b; // 返回 a + b 的值
}
```

---

### 4. **巢狀控制流（Nested Control Flow）**
控制流語句可以互相嵌套使用。

#### 示例：巢狀 if 和 for 循環
```java
for (int i = 0; i < 5; i++) {
    if (i % 2 == 0) {
        System.out.println(i + " 是偶數");
    } else {
        System.out.println(i + " 是奇數");
    }
}
```

---

### 5. **標籤語句（Labeled Statements）**
用於標記代碼塊，通常與 `break` 和 `continue` 一起使用。

#### 示例：帶標籤的 break
```java
outerLoop:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outerLoop; // 跳出外層循環
        }
        System.out.println("i: " + i + ", j: " + j);
    }
}
```

---

### 6. **綜合示例**
以下是一個綜合示例，展示了各種控制流語句的用法：
```java
public class Main {
    public static void main(String[] args) {
        // if-else 語句
        int a = 10;
        if (a > 5) {
            System.out.println("a 大於 5");
        } else {
            System.out.println("a 小於或等於 5");
        }

        // switch 語句
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("星期一");
                break;
            case 2:
                System.out.println("星期二");
                break;
            case 3:
                System.out.println("星期三");
                break;
            default:
                System.out.println("無效的天數");
        }

        // for 循環
        for (int i = 0; i < 5; i++) {
            System.out.println("i 的值: " + i);
        }

        // while 循環
        int i = 0;
        while (i < 5) {
            System.out.println("i 的值: " + i);
            i++;
        }

        // break 和 continue
        for (int j = 0; j < 10; j++) {
            if (j == 5) {
                break;
            }
            if (j % 2 == 0) {
                continue;
            }
            System.out.println("j 的值: " + j);
        }
    }
}
```

---

### 總結
Java 的控制流語句包括條件語句、循環語句和跳轉語句，用於控制程序的執行順序。通過靈活使用這些語句，可以實現複雜的邏輯控制，使程序更加動態和高效。
