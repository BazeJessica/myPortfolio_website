import React, { useRef, useState } from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

const openMenu = () =>{
  menuRef.current.style.right = "0";
}
const closeMenu = () =>{
  menuRef.current.style.right = "-350px";
}

  return (
    <div className="navbar">
      <div>
         <img src={logo} alt="logo" className="logo" />
         <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      </div>
     
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li> <a href="#home" className="anchor-link"> <p onClick={()=>{
          setMenu("home")
        }}>Home</p></a>{menu === "home"? <img src={underline} alt=" " /> : <></> }</li>
        <li> <a href="#about" className="anchor-link"> <p onClick={()=>{
          setMenu("about")
        }}>About Me</p></a>{menu === "about"? <img src={underline} alt=" " /> : <></> }</li>
        <li> <a href="#projects" className="anchor-link"> <p onClick={()=>{
          setMenu("projects")
        }}>Projects</p></a>{menu === "projects"? <img src={underline} alt=" " /> : <></> }</li>
        <li> <a href="#work" className="anchor-link"> <p onClick={()=>{
          setMenu("portfolio")
        }}>Portfolio</p></a>{menu === "work"? <img src={underline} alt=" " /> : <></> }</li>
        <li> <a href="#contact" className="anchor-link"> <p onClick={()=>{
          setMenu("contact")
        }}>Contact</p></a>{menu === "contact"? <img src={underline} alt=" " /> : <></> }</li>
      </ul>
      <div className="nav-connect"><a href="#contact" className="anchor-link">Connect with Me</a> </div>
    </div>
  );
};

export default Navbar;
