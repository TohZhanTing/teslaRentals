import React from 'react';
import '../../App.css';
import "./Dashboard.css";

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navibar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


function Dashboard() {
  return (
    <header class = "header">
        <div id='menu-btn' class='fas fa-bars'></div>
        <a href="#" class="logo"> <span>Tesla</span>Rentals</a>
        <nav class="navibar">
            <a href="#home">Home</a>
            <a href="#vehicles">Vehicles</a>
            <a href="#services">Services</a>
            <a href="#featured">Featured</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
        </nav>
        <div id ="signout-btn">
            <button class = "btnn">signout</button>
            <i class = 'far fa-user'></i>
        </div>
    </header>
  );
}

export default Dashboard;