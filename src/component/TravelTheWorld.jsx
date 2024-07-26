import React from 'react'
import sampleVideo from './images/Untitled design.mp4'

const TravelTheWorld = () => {
  return (
    <div>
      <div class="intro">
      <h1 id="the_world">the world</h1>
      <div class="intro_txt">
        <h1 id="travel">travel</h1>
        <div class="intro_txt1">
          <h1 className="landing_page">landing page</h1>
          <p className='paragraph'>
            <br />
            Welcome to Booking Bliss, your ultimate travel companion! Discover
            and book the best hotels and vacation packages effortlessly. Enjoy
            unbeatable prices, top-rated accommodations, and exclusive deals
            tailored for every traveler. Start your journey with us and make
            your dream vacation a reality with just a few clicks!
          </p>
        </div>
      </div>
      <button class="intro_button">Book Now</button>
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className='svg'
      >
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
      <div class="blue_square"></div>
      <div class="blue_square nb2"></div>
      <div className="video-container">
        <video className="video" width="600" loop autoPlay muted>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </div>
  )
}

export default TravelTheWorld
