# 如何用 Podman 執行 Alpine Linux？

Podman 是一個無需守護程序的容器管理工具，與 Docker 類似但更安全，特別適合在 Alpine Linux 這樣輕量級系統上使用。以下是完整步驟：

---

### 🛠 安裝 Podman

1. **啟用社群套件庫**
   編輯 `/etc/apk/repositories`，取消註解包含 `community` 的那一行。

2. **更新套件索引並安裝 Podman**
   ```sh
   apk update
   apk add podman
   ```

3. **啟用 cgroups（必要）**
   ```sh
   rc-update add cgroups
   rc-service cgroups start
   ```

---

### 🚀 執行 Alpine Linux 容器

1. **拉取 Alpine 映像檔**
   ```sh
   podman pull alpine
   ```

2. **執行容器並進入互動模式**
   ```sh
   podman run -it alpine sh
   ```

   這會啟動一個 Alpine 容器並讓你進入 shell。

---

### 👤 Rootless 模式（非必要，但更安全）

如果想以非 root 使用者執行 Podman：

1. **設定使用者 ID 映射**
   ```sh
   echo <USER>:100000:65536 >> /etc/subuid
   echo <USER>:100000:65536 >> /etc/subgid
   ```

2. **載入 tun 模組**
   ```sh
   modprobe tun
   echo tun >> /etc/modules
   ```

3. **測試 rootless 容器**
   ```sh
   podman run --rm hello-world
   ```

---

### 📦 建立自訂 Alpine 容器

也可以建立自己的 Containerfile（類似 Dockerfile）：

```Dockerfile
FROM alpine
RUN apk add --no-cache curl
CMD ["sh"]
```

然後建構並執行：

```sh
podman build -t my-alpine .
podman run -it my-alpine
```

---

這些步驟能在 Alpine Linux 上順利使用 Podman 執行容器。
