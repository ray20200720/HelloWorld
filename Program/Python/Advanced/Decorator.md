**裝飾器（Decorator）** 是 Python 中一種強大的功能，用來修改或擴展函數或方法的行為，無需改變其原始代碼。裝飾器本質上是一個高階函數，它接受一個函數作為輸入並返回一個新函數。

---

### **1. 裝飾器的基本概念**
- **語法糖**：`@decorator_name` 是裝飾器的語法糖，表示將裝飾器應用於函數。
- **核心概念**：裝飾器在函數定義時執行，並返回一個新的函數，替代原來的函數。

---

### **2. 基本範例**
#### **裝飾器的結構**
```python
def decorator(func):
    def wrapper():
        print("裝飾器開始執行！")
        func()
        print("裝飾器執行結束！")
    return wrapper
```

#### **應用裝飾器**
```python
@decorator
def say_hello():
    print("Hello, World!")

say_hello()
```

輸出結果：
```
裝飾器開始執行！
Hello, World!
裝飾器執行結束！
```

---

### **3. 帶參數的裝飾器**
裝飾器也可以處理帶參數的函數。
```python
def decorator(func):
    def wrapper(*args, **kwargs):
        print("參數記錄中...")
        return func(*args, **kwargs)
    return wrapper

@decorator
def add(a, b):
    return a + b

result = add(3, 5)
print(f"結果: {result}")
```

輸出：
```
參數記錄中...
結果: 8
```

---

### **4. 裝飾器本身帶參數**
如果需要讓裝飾器接受參數，可以通過嵌套函數來實現。
```python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet():
    print("Hello!")

greet()
```

輸出：
```
Hello!
Hello!
Hello!
```

---

### **5. 多個裝飾器**
可以將多個裝飾器應用於同一函數，執行順序為從內到外。
```python
def uppercase(func):
    def wrapper():
        return func().upper()
    return wrapper

def exclaim(func):
    def wrapper():
        return func() + "!"
    return wrapper

@uppercase
@exclaim
def say():
    return "hello"

print(say())  # 輸出: HELLO!
```

---

### **6. 使用內建裝飾器**
Python 提供了一些內建裝飾器，如 `@staticmethod`, `@classmethod`, 和 `@property`。

#### **範例：@staticmethod 和 @classmethod**
```python
class Math:
    @staticmethod
    def add(a, b):
        return a + b

    @classmethod
    def info(cls):
        return f"This is class {cls.__name__}"

print(Math.add(5, 3))  # 輸出: 8
print(Math.info())     # 輸出: This is class Math
```

---

### **7. 實際應用場景**
1. **日誌記錄**
   在函數執行前後記錄相關信息：
   ```python
   def log(func):
       def wrapper(*args, **kwargs):
           print(f"正在執行 {func.__name__}")
           result = func(*args, **kwargs)
           print(f"{func.__name__} 執行完成")
           return result
       return wrapper

   @log
   def process_data(data):
       return f"處理 {data}"

   print(process_data("資料"))
   ```

2. **權限檢查**
   驗證用戶是否具有權限。
   ```python
   def require_permission(permission):
       def decorator(func):
           def wrapper(*args, **kwargs):
               if permission == "admin":
                   return func(*args, **kwargs)
               else:
                   print("權限不足！")
           return wrapper
       return decorator

   @require_permission("admin")
   def delete_user(user_id):
       print(f"用戶 {user_id} 已被刪除")

   delete_user(123)
   ```

---

**裝飾器** 是一個非常靈活且高效的工具，能讓代碼更加簡潔且易於擴展。
