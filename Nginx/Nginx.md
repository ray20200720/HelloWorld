# Nginx

## 下載

## 安裝

### 更新套件

``` bash
sudo dnf update -y
```

### 安裝

``` bash
$ sudo dnf install nginx
```

## 檢視版本

``` bash
$ sudo nginx -v
nginx version: nginx/1.20.1
```

## 啟動

``` bash
$ sudo systemctl start nginx
```

## 檢視運行狀態

``` bash
$ service nginx status
```

## 測試

用瀏覽器訪問 `http://localhost:80`


## 補充

### Nginx的預設配置文件nginx.conf位在/etc/nginx目錄。

``` bash
$ cat /etc/nginx/nginx.conf
```
