const express=require('express');
const { localFileUpload, imageUpload, videoUpload } = require('../controllers/fileUpload');
const router=express.Router();



router.post('/localFileUpload',localFileUpload);
router.post('/fileUpload',imageUpload);


module.exports=router;