// Route = '/client'
const router = require('express').Router();
const { getProducts } = require('../controllers/index');

router.get('/products', getProducts);

module.exports = router;
