**BeautifulSoup** 是一個用於解析 HTML 和 XML 文件的 Python 庫。它可以幫助我們從網頁中提取結構化數據，並且提供了多種工具來高效操作網頁的 DOM 結構。BeautifulSoup 特別適合與網路爬蟲工具（如 `requests`）搭配使用，用於抓取和處理網頁數據。

---

### **1. 為什麼選擇 BeautifulSoup？**
- **易於上手**：語法簡潔，適合處理靜態 HTML。
- **強大的解析能力**：支持多種解析器（如 `html.parser`、`lxml` 等）。
- **靈活性高**：提供多種方式查找和篩選元素，例如通過標籤、類名、ID 等。
- **處理不規範 HTML**：能解析結構不完整的 HTML。

---

### **2. 安裝 BeautifulSoup**
使用 pip 安裝：
```bash
pip install beautifulsoup4
```

如果需要高效解析，建議安裝 `lxml` 或 `html5lib`：
```bash
pip install lxml html5lib
```

---

### **3. BeautifulSoup 快速入門**
以下是一個基本範例，展示如何使用 BeautifulSoup 解析 HTML 文檔並提取數據：

#### **範例：從網頁提取標題**
```python
from bs4 import BeautifulSoup

# 假設我們有以下 HTML 文本
html_doc = """
<html>
<head><title>Example Page</title></head>
<body>
<h1>Welcome to BeautifulSoup!</h1>
<p class="description">This is an example page.</p>
<a href="https://example.com">Visit Example.com</a>
</body>
</html>
"""

# 創建 BeautifulSoup 對象
soup = BeautifulSoup(html_doc, "html.parser")

# 提取標題
title = soup.title.string
print(f"Title: {title}")

# 提取 <h1> 標籤的內容
header = soup.h1.string
print(f"Header: {header}")

# 提取超連結的 href 屬性
link = soup.a["href"]
print(f"Link: {link}")
```

**輸出結果：**
```
Title: Example Page
Header: Welcome to BeautifulSoup!
Link: https://example.com
```

---

### **4. 核心功能**
#### **4.1 查找元素**
1. **單個元素**
   - 使用標籤名稱：
     ```python
     paragraph = soup.find("p")  # 查找第一個 <p> 元素
     print(paragraph.string)
     ```
   - 使用屬性篩選：
     ```python
     description = soup.find("p", {"class": "description"})
     print(description.string)
     ```

2. **多個元素**
   - 查找所有特定標籤：
     ```python
     links = soup.find_all("a")
     for link in links:
         print(link["href"])
     ```

#### **4.2 遍歷 DOM**
BeautifulSoup 提供了方便的方法來遍歷 DOM 樹：
- **父節點**：
  ```python
  print(soup.h1.parent.name)  # 輸出: body
  ```
- **子節點**：
  ```python
  for child in soup.body.children:
      print(child.name)
  ```
- **兄弟節點**：
  ```python
  print(soup.h1.next_sibling)  # 輸出: None（因為是換行符）
  ```

---

### **5. 應用場景**
#### **5.1 網路爬蟲**
BeautifulSoup 通常與 `requests` 結合使用：
```python
import requests
from bs4 import BeautifulSoup

# 發送 HTTP 請求
url = "https://example.com"
response = requests.get(url)

# 解析 HTML
soup = BeautifulSoup(response.text, "html.parser")

# 提取所有超連結
for link in soup.find_all("a"):
    print(link["href"])
```

#### **5.2 清理和格式化 HTML**
```python
# 格式化 HTML 結構
formatted_html = soup.prettify()
print(formatted_html)
```

#### **5.3 搜尋特定模式的數據**
支持正則表達式篩選元素：
```python
import re
matches = soup.find_all("a", href=re.compile("^https://"))
for match in matches:
    print(match["href"])
```

---

### **6. 注意事項**
1. **動態內容**：BeautifulSoup 無法處理 JavaScript 動態渲染的內容。如果遇到此類網頁，可以結合 **Selenium** 或 **Playwright** 進行處理。
2. **尊重網站規則**：在爬取網頁時，請遵守 **robots.txt**，確保行為合法且不影響網站的正常運行。

---

**BeautifulSoup** 是解析靜態網頁的強大工具，特別適合用於快速提取和整理 HTML 數據。
