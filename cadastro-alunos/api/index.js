const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "../public");

app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "formulario.html"));
});

app.get("/cadastro", (req, res) => {
  const { nome, curso, matricula } = req.query;

  res.send(`
    <h1>Dados Recebidos</h1>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Curso:</strong> ${curso}</p>
    <p><strong>Matrícula:</strong> ${matricula}</p>
    <a href="/">Voltar</a>
  `);
});

module.exports = app;
module.exports.handler = serverless(app);
