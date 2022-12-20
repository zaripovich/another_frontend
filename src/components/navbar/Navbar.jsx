import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return(
    <nav class="navbar">
      <div id="trapezoid">
        <img src={logo} alt="logo" class="logo"/>
        <Link to="aboutus" className="aboutUs">О нас</Link>
        <Link to="home" className="expandHome">О проекте</Link>
        <Link to="" className="rating">Рейтинг</Link>
        </div>
    </nav>
  )
}
export default Navbar