# Ubuntu上 如何安裝和配置 Nginx ?

在 Ubuntu 上安裝和配置 Nginx 非常簡單，以下是完整的步驟與資源:

---

### 🛠 安裝 Nginx

1. **更新系統套件庫**

   ```bash
   sudo apt update
   sudo apt upgrade
   ```

2. **安裝 Nginx**

   ```bash
   sudo apt install nginx
   ```

3. **啟動並設定開機自動啟動**

   ```bash
   sudo systemctl start nginx
   sudo systemctl enable nginx
   ```

4. **確認是否安裝成功**
   - 在瀏覽器輸入 `http://伺服器IP`，應該會看到 Nginx 的歡迎頁面。

---

### ⚙️ 基本配置

1. **主要配置檔案位置**

   - `/etc/nginx/nginx.conf`：主設定檔
   - `/etc/nginx/sites-available/`：虛擬主機設定
   - `/etc/nginx/sites-enabled/`：啟用的虛擬主機設定（透過符號連結）

2. **建立虛擬主機設定**

   ```bash
   sudo nano /etc/nginx/sites-available/mywebsite
   ```

   範例內容：

   ```nginx
   server {
       listen 80;
       server_name mywebsite.com www.mywebsite.com;
       root /var/www/mywebsite;
       index index.html;
   }
   ```

3. **啟用虛擬主機並重新載入 Nginx**

   ```bash
   sudo ln -s /etc/nginx/sites-available/mywebsite /etc/nginx/sites-enabled/
   sudo systemctl reload nginx
   ```
---

### 🔐 SSL 與反向代理

1. **安裝 Certbot 並申請 SSL 憑證**

   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d mywebsite.com -d www.mywebsite.com
   ```

2. **設定反向代理**

   ```nginx
   location /api/ {
       proxy_pass http://localhost:3000;
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
   }
   ```

---

