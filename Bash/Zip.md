在 Bash 中，將檔案或資料夾壓縮為 ZIP 檔案的指令是 `zip`。

### **安裝 `zip` 工具**
如果系統沒有安裝 `zip`，可以使用以下命令來安裝：
- 在 Ubuntu/Debian：
  ```bash
  sudo apt install zip
  ```
- 在 Fedora/Red Hat：
  ```bash
  sudo dnf install zip
  ```
---

### **單一檔案壓縮**
使用以下指令將單一檔案壓縮成 ZIP：
```bash
zip compressed_file.zip file_to_compress
```
範例：
```bash
zip my_archive.zip document.txt
```
這會將 `document.txt` 壓縮成 `my_archive.zip`。

---

### **壓縮多個檔案**
如果要壓縮多個檔案，可以列出所有檔案名稱：
```bash
zip compressed_file.zip file1 file2 file3
```
範例：
```bash
zip my_archive.zip file1.txt file2.txt file3.txt
```

---

### **壓縮整個資料夾**
壓縮整個資料夾時，需加上 `-r` 選項（代表遞迴壓縮）：
```bash
zip -r compressed_file.zip folder_to_compress
```
範例：
```bash
zip -r my_folder.zip my_folder/
```
這會將 `my_folder/` 整個資料夾壓縮為 `my_folder.zip`。




