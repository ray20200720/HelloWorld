const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('HelloWorld.db');

// Query the data
db.all("SELECT * FROM programming_languages", [], (err, rows) => {
  if (err) {
    throw err;
  }

  rows.forEach((row) => {
    console.log(`${row.id}: ${row.name} (${row.year_created}) - Author: ${row.author}`);
  });
});

// Close the connection
db.close();
