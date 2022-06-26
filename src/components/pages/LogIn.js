import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './LogIn.css';
import { useRef } from 'react';
import { supabase } from '../../supabase';
import { useNavigate } from "react-router-dom";

export default function LogIn() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      alert("error signing in");
    } else {
      // Redirect user to Dashboard
      navigate("/dashboard");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="login-form-container">
        <img src='https://www.tesla.com/sites/default/files/images/model-x-five-star-rating-hero.jpg' autoPlay loop muted />
        <div class = "loginbox">
          <h2> Log In</h2>
          <input type = "email" ref={emailRef} name = "email" placeholder = "Enter Email Here">
          </input>
          <h1></h1>
          <input type = "password" ref={passwordRef} name = "" placeholder = "Enter Password Here">
          </input>
          <h1></h1>
          <h1>
          </h1>
          <button type={"submit"} class = "butts"> <a href = "#"> Log In </a></button>
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

