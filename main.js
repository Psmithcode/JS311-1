// Bringing in the express framework as a module
let express = require("express");

// instantiate the application
let app = express();

let PORT = 8000;

app.get("/hello", function (req, res) {
  res.send("Hi there");
});

app.listen(PORT, function () {
  console.log("Application started on: " + PORT);
});
