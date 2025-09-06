const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "ecofinds"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

// Routes
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/products", (req, res) => {
  const { title, description, category, price, image_url } = req.body;
  db.query(
    "INSERT INTO products (title, description, category, price, image_url) VALUES (?, ?, ?, ?, ?)",
    [title, description, category, price, image_url],
    (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, ...req.body });
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));