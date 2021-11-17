const express = require("express");
const router = express.Router();
const Rating= require('./../models/Rating.model');



router.post("/rating", (req, res) => { 
    const rating = req.body;  
    console.log(rating); 
    Rating.create(rating)  
     .then(rating => {
         res.status(200).json({rating , message: 'Rating created' })
     })
     
})

 

module.exports = router
