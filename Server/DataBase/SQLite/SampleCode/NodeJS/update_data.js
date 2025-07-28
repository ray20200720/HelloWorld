const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('HelloWorld.db');

// Update the record with id = 4
db.run(
  "UPDATE programming_languages SET author = ? WHERE id = ?",
  ['The Rust Team', 4],
  //['Apple', 4],

  function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);
  }
);

// Close the connection
db.close();
