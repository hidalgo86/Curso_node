import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("DOCUMENTO CON EXPRESS");
});

app.get("/interno", (req, res) => {
  res.send("DOCUMENTO INTERNO");
});

app.listen(3000, () => {
  console.log("servidor OK");
});
