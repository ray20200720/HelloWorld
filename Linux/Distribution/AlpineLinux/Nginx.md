# 如何在 Alpine Linux 上安裝 Nginx?

在 Alpine Linux 上安裝 Nginx 非常簡潔，以下是完整步驟：

---

### 🧰 安裝步驟總覽

1. **更新套件庫**
   ```sh
   apk update && apk upgrade
   ```

2. **安裝 Nginx**
   ```sh
   apk add nginx
   ```

3. **建立使用者與目錄（可選）**
   ```sh
   adduser -D -g 'www' www
   mkdir /www
   chown -R www:www /www
   ```

4. **設定 Nginx 配置檔**
   - 備份原始設定：
     ```sh
     mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.orig
     ```
   - 編輯 `/etc/nginx/nginx.conf`，設定基本伺服器：
     ```nginx
     user www;
     worker_processes auto;

     events {
         worker_connections 1024;
     }

     http {
         include       /etc/nginx/mime.types;
         default_type  application/octet-stream;
         sendfile      on;
         keepalive_timeout 3000;

         server {
             listen       80;
             server_name  localhost;
             root         /www;
             index        index.html index.htm;

             error_page   500 502 503 504  /50x.html;
             location = /50x.html {
                 root /var/lib/nginx/html;
             }
         }
     }
     ```

5. **建立測試頁面**
   ```sh
   echo '<h1>Server is online</h1>' > /www/index.html
   ```

6. **啟動 Nginx**
   ```sh
   rc-service nginx start
   rc-update add nginx default
   ```

7. **驗證設定是否正確**
   ```sh
   nginx -t
   ```

---


