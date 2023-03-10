import React from 'react';
import bannerImage from "../../assets/img/kalen.png"
import "../Banner/Banner.css"
const Banner = () => {
    return (
        <div className="banner">
        <img src={bannerImage} alt="Banner" />
       
      </div>
    );
};

export default Banner;