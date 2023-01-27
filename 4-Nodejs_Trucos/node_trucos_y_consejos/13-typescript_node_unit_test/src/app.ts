import express from "express";
import { GeneradorDeTokens } from "./clases/GeneradorDeTokens";

const app = express();

app.get("/", (req, res) => {
  let tokenUsuario = GeneradorDeTokens.crearToken();
  res.send(`Token # ${tokenUsuario}`);
});

app.get("/interno", (req, res) => {
  res.send("DOCUMENTO INTERNO");
});

app.listen(3000, () => {
  console.log("servidor OK");
});
