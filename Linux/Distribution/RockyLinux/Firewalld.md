# Rocky Linux 防火牆管理

Rocky Linux 預設使用 **firewalld** 搭配 `firewall-cmd` 指令來管理防火牆，這是一個動態管理的 firewall 工具，支援區域、服務、連接埠等設定。

這裡是一些常用指令🔐：

---

### 🔍 基本狀態與資訊查詢
- `firewall-cmd --state`：查看 firewalld 是否正在執行
- `firewall-cmd --list-all`：顯示目前區域的所有設定（含服務、連接埠等）
- `firewall-cmd --get-active-zones`：列出目前活動中的區域及其介面
- `firewall-cmd --get-services`：列出已知的服務清單（例如 ssh, http）

---

### ➕ 新增服務 / 連接埠（暫時與永久）

- 開放 HTTP（暫時）：
  ```bash
  firewall-cmd --add-service=http
  ```

- 開放 HTTP（永久）：
  ```bash
  firewall-cmd --permanent --add-service=http
  firewall-cmd --reload
  ```

- 開放 TCP 連接埠（例如 8080）：
  ```bash
  firewall-cmd --permanent --add-port=8080/tcp
  firewall-cmd --reload
  ```

---

### ➖ 移除服務 / 連接埠

- 移除 HTTP 服務（永久）：
  ```bash
  firewall-cmd --permanent --remove-service=http
  firewall-cmd --reload
  ```

- 移除特定連接埠：
  ```bash
  firewall-cmd --permanent --remove-port=8080/tcp
  firewall-cmd --reload
  ```

---

### 🔐 自訂區域與網路介面

- 指定某個網路介面使用 `public` 區域：
  ```bash
  firewall-cmd --zone=public --change-interface=eth0
  ```

- 新增特定服務到某個區域：
  ```bash
  firewall-cmd --zone=public --add-service=http
  ```

---

Firewalld 是一款 **動態防火牆管理工具**，主要用於 Linux 系統中管理網路流量與安全規則。它由 Red Hat 開發，設計目的是讓防火牆設定更簡單、更彈性，並支援即時修改而不需重新啟動服務。

---

### 🔧 Firewalld 的核心特色

- **動態規則管理**：可以在不中斷網路連線的情況下即時新增、修改或移除防火牆規則。
- **區域（Zone）概念**：根據網路介面或來源 IP 將流量分配到不同的安全區域，每個區域有不同的信任等級與規則。
- **支援多種協定**：包括 IPv4、IPv6、乙太網橋等。
- **後端整合**：使用 `iptables`、`nftables` 等作為底層封包處理引擎。
- **命令列與圖形介面**：提供 `firewall-cmd` 指令與 GUI 工具（如 `firewall-config`）供使用者操作。

---

### 🧱 常見區域（Zone）範例

| 區域名稱     | 說明                                   |
|--------------|----------------------------------------|
| `public`     | 公開網路，僅允許基本服務如 SSH         |
| `home`       | 家用網路，信任度較高                   |
| `internal`   | 內部網路，適用於企業內部環境           |
| `trusted`    | 完全信任，允許所有流量                 |
| `drop`       | 丟棄所有進入封包，不回應               |
| `dmz`        | 非軍事區域，允許部分外部連線           |

---

### 🚀 為什麼選擇 firewalld？

- 相較於傳統的 `iptables`，firewalld 更容易維護與理解。
- 適合伺服器與桌面環境，支援多網卡與多網段配置。
- 可與 NetworkManager、libvirt、Docker 等工具整合使用。

---

