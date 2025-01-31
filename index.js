const express = require('express')
const dotenv = require("dotenv");
const productmodel = require('./model/product');
const connectDB = require ('./dbconnection/connection')

let app = express();
app.use(express.json());
dotenv.config()



connectDB()


app.post('/addproduct',async (req,res)=>{
    try {
        const {title,price} = req.body

        const product = await productmodel.create(req.body)
         
        return res.status(200).json({
            sucess : true ,
            product : product 
        })
    }catch(error){
        console.error('something went wrong')
        return res.status(400).json({
            sucess : false ,
            msg : 'Something went wrong' 
        })
    }
})


app.listen(8000, () => {
    console.log("Server running on port 8000");
  });