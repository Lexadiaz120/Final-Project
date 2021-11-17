const { model, Schema} = require("mongoose");




const RatingModel= new Schema({
    rate: String
})
const ProductModel = model("RatingModel", RatingModel);


module.exports = ProductModel; 

