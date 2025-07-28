# 下載

至官網 [node.js](https://nodejs.org/en/download/current) 下載

## Node.js 安裝

## Node.js REPL 使用方式 

查看版本

``` bash
node -v
v20.4.0
```

執行 node repl

``` bash
node
Welcome to Node.js v20.4.0.
Type ".help" for more information.
>
```

查看 幫助

``` bash
> .help
```

測試

``` bash
> console.log('Hello World!')
Hello World!
undefined
```

``` bash
> 1 + 2
3
```

退出 node repl

``` bash
> .exit
```

## 運行 Node.js

創建 index.js

``` js
console.log('Hello World!')
```

``` bash
node index.js
Hello World
```
## 初始化專案

建立資料夾

``` bash
mkdir hello-nodejs
cd hello-nodejs
```

初始化

``` bash
npm init
package name: (hello-nodejs)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to D:\Ray\MyProjects\HelloWorld\Node.js\hello-nodejs\package.json:

{
  "name": "hello-nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```

建立 index.js 檔案

``` js
console.log('Hello World')
```

修改 package.json, 在scripts處增加一行 `"dev": "node index.js"`

``` json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node index.js"
  },
```

執行
``` bash
$ npm run dev

> hello-nodejs@1.0.0 dev
> node index.js

Hello World
```

## Packages

- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [marked](https://marked.js.org/)
