const { Schema, model } = require("mongoose");




const ProductModel = new Schema({
    name: {
        type: String, 
    }, 
    shortdescription: {
        type: String,
        min: 20,
        max: 350
    },  
    link: {
        type: String
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
    notebook: {
        type: Schema.Types.ObjectId, 
        ref: 'Notebook'
    }, 
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