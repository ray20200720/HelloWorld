在 Bash 中，解壓縮檔案的命令根據壓縮檔案的類型不同而有所變化。以下是常見壓縮格式以及對應的解壓指令：

### **1. `.zip` 壓縮檔**
```bash
unzip file.zip
```
- 如果要解壓縮到特定目錄：
```bash
unzip file.zip -d /path/to/destination
```

### **2. `.tar.gz` 或 `.tgz` 檔案**
```bash
tar -xvzf file.tar.gz
```
- 指令選項解釋：
  - `-x`：解壓檔案。
  - `-v`：顯示詳細輸出。
  - `-z`：處理 gzip 格式。
  - `-f`：指定檔案名稱。

### **3. `.tar.bz2` 檔案**
```bash
tar -xvjf file.tar.bz2
```
- `-j` 參數專門處理 bzip2 格式。

### **4. `.7z` 檔案**
需要安裝 7-Zip 工具（例如 `p7zip`）：
```bash
7z x file.7z
```

### **5. `.rar` 檔案**
需要安裝 `unrar` 工具：
```bash
unrar x file.rar
```

### **6. 一般 `.tar` 檔案**
```bash
tar -xvf file.tar
```

### **7. `.gz` 單一壓縮檔**
```bash
gunzip file.gz
```
- 如果你想保留原壓縮檔案，可以使用：
```bash
gzip -d file.gz
```

### **常見提示**
- 確保解壓工具已安裝，例如 `unzip`、`tar`、`p7zip` 或 `unrar`。可以使用以下指令安裝工具（以 Ubuntu 為例）：
  ```bash
  sudo apt-get install unzip tar p7zip-full unrar
  ```
