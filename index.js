const express=require("express");

const app=express();



require("dotenv").config();
const port=process.env.PORT||5000;

app.use(express.json());
const fileUpload=require('express-fileupload');
console.log("sdf");
const dbconnect = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
  
}));

dbconnect();

cloudinaryConnect();

const upload=require('./routes/fileUpload');
app.use(express.json());

app.use('/api/v1/upload',upload);

app.get('/',(req,res)=>
{
    console.log("open on browser");
    res.send("hey baby its running");
})
app.listen(port,()=>{
    console.log('App is running on 3000')
})

