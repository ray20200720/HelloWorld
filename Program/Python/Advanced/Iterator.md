在 Python 中，**迭代器（Iterator）** 是一種實現迭代協議的物件，用於逐一訪問可迭代對象（如列表、元組或字典）中的元素，而不需要事先將所有數據加載到內存中。以下是有關 Python 迭代器的詳細說明：

---

### **1. 迭代器的核心概念**
- **可迭代對象（Iterable）**：可以被逐一迭代的對象，如列表、字符串、元組等，通常實現了 `__iter__()` 方法。
- **迭代器（Iterator）**：一種實現了 `__next__()` 方法的對象，可以逐一返回元素。
- 使用 `iter()` 獲取迭代器，使用 `next()` 獲取下一個元素。

---

### **2. 如何創建迭代器**

#### **2.1 使用內建迭代器**
大多數內建對象（如列表、字符串）都可以被迭代：
```python
numbers = [1, 2, 3]
iterator = iter(numbers)  # 創建迭代器

print(next(iterator))  # 輸出: 1
print(next(iterator))  # 輸出: 2
print(next(iterator))  # 輸出: 3
# 再調用時會拋出 StopIteration 異常
```

#### **2.2 自定義迭代器**
可以通過創建一個類，實現 `__iter__()` 和 `__next__()` 方法來定義自己的迭代器：
```python
class Counter:
    def __init__(self, limit):
        self.limit = limit
        self.current = 0

    def __iter__(self):
        return self  # 返回自身作為迭代器

    def __next__(self):
        if self.current < self.limit:
            self.current += 1
            return self.current
        raise StopIteration  # 結束迭代

# 使用自定義迭代器
counter = Counter(3)
for num in counter:
    print(num)  # 輸出: 1, 2, 3
```

---

### **3. 可迭代對象與迭代器的區別**
1. **可迭代對象**：
   - 包含方法 `__iter__()`，返回一個迭代器。
   - 如：列表、字符串、元組、字典、集合等。

2. **迭代器**：
   - 包含方法 `__iter__()` 和 `__next__()`。
   - 是一次性對象，遍歷結束後需要重新創建。

範例：
```python
my_list = [1, 2, 3]
iterator = iter(my_list)  # 將列表轉為迭代器

print(next(iterator))  # 輸出: 1
print(next(iterator))  # 輸出: 2
```

---

### **4. 迭代器與生成器的聯繫**
- **迭代器** 是一種通用的協議，用於逐一訪問數據。
- **生成器** 是迭代器的一種簡化方式，通過 `yield` 關鍵字自動實現 `__iter__()` 和 `__next__()` 方法。

---

### **5. 使用迭代器的應用場景**
1. **處理大型數據**
   避免一次性將數據加載到內存，節省空間。

2. **自定義數據流**
   自定義數據的生成規則。

---

**迭代器** 是 Python 強大而靈活的一部分，適合處理需要懶加載的情況。
