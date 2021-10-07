const { model, Schema } = require('mongoose');


const ShopSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'ProductModel'
  },
  price: String,
  shop: String,
  link: String
},
  {
    timestamps: true
  })



const ShopProduct = model("ShopSchema", ShopSchema);

module.exports = ShopProduct;


 // Diseño

// Añadir a favoritos  

// delete mobiles 




// Comments 