// Route = '/general'
const { getUser } = require('../controllers/general');
const router = require('express').Router();

router.get('/user/:id', getUser);

module.exports = router;
