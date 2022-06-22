import React from 'react';
import '../../App.css';
import './Services.css';
import { Button } from './../Button';


function Services() {
  return (
    <section class = "service" id = "service">
      <h1 class = "heading">our <span>services</span></h1>
      <div class = "box-container">
        <div class = "box">
          <i class = "fas fa-car"></i>
          <h3>Brand New Tesla</h3>
          <p> Get The Highest Selling Price For Your Car within 3 Hours!</p>
          <a href = '/products' class = 'btnn'> View New Tesla</a>
        </div>

        <div class = "box">
          <i class = "fas fa-coins"></i>
          <h3>second-hand transactions</h3>
          <p>Selling made easy with 3 simple steps. submitting form, arrange door step viewing. </p>
          <p>confirm on selling price and dealer will make a deposit payment to secure the agreed selling price. </p>
          <a href = '/Rentals' class = 'btnn'> view rentals</a>
        </div>

      <div class = "box">
          <i class = "fas fa-tools"></i>
          <h3>parts repair</h3>
          <p>Unable to start your car? Do you hear any clicking noises when you crank the engine? </p>
          <p>No frills! No hidden costs! The price which is quoted over the phone would be exactly what you will be paying. </p>
          <a href = '#' class = 'btnn'> read more</a>
        </div>

        <div class = "box">
          <i class = "fas fa-car-crash"></i>
          <h3>car insurance</h3>
          <p>comprehensive car insurance plans let you drive with peace of mind </p>
          <a href = '#' class = 'btnn'> read more</a>
        </div>

        <div class = "box">
          <i class = "fas fa-car-battery"></i>
          <h3>battery replacement</h3>
          <p>If your car battery is over one year old, there is a high possibility that your car battery is flat/drained.</p>
          <p>We aim to reach you within 30-45 minutes, and complete our job within 15 minutes.</p>
          <a href = '#' class = 'btnn'> read more</a>
        </div>

        <div class = "box">
          <i class = "fas fa-headset"></i>
          <h3>24/7 support</h3>
          <p>Simply call Tesla Rentals at: 1800-450-9806, for our swift and reliable assistance </p>
          <a href = '#' class = 'btnn'> read more</a>
        </div>
        </div>
    </section>
  );
}

export default Services;