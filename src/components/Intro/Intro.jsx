import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion"
import { Link } from "react-scroll";


const Intro = () => {

  const transition = {duration: 2, type:'spring'}


  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode


  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode?'white':''}}>Hy! I am </span>
          <span>Kevansh Gopani</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and developement, producing the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>

        <div className="i-icons">
          <a href="https://github.com/KevanshGopani" target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
          
          <a href="http://www.linkedin.com/in/kevansh-gopani" target="_blank" rel="noreferrer">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="http://"><img src={Instagram} alt="" /></a>
          
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        < motion.img 
        initial={{left:'-30%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={Glassesimoji} alt="" />

        <motion.div 
        initial={{top:'-4%', left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
        style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div 
        initial={{top:'18rem', left:'74%'}}
        whileInView={{left:'6rem'}}
        transition={transition}

        style={{ top: "18rem", left: "18rem" }}>
          <FloatingDiv image={Thumbup} text1="Best" text2="Design" />
        </motion.div>

        {/* Blur Divs */}

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
