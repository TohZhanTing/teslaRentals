import React, { useEffect } from "react";
import '../../App.css';
import './sellcars.css';

export default function sellcars() {
    return (
        <section class = 'sellcar' id = 'sellcar'>
            <img class = 'sellpic' src = 'images/sell4.jpg'/>
        <h1 class = 'heading1'>"We'll sell your Tesla in 30 days</h1>
        <p>at the <span>HIGHEST price</span>,</p>
        <p>GUARANTEED!</p>
        <h1 class = "buy">or we <span>BUY IT OVER</span> from you!"</h1>
        <div class = 'sell-btn' id ="sell-btn">
          <button class = "btnnn">SELL NOW</button>
          <i class = 'far fa-user'></i>
      </div>
      <div class="sellnow-form-container">
    <span class = 'fas fa-times' id ='close-sellnow-form'></span>
    <form action="" id="sellnow-form">
      <h10>Seller Information</h10>
      <input type ="Name" name = "Name" placeholder="Name" class="box1"></input>
      <input type = "Contact Number" name="Contact Number" placeholder ="Contact Number" class="box1"></input>
      <input type ="Type of Model" name = "Type of Model" placeholder="Type of Model" class="box1"></input>
      <input type ="Price willing to sell" name = "Price willing to sell" placeholder="Price willing to sell" class="box1"></input>
      <input type ="Number of years left COE" name = "Number of years left COE" placeholder="Number of years left COE" class="box1"></input>
      <button type="submit" class = "btnn"> <a href = "/dashboard"> Submit </a></button>
    </form>
  </div>
        </section>
        
    )
}