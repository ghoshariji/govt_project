import React from "react";
import Carousel from "../components/Carousel";
import AdminDashControl from "../components/AdminDashControl";
import About from "../components/About";
import NewsCard from "../components/NewsCard";
import ZoneInfo from "../components/ZoneInfo";
import RegisteredIndustryTable from "../components/RegisteredIndustryTable";
import UnRegisteredIndustryTable from "../components/UnRegisteredIndustryTable";

function ZonalAdminDashboard() {
  return (
    <div className="flex flex-row">
      <div>
        <AdminDashControl />
      </div>
      <div className="dashboard-content">
        <Carousel />
        <div className="zone-info-container">
          <ZoneInfo />
        </div>
        {localStorage.getItem("registeredRender") === "true" && (
          <RegisteredIndustryTable />
        )}
        {localStorage.getItem("unregisteredRender") === "true" && (
          <UnRegisteredIndustryTable />
        )}
        <NewsCard />
        <About />
      </div>
    </div>
  );
}

export default ZonalAdminDashboard;
