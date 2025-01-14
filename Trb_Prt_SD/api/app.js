const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const newItem = req.body;
  const newId = items.length + 1;
  newItem.id = newId;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const updatedData = req.body;
  const item = items.find(i => i.id === itemId);

  if (item) {
    Object.assign(item, updatedData);
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  items = items.filter(item => item.id !== itemId);
  res.json({ message: 'Item deletado com sucesso' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});