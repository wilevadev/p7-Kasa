import React from 'react';

const Cards = ({ housing }) => {
    return (
        <div className='card'>
            <img src={housing.cover} alt={housing.title} />
            <div className='card-content'>
                <h2>{housing.title}</h2>
                <p>{housing.description}</p>
                <p>{housing.location}</p>
                <ul>
                    {housing.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cards;