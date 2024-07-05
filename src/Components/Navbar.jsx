import React from "react";
import "../Components-css/Navbar.css"; // Import CSS file for styling
import langimg from "../Images/languageLogo.png";
import LoginSignupBtn from "./LoginSignup";
import Firstpage from "./Firstpage";
import gif from '../Images/secondimg.gif'


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h2 style={{ marginLeft: 5 + "vmax" }} className="title">
          {" "}
          <span className="L2">S</span>nap<span className="L1">R</span>
          <span id="R">ide</span>
        </h2>

        <LoginSignupBtn />
      </div>
      <Firstpage />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center" }}>
      <img style={{width:90+"%", borderRadius:10+"px" }} src={gif} alt="Video" />
      </div>
      <footer>
        <div class="footer-container">
            <div class="footer-contact">
                <p>Mobile: <a href="tel:+9661265666">+9661265666</a></p>
                <p>Email: <a href="mailto:a60454605@gmail.com">a60454605@gmail.com</a></p>
            </div>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    </footer>
     
    </>
  );
};

export default Navbar;
