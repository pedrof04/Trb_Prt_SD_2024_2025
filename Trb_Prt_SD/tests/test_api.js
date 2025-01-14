const fetch = require('node-fetch');

fetch('http://localhost:5000/items')
  .then(response => response.json())
  .then(data => console.log('Itens:', data))
  .catch(error => console.error('Erro ao buscar itens:', error));
