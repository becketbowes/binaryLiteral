const router = require('express').Router();
const readerRoutes = require('./reader-routes');

router.use('/readers', readerRoutes);

module.exports = router;