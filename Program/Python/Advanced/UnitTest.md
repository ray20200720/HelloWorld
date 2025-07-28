Python 提供了多種工具來進行**單元測試**，這些工具可幫助開發者為代碼中的各個組件（如函數和類）進行獨立測試，從而確保功能正確且代碼質量高。以下是常見的 Python 單元測試工具和相關使用方法：

---

### **1. unittest（內建工具）**
`unittest` 是 Python 標準庫中自帶的單元測試框架，它類似於其他語言中的 xUnit 系列框架。

#### **範例：使用 unittest**
```python
import unittest

# 被測試的函數
def add(a, b):
    return a + b

# 測試用例
class TestMathFunctions(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)  # 測試結果應為 5
        self.assertEqual(add(-1, 1), 0)  # 測試結果應為 0

if __name__ == "__main__":
    unittest.main()
```
#### 特點：
- 內建於 Python，無需額外安裝。
- 支持測試組織、設置（`setUp` 和 `tearDown`）等功能。
- 嚴謹但稍顯冗長。

---

### **2. pytest（強大且流行）**
`pytest` 是一個功能豐富且靈活的測試框架，支持簡潔的語法、豐富的插件系統以及自動測試發現。

#### **範例：使用 pytest**
安裝 `pytest`：
```bash
pip install pytest
```

範例代碼：
```python
# 被測試的函數
def multiply(a, b):
    return a * b

# 測試函數
def test_multiply():
    assert multiply(2, 3) == 6
    assert multiply(-1, 5) == -5
```

運行測試：
```bash
pytest test_file.py
```

#### 特點：
- 更簡潔的語法，不需要繼承特定類。
- 自動發現測試文件和測試函數。
- 支持豐富的插件（如測試覆蓋率、性能測試）。

---

### **3. nose2（nose 的繼任者）**
`nose2` 是 `nose` 的進化版本，是另一個簡潔的測試框架。

#### 安裝：
```bash
pip install nose2
```

#### 使用 nose2：
與 `unittest` 相似，nose2 可自動發現測試用例，支持更高效的測試運行。

運行測試：
```bash
nose2
```

#### 特點：
- 較少使用樣板代碼。
- 簡單集成，適合快速上手。

---

### **4. doctest（基於文檔的測試）**
`doctest` 用於驗證文檔字符串中的示例是否正確執行。適合對函數或模組的使用示例進行測試。

#### **範例：使用 doctest**
```python
def subtract(a, b):
    """
    Returns the result of subtracting b from a.

    Examples:
    >>> subtract(5, 3)
    2
    >>> subtract(10, 15)
    -5
    """
    return a - b

if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

運行後，`doctest` 會驗證文檔中的所有示例是否執行正確。

#### 特點：
- 測試直接集成到文檔中。
- 適合編寫簡單的示例，但不適合大型項目。

---

### **5. Hypothesis（基於屬性的測試）**
`Hypothesis` 是一個基於屬性測試的工具，它會為測試生成多組隨機數據，幫助發現邊界條件和隱藏的問題。

#### 安裝：
```bash
pip install hypothesis
```

#### **範例：使用 Hypothesis**
```python
from hypothesis import given
import hypothesis.strategies as st

# 測試函數
def reverse_string(s):
    return s[::-1]

# 使用 Hypothesis 生成隨機字符串
@given(st.text())
def test_reverse_string(s):
    assert reverse_string(reverse_string(s)) == s
```

運行測試時，Hypothesis 會自動生成多組測試數據並執行。

#### 特點：
- 自動生成測試數據。
- 幫助測試極端情況和邊界條件。

---

### **6. mock（模擬對象的測試）**
`mock` 用於模擬對象和方法的行為，適合測試與外部系統交互的代碼（如 API、數據庫）。

#### **範例：使用 mock**
```python
from unittest.mock import Mock

# 模擬 API 函數
api_call = Mock(return_value={"status": "success"})

# 測試代碼
response = api_call()
assert response["status"] == "success"

# 驗證是否被調用
api_call.assert_called_once()
```

#### 特點：
- 簡單模擬外部依賴，減少測試的複雜度。
- 與 `unittest` 集成良好。

---

### **7. 測試覆蓋率工具：coverage**
`coverage` 用於檢查測試代碼是否覆蓋了所有邏輯分支，幫助發現未測試的代碼。

#### 安裝與使用：
```bash
pip install coverage
coverage run -m pytest
coverage report
```

---

### **選擇合適的工具**
- **簡單測試**：`unittest` 和 `pytest` 足夠滿足大多數需求。
- **基於文檔的測試**：選擇 `doctest`。
- **需要高靈活性與插件支持**：推薦 `pytest`。
- **模擬依賴測試**：可以使用 `mock`。
- **隨機生成測試數據**：選擇 `Hypothesis`。

Python 的測試工具非常多樣，可以根據項目需求選擇最適合的工具組合。
