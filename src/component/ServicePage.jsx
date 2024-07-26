import React from 'react'
import Navbar from './Navbar'
import TravelTheWorld from './TravelTheWorld'
import Services from "./Services"
import Comments from './Comments'
import Footer from './Footer'

const ServicePage = ({setsearch,search}) => {
  return (
    <div>
      <Navbar/>
      <TravelTheWorld/>
      <Services setsearch={setsearch} search={search}/>
      <Comments/>
      <Footer/>
    </div>
  )
}

export default ServicePage
