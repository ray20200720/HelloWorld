用 Python 製作一個簡單的計算器是一個很好的練習項目。以下是使用 Python 建立一個支持基本算術操作（加、減、乘、除）的計算器範例：

---

### **完整範例代碼：計算器**
```python
# 定義計算函數
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return "錯誤：不能除以零！"

# 主程序：計算器
def calculator():
    print("歡迎使用簡易計算器！")
    print("操作選項：")
    print("1. 加法 (+)")
    print("2. 減法 (-)")
    print("3. 乘法 (*)")
    print("4. 除法 (/)")

    while True:
        # 接收用戶的操作選擇
        choice = input("請選擇操作 (1/2/3/4) 或輸入 'q' 退出: ")
        
        if choice == 'q':
            print("計算器結束運行，再見！")
            break

        if choice in ['1', '2', '3', '4']:
            try:
                # 接收用戶輸入的數字
                num1 = float(input("輸入第一個數字: "))
                num2 = float(input("輸入第二個數字: "))
                
                if choice == '1':
                    print(f"結果：{num1} + {num2} = {add(num1, num2)}")
                elif choice == '2':
                    print(f"結果：{num1} - {num2} = {subtract(num1, num2)}")
                elif choice == '3':
                    print(f"結果：{num1} * {num2} = {multiply(num1, num2)}")
                elif choice == '4':
                    print(f"結果：{num1} / {num2} = {divide(num1, num2)}")
            except ValueError:
                print("錯誤：請輸入有效的數字！")
        else:
            print("錯誤：請選擇有效的操作！")
```

---

### **如何使用這段代碼**
1. 將代碼保存為一個 Python 文件，例如 `calculator.py`。
2. 在終端或命令提示符中運行文件：
   ```bash
   python calculator.py
   ```
3. 根據提示輸入操作選擇（如 `1` 表示加法），然後輸入兩個數字，計算器會給出結果。

---

### **功能解說**
1. **功能選項**：支持四則運算（加、減、乘、除）。
2. **錯誤處理**：檢測無效輸入和除以零的情況。
3. **可擴展性**：可以添加更多的數學操作，例如平方、平方根或模運算。

如果想進一步改進，可以考慮：
- 添加圖形化界面（例如使用 `tkinter`）。
- 支持更高級的數學運算（例如指數、對數）。


