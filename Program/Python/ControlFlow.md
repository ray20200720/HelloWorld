在 Python 中，控制流語句用於管理程式執行的流程。它們主要包括 **條件語句**、**循環語句** 和 **跳出語句**。以下是詳細說明：

---

### **1. 條件語句 (Conditional Statements)**
條件語句根據邏輯判斷執行不同的程式碼。

#### **if-elif-else 語句**
```python
x = 10

if x > 0:
    print("x 是正數")
elif x == 0:
    print("x 是零")
else:
    print("x 是負數")
```
- `if`：表示當條件為 True 時執行。
- `elif`：當其他條件為 True 時執行（可選，且可多個）。
- `else`：所有條件均不成立時執行（可選）。

---

### **2. 循環語句 (Loops)**
循環語句用於重複執行某段程式碼。

#### **for 循環**
用於遍歷序列（如列表、字符串或範圍）。
```python
for i in range(5):
    print(i)  # 輸出 0, 1, 2, 3, 4
```
- `range(start, stop, step)`：生成一系列數字。

#### **while 循環**
當條件為 True 時不斷執行。
```python
count = 0
while count < 3:
    print(count)  # 輸出 0, 1, 2
    count += 1
```

---

### **3. 跳出語句 (Control Statements)**
用於控制循環的中途退出或跳過。

#### **break**
中途退出循環。
```python
for i in range(5):
    if i == 3:
        break  # 終止循環
    print(i)  # 輸出 0, 1, 2
```

#### **continue**
跳過本次迭代，進入下一次迭代。
```python
for i in range(5):
    if i == 3:
        continue
    print(i)  # 輸出 0, 1, 2, 4
```

#### **pass**
表示空操作，通常用於占位。
```python
if True:
    pass  # 不執行任何操作
```

---

### **4. 巢狀語句 (Nested Statements)**
在條件或循環內部嵌套其他控制流語句。
```python
for i in range(3):
    if i % 2 == 0:
        print(f"{i} 是偶數")
```

---

