const express = require("express");
const router = express.Router();
const Product = require('./../models/Product.model'); 
const Phone = require('./../models/Phone.model');  
const User = require('./../models/User.model')
const Comment = require('./../models/Comment.model');
const shopMobile = require('./../models/Shop.model');    


//Show mobile 







router.post('/comments/:id', (req, res) => {
  const { id } = req.params;  
  let { title, description} = req.body
  Comment.create({ title, description, user: req.session.currentUser.username})
    .then(comment => {    
      return Phone.findByIdAndUpdate(id, { "$push": { "comments": comment._id } })
        .then(comment => res.status(200).json({ comment, message: 'Comment created' }))
        .catch(err => res.status(500).json({ code: 500, error: 'Error creating comments' }, err))
    })
    .catch(err => console.log(err))
})


router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  Comment.findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: `Comment  deleted` }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting Comment", err }))
})



router.get('/mobiles', (req, res) => {
  Product.find({ name: { $not: /^Laptop.*/ } })
    .populate('mobile')
    .then(product => res.status(200).json(product))
    .catch(err => res.status(200).json({ code: 500, error: "Error showing mobiles", err: err.message }));
})

router.post('/mobiles', (req, res) => {
  const product = req.body;
  Product.create(product)
    .then(product => res.status(200).json({ product, message: 'Product Created' }))
    .catch(err => res.status(500).json({ code: 500, error: "Error creating Product", err }))
})


router.get('/caracteristicsmobile/:id', (req, res) => {
  const { id } = req.params
  Phone.findById(id)
    .populate('comments')   
    .then(product => {
      res.status(200).json(product)
    })
    .catch(err => res.status(200).json({ code: 500, error: "Error showing mobiles", err }))
})


router.post('/caracteristicsmobile/:id', (req, res) => {
  const { id } = req.params;
  const mobile = req.body;
  Phone.create(mobile)
    .then(mobile => {
      return Product.findByIdAndUpdate(id, { mobile: `${mobile._id}` })
        .then(mobile => res.status(200).json({ mobile, message: 'Phone created' }))
        .catch(err => res.status(500).json({ code: 500, error: 'Error creating caracteristics' }, err))
    })
    .catch(err => console.log(err))
})
 


router.get('/mobilecomments/:id', (req, res) => {
     const {id} = req.params;  
     Phone.findById(id)  
     .populate('comments')   
     .select('comments') 
     .then(product => {
       res.status(200).json(product)
     }) 
     .catch(err => res.status(200).json({code: 500, error: "Error showing comments", err}))  
})


router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then((product) => {
      res.status(200).json({ product, message: `Product ${id} deleted ` })
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting product", err }))
})  


router.get("/favs", (req, res) => { 
   User  
     .findById(req.session.currentUser._id) 
     .populate('favorites') 
     .select('favorites')
     .then(user => {
       res.status(200).json(user)
     }) 
     .catch(err => res.status(500).json({code: 500, message: "Error getting user"}, err))
})



router.post("/favs/:id", (req, res) => {
  const { id } = req.params;
  User
    .findByIdAndUpdate(req.session.currentUser, { $push: { favorites: id } })
    .then((favorites) => {
      res.status(200).json({favorites, message: `Favorite ${id} added`})
    }) 
    .catch(err => res.status(500).json({code: 500, message: "Favorite added", err}))
})


router.get('/shops/:id', (req, res) => {
  console.log(req.params);
  shopMobile.find({ product: req.params.id })
    .populate('product')
    // .select('name image')
    .then(products => {
      res.status(200).json({ products, message: 'Shop show' })
    }).catch(err => res.status(500).json({ code: 500, error: 'Error  shops', err }))
})


router.post('/shops', (req, res) => {
  const shop = req.body;

  shopMobile.create(shop)
    .then(product => {
      res.status(200).json({ product, message: 'Shop created' })
    })
})



// Buscar productos feautare 
// Comments feauture 
// Favoritos feauture







// Añadir tv , añadir tablets, añadir portatiles, añadir monitores 

// Para cada categoria 10 productos, 

// Front end de todo

// 

//router.post('/comments/:id', (req, res) => {
//  const { id } = req.params;
// const { comment } = req.body;
// console.log(comment)

//  req.session.currentUser._id


//  Comment.create({comment ,  user: req.session.currentUser._id})
//   .then(comment => {
//    return Product
//     .findByIdAndUpdate(id, { "$push": { "comment": comment._id } }, { new: true })
//    .then(product => {
//     res.status(200).json({ comment: product.comment, message: 'Comment created' })
//  })
//})
// .catch(err => console.log(err));
//})




































// Find Caracteristic of mobile 






// Show mobile 
// Create mobile 
// Show caracteristic of mobile 
// Create caracteristic of mobile 
// Edit mobile(Update mobile (router.put()))
// Delete mobile  



module.exports = router;












