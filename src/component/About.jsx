import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer"

const About = () => {
  return (
    <div>
    <Navbar/>
    <div className='About-bg'>
      <img className="about-img" src="https://as1.ftcdn.net/v2/jpg/03/03/26/78/1000_F_303267853_JhvZTyEF4y4Sp6Hf6dDoSGafpRRvSGYc.jpg" alt="" />
        <div className="blank">
        <div class="about_section">
      <h1 id="About">About us</h1>
      <div class="section-container">
        <div class="section" data-aos="fade-right">
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/73/40/29/1000_F_373402961_zHwVILZu4UNblYegPKkKTsyiuHdtRscG.jpg"
            alt=""
          />
          <p>
            Founded in 2012, Booking Bliss prides itself on delivering
            exceptional travel experiences customized to meet the unique needs
            of our clients. With a satisfaction rate of 98%, our commitment to
            quality and customer service is evident in every booking we handle.
            Annually, we manage over 500,000 flights, ensuring seamless travel
            experiences for our customers worldwide. Our extensive network
            includes partnerships with over 10,000 hotels and resorts, offering
            a wide range of accommodations from budget-friendly options to
            luxurious stays.
          </p>
        </div>
        <div class="section" data-aos="fade-left">
          <img
            id="img2"
            src="https://as1.ftcdn.net/v2/jpg/02/44/63/86/1000_F_244638690_sfAhZEIi61NEcZwA8F879rKuJijT10Lj.jpg"
            alt=""
          />
          <p>
            Booking Bliss provides comprehensive vacation packages that include
            guided tours, car rentals, and exclusive access to popular
            attractions. We prioritize transparency and customer protection,
            offering flexible booking policies, easy cancellations, and 24/7
            customer support to address any concerns. Our user-friendly platform
            allows travelers to compare prices, read reviews, and book their
            ideal trip with confidence. Additionally, we offer a loyalty program
            that rewards frequent travelers with discounts and special perks.
          </p>
        </div>
      </div>
    </div>
      </div> 
    </div>
    <Footer/>
    </div>
  )
}

export default About
