const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thoughtroutes');
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
module.exports = router;