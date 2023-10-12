const express=require("express");

require('dotenv').config();

const mongoose =require('mongoose');






const dbconnect=()=>{

   mongoose.connect(process.env.URL,
    {
       
    })
    .then(()=>
    {
        console.log("db connection successful");
    })
    .catch((er)=>
    {
        
 console.log("error in db connection")
        console.error(er);
        process.exit(1);
    })
   


}


module.exports=dbconnect;

