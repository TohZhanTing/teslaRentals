import React, { useEffect } from "react";
import '../../App.css';
import './sellcars.css';
export default function Sellcars() {
  useEffect(() => {
    document.querySelector("#sell-btn").onclick =() => {
      document.querySelector('.seller-form-container').classList.toggle('active');
    }
    
    document.querySelector("#close-seller-form").onclick =() => {
      document.querySelector('.seller-form-container').classList.remove('active');
    
    }
  },[]);
    return (
        <section class = 'sellcar' id = 'sellcar'>
            <img class = 'sellpic' src = 'images/sell4.jpg'/>
        <h1 class = 'heading1'>"We'll sell your Tesla in 30 days</h1>
        <p>at the <span>HIGHEST price</span>,</p>
        <p>GUARANTEED!</p>
        <h1 class = "buy">or we <span>BUY IT OVER</span> from you!"</h1>
        <div id = 'sell-btn'>
          <button class = 'btnnn'>SELL NOW</button>
        </div>
        <div class = "seller-form-container">
        <span class = 'fas fa-times' id ='close-seller-form'></span>
          <form action ="">
            <h10>Seller Information</h10>
            <input type = "Email" placeholder="Email" class = "box1"></input>
            <input type = "Name" placeholder="Name" class = "box1"></input>
            <input type = "Contact Number" placeholder="Contact Number" class = "box1"></input>
            <input type = "Vehicle Model Type" placeholder="Vehicle Model Type" class = "box1"></input>
            <input type = "Number of years left COE" placeholder="Number of years left COE" class = "box1"></input>
            <input type = "Price willing to sell" placeholder="Price willing to sell" class = "box1"></input>
            <input type = "Submit" value = "sell now" class = "btnn"></input>
          </form>
        </div>
        </section>
        
    )
}