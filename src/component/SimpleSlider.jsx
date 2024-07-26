import React from "react";
import Slider from "react-slick";
import CommentTemplate from "./CommentTemplate";
import { useSelector } from "react-redux";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1
  };
  const comments=useSelector(state=>state.comentslicee.comments)
  return (
    <div className="container">
    <Slider {...settings} >
        {comments.map(el=><CommentTemplate el={el} />)}
    </Slider>
    </div>
  );
}
export default SimpleSlider