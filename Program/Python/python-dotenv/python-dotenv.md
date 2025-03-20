在 Python 中，可以使用 `python-dotenv` 套件來載入 `.env` 檔案並取得其中的設定值，例如 `IsUse=True`。以下是使用範例：

1. **安裝套件**：
   如果尚未安裝 `python-dotenv`，請先安裝：
   ```bash
   pip install python-dotenv
   ```

2. **建立 `.env` 檔案**：
   在專案目錄中建立 `.env` 檔案，並添加以下內容：
   ```
   IsUse=True
   ```

3. **載入 `.env` 檔案並取得設定值**：
   使用 `dotenv` 套件來載入 `.env` 檔案並存取變數值：
   ```python
   from dotenv import load_dotenv
   import os

   # 載入 .env 檔案
   load_dotenv()

   # 取得設定值
   is_use = os.getenv("IsUse")

   # 將字串轉換為布林值（視需求）
   is_use_bool = is_use.lower() == "true"

   print(f"IsUse: {is_use}")
   print(f"IsUse (Boolean): {is_use_bool}")
   ```

這段程式碼會從 `.env` 檔案中讀取 `IsUse` 變數並列印它的值。
如果需要使用布林值，可以進行轉換，如上所示。

