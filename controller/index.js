const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./viewroutes');
const writeRoutes = require('./writeroutes');

router.use('/write', writeRoutes);
router.use('/', viewRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => { res.status(404).end(); });

module.exports = router;