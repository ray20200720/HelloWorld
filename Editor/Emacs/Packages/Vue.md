# Emacs 有哪些 Vue 插件? 如何用 use-package 進行安裝及配置?

在 Emacs 中開發 Vue.js 專案時，有幾個常用的插件可以提升體驗，尤其是搭配 `use-package` 來進行模組化配置。以下是推薦的 Vue 插件及其安裝與設定方式：

---

### 🌟 常見 Vue 插件

| 插件名稱     | 功能簡介                                                                 |
|--------------|--------------------------------------------------------------------------|
| `vue-mode`   | 提供 Vue 單檔元件（.vue）的語法高亮與結構辨識，基於 `mmm-mode` 實作。     |
| `lsp-mode`   | 整合 Vue 的語言伺服器（如 Vetur 或 Volar），支援自動補全、跳轉、診斷等。 |
| `prettier-js`| 使用 Prettier 格式化 Vue 檔案，支援自動排版與風格一致性。                 |
| `company-lsp`| 搭配 `lsp-mode` 提供補全功能。                                            |

---

### ⚙️ 用 `use-package` 安裝與配置範例

```emacs-lisp
;; 安裝 lsp-mode
(use-package lsp-mode
  :ensure t
  :commands lsp
  :init
  (setq lsp-keymap-prefix "C-c l"))

;; 安裝 vue-mode 並啟用 lsp
(use-package vue-mode
  :ensure t
  :mode "\\.vue\\'"
  :hook (vue-mode . lsp)
  :config
  (setq mmm-submode-decoration-level 0)) ;; 可選：關閉子模式裝飾

;; 安裝 prettier-js 並搭配 vue-mode 使用
(use-package prettier-js
  :ensure t
  :hook (vue-mode . prettier-js-mode)
  :config
  (setq prettier-js-args '("--parser" "vue")))

;; 可選：補全支援
(use-package company
  :ensure t
  :hook (vue-mode . company-mode))

(use-package company-lsp
  :ensure t
  :after lsp-mode
  :config
  (push 'company-lsp company-backends))
```

---

### 🛠️ 額外步驟：安裝 Vue 語言伺服器

需要在系統中安裝 Vue 的語言伺服器，例如 Vetur：

```bash
npm install -g vue-language-server
```

---
