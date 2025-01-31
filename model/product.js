const mongoose = require('mongoose')


const productschema = new mongoose.Schema({
    title : {
       type : String ,
       required : true
    },
    price : {
        type : String ,
        required : true
     }
     
},
 {
   timestamps : true
 }
)

module.exports = mongoose.model('Product',productschema)