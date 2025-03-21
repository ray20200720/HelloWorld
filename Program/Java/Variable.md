在 Java 中，**變量（Variable）**是用來存儲數據的容器。每個變量都有一個特定的數據類型，決定了它可以存儲什麼樣的數據以及可以對其進行什麼樣的操作。以下是關於 Java 變量的詳細說明：

---

### 1. **變量的基本概念**
- 變量是內存中的一個命名存儲位置，用於保存數據。
- 變量的值可以在程序運行期間被修改。
- 每個變量都有一個唯一的名稱（標識符），用於在代碼中引用它。

---

### 2. **變量的聲明**
在 Java 中，聲明變量需要指定變量的 **數據類型** 和 **變量名稱**。語法如下：

```java
數據類型 變量名稱;
```

例如：
```java
int age; // 聲明一個整型變量 age
double salary; // 聲明一個雙精度浮點型變量 salary
String name; // 聲明一個字符串變量 name
```

---

### 3. **變量的初始化**
聲明變量後，可以為它賦值，這個過程稱為 **初始化**。語法如下：

```java
變量名稱 = 值;
```

例如：
```java
age = 25; // 將變量 age 初始化為 25
salary = 5000.50; // 將變量 salary 初始化為 5000.50
name = "John"; // 將變量 name 初始化為 "John"
```

也可以在聲明時直接初始化：
```java
int age = 25;
double salary = 5000.50;
String name = "John";
```

---

### 4. **變量的命名規則**
- 變量名必須以 **字母**、**下劃線（_）** 或 **美元符號（$）** 開頭。
- 變量名不能以數字開頭。
- 變量名不能是 Java 的 **關鍵字**（如 `int`、`class`、`public` 等）。
- 變量名區分大小寫（例如 `age` 和 `Age` 是兩個不同的變量）。
- 建議使用有意義的名稱，並遵循駝峰命名法（例如 `studentName`、`totalScore`）。

---

### 5. **變量的作用域**
變量的作用域是指變量在程序中可以被訪問的範圍。根據作用域，變量可以分為：
- **局部變量（Local Variable）**：在方法、構造器或代碼塊中聲明，僅在該範圍內有效。
  ```java
  public void myMethod() {
      int localVar = 10; // 局部變量
      System.out.println(localVar);
  }
  ```
- **實例變量（Instance Variable）**：在類中聲明，但在方法、構造器或代碼塊之外。每個對象都有其自己的實例變量副本。
  ```java
  class MyClass {
      int instanceVar = 20; // 實例變量
  }
  ```
- **類變量（Static Variable）**：使用 `static` 關鍵字聲明，屬於類而不是對象。所有對象共享同一個類變量。
  ```java
  class MyClass {
      static int classVar = 30; // 類變量
  }
  ```

---

### 6. **Java 的數據類型**
Java 變量的數據類型分為兩大類：
- **基本數據類型（Primitive Data Types）**：
  - 整型：`byte`、`short`、`int`、`long`
  - 浮點型：`float`、`double`
  - 字符型：`char`
  - 布爾型：`boolean`
- **引用數據類型（Reference Data Types）**：
  - 類（如 `String`）
  - 數組
  - 接口

例如：
```java
int number = 10; // 基本數據類型
String text = "Hello"; // 引用數據類型
```

---

### 7. **變量的使用示例**
以下是一個完整的示例，展示了變量的聲明、初始化和使用：
```java
public class Main {
    static int classVar = 30; // 類變量

    public static void main(String[] args) {
        int localVar = 10; // 局部變量
        System.out.println("Local Variable: " + localVar);

        MyClass obj = new MyClass();
        System.out.println("Instance Variable: " + obj.instanceVar);
        System.out.println("Class Variable: " + classVar);
    }
}

class MyClass {
    int instanceVar = 20; // 實例變量
}
```

---

### 總結
Java 變量是用於存儲數據的基本單位，具有特定的數據類型和作用域。理解變量的聲明、初始化、命名規則以及作用域是學習 Java 的基礎。通過合理地使用變量，可以編寫出結構清晰、易於維護的代碼。