const express = require("express");
const cors = require("cors");
const carros = require("./dados/carros");
const lojas = require("./dados/lojas");
const valores = require("./dados/valores");

const app = express();

const port = 5001;

app.use(cors());
app.use(express.json());

app.get("/carros", (req, res) => {
  res.status(200).json(carros);
});

app.get("/lojas", (req, res) => {
  res.status(200).json(lojas);
});

app.get("/sobre", (req, res) => {
  res.status(200).json(valores);
});

app.get("/contato", (req, res) => {
  res.send("Página de contato");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
