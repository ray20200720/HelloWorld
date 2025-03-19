在 Python 中，文件操作是常見的任務，主要包括 **讀取文件** 和 **寫入文件**。以下是詳細說明：

---

### **1. 打開文件**
使用內建的 `open()` 函數來打開文件。語法為：
```python
file = open(file_name, mode)
```
- **`file_name`**: 文件的路徑（可以是相對或絕對路徑）。
- **`mode`**: 文件的打開模式，比如讀取（`r`）、寫入（`w`）或追加（`a`）。

常見模式：
| 模式 | 說明                       |
|------|----------------------------|
| `r`  | 讀取模式（文件必須存在）。 |
| `w`  | 寫入模式（清空內容，若文件不存在則創建）。 |
| `a`  | 追加模式（保留原內容，追加寫入）。 |
| `rb` | 以二進制模式讀取文件。     |
| `wb` | 以二進制模式寫入文件。     |

#### 範例：
```python
file = open("example.txt", "r")  # 讀取模式打開文件
```

---

### **2. 讀取文件**
可以使用以下方法從文件中讀取內容：

#### **`read()` 方法**
讀取整個文件內容為字符串。
```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

#### **`readline()` 方法**
逐行讀取文件內容（一次讀取一行）。
```python
with open("example.txt", "r") as file:
    line = file.readline()
    print(line)  # 輸出第一行
```

#### **`readlines()` 方法**
將文件的每一行存儲為列表。
```python
with open("example.txt", "r") as file:
    lines = file.readlines()
    print(lines)  # 輸出 ['第一行\n', '第二行\n', ...]
```

---

### **3. 寫入文件**
使用寫入模式（`w` 或 `a`）將內容寫入文件。

#### **`write()` 方法**
向文件中寫入字符串。
```python
with open("example.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("這是第二行內容。\n")
```

#### **`writelines()` 方法**
寫入多行內容（需傳入列表）。
```python
with open("example.txt", "a") as file:  # 追加模式
    file.writelines(["新的一行\n", "另一行\n"])
```

---

### **4. 文件自動關閉**
建議使用 `with` 語句處理文件，這樣可以確保文件在操作完成後自動關閉。
```python
with open("example.txt", "r") as file:
    content = file.read()
# 無需手動調用 file.close()，文件已自動關閉
```

如果不使用 `with`，需要手動調用 `close()`：
```python
file = open("example.txt", "r")
content = file.read()
file.close()  # 關閉文件
```

---

### **5. 處理文件不存在或讀寫錯誤**
使用 `try-except` 進行錯誤處理，避免程序因文件操作失敗而崩潰。
```python
try:
    with open("non_existent.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("文件不存在！")
```

---

