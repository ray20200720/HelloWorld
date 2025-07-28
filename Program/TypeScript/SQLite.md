# 如何用 TypeScript 讀取 SQLite ?

要在 TypeScript 中讀取 SQLite 資料庫，可以使用 Node.js 的 `sqlite3` 套件，搭配型別定義檔 `@types/sqlite3`，或使用 ORM 工具如 TypeORM 來簡化操作。

以下是兩種常見方式的簡要說明：

---

### 🛠 方法一：使用 `sqlite3` 套件（原生方式）

1. **安裝套件**

   ```bash
   npm install sqlite3
   npm install --save-dev @types/sqlite3
   ```

2. **撰寫 TypeScript 程式碼**
   
   ```ts
   import sqlite3 from 'sqlite3';

   const db = new sqlite3.Database('example.db');

   db.get('SELECT name FROM users WHERE id = ?', [1], (err, row) => {
     if (err) {
       console.error('查詢錯誤:', err);
     } else {
       console.log('查詢結果:', row);
     }
   });

   db.close();
   ```

---

### 🧩 方法二：使用 TypeORM（物件導向方式）

1. **安裝套件**

   ```bash
   npm install typeorm reflect-metadata sqlite3
   ```

2. **建立資料模型**

   ```ts
   import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

   @Entity()
   export class User {
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     name: string;
   }
   ```

3. **初始化資料庫連線**

   ```ts
   import { DataSource } from 'typeorm';
   import { User } from './User';

   const AppDataSource = new DataSource({
     type: 'sqlite',
     database: 'example.db',
     synchronize: true,
     entities: [User],
   });

   AppDataSource.initialize().then(async () => {
     const users = await AppDataSource.getRepository(User).find();
     console.log('所有使用者:', users);
   });
   ```

---

# 如何用 TypeScript 建立 SQLite 的 Table ?

在 TypeScript 中建立 SQLite 的資料表，通常會透過 Node.js 環境搭配 `sqlite3` 或 `sql.js` 套件來執行 SQL 指令。

以下是兩種常見方式的範例：

---

### 🛠 方法一：使用 `sqlite3`（Node.js 原生）

1. **安裝套件**

   ```bash
   npm install sqlite3
   npm install --save-dev @types/sqlite3
   ```

2. **建立資料表**

   ```ts
   import sqlite3 from 'sqlite3';

   const db = new sqlite3.Database('example.db');

   db.run(`
     CREATE TABLE IF NOT EXISTS users (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       email TEXT UNIQUE NOT NULL
     )
   `, err => {
     if (err) console.error('建立資料表失敗:', err);
     else console.log('資料表建立成功');
   });

   db.close();
   ```

---

### 🧩 方法二：使用 `sql.js`（可在瀏覽器中執行）

1. **安裝套件**
   ```bash
   npm install sql.js
   npm install --save-dev @types/sql.js
   ```

2. **初始化並建立資料表**
   ```ts
   import initSqlJs from 'sql.js';

   (async () => {
     const SQL = await initSqlJs();
     const db = new SQL.Database();

     db.run(`
       CREATE TABLE users (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT,
         age INTEGER
       )
     `);

     const contents = db.export(); // 可儲存為 Uint8Array
     console.log('資料表建立完成');
   })();
   ```

---

### 📌 小提醒

- `sqlite3` 適合後端或桌面應用。
- `sql.js` 是 SQLite 的 WebAssembly 實作，適合前端或離線應用。
- 若使用 TypeORM，也可以透過 Entity 定義自動建立資料表。

---

# 如何用 TypeScript 在 SQLite 新增一筆及多筆資料?

在 TypeScript 中操作 SQLite 資料庫新增資料，可以使用 `sqlite3` 套件（適用於 Node.js 環境），支援新增單筆與多筆資料。

以下是範例：

---

### 📝 新增一筆資料

```ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('example.db');

db.run(
  'INSERT INTO users (name, email) VALUES (?, ?)',
  ['Alice', 'alice@example.com'],
  function (err) {
    if (err) {
      console.error('新增失敗:', err.message);
    } else {
      console.log(`新增成功，ID: ${this.lastID}`);
    }
  }
);

db.close();
```

---

### 📦 新增多筆資料（批次插入）

```ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('example.db');

const users = [
  ['Bob', 'bob@example.com'],
  ['Charlie', 'charlie@example.com'],
  ['Diana', 'diana@example.com'],
];

const placeholders = users.map(() => '(?, ?)').join(', ');
const flatValues = users.flat();

const sql = `INSERT INTO users (name, email) VALUES ${placeholders}`;

db.run(sql, flatValues, function (err) {
  if (err) {
    console.error('批次新增失敗:', err.message);
  } else {
    console.log(`成功新增 ${this.changes} 筆資料`);
  }
});

db.close();
```

---

### 🧩 小技巧

- 若資料量大，建議使用 `db.serialize()` 包裝插入邏輯以確保順序執行。
- 可搭配 `db.prepare()` 進行多筆插入以提升效能。
- 若使用 TypeORM，也可以用 `save()` 方法一次新增多筆 Entity。

---

# 如何用 TypeScript 在 SQLite 修改一筆及多筆資料?

在 TypeScript 中使用 SQLite 修改資料，可以透過 `sqlite3` 套件進行單筆與多筆更新。

以下是範例：

---

### 🔧 修改一筆資料

```ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('example.db');

db.run(
  'UPDATE users SET name = ?, email = ? WHERE id = ?',
  ['Alice Updated', 'alice.new@example.com', 1],
  function (err) {
    if (err) {
      console.error('更新失敗:', err.message);
    } else {
      console.log(`成功更新 ${this.changes} 筆資料`);
    }
  }
);

db.close();
```

---

### 🔁 修改多筆資料（使用 `db.serialize()` 搭配 `db.run()`）

```ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('example.db');

const updates = [
  { id: 2, name: 'Bob Updated', email: 'bob.new@example.com' },
  { id: 3, name: 'Charlie Updated', email: 'charlie.new@example.com' },
];

db.serialize(() => {
  updates.forEach((user) => {
    db.run(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [user.name, user.email, user.id],
      function (err) {
        if (err) {
          console.error(`更新 ID ${user.id} 失敗:`, err.message);
        } else {
          console.log(`成功更新 ID ${user.id}`);
        }
      }
    );
  });
});

db.close();
```

---

### 🧠 小提醒

- `this.changes` 代表受影響的資料筆數。
- 若偏好批次處理，可考慮使用 `db.prepare()` 搭配 `stmt.run()`。
- 若使用 TypeORM，可透過 `update()` 或 `save()` 方法更新 Entity。

---

# 如何用 TypeScript 在 SQLite 刪除一筆及多筆資料?

在 TypeScript 中使用 SQLite 刪除資料，可以透過 `sqlite3` 套件進行單筆與多筆刪除。

以下是範例：

---

### 🗑️ 刪除一筆資料

```ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('example.db');

db.run(
  'DELETE FROM users WHERE id = ?',
  [1],
  function (err) {
    if (err) {
      console.error('刪除失敗:', err.message);
    } else {
      console.log(`成功刪除 ${this.changes} 筆資料`);
    }
  }
);

db.close();
```

---

### 🧹 刪除多筆資料（使用 `db.serialize()` 搭配 `db.run()`）

```ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('example.db');

const idsToDelete = [2, 3, 4];

db.serialize(() => {
  idsToDelete.forEach((id) => {
    db.run(
      'DELETE FROM users WHERE id = ?',
      [id],
      function (err) {
        if (err) {
          console.error(`刪除 ID ${id} 失敗:`, err.message);
        } else {
          console.log(`成功刪除 ID ${id}`);
        }
      }
    );
  });
});

db.close();
```

---

### 🧠 小提醒

- `this.changes` 表示受影響的資料筆數。
- 若要刪除所有資料，可使用 `DELETE FROM users`（不加 `WHERE`）。
- 若使用 TypeORM，可用 `delete()` 或 `remove()` 方法刪除 Entity。

---

# 批次處理 

批次處理（Batch Processing）是一種一次性處理大量資料或任務的方式，常用於資料庫操作、自動化任務、影像處理、系統維護等場景。

---

### 🧠 批次處理的核心概念

- **一次執行多筆資料操作**：例如新增、更新、刪除資料庫中的多筆記錄。
- **非即時處理**：通常在非尖峰時間執行，減少系統負擔。
- **自動化執行**：可透過腳本、排程器（如 cron、systemd timer）或工具（如 Emacs、Makefile）執行。

---

### 🛠 TypeScript + SQLite 批次處理範例

可以使用 `sqlite3` 套件搭配 `db.serialize()` 或 `db.prepare()` 來進行批次處理：

```ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('example.db');

const users = [
  ['Alice', 'alice@example.com'],
  ['Bob', 'bob@example.com'],
  ['Charlie', 'charlie@example.com'],
];

db.serialize(() => {
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');

  users.forEach(([name, email]) => {
    stmt.run(name, email);
  });

  stmt.finalize();
});

db.close();
```

這段程式碼會：
- 使用 `prepare()` 建立預編譯 SQL，提高效能。
- 使用 `serialize()` 確保順序執行，避免 race condition。

---

