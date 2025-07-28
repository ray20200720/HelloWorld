# Alpine Linux 是什麼?

🧊 **Alpine Linux** 是一個極簡、安全、資源效率極高的 Linux 發行版，特別適合用於容器化環境（如 Docker）、虛擬機、嵌入式系統與雲端部署。

它的設計理念是「小巧、簡單、安全」。

---

### 🔧 核心特色

- **輕量級**：基本映像僅約 5–8 MB，極大減少容器大小與部署時間。
- **安全導向**：
  - 使用 **musl libc** 和 **BusyBox** 取代傳統的 glibc 和 GNU 工具，減少攻擊面。
  - 所有套件都啟用堆疊保護與位置獨立執行（PIE）。
- **包管理系統**：使用自家開發的 `apk`（Alpine Package Keeper），支援快速安裝、升級與移除套件。
- **初始化系統**：採用 **OpenRC** 而非 systemd，保持簡潔與可控性。
- **支援平台廣泛**：x86、x86_64、ARM、AArch64 等架構皆可運行。

---

### 🚀 常見用途

- **Docker 容器基礎映像**：許多官方映像（如 `node:alpine`、`python:alpine`）都以 Alpine 為基礎。
- **雲端與微服務架構**：適合快速啟動、低資源消耗的服務。
- **嵌入式設備**：如路由器、防火牆、VPN、VoIP 裝置等。
- **RAM 運行模式**：可設定為從記憶體運行，適合臨時或高可靠性場景。

---

### 🧪 技術細節一覽

| 項目             | 說明                                 |
|------------------|--------------------------------------|
| 發行年份         | 2005 年                              |
| 最新穩定版本     | 3.22.0（2025 年 5 月）          |
| C 標準庫         | musl libc                            |
| 套件管理         | apk-tools                            |
| 預設工具集       | BusyBox                              |
| 初始化系統       | OpenRC                                |
| 授權             | GPLv2、MIT、BSD                      |

---

# 如何安裝?

🛠️ 安裝 Alpine Linux 的流程相當簡潔，以下是標準步驟，適用於實體機或虛擬機（如 VirtualBox、VMware）：

---

### 📥 1. 下載 ISO 映像檔

- 前往 [Alpine 官方下載頁面](https://alpinelinux.org/downloads/)
- 選擇 `x86_64` 架構的 **Standard** 版本（適合一般用途）
- 將 ISO 寫入 USB 或掛載至虛擬機

---

### 🚀 2. 開機並啟動安裝

- 開機後進入 Alpine 的命令列介面
- 使用帳號 `root` 登入（預設無密碼）
- 執行安裝指令：`setup-alpine`

---

### 🧩 3. 安裝流程指令稿會依序詢問：

1. **鍵盤配置**：例如 `us` 或 `tw`
2. **主機名稱**：自訂名稱，如 `alpine-dev`
3. **網路設定**：選擇網卡（如 `eth0`），使用 DHCP 或手動設定
4. **Root 密碼**：輸入並確認密碼
5. **時區**：例如 `Asia/Taipei`
6. **Proxy 設定**：若無則輸入 `none`
7. **套件鏡像站點**：可選擇自動偵測最快的（輸入 `f`）
8. **新增使用者**：可建立一般帳號並設定密碼
9. **SSH 伺服器**：選擇 `openssh` 以支援遠端登入
10. **磁碟安裝**：
    - 選擇磁碟（如 `sda`）
    - 使用方式：輸入 `sys` 表示安裝為系統磁碟
    - 確認格式化：輸入 `y`

---

### 🔄 4. 完成安裝後

- 輸入 `poweroff` 關機
- 移除 ISO 映像
- 重新開機進入 Alpine 系統
- 登入 `root`，執行：
  ```sh
  apk update && apk upgrade
  ```

---

### 🖥️ 5. 安裝圖形介面（可選）

若想使用桌面環境（如 XFCE）：

```sh
setup-xorg-base
setup-desktop
apk add xfce4 xfce4-terminal lightdm
rc-update add dbus
rc-update add lightdm
```

---

# 如何安裝 nginx? 

在 Alpine Linux 上安裝 Nginx 非常簡潔，以下是完整步驟，適合你這種喜歡模組化與可維護性的使用者風格：

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

# 如何安裝 Apache? 

🧱 在 Alpine Linux 上安裝 Apache HTTP Server（又稱 `httpd`）非常簡潔，以下是完整步驟，適合你這種偏好模組化與可維護性的使用者風格：

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

你可以編輯 `httpd.conf` 來調整 `DocumentRoot`、模組載入、日誌路徑等。

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

# TODO

如果正在使用 Docker 或設計輕量級系統，Alpine Linux 是非常值得探索的選擇。
規劃映像、設定環境或撰寫 Dockerfile。

這樣就完成基本安裝了！如果你是要用 Alpine 作為 Docker 映像或嵌入式系統，流程會更簡化。我可以幫你撰寫 Dockerfile 或設定自動化腳本，要不要一起來設計一個 Alpine 專案？ 😄

### 🔍 進階設定建議

- 若你想整合 PHP，可安裝 `php7-fpm` 並設定反向代理。
- 若你偏好模組化設定，可將虛擬主機配置放在 `/etc/nginx/http.d/` 目錄中。
- 若你使用 Docker，可直接使用 `nginx:alpine` 映像並掛載自訂設定。

---

如果你想把這套流程包裝成 Emacs 的自動化腳本或 shell module，我可以幫你設計一個 `use-package` 風格的配置流程。要不要來試試？ 😄
