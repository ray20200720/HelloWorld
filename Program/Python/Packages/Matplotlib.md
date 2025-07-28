**Matplotlib** 是 Python 中的一個強大繪圖庫，用於創建靜態、動態和交互式可視化。以下是 Matplotlib 的使用方法與基本功能介紹：

---

### **1. 安裝 Matplotlib**
如果尚未安裝 Matplotlib，可以使用以下命令：
```bash
pip install matplotlib
```

匯入時通常使用簡稱 `plt`：
```python
import matplotlib.pyplot as plt
```

---

### **2. 基本繪圖**
#### **繪製折線圖**
```python
import matplotlib.pyplot as plt

# 數據
x = [1, 2, 3, 4]
y = [10, 20, 25, 30]

# 繪圖
plt.plot(x, y)
plt.title("Example Line Plot")  # 添加標題
plt.xlabel("X Axis")           # 添加 X 軸標籤
plt.ylabel("Y Axis")           # 添加 Y 軸標籤
plt.show()                     # 顯示圖表
```

---

### **3. 常見的圖表類型**
#### **散點圖（Scatter Plot）**
```python
x = [1, 2, 3, 4, 5]
y = [5, 7, 6, 8, 7]
plt.scatter(x, y, color="red", label="Data Points")
plt.legend()  # 添加圖例
plt.show()
```

#### **柱狀圖（Bar Chart）**
```python
categories = ["A", "B", "C"]
values = [5, 7, 3]
plt.bar(categories, values, color="blue")
plt.show()
```

#### **直方圖（Histogram）**
```python
data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
plt.hist(data, bins=4, color="green", edgecolor="black")
plt.show()
```

#### **餅圖（Pie Chart）**
```python
labels = ["Apple", "Banana", "Cherry"]
sizes = [50, 30, 20]
plt.pie(sizes, labels=labels, autopct="%1.1f%%")
plt.show()
```

---

### **4. 子圖（Subplots）**
Matplotlib 支持在同一圖中顯示多個子圖：
```python
# 創建 2x1 子圖
plt.subplot(2, 1, 1)  # 第一個子圖
plt.plot([1, 2, 3], [4, 5, 6])

plt.subplot(2, 1, 2)  # 第二個子圖
plt.bar(["A", "B", "C"], [7, 8, 9])

plt.tight_layout()  # 自動調整間距
plt.show()
```

---

### **5. 自訂圖表**
1. **調整線條樣式**
   ```python
   plt.plot(x, y, linestyle="--", color="purple", marker="o")
   ```

2. **設置軸範圍**
   ```python
   plt.axis([0, 5, 0, 40])  # 設定 X 軸和 Y 軸範圍
   ```

3. **添加文字標註**
   ```python
   plt.text(2, 25, "Annotation", fontsize=12, color="red")
   ```

---

### **6. 保存圖表**
可以將圖表保存為圖像文件：
```python
plt.savefig("plot.png", dpi=300, bbox_inches="tight")
```

---

### **7. 高級功能**
#### **使用 `figure` 調整畫布**
```python
fig = plt.figure(figsize=(8, 6))  # 設置畫布大小
ax = fig.add_subplot(111)         # 添加子圖
ax.plot(x, y)
plt.show()
```

#### **3D 圖表**
```python
from mpl_toolkits.mplot3d import Axes3D

fig = plt.figure()
ax = fig.add_subplot(111, projection="3d")
x = [1, 2, 3]
y = [4, 5, 6]
z = [7, 8, 9]
ax.plot(x, y, z)
plt.show()
```

---

Matplotlib 是一個靈活且功能豐富的繪圖庫，適合用於數據可視化。
