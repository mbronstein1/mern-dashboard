const router = require('express').Router();
const clientRoutes = require('./client');
const generalRoutes = require('./general');
const managementRoutes = require('./management');
const salesRoutes = require('./sales'); 

router.use('/client', clientRoutes);
router.use('/general', generalRoutes);
router.use('/management', managementRoutes);
router.use('/sales', salesRoutes);

module.exports = router;
