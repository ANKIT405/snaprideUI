const Payment = () => {

        let Details={
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            Pickup:sessionStorage.getItem("inp1"),
            Destination:sessionStorage.getItem("inp2"),
            Time:sessionStorage.getItem("Pick me"),
            Passenger:sessionStorage.getItem("Passenger")
          })
        }
        fetch("https://snapride-server.onrender.com/Email",Details).then((res)=>{
             
            alert(res)
        }).catch((err)=>{
          alert("Please try again after Sometimes")
        })


  return (
    <div className="payment-container">
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>We appreciate your ride with SnapRide.</p>
      </div>
    </div>
  )
}

export default Payment
