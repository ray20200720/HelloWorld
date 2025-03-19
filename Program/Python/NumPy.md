**NumPy（Numerical Python）** 是 Python 中用於科學計算的核心庫之一，特別擅長處理多維數組和進行數值運算。以下是 NumPy 的主要功能和常見使用方式：

---

### **1. 安裝 NumPy**
如果尚未安裝 NumPy，可以使用以下命令安裝：
```bash
pip install numpy
```

匯入 NumPy 模塊時通常使用簡稱 `np`：
```python
import numpy as np
```

---

### **2. 核心數據結構：ndarray**
- **`ndarray`** 是 NumPy 提供的多維數組對象，類似於 Python 的列表，但具有更高效的數值運算性能。
- 每個數組必須具有相同的數據類型。

#### **創建數組**
1. 從列表或元組創建：
   ```python
   array = np.array([1, 2, 3])
   print(array)  # 輸出: [1 2 3]
   ```

2. 創建特殊數組：
   - 全零數組：
     ```python
     zeros = np.zeros((2, 3))  # 2 行 3 列
     print(zeros)
     ```
   - 全一數組：
     ```python
     ones = np.ones((3, 3))
     ```
   - 隨機數組：
     ```python
     random_array = np.random.rand(2, 3)  # 介於 0 和 1 之間的隨機數
     ```

3. 使用 `arange()` 或 `linspace()` 生成序列：
   ```python
   sequence = np.arange(0, 10, 2)  # 從 0 到 10（不包括 10），步長 2
   equally_spaced = np.linspace(0, 1, 5)  # 生成 5 個等間距值
   ```

---

### **3. 數組操作**
#### **查看數組的屬性**
```python
array = np.array([[1, 2, 3], [4, 5, 6]])
print(array.shape)  # 輸出: (2, 3)
print(array.ndim)   # 輸出: 2（數組維度）
print(array.size)   # 輸出: 6（元素數量）
print(array.dtype)  # 輸出: int32（數據類型）
```

#### **數組重塑**
```python
reshaped = array.reshape(3, 2)
print(reshaped)
```

#### **索引與切片**
- 單個元素：
  ```python
  print(array[0, 1])  # 輸出: 2（第一行第二個元素）
  ```
- 子數組：
  ```python
  print(array[:, 1])  # 輸出: [2 5]（每行的第二列）
  ```

#### **數組合併與分割**
- 合併：
  ```python
  combined = np.vstack([array, array])  # 垂直堆疊
  ```
- 分割：
  ```python
  split = np.hsplit(array, 3)  # 水平分割成 3 部分
  ```

---

### **4. 數學運算**
NumPy 支援元素級別的數學運算：
```python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

print(a + b)  # 輸出: [5 7 9]
print(a * b)  # 輸出: [4 10 18]
print(np.dot(a, b))  # 輸出: 32（內積）
```

#### **廣播機制**
如果數組形狀不同，NumPy 自動執行「廣播」以匹配形狀：
```python
a = np.array([[1], [2], [3]])
b = np.array([4, 5, 6])
print(a + b)
```

輸出：
```
[[5 6 7]
 [6 7 8]
 [7 8 9]]
```

---

### **5. 常用的科學計算功能**
1. **統計計算**
   ```python
   data = np.array([1, 2, 3, 4, 5])
   print(np.mean(data))  # 平均值
   print(np.std(data))   # 標準差
   print(np.sum(data))   # 總和
   ```

2. **矩陣運算**
   ```python
   matrix = np.array([[1, 2], [3, 4]])
   print(np.linalg.inv(matrix))  # 矩陣的逆
   print(np.linalg.det(matrix))  # 矩陣的行列式
   ```

3. **排序與過濾**
   ```python
   array = np.array([3, 1, 2])
   print(np.sort(array))  # 排序
   print(array[array > 1])  # 過濾大於 1 的元素
   ```

---

### **6. 實際應用場景**
1. **數據處理**
   用於處理和操作大型數據集。
   ```python
   data = np.genfromtxt('data.csv', delimiter=',')  # 從 CSV 文件讀取數據
   ```

2. **科學計算**
   用於物理或機器學習中的矩陣操作和數值計算。

3. **圖像處理**
   用於讀取和處理像素值數據。

---

**NumPy** 是 Python 數據處理和科學計算的基石。
