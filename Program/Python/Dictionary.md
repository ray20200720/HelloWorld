在 Python 中，**字典（dictionary）** 是一種內建的數據結構，用於存儲鍵值對（key-value pairs）。字典特別適合快速查找數據，因為其底層實現基於哈希表。以下是關於字典的詳細說明：

---

### **1. 字典的特性**
- **鍵值對存儲**：每個元素由鍵（key）和值（value）組成。
- **鍵唯一**：字典中的鍵必須是唯一的，重複鍵會覆蓋之前的值。
- **可變**：可以動態添加、修改或刪除元素。
- **無序（Python 3.7+ 中有序**）：在 Python 3.7+ 中，字典元素會按照插入順序存儲。

---

### **2. 創建字典**
#### **使用大括號**
```python
my_dict = {"name": "Alice", "age": 25, "city": "Taipei"}
print(my_dict)
```

#### **使用 `dict()` 函數**
```python
my_dict = dict(name="Alice", age=25, city="Taipei")
print(my_dict)
```

#### **空字典**
```python
empty_dict = {}
```

---

### **3. 訪問字典元素**
#### **使用鍵訪問值**
```python
print(my_dict["name"])  # 輸出: Alice
```

#### **使用 `get()` 方法**
如果鍵不存在，`get()` 返回默認值，而不會拋出錯誤：
```python
print(my_dict.get("gender", "Not Found"))  # 輸出: Not Found
```

---

### **4. 修改字典**
#### **新增或更新鍵值對**
```python
my_dict["age"] = 26  # 更新鍵值
my_dict["gender"] = "Female"  # 新增鍵值對
print(my_dict)
```

---

### **5. 刪除元素**
#### **使用 `del` 語句**
```python
del my_dict["city"]
print(my_dict)
```

#### **使用 `pop()` 方法**
`pop()` 返回刪除的值：
```python
age = my_dict.pop("age")
print(age)  # 輸出: 26
print(my_dict)
```

#### **清空字典**
```python
my_dict.clear()
print(my_dict)  # 輸出: {}
```

---

### **6. 字典方法**
以下是常用的字典方法：

| 方法            | 說明                                |
|-----------------|-----------------------------------|
| `keys()`        | 返回所有鍵的集合。                   |
| `values()`      | 返回所有值的集合。                   |
| `items()`       | 返回鍵值對的集合（每對作為元組）。         |
| `update()`      | 合併另一個字典或鍵值對到當前字典中。       |

#### **範例：迭代鍵和值**
```python
for key, value in my_dict.items():
    print(f"{key}: {value}")
```

---

### **7. 字典的應用場景**
#### **計數**
使用字典來計算字符或單詞的出現次數：
```python
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
print(char_count)
```

#### **構建查詢表**
```python
grades = {"Alice": 90, "Bob": 85, "Charlie": 95}
print(grades["Alice"])  # 輸出: 90
```

---

字典在 Python 中非常強大且靈活，特別適合需要快速查找或處理鍵值對數據的場景。
