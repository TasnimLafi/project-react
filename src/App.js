import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {useState, useEffect} from 'react'
import Home from "./component/Home";
import Glow from './component/Glow'
import SigninSignup from "./component/SigninSignup";
import { Route, Routes } from "react-router-dom";
import About from "./component/About";
import ServicePage from "./component/ServicePage";


function App() {
  const [search, setsearch] = useState("")
  return(
    <div className='App'>
      <Glow/>
      <Routes>
        <Route path='/' element= {<SigninSignup/>} />
        <Route path='/home' element={<Home search={search} setsearch={setsearch}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<ServicePage  search={search} setsearch={setsearch}/>}/>
        
      </Routes>
    </div>
  );
}


export default App;
