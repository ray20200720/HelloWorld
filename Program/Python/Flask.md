**Flask** 是一個用於構建 Web 應用的輕量級 Python Web 框架。它由 **Werkzeug**（一個 WSGI 工具包）和 **Jinja2**（模板引擎）驅動。Flask 的設計理念是簡單易用，靈活性高，適合快速開發小型應用或作為大型項目的基礎。它是一個 **微框架**，意味著它只提供核心功能，而將更多的功能（例如數據庫、表單處理、身份驗證等）作為插件擴展。

---

### **1. Flask 的特點**
- **輕量**：僅提供基礎的功能，沒有預設的數據庫和 ORM。
- **模塊化**：可以選擇自己需要的擴展或庫。
- **靈活性**：允許開發者自由選擇項目架構和設計模式。
- **內建開發者工具**：如 Debugger 和開發伺服器。
- **支持 Jinja2 模板**：便於創建動態 HTML。

---

### **2. 安裝 Flask**
可以通過 `pip` 安裝 Flask：
```bash
pip install flask
```

確認安裝完成後，可以在終端使用以下命令檢查 Flask 版本：
```bash
python -m flask --version
```

---

### **3. 快速上手：建立一個簡單的 Flask 應用**
以下是一個完整的範例，展示如何使用 Flask 構建一個簡單的 Web 應用。

#### **Step 1：建立主文件**
創建一個名為 `app.py` 的文件，並輸入以下代碼：
```python
from flask import Flask

app = Flask(__name__)  # 創建 Flask 應用

@app.route("/")  # 定義根路由
def home():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(debug=True)  # 啟動開發伺服器
```

#### **Step 2：運行應用**
在終端執行：
```bash
python app.py
```
瀏覽器中打開 `http://127.0.0.1:5000/`，即可看到輸出 **"Hello, Flask!"**。

---

### **4. Flask 的核心功能**
#### **4.1 路由**
路由用於將 URL 與特定函數綁定：
```python
@app.route("/about")
def about():
    return "About Page"
```

#### **4.2 傳遞 URL 參數**
可以在 URL 中傳遞動態參數：
```python
@app.route("/user/<username>")
def user_profile(username):
    return f"Hello, {username}!"
```
例如，訪問 `http://127.0.0.1:5000/user/Alice`，會返回 `Hello, Alice!`。

#### **4.3 模板渲染**
使用 Jinja2 渲染動態 HTML：
```python
from flask import render_template

@app.route("/welcome/<name>")
def welcome(name):
    return render_template("welcome.html", name=name)
```
創建 `templates/welcome.html` 文件：
```html
<!DOCTYPE html>
<html>
<head><title>Welcome</title></head>
<body>
    <h1>Welcome, {{ name }}!</h1>
</body>
</html>
```

#### **4.4 處理表單提交**
可以處理 GET 和 POST 請求：
```python
from flask import request

@app.route("/form", methods=["GET", "POST"])
def form_example():
    if request.method == "POST":
        data = request.form["input_data"]
        return f"You submitted: {data}"
    return '''
    <form method="post">
        <input type="text" name="input_data">
        <button type="submit">Submit</button>
    </form>
    '''
```

---

### **5. 組織更大的應用**
#### **藍圖（Blueprints）**
藍圖是一種組織大型應用的方式，用於將應用分解成多個模組。

建立藍圖：
```python
from flask import Blueprint

bp = Blueprint("example", __name__)

@bp.route("/example")
def example():
    return "This is a Blueprint route"
```

註冊到主應用：
```python
from flask import Flask
from example import bp

app = Flask(__name__)
app.register_blueprint(bp)
```

---

### **6. 實際應用案例**
#### **簡易的 REST API**
用 Flask 開發一個基本的 RESTful API：
```python
from flask import Flask, jsonify, request

app = Flask(__name__)

# 模擬數據
data = {"users": ["Alice", "Bob", "Charlie"]}

@app.route("/users", methods=["GET"])
def get_users():
    return jsonify(data)

@app.route("/users", methods=["POST"])
def add_user():
    new_user = request.json.get("name")
    data["users"].append(new_user)
    return jsonify(data), 201
```

#### **數據庫集成**
使用 Flask-SQLAlchemy 進行數據庫操作：
```bash
pip install flask-sqlalchemy
```

範例代碼：
```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///example.db"
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)

@app.route("/add_user/<name>")
def add_user(name):
    new_user = User(name=name)
    db.session.add(new_user)
    db.session.commit()
    return f"User {name} added!"

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
```

---

**Flask** 是一個輕量且靈活的框架，適合初學者快速構建 Web 應用，也可以通過擴展支持複雜的大型系統。
