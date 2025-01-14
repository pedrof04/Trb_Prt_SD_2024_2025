const express = require('express');
const Item = require('./models');

const router = express.Router();
let items = [new Item('Item 1'), new Item('Item 2')];

router.get('/items', (req, res) => {
  res.json(items);
});

router.post('/items', (req, res) => {
  const newItem = new Item(req.body.name);
  items.push(newItem);
  res.status(201).json(newItem);
});

router.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === itemId);
  if (item) {
    item.name = req.body.name;
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

router.delete('/items/:id', (req, res) => {
  items = items.filter(item => item.id !== parseInt(req.params.id, 10));
  res.json({ message: 'Item deletado com sucesso' });
});

module.exports = router;
