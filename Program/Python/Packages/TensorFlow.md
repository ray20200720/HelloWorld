**TensorFlow** 是一個由 Google 開發的開源機器學習框架，特別適合用於深度學習和其他數值運算。它能夠幫助開發者快速構建、訓練和部署機器學習模型。以下是 TensorFlow 的使用方法和核心功能概述：

---

### **1. 安裝 TensorFlow**
如果尚未安裝 TensorFlow，可以使用以下命令安裝：
```bash
pip install tensorflow
```

匯入 TensorFlow 時通常簡稱為 `tf`：
```python
import tensorflow as tf
```

---

### **2. TensorFlow 核心概念**
#### **Tensor（張量）**
Tensor 是 TensorFlow 中的核心數據結構，類似於多維數組。

創建 Tensor 的方式：
```python
# 常量張量
a = tf.constant([1, 2, 3])
print(a)

# 隨機張量
b = tf.random.normal(shape=(2, 3))  # 正態分佈隨機數
print(b)
```

#### **計算圖（Computational Graph）**
TensorFlow 建立靜態或動態計算圖來執行張量的數學運算，但 TensorFlow 2.x 已默認使用動態計算圖（Eager Execution）。

---

### **3. 構建和訓練模型**
TensorFlow 提供了簡單高效的 **Keras API** 用於快速構建和訓練神經網絡。

#### **步驟 1：準備數據**
可以從 TensorFlow 提供的數據集模組加載數據：
```python
from tensorflow.keras.datasets import mnist

# 加載 MNIST 數據集
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train = x_train / 255.0  # 標準化數據
x_test = x_test / 255.0
```

#### **步驟 2：定義模型結構**
使用 Keras 的 Sequential API 定義神經網絡：
```python
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense, Flatten

model = Sequential([
    Flatten(input_shape=(28, 28)),  # 將 2D 圖片展平
    Dense(128, activation="relu"),  # 隱藏層
    Dense(10, activation="softmax") # 輸出層
])
```

#### **步驟 3：編譯模型**
在訓練之前需要編譯模型，指定優化器、損失函數和評估指標：
```python
model.compile(optimizer="adam",
              loss="sparse_categorical_crossentropy",
              metrics=["accuracy"])
```

#### **步驟 4：訓練模型**
用訓練數據進行模型訓練：
```python
model.fit(x_train, y_train, epochs=5, batch_size=32)
```

#### **步驟 5：評估模型**
用測試數據集評估模型性能：
```python
test_loss, test_accuracy = model.evaluate(x_test, y_test)
print(f"Test accuracy: {test_accuracy}")
```

---

### **4. 保存與加載模型**
TensorFlow 支持保存模型及其權重以供未來使用：
#### 保存模型：
```python
model.save("my_model.h5")
```

#### 加載模型：
```python
from tensorflow.keras.models import load_model

loaded_model = load_model("my_model.h5")
```

---

### **5. 自定義訓練過程**
如果需要更靈活的訓練過程，可以使用 GradientTape 實現自定義訓練：
```python
optimizer = tf.keras.optimizers.Adam()
loss_fn = tf.keras.losses.SparseCategoricalCrossentropy()

for epoch in range(5):
    with tf.GradientTape() as tape:
        predictions = model(x_train[:10], training=True)
        loss = loss_fn(y_train[:10], predictions)
    gradients = tape.gradient(loss, model.trainable_variables)
    optimizer.apply_gradients(zip(gradients, model.trainable_variables))
```

---

### **6. 部署模型**
#### **TensorFlow Serving**
可以使用 TensorFlow Serving 部署模型，供 API 使用。

#### **TensorFlow Lite**
將模型轉換為輕量級格式，用於行動裝置或嵌入式設備：
```python
converter = tf.lite.TFLiteConverter.from_keras_model(model)
tflite_model = converter.convert()

# 保存為 .tflite 文件
with open("model.tflite", "wb") as f:
    f.write(tflite_model)
```

---

### **7. 進階功能**
1. **轉移學習（Transfer Learning）**
   使用預訓練模型（如 MobileNet、ResNet）來解決類似問題：
   ```python
   from tensorflow.keras.applications import MobileNetV2

   base_model = MobileNetV2(weights="imagenet", include_top=False, input_shape=(128, 128, 3))
   base_model.trainable = False  # 冻結預訓練模型
   ```

2. **分佈式訓練（Distributed Training）**
   TensorFlow 支持多 GPU 或多設備訓練。

3. **自定義層與損失函數**
   定義自己的層和損失函數來滿足特殊需求。

---

TensorFlow 是一個靈活且強大的工具，無論是新手還是專業開發者都可以找到適合自己的使用方式。
