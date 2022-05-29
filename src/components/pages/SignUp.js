import React from 'react';
import '../../App.css';
import { Button } from './../Button';
import './SignUp.css';
import { useRef, useState } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from "react-router-dom";

export default function SignUp() {

  
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to login 
      alert( "check email")
      navigate("/log-in");
    
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <div class = "okay">
        <img src='https://images.hdqwalls.com/download/tesla-roadster-4k-pd-1366x768.jpg' autoPlay loop muted />
        <div class = "loginbox">
          <h2> Sign Up Here</h2>
          <input type = "email" ref={emailRef} name = "email" placeholder = "Enter Email Here">
          </input>
          <h1></h1>
          <input type = "password" ref={passwordRef} name = "" placeholder = "Enter Password Here">
          </input>
          <h1></h1>
          <h1>
          </h1>
          <button  type={"submit"} class = "butts"> <a href = "#"> Sign Up </a></button>
          <div class = "icon">
            <a href = "#"><icon-icon name = "logo-facebook"></icon-icon></a>
            <a href = "#"><icon-icon name = "logo-instagram"></icon-icon></a>
            <a href = "#"><icon-icon name = "logo-twitter"></icon-icon></a>
            <a href = "#"><icon-icon name = "logo-google"></icon-icon></a>
          </div>
        </div>
      </div>
    </form>

  )
}



