# Dapper

### 創建 HelloDapper 專案

``` bash
dotnet new console -o HelloDapper
```

### 安裝 Dapper 套件

切換至 `HelloDapper` 目錄下

``` bash
cd HelloDapper
```

安裝 `Dapper` 套件

``` bash
dotnet add package Dapper
```

### 安裝 System.Data.SQLite.Core 套件

安裝 `System.Data.SQLite.Core` 套件

``` bash
dotnet add package System.Data.SQLite.Core
```

### 修改 主程式 Program.cs

``` cs
using Dapper;
using System.Data.SQLite;

namespace HelloWorld
{
    class Product
    {
        public int? Id { get; set; }
        public string? Name { get; set; }
    }

    class Program
    {
        private static string connectionString = "Data Source=HelloWorld.db;";

        static void Main(string[] args)
        {
            using (var connection = new SQLiteConnection(connectionString))
            {
                var sql = @"SELECT * FROM Product";
                var data = connection.Query<Product>(sql);
                
                foreach(var product in data)
                {
                    var id = product.Id;
                    var name = product.Name;
                    Console.WriteLine($"{id}:{name}!");
                }
            }
        }
    }
}
```

### 運行

``` bash
C:\> dotnet run
1:Hello!
2:World!
```