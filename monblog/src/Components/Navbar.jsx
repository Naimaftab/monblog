import React from 'react';
import classNames from '../styles/components/navbar.module.css';

function NavBar() {
return (
    <nav className = {classNames.navbar}>
      <div>            
         <img src="logo192.png" alt="logo site" className = {classNames.imgLogo}/>
      </div>
      <ul className= {classNames.linavbar}>
        <li ><a href="https://example.com">Accueil</a></li>
        <li><a href="https://example.com">A propos</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="https://example.com">Se connecter</a></li>
      </ul>
    </nav>)
}
export default NavBar;
