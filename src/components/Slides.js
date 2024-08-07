import React from "react";
import { FaAngular, FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import Marquee from "react-fast-marquee";

import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import aws from "../assets/logos/AWS.png";
import digital from "../assets/logos/Digital-Ocean.png";
import docker from "../assets/logos/Docker.png";
import heroku from "../assets/logos/Heroku.png";
import hetzner from "../assets/logos/Hetzner.png";
import kubernets from "../assets/logos/Kubernetes.png";
import lunix from "../assets/logos/Linux.png";

const Slides = () => {
  return (
    <>
      <div className="tech_container">
        <div className="tech_scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            <div className="techs_box">
              <img src={aws} />
            </div>

            <div className="techs_box">
              <img src={docker} />
            </div>
            <div className="techs_box">
              <img src={lunix} />
            </div>
            <div className="techs_box">
              <img src={kubernets} />
            </div>
            <div className="techs_box">
              <img src={heroku} />
            </div>
            <div className="techs_box">
              <img src={hetzner} />
            </div>
            <div className="techs_box">
              <img src={digital} />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Slides;
