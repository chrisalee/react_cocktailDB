import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/react_cocktailDB">
          <img src={logo} alt="" className="logo"/>
        </Link>
        <p></p>
        <ul className="nav-links">
          <li>
            <Link to="/react_cocktailDB">Home</Link>
          </li>
          <li>
            <Link to="/react_cocktailDB/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
