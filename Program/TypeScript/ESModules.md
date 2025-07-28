# 如何用 TypeScript 建立ES Modules 專案 ?

要用 TypeScript 建立支援 ES Modules 的專案，可以依照以下步驟操作，這樣不僅能享受 TypeScript 的型別安全，也能使用現代 JavaScript 的模組系統。以下是完整流程：

---

### 🛠️ 專案初始化

1. **建立資料夾並初始化 npm 專案**
   ```bash
   mkdir ts-esm-project
   cd ts-esm-project
   npm init -y
   ```

2. **安裝 TypeScript**
   ```bash
   npm install --save-dev typescript
   ```

3. **建立 TypeScript 設定檔**
   ```bash
   npx tsc --init
   ```

---

### ⚙️ 設定 `tsconfig.json`

請修改 `tsconfig.json` 以支援 ES Modules：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

### 📦 設定 `package.json`

為了讓 Node.js 正確辨識 ES Modules，請加入：

```json
"type": "module"
```

這樣 Node.js 就會使用 `.js` 檔案作為 ES Modules，而不是預設的 CommonJS。

---

### 🧪 建立範例程式碼

建立 `src/index.ts`：

```ts
export const greet = (name: string): string => {
  return `Hello, ${name}!`;
};
```

建立 `src/main.ts`：

```ts
import { greet } from './index.js';

console.log(greet('TypeScript'));
```

注意：**匯入路徑要加上 `.js`**，因為 TypeScript 編譯後會產生 `.js` 檔案，Node.js 在 ES Modules 模式下需要明確的副檔名。

---

### 🚀 編譯與執行

1. **編譯 TypeScript**
   ```bash
   npx tsc
   ```

2. **執行編譯後的程式**
   ```bash
   node dist/main.js
   ```

---

### 🎥 延伸學習資源

- [How to Setup Node.js with TypeScript in 2023](https://www.youtube.com/watch?v=H91aqUHn8sE) 詳細教你如何設定 Node.js 專案並使用 TypeScript 搭配 ES Modules，包括 `tsconfig.json` 的設定與模組解析方式。

- [Project IDX: Full-stack application development with ...](https://www.youtube.com/watch?v=-wlZY4tfGMY&pp=0gcJCfwAo7VqN5tD) 展示如何在 Google 的 Project IDX 中建立 TypeScript 專案並整合 AI 工具與 Firebase 部署。

---
