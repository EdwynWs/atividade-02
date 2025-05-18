import express from "express";
import serverless from "serverless-http";

const app = express();
const alunos = [];

app.use(express.static('./paginas'));

app.get('/', (req, res) => {
  res.redirect('/formulario.html');
});

app.get('/cadastro', (req, res) => {
  const aluno = {
    nome: req.query.nome,
    curso: req.query.curso,
    matricula: req.query.matricula
  };

  alunos.push(aluno);

  let html = `
  <h1>Alunos Cadastrados</h1>
  <table border="1">
    <tr><th>Nome</th><th>Curso</th><th>Matrícula</th></tr>`;

  for (const a of alunos) {
    html += `<tr><td>${a.nome}</td><td>${a.curso}</td><td>${a.matricula}</td></tr>`;
  }

  html += `</table>
  <br><a href="/formulario.html">Novo Cadastro</a>`;

  res.send(html);
});

export const handler = serverless(app);
