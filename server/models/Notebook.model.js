const {Schema, model} = require('mongoose'); 
 
const NotebookSchema = new Schema({
    display: String,   
    image:  String, 
    notebookphoto: String, 
    processor: String, 
    CPU: String, 
    StorageDevice: String, 
    OperativeSystem: String, 
    Laptopweight: Number
}, 
{
    timestamps: true,
    
}
) 



const Notebook = model("Notebook", NotebookSchema); 


module.exports = Notebook; 

