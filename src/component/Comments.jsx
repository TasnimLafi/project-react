import React, { useState } from 'react'
import SimpleSlider from './SimpleSlider'
import { useSelector } from 'react-redux'
import CommentModal from './CommentModal'

const Comments = () => {
    const comment=useSelector(state=>state.comentslicee.comments)
    const [show, setshow] = useState(false)
    console.log(comment)
    // {comment.map(el=>setpercentage(percentage+el.stars))}    
    const somme=()=>{
        var s=0
        for (let index = 0; index < comment.length; index++) {
            s=s+comment[index].stars
            
        }
        return (s*100/(comment.length*5)).toFixed(0)
    }
    console.log(somme())
  return (
    <div className="comment-container">
    <div className='comments'>
        {show?<CommentModal setshow={setshow} />:null}
      <div className="general-rating">
        <h1>{somme()}%</h1>
      </div>
      <SimpleSlider/>
      
    </div>
    <button onClick={()=>setshow(true)} className='rate'>rate now</button>
    </div>
  )
}

export default Comments
