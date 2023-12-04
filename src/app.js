const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Producto 1', price: 20 },
  { id: 2, name: 'Producto 2', price: 30 },
  { id: 3, name: 'Producto 3', price: 40 },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}: http://localhost:${port}`);
});
