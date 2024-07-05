import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Components-css/Forgotpassword.css";

const ForgotPassword = () => {
  let navigate_it=useNavigate()
  let inputEmail = useRef();
  let inputPassword = useRef();


  let data = {
    email: undefined,
    password: undefined,
  };

  function Email() {
    data.email = inputEmail.current.value.trim();
  }
  function Password() {
    data.password = inputPassword.current.value.trim();
  }

  function Update() {
    let option = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let put = fetch("http://localhost:7000/password/Correction", option);

    try {
      put
        .then((value) => {
          return value.json();
        })
        .then((res) => {
          
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }

navigate_it('/login')

  }

  return (
    <div id="main-box">
      <div className="container-box">
        <div className="form-container">
          <h2 className="form-title">Forgot Password</h2>
          <form id="forgot-password-form">
            <div className="form-group">
              <label for="email" className="input-lbl">
                Email
              </label>
              <input
                onChange={Email}
                ref={inputEmail}
                type="email"
                id="email"
                className="input-fld"
                required
              />
            </div>
            <div className="form-group">
              <label for="new-password" className="input-lbl">
                New Password
              </label>
              <input
                type="text"
                id="new-password"
                className="input-fld"
                required
              />
            </div>
            <div className="form-group">
              <label for="confirm-password" className="input-lbl">
                Confirm Password
              </label>
              <input
                onChange={Password}
                ref={inputPassword}
                type="text"
                id="confirm-password"
                className="input-fld"
                required
              />
            </div>
            <button onClick={Update} className="submit-btn">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
