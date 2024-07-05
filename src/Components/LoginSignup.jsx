import React, { useEffect, useRef } from "react";
import "../Components-css/LoginSignup.css";
import langimg from "../Images/languageLogo.png";
import { Link } from "react-router-dom";

const LoginSignup = () => {
  let append_Child1 = useRef();
  let append_Child2 = useRef();
  let logSign = useRef();
  async function RemoveChild() {
    await append_Child1.current;
    await append_Child2.current;
    append_Child1.current.remove();
    append_Child2.current.remove();
    let main_div = await logSign.current;
    let name = localStorage.getItem("first_letter")
    let FirstLetter=""
    let arr=[...name];
    for(let i=0;i<arr.length;i++){
      if(Boolean(arr[i]==false)){
      break;
      }
      else{
        FirstLetter+=arr[i]
      }
    }
    console.log(FirstLetter)
    let element = document.createElement("span");
    element.setAttribute("class", "First-letter");
    element.innerHTML = FirstLetter;
    let hii = document.createElement("span");
    hii.innerHTML = "Hii";
    hii.style.color = "white";
    hii.style.marginRight=-45+"%"
    hii.style.fontSize=1.4+"vmax"
    hii.style.display="flex"
    hii.style.height=2.4+"vmax"
    hii.style.alignItems="flex-end"
    
    main_div.append(hii);
    main_div.append(element);
  }

  if (localStorage.getItem("first_letter")) {
    RemoveChild();
  }

  return (
    <div ref={logSign} className="logSign">
      <h3
        style={{
          display: "flex",
          color: "white",
          marginRight: 2 + "%",
          alignItems: "center",
        }}
      >
        <img id="langLogo" src={langimg} alt="Language" />

        <select name="lang" id="selectLang">
          <option value="EN">EN</option>
          <option value="EN">हिंदी</option>
          <option value="EN">ગુજરાતી</option>
        </select>
      </h3>

      <button ref={append_Child1} style={{ marginRight: 1 + "%" }}>
        <Link id="Login" to="Login">
          Login
        </Link>
      </button>
      <button ref={append_Child2} style={{ marginRight: 2 + "%" }}>
        <Link id="Signup" to="Signup">
          Signup
        </Link>
      </button>

      {/* <span id="First-letter" >S</span> */}
    </div>
  );
};

export default LoginSignup;
