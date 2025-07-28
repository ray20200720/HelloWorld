在 Python 中，**模塊** 和 **庫** 是程式開發中必不可少的組件，用於組織代碼和實現複用。以下是模塊與庫的使用方式詳解：

---

### **1. 模塊（Module）的基礎概念**
- **模塊** 是一個包含 Python 代碼的文件，副檔名為 `.py`。
- 模塊可以包含函數、類和變量，供其他程式使用。

#### **如何導入模塊**
1. **使用 `import` 語句**
   ```python
   import math  # 導入 Python 標準模塊
   print(math.sqrt(16))  # 輸出: 4.0
   ```

2. **使用 `from ... import ...` 語句**
   只導入模塊的部分內容。
   ```python
   from math import sqrt
   print(sqrt(25))  # 輸出: 5.0
   ```

3. **給模塊起別名**
   使用 `as` 為模塊或功能創建簡短別名。
   ```python
   import math as m
   print(m.pi)  # 輸出: 3.141592653589793
   ```

4. **導入所有內容（不推薦）**
   會導入模塊的所有函數與變量，可能導致命名衝突。
   ```python
   from math import *  # 不建議使用
   print(sin(0))  # 輸出: 0.0
   ```

---

### **2. 創建自定義模塊**
你可以創建自己的模塊，將代碼保存在 `.py` 文件中，然後在其他程序中導入它。

#### **範例：創建一個模塊**
創建一個名為 `my_module.py` 的文件：
```python
# my_module.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159
```

在主程序中使用：
```python
import my_module
print(my_module.greet("Alice"))  # 輸出: Hello, Alice!
print(my_module.PI)  # 輸出: 3.14159
```

---

### **3. Python 庫（Library）的基礎概念**
- **庫** 是一組模塊的集合，提供現成的功能。
- Python 提供了豐富的內建標準庫（如 `os`、`sys`、`json` 等），還有第三方庫（如 `NumPy`、`Pandas`）。

#### **標準庫的使用**
標準庫可以直接導入使用，例如：
```python
import os
print(os.getcwd())  # 輸出當前工作目錄
```

#### **第三方庫的安裝與使用**
1. 使用 `pip` 安裝庫：
   ```bash
   pip install requests
   ```

2. 在程式中導入並使用：
   ```python
   import requests
   response = requests.get("https://api.github.com")
   print(response.status_code)  # 輸出: 200（HTTP 狀態碼）
   ```

---

### **4. 模塊的查找路徑**
Python 通過 **模塊搜尋路徑** 尋找模塊。可以查看路徑如下：
```python
import sys
print(sys.path)  # 輸出模塊搜索路徑列表
```

如需在自定義目錄中尋找模塊，可以將目錄加入 `sys.path` 中。

---

### **5. 打包與分發模塊或庫**
如需將自己的模塊分發給其他用戶，可按照以下步驟：
1. 在項目中創建 `setup.py` 文件。
2. 使用工具如 `setuptools` 打包並發布到 PyPI（Python Package Index）。

範例 `setup.py` 文件：
```python
from setuptools import setup, find_packages

setup(
    name="my_package",
    version="0.1",
    packages=find_packages(),
)
```

---


