**Keras** 是一個基於 Python 的高階深度學習框架，構建於深度學習工具（如 TensorFlow、Theano 或 CNTK）之上。它的設計理念是 **簡潔性** 和 **模塊化**，使得構建和訓練神經網絡更加便捷且直觀。Keras 是 TensorFlow 的一部分，並作為其官方 API 提供深度學習功能。

---

### **1. Keras 的特點**
- **高層 API**：簡單易用，適合快速實驗和模型構建。
- **模塊化**：可以將層、損失函數、優化器等作為模塊組合使用。
- **跨平台**：支持 TensorFlow、Theano 和 CNTK 等後端（現主要用於 TensorFlow）。
- **支持多種網絡結構**：如全連接網絡、卷積神經網絡（CNN）、遞歸神經網絡（RNN）等。
- **強大的社群支持**：由 Google 支持，並且擁有大量開發者社群。

---

### **2. 安裝 Keras**
Keras 已內建於 TensorFlow 中，因此只需安裝 TensorFlow：
```bash
pip install tensorflow
```

匯入 Keras 模組：
```python
from tensorflow import keras
```

---

### **3. 使用 Keras 構建與訓練模型**
以下展示如何使用 Keras 進行模型構建與訓練，這是深度學習的一個典型工作流程。

#### **步驟 1：準備數據**
使用內建數據集（如 MNIST 數據集）來測試模型：
```python
from tensorflow.keras.datasets import mnist

# 加載 MNIST 數據集
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# 標準化數據
x_train = x_train / 255.0
x_test = x_test / 255.0
```

---

#### **步驟 2：定義模型**
使用 Sequential API 定義網絡結構：
```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten

# 定義神經網絡結構
model = Sequential([
    Flatten(input_shape=(28, 28)),    # 展平 28x28 圖像
    Dense(128, activation="relu"),   # 隱藏層，128 個神經元
    Dense(10, activation="softmax")  # 輸出層，10 個類別
])
```

---

#### **步驟 3：編譯模型**
定義損失函數、優化器和評估指標：
```python
model.compile(optimizer="adam", 
              loss="sparse_categorical_crossentropy", 
              metrics=["accuracy"])
```

---

#### **步驟 4：訓練模型**
使用 `.fit()` 方法進行模型訓練：
```python
model.fit(x_train, y_train, epochs=5, batch_size=32)
```

---

#### **步驟 5：評估模型**
評估模型的性能：
```python
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"Test accuracy: {test_acc}")
```

---

### **4. 保存與加載模型**
Keras 提供了方便的模型保存與加載功能。

#### 保存模型：
```python
model.save("my_model.h5")
```

#### 加載模型：
```python
from tensorflow.keras.models import load_model
model = load_model("my_model.h5")
```

---

### **5. 進階功能**
#### **遷移學習（Transfer Learning）**
使用預訓練模型進行微調：
```python
from tensorflow.keras.applications import MobileNetV2

base_model = MobileNetV2(weights="imagenet", include_top=False, input_shape=(128, 128, 3))
base_model.trainable = False  # 冻结預訓練模型
```

#### **自定義層與模型**
您可以定義自己的模型架構和層：
```python
from tensorflow.keras import Model
from tensorflow.keras.layers import Input, Dense

inputs = Input(shape=(28,))
hidden = Dense(64, activation="relu")(inputs)
outputs = Dense(10, activation="softmax")(hidden)
model = Model(inputs, outputs)
```

---

### **6. 其他 Keras 功能**
1. **回調函數（Callbacks）**：
   用於控制訓練過程，如早停（Early Stopping）和學習率調整。
   ```python
   from tensorflow.keras.callbacks import EarlyStopping

   early_stop = EarlyStopping(monitor="val_loss", patience=3)
   model.fit(x_train, y_train, epochs=10, callbacks=[early_stop])
   ```

2. **數據增強（Data Augmentation）**：
   增強圖像數據，提高模型泛化能力。
   ```python
   from tensorflow.keras.preprocessing.image import ImageDataGenerator

   datagen = ImageDataGenerator(rotation_range=10, zoom_range=0.1)
   datagen.fit(x_train)
   ```

3. **分佈式訓練**：
   使用多 GPU 或 TPU 進行加速。

---

Keras 提供了靈活且易用的工具，使得深度學習模型的構建和訓練變得更加高效。
