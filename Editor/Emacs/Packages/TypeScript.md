# Emacs 有哪些 TypeScript 插件? 如何用 use-package 進行安裝及配置?

在 Emacs 中編輯 TypeScript 有不少好用的插件，以下是幾個常見且實用的選擇，以及如何用 `use-package` 來安裝與配置它們：

---

### 🧩 常見 TypeScript 插件

| 插件名稱           | 功能簡介                                                                 |
|--------------------|--------------------------------------------------------------------------|
| `typescript-mode`  | 提供基本的語法高亮與縮排功能，支援 `.ts` 和 `.tsx` 檔案。               |
| `tide`             | TypeScript Interactive Development Environment，支援自動補全、跳轉、錯誤提示等功能。 |
| `lsp-mode`         | 通用的 Language Server Protocol 客戶端，可搭配 `typescript-language-server` 使用。 |
| `flycheck`         | 即時語法檢查工具，能與 `tide` 或 `lsp-mode` 整合。                        |
| `prettier-js`      | 自動格式化 TypeScript 程式碼，支援 Prettier。                            |

---

### ⚙️ 用 `use-package` 安裝與配置範例

#### 1. 安裝 `typescript-mode`

```emacs-lisp
(use-package typescript-mode
  :ensure t
  :mode ("\\.tsx?\\'" . typescript-mode)
  :config
  (setq typescript-indent-level 2))
```

#### 2. 搭配 `tide` 使用

```emacs-lisp
(use-package tide
  :ensure t
  :hook ((typescript-mode . tide-setup)
         (typescript-mode . tide-hl-identifier-mode)
         (before-save . tide-format-before-save))
  :config
  (setq tide-format-options '(:indentSize 2 :tabSize 2)))
```

#### 3. 使用 `lsp-mode`（替代 `tide`）

```emacs-lisp
(use-package lsp-mode
  :ensure t
  :hook ((typescript-mode . lsp))
  :commands lsp)

(use-package lsp-ui
  :ensure t
  :commands lsp-ui-mode)
```

#### 4. 加入 `flycheck` 支援

```emacs-lisp
(use-package flycheck
  :ensure t
  :init (global-flycheck-mode))
```

#### 5. 自動格式化：`prettier-js`

```emacs-lisp
(use-package prettier-js
  :ensure t
  :hook ((typescript-mode . prettier-js-mode)))
```

---

