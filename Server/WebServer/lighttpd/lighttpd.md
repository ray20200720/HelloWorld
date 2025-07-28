Lighttpd 是一款輕量級、高效能的開源 Web 伺服器，適合需要快速響應和低資源消耗的應用場景。以下是基本使用步驟：

1. **安裝 Lighttpd**：
   - 在 Ubuntu 上，可以使用以下命令安裝：
     ```bash
     sudo apt-get update
     sudo apt-get install lighttpd
     ```
   - 其他 Linux 發行版可以使用相應的包管理器安裝。

2. **配置 Lighttpd**：
   - 配置檔案通常位於 `/etc/lighttpd/lighttpd.conf`。
   - 修改 `server.document-root` 來指定伺服器的根目錄，例如：
     ```bash
     server.document-root = "/home/user/www/"
     ```
   - 如果需要支援 PHP 或其他動態內容，可以啟用 FastCGI 模組，並在配置檔案中添加相關設定。

3. **啟動伺服器**：
   - 使用以下命令啟動 Lighttpd：
     ```bash
     sudo /etc/init.d/lighttpd start
     ```
   - 預設情況下，伺服器會在 80 端口上監聽 HTTP 請求。

4. **測試伺服器**：
   - 在伺服器根目錄中放置一個簡單的 HTML 或 PHP 文件，然後在瀏覽器中訪問伺服器的 IP 地址或域名，檢查是否正常運行。

5. **日誌與調試**：
   - Lighttpd 的訪問日誌和錯誤日誌分別位於 `/var/log/lighttpd/access.log` 和 `/var/log/lighttpd/error.log`，可以用於排查問題。

如果需要更詳細的教程，可以參考 [這裡](https://blog.csdn.net/qq_37037348/article/details/128334320) 或 [這裡](https://blog.csdn.net/qq_46017342/article/details/129806279)。

