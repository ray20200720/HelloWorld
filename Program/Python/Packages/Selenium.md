**Selenium** 是一個用於自動化 Web 瀏覽器操作的強大工具集。它主要用於進行自動化測試，但同時也被廣泛應用於爬蟲、網站互動、自動化流程處理等領域。

Selenium 支持多種瀏覽器（如 Chrome、Firefox、Edge 等）和多種程式語言（如 Python、Java、C# 等）。它通過與瀏覽器驅動（如 ChromeDriver、GeckoDriver）交互來模擬人類在網頁上的操作。

---

### **1. Selenium 的特點**
- **跨瀏覽器支持**：支援多種主流瀏覽器。
- **多語言支持**：能使用多種程式語言撰寫自動化腳本。
- **模擬用戶操作**：能進行點擊、輸入、滾動、拖放等操作。
- **適用於測試與爬蟲**：可檢查網頁功能是否正常或自動收集網頁數據。

---

### **2. 安裝 Selenium**
#### **步驟 1：安裝 Selenium**
使用以下命令安裝 Selenium 庫：
```bash
pip install selenium
```

#### **步驟 2：下載瀏覽器驅動**
例如，要使用 Chrome 瀏覽器，需要下載對應版本的 **ChromeDriver**：
1. 確認 Chrome 瀏覽器版本號。
2. 下載對應版本的 ChromeDriver：[下載連結](https://chromedriver.chromium.org/downloads)。
3. 將驅動解壓到電腦的某個文件夾中並記住路徑。

---

### **3. 快速開始：Selenium 自動化測試**
以下是一個簡單的範例，展示如何使用 Selenium 操控瀏覽器。

#### **範例：打開 Google 並進行搜尋**
```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# 初始化 WebDriver（指定 ChromeDriver 路徑）
driver = webdriver.Chrome(executable_path="path/to/chromedriver")

# 打開網頁
driver.get("https://www.google.com")

# 定位搜尋框並輸入查詢內容
search_box = driver.find_element(By.NAME, "q")
search_box.send_keys("Selenium Python")  # 模擬輸入
search_box.send_keys(Keys.RETURN)        # 模擬按下回車鍵

# 等待 5 秒並關閉瀏覽器
driver.implicitly_wait(5)
driver.quit()
```
**注意**：將 `"path/to/chromedriver"` 替換為 ChromeDriver 的實際路徑。

---

### **4. 核心功能**
#### **4.1 網頁元素定位**
使用不同方法查找網頁元素：
- **By.ID**：透過元素的 ID。
- **By.NAME**：透過元素的名字。
- **By.CLASS_NAME**：透過元素的 class。
- **By.CSS_SELECTOR**：使用 CSS 選擇器。
- **By.XPATH**：使用 XPath。

範例：
```python
element = driver.find_element(By.ID, "example_id")
element = driver.find_element(By.XPATH, "//div[@class='example_class']")
```

---

#### **4.2 操作網頁元素**
模擬操作網頁：
- 點擊按鈕：
  ```python
  button = driver.find_element(By.ID, "submit_button")
  button.click()
  ```
- 模擬輸入：
  ```python
  input_box = driver.find_element(By.NAME, "username")
  input_box.send_keys("my_username")
  ```
- 提取文字內容：
  ```python
  element = driver.find_element(By.ID, "title")
  print(element.text)
  ```

---

#### **4.3 等待與處理動態內容**
網頁可能存在動態加載的元素，使用顯式等待以確保元素已加載：
```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 等待元素加載
wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.ID, "dynamic_element_id")))
```

---

#### **4.4 截圖**
可以截取網頁畫面：
```python
driver.save_screenshot("screenshot.png")
```

---

### **5. 高級功能**
#### **5.1 處理多頁面窗口**
切換到新窗口：
```python
driver.switch_to.window(driver.window_handles[1])
```

#### **5.2 處理框架 (iframe)**
如果元素在 iframe 中，需切換到 iframe：
```python
driver.switch_to.frame("iframe_name")
driver.switch_to.default_content()  # 返回主頁面
```

#### **5.3 模擬滾動**
滾動到頁面底部：
```python
driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
```

---

### **6. 應用場景**
1. **自動化測試**：模擬用戶操作，檢查網頁功能是否正常。
2. **數據爬取**：抓取網站上特定數據（需注意網站服務條款和法律合規性）。
3. **流程自動化**：例如，自動化登錄、表單提交等操作。

---

Selenium 是一個功能強大的工具，能幫助高效完成瀏覽器自動化任務。
