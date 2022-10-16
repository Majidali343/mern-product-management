const mongoose=require('mongoose')

const mongooseschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports=mongoose.model('users',mongooseschema)