在Linux系統中，解壓縮ZIP檔案非常簡單，可以使用內建的`unzip`命令。

### **安裝unzip**
如果系統沒有安裝 `unzip`，可以使用以下命令來安裝：
- 在 Ubuntu/Debian：
  ```bash
  sudo apt install unzip
  ```
- 在 Fedora/Red Hat：  
  ```bash
  sudo dnf install unzip
  ```

---

### **解壓縮ZIP檔案**
```
unzip 檔案名稱.zip
```
此命令會將檔案解壓縮到當前目錄。

---

### **解壓縮到指定目錄**
```
unzip 檔案名稱.zip -d /path/to/directory
```
使用`-d`參數可以指定解壓縮目錄。

---

### **查看ZIP檔案內容（不解壓縮）**
```
unzip -l 檔案名稱.zip
```
這樣可以先檢查檔案內容。

如果需要處理更複雜的壓縮格式（例如RAR或7z），可以安裝其他工具，例如`rar`或`p7zip`。

