const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/', routes);

// Adicionando uma rota para "/"
app.get('/', (req, res) => {
  res.send('API rodando! Use as rotas /items para acessar os recursos.');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
