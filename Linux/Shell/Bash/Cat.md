`cat` 是 Linux 中常用的命令，用於查看、合併和創建文件。

以下是一些常見用法：

### 1. 查看文件內容
```bash
cat filename.txt
```
這會顯示 `filename.txt` 的內容。

### 2. 查看多個文件
```bash
cat file1.txt file2.txt
```
這會依次顯示 `file1.txt` 和 `file2.txt` 的內容。

### 3. 合併文件
```bash
cat file1.txt file2.txt > combined.txt
```
將 `file1.txt` 和 `file2.txt` 的內容合併到 `combined.txt` 中。

### 4. 追加內容
```bash
cat file1.txt >> file2.txt
```
將 `file1.txt` 的內容追加到 `file2.txt` 的末尾。

### 5. 顯示行號
```bash
cat -n filename.txt
```
顯示 `filename.txt` 的內容並加上行號。

### 6. 顯示非空白行的行號
```bash
cat -b filename.txt
```
顯示 `filename.txt` 的內容，僅對非空白行加上行號。

### 7. 顯示特殊字符
```bash
cat -v filename.txt
```
顯示 `filename.txt` 的內容，並標示特殊字符。

### 8. 創建新文件
```bash
cat > newfile.txt
```
創建 `newfile.txt`，輸入內容後按 `Ctrl+D` 保存。

### 9. 從標準輸入讀取
```bash
cat -
```
從標準輸入讀取內容，按 `Ctrl+D` 結束輸入並顯示內容。

### 10. 顯示文件結尾標記
```bash
cat -e filename.txt
```
顯示 `filename.txt` 的內容，並在每行末尾加上 `$` 標記。

### 11. 壓縮空白行
```bash
cat -s filename.txt
```
顯示 `filename.txt` 的內容，並將多個空白行壓縮為一行。

### 12. 顯示幫助信息
```bash
cat --help
```
顯示 `cat` 命令的幫助信息。

### 13. 顯示版本信息
```bash
cat --version
```
顯示 `cat` 命令的版本信息。

### 總結
`cat` 命令功能強大，常用於查看、合併和創建文件。
結合其他命令（如 `grep`、`sort` 等），可以實現更複雜的操作。
