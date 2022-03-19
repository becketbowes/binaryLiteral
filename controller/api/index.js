const router = require('express').Router();
const readerRoutes = require('./reader-routes');
const literalRoutes = require('./literal-routes');

router.use('/readers', readerRoutes);
router.use('/literals', literalRoutes);

module.exports = router;