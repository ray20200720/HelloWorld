# npm warn

## globalignorefile

```
npm warn Unknown builtin config "globalignorefile". This will stop working in the next major version of npm.
```

這個警告訊息的意思是：你目前的 npm 設定檔（例如 `.npmrc`）中使用了名為 `"globalignorefile"` 的內建設定項目，但這個項目其實不是 npm 官方支援的設定選項，因此被標記為「未知的內建設定」。

🔧 **詳細說明：**
- `"globalignorefile"` 曾經是某些版本中提到的設定，用來指定全域 `.npmignore` 檔案的位置。
- 然而，這個功能並未被正式實作或支援，屬於「文件有提到但實際上無效」的狀況。
- npm 現在會警告你這個設定是未知的，並表示在下一個主要版本中將完全移除這項支援。

✅ **你可以怎麼做：**
- 檢查你的 `.npmrc` 檔案，找出是否有 `globalignorefile=...` 這類設定。
- 如果有，建議你移除它，以避免未來 npm 更新後出現錯誤。
- 若你是想忽略某些檔案，可以改用 `package.json` 裡的 `"files"` 欄位來指定要包含的檔案，這種方式更穩定也更推薦。

## .npmrc 設定檔在哪裡 ?

📁 `.npmrc` 是 npm 的設定檔，它可以存在於多個位置，依照用途和優先順序不同：

### 🏠 使用者層級
- **路徑**：`~/.npmrc`（macOS/Linux）或 `%USERPROFILE%\.npmrc`（Windows）
- **用途**：設定個人使用者的 npm 行為，例如預設 registry、proxy 等。

### 📦 專案層級
- **路徑**：專案根目錄下的 `.npmrc`（與 `package.json` 同層）
- **用途**：針對特定專案設定，例如使用不同的鏡像源或安裝策略。

### 🌐 全域層級
- **路徑**：`$PREFIX/etc/npmrc`（可透過 `npm config get prefix` 查詢 `$PREFIX`）
- **用途**：影響整個系統的 npm 行為，通常由系統管理員設定。

### 🔍 如何查看目前使用的設定

可以在終端機輸入以下指令來列出所有有效的設定來源：

```bash
npm config list
```

或者直接編輯使用者層級的設定檔：

```bash
npm config edit
```

## Alpine Linux 的 .npmrc 在哪裡?

📍 在 Alpine Linux 中，`.npmrc` 設定檔的位置與其他 Linux 發行版基本一致，主要取決於要設定的層級：

### 🏠 使用者層級
- **路徑**：`~/.npmrc`
- **說明**：這是最常見的設定位置，適用於個人使用者的 npm 設定。

### 📦 專案層級
- **路徑**：專案根目錄下的 `.npmrc`
- **說明**：針對特定專案的 npm 設定，例如使用不同的 registry 或 token。

### 🌐 系統層級（全域）
- **路徑**：`$(npm config get prefix)/etc/npmrc`
- **說明**：這個路徑會依照安裝 Node.js 的方式而有所不同。可以透過以下指令查詢：
  ```bash
  npm config get prefix
  ```

### 🔍 快速查看目前使用的設定
```bash
npm config list
```

### 🛠 編輯使用者層級設定
```bash
npm config edit
```

## python

```
npm warn Unknown builtin config "python". This will stop working in the next major version of npm.
```

這個警告訊息的意思是：在使用 npm（Node.js 的套件管理工具）時設定了一個名為 `"python"` 的配置選項，但這個選項並不是 npm 所認可的「內建」設定項目。⚠️

### 🧠 背景說明
- 在過去的 npm 版本中，開發者常會用 `npm config set python` 來指定 Python 路徑，這對某些需要編譯原生模組（例如使用 `node-gyp`）的套件很重要。
- 然而，從 **npm v9.0.0 起**，這種方式已經 **不再被官方支援**。
- 所以 npm 現在會顯示警告，提醒你這個設定在未來版本中將完全失效。

### ✅ 解決方式

可以採取以下幾種方法來處理這個問題：

1. **刪除無效設定**
   ```bash
   npm config delete python
   ```
   或手動編輯 `.npmrc` 檔案，把 `python=...` 的那一行移除。

2. **改用環境變數指定 Python 路徑**
   - 在 macOS/Linux：
     ```bash
     export PYTHON=/usr/bin/python3
     ```
   - 在 Windows：
     ```cmd
     set PYTHON=C:\Path\To\Python.exe
     ```

3. **如果真的需要這個設定（例如老專案）**
   - 可以暫時降級 npm 到 v8：
     ```bash
     npm install -g npm@8
     ```

這樣就能避免未來升級 npm 時出現錯誤或中斷安裝流程。

如果不確定為什麼會有這個設定，也可以執行 `npm config list` 來檢查目前的所有設定值。
