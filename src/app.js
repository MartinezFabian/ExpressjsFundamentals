const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

let products = [
  { id: 1, name: 'Producto 1', price: 20 },
  { id: 2, name: 'Producto 2', price: 30 },
  { id: 3, name: 'Producto 3', price: 40 },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.post('/products/form', (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  product.name = name;
  product.price = price;

  res.json(product);
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  const newProducts = products.filter((product) => product.id !== parseInt(id));

  if (products.length === newProducts.length) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products = newProducts;

  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}: http://localhost:${port}`);
});
