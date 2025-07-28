# 如何在Alpine Linux 上安裝 Node.js ?

在 Alpine Linux 上安裝 Node.js 非常簡單，只需幾個指令即可完成。以下是標準流程：

### 🛠 安裝步驟

1. **更新套件庫**
   ```sh
   apk update
   ```

2. **安裝 Node.js 和 npm（套件管理器）**
   - 安裝穩定版：
     ```sh
     apk add nodejs npm
     ```
   - 若想安裝最新版本：
     ```sh
     apk add nodejs-current npm
     ```

3. **確認安裝成功**
   ```sh
   node -v
   npm -v
   ```

### 🌏 建議：切換 npm 為國內鏡像（加速下載）
```sh
npm config set registry https://registry.npmmirror.com
```

這樣就可以開始使用 Node.js 進行開發了。

# 如何在 Alpine Linux 上安裝 NVM ?

在 Alpine Linux 上安裝 NVM（Node Version Manager）稍微複雜一點，因為 Alpine 使用的是 musl libc 而不是 glibc。

不過只要依照以下步驟操作，就能順利安裝：

### 🧰 安裝前準備

先安裝必要的工具與依賴：

```sh
apk add --no-cache bash curl coreutils libstdc++
```

> Alpine 的預設 shell 是 BusyBox 的 `sh`，但 NVM 安裝腳本需要 `bash`。

### 📦 安裝 NVM

執行官方安裝腳本：

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

> 建議確認 [NVM GitHub](https://github.com/nvm-sh/nvm) 上的最新版本號。

### 🔁 讓 NVM 生效

將以下內容加入你的 shell 設定檔（例如 `.bashrc` 或 `.profile`）：

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

然後執行：

```sh
source ~/.bashrc  # 或 source ~/.profile
```

### 🧪 安裝 Node.js（使用 musl 架構）

由於官方 Node.js 沒有針對 musl libc 發佈正式版本，可以使用非官方的 musl 版本：

```sh
echo 'export NVM_NODEJS_ORG_MIRROR=https://unofficial-builds.nodejs.org/download/release' >> ~/.bashrc
echo 'nvm_get_arch() { nvm_echo "x64-musl"; }' >> ~/.bashrc
source ~/.bashrc
```

然後就可以安裝 Node.js：

```sh
nvm install 18
nvm use 18
```

---

# TODO

- 使用 Docker 或希望更輕量的方式，也可以考慮使用 `node:alpine` 映像作為替代方案。
- 寫個 Dockerfile