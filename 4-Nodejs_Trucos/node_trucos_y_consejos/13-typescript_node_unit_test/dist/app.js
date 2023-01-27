"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GeneradorDeTokens_1 = require("./clases/GeneradorDeTokens");
const app = express_1.default();
app.get("/", (req, res) => {
    let tokenUsuario = GeneradorDeTokens_1.GeneradorDeTokens.crearToken();
    res.send(`Token # ${tokenUsuario}`);
});
app.get("/interno", (req, res) => {
    res.send("DOCUMENTO INTERNO");
});
app.listen(3000, () => {
    console.log("servidor OK");
});
//# sourceMappingURL=app.js.map