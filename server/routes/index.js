const router = require("express").Router();
const authRouter = require('./auth.routes'); 
const mobileRoutes = require('./mobiles.rotes');



router.use("/auth", authRouter); 
router.use('/catalog', mobileRoutes);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
