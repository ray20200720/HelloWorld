# 如何在Alpine Linux 上安裝 Apache HTTP Server?

🧱 在 Alpine Linux 上安裝 Apache HTTP Server（又稱 `httpd`）非常簡潔，以下是完整步驟：

---

### ⚙️ 安裝與啟動 Apache

1. **更新套件庫**
   ```sh
   apk update && apk upgrade
   ```

2. **安裝 Apache**
   ```sh
   apk add apache2
   ```

3. **啟動 Apache 服務**
   ```sh
   rc-service apache2 start
   rc-update add apache2 default
   ```

4. **確認是否運行中**
   ```sh
   service apache2 status
   ```

5. **測試首頁**
   - 預設網頁位於 `/var/www/localhost/htdocs/index.html`
   - 可用瀏覽器開啟 `http://localhost` 或 `http://你的IP`，看到 “It works” 頁面即表示成功

---

### 🧩 基本設定檔位置

| 功能             | 路徑                                 |
|------------------|--------------------------------------|
| 主設定檔         | `/etc/apache2/httpd.conf`            |
| 網頁根目錄       | `/var/www/localhost/htdocs`          |
| 虛擬主機設定     | `/etc/apache2/vhosts.d/`             |
| SSL 設定檔       | `/etc/apache2/conf.d/ssl.conf`       |

可以編輯 `httpd.conf` 來調整 `DocumentRoot`、模組載入、日誌路徑等。

---

### 🌐 建立自訂網頁

```sh
echo '<h1>Hello from Alpine Apache!</h1>' > /var/www/localhost/htdocs/index.html
```

---

### 🔒 啟用 SSL（可選）

1. **安裝 SSL 模組**
   ```sh
   apk add apache2-ssl
   ```

2. **編輯設定檔**
   - 在 `httpd.conf` 中取消註解：
     ```apache
     LoadModule ssl_module modules/mod_ssl.so
     Include conf/extra/httpd-ssl.conf
     ```

3. **建立自簽憑證（測試用）**
   ```sh
   mkdir -p /etc/apache2/ssl
   openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
     -keyout /etc/apache2/ssl/apache.key \
     -out /etc/apache2/ssl/apache.crt
   ```

4. **重啟 Apache**
   ```sh
   rc-service apache2 restart
   ```

---
