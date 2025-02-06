const mongoose = require('mongoose')


const productschema = new mongoose.Schema({
    title : {
       type : String ,
       required : true
    },
    price : {
        type : String ,
        required : true
     },

     imageurl : {
         type : String ,
         required : true
     },
     description : {
      type : String,
      required : true
     },
     
     category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', 
      required: true
  }

},
 {
   timestamps : true
 }
)

module.exports = mongoose.model('Product',productschema)