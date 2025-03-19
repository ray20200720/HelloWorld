**Seaborn** 是基於 Matplotlib 的高級數據可視化庫，用於更方便地創建統計圖表。Seaborn 與 Pandas 和 NumPy 無縫集成，適合探索和分析數據集。以下是 Seaborn 的基本使用方法：

---

### **1. 安裝 Seaborn**
如果尚未安裝 Seaborn，可以使用以下命令安裝：
```bash
pip install seaborn
```

匯入 Seaborn 時通常簡稱為 `sns`：
```python
import seaborn as sns
import matplotlib.pyplot as plt
```

---

### **2. 加載示例數據**
Seaborn 提供了一些內建的示例數據集，便於快速上手。
```python
# 載入示例數據集
data = sns.load_dataset("tips")
print(data.head())
```

這裡的數據集 `tips` 是一個有關餐廳小費的數據表。

---

### **3. 基本圖表類型**
#### **散點圖（Scatter Plot）**
用於查看兩個變量之間的關係：
```python
sns.scatterplot(data=data, x="total_bill", y="tip", hue="sex")
plt.show()
```
- **`hue`**：根據某列變量添加顏色分組。

---

#### **直方圖（Histogram）**
查看單個數據分佈：
```python
sns.histplot(data=data, x="total_bill", kde=True, bins=20)
plt.show()
```
- **`kde=True`**：添加內核密度估計曲線。
- **`bins`**：設置直方圖的分箱數量。

---

#### **箱形圖（Box Plot）**
展示數據的分佈和異常值：
```python
sns.boxplot(data=data, x="day", y="total_bill", hue="sex")
plt.show()
```
- **`hue`**：按分組顯示多個箱形圖。

---

#### **條形圖（Bar Plot）**
顯示分類數據的聚合值：
```python
sns.barplot(data=data, x="day", y="total_bill", hue="sex")
plt.show()
```
- 默認情況下，`y` 顯示均值，可使用 `ci=None` 去除誤差條。

---

### **4. 高級圖表**
#### **熱力圖（Heatmap）**
用於顯示矩陣型數據的圖表：
```python
flights = sns.load_dataset("flights")
pivot_data = flights.pivot("month", "year", "passengers")
sns.heatmap(pivot_data, cmap="YlGnBu", annot=True, fmt="d")
plt.show()
```

---

#### **配對圖（Pair Plot）**
自動繪製多個變量之間的成對關係：
```python
sns.pairplot(data=data, hue="sex")
plt.show()
```

---

#### **分佈圖（Distribution Plot）**
查看單一變量的分佈：
```python
sns.displot(data=data, x="total_bill", kde=True)
plt.show()
```

---

### **5. 自訂圖表樣式**
Seaborn 提供了多種內建樣式，使圖表美觀：
```python
sns.set_theme(style="darkgrid")  # 設置主題
sns.scatterplot(data=data, x="total_bill", y="tip", hue="day")
plt.show()
```

可選樣式包括：
- `"white"`
- `"dark"`
- `"whitegrid"`
- `"darkgrid"`

---

### **6. 與 Matplotlib 的結合**
可以使用 Matplotlib 的功能對 Seaborn 圖表進行微調：
```python
sns.boxplot(data=data, x="day", y="total_bill", hue="sex")
plt.title("Total Bill by Day and Sex")  # 添加標題
plt.xlabel("Day of the Week")           # 修改 X 軸標籤
plt.ylabel("Total Bill ($)")            # 修改 Y 軸標籤
plt.show()
```

---

### **7. 實際應用案例**
#### **用於數據探索的可視化**
假設我們想探索小費與消費金額的關係：
```python
sns.lmplot(data=data, x="total_bill", y="tip", hue="sex", aspect=1.5)
plt.show()
```
- **`lmplot`**：繪製回歸圖，顯示變量之間的關係及趨勢。

---

Seaborn 是一個功能強大且美觀的數據可視化工具，適合初學者和專業人士進行數據分析。
