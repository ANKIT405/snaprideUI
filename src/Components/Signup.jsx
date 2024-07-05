import React, { useRef} from "react";
import {useNavigate} from'react-router-dom'
import "../Components-css/Signup.css";
const Signup = () => {
  let navigate=useNavigate()
  let UserDetails = {
    name: undefined,
    email: undefined,
    password: undefined,
    mob: undefined,
  };
  let inputName = useRef();

  function Name() {
    UserDetails.name = inputName.current.value.trim();
  }

  let inputEmail = useRef();
  function Email() {
    UserDetails.email = inputEmail.current.value.trim();
  }

  let inputPassword = useRef();
  function Password() {
    UserDetails.password = inputPassword.current.value.trim();
  }

  let inputMobile = useRef();
  function Mobile() {
    UserDetails.mob = inputMobile.current.value.trim();
  }

  function submit(event) {
    event.preventDefault();
    let data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(UserDetails),
    };
    let post = fetch("http://localhost:7000/signup", data);

    try {
      post
        .then((value) => {
          return value.json();
        })
        .then((res) => {
          console.log("Response:", res);
        });
    } catch (err) {
      console.log(err);
    }

    navigate('/login')
  }

  function Loginpage() {
    navigate("/login")
  }

  return (
    <div className="main-cont">
      <div className="container">
        <form onSubmit={submit} className="signup-form" id="signupForm">
          <h2 className="form-title">Signup</h2>
          <div className="input-field" id="nameField">
            <input
              onChange={Name}
              ref={inputName}
              type="text"
              spellCheck={false}
              id="name"
              name="name"
              required
            />
            <label for="name">Name</label>
          </div>
          <div className="input-field" id="emailField">
            <input
              onChange={Email}
              ref={inputEmail}
              type="email"
              spellCheck={false}
              id="email"
              name="email"
              required
            />
            <label for="email">Email</label>
          </div>
          <div className="input-field" id="passwordField">
            <input
              onChange={Password}
              ref={inputPassword}
              type="text"
              spellCheck={false}
              id="password"
              name="password"
              required
            />
            <label for="password">Password</label>
          </div>
          <div className="input-field" id="mobileField">
            <input
              onChange={Mobile}
              ref={inputMobile}
              type="text"
              spellCheck={false}
              id="mobile"
              name="mobile"
              required
            />
            <label for="mobile">Mobile No.</label>
          </div>
          <b style={{textDecoration:"underline", cursor:"pointer", color:"blue"}} onClick={Loginpage} >Login</b>
          <br/>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
