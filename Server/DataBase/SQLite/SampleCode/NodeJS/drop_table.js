const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('HelloWorld.db');

// Drop the table
db.run("DROP TABLE IF EXISTS programming_languages", function(err) {
  if (err) {
    return console.error("Error dropping table:", err.message);
  }
  console.log("Table dropped successfully!");
});

db.close();
