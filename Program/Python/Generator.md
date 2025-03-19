**生成器（Generator）** 是 Python 中的一種特殊的迭代器，它用來生成一系列的值，而不需要一次性將所有的值存儲在內存中。這使得生成器非常高效，特別是在處理大量數據時。以下是關於生成器的詳細說明：

---

### **1. 生成器的核心概念**
- **懶惰求值**：生成器不會一次性計算所有的值，而是按需生成數據。
- **迭代器的升級版**：生成器是一種特殊的迭代器，可以使用 `for` 循環進行遍歷。
- **使用 `yield`**：生成器通過關鍵字 `yield` 暫停執行並返回值，然後在下一次調用時繼續執行。

---

### **2. 創建生成器**

#### **2.1 使用函數和 `yield`**
生成器函數的特徵是使用了 `yield` 關鍵字。
```python
def my_generator():
    yield 1
    yield 2
    yield 3

# 使用生成器
gen = my_generator()
print(next(gen))  # 輸出: 1
print(next(gen))  # 輸出: 2
print(next(gen))  # 輸出: 3
```

當生成器用完時，調用 `next()` 會拋出 `StopIteration` 異常。

---

#### **2.2 使用生成器表達式**
生成器表達式的語法類似於列表推導式，但用小括號 `()` 而非方括號 `[]`。
```python
gen = (x**2 for x in range(5))
print(next(gen))  # 輸出: 0
print(next(gen))  # 輸出: 1
```

---

### **3. 特性與用途**

#### **3.1 節省內存**
生成器按需生成數據，而不是一次性將整個數據存儲在內存中。例如，生成一百萬個數字的平方：
```python
def square_numbers(n):
    for i in range(n):
        yield i**2

gen = square_numbers(10**6)
print(next(gen))  # 輸出: 0
```
相比列表，生成器節約了內存。

---

#### **3.2 支持迭代**
生成器可以直接用於 `for` 循環。
```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for number in countdown(5):
    print(number)
```
輸出：
```
5
4
3
2
1
```

---

### **4. 範例與應用場景**

#### **4.1 處理大數據**
生成器可以逐步讀取和處理大文件：
```python
def read_file(file_name):
    with open(file_name, "r") as file:
        for line in file:
            yield line.strip()  # 每次返回一行

for line in read_file("example.txt"):
    print(line)
```

---

#### **4.2 無限序列**
生成斐波那契數列：
```python
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fibonacci()
for _ in range(10):
    print(next(gen))  # 輸出前 10 個斐波那契數字
```

---

### **5. 關於生成器的常用函數**

1. **`next()`**：
   逐步訪問生成器的下一個值。
   ```python
   print(next(gen))
   ```

2. **`send()`**：
   向生成器發送數據並接收生成器返回的值。
   ```python
   def generator():
       value = yield "開始"
       yield value

   gen = generator()
   print(next(gen))       # 輸出: 開始
   print(gen.send("你好"))  # 輸出: 你好
   ```

3. **`close()`**：
   終止生成器。
   ```python
   gen.close()
   ```

---

生成器是一個非常強大的工具，特別適合需要高效處理大型數據集的場景。
