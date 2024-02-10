const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`example app listening on port no ${port}`);
});

// Middleware
app.use(express.json());

// GET request
app.get("/", (req, res) => {
  res.send(`<h1>This is horrors app</h1>`);
});

// POST request
app.post("/car", (req, res) => {
  res.send("received a post request");
});
