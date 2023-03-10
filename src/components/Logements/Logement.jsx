import React from 'react';
import "../Logements/Logement.css"

const Logement = ({ logements }) => {
  return (
    <div className="outCards">
      <div className="Cards">
        {logements.map((housing) => (
          <div key={housing.id}>
            <a href={`/logement/${housing.id}`}>
              <img src={housing.cover} alt={housing.title} />
              <h3>{housing.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logement;