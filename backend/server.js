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

app.post("/contato", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Nome, email e mensagem são obrigatórios." });
  }

  res.status(201).json({
    message: "Mensagem recebida com sucesso!",
    dados: { name, email, phone, message },
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
