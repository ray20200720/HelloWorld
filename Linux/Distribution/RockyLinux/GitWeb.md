在 Rocky Linux 上安裝和配置 GitWeb（Git 的 Web 界面）可以按照以下步驟進行：

### 1. 安裝 Git 和 GitWeb

1. 更新系統軟件包：
   ```bash
   sudo dnf update -y
   ```
2. 安裝 Git 和 GitWeb：
   ```bash
   sudo dnf install git gitweb -y
   ```

### 2. 配置 GitWeb

1. 編輯 GitWeb 的配置文件：
   ```bash
   sudo nano /etc/gitweb.conf
   ```
   確保配置文件中包含以下內容：
   ```perl
   $projectroot = "/var/lib/git";
   $git_temp = "/tmp";
   $home_link = $ENV{'SCRIPT_NAME'};
   ```

2. 創建 Git 存儲庫目錄並設置權限：
   ```bash
   sudo mkdir -p /var/lib/git
   sudo chown -R apache:apache /var/lib/git
   ```

### 3. 配置 Apache Web 服務器

1. 確保 Apache 已安裝：
   ```bash
   sudo dnf install httpd -y
   ```
2. 啟用 GitWeb 的 Apache 配置：
   ```bash
   sudo nano /etc/httpd/conf.d/gitweb.conf
   ```
   添加以下內容：
   ```apache
   Alias /gitweb /usr/share/gitweb
   <Directory /usr/share/gitweb>
       Options +FollowSymLinks +ExecCGI
       AddHandler cgi-script .cgi
       Require all granted
   </Directory>
   ```

3. 啟用並啟動 Apache：
   ```bash
   sudo systemctl enable httpd
   sudo systemctl start httpd
   ```

### 4. 測試 GitWeb

1. 打開瀏覽器，訪問 `http://<伺服器IP地址>/gitweb`。
2. 如果一切正常，應該能看到 GitWeb 的界面。

這些步驟應該能幫助在 Rocky Linux 上成功安裝和配置 GitWeb。

# 如何開啟gitweb的防火牆?

在 Rocky Linux 上開啟 GitWeb 的防火牆，需要允許 HTTP 或 HTTPS 流量，因為 GitWeb 通常通過 Apache Web 伺服器運行。以下是步驟：

### 1. 確認防火牆已啟用

檢查防火牆狀態：
```bash
sudo systemctl status firewalld
```

如果防火牆未啟用，可以啟動它：

```bash
sudo systemctl start firewalld
sudo systemctl enable firewalld
```

### 2. 開啟 HTTP 和 HTTPS 服務

允許 HTTP（80端口）和 HTTPS（443端口）流量：

```bash
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
```

### 3. 重新載入防火牆

應用更改：

```bash
sudo firewall-cmd --reload
```

### 4. 驗證防火牆規則

檢查當前的防火牆規則，確認 HTTP 和 HTTPS 已啟用：

```bash
sudo firewall-cmd --list-all
```

# 用瀏覽器訪問出現 Forbidden You don't have permission to access this resource.

The "Forbidden" error with the message "You don't have permission to access this resource" suggests that the web server (Apache) is denying access to GitWeb. This is often due to incorrect permissions or configurations. Here are some steps to troubleshoot and resolve the issue:

---

### 1. **Check Apache Configuration**

Ensure your Apache configuration file for GitWeb allows access. Open the configuration file:

```bash
sudo nano /etc/httpd/conf.d/gitweb.conf
```

Make sure it contains the following lines:

```apache
<Directory /usr/share/gitweb>
    Options +FollowSymLinks +ExecCGI
    AddHandler cgi-script .cgi
    Require all granted
</Directory>
```

The `Require all granted` line is critical—it grants access to all users.

After making changes, reload Apache:

```bash
sudo systemctl reload httpd
```

---

### 2. **Check File and Directory Permissions**

Verify that the directories and files GitWeb needs are accessible by the Apache user:

```bash
sudo chown -R apache:apache /usr/share/gitweb
sudo chown -R apache:apache /var/lib/git
sudo chmod -R 755 /usr/share/gitweb
sudo chmod -R 755 /var/lib/git
```

---

### 3. **Check SELinux Status**

If SELinux is enabled on your system, it could restrict Apache from accessing the required directories. Run:

```bash
sestatus
```

If SELinux is enforcing, set the correct context for GitWeb:

```bash
sudo chcon -R -t httpd_sys_content_t /usr/share/gitweb
sudo chcon -R -t httpd_sys_content_t /var/lib/git
```

---

### 4. **Check Apache Error Logs**

Examine the Apache error logs for more specific clues:

```bash
sudo tail -f /var/log/httpd/error_log
```

The logs can indicate whether the issue is permission-related, a misconfiguration, or something else.

---

### 5. **Firewall or Network Settings**

Ensure that the firewall is configured to allow HTTP traffic (as discussed earlier). Also, verify that you are accessing GitWeb via the correct URL.

---

