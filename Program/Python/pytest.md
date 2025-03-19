**pytest** 是 Python 最流行且強大的測試框架之一，用於編寫簡潔、高效的測試代碼。它支持單元測試、集成測試和功能測試，是替代內建 `unittest` 框架的理想選擇。

---

### **1. pytest 的特點**
- **簡潔的語法**：無需繼承特定的測試類，測試函數可直接使用 `assert` 語句。
- **自動發現測試**：能夠自動識別以 `test_` 開頭的文件、函數或類作為測試用例。
- **豐富的插件系統**：支持大量插件（如測試覆蓋率、性能測試等）來擴展功能。
- **強大的斷言重寫**：當斷言失敗時，會提供詳細的上下文信息以便於調試。
- **支持多種測試需求**：可進行單元測試、基於參數的測試以及分布式測試等。
- **與其他工具的集成**：例如對 Django、Flask 等 Web 框架的內建支持。

---

### **2. 安裝 pytest**
可以使用 pip 安裝 pytest：
```bash
pip install pytest
```

安裝後，在終端輸入以下命令檢查版本：
```bash
pytest --version
```

---

### **3. 基本使用**
#### **編寫測試文件**
創建一個文件，例如 `test_math.py`：
```python
# 被測試的函數
def add(a, b):
    return a + b

# 測試函數（名稱需以 test_ 開頭）
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
```

#### **運行測試**
運行測試命令：
```bash
pytest test_math.py
```
結果中會顯示測試的執行狀況，包括成功和失敗的用例。

---

### **4. 高級功能**
#### **4.1 參數化測試**
使用 `@pytest.mark.parametrize` 為測試提供多組參數：
```python
import pytest

@pytest.mark.parametrize("a, b, expected", [
    (2, 3, 5),
    (-1, 1, 0),
    (0, 0, 0)
])
def test_add(a, b, expected):
    assert add(a, b) == expected
```

#### **4.2 使用 Fixtures**
Fixtures 是 pytest 提供的一種機制，用於在測試執行之前準備數據或環境：
```python
import pytest

@pytest.fixture
def sample_data():
    return {"name": "Alice", "age": 30}

def test_sample_data(sample_data):
    assert sample_data["name"] == "Alice"
    assert sample_data["age"] == 30
```

#### **4.3 測試失敗時的詳細報告**
pytest 能捕獲並詳細顯示斷言失敗的信息，例如：
```python
def test_example():
    assert 1 + 1 == 3  # 錯誤示例
```
執行後的輸出：
```
assert 2 == 3
```

#### **4.4 測試覆蓋率**
可以使用 `pytest-cov` 插件檢查代碼的覆蓋率：
```bash
pip install pytest-cov
pytest --cov=<your_package>
```

---

### **5. 常用命令**
- **執行所有測試**：
  ```bash
  pytest
  ```
- **執行特定測試文件**：
  ```bash
  pytest test_file.py
  ```
- **顯示更詳細的輸出**：
  ```bash
  pytest -v
  ```
- **只運行失敗的測試**：
  ```bash
  pytest --lf
  ```
- **停止測試在第一個失敗處**：
  ```bash
  pytest -x
  ```

---

### **6. pytest 插件**
pytest 提供了一個豐富的插件生態系統，可以擴展其功能：
- **pytest-cov**：檢查測試覆蓋率。
- **pytest-django**：為 Django 項目提供測試支持。
- **pytest-xdist**：允許並行運行測試以提升效率。
- **pytest-html**：生成 HTML 格式的測試報告。

安裝插件的命令通常為：
```bash
pip install pytest-plugin-name
```

---

### **7. pytest 的優勢**
1. **易學易用**：更少的樣板代碼，語法簡單。
2. **調試方便**：支持與 IDE 和工具（如 PDB、VS Code 等）集成。
3. **靈活高效**：支持從簡單測試到分布式測試等多種場景。
4. **社群活躍**：擁有豐富的社區支持和插件資源。


