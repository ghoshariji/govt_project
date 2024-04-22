import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import NewsCard from "../components/NewsCard";
import Section from "../components/Section";
import GovernmentDirectories from "../components/GovernmentDirectories";
import Contact from "../components/Contact";
import About from "../components/About";
import CardGroup from "../components/CardGroup";
import axios from "axios";





function IndustryUserPage() {

  const uid = localStorage.getItem("uid");

  if(uid === null){
    window.location.href = "/login";
  }



    return (
      <div>
        <Carousel />
        <CardGroup/>
        <NewsCard />
         <About/>
         {/*
        <Section />
        <GovernmentDirectories /> */}
        {/* <Contact /> */}
      </div>
    );
  }
  
  export default IndustryUserPage;