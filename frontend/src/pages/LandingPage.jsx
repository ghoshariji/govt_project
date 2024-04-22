import React from "react";
import Carousel from "../components/Carousel";
import NewsCard from "../components/NewsCard";
import Section from "../components/Section";
import GovernmentDirectories from "../components/GovernmentDirectories";
import Contact from "../components/Contact";
import About from "../components/About";
import AboutIADA from "../components/AboutIADA";

function LandingPage() {
  return (
    <div>
      <Carousel />
      <NewsCard />
      <AboutIADA />
      {/*space for a component to improve layout */}
      <GovernmentDirectories />
      {/* <Contact /> */}
      <About />
    </div>
  );
}

export default LandingPage;
