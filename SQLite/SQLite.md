# 下載

## Windows 下載

至官網 [SQLite](https://www.sqlite.org/download.html) 的 `Precompiled Binaries for Windows` 下載 `sqlite-tools-win32-x86-xxxxxxx.zip`

## Linux 下載

至官網 [SQLite](https://www.sqlite.org/download.html) 的 `Precompiled Binaries for Linux` 下載 `sqlite-tools-linux-x86-xxxxxxx.zip`

# 使用方式

## 執行 SQLite

將 `sqlite-tools-win32-x86-xxxxxxx.zip` 解壓縮

開啟 命令提示字元 , 切換至剛才解壓縮後的目錄底下, 執行`sqlite3.exe` 

``` bash
D:\Software\SQLite\sqlite-tools-win32-x86-3430100>sqlite3.exe
SQLite version 3.43.1 2023-09-11 12:01:27
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite>
```

## 退出 SQLite

``` bash
sqlite>.quit
```

## 查看 SQLite 幫助

``` bash
sqlite>.help
```

## SQLite 常用指令

### 查看 SQLite 版本

``` bash
sqlite> .version
SQLite 3.43.1 2023-09-11 12:01:27 2d3a40c05c49e1a49264912b1a05bc2143ac0e7c3df588276ce80a4cbc9bd1b0
zlib version 1.2.11
gcc-5.2.0 (32-bit)
```

### 查看 資訊

``` bash
sqlite> .show
        echo: off
         eqp: off
     explain: auto
     headers: off
        mode: list
   nullvalue: ""
      output: stdout
colseparator: "|"
rowseparator: "\n"
       stats: off
       width:
    filename: :memory:
```

# 創建資料

## 新建 database

``` bash
sqlite>.open HelloWorld.db
```

再次執行 `.show` 指令

``` bash
sqlite> .show
        echo: off
         eqp: off
     explain: auto
     headers: off
        mode: list
   nullvalue: ""
      output: stdout
colseparator: "|"
rowseparator: "\n"
       stats: off
       width:
    filename: HelloWorld.db
```

可以看到 filename 為 `HelloWorld.db`

## 查看 database

``` bash
sqlite> .database
main: D:\Software\SQLite\sqlite-tools-win32-x86-3430100\HelloWorld.db r/w
```

## 新建 table

``` bash
sqlite> create table Product (
(x1...> ID INT PRIMARY KEY NOT NULL,
(x1...> NAME TEXT NOT NULL
(x1...> );
```

## 查看 table

``` bash
sqlite> .table
Product
```

## 刪除 table

``` bash
sqlite> drop table Product;
```

``` bash
sqlite> .table
```

## 填入資料

``` bash
sqlite> insert into Product values (1, 'Hello');
sqlite> insert into Product values (2, 'World');
```

## 查找資料

``` bash
sqlite> select * from Product;
1|Hello
2|World
```

## 刪除資料

``` bash
sqlite> delete from Product where ID = 1;
```

``` bash
sqlite> select * from Product;
2|World
```

# 用程式語言讀取 SQLite 資料

## nodejs

### 安裝 node-sqlite3 package

``` bash
npm install sqlite3
```

``` bash
nano main.js
```

``` js
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('HelloWorld.db')

db.serialize(()=> {
    db.each("SELECT * FROM Product", (err, row) => {
        console.log(row.ID + ": " + row.NAME)
    })
})

db.close();
```

``` bash
$ node main.js
1: Hello
2: World
```

## .NET

### 創建 HelloWorld 專案

``` bash
dotnet new console -o HelloWorld
```

### 安裝 Microsoft.Data.Sqlite 套件

切換至 `HelloWorld` 目錄下

``` bash
cd HelloWorld
```

安裝 `Microsoft.Data.Sqlite` 套件

``` bash
dotnet add package Microsoft.Data.Sqlite
```

### 修改 主程式 Program.cs

``` cs
using Microsoft.Data.Sqlite;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var connection = new SqliteConnection("Data Source=HelloWorld.db"))
            {
                connection.Open();

                var command = connection.CreateCommand();
                
                command.CommandText = @"SELECT * FROM Product";

                using (var reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        var id = reader.GetInt32(0);
                        var name = reader.GetString(1);
                        Console.WriteLine($"{id}:{name}!");
                    }
                }
            }
        }
    }
}
```

### 運行

``` bash
> dotnet run
1:Hello!
2:World!
```

## ASP.NET

### 創建 Console App (.NET Framework) 專案
