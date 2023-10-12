const { cloudinaryConnect } = require('../config/cloudinary');
const File=require('../models/File');
const cloudinary=require('cloudinary');


async function uploadFileToCloudinary(file,folder,quality)
{

    const options={folder};
    console.log(file.tempFilePath);
    console.log(options);
    if(quality)
    {
        options.quality=quality;
        console.log("quality ayi");
    }

    
    
    options.resource_type = 'auto';
    console.log(options);

     
    
    return await cloudinary.uploader.upload(file.tempFilePath,options);

}


exports.localFileUpload=async (req,res)=>
{
    try{

        const file=req.files.file;
        console.log("file aagyi->",file);

        let path=__dirname + "/file" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH->",path);
            
        file.mv(path,(err)=>
        {
            console.log(err);
        })

        res.json({
            success:true,
            message:'Local File uploaded successfully',
        })

    }
    catch(e){
        console.log("error in local file upload");
        console.error(e);
    }
}


exports.imageUpload=async(req,res)=>
{
    try{
        const {name,tags,email}=req.body;
        console.log(name,tags,email);
        const file=req.files.imageFile;
        console.log(file);
          
        

        // validation

        
        // if supported the validation

        

        console.log("uploading to cloudinary");
        const response=await uploadFileToCloudinary(file,"videoUploadtesing",30);

        console.log("after funtion call of cloudinary upload");


        console.log(response);
        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url
        });
        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:"file successfully uploaded on cloudinary"
        })
    }
    catch(e){
        console.log("error in uploading ,somthing went wrong")
        console.error(e);
    }
}



// video upload

// image size reducer




