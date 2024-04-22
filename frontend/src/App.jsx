import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ZonalAdminDashboard from "./pages/ZonalAdminDashboard"
import IndustryUserPage from "./pages/IndustryUserPage"
// import GovernmentDirectories from "./components/GovernmentDirectories"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path ="/userregister" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admins/:zone_id/zonal_admin" element={<ZonalAdminDashboard/>}/>
          {/* <Route path="/industry_user" element={<IndustryUserPage/>}/> */}
          <Route path="/user/:id" element={<IndustryUserPage/>}/>
      </Routes>
      {/* <GovernmentDirectories/> */}
      <Footer />
    </Router>
  );
}

export default App;
