**Django** 是一個高級的 Python Web 框架，旨在讓 Web 應用的開發更快速、更高效，同時避免重複工作。它的設計理念是 **快速開發（Rapid Development）** 和 **乾淨且實用的代碼（DRY：Don't Repeat Yourself）**，非常適合開發從簡單的內容管理系統到複雜的數據驅動網站的各種應用。

---

### **1. Django 的特點**
- **全功能**：內建功能豐富，包含用戶身份驗證、數據庫管理、模板渲染、表單處理等，避免了對外部工具的依賴。
- **可擴展**：支持插件和自定義應用模塊，使其適合各種項目規模。
- **安全性**：內置防範常見 Web 漏洞的安全功能，如跨站請求偽造（CSRF）、跨站腳本攻擊（XSS）、SQL 注入等。
- **強大的 ORM**：Django 的 ORM（對象關係映射）使得與數據庫的交互簡單而高效。
- **社群支持**：擁有大量資源、文檔和積極的開源社群支持。

---

### **2. 如何安裝 Django**
在開發環境中使用以下命令安裝 Django：
```bash
pip install django
```

確認安裝成功：
```bash
django-admin --version
```

---

### **3. 使用 Django 構建應用**
以下是一個簡單的 Django 項目實例，展示如何快速構建 Web 應用。

---

#### **步驟 1：創建項目**
使用 `django-admin startproject` 命令創建新項目：
```bash
django-admin startproject myproject
cd myproject
```
這將生成以下結構：
```
myproject/
    manage.py         # 管理工具腳本
    myproject/
        __init__.py   # 指定為 Python 包
        settings.py   # 配置文件
        urls.py       # URL 路由
        wsgi.py       # 部署文件
```

---

#### **步驟 2：運行開發伺服器**
啟動 Django 的內建開發伺服器，預覽應用：
```bash
python manage.py runserver
```
打開瀏覽器並訪問 `http://127.0.0.1:8000/`，應該可以看到 Django 的歡迎頁面。

---

#### **步驟 3：創建應用**
在 Django 中，應用（App）是功能模塊的基本單位。使用以下命令創建一個新的應用：
```bash
python manage.py startapp myapp
```
生成的結構如下：
```
myapp/
    admin.py          # 管理界面設置
    apps.py           # 應用配置
    models.py         # 定義數據庫模型
    views.py          # 定義視圖函數
    urls.py           # 定義應用路由（需手動創建）
    migrations/       # 數據庫遷移文件
```

在 `settings.py` 文件中註冊應用：
```python
INSTALLED_APPS = [
    'myapp',
    ...
]
```

---

#### **步驟 4：定義路由**
在 `myapp` 中創建一個名為 `urls.py` 的文件，並定義應用的路由：
```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # 根路徑
]
```

在主項目 `urls.py` 中包含應用的路由：
```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),  # 包含 myapp 的路由
]
```

---

#### **步驟 5：定義視圖**
在 `myapp/views.py` 中定義視圖函數：
```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")
```

再次訪問 `http://127.0.0.1:8000/`，即可看到 **"Hello, Django!"**。

---

### **4. 模板系統**
Django 的模板語言允許您輕鬆創建動態 HTML 頁面。

#### **使用模板**
在 `myapp/views.py` 中渲染模板：
```python
from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {'name': 'Django'})
```

在 `myapp/templates/` 資料夾中創建模板文件 `home.html`：
```html
<!DOCTYPE html>
<html>
<head><title>Welcome</title></head>
<body>
    <h1>Welcome to {{ name }}</h1>
</body>
</html>
```

---

### **5. 數據庫與 ORM**
Django 使用 ORM 簡化數據庫操作。您可以在 `models.py` 文件中定義數據模型：
```python
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    published = models.DateTimeField(auto_now_add=True)
```

應用遷移命令以創建數據庫表：
```bash
python manage.py makemigrations
python manage.py migrate
```

使用 Django 提供的數據庫 API 操作數據：
```python
from myapp.models import Article

# 創建記錄
article = Article.objects.create(title="First Article", content="This is a test article.")

# 查詢記錄
articles = Article.objects.all()
```

---

### **6. 管理界面**
Django 自帶的管理界面非常實用，可以快速進行數據管理。

在 `admin.py` 中註冊模型：
```python
from django.contrib import admin
from .models import Article

admin.site.register(Article)
```

啟動開發伺服器，訪問 `http://127.0.0.1:8000/admin/`，進行數據管理。

---

### **7. Django 的擴展功能**
- **用戶身份驗證**：Django 內建用戶登錄、註冊功能。
- **REST API**：使用 **Django REST framework** 快速構建 API。
- **國際化**：內建多語言支持。

---

Django 是一個功能完整、易於擴展的框架，無論是用於構建小型網站還是大型應用都非常適合。
