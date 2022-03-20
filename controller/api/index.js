const router = require('express').Router();
const readerRoutes = require('./reader-routes');
const literalRoutes = require('./literal-routes');
const commentRoutes = require('./comment-routes');

router.use('/readers', readerRoutes);
router.use('/literals', literalRoutes);
router.use('/comments', commentRoutes);

module.exports = router;