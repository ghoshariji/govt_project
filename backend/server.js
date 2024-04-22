const express = require("express");
const app = express();
const dbConnect = require("./config/db");
const Zone = require("./models/zoneData");
const Admin = require("./models/admins");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/industryUserRoute");
const industryRoutes = require("./routes/industryRoute");
const zoneRoutes = require("./routes/zoneRoute");
const otpRoutes = require("./routes/otpRoute");
const zAdminRoutes = require("./routes/ZadminRoute");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

dbConnect();

app.post("/addzone",async(req,res)=>{
    try{
        const {zone_id,zone_area,no_Industries_under,zonal_admin_id} = req.body;
        const newZone = new Zone({zone_id,zone_area,no_Industries_under, zonal_admin_id});
        await newZone.save();
        res.status(200).json({message:"Zone added successfully"})
    }catch(e){
        console.log(e);
        res.status(500).json({message:"something went wrong"})
    }
})

app.post("/addadmin", async (req, res) => {
    try {
        const { admin_type, admin_id, admin_name, admin_email,password, admin_dob, phone_number, zone_id } = req.body;
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


app.use("/api/users",userRoutes);
app.use("/api/industry",industryRoutes);
app.use("/api/zone",zoneRoutes);
app.use("/api/sendOtp",otpRoutes);
app.use("/api/zAdmin",zAdminRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to the server");
})


app.listen(8000,()=>{
    console.log("Server active");
})