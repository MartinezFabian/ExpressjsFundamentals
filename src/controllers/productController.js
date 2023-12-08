let products = [
  { id: 1, name: 'Iphone 11 Pro', price: 900 },
  { id: 2, name: 'Iphone XS Max', price: 600 },
  { id: 3, name: 'Sansung S20', price: 300 },
  { id: 4, name: 'Macbook', price: 3000 },
];

const getAllProducts = (req, res) => {
  res.json(products);
};

const createProduct = (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

const createProductByForm = (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  product.name = name;
  product.price = price;

  res.json(product);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const newProducts = products.filter((product) => product.id !== parseInt(id));

  if (products.length === newProducts.length) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products = newProducts;

  res.sendStatus(204);
};

const searchProduct = (req, res) => {
  const { q } = req.query;

  let filteredProducts = [];

  if (q) {
    filteredProducts = products.filter((product) => product.name.includes(q));
  }

  res.json(filteredProducts);
};

module.exports = {
  getAllProducts,
  createProduct,
  createProductByForm,
  updateProduct,
  deleteProduct,
  searchProduct,
};
