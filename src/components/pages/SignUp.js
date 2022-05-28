import React from 'react';
import '../../App.css';
import { Button } from './../Button';
import './SignUp.css';

function SignUp() {
  return (
    <div class = "okay">
      <img src='/videos/tesla-model-s.gif' autoPlay loop muted />
      <div class = "loginbox">
        <h2> Sign Up Here</h2>
        <input type = "email" name = "email" placeholder = "Enter Email Here">
        </input>
        <h1></h1>
        <input type = "password" name = "" placeholder = "Enter Password Here">
        </input>
        <h1></h1>
        <input type = "Confirm Password" name = "" placeholder = "Confirm Your Password">
  
        </input>
        <h1>
        </h1>
        <button class = "butts"> <a href = "#"> Sign Up </a></button>
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

export default SignUp;
