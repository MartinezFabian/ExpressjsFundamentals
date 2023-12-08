const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  createProductByForm,
  updateProduct,
  deleteProduct,
  searchProduct,
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.post('/', createProduct);
router.post('/form', createProductByForm);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/search', searchProduct);

module.exports = router;
