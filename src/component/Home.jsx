import React from 'react'
import Navbar from "./Navbar"
import TravelTheWorld from "./TravelTheWorld"
import DealsList from "./DealsList"
import Destination from "./Destination"
import Footer from './Footer'
import Tourguides from './Tourguides'

const Home = ({search,setsearch}) => {
  return (
    <div>
        <Navbar />
        <TravelTheWorld/>
        <DealsList/>
        <Destination/>
        <Tourguides/>
        <Footer/>
    </div>
  )
}

export default Home
