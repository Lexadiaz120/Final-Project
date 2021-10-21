const express = require("express");
const router = express.Router();
const Product = require('../models/Product.model'); 
const Notebook = require('./../models/Notebook.model');   
const Shop = require('./../models/Shop.model'); 
  

router.get('/notebooks' , (req, res ) => {
        Product.find({ "name": { "$regex": "Laptop", "$options": "i" } },)
         .populate('notebook')
        .then(product => res.status(200).json(product)) 
        .catch(err => res.status(200).json({code: 500, error: 'Error showing', err: err.message}))
})

router.post('/notebooks' , (req, res ) => {
    const product = req.body; 
    Product.create(product) 
      .then(product => res.status(200).json({product, message: 'Product created'})) 
      .catch(err => res.status(200).json({code: 500,  error: 'Error creating product'})); 
})
   

router.get('/caracteristicsnotebook/:id', (req, res) => {
        const { id } = req.params
        Notebook.findById(id)
                .then(product => {
                        res.status(200).json(product)
                })
                .catch(err => res.status(200).json({ code: 500, error: "Error showing mobiles", err }))
})


 


router.post('/caracteristicsnotebook/:id', (req, res) => {
        const {id} = req.params;  
        const notebook = req.body;  
        console.log(notebook);

        Notebook.create(notebook) 
          .then(notebook => {
                  return Product.findByIdAndUpdate(id, {notebook: `${notebook._id}`}) 
                  .then(notebook => res.status(200).json({notebook , message: 'Notebook created'})) 
                          .catch(err => res.status(500).json({ code: 500, error: 'Error creating caracteristics' }, err))
          })  
          .catch(err => console.log(err))
                 
})  

















 



module.exports = router; 









