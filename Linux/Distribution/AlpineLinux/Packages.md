# 在 Alpine Linux 上還有什麼軟體可以安裝嗎?

Alpine Linux 雖然以「輕量、安全」著稱，但其套件庫其實非常豐富，能滿足多數開發、桌面、伺服器用途。
以下是一些可以考慮安裝的軟體類型與範例：

---

### 🧑‍💻 開發工具

- `build-base`：包含 GCC、make 等編譯工具
- `git` / `subversion`：版本控制系統
- `vim` / `nano` / `emacs`：文字編輯器
- `nodejs` / `python3` / `go` / `ruby`：程式語言環境
- `docker` / `podman`：容器管理工具

---

### 🖥️ 桌面環境與應用程式

- `xfce4` / `lxqt`：輕量級桌面環境
- `firefox` / `chromium`：網頁瀏覽器
- `flatpak`：安裝桌面應用程式的替代方式
- `fcitx5`：中文輸入法（可搭配 Flatpak 安裝新酷音）

---

### 🌐 網路與伺服器工具

- `nginx` / `apache2`：網頁伺服器
- `openssh` / `mosh`：遠端連線工具
- `postgresql` / `mariadb`：資料庫系統
- `php` / `perl` / `python3`：後端語言支援

---

### 🧹 系統工具與優化

- `htop` / `neofetch`：系統監控與資訊顯示
- `rsync` / `curl` / `wget`：檔案與網路工具
- `sudo` / `bash` / `coreutils`：基本系統工具

---

### 📦 安裝方式

使用 Alpine 的套件管理工具 `apk`：

```sh
apk update
apk add <package-name>
```

也可以使用 `apk search` 來探索可用套件：

```sh
apk search <keyword>
```

---

### 🧹 使用 apk 移除已安裝套件

```sh
apk del <package-name>
```

例如，要移除 `nodejs`：

```sh
apk del nodejs
```

這會卸載套件並移除相關檔案，但不會刪除使用者設定檔。

---

### 🗂 清理殘留設定檔（手動）

某些軟體可能在使用者目錄留下設定檔，例如：

- `~/.config/<app-name>/`
- `~/.local/share/<app-name>/`

可以使用以下指令查看並刪除：

```sh
ls -a ~
rm -rf ~/.config/<app-name>
rm -rf ~/.local/share/<app-name>
```

---

### 🔍 查找已安裝套件

如果不確定套件名稱，可以先列出所有已安裝套件：

```sh
apk info
```

或搜尋關鍵字：

```sh
apk search <keyword>
```

---

# TODO

- 如果有特定用途（例如前端開發、伺服器部署、桌面使用），我可以幫你列出更精準的推薦清單。
-  Alpine 打造成開發環境、桌面系統，還是其他用途