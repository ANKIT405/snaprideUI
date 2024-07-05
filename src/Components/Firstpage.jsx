import React,{useEffect,useRef} from 'react'
import '../Components-css/Firstpage.css'
import rideimg from '../Images/ride-image.jpg'
import AOS from "aos"
import "aos/dist/aos.css";
import {Link, useNavigate} from 'react-router-dom'
import Ride from './Ride';

const Firstpage = () => {
  let inp1=useRef()
  let inp2=useRef()
let navigate_To_Login_Page=useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  function LoginChecker() {
   if(Boolean(localStorage.getItem("first_letter"))==false){
    navigate_To_Login_Page("/login")
   }
   else if(Boolean(localStorage.getItem("first_letter")) && inp1.current.value.trim() &&inp2.current.value.trim()  ){
   sessionStorage.setItem("inp1",inp1.current.value.trim())
   sessionStorage.setItem("inp2",inp2.current.value.trim())
    navigate_To_Login_Page("/Ride")
   }
  }

  return (
    <>
    <div className='main-div' >
      <div className='child-1'>
        <h1 data-aos="fade-right" >Go anywhere with <br/> SnapRide</h1>
        {/* <p>Request a ride, hop in, and go.</p> */}
        <input ref={inp1} placeholder='Enter location' type="text" />
        <input ref={inp2} placeholder='Enter destination' type="text" />
        <button onClick={LoginChecker} data-aos="zoom-in"><span style={{textDecoration:"none",color:"white"}} to='Ride' >See prices</span></button>
      </div>
{/*--------------------------------------------------------------  */}
      <div className='child-2' >
   <img data-aos="zoom-in" src={rideimg} alt="image" />
      </div>
    </div>
    <div data-aos="zoom-out"  className='second-image' >
  <h2 data-aos="zoom-out" style={{color:"black" , }}>Share the Ride <br/>Share the Joy</h2>
    </div>

    

</>

  )
}

export default Firstpage
