const express = require("express");
const app = express();
const fs = require("fs");
const dbConnect = require("./config/db");
const Zone = require("./models/zoneData");
const Admin = require("./models/admins");
const Industry = require("./models/industry");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const Image = require("./models/images");


const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(bodyParser.json())

dbConnect();

app.post("/addIndustry", async (req, res) => {
    try{
        const {
            industry_id,
            industry_name,
            zone_id,
            industry_area,
            plot_number,
            established_date,
            lessee,
            item_manufactured,
            gstin_number,
            is_registered
        } = req.body;

        const newIndustry = new Industry({
            industry_id,
            industry_name,
            zone_id,
            industry_area,
            plot_number,
            established_date,
            lessee,
            item_manufactured,
            gstin_number,
            is_registered
        });
        const savedIndustry = await newIndustry.save();
        res.status(201).json(savedIndustry);
    }catch(e){
        console.log(e);
        res.status(500).json({error:"Internal server error"});
    }
})

app.get("/industries/:is_registered", async (req, res) => {
    try {
        const isRegisteredParam = req.params.is_registered;
        const isRegistered = (isRegisteredParam === 'true');

        const industries = await Industry.find({ is_registered:isRegistered });
        res.status(200).json(industries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.post("/addzone", async (req, res) => {
    try {
        const { zone_id, zone_area, no_Industries_under, zonal_admin_id } = req.body;
        const newZone = new Zone({ zone_id, zone_area, no_Industries_under, zonal_admin_id });
        await newZone.save();
        res.status(200).json({ message: "Zone added successfully" })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "something went wrong" })
    }
})

app.post("/addadmin", async (req, res) => {
    try {
        const { admin_type, admin_id, admin_name, admin_email, password, admin_dob, phone_number, zone_id } = req.body;
        const zoneId = zone_id || null;

        const newAdmin = new Admin({
            admin_type,
            admin_id,
            admin_name,
            admin_email,
            password,
            admin_dob,
            phone_number,
            zone_id: zoneId
        });
        await newAdmin.save();
        res.status(200).json({ message: "Admin added successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Something went wrong" });
    }
});

app.get("/api/media", async (req, res) => {
    try {
        console.log("request received");
        const images = await Image.find({});
        res.status(200).json(images);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/api/addimage", upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file provided" });
        }
        const newImage = new Image({
            title: req.body.title,
            description: req.body.description,
            image: {
                data: fs.readFileSync(req.file.path),
                contentType: req.file.mimetype
            }
        });
        await newImage.save();

        fs.unlinkSync(req.file.path);
        res.status(200).json({ message: "Image added to database successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(8000, () => {
    console.log("Server active");
})