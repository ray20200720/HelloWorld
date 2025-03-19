**列表推導式**（List Comprehension）是 Python 中一種簡潔且強大的語法，用於生成新的列表，讓代碼更加簡潔和可讀。以下是它的詳解：

---

### **1. 基本語法**
```python
new_list = [表達式 for 元素 in 可迭代對象 if 條件]
```
- **表達式**：對每個元素進行操作的表達式。
- **可迭代對象**：如列表、範圍（`range`）、字符串等。
- **條件**（可選）：篩選元素的條件。

---

### **2. 範例與應用**

#### **生成列表**
將範圍內的數字生成列表：
```python
numbers = [x for x in range(5)]
print(numbers)  # 輸出: [0, 1, 2, 3, 4]
```

#### **帶條件篩選**
生成偶數列表：
```python
even_numbers = [x for x in range(10) if x % 2 == 0]
print(even_numbers)  # 輸出: [0, 2, 4, 6, 8]
```

#### **對元素進行操作**
計算每個數字的平方：
```python
squares = [x**2 for x in range(5)]
print(squares)  # 輸出: [0, 1, 4, 9, 16]
```

#### **嵌套循環**
生成數對 (i, j)：
```python
pairs = [(i, j) for i in range(3) for j in range(2)]
print(pairs)  # 輸出: [(0, 0), (0, 1), (1, 0), (1, 1), (2, 0), (2, 1)]
```

#### **字符串操作**
將字符串的每個字符轉為大寫：
```python
uppercase = [char.upper() for char in "python"]
print(uppercase)  # 輸出: ['P', 'Y', 'T', 'H', 'O', 'N']
```

---

### **3. 常見應用場景**
1. **過濾數據**
   將列表中的數字過濾掉負數：
   ```python
   numbers = [-5, 3, -1, 7]
   positive_numbers = [x for x in numbers if x > 0]
   print(positive_numbers)  # 輸出: [3, 7]
   ```

2. **列表扁平化**
   展開嵌套列表：
   ```python
   nested_list = [[1, 2], [3, 4], [5, 6]]
   flat_list = [item for sublist in nested_list for item in sublist]
   print(flat_list)  # 輸出: [1, 2, 3, 4, 5, 6]
   ```

3. **條件替換**
   用條件替換列表中的元素：
   ```python
   numbers = [1, 2, 3, 4, 5]
   modified = [x if x % 2 == 0 else -x for x in numbers]
   print(modified)  # 輸出: [-1, 2, -3, 4, -5]
   ```

---

### **4. 與傳統循環的比較**
**傳統方式**：
```python
squares = []
for x in range(5):
    squares.append(x**2)
```

**列表推導式**：
```python
squares = [x**2 for x in range(5)]
```

可以看到，列表推導式更加簡潔且易於閱讀。

---

列表推導式是非常實用的工具，適合生成和處理列表。不過，當邏輯過於複雜時，建議還是使用傳統循環來提升可讀性！
