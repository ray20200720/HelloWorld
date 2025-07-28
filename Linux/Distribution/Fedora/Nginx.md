# Fedora 上 如何安裝和配置 Nginx ?

在 Fedora 上安裝和配置 Nginx 非常簡單，以下是完整步驟：

### 🧰 安裝 Nginx

1. **更新系統套件**

   ```bash
   sudo dnf upgrade --refresh
   ```

2. **安裝 Nginx**

   ```bash
   sudo dnf install nginx
   ```

3. **確認安裝版本**

   ```bash
   nginx -v
   ```

### ⚙️ 啟用與啟動服務

1. **啟用開機自動啟動**

   ```bash
   sudo systemctl enable nginx
   ```

2. **立即啟動 Nginx**

   ```bash
   sudo systemctl start nginx
   ```

3. **檢查服務狀態**

   ```bash
   systemctl status nginx
   ```

### 🔐 配置防火牆（開放 HTTP/HTTPS）

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### 🧪 測試安裝是否成功

打開瀏覽器輸入 `http://localhost` 或伺服器 IP，如果看到 Nginx 的歡迎頁面，就代表安裝成功。

---

### 🗂️ 建立網站目錄與測試頁面

1. **建立網站根目錄**

   ```bash
   sudo mkdir -p /var/www/example.com/html
   sudo chown -R $USER:$USER /var/www/example.com/html
   sudo chmod -R 755 /var/www/example.com
   ```

2. **建立測試 HTML 頁面**

   ```bash
   nano /var/www/example.com/html/index.html
   ```
   
   內容範例：

   ```html
   <html>
     <head><title>Welcome</title></head>
     <body><h1>成功！Nginx 已啟動</h1></body>
   </html>
   ```

---

### 🧱 建立 Server Block（虛擬主機）

1. **建立設定資料夾**

   ```bash
   sudo mkdir /etc/nginx/sites-available
   sudo mkdir /etc/nginx/sites-enabled
   ```

2. **修改主設定檔以載入 Server Block**

   在 `/etc/nginx/nginx.conf` 的 `http` 區塊中加入：

   ```nginx
   include /etc/nginx/sites-enabled/*.conf;
   ```

3. **建立 Server Block 設定檔**

   ```bash
   sudo nano /etc/nginx/sites-available/example.com.conf
   ```

   內容範例：

   ```nginx
   server {
       listen 80;
       server_name example.com www.example.com;
       root /var/www/example.com/html;
       index index.html;
       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

4. **啟用 Server Block**

   ```bash
   sudo ln -s /etc/nginx/sites-available/example.com.conf /etc/nginx/sites-enabled/
   ```

5. **測試設定語法並重新載入 Nginx**

   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

