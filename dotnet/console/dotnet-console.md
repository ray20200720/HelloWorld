# .NET 

## 創建 console 應用程式

``` bash
dotnet new console
```

或者 指定應用程式名稱
``` bash
dotnet new console -o HelloWorld
```

## 運行 console 應用程式

``` bash
dotnet run
```

## 修改 Program.cs 主程式

``` cs
// A skeleton of a C# program
using System;

namespace YourNamespace
{
    class YourClass
    {
    }

    struct YourStruct
    {
    }

    interface IYourInterface
    {
    }

    delegate int YourDelegate();

    enum YourEnum
    {
    }

    namespace YourNestedNamespace
    {
        struct YourStruct
        {
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            //Your program starts here...
            Console.WriteLine("Hello world!");
        }
    }
}
```