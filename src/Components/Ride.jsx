import React, { useEffect, useRef, useState } from "react";
import '../Components-css/Ride.css';
import Toto from '../Images/Toto.png';
import { useNavigate } from "react-router-dom";

const Ride = () => {
  const navigate_to_Payment = useNavigate();
  const input1 = useRef();
  const input2 = useRef();
  const Time = useRef();
  const Passenger = useRef();
  const [selectedRide, setSelectedRide] = useState(null);

  useEffect(() => {
    input1.current.value = sessionStorage.getItem("inp1");
    input2.current.value = sessionStorage.getItem("inp2");
  }, []);

  const handleRideClick = (index) => {
    setSelectedRide(index);
  };

  const Payment = () => {
    if (input1.current.value && input2.current.value && Time.current.value !== "Pick me" && Passenger.current.value !== "Select Passenger") {
      navigate_to_Payment("/Payment");
    } else if (!input1.current.value || !input2.current.value) {
      alert("Please Type Address Properly");
    } else if (Time.current.value === "Pick me") {
      alert("Please select Pickup Time");
    } else if (Passenger.current.value === "Select Passenger") {
      alert("Please select Passengers");
    } else {
      alert("Please fill all details properly");
    }
  };

  return (
    <div className="main-container">
      <div className="address-container">
        <input ref={input1} type="text" placeholder="Pickup Address..." />
        <input ref={input2} type="text" placeholder="Destination Address..." />
        <select ref={Time} style={{ fontSize: 1.3 + "vmax" }} id="Time">
          <option>Pick me</option>
          <option>After 30 Min</option>
          <option>After 1 Hour</option>
          <option>After 2 Hour</option>
        </select>
        <select ref={Passenger} style={{ fontSize: 1.3 + "vmax" }} id="Time">
          <option>Select Passenger</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div className="Ride-section">
        <div className={`Ride-info ${selectedRide === 0 ? "selected" : ""}`} onClick={() => handleRideClick(0)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
        <div className={`Ride-info ${selectedRide === 1 ? "selected" : ""}`} onClick={() => handleRideClick(1)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
        <div className={`Ride-info ${selectedRide === 2 ? "selected" : ""}`} onClick={() => handleRideClick(2)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
        <div className={`Ride-info ${selectedRide === 3 ? "selected" : ""}`} onClick={() => handleRideClick(3)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
        <div className={`Ride-info ${selectedRide === 4 ? "selected" : ""}`} onClick={() => handleRideClick(4)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
        <div className={`Ride-info ${selectedRide === 5 ? "selected" : ""}`} onClick={() => handleRideClick(5)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
        <div className={`Ride-info ${selectedRide === 6 ? "selected" : ""}`} onClick={() => handleRideClick(6)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
        <div className={`Ride-info ${selectedRide === 7 ? "selected" : ""}`} onClick={() => handleRideClick(7)}>
          <img src={Toto} alt="image" />
          <div>
            <div className="info">
              <h3>Toto</h3>
              <p>No bargaining door step pickup</p>
            </div>
            <h2>₹302.00</h2>
          </div>
        </div>
      <div className="bookNow">
        <h6>Cash💵</h6>
        <button onClick={Payment} className="Button">SnapRide Go</button>
      </div>
    </div>
      </div>

  );
};

export default Ride;
