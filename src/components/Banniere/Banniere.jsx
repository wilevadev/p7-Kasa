import React from 'react';
import bannerImage from '../../assets/img/IMG.png';
import "../Banniere/Banniere.css"
function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;