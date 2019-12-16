const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send("<h1>Hello, Omi</h1>");
});

app.get('/contact', function (req, res) {
  res.send("Contact me at: hyosung11@me.com")
});

app.get('/about', function (req, res) {
  res.send("Soccer, Strength Training, Father")
});

app.get('/hobbies', function (req, res) {
  res.send("<ul><li>Coffee</li><li>Code</li><li>Fasting</li>")
})


app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

// app.listen(3000, () => console.log("Server started on port 3000"));
