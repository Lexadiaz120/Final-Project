const { Schema, model } = require("mongoose"); 



const ProductModel  =  new Schema({
    name: {
        unique: true,
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        trim: true,
    },
    description: {
        type: String, 
        min: 20,
        max: 350
    },
    price: {
        type: String 
    }, 
    image: {
      type: String
    }, 
    rating: {
        type: String
    }, 
     location : {
         type: String
     }, 
    caracteristics: { 
        color: String, 
        display: String, 
        funtionalaties: String, 
       power: Number, 
       weight: Number,
       memory: Number
    }, 
     popular: [{
         type: Schema.Types.ObjectId,
         ref: 'Product'
     }]
}) 
const modelProduct  = model("ProductModel", ProductModel); 


model.exports = modelProduct;