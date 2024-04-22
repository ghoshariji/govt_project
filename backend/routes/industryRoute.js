const router = require('express').Router();
const Industry = require('../models/industry');

router.get('/', async (req, res) => {
    try {
        // Fetch Industries
        const industries = await Industry.find({});

        // Send response with fetched industries
        res.status(200).json(industries);
    } catch (error) {
        // Handle errors
        console.error("Error fetching industries:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/',async(req,res)=>{
    try{
        const {zone_id} = req.body;
        const c = await Industry.find({zone_id:zone_id}).countDocuments();
        res.status(200).json({count:c});
    }catch(e){
        console.log(e);
        res.status(500).json({error:"Internal server error"});
    }
})

router.post('/zoned',async(req,res)=>{
    try{
        const {zone_id} = req.body;
        const c = await Industry.find({zone_id:zone_id});
        res.status(200).json(c);
    }catch(e){
        console.log(e);
        res.status(500).json({error:"Internal server error"});
    }
})

router.put('/registration',async(req,res)=>{
    try {
        const { industry_id } = req.body;
        
        const updatedIndustry = await Industry.findOneAndUpdate(
            { industry_id: industry_id },
            { $set: { is_registered: true } },
            { new: true }
        );

        if (updatedIndustry) {
            return res.status(200).json({ success: true, message: "Industry registration successful", industry: updatedIndustry });
        } else {
            return res.status(404).json({ success: false, message: "Industry not found" });
        }
    } catch (error) {
        console.error("Error registering industry:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

router.delete("/delete", async (req, res) => {
    try {
        const { industry_id } = req.query; // Extract industry_id from query parameters
    
        const deletedIndustry = await Industry.findOneAndDelete({ industry_id: industry_id });

        if (deletedIndustry) {
            return res.status(200).json({ success: true, message: "Industry deleted successfully" });
        } else {
            return res.status(404).json({ success: false, message: "Industry not found" });
        }
    } catch (error) {
        console.error("Error deleting industry:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;
