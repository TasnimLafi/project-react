import React from 'react';

const TourguideCard = ({ el }) => {
    return (
        <div className='resume-container'>
            <img src={el.img} alt="" />
            <h1>{el.name}</h1>
            <h2>{el.location}</h2>
            <h2>{el.email}</h2>
            <h2>{el.phone}</h2>
            <p>{el.info}</p>
        </div>
    );
};

export default TourguideCard;
