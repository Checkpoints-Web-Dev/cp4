const express = require("express");
const cors = require("cors");
const listaCarros = require("./dados/carros");

const app = express();

const port = 5001;

app.use(cors());
app.use(express.json());

app.get("/carros", (req, res) => {
  res.status(200).json(listaCarros);
});

app.get("/lojas", (req, res) => {
  res.send("Bem-vindo à loja de carros!");
});

app.get("/sobre", (req, res) => {
  res.send("Esta é a página sobre nós.");
});

app.get("/contato", (req, res) => {
  res.send("Página de contato");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
