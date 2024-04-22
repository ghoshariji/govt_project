const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/admins');
const User = require('./models/industryUser');
const Zone = require('./models/zoneData');
const Industry = require('./models/industry');
const dbConnect = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

dbConnect();

const db = mongoose.connection;


const seed =  async () => {
  console.log('Connected to MongoDB');

  // Seed Admin
  const adminData = [
    {
      admin_type: 'master_admin',
      admin_name: 'Master Admin',
      admin_email: 'master@admin.com',
      password: 'masteradminpassword',
      admin_dob: new Date('1990-01-01'),
      phone_number: '1234567890'
    },
    {
      admin_type: 'zonal_admin',
      admin_name: 'Zonal Admin',
      admin_email: 'zonal@admin.com',
      password: 'zonaladminpassword',
      admin_dob: new Date('1995-05-05'),
      phone_number: '9876543210',
      zone_id: "123"
    }
  ];

 await Admin.deleteMany({});
 await Admin.create(adminData);

  // Seed User
  const userData = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'userpassword',
      dob: new Date('1985-10-15'),
      phone_number: '5551234567',
      industry_id: 'IND0001',
      isApproved: true
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'userpassword',
      dob: new Date('1990-03-20'),
      phone_number: '5559876543',
      industry_id: 'IND0002',
      isApproved: false
    }
  ];

  await User.deleteMany({});
  await User.create(userData);

  // Seed Zone
  const zoneData = [
    {
      zone_name: "LodhiMajra",
      zone_area: 65421,
      no_Industries_under: 5,
      zonal_admin_id: 'admin_id_1',
      zone_id:"123"
    },
    {
      zone_name: "Zone B",
      zone_area: 12456,
      no_Industries_under: 3,
      zonal_admin_id: 'admin_id_2',
      zone_id: "456"
    }
  ];

 await Zone.deleteMany({});
  await Zone.create(zoneData);

  // Seed Industry
  const industryData = [
    {
      industry_id: "IND0001",
      industry_name: 'Industry A',
      zone_id: '123',
      industry_area: 180.5,
      plot_number: 'C-303',
      established_date: new Date('2020-01-01'),
      lessee: 'Lessee A',
      item_manufactured: 'Product A',
      gstin_number: 'GSTIN123',
      is_registered: true
    },
    {
      industry_id: "IND0002",
      industry_name: 'Industry B',
      zone_id: '456',
      industry_area: 145.2,
      plot_number: 'SUP-120',
      established_date: new Date('2019-05-15'),
      lessee: 'Lessee B',
      item_manufactured: 'Product B',
      gstin_number: 'GSTIN456',
      is_registered: false
    }
  ];

 await Industry.deleteMany({});
 await Industry.create(industryData);

  console.log('Database seeded successfully');

  // Close the connection
  mongoose.disconnect();
};

seed();
