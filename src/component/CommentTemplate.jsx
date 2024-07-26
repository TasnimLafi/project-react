import React from 'react'
import StarRating from './StarRating'
import Star from './Star'

const CommentTemplate = ({el}) => {
  return (
    <div className='comment-box'>
        <img src={el.image} alt="" />
        <div className="review-box">
            <h1 className='account-info'>
                {el.name}
                {el.lastname} 
                <h6>
                    {el.email}
                </h6>
            </h1>
            <div className="stars">
            {Array.from({ length: 5 }, (_, index) => (
        <Star 
          key={index}
          isYellow={index < el.stars}
        />
      ))} 
            </div>
            <div className="timer">
                {el.timer}
            </div>
            <p className='review-txt'>
                {el.review}
            </p>
        </div>
      
    </div>
  )
}

export default CommentTemplate
