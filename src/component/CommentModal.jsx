import React, { useEffect, useState } from 'react'
import StarRating from './StarRating'
import { useDispatch } from 'react-redux'
import { addrate } from '../ComentSlice'

const CommentModal = ({setshow}) => {
    const [getrate, setgetrate] = useState(0)
    const [newrate, setnewrate] = useState({
        image:"https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",
        name:"tasnim ",
        lastname:"lafi",
        email:"tasnimlafi89@gmail.com",
        timer:"less then a minute",
        stars:0,
        review:"",
      },)
    const dispatch=useDispatch()
  useEffect(() => {
    
    setnewrate({...newrate,stars:getrate})
    
  }, [getrate])
  
  return (
    <div className='modal-overlay'>
      <div className="box box-2">
        
        <h1 onClick={()=>setshow(false)} style={{fontSize:20, fontWeight:200, cursor:'pointer',top:10}}>X</h1>
        <h3>Rate us</h3>
        <StarRating setgetrate={setgetrate}/>
        <textarea onChange={(e)=>setnewrate({...newrate,review:e.target.value})} placeholder='write you review here'>
        </textarea>
        <button onClick={()=>(setshow(false),dispatch(addrate(newrate)))} className='submit' >submit review</button>
        
      </div>
    </div>
  )
}

export default CommentModal
