在 Python 中，**錯誤處理** 是用於管理程式中可能出現的異常情況，並避免程式崩潰的一種機制。`try-except` 語句是最常用的錯誤處理方式，以下是詳細說明：

---

### **1. 基本語法**
`try-except` 的基本語法結構如下：
```python
try:
    # 嘗試執行的代碼
except ExceptionType:
    # 當發生指定類型的異常時執行
```

範例：
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("不能除以零！")
```
輸出：
```
不能除以零！
```

---

### **2. 多個 except 子句**
可以針對不同的異常類型進行處理：
```python
try:
    x = int(input("請輸入一個數字: "))
    result = 10 / x
except ZeroDivisionError:
    print("不能除以零！")
except ValueError:
    print("請輸入有效的數字！")
```

---

### **3. 捕獲所有異常**
使用 `Exception` 捕獲所有類型的異常，但應謹慎使用，因為可能掩蓋具體問題：
```python
try:
    result = 10 / "a"
except Exception as e:
    print(f"發生異常: {e}")
```

輸出：
```
發生異常: unsupported operand type(s) for /: 'int' and 'str'
```

---

### **4. else 子句**
當 `try` 塊中的代碼成功執行且未發生異常時，執行 `else` 部分：
```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("不能除以零！")
else:
    print(f"結果是: {result}")
```

輸出：
```
結果是: 5.0
```

---

### **5. finally 子句**
`finally` 總是會執行，用於釋放資源或執行清理操作：
```python
try:
    file = open("example.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("文件未找到！")
finally:
    print("無論有無異常，都執行這段代碼")
```

輸出：
```
文件未找到！
無論有無異常，都執行這段代碼
```

---

### **6. 自定義異常**
可以通過創建自定義異常類型來更精確地處理特殊情況：
```python
class CustomError(Exception):
    pass

try:
    raise CustomError("這是一個自定義異常")
except CustomError as e:
    print(f"捕捉到自定義異常: {e}")
```

---

### **7. 常見異常類型**
以下是 Python 常見的異常類型：
- `ValueError`: 傳入的值無效。
- `TypeError`: 不兼容的數據類型。
- `IndexError`: 索引超出範圍。
- `KeyError`: 字典中找不到鍵。
- `FileNotFoundError`: 文件未找到。
- `ZeroDivisionError`: 除以零。

---

