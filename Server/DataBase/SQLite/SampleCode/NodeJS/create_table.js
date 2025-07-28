const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('HelloWorld.db');

// Create a table
db.run(`
  CREATE TABLE IF NOT EXISTS programming_languages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    year_created INTEGER NOT NULL,
    author TEXT
  )
`, (err) => {
  if (err) {
    console.error('An error occurred while creating the table:', err.message);
  } else {
    console.log('Table created successfully!');
  }
});

// Close the connection
db.close();
