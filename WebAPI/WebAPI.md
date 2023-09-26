# Web API

## Create Web API Project

### .NET

``` bash
dotnet new webapi -o dotnet-webapi
```

### Node.js

``` bash
mkdir nodejs-webapi
cd nodejs-webapi
npm init
```

#### 安裝 express 套件

``` bash
npm install express
```

#### 創建 index.js

``` js
const express = require('express')
const app = express()
const port = 3000

let data = {
    "user1": {
        id: 1,
        name: "Hello"
    },
    "user2": {
        id: 2,
        name: "World"
    }
}

app.get('/', (req, res) => {
    res.send('Hello Wolrd!')
})

app.get('/api/users', (req, res) => {
    res.send(data)
})

app.listen(port , () => {
    console.log(`Server listening on port ${port}`)
})
```

#### 運行

``` bash
npm run index.js
```

#### 用瀏覽器訪問

瀏覽器輸入`http://localhost:3000/api/users`, 可以看到返回
``` json
{
    "user1": {
        "id": 1,
        "name": "Hello"
    },
    "user2": {
        "id": 2,
        "name": "World"
    }
}
```

