import React from 'react';
import logoFooter from "../../assets/img/logoFooter.png";
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <footer>
        <div className='logoFooter'>
            <img src={logoFooter} alt="logo kasa" />
            <h5>© 2020 Kasa. All rights reserved</h5>
        </div>
        </footer>
    );
};

export default Footer;