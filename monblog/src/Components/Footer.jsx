import React from 'react';
import classNames from '../styles/components/footer.module.css';

const Footer = () => {
return (
    <div className = {classNames.monFooter}>
      <ul className = {classNames.monUlFooter}>
        <li>&copy; Naima Aftab - Tous droits réservés.</li>
        <li><a href="https://example.com">Politique de confidentialité</a></li>
        <li><a href="https://example.com">Mentions légales</a></li>
      </ul>
    </div>)
}

export default Footer;