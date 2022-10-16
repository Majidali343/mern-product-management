const mongoose=require('mongoose');


const productschema=new mongoose.Schema({
   name:String,
   price:String,
   orderDate:String,
   deliverDate:String,
   size:String,
   stock:String
   
})

 module.exports= mongoose.model('products',productschema);




