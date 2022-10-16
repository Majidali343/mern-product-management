const express = require("express");
require("./db/config");
const product = require("./db/products");
const user = require("./db/users");
const cors = require("cors");
const jwt=require('jsonwebtoken');
const jwtKey = "Majiddashboard"


const app = express();
app.use(cors());
app.use(express.json());

app.post("/registration", async (req, res) => {
  let data = new user(req.body);
  let userdata = await data.save();
  userdata = userdata.toObject();
  delete userdata.password;
  jwt.sign({data},jwtKey,{expiresIn:"3h"} ,(err,token)=>{
    res.send({data,auth:token});

  })
});

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let data = await user.findOne(req.body).select("-password"); ///to not shw the password
    if (data) {
      jwt.sign({data},jwtKey,{expiresIn:"3h"} ,(err,token)=>{
        res.send({data,auth:token});

      })
    } else {
      res.send("no data found");
    }
  } else {
    res.send("mising username and password");
  }
});



////// all the aips related to the products
app.post("/addproduct", async (req, res) => {
  let data = new product(req.body);
  let userdata = await data.save();

  res.send(userdata);
});

app.get("/products", async (req, res) => {
  let products = await product.find();

  if (products.length > 0) {
    res.send(products)

  } else {
    res.send("no data found")
  }
})

app.get("/getproduct/:id", async (req, res) => {
  let result = await product.findOne({ _id: req.params.id });

  if (result) {
    res.send(result)

  } else {
    res.send("no data found")
  }
})



app.delete('/delete/:id', async (req, res) => {
  let result = await product.deleteOne({ _id: req.params.id })
  res.send(result);
})

app.put('/update/:id', async (req, res) => {
  let result = await product.updateOne(
    { _id: req.params.id }, { $set: req.body }

  )
  res.send(result);
  console.log(result)

})


//////search a product
app.get('/search/:key', async (req, res) => {
  
  let result = await product.find({ 
   "$or" :[
      {name : {$regex :req.params.key}},
      {price : {$regex :req.params.key}},
      {orderDate: {$regex :req.params.key}},
      {size: {$regex :req.params.key}},
      {stock: {$regex :req.params.key}}
   ]

  });
  res.send(result);

})

app.listen(5000);
