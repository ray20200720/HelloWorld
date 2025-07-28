**Pandas** 是一個強大的 Python 資料處理與分析庫，特別適合用於處理結構化數據，如表格、CSV 文件等。以下是 Pandas 的核心功能與使用方式：

---

### **1. 安裝 Pandas**
如果尚未安裝 Pandas，可以使用以下命令：
```bash
pip install pandas
```

匯入 Pandas 時通常使用簡稱 `pd`：
```python
import pandas as pd
```

---

### **2. 核心數據結構**
Pandas 提供兩種核心數據結構：
1. **Series**：一維數據結構（類似於一維數組或列表）。
2. **DataFrame**：二維數據結構（類似於電子表格或數據表）。

---

### **3. 創建 Series 和 DataFrame**
#### **Series**
從列表或字典創建 Series：
```python
# 從列表
s = pd.Series([1, 2, 3, 4])
print(s)

# 從字典
s = pd.Series({"a": 1, "b": 2, "c": 3})
print(s)
```

#### **DataFrame**
1. 從字典創建：
   ```python
   data = {
       "Name": ["Alice", "Bob", "Charlie"],
       "Age": [25, 30, 35],
       "City": ["Taipei", "New York", "Tokyo"]
   }
   df = pd.DataFrame(data)
   print(df)
   ```

2. 從 CSV 文件讀取：
   ```python
   df = pd.read_csv("file.csv")
   ```

3. 從 Excel 文件讀取：
   ```python
   df = pd.read_excel("file.xlsx")
   ```

---

### **4. 基本操作**

#### **查看數據**
```python
print(df.head())  # 查看前 5 行
print(df.tail())  # 查看後 5 行
print(df.info())  # 獲取數據摘要
print(df.describe())  # 查看數據的統計摘要
```

#### **選擇行和列**
1. 選擇列：
   ```python
   print(df["Name"])  # 選擇 "Name" 列
   ```

2. 選擇多列：
   ```python
   print(df[["Name", "Age"]])
   ```

3. 選擇行（基於索引）：
   ```python
   print(df.iloc[0])  # 按行號選擇第一行
   print(df.loc[0])   # 按索引值選擇第一行
   ```

4. 條件篩選：
   ```python
   print(df[df["Age"] > 30])  # 篩選 Age 大於 30 的行
   ```

---

### **5. 數據處理**

#### **新增與刪除列**
```python
# 新增列
df["Salary"] = [50000, 60000, 70000]

# 刪除列
df = df.drop(columns=["City"])
```

#### **數據清理**
1. 處理缺失值：
   ```python
   df = df.fillna(0)  # 將缺失值填充為 0
   df = df.dropna()   # 刪除包含缺失值的行
   ```

2. 重命名列：
   ```python
   df = df.rename(columns={"Name": "Full Name"})
   ```

---

### **6. 排序與分組**
#### **排序**
```python
df = df.sort_values(by="Age", ascending=False)  # 按 Age 降序排序
```

#### **分組與聚合**
```python
grouped = df.groupby("City").mean()  # 按 City 分組，計算均值
print(grouped)
```

---

### **7. 寫入文件**
1. 將 DataFrame 寫入 CSV 文件：
   ```python
   df.to_csv("output.csv", index=False)
   ```

2. 將 DataFrame 寫入 Excel 文件：
   ```python
   df.to_excel("output.xlsx", index=False)
   ```

---

### **8. 使用範例：分析數據**
假設有一個銷售數據表：
```python
data = {
    "Product": ["A", "B", "A", "C", "B", "C"],
    "Sales": [100, 200, 150, 300, 250, 400]
}
df = pd.DataFrame(data)

# 計算每種產品的總銷售額
grouped = df.groupby("Product").sum()
print(grouped)
```

---

Pandas 是非常靈活且高效的數據分析工具，適用於數據清洗、轉換和分析。
