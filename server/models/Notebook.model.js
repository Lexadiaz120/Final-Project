const {Schema, model} = require('mongoose'); 
 
const NotebookSchema = new Schema({
    display: String,   
    image:  String, 
    notebookphoto: String, 
    processor: String, 
    CPU: String, 
    StorageDevice: String, 
    OperativeSystem: String, 
    Laptopweight: Number, 
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
}, 
{
    timestamps: true,
    
}
) 



const Notebook = model("Notebook", NotebookSchema); 


module.exports = Notebook; 

