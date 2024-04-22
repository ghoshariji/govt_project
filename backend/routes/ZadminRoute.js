const router =require("express").Router();
const Admin = require("../models/admins");

router.post("/",async(req,res)=>{
    try{
        const {admin_email,pass} = req.body;
        const reqAdm = await Admin.find({admin_email:admin_email,password:pass});
        if(reqAdm.length!=0){
            res.status(200).json(reqAdm);
        }else{
            res.status(400).json({message:"No registered admin found for given credentials"});
        }
    }catch(e){
        res.status(500).json({message:"Internal server error"});
    }
});

module.exports = router;