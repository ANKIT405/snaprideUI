import React, { useRef } from "react";
import "../Components-css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import LoginSignup from "./LoginSignup";
const Login = () => {
  let inputPassword = useRef();
  let inputEmail = useRef();
  let Message = useRef();
  let navigate_now = useNavigate();

  let KeyValue = {
    email: undefined,
    password: undefined,
  };

  function Email() {
    KeyValue.email = inputEmail.current.value.trim();
  }

  function Password() {
    KeyValue.password = inputPassword.current.value.trim();
  }

  function Post() {
    let data = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(KeyValue),
    };
    let post = fetch("http://localhost:7000/login", data);
    try {
      post
        .then((value) => {
          return value.json();
        })
        .then((res) => {
          console.log(res);

          Message.current.innerHTML = res.message;

          if (res.message == "LoginSuccess") {
            Message.current.innerHTML = "Wait...";
            setTimeout(() => {
              navigate_now("/");
            }, 3000);

          localStorage.setItem("first_letter",res.FirstLetter)

          }
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="main-box">
        <div className="login-container">
          <h2>Login</h2>
          <h5
            ref={Message}
            style={{ textAlign: "center", fontWeight: "lighter", color: "red" }}
          ></h5>
          <div class="input-group">
            <label for="email">Email</label>
            <input
              onChange={Email}
              ref={inputEmail}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              onChange={Password}
              ref={inputPassword}
              type="text"
              id="password"
              name="password"
              required
            />{" "}
            &nbsp;
            <Link to="/Forgotpass">Forgot Password</Link>
            <button onClick={Post} className="btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
