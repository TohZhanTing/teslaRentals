import React, { useEffect} from 'react';
import '../../App.css';
import './Payment.css';


function Payment() {
    useEffect (() => {
        document.querySelector("#close-payment-form").onclick =() => {
            window.location.replace("http://localhost:3000/");
        }
    },[]);
  return (
    <section class = "paycar" id = "paycar">
        <div class = "paypic"/>
        <div class = "payment-form-container">
        <span class = 'fas fa-times' id ='close-payment-form'></span>
          <form action ="">
            <h10>Due Today <span id = 'money'>$15,000/-</span></h10>
            <input type = "Email" placeholder="Email" class = "box1"></input>
            <input type = "Name" placeholder="Name" class = "box1"></input>
            <input type = "Contact Number" placeholder="Contact Number" class = "box1"></input>
            <input type = "Card Number" placeholder="Card Number" class = "box1"></input>
            <input type = "Card Expiry Date" placeholder="Card Expiry Date MM/YY" class = "box1"></input>
            <input type = "CSV" placeholder="CSV" class = "box1"></input>
            <div id = 'pay-btn'>
            <button type="submit" class = "btnn"> <a href = "/success">Complete Downpayment</a></button>
        </div>
          </form>
        </div>

      
    </section>
  );
}

export default Payment;