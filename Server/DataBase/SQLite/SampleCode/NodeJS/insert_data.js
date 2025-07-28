const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('HelloWorld.db');

// Insert a new record
db.run(
  "INSERT INTO programming_languages (name, year_created, author) VALUES (?, ?, ?)",
  ['Rust', 2010, 'Graydon Hoare'],
  function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A new row has been inserted with id ${this.lastID}`);
  }
);

// Array of programming languages to insert
const languages = [
  ['TypeScript', 2012, 'Microsoft'],
  ['Kotlin', 2011, 'JetBrains'],
  ['Swift', 2014, 'Apple']
];

languages.forEach((lang) => {
  db.run(
    "INSERT INTO programming_languages (name, year_created, author) VALUES (?, ?, ?)",
    lang,
    function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Inserted: ${lang[0]} with id ${this.lastID}`);
    }
  );
});

// Close the connection
db.close();
