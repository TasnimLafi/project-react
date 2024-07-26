import React from 'react';
import { FaStar } from 'react-icons/fa';


const Star = ({ isYellow, onClick }) => {
  return (
    <FaStar
      className={`star ${isYellow ? 'yellow' : 'gray'}`}
      onClick={onClick}
      style={{fontSize:30}}
    />
  );
};

export default Star;
