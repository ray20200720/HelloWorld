Rust 的基本語法非常注重性能和安全性，它透過一些獨特的特性來幫助開發者編寫高效且可靠的程式碼。以下是一些 Rust 的核心語法和功能概述：

---

### 1. **變數與不可變性**
變數預設是不可變的 (`immutable`)，若需可變則需要使用關鍵字 `mut`：
```rust
let x = 5; // 不可變變數
let mut y = 10; // 可變變數
y = 15; // 可以改變值
```

---

### 2. **資料型別**
Rust 是靜態類型語言，所有變數都需明確型別，但編譯器能自動推斷型別：
```rust
let a: i32 = 10; // 明確指定型別
let b = 20.5; // 編譯器自動推斷型別 (f64)
```

---

### 3. **函式**
Rust 使用 `fn` 關鍵字定義函式，並支援帶有返回值的函式：
```rust
fn add(x: i32, y: i32) -> i32 {
    x + y // 沒有使用分號，表示返回值
}
let result = add(2, 3);
println!("結果是: {}", result);
```

---

### 4. **條件判斷**
`if` 和 `else` 與其他語言類似，但在 Rust 中 `if` 可作為表達式返回值：
```rust
let number = 5;
if number > 0 {
    println!("正數");
} else {
    println!("非正數");
}

let is_positive = if number > 0 { true } else { false }; // 使用 if 表達式
```

---

### 5. **迴圈**
Rust 提供三種迴圈：
- `loop`：無限迴圈，需手動 `break`。
- `while`：當條件為真時執行。
- `for`：用於迭代集合或範圍。
```rust
// loop
let mut count = 0;
loop {
    count += 1;
    if count == 3 {
        break;
    }
    println!("count: {}", count);
}

// while
let mut n = 5;
while n > 0 {
    println!("n: {}", n);
    n -= 1;
}

// for
for i in 1..5 { // 不包含5
    println!("i: {}", i);
}
```

---

### 6. **所有權與借用**
Rust 引入所有權系統來管理內存：
- **所有權**：每個值只能有一個擁有者。
- **借用**：允許傳遞引用，避免複製資料。
```rust
fn main() {
    let s = String::from("Hello");
    takes_ownership(s); // s 的所有權被移交
    // println!("{}", s); // 此行會報錯，因為 s 已經無效

    let x = 10;
    makes_copy(x); // x 是 Copy 型別，仍可使用
}

fn takes_ownership(s: String) {
    println!("{}", s);
}

fn makes_copy(num: i32) {
    println!("{}", num);
}
```

---

### 7. **結構與枚舉**
- **結構 (Struct)**：用於自訂型別。
- **枚舉 (Enum)**：用於定義多個狀態的值。
```rust
// 定義結構
struct Point {
    x: i32,
    y: i32,
}
let point = Point { x: 10, y: 20 };
println!("x: {}, y: {}", point.x, point.y);

// 定義枚舉
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
let dir = Direction::Up;
```

---

### 8. **模式匹配**
Rust 的 `match` 和 `if let` 提供強大的模式匹配功能：
```rust
let number = 2;
match number {
    1 => println!("One"),
    2 | 3 => println!("Two or Three"), // 多個模式
    _ => println!("Other"), // 通配符
}

if let Some(value) = Some(10) {
    println!("Value: {}", value);
}
```

---

這些是 Rust 的一些基礎語法，還有許多值得深入探索的特性，例如異步處理（`async`）、宏（Macro）、錯誤處理等。
