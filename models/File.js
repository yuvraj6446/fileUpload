const mongoose=require('mongoose');
const nodemailer = require("nodemailer");
const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    imageUrl:{
        type:String,
    },
    tags:{
            type:String,
    },
    email:{
        type:String
    },


})

fileSchema.post("save",async function(doc){
    try{
        console.log("doc",doc);
        let transporter=nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        }
    })
    let info=await transporter.sendMail({
        from:"code help to fghjk",
        to:doc.email,
        sunject:"new file uploaded",
        html:`<h1>yiur file has been successfully uploaded over the cloudnary</h1>`
    })
    }
    catch(e)
    {
        console.log("error in send email");
        console.error(e);
    }
    
}
)


const File=mongoose.model("File",fileSchema);

module.exports=File;
