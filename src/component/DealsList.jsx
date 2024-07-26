import React from 'react'
import { FaFireAlt } from "react-icons/fa";
import DealsTemplate1 from './DealsTemplate1';
import DealsTemplate2 from './DealsTemplate2';

const DealsList = () => {
    let deals=[
        {
            title:"Beachside Paradise Resort:",
            description:"Deal: Save 25% on Your Summer Stay,Enjoy the sun, sand, and sea with an exclusive 25% discount on stays at the Beachside Paradise Resort. Book now and indulge in luxury amenities, ocean views, and unparalleled service.",
            img:"https://q-xx.bstatic.com/xdata/images/hotel/max500/515034348.jpg?k=55bcedfbf77250c33849cae1286cc2cb2a300b897350ef349f145ee2f3fbb3a0&o=",
        },
        {
            title:"Mountain Retreat Adventure:",
            description:"Deal: Book 3 Nights, Get the 4th Night Free! Escape to the tranquility of the mountains and enjoy an extra night on us! Book three nights at the Mountain Retreat and receive a fourth night free. Perfect for adventure enthusiasts and nature lovers.",
            img:"https://www.redmountainresort.com/site/assets/files/21204/aerial_villas-pool.jpg",
        },
        {
            title:"City Lights Weekend Getaway:",
            description:"Deal: 20% Off Weekend Stays in the Heart of the City! Experience the vibrant city life with a 20% discount on weekend stays at our premium downtown hotel. Explore nearby attractions, dine at world-class restaurants, and enjoy the bustling nightlife.",
            img:"https://images.trvl-media.com/lodging/1000000/810000/807800/807800/0cba8f5b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        },
        {
            title:"Tropical Island Escape:",
            description:"Deal: Enjoy 30% Off Your Tropical Island Getaway! Escape to a tropical paradise and enjoy a luxurious stay at our exclusive island resort. For a limited time, get 30% off on all bookings. Immerse yourself in crystal-clear waters, white sandy beaches, and world-class amenities.",
            img:"https://i.pinimg.com/736x/9a/ca/4b/9aca4bd70dc31cb991297755b648b4c6.jpg",
        }
    ]
  return (
    <div className='dealslist'>
      <div className="deals-title">
        <h1>discover and benefit from <br />deals reaching 60% off!!</h1>
        <FaFireAlt className='fire'/>
      </div>
      <div className="deals-cards">
        {deals.map((el,index)=>index%2===0?(<DealsTemplate1 el={el} />):(<DealsTemplate2  el={el}/>))}
      </div>
    </div>
  )
}

export default DealsList
