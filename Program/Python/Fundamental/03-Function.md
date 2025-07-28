在 Python 中，**函數** 是一種將程式碼組織起來並重複使用的方式。以下是有關函數的定義與參數傳遞的詳細說明：

---

### **1. 函數的定義**
使用關鍵字 `def` 定義函數。基本語法如下：
```python
def 函數名稱(參數列表):
    """(可選)函數的文檔字符串"""
    函數體
    return 返回值 (可選)
```

#### 範例：
```python
def greet(name):
    """輸出問候語"""
    return f"Hello, {name}!"
```
在這裡：
- `greet` 是函數名稱。
- `name` 是參數。
- `return` 指定函數的返回值。

---

### **2. 函數的調用**
定義函數後，可以通過函數名稱並提供必要的參數來調用：
```python
message = greet("Alice")
print(message)  # 輸出: Hello, Alice!
```

---

### **3. 參數傳遞**
Python 支持不同類型的參數傳遞方式。

#### **位置參數**
根據參數的位置順序傳遞值。
```python
def add(a, b):
    return a + b

result = add(5, 10)  # 傳遞 5 和 10
print(result)  # 輸出: 15
```

#### **關鍵字參數**
通過參數名稱指定傳遞值，順序可靈活。
```python
def introduce(name, age):
    return f"My name is {name}, I am {age} years old."

info = introduce(age=30, name="Bob")
print(info)  # 輸出: My name is Bob, I am 30 years old.
```

#### **默認參數**
為參數設置默認值。
```python
def greet(name="Stranger"):
    return f"Hello, {name}!"

print(greet())  # 輸出: Hello, Stranger!
print(greet("Alice"))  # 輸出: Hello, Alice!
```

#### **可變長度參數**
用於傳遞不定數量的參數。

1. **`*args`（位置參數組）**：
   接受多個值並以元組形式傳遞。
   ```python
   def add_all(*numbers):
       return sum(numbers)

   print(add_all(1, 2, 3, 4))  # 輸出: 10
   ```

2. **`**kwargs`（關鍵字參數組）**：
   接受多個鍵值對並以字典形式傳遞。
   ```python
   def print_info(**info):
       for key, value in info.items():
           print(f"{key}: {value}")

   print_info(name="Alice", age=25, country="Taiwan")
   ```
   **輸出:**
   ```
   name: Alice
   age: 25
   country: Taiwan
   ```

---

### **4. 函數返回值**
函數可以返回單個或多個值。使用 `return` 關鍵字指定返回值。

#### 單個返回值
```python
def square(x):
    return x ** 2

print(square(5))  # 輸出: 25
```

#### 多個返回值
```python
def stats(a, b):
    return a + b, a * b

sum_value, product_value = stats(3, 4)
print(sum_value)  # 輸出: 7
print(product_value)  # 輸出: 12
```

---

### **5. Lambda 函數**
Python 支持匿名函數，用 `lambda` 關鍵字定義。
```python
square = lambda x: x ** 2
print(square(6))  # 輸出: 36
```

---

