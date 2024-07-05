import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./Components/Login"
import Signup from'./Components/Signup.jsx'
import Ride from './Components/Ride.jsx';
import Payment from './Components/Payment.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ForgotPassword from './Components/Forgotpassword.js';
 let router= createBrowserRouter([

      {
        path: "/",
        element: <App />,
      },


      {
        path: "/Login",
        element:<Login/>,
      },

      {
        path: "/Signup",
        element:<Signup/>
      },
      {
        path: "/Forgotpass",
        element:<ForgotPassword/>
      },
     
      {
        path:'/Ride',
        element:<Ride/>
      },
 
      {
        path:'/Payment',
        element:<Payment/>
      }
    ])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <RouterProvider router={router} />
    
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
