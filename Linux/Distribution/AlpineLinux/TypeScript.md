# 如何在Alpine Linux上安裝 TypeScript？

在 Alpine Linux 上安裝 TypeScript 不難，只要有 Node.js 和 npm 就能輕鬆搞定。

以下是完整步驟：

### 🛠 安裝 Node.js 和 npm

Alpine 使用 `apk` 套件管理工具，可以這樣安裝 Node.js：

```bash
sudo apk add nodejs npm
```

安裝完成後，確認版本：

```bash
node -v
npm -v
```

### 📦 安裝 TypeScript

接下來使用 npm 安裝 TypeScript：

```bash
sudo npm install -g typescript
```

安裝完畢後，檢查是否成功：

```bash
tsc -v
```

### 🧪 測試 TypeScript 編譯器

建立一個簡單的 TypeScript 檔案：

```bash
echo 'let msg: string = "Hello, TypeScript!"; console.log(msg);' > hello.ts
```

編譯成 JavaScript：

```bash
tsc hello.ts
```

執行編譯後的 JavaScript：

```bash
node hello.js
```

應該會看到 `Hello, TypeScript!` 的輸出 🎉

---

如果想要更進階的開發體驗，也可以安裝 `ts-node` 來直接執行 `.ts` 檔案，或設定 `tsconfig.json` 來管理編譯選項。
