為計算器添加圖形化介面（GUI）可以讓使用者通過點擊按鈕進行操作，而不用手動輸入命令。以下是一個使用 **Tkinter** 的簡單圖形化計算器範例：

---

### **完整代碼：帶 GUI 的計算器**
```python
import tkinter as tk
from tkinter import messagebox

# 定義按鈕點擊事件
def button_click(value):
    current = entry.get()
    if value == "C":
        entry.delete(0, tk.END)  # 清空輸入框
    elif value == "=":
        try:
            result = eval(current)  # 計算輸入的表達式
            entry.delete(0, tk.END)
            entry.insert(tk.END, str(result))
        except Exception:
            messagebox.showerror("錯誤", "無效的輸入！")  # 顯示錯誤彈窗
    else:
        entry.insert(tk.END, value)  # 顯示點擊的按鈕值

# 創建主窗口
root = tk.Tk()
root.title("簡易計算器")

# 創建輸入框
entry = tk.Entry(root, width=20, font=("Arial", 16), justify="right", bd=8)
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

# 定義按鈕
buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "C", "0", "=", "/"
]

# 在窗口中添加按鈕
row = 1
col = 0
for button in buttons:
    tk.Button(root, text=button, width=5, height=2, font=("Arial", 14),
              command=lambda b=button: button_click(b)).grid(row=row, column=col, padx=5, pady=5)
    col += 1
    if col > 3:  # 每行放置 4 個按鈕
        col = 0
        row += 1

# 啟動主循環
root.mainloop()
```

---

### **功能解說**
1. **按鈕功能**：
   - `C` 按鈕：清空輸入框。
   - `=` 按鈕：計算輸入的數學表達式（如 `3+2*4`）。
   - 數字和運算符按鈕：將內容追加到輸入框。

2. **輸入框**：
   使用 `tk.Entry` 創建，允許用戶輸入數字和運算符。

3. **錯誤處理**：
   - 使用 `try-except` 捕獲無效的計算輸入，並彈出錯誤提示。

4. **布局**：
   - 每行最多放置 4 個按鈕。
   - 使用 `grid()` 方法實現按鈕的整齊排列。

---

### **如何運行**
1. 將代碼保存為 `calculator_gui.py`。
2. 運行程序：
   ```bash
   python calculator_gui.py
   ```
3. 在窗口中，點擊按鈕進行計算操作。

---

### **改進方向**
1. **更複雜的運算**：
   - 支持科學計算（如平方、平方根、三角函數）。
2. **主題美化**：
   - 使用不同顏色和樣式改善界面。
3. **多行表達式**：
   - 讓用戶可以編輯並計算多行數學公式。

