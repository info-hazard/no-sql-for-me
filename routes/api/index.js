const router = require('express').Router();
const thoughtRoutes = require('./thoughtroutes');
router.use('/thoughts', thoughtRoutes);
module.exports = router;