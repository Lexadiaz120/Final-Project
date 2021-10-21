const express = require("express");
const router = express.Router();
const Product = require('./../models/Product.model');
const Phone = require('./../models/Phone.model');
const shopMobile = require('./../models/Shop.model');

//Show mobile
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




router.get('/shops/:id', (req, res) => {
  console.log(req.params);
  shopMobile.find({ product: req.params.id })
    .populate('product')
    // .select('name image')
    .then(products => {
      console.log(products);
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












