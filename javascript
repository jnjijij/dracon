const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = new sqlite3.Database('database.db');

// Ваш код для створення таблиць та заповнення їх даними

// Запит 1: Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
app.get('/clientsWithShortNames', (req, res) => {
  db.all('SELECT * FROM clients WHERE LENGTH(name) < 6', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ clients: rows });
  });
});

// Додайте решту запитів для інших завдань

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
