const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const logger = require("pino")();

function operacionesArray(num, array) {
  try {
    array
      .map(function(item) {
        return item / num;
      })
      .reduce(function(acc, item) {
        return acc + item;
      }, 0);
  } catch (err) {
    return 0;
  }
}

const numeros = [];

logger.info("hello world");

app.get("/", (req, res) => {
  for (let i = 0; i < 1000; i++) {
    operacionesArray(99, numeros);
  }

  res.send("OK");
});

app.listen(port);
