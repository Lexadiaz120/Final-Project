const express = require("express");
const router = express.Router();
const Product = require('../models/Product.model'); 
const Notebook = require('./../models/Notebook.model');    
const Comment = require('./../models/Comment.model');

  


router.post('/comments/:id', (req, res) => {
        const { id } = req.params;
        let { title, description } = req.body 
        console.log(title, description)

        Comment.create( title, description )
                .then(comments => {
                        return Notebook.findByIdAndUpdate(id, { "$push": { "comments": comments._id } })
                                .then(comment => res.status(200).json({ comment, message: 'Comment created' }))
                                .catch(err => res.status(500).json({ code: 500, error: 'Error creating comments' }, err))
                })
                .catch(err => console.log(err))
}) 

router.get('/notebookcomments/:id', (req, res) => {
        const { id } = req.params;
        Notebook.findById(id)
                .populate('comments')
                .select('comments')
                .then(product => {
                        res.status(200).json(product)
                })
                .catch(err => res.status(200).json({ code: 500, error: "Error showing comments", err }))
})


router.delete('/delete/:id', (req, res) => {
        const { id } = req.params;
        console.log(id)
        Comment.findByIdAndDelete(id)
                .then(() => res.status(200).json({ message: `Comment  deleted` }))
                .catch(err => res.status(500).json({ code: 500, message: "Error deleting Comment", err }))
})


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









