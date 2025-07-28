# Alpine Linux 如何做為桌面使用?

🖥️ Alpine Linux 雖然以輕量、安全和嵌入式用途著稱，但它也能搖身一變成為日常桌面系統。

以下是主要步驟與注意事項：

---

### 🛠️ 安裝基本系統

1. 從 [Alpine 官方網站](https://alpinelinux.org) 下載 x86_64 的 ISO 映像，選擇 Standard 版本。
2. 開機後進入 tty，使用 `root` 登入。
3. 執行 `setup-alpine` 指令，依照提示完成基本安裝（鍵盤、網路、時區、使用者帳號等）。

---

### 🖼️ 安裝圖形介面

Alpine 提供 `setup-desktop` 指令來快速安裝桌面環境：

```bash
setup-desktop
```

可以選擇以下桌面環境之一：
- XFCE（輕量且穩定）
- GNOME（現代化但資源需求較高）
- Plasma（KDE）
- MATE、LXQt、Sway 等

安裝完成後，系統會自動設定必要的服務（如 dbus、lightdm）並啟用開機自動啟動。

---

### 🌐 中文化與輸入法設定

1. 安裝中文字型與語言環境：

```bash
apk add font-noto-cjk musl-locales
```

2. 設定 `/etc/environment`：

```bash
LANG=zh_TW.UTF-8
LC_ALL=zh_TW.UTF-8
```

3. 安裝 Flatpak 並設定中文輸入法（如 Fcitx5 或 ibus-libpinyin）：

```bash
apk add flatpak
flatpak remote-add --user flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install org.fcitx.Fcitx5 org.fcitx.Fcitx5.Addon.ChineseAddons
```

4. 設定輸入法環境變數並啟用自動啟動。

---

### 📦 軟體安裝與應用商店

Alpine 使用 `apk` 套件管理器，但也可透過 Flatpak 擴充應用程式來源：

```bash
apk add gnome-software
apk add apk-polkit-server
rc-update add apk-polkit-server default
rc-service apk-polkit-server start
```

這樣 GNOME 軟體中心就能正常運作並顯示更多應用程式。

---

### ⚠️ 注意事項

- Alpine 使用 `musl` 而非 `glibc`，某些程式（如某些專有驅動或輸入法）可能不相容。
- 中文支援與輸入法設定需額外手動處理，並非開箱即用。
- 系統極度精簡，適合進階使用者或喜歡自訂環境者。

---

