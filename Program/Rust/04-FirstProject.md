開始您的第一個Rust項目是一個令人興奮的旅程！以下是逐步指導，幫助您快速啟動並運行：

### 1. **創建新專案**
Rust的包管理工具Cargo可以幫助您輕鬆地建立和管理項目。打開終端並執行以下命令：
```bash
cargo new hello_rust
```
這將創建一個名為`hello_rust`的目錄，裡面包含基本的Rust專案結構。`Cargo.toml`是配置文件，`src/main.rs`是您的程式碼文件。

### 2. **進入專案目錄**
在終端中切換到新建的專案目錄：
```bash
cd hello_rust
```

### 3. **撰寫程式碼**
打開`src/main.rs`文件。您會看到預設的「Hello, world!」程式碼：
```rust
fn main() {
    println!("Hello, world!");
}
```
您可以將其修改或添加更多功能。例如：
```rust
fn main() {
    println!("歡迎學習 Rust！ 🚀");
}
```

### 4. **編譯與執行專案**
使用Cargo來編譯並運行您的程式：
```bash
cargo run
```
它會自動編譯程式碼並顯示結果。您應該能看到類似以下的輸出：
```
歡迎學習 Rust！ 🚀
```

### 5. **探索與擴展**
- **添加依賴項**：如果您想使用其他庫，可以在`Cargo.toml`中添加依賴，例如：
  ```toml
  [dependencies]
  rand = "0.8"
  ```
  然後運行`cargo build`來安裝。
- **測試功能**：Rust內建了強大的測試工具，您可以添加測試到程式碼中並執行`cargo test`來驗證。

### 6. **學習更多**
接下來，可以探索更深入的功能，例如：
- 使用結構（struct）和特徵（trait）進行面向對象的開發。
- 使用並發工具（如`async/await`）進行高效程式設計。


