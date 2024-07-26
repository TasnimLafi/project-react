import React, { useState } from 'react';
import Star from './Star';
import { RiH3 } from 'react-icons/ri';

const StarRating = ({ onRatingChange,setgetrate }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    const newRating = index === rating ? 0 : index;
    setRating(newRating);
    if (typeof onRatingChange === 'function') {
      onRatingChange(newRating); 
    } else {
      console.error('onRatingChange is not a function');
    }
    setgetrate(newRating)
  };

  return (
  <div className='stars-rating'>
    <div className='star-box'>  
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          isYellow={index < rating}
          onClick={() => handleClick(index + 1)}
        />
      ))} 
    </div>
    {rating==1?<h3 style={{fontSize:30,marginTop:0}}>I hate this website </h3>:rating==2?<h3 style={{fontSize:30,marginTop:0}}>I don't like this website </h3>:rating==3?<h3 style={{fontSize:30,marginTop:0}}>I like this website </h3>:rating==4?<h3 style={{fontSize:30,marginTop:0}}>this website is amazing </h3>:rating==5?<h3 style={{fontSize:30,marginTop:0}}>best website ever </h3>:null}
  </div>
  );
};

export default StarRating;
