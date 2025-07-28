# 如何使用 Podman ?

Podman 是一個無需守護程序的容器引擎，可以取代 Docker，並支援 rootless 模式。

以下是基本的使用流程：

---

### 🛠 安裝 Podman（如尚未安裝）

```bash
sudo dnf install podman
```

安裝完成後，可以透過以下指令測試是否成功：

```bash
podman pull hello-world
podman run hello-world
```

如果看到「Hello from Docker!」的訊息，表示 Podman 運作正常。

---

### 🚀 建立並執行容器

1. **拉取映像檔**
   ```bash
   podman pull ubuntu
   ```

2. **執行容器**
   ```bash
   podman run -it ubuntu bash
   ```

3. **查看容器列表**
   ```bash
   podman ps -a
   ```

4. **停止容器**
   ```bash
   podman stop <container_id>
   ```

5. **刪除容器**
   ```bash
   podman rm <container_id>
   ```

---

### 📦 建立自己的映像檔

可以使用 Dockerfile 建立自訂映像：

```Dockerfile
FROM node:alpine
WORKDIR /usr/app
COPY ./ ./
RUN npm install
CMD ["npm", "start"]
```

然後執行以下指令來建立並執行容器：

```bash
podman build -t my-node-app .
podman run -p 8080:8080 my-node-app
```

打開瀏覽器輸入 `localhost:8080` 就能看到應用程式。

---

### 🧑‍💻 Rootless 模式

Podman 支援不需 root 權限的容器執行方式，這對安全性非常有幫助。可以透過 `podman info` 查看是否以 rootless 模式執行。

---

### 🖥 Podman Desktop GUI

如果偏好圖形介面，可以使用 Podman Desktop，它提供直覺式儀表板來管理容器、映像與 Kubernetes 整合。

---

### 🎥 推薦教學影片

- [【Podman 教學】 取代Docker 的明日之星!? 入門|介紹|教學 ...](https://www.youtube.com/watch?v=SLpjwyIU-Wg)：介紹 Podman 與 Docker 的差異與基本使用方式。
- [【容器】容器管理工具Podman完全安装使用指南| Docker平替 ...](https://www.youtube.com/watch?v=GYRIhF2FA-g)：詳細說明 Podman 的命令、映像與容器管理。
- [Installing Podman on Linux (Fedora)](https://www.youtube.com/watch?v=WM7lrhQohWQ)：實際操作安裝與執行 Podman。
- [Installing Podman on Ubuntu and Fedora](https://www.youtube.com/watch?v=Qe3_---tijY)：逐步教學安裝 Podman。
- [Rootless Containers with Podman - Steven Ellis, Red Hat](https://www.youtube.com/watch?v=N4ki5Sffy-E)：深入探討 rootless 容器的優勢與設定。
- [Podman Desktop: From Fedora to Kubernetes for Beginners](https://www.youtube.com/watch?v=lJ_assJocmk&pp=ygUUI3BvZG1hbmFuZGt1YmVybmV0ZXM%3D)：展示如何從 Fedora 開始使用 Podman Desktop 並進階到 Kubernetes。

---

# 如何執行已運行的Podman ?

與已運行的 Podman 容器互動或執行指令，這裡有幾種常見方式可以操作：

---

### 🧭 查看目前正在運行的容器

```bash
podman ps
```

這會列出所有正在運行的容器，包括容器 ID、名稱、映像、狀態等資訊。

---

### 🔄 重啟或繼續已停止的容器

- **啟動已停止的容器**
  ```bash
  podman start <container_id_or_name>
  ```

- **重新啟動容器**
  ```bash
  podman restart <container_id_or_name>
  ```

---

### 🛠 進入容器執行指令

1. **使用 `podman exec` 執行指令**
   ```bash
   podman exec -it <container_id_or_name> /bin/bash
   ```
   這會在容器中啟動一個互動式 shell，可以像在主機上一樣操作。

2. **使用 `podman attach` 連接到容器主程序**
   ```bash
   podman attach <container_id_or_name>
   ```
   適用於想直接與容器主程序互動的情境（例如 nginx、node 等）。

---

### 📋 查看容器日誌

```bash
podman logs <container_id_or_name>
```

這可以幫助了解容器內部的執行狀況與錯誤訊息。

---

### 🧩 Pod 模式互動（如果你使用 pod）

若是使用 Podman 的 pod 功能，可以用以下指令查看 pod 狀態：

```bash
podman pod ps
```

並使用 `podman exec` 搭配容器名稱進行互動。

---
