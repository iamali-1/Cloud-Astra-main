import React from "react";
// import Hero from "./Hero";
// import skype from "../assets/images/company/skype.png";
import Banner from "./Banner";
import Content from "./Content";
import Stats from "./Stats";
import Tools from "./Tools";
import Navbar from "./Navbar";
import Slides from "./Slides";
import Badges from "./Badges";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section className="relative mb:pb-24 pb-16 ">
        <Banner />
        <Slides />
        <Content />
        <Stats />
        <Badges />
        <Tools />
      </section>
    </>
  );
};

export default Portfolio;
