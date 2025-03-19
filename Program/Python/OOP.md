在 Python 中，物件導向編程（Object-Oriented Programming, OOP）是一種通過「物件」和「類」來組織和操作數據的編程範式。以下是物件導向的核心概念與實現方式：

---

### **1. 核心概念**
1. **類（Class）**：
   - 類是物件的藍圖或模板，定義了物件的屬性（變量）和方法（函數）。
   - 使用關鍵字 `class` 來創建。

2. **物件（Object）**：
   - 物件是類的實例（instance），代表實際的實體。
   - 透過類的構造函數創建物件。

3. **封裝（Encapsulation）**：
   - 將數據（屬性）和行為（方法）封裝在一起，並通過訪問控制保護數據。

4. **繼承（Inheritance）**：
   - 子類可以繼承父類的屬性和方法，並可進行擴展或覆蓋。

5. **多態（Polymorphism）**：
   - 不同的物件對相同方法調用可以有不同的行為。

---

### **2. 如何定義類與物件**

#### **定義類**
```python
class Dog:
    # 屬性
    species = "Canis familiaris"

    # 構造函數（初始化屬性）
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # 方法
    def bark(self):
        return f"{self.name} says Woof!"
```

#### **創建物件**
```python
my_dog = Dog("Buddy", 5)
print(my_dog.name)  # 輸出: Buddy
print(my_dog.bark())  # 輸出: Buddy says Woof!
```

---

### **3. 繼承與覆蓋**

#### **繼承父類**
```python
class Labrador(Dog):
    def bark(self):
        return f"{self.name} joyfully barks!"
```

#### **使用子類**
```python
labrador = Labrador("Max", 3)
print(labrador.bark())  # 輸出: Max joyfully barks!
```

---

### **4. 私有屬性與方法**
透過前綴「雙下劃線（`__`）」定義私有屬性或方法，限制外部訪問。

#### **定義私有屬性**
```python
class Cat:
    def __init__(self, name):
        self.__name = name  # 私有屬性

    def get_name(self):
        return self.__name  # 提供訪問接口
```

#### **訪問私有屬性**
```python
cat = Cat("Kitty")
print(cat.get_name())  # 輸出: Kitty
# print(cat.__name)  # 會引發 AttributeError
```

---

### **5. 多態的應用**
多態允許通過相同接口調用不同類型的物件。

#### **範例：動物類的多態**
```python
class Animal:
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        return "Woof!"

class Cat(Animal):
    def sound(self):
        return "Meow!"

def make_sound(animal):
    print(animal.sound())

dog = Dog()
cat = Cat()
make_sound(dog)  # 輸出: Woof!
make_sound(cat)  # 輸出: Meow!
```

---

### **6. 類與靜態方法**
1. **類方法**：
   - 使用 `@classmethod` 裝飾器，可以訪問類屬性。
   ```python
   class Dog:
       species = "Canis familiaris"

       @classmethod
       def get_species(cls):
           return cls.species

   print(Dog.get_species())  # 輸出: Canis familiaris
   ```

2. **靜態方法**：
   - 使用 `@staticmethod` 裝飾器，與類或物件無關，作為工具方法存在。
   ```python
   class MathUtils:
       @staticmethod
       def add(a, b):
           return a + b

   print(MathUtils.add(5, 3))  # 輸出: 8
   ```

---

