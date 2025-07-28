Python 是一門強大且靈活的程式語言，非常適合用於自動化日常工作。以下是 Python 腳本在不同場景中實現自動化的一些方式和範例：

---

### **1. 文件與資料夾管理**
使用 Python 可以高效處理文件和資料夾操作，例如自動備份、批量重命名等。

#### **範例：自動整理資料夾**
```python
import os
import shutil

# 目標資料夾路徑
folder_path = "/path/to/your/folder"

# 文件分類依據
file_types = {
    "Images": [".jpg", ".jpeg", ".png", ".gif"],
    "Documents": [".pdf", ".docx", ".txt"],
    "Videos": [".mp4", ".avi"]
}

# 創建分類文件夾並移動文件
for file in os.listdir(folder_path):
    file_path = os.path.join(folder_path, file)
    if os.path.isfile(file_path):
        for folder_name, extensions in file_types.items():
            if file.endswith(tuple(extensions)):
                target_folder = os.path.join(folder_path, folder_name)
                os.makedirs(target_folder, exist_ok=True)
                shutil.move(file_path, target_folder)
```

---

### **2. 自動化網頁操作**
透過 `selenium` 自動執行網頁操作，例如自動登錄、表單提交等。

#### **範例：自動登錄網站**
```python
from selenium import webdriver
from selenium.webdriver.common.by import By

# 初始化瀏覽器驅動
driver = webdriver.Chrome(executable_path="path/to/chromedriver")
driver.get("https://example.com/login")

# 輸入用戶名和密碼
driver.find_element(By.ID, "username").send_keys("my_username")
driver.find_element(By.ID, "password").send_keys("my_password")
driver.find_element(By.ID, "login_button").click()
```

---

### **3. 自動化數據處理**
借助 `pandas` 庫來批量處理 Excel 文件或 CSV 數據，適合用於財務分析、數據清洗等。

#### **範例：合併多個 Excel 文件**
```python
import pandas as pd
import os

folder_path = "/path/to/excel/files"
all_data = pd.DataFrame()

for file in os.listdir(folder_path):
    if file.endswith(".xlsx"):
        file_path = os.path.join(folder_path, file)
        df = pd.read_excel(file_path)
        all_data = pd.concat([all_data, df], ignore_index=True)

all_data.to_excel("/path/to/output/merged.xlsx", index=False)
```

---

### **4. 自動化電子郵件處理**
使用 `smtplib` 和 `imaplib` 庫來發送或接收電子郵件。

#### **範例：自動發送電子郵件**
```python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# 發送者與接收者
sender_email = "your_email@example.com"
receiver_email = "recipient@example.com"
password = "your_password"

# 構造郵件
message = MIMEMultipart()
message["From"] = sender_email
message["To"] = receiver_email
message["Subject"] = "自動化郵件測試"
message.attach(MIMEText("這是一封自動發送的郵件。", "plain"))

# 發送郵件
with smtplib.SMTP("smtp.example.com", 587) as server:
    server.starttls()
    server.login(sender_email, password)
    server.send_message(message)
```

---

### **5. 爬取網頁數據**
使用 `requests` 和 `BeautifulSoup` 庫抓取網站上的數據。

#### **範例：爬取天氣資訊**
```python
import requests
from bs4 import BeautifulSoup

url = "https://example.com/weather"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

weather = soup.find("div", class_="weather-info").text
print(f"今日天氣：{weather}")
```

---

### **6. 自動化通知與提醒**
結合 `schedule` 或 `apscheduler` 庫實現定時任務，例如每日發送提醒或執行批處理任務。

#### **範例：每日定時提醒**
```python
import schedule
import time

def send_reminder():
    print("該喝水啦！")

# 設定每日提醒
schedule.every().day.at("10:00").do(send_reminder)

while True:
    schedule.run_pending()
    time.sleep(1)
```

---

### **7. 圖像處理與轉換**
使用 `Pillow` 庫進行圖像批量處理，例如壓縮圖片或轉換格式。

#### **範例：批量圖片格式轉換**
```python
from PIL import Image
import os

folder_path = "/path/to/images"

for file in os.listdir(folder_path):
    if file.endswith(".png"):
        file_path = os.path.join(folder_path, file)
        img = Image.open(file_path)
        img.save(file_path.replace(".png", ".jpg"), "JPEG")
```

---

### **8. 文件備份與同步**
透過 `shutil` 或 `os` 庫自動備份重要文件到雲端或本地存儲。

#### **範例：自動備份文件**
```python
import shutil
import os
from datetime import datetime

source_folder = "/path/to/source"
backup_folder = "/path/to/backup"
timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")

shutil.copytree(source_folder, os.path.join(backup_folder, f"backup_{timestamp}"))
```

---

Python 提供了大量的庫與工具，幫助實現幾乎所有的日常自動化需求。
