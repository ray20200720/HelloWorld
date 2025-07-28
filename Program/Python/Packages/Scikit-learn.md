**Scikit-learn** 是 Python 中用於機器學習的最流行庫之一，它提供了高效的工具集來進行預處理、建模和評估機器學習算法。以下是 Scikit-learn 的基本使用方法和功能概述：

---

### **1. 安裝 Scikit-learn**
如果尚未安裝 Scikit-learn，可以使用以下命令：
```bash
pip install scikit-learn
```

匯入 Scikit-learn 時通常簡稱為 `sklearn`：
```python
from sklearn import datasets
```

---

### **2. 主要功能**
1. 預處理數據（Data Preprocessing）
2. 機器學習模型（Supervised and Unsupervised Learning）
3. 模型評估（Model Evaluation）
4. 模型選擇與超參數調整（Model Selection & Hyperparameter Tuning）

---

### **3. 加載數據集**
Scikit-learn 提供了多個內建數據集，適合練習使用。
```python
from sklearn.datasets import load_iris

# 加載 IRIS 數據集
iris = load_iris()
print(iris.feature_names)  # 查看特徵名稱
print(iris.target_names)   # 查看目標類別
```

您也可以加載自己的數據集：
```python
import pandas as pd
data = pd.read_csv("your_dataset.csv")
```

---

### **4. 數據預處理**
#### **標準化（Normalization & Standardization）**
使用 `StandardScaler` 將數據標準化：
```python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
data_scaled = scaler.fit_transform(iris.data)
```

#### **處理缺失值**
使用 `SimpleImputer` 填充缺失值：
```python
from sklearn.impute import SimpleImputer

imputer = SimpleImputer(strategy="mean")
data_filled = imputer.fit_transform(data)
```

---

### **5. 機器學習模型**
#### **監督學習（Supervised Learning）**
1. **線性回歸**
   ```python
   from sklearn.linear_model import LinearRegression

   model = LinearRegression()
   model.fit(X_train, y_train)  # 訓練模型
   predictions = model.predict(X_test)  # 進行預測
   ```

2. **支持向量機（SVM）**
   ```python
   from sklearn.svm import SVC

   svm_model = SVC(kernel="linear")
   svm_model.fit(X_train, y_train)
   ```

#### **非監督學習（Unsupervised Learning）**
1. **K-Means 聚類**
   ```python
   from sklearn.cluster import KMeans

   kmeans = KMeans(n_clusters=3)
   kmeans.fit(data_scaled)
   ```

2. **主成分分析（PCA）**
   ```python
   from sklearn.decomposition import PCA

   pca = PCA(n_components=2)
   data_reduced = pca.fit_transform(data_scaled)
   ```

---

### **6. 模型評估**
使用交叉驗證分數（Cross-Validation）評估模型性能：
```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X_train, y_train, cv=5)
print("平均準確率:", scores.mean())
```

查看具體評估指標，如精確率、召回率等：
```python
from sklearn.metrics import accuracy_score, precision_score, recall_score

accuracy = accuracy_score(y_test, predictions)
print("準確率:", accuracy)
```

---

### **7. 超參數調整**
使用網格搜索調整模型超參數：
```python
from sklearn.model_selection import GridSearchCV

param_grid = {"C": [0.1, 1, 10], "kernel": ["linear", "rbf"]}
grid_search = GridSearchCV(SVC(), param_grid, cv=5)
grid_search.fit(X_train, y_train)

print("最佳參數:", grid_search.best_params_)
```

---

### **8. 範例：基於 IRIS 數據集的分類模型**
```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# 加載數據集
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3, random_state=42)

# 訓練模型
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 評估模型
predictions = model.predict(X_test)
print(classification_report(y_test, predictions))
```

---

Scikit-learn 是非常靈活且易用的機器學習庫，適用於快速原型設計和實驗。
