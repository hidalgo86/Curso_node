const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

fuga = "";

app.get("/", (req, res) => {
  lectura();
  res.send("documento OK");
  console.log(fuga.length);
});

function lectura() {
  fs.readFile("archivo.txt", (err, data) => {
    fuga += data;
  });
}

app.listen(port);
