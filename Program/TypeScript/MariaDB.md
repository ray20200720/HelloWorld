#　如何用 TypeScript 將資料寫入到 MariaDB ?

要用 TypeScript 將資料寫入 MariaDB，可以搭配 Node.js 使用 `mariadb` 或 `mysql2` 套件來建立連線並執行 SQL 指令。以下是基本流程與資源推薦：

---

### 🛠️ 基本步驟

1. **安裝必要套件**

   ```bash
   npm install mariadb
   npm install --save-dev typescript @types/node
   ```

2. **建立資料庫連線**

   ```ts
   import mariadb from 'mariadb';

   const pool = mariadb.createPool({
     host: 'localhost',
     user: 'your_user',
     password: 'your_password',
     database: 'your_db',
     connectionLimit: 5,
   });
   ```

3. **撰寫資料插入函式**

   ```ts
   async function insertData(name: string, age: number) {
     let conn;
     try {
       conn = await pool.getConnection();
       const res = await conn.query(
         'INSERT INTO users (name, age) VALUES (?, ?)',
         [name, age]
       );
       console.log('Inserted:', res.insertId);
     } catch (err) {
       console.error('Insert error:', err);
     } finally {
       if (conn) conn.release();
     }
   }

   insertData('Alice', 30);
   ```

---

# 如何用 TypeScript 建立 Table?

要用 TypeScript 建立 MariaDB 的資料表，可以選擇直接執行 SQL 指令，或使用 ORM 工具（如 Sequelize 或 TypeORM）來更模組化地管理資料結構。以下是兩種常見方式的介紹：

---

### 🧱 方法一：使用 SQL 指令建立資料表

可以透過 `mariadb` 或 `mysql2` 套件在 TypeScript 中執行 SQL 指令：

```ts
import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'your_user',
  password: 'your_password',
  database: 'your_db',
});

async function createTable() {
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(`
      CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        age INT
      )
    `);
    console.log('Table created');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    if (conn) conn.release();
  }
}

createTable();
```

---

### 🧩 方法二：使用 ORM（例如 Sequelize）

ORM 可以用 TypeScript 類別定義資料表結構，並自動產生 SQL：

```ts
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('your_db', 'your_user', 'your_password', {
  host: 'localhost',
  dialect: 'mariadb',
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

sequelize.sync().then(() => {
  console.log('Table created via Sequelize');
});
```

--- 

# 📚 推薦教學影片

這些影片提供完整範例與實作細節，非常適合深入學習：

1. [Build a Node/Express API with TypeScript, MySQL on ...](https://www.youtube.com/watch?v=XKa5RejrWxg&pp=0gcJCfwAo7VqN5tD)  
   展示如何使用 TypeScript 建立 API 並將資料寫入 MySQL（MariaDB 相容），包含資料插入與查詢流程。

2. [Back-End/Database Development: MySQL2 with TypeScript ...](https://www.youtube.com/watch?v=zwTsol7i2Sk)  
   詳細說明如何使用 `mysql2` 套件與 TypeScript 進行資料庫操作，包含撰寫查詢與工具函式。

3. [Simple API using NodeJS, Express and MariaDB](https://www.youtube.com/watch?v=krTbf0O-BCo)  
   實作一個完整的 API，從建立資料庫到插入資料，適合 MariaDB 初學者。

4. [Node.js & MariaDB: Create, Read, Update and Delete](https://www.youtube.com/watch?v=_kho-ncCV6E)  
   使用 Sequelize ORM 操作 MariaDB，展示 CRUD 操作與 API 測試流程。

5. [TypeScript with Node.js #12 Connect to Mysql database using ...](https://www.youtube.com/watch?v=TLn5TGbmVkU)  
   專注於 TypeScript 與 MySQL（MariaDB）連線設定與基本操作。

---

# 🔧 延伸學習資源

- 📺 [Create Table | MariaDB Tutorial for Beginners](https://www.youtube.com/watch?v=ZAd7ryywTWE)  
這部影片詳細介紹如何使用 SQL 建立資料表，包括欄位設定、資料型別與主鍵設計，非常適合初學者。

- 📺 [TypeScript with Node.js #9 Create Table Using Sequelize](https://www.youtube.com/watch?v=iJgUe87d9lA)  
這部影片展示如何使用 Sequelize 搭配 TypeScript 建立資料表，適合想要更模組化管理資料結構的開發者。

- 📺 [Back-End/Database Development: MySQL2 with TypeScript ...](https://www.youtube.com/watch?v=zwTsol7i2Sk)  
  教你如何使用 `mysql2` 套件與 TypeScript 操作資料庫，包含建立表格與查詢資料。

- 📺 [Build a Node/Express API with TypeScript, MySQL on ...](https://www.youtube.com/watch?v=XKa5RejrWxg&pp=0gcJCfwAo7VqN5tD)  
  展示如何建立 API 並與 MySQL/MariaDB 資料庫互動，包含建立資料表與資料插入流程。

- 📺 [Create MySQL database and table using terminal](https://www.youtube.com/watch?v=X42tZWYOlWA)  
  如果你想先在終端機建立資料表再用 TypeScript 操作，這部影片會很有幫助。

---

