import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const SigninSignup = () => {
  const navigate=useNavigate()
  return (
    <div className='bg'>
      <div className="main">
        <input type="checkbox" name="" id="chk" aria-hidden="true" />
        <div className="box-signup">
           
            <form>
              <label for="chk" aria-hidden="true">Sign up</label>
              <div className="email">
                <input type="text" placeholder='email' required/> 
                <FaUser className='input-icon'/> 
              </div>
              <div className="password">
                <input type="password" name="" id=""  placeholder='password' required/>
                <IoIosLock className='input-icon'/>
              </div>
                <button type="submit" className='button' onClick={()=>navigate("/home")}>Sign In</button>
            </form>
        </div>
        <div className="box-login">
            
            <form action="">
              <label for="chk" aria-hidden="true">Login</label>
              <div className="email">
                <input type="text" placeholder='email' required/> 
                <FaUser className='input-icon input-login'/> 
              </div>
              <div className="password">
                <input type="password" name="" id=""  placeholder='password' required/>
                <IoIosLock className='input-icon input-login'/>
              </div>
                <button type="submit" className='button' onClick={()=>navigate("/home")}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SigninSignup
