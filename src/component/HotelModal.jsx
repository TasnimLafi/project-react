import React, { useState } from 'react'
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { FaSpa } from "react-icons/fa";
import { IoMdRestaurant } from "react-icons/io";
import { MdOutlineLocalBar } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { MdComputer } from "react-icons/md";
import Slider from 'react-slick';



const HotelModal = ({el,setshow}) => {
    const [shownd, setshownd] = useState(false)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1
      };
  return (
    <div className="modal-overlay">
        <div className="box">
            <h1 style={{fontSize:20, fontWeight:200, cursor:'pointer', top:10}} onClick={()=>setshow(false)}>X</h1>
            <h3>{el.name}</h3>
            <h4>{el.rating}</h4>
            <h2>{el.price}</h2>
            <div className="first-section">
            <div className="room-slider">
                <Slider className='slider'{...settings}>
                        {el.image.map(el=><img src={el}/>)}
                </Slider>
            </div>
            <div className="entre-exit">
                <div className="sign">
                    <IoIosLogIn className='icon'/>
                    <h2>CheckIn 4:00 am</h2>
                </div>
                <div className="sign">
                    <IoIosLogOut className='icon'/>
                    <h2>CheckOut 11:00 am</h2>
                </div>
                </div>
                </div>
                <div className="middel-section">
                <div className="facilities">
                    <h2>Facilities:</h2>
                    <div className="facility">
                        <IoMdRestaurant/> Restaurent
                    </div>
                    <div className="facility">
                        <MdOutlineLocalBar/> Bar
                    </div>
                    <div className="facility">
                        <FaSpa/> Spa
                    </div>
                    <div className="facility">
                        <MdOutlinePool/> Pool
                    </div>
                    <div className="facility">
                        <GiKidSlide/> Kids park
                    </div>
                    <div className="facility">
                        <CgGym/> Gym
                    </div>
                    <div className="facility">
                        <MdComputer/> Free wifi
                    </div>
                    </div>
                    <div className="room-slider">
                        <Slider className='slider'{...settings}>
                            {el.room_img.map(el=><img src={el}/>)}
                        </Slider>
                    </div>
                </div>
             <button className="book" onClick={()=>setshow(false)}>Book now</button>

        </div>
      
    </div>
  )
}

export default HotelModal
