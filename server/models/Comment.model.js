const { Schema, model } = require("mongoose");

const commentSchema = new Schema({ 
  
    title: {
        type: String,
        default: 'Comentario de usuario',
    },
    description: {
        type: String,
        min: 5,
        max: 50
    }, 
    user: [{
        type: Schema.Types.Object,
        ref: 'userSchema'
    }], 
   
}, {
    timestamps: true
});

const Comment = model("Comment", commentSchema);

module.exports = Comment; 