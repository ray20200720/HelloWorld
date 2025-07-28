**FastAPI** 是一個現代的、高性能的 Python Web 框架，專為快速構建 **RESTful API** 而設計。它基於 **Starlette** 和 **Pydantic**，提供快速、高效且易於使用的功能，並具有自動生成的互動式 API 文檔。

---

### **1. 為什麼選擇 FastAPI？**
- **高性能**：基於 ASGI（Asynchronous Server Gateway Interface），支持高並發。
- **自動生成文檔**：內建支持 OpenAPI 和 Swagger UI，用於生成 API 文檔和測試界面。
- **數據驗證**：基於 **Pydantic** 自動處理數據類型和驗證。
- **簡潔的代碼**：使用 Python 的型別提示，代碼更清晰且易於維護。
- **支持同步與異步編程**：輕鬆支持同步和異步任務。

---

### **2. 安裝 FastAPI 和運行環境**
要使用 FastAPI，首先需要安裝它和 ASGI 服務器（例如 Uvicorn）：
```bash
pip install fastapi uvicorn
```

---

### **3. 創建一個簡單的 FastAPI 應用**
以下是一個基本的 FastAPI 應用示例：

#### **步驟 1：建立主文件**
創建一個名為 `main.py` 的文件，並輸入以下內容：
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")  # 定義 GET 方法的根路由
async def read_root():
    return {"message": "Hello, FastAPI!"}
```

#### **步驟 2：啟動服務器**
運行以下命令啟動 Uvicorn 服務器：
```bash
uvicorn main:app --reload
```

訪問 `http://127.0.0.1:8000/`，應該可以看到返回的 JSON：
```json
{
  "message": "Hello, FastAPI!"
}
```

---

### **4. FastAPI 的核心功能**
#### **4.1 路由與請求方法**
FastAPI 支持所有 HTTP 方法（GET、POST、PUT、DELETE 等）：
```python
@app.post("/items/")
async def create_item(name: str):
    return {"name": name}
```

#### **4.2 路由參數**
- 動態路徑參數：
  ```python
  @app.get("/users/{user_id}")
  async def get_user(user_id: int):
      return {"user_id": user_id}
  ```
- 查詢參數：
  ```python
  @app.get("/search/")
  async def search(q: str = None):
      return {"query": q}
  ```

---

#### **4.3 數據驗證與模型**
使用 **Pydantic** 定義請求和響應的數據結構：
```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    is_available: bool = True  # 默認值

@app.post("/items/")
async def create_item(item: Item):
    return {"item": item}
```

---

#### **4.4 中間件**
可以使用中間件處理請求和響應：
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允許的域
    allow_methods=["*"],  # 允許的方法
    allow_headers=["*"],  # 允許的標頭
)
```

---

### **5. 自動生成 API 文檔**
FastAPI 自動生成互動式的 API 文檔：
1. **Swagger UI**：訪問 `http://127.0.0.1:8000/docs`
2. **ReDoc**：訪問 `http://127.0.0.1:8000/redoc`

這些界面非常直觀，可以用於測試 API。

---

### **6. 快速實現 RESTful API**
以下是一個快速構建 RESTful API 的示例：

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

items = {}

@app.post("/items/{item_id}")
async def create_item(item_id: int, item: Item):
    if item_id in items:
        raise HTTPException(status_code=400, detail="Item already exists")
    items[item_id] = item
    return items[item_id]

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    return items[item_id]

@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    del items[item_id]
    return {"message": "Item deleted"}
```

---

### **7. 部署 FastAPI 應用**
#### **使用 Uvicorn 部署**
直接運行：
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

#### **使用 Docker 部署**
創建一個名為 `Dockerfile` 的文件：
```dockerfile
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

然後構建並運行 Docker 容器：
```bash
docker build -t fastapi-app .
docker run -d -p 8000:8000 fastapi-app
```

---

**FastAPI** 是一個功能強大且高效的框架，非常適合構建現代化的 Web API。
