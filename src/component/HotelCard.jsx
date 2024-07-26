import React,{useState} from 'react'
import HotelModal from './HotelModal'

const HotelCard = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='hotel'>
      <img src={el.image[0]} alt="" />
      <div className="card-info">
      <h1 style={{fontSize:17}}>{el.name}</h1>
      {show?<HotelModal el={el} setshow={setshow}/>:null}
      <button on onClick={()=>setshow(true)}>more details</button>
    </div>
    </div>
  )
}

export default HotelCard
