在 Python 中，**集合（set）** 是一種無序且不重複的數據結構，適合用於去重以及集合操作（如交集、並集等）。以下是有關集合的詳細說明：

---

### **1. 集合的特性**
- **無序**：集合中的元素沒有固定的順序。
- **不重複**：集合自動去除重複的元素。
- **可變**：集合本身可以修改，但集合內部的元素必須是不可變的（例如數字、字符串、元組）。

---

### **2. 創建集合**
#### **使用大括號**
```python
fruits = {"apple", "banana", "cherry"}
print(fruits)  # 輸出: {'apple', 'cherry', 'banana'}
```

#### **使用 `set()` 函數**
```python
numbers = set([1, 2, 3, 2, 1])
print(numbers)  # 輸出: {1, 2, 3}
```

#### **創建空集合**
注意：空集合不能使用 `{}`，因為它被默認為空字典。
```python
empty_set = set()
```

---

### **3. 操作集合的常用方法**
#### **添加元素**
使用 `add()` 方法添加單個元素：
```python
fruits.add("orange")
print(fruits)  # 添加後: {'apple', 'cherry', 'banana', 'orange'}
```

#### **刪除元素**
- 使用 `remove()`（如果元素不存在，會引發錯誤）：
  ```python
  fruits.remove("banana")
  ```
- 使用 `discard()`（如果元素不存在，不會引發錯誤）：
  ```python
  fruits.discard("mango")
  ```
- 使用 `pop()` 隨機刪除一個元素：
  ```python
  fruit = fruits.pop()
  print(fruit)
  ```

#### **清空集合**
```python
fruits.clear()
print(fruits)  # 輸出: set()
```

---

### **4. 集合操作（數學集合功能）**
#### **並集**：
使用 `|` 或 `union()` 方法：
```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1 | set2)  # 輸出: {1, 2, 3, 4, 5}
```

#### **交集**：
使用 `&` 或 `intersection()` 方法：
```python
print(set1 & set2)  # 輸出: {3}
```

#### **差集**：
使用 `-` 或 `difference()` 方法：
```python
print(set1 - set2)  # 輸出: {1, 2}
```

#### **對稱差集**（不在交集中）：
使用 `^` 或 `symmetric_difference()` 方法：
```python
print(set1 ^ set2)  # 輸出: {1, 2, 4, 5}
```

---

### **5. 集合比較**
集合之間可以進行子集、超集等比較：
- **判斷子集**：`issubset()` 或 `<`
  ```python
  print({1, 2} <= {1, 2, 3})  # 輸出: True
  ```
- **判斷超集**：`issuperset()` 或 `>`
  ```python
  print({1, 2, 3} >= {1, 2})  # 輸出: True
  ```

---

### **6. 冰凍集合（frozenset）**
`frozenset` 是不可變的集合，適合用於需要不可變對象的場合。
```python
frozen = frozenset([1, 2, 3])
# frozen.add(4)  # 這會引發錯誤，因為 frozenset 不可變
```

---

集合在去重和集合運算中非常高效。
