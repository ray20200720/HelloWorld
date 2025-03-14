在 Windows 系統中，關閉 Nginx 的方法取決於如何啟動了 Nginx。

以下是不同情況下關閉 Nginx 的步驟：

---

### 方法 1：使用 Nginx 命令關閉

如果在命令提示符中啟動了 Nginx（例如：通過 `start nginx` 命令），可以按照以下步驟關閉它：

1. **打開命令提示符：**
   - 按下 `Win + R`，輸入 `cmd`，然後按 Enter。

2. **進入 Nginx 安裝目錄：**
   - 如果 Nginx 安裝在 `C:\nginx`，則運行以下命令：
     ```bash
     cd C:\nginx
     ```

3. **使用 Nginx 命令關閉：**
   - 執行以下命令來正常關閉 Nginx：
     ```bash
     nginx -s quit
     ```
     - 此命令會讓 Nginx 優雅地停止，完成處理當前的請求後關閉。

   - 或執行以下命令來強制關閉 Nginx：
     ```bash
     nginx -s stop
     ```
     - 此命令會立即停止 Nginx，而不等待處理完當前的請求。

---

### 方法 2：通過任務管理器關閉

如果 Nginx 是通過其他方式啟動的（例如：直接雙擊 `nginx.exe` 文件），可以通過任務管理器強制關閉：

1. **打開任務管理器：**
   - 按下快捷鍵 `Ctrl + Shift + Esc` 打開任務管理器。

2. **找到 Nginx 進程：**
   - 在“進程”標籤中，找到名為 `nginx.exe` 的進程。
   - 如果看不到，可以切換到“詳細信息”標籤，然後查找 `nginx.exe`。

3. **結束進程：**
   - 右鍵點擊 `nginx.exe`，選擇“結束任務”或“結束進程”。

---

### 方法 3：使用 `taskkill` 命令關閉

如果知道 Nginx 的進程 ID（PID），可以使用 `taskkill` 命令來終止進程：

1. **找到 Nginx 的 PID：**
   - 打開命令提示符，運行以下命令：
     ```bash
     netstat -ano | findstr :80
     ```
     - 查找佔用80端口（或其他 Nginx 使用的端口）的進程 ID。

   - 或者，使用以下命令列出所有 Nginx 進程：
     ```bash
     tasklist | findstr nginx
     ```

2. **終止 Nginx 進程：**
   - 使用以下命令根據 PID 終止 Nginx：
     ```bash
     taskkill /PID <PID> /F
     ```
     - 將 `<PID>` 替換為 Nginx 的進程 ID。

---

### 方法 4：重啟系統服務（如果作為服務運行）

如果 Nginx 是作為系統服務安裝並運行的，可以通過 `sc` 或服務管理器來停止：

1. **通過命令停止服務：**
   - 打開命令提示符，運行以下命令停止 Nginx 服務：
     ```bash
     sc stop nginx
     ```

2. **通過服務管理器停止：**
   - 按下 `Win + R`，輸入 `services.msc`，然後按 Enter 。
   - 在服務列表中找到名為 `nginx` 的服務。
   - 右鍵點擊它，然後選擇“停止”。

---

### 注意事項

- **正常關閉 vs 強制關閉：**
  - 建議使用 `nginx -s quit` 進行優雅的關閉，以確保當前請求被正確處理。
  - 強制關閉會立即停止 Nginx，但可能導致請求未完成。

- **檢查是否完全關閉：**
  - 在關閉後，可以使用以下命令確認 Nginx 是否仍在運行：
    ```bash
    tasklist | findstr nginx
    ```
  - 如果仍有 Nginx 進程，則需要手動終止。

---

以上方法可以幫助在 Windows 下關閉 Nginx，根據啟動方式選擇適合的關閉方法即可。