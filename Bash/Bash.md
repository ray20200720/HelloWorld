Bash 是 **Bourne Again SHell** 的縮寫，是一種命令列介面與腳本語言，主要用於類 UNIX 系統（如 Linux 和 macOS）。它是 GNU 計畫的一部分，通常作為預設的 Shell 提供給用戶操作系統和自動化任務。

以下是一份 Bash 的學習地圖，適合初學者到進階學習者。它涵蓋了基本概念、進階技巧和實際應用，以便你可以系統化地掌握 Bash：

---

### **基礎入門**
1. **理解 Shell 的概念**
   - Bash 是什麼？
   - Shell 的功能與用途。
2. **安裝與啟動**
   - 確認系統中是否已安裝 Bash。
   - 學會使用終端機。
3. **基礎命令操作**
   - 導航檔案系統：`cd`、`ls`、`pwd`。
   - 管理檔案與目錄：`cp`、`mv`、`rm`、`mkdir`。
   - 檢視檔案內容：`cat`、`less`、`head`、`tail`。
   - 壓縮與解壓縮： [zip](./Zip.md)、[unzip](./Zip.md)、`tar`。

---

### **基本腳本**
1. **學習 Bash 的語法**
   - 變數與環境變數。
   - 指令別名 (`alias`)。
2. **條件控制**
   - `if` 條件判斷。
   - `case` 分支選擇。
3. **迴圈與陳述式**
   - `for`、`while` 與 `until` 迴圈。
   - 控制指令 (`break` 和 `continue`)。
4. **基本的函數**
   - 定義與呼叫函數。

---

### **進階技巧**
1. **處理輸入與輸出**
   - 重導向 (`>`、`>>`、`<`)。
   - 管線 (`|`) 和 `tee` 命令。
2. **字串操作**
   - 字符串切割、替換與比對。
   - 使用正則表達式 (`grep`, `awk`, `sed`)。
3. **處理檔案與目錄**
   - 自動處理檔案 (批次重命名或搜尋)。
   - 使用 `find` 和 `xargs`。
4. **錯誤處理與調試**
   - 使用 `set -e` 和 `trap`。
   - 調試腳本：`bash -x`。

---

### **實際應用**
1. **自動化任務**
   - 寫一個每日備份腳本。
   - 寫一個自動安裝程式。
2. **與其他程式結合**
   - 呼叫 Python 或其他程式語言。
   - 使用 API 或 curl 來下載資料。
3. **最佳化腳本性能**
   - 瞭解腳本執行效率。
   - 管理多執行緒腳本。

---

### **深入學習與延伸**
1. **探索 Bash 的生態**
   - 了解 zsh、fish 與 Bash 的區別。
2. **學習高階工具**
   - 學習 `tmux` 和 `screen`。
   - 使用 `cron` 與計劃任務。
3. **參與開放社群**
   - 參考開源腳本專案。
   - 與社群互動 (像是 Reddit、Stack Overflow)。



以下針對 Bash 學習地圖中的每個階段，提供一個實例範例：

---

### **基礎入門**
**檔案系統導航：**
```bash
# 切換到桌面資料夾
cd ~/Desktop

# 列出桌面上的所有檔案和資料夾，包含隱藏檔
ls -la
```

---

### **基本腳本**
**簡單的 if 條件判斷：**
```bash
#!/bin/bash

# 檢查檔案是否存在
if [ -f "example.txt" ]; then
    echo "檔案存在！"
else
    echo "檔案不存在！"
fi
```
**使用方法**：將此內容儲存為 `check_file.sh`，並使用以下命令執行：
```bash
bash check_file.sh
```

---

### **進階技巧**
**管線與正則表達式：**
```bash
# 搜尋目前目錄中的所有文字檔，找出包含 "ERROR" 的行，並統計行數
grep -r "ERROR" *.txt | wc -l
```

這段命令結合了 `grep` 和 `wc`，適合用於日誌分析。

---

### **實際應用**
**每日備份腳本：**
```bash
#!/bin/bash

# 備份目錄
backup_dir="/backup/$(date +%Y-%m-%d)"
mkdir -p "$backup_dir"

# 複製檔案到備份目錄
cp -r ~/Documents/* "$backup_dir"

echo "備份完成，儲存於 $backup_dir"
```
**使用方法**：可搭配 `cron` 設定定時自動執行。

---

### **深入學習與延伸**
**結合其他程式語言：**
```bash
#!/bin/bash

# 使用 Python 產生隨機數字，並印出
random_number=$(python3 -c "import random; print(random.randint(1, 100))")
echo "隨機數字是：$random_number"
```


