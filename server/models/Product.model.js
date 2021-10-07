const { Schema, model } = require("mongoose");



const ProductModel = new Schema({
    name: {
        type: String, 
        minlength: 2,
        maxlength: 30,
    }, 
    shortdescription: {
        type: String,
        min: 20,
        max: 350
    }, 
    color: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },    
    comments: [{
     type: Schema.Types.ObjectId, 
        ref: 'commentSchema'
    }],   
    mobile: {
        type: Schema.Types.ObjectId,
        ref: 'PhoneSchema'
    },
    popular: [{
        type: Schema.Types.ObjectId,
        ref: 'ProductModel'
    }]
})
const modelProduct = model("ProductModel", ProductModel);


module.exports = modelProduct;