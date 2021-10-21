const express = require("express"); 
const router = express.Router(); 
const Product = require('./../models/Product.model'); 

 
 
router.get("/products", (req, res) => {
    Product.find() 
     .then(product => {
         res.status(200).json(product) 
     })  
     .catch(err => res.status(200).json({code: 500 , err: 'Error showing products', err: err.message})) 
})

 


 


module.exports = router; 
