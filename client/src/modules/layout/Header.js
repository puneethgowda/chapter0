import React from "react";
import {NavLink} from "react-router-dom"
import logo from "../../assets/logo.png";
import Button from "../../components/button/Button"

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} className="header__logo" alt="" />
      </NavLink>
       <NavLink to="/book/create" className="header__create">Create New</NavLink>
    </div>
  );
}

export default Header;
