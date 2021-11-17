const router = require("express").Router();
const authRouter = require('./auth.routes'); 
const mobileRoutes = require('./mobiles.rotes'); 
const NoteRoutes = require('./notebooks..routes');   
const productRoutes = require('./products.routes');  
const uploadRoutes = require('./upload.routes'); 
const ratingRoutes = require('./rating.routes');



router.use("/auth", authRouter); 
router.use('/catalog', mobileRoutes, NoteRoutes, productRoutes, ratingRoutes);
router.use("/upload",  uploadRoutes);  


// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
  
 

