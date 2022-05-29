import React from 'react';
import '../../App.css';
import { Button } from './../Button';
import './Log In.css';

function LogIn() {
  return (
    <div class = "okay">
      <img src='https://www.tesla.com/sites/default/files/images/model-x-five-star-rating-hero.jpg' autoPlay loop muted />
      <div class = "loginbox">
        <h2> Log In</h2>
        <input type = "email" name = "email" placeholder = "Enter Email Here">
        </input>
        <h1></h1>
        <input type = "password" name = "" placeholder = "Enter Password Here">
        </input>
        <h1></h1>
        <h1>
        </h1>
        <button class = "butts"> <a href = "#"> Log In </a></button>
        <div class = "icon">
          <a href = "#"><icon-icon name = "logo-facebook"></icon-icon></a>
          <a href = "#"><icon-icon name = "logo-instagram"></icon-icon></a>
          <a href = "#"><icon-icon name = "logo-twitter"></icon-icon></a>
          <a href = "#"><icon-icon name = "logo-google"></icon-icon></a>
        </div>
      </div>
    </div>
  )
}

export default LogIn;