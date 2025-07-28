# 下載

## Windows 下載

至官網 [SQLite](https://www.sqlite.org/download.html) 的 `Precompiled Binaries for Windows` 下載 `sqlite-tools-win-x64-xxxxxxx.zip`

## Linux 下載

至官網 [SQLite](https://www.sqlite.org/download.html) 的 `Precompiled Binaries for Linux` 下載 `sqlite-tools-linux-x86-xxxxxxx.zip`

# 使用方式

## 執行 SQLite

將 `sqlite-tools-win-x64-xxxxxxx.zip` 解壓縮

開啟 命令提示字元 , 切換至剛才解壓縮後的目錄底下, 執行`sqlite3.exe` 

``` bash
D:\Software\SQLite\sqlite-tools-win-x64-3500300>sqlite3.exe
SQLite version 3.50.3 2025-07-17 13:25:10
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
SQLite 3.50.3 2025-07-17 13:25:10 3ce993b8657d6d9deda380a93cdd6404a8c8ba1b185b2bc423703e41ae5f2543
zlib version 1.3
msvc-1939 (64-bit)
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
main: D:\Software\SQLite\sqlite-tools-win-x64-3500300\HelloWorld.db r/w
```

## 新建 table

``` bash
sqlite> CREATE TABLE programming_languages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    year_created INTEGER,
    author TEXT
);
```

## 查看 table

``` bash
sqlite> .table
Product
```

## 刪除 table

``` bash
sqlite> drop table programming_languages;
```

``` bash
sqlite> .table
```

## 填入資料

``` bash
sqlite> INSERT INTO programming_languages (name, year_created, author) VALUES ('Python', 1991, 'Guido van Rossum');
sqlite> INSERT INTO programming_languages (name, year_created, author) VALUES ('JavaScript', 1995, 'Brendan Eich');
sqlite> INSERT INTO programming_languages (name, year_created, author) VALUES ('Go', 2009, 'Robert Griesemer, Rob Pike, Ken Thompson');

```

## 查找資料

``` bash
sqlite> SELECT * FROM programming_languages;
1|Python|1991|Guido van Rossum
2|JavaScript|1995|Brendan Eich
3|Go|2009|Robert Griesemer, Rob Pike, Ken Thompson
```

## 刪除資料

``` bash
sqlite> DELETE FROM programming_languages WHERE ID = 1;
```

``` bash
sqlite> SELECT * FROM programming_languages;
2|JavaScript|1995|Brendan Eich
3|Go|2009|Robert Griesemer, Rob Pike, Ken Thompson
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
    db.each("SELECT * FROM programming_languages", (err, row) => {
        console.log(row.ID + ": " + row.name)
    })
})

db.close();
```

``` bash
$ node main.js
1: Python
2: JavaScript
3: Go
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
                
                command.CommandText = @"SELECT * FROM programming_languages";

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
1: Python
2: JavaScript
3: Go
```

