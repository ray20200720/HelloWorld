# Ubuntu上 如何安裝和配置 MariaDB?

在 Ubuntu 上安裝與配置 MariaDB 是建立資料庫伺服器的常見步驟，以下是完整流程與資源:

---

### 🛠 安裝 MariaDB

1. **更新系統套件庫**

   ```bash
   sudo apt update
   sudo apt upgrade
   ```

2. **安裝 MariaDB 伺服器與客戶端**

   ```bash
   sudo apt install mariadb-server mariadb-client
   ```

3. **啟動並設定開機自動啟動**

   ```bash
   sudo systemctl start mariadb
   sudo systemctl enable mariadb
   ```

---

### 🔐 MariaDB 安全加固

1. **執行安全設定腳本**

   ```bash
   sudo mysql_secure_installation
   ```

   此腳本會引導：
   - 設定 root 密碼
   - 移除匿名使用者
   - 禁止遠端 root 登入
   - 刪除測試資料庫
   - 重新載入權限表

---

### 👤 建立管理用戶

1. **登入 MariaDB**

   ```bash
   sudo mariadb
   ```

2. **建立新用戶並授權**

   ```sql
   CREATE USER 'admin_user'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON *.* TO 'admin_user'@'localhost' WITH GRANT OPTION;
   FLUSH PRIVILEGES;
   ```

---

### 🧪 測試與基本操作

1. **登入並查看資料庫**

   ```bash
   sudo mariadb -u admin_user -p
   ```

2. **建立新資料庫**

   ```sql
   CREATE DATABASE test_db;
   SHOW DATABASES;
   ```

---

# 如何配置 MariaDB ?

在 Ubuntu 上配置 MariaDB 涵蓋安全性、使用者管理、性能優化等面向。

以下是完整指南:

---

### 🔐 1. 安全初始化設定

執行 MariaDB 內建的安全腳本：

```bash
sudo mysql_secure_installation
```

這會引導完成：
- 設定 root 密碼
- 移除匿名使用者
- 禁止 root 遠端登入
- 刪除測試資料庫
- 重新載入權限表

---

### 👤 2. 建立使用者與授權

登入 MariaDB：

```bash
sudo mariadb
```

建立新使用者並授權：

```sql
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

---

### ⚙️ 3. 修改配置檔案

MariaDB 的主要配置檔案為：
```bash
/etc/mysql/mariadb.conf.d/50-server.cnf
```

常見調整項目：

- 設定字符集：
  ```ini
  [mysqld]
  character-set-server=utf8mb4
  collation-server=utf8mb4_unicode_ci
  ```
- 啟用慢查詢日誌：
  ```ini
  slow_query_log = 1
  slow_query_log_file = /var/log/mysql/slow.log
  long_query_time = 2
  ```

---

### 📦 4. 離線安裝與配置（進階）

若無法連網，可使用離線安裝方式：

```bash
sudo dpkg -i mariadb-server_xxx.deb
```

---
