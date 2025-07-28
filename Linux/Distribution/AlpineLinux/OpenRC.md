Alpine Linux 使用的是 **OpenRC** 作為其初始化系統與服務管理器。

這與主流的 Linux 發行版（如使用 systemd 的 Ubuntu 或 CentOS）不同，OpenRC 更加輕量、模組化，特別適合 Alpine 的極簡設計理念。

### 🛠 OpenRC 的特色

- **非依賴 systemd**：不需要複雜的依賴樹或二進位日誌系統。
- **腳本導向**：服務管理透過 `/etc/init.d/` 中的 shell 腳本。
- **快速啟動**：適合嵌入式系統與容器環境。
- **支援自動重啟**：可設定服務在崩潰後自動重啟。

### 🔧 常用服務管理指令

以下是 Alpine Linux 中使用 OpenRC 管理服務的基本指令：

| 功能             | 指令範例                                 |
|------------------|------------------------------------------|
| 啟動服務         | `rc-service <服務名稱> start`            |
| 停止服務         | `rc-service <服務名稱> stop`             |
| 重啟服務         | `rc-service <服務名稱> restart`          |
| 查看狀態         | `rc-service <服務名稱> status`           |
| 設定開機自啟     | `rc-update add <服務名稱> default`       |
| 移除開機自啟     | `rc-update del <服務名稱> default`       |
| 列出所有服務     | `rc-service --list`                      |
| 列出已啟用服務   | `rc-status -a`                           |

### 📁 自訂服務腳本位置

可以在 `/etc/init.d/` 中新增自訂服務腳本，並透過 `rc-update` 加入開機啟動。

如果正在設計自己的應用服務（例如 Go 或 Node.js），可以使用 `openrc-run` 撰寫腳本，並設定 `respawn` 來自動重啟。

---

