# Linux 上的常用軟體依照用途可以分成幾大類，以下是一些在桌面環境中非常受歡迎的選擇：

---

🧭 **瀏覽器與網路工具**
- **Firefox**：開源、隱私導向的瀏覽器，許多發行版預設搭載。
- **Chromium / Google Chrome**：速度快、擴充性強，支援同步 Google 帳號。
- **Brave**：主打隱私保護，內建廣告攔截。
- **Thunderbird**：Mozilla 開發的電子郵件客戶端，支援行事曆與聯絡人。

---

📝 **文書處理與筆記**
- **LibreOffice**：功能齊全的辦公套件，支援 Word、Excel、PowerPoint 格式。
- **OnlyOffice / WPS Office**：介面類似 Microsoft Office，適合習慣商業套件的使用者。
- **Joplin / AFFiNE**：支援 Markdown 的筆記軟體，適合知識管理與同步。
- **Okular / Xournal++**：PDF 閱讀與手寫筆記工具。

---

🎨 **圖片與影片編輯**
- **GIMP**：類似 Photoshop 的開源修圖工具。
- **Inkscape**：向量圖編輯器，適合設計 Logo 或插圖。
- **Krita**：專業繪圖軟體，支援動畫與筆刷。
- **Darktable / digiKam**：RAW 相片編輯與管理。
- **Kdenlive / Shotcut / OBS Studio**：影片剪輯與錄影直播工具。

---

🎵 **音樂與媒體播放**
- **VLC / MPV**：支援多種格式的影片播放器。
- **Audacity / LMMS**：音訊剪輯與音樂製作。
- **Tauon Music Box / Strawberry**：本地音樂播放與歌詞顯示。

---

🧑‍💻 **程式開發工具**
- **Emacs / Vim / VS Code / VSCodium**：文字編輯器與 IDE。
- **PyCharm / IntelliJ IDEA / Android Studio**：專業開發環境。
- **Git / RabbitVCS**：版本控制與圖形介面工具。
- **Docker / VirtualBox / QEMU/KVM**：容器與虛擬機管理。

---

🛠️ **系統工具與優化**
- **GParted / KDE Dolphin / Filelight**：磁碟與檔案管理。
- **Timeshift / Rclone / BleachBit**：備份、雲端同步與清理工具。
- **Htop / Conky / HardInfo**：系統監控與硬體資訊。
- **Flameshot / Kooha / Screen Recorder**：截圖與螢幕錄影。

---

🎮 **遊戲與模擬器**
- **Steam / Lutris / Bottles**：遊戲平台與模擬器整合。
- **RetroArch / Moonlight**：復古遊戲模擬與雲端串流。

---

# 如果打算把 Linux 當作伺服器使用，以下是一些根據用途分類的常見且實用的軟體推薦：

---

🌐 **Web 與應用伺服器**
- **Nginx**：高效能、輕量級的 Web 伺服器，也可作為反向代理與負載平衡器。
- **Apache HTTP Server**：老牌 Web 伺服器，模組豐富，支援多種語言與框架。
- **Node.js / Deno / Bun**：適合建構現代 JavaScript 應用的伺服器環境。
- **Gunicorn + Flask / Django**：Python Web 應用的常見部署組合。
- **Tomcat / WildFly**：Java 應用伺服器。

---

🗄️ **資料庫與儲存**
- **PostgreSQL**：功能強大且穩定的關聯式資料庫，支援複雜查詢與擴充。
- **MySQL / MariaDB**：輕量且廣泛使用的資料庫，適合中小型應用。
- **Redis**：記憶體型資料庫，適合快取與即時資料處理。
- **MongoDB**：NoSQL 文件型資料庫，適合彈性資料結構。
- **MinIO / Ceph**：物件儲存解決方案，類似 AWS S3。

---

🔐 **安全與存取控制**
- **OpenSSH / Dropbear**：遠端連線與管理。
- **Fail2ban**：防暴力破解，根據日誌封鎖 IP。
- **UFW / nftables / firewalld**：防火牆設定工具。
- **Let's Encrypt + Certbot**：免費 SSL 憑證自動更新。
- **Vault / GnuPG**：機密管理與加密工具。

---

📦 **容器與虛擬化**
- **Docker / Podman**：容器化部署與管理。
- **Kubernetes / K3s / MicroK8s**：容器編排平台。
- **QEMU / KVM / VirtualBox**：虛擬機管理。
- **LXC / LXD**：輕量虛擬化技術。

---

📡 **網路與監控**
- **Prometheus + Grafana**：系統與應用監控、視覺化儀表板。
- **Zabbix / Netdata**：即時監控與警示。
- **Cockpit**：Web 介面的系統管理工具。
- **Nagios / Icinga**：企業級監控與警示系統。
- **WireGuard / OpenVPN**：VPN 建立與管理。

---

📨 **郵件與通訊**
- **Postfix / Exim / Sendmail**：郵件伺服器。
- **Dovecot**：IMAP/POP3 郵件接收。
- **Mailcow / iRedMail**：整合式郵件伺服器套件。
- **Matrix / Rocket.Chat / Mattermost**：即時通訊平台。

---

🧰 **備份與自動化**
- **rsync / BorgBackup / Restic**：檔案備份與同步。
- **Ansible / SaltStack / Puppet**：自動化部署與設定管理。
- **Cron / systemd timers**：排程任務執行。

---

這些工具可以根據伺服器用途（如網站、API、資料庫、VPN、郵件、監控等）自由組合。

# 安裝 LEMP 架構（Linux + Nginx + MariaDB + PHP）

### 📦 延伸應用：LEMP 與 phpMyAdmin

- 若需要 PHP 與資料庫支援，可以安裝 LEMP 架構（Linux + Nginx + MariaDB + PHP）：

  ```bash
  sudo apt install php-fpm mariadb-server
  ```

