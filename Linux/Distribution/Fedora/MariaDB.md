# 如何安裝和配置 MariaDB?

在 Fedora 上安裝和配置 MariaDB 是一個相當直觀的流程，以下是完整步驟：

---

### 🧰 安裝 MariaDB

1. **更新系統套件**

   ```bash
   sudo dnf upgrade --refresh
   ```

2. **安裝 MariaDB 伺服器與客戶端**

   ```bash
   sudo dnf install mariadb-server mariadb
   ```

3. **啟動並設定開機自動啟動**

   ```bash
   sudo systemctl start mariadb
   sudo systemctl enable mariadb
   ```

4. **確認服務狀態**

   ```bash
   systemctl status mariadb
   ```

---

### 🔐 安全性配置

執行 MariaDB 的安全性腳本，設定 root 密碼、移除匿名使用者等：

```bash
sudo mysql_secure_installation
```

這個互動式腳本會引導完成以下設定：
- 設定 root 密碼
- 移除匿名使用者
- 禁止 root 遠端登入
- 移除測試資料庫
- 重新載入權限表

---

### 🗂️ 建立資料庫與使用者

1. **登入 MariaDB**

   ```bash
   mysql -u root -p
   ```

2. **建立資料庫與使用者**

   ```sql
   CREATE DATABASE mydb;
   CREATE USER 'xi'@'localhost' IDENTIFIED BY 'your_secure_password';
   GRANT ALL PRIVILEGES ON mydb.* TO 'xi'@'localhost';
   FLUSH PRIVILEGES;
   ```

---

### 🌐 防火牆設定（開放 3306 port）

```bash
sudo firewall-cmd --permanent --add-service=mysql
sudo firewall-cmd --reload
```

---

### 🛠️ 進階配置（可選）

MariaDB 的主設定檔位於 `/etc/my.cnf`，你可以根據需求調整：
- `bind-address = 0.0.0.0`：允許遠端連線
- `max_connections = 100`：最大連線數
- `slow_query_log = 1`：啟用慢查詢日誌

修改後記得重新啟動服務：

```bash
sudo systemctl restart mariadb
```

---
