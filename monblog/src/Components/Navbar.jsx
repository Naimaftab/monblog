import React from 'react';
import { NavLink } from "react-router-dom";
import classNames from '../Components/Navbar';

const NavBar = () => {
return (
    <div className = {classNames.Navbar}>
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="/a-propos" activeClassName="nav-active">
        À propos
      </NavLink>
      <NavLink exact to="/contact" activeClassName="nav-active">
        Contact
      </NavLink>
      <NavLink exact to="/se-connecter" activeClassName="nav-active">
        Se connecter
      </NavLink>
    </div>)
}

export default NavBar;