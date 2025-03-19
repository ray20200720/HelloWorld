**正則表達式（Regular Expression, 簡稱 regex 或 regexp）** 是用於模式匹配和文本處理的強大工具。在 Python 中，`re` 模塊專門提供了處理正則表達式的功能。以下是正則表達式在 Python 中的詳細使用方式：

---

### **1. 匯入正則表達式模塊**
在使用正則表達式之前，需要先匯入 `re` 模塊：
```python
import re
```

---

### **2. 常見的正則表達式模式**
| 模式        | 說明                                    |
|-------------|---------------------------------------|
| `.`         | 匹配任意單個字符（除換行符）。            |
| `\d`        | 匹配任何數字（0-9）。                   |
| `\D`        | 匹配非數字字符。                        |
| `\w`        | 匹配任何單詞字符（字母、數字或下劃線）。   |
| `\W`        | 匹配非單詞字符。                        |
| `\s`        | 匹配任何空白字符（空格、制表符）。         |
| `\S`        | 匹配非空白字符。                        |
| `^`         | 匹配字符串的開頭。                      |
| `$`         | 匹配字符串的結尾。                      |
| `*`         | 匹配前面的元素 0 次或多次。               |
| `+`         | 匹配前面的元素 1 次或多次。               |
| `?`         | 匹配前面的元素 0 次或 1 次。              |
| `{n}`       | 精確匹配 n 次。                         |
| `{n, m}`    | 匹配 n 到 m 次。                        |
| `[abc]`     | 匹配任意字符 a、b 或 c。                 |
| `(x|y)`     | 匹配 x 或 y。                          |

---

### **3. 常用函數**
#### **3.1 `re.match()`**
從字符串的開頭開始匹配正則表達式：
```python
result = re.match(r"\d+", "123abc")
if result:
    print(result.group())  # 輸出: 123
```

#### **3.2 `re.search()`**
搜尋字符串中符合正則表達式的第一個匹配：
```python
result = re.search(r"\d+", "abc123xyz")
if result:
    print(result.group())  # 輸出: 123
```

#### **3.3 `re.findall()`**
返回所有匹配項，結果為列表：
```python
matches = re.findall(r"\d+", "abc123xyz456")
print(matches)  # 輸出: ['123', '456']
```

#### **3.4 `re.sub()`**
替換匹配的字符串：
```python
result = re.sub(r"\d+", "#", "abc123xyz456")
print(result)  # 輸出: abc#xyz#
```

#### **3.5 `re.split()`**
按照匹配模式分割字符串：
```python
parts = re.split(r"\s+", "Hello   World!")
print(parts)  # 輸出: ['Hello', 'World!']
```

#### **3.6 `re.compile()`**
將正則表達式編譯成一個正則對象，提升多次使用的效率：
```python
pattern = re.compile(r"\d+")
result = pattern.findall("abc123xyz456")
print(result)  # 輸出: ['123', '456']
```

---

### **4. 實際範例**

#### **4.1 驗證 Email 地址**
```python
email = "user@example.com"
pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
if re.match(pattern, email):
    print("有效的 Email 地址")
else:
    print("無效的 Email 地址")
```

#### **4.2 提取所有網址**
```python
text = "請訪問 https://example.com 或 http://test.com"
urls = re.findall(r"https?://[a-zA-Z0-9./-]+", text)
print(urls)  # 輸出: ['https://example.com', 'http://test.com']
```

#### **4.3 替換數字**
```python
text = "房間號是 101，價格是 300 元"
result = re.sub(r"\d+", "X", text)
print(result)  # 輸出: 房間號是 X，價格是 X 元
```

---

### **5. 注意事項**
1. **使用原始字符串（raw string）**：
   - 在定義正則表達式時，建議使用 `r"..."` 格式來避免反斜杠被誤解析。
   ```python
   pattern = r"\d+"  # 正確
   ```

2. **區分大小寫**：
   - 默認情況下正則表達式區分大小寫，如需忽略大小寫可使用 `re.IGNORECASE`：
   ```python
   result = re.search(r"hello", "HELLO", re.IGNORECASE)
   print(result.group())  # 輸出: HELLO
   ```

3. **性能問題**：
   - 避免過於複雜的正則表達式，可能導致性能低下。

---

正則表達式是一種高效處理文本數據的工具，適用於各種數據清洗和提取任務。
