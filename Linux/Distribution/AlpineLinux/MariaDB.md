# 如何在 Alpine Linux 上安裝和配置 MariaDB ?

在 Alpine Linux 上安裝和配置 MariaDB 是個不錯的選擇。 

以下是完整步驟：

---

### 🧱 安裝 MariaDB

```sh
# 更新套件索引
sudo apk update

# 安裝 MariaDB 及其相關工具
sudo apk add mariadb mariadb-client mariadb-openrc
```

這會安裝伺服器、命令列工具，以及 OpenRC 所需的啟動腳本。

---

### 🔧 初始化資料庫

```sh
# 初始化 MariaDB 資料目錄
sudo mysql_install_db --user=mysql --basedir=/usr --datadir=/var/lib/mysql
```

這步驟會建立必要的系統表與資料結構。

---

### 🚀 啟動服務並設為開機自動啟動

```sh
# 啟用 MariaDB 服務
sudo rc-update add mariadb default

# 啟動 MariaDB
sudo service mariadb start
```

---

### 🔐 安全性設定（強烈建議）

```sh
sudo mysql_secure_installation
```

這個互動式腳本會引導完成以下設定：
- 設定 root 密碼
- 移除匿名使用者
- 禁止 root 遠端登入
- 移除 test 資料庫
- 重新載入權限表

---

### 🧪 測試登入

```sh
mysql -u root -p
```

輸入剛設定的密碼後，就能進入 MariaDB CLI。

---

### 🗂 建立資料庫與使用者（範例）

```sql
CREATE DATABASE mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'xi'@'localhost' IDENTIFIED BY 'securepassword';
GRANT ALL PRIVILEGES ON mydb.* TO 'xi'@'localhost';
FLUSH PRIVILEGES;
```

---
