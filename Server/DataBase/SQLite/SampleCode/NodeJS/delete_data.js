const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('HelloWorld.db');

// Delete the record with id = 1
db.run("DELETE FROM programming_languages WHERE id = ?", [1], function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Row(s) deleted: ${this.changes}`);
});

// Delete the record with id IN (2, 3)
db.run("DELETE FROM programming_languages WHERE id IN (?, ?)", [2, 3], function(err) {
  if (err) {
    return console.error("Error deleting rows:", err.message);
  }
  console.log(`Rows deleted: ${this.changes}`);
});

// Close the connection
db.close();
