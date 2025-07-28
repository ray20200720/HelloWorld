Rocky Linux 是一個穩定且企業級的 Linux 發行版，基於 RHEL（Red Hat Enterprise Linux）。

以下是一些在 Rocky Linux 中常用的指令，涵蓋系統管理、網路、使用者管理和軟體操作：

### 🛠️ 系統管理常用指令
- `uname -a`：顯示系統資訊，包括核心版本
- `top` / `htop`：即時監控系統資源使用情況（`htop` 需要額外安裝）
- `df -h`：查看磁碟使用情況（以人類易讀格式）
- `du -sh *`：顯示目錄或檔案大小
- `journalctl`：查看 systemd 的日誌資訊
- `systemctl`：管理 systemd 服務（如啟動、停止、啟用開機自動啟動等）
  - `systemctl status [service]`
  - `systemctl start [service]`
  - `systemctl enable [service]`

### 🌐 網路相關指令
- `ip a`：查看網路介面與 IP
- `ping`：測試連線
- `curl` / `wget`：抓取網頁內容
- `nmcli`：NetworkManager CLI 工具，用來設定網路
- `ss` / `netstat`：查看網路連線情況（`netstat` 可能需要安裝 `net-tools`）

### 👥 使用者與權限管理
- `useradd` / `userdel` / `usermod`：新增、刪除、修改使用者
- `passwd`：變更密碼
- `chown`：變更檔案擁有者
- `chmod`：設定檔案權限
- `groups` / `id`：查看使用者所屬群組

### 📦 軟體與套件管理（dnf）
Rocky Linux 使用 `dnf` 作為套件管理工具（是 `yum` 的改進版本）：
- `dnf install [package]`：安裝套件
- `dnf remove [package]`：移除套件
- `dnf update`：更新系統
- `dnf list installed`：列出已安裝套件
- `dnf search [keyword]`：搜尋相關套件

---
