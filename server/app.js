const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // You can choose any available port.

const db = mysql.createConnection({
  host: 'localhost', // Typically 'localhost'
  user: 'najdview_admin',
  password: 'tE~E8RR4@--N',
  database: 'najdview_website',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed gdn: ' + err.message);
  } else {
    console.log('Connected to the database');
  }
});

app.get('/posts', (req, res) => {
  // Implement a route to fetch posts from the database here.
  // You'll need to write SQL queries for SELECT operations.
  res.send('This is the GET /posts endpoint');
});

app.post('/posts', (req, res) => {
  // Implement a route to add posts to the database here.
  // You'll need to write SQL queries for INSERT operations.
  res.send('This is the POST /posts endpoint');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
