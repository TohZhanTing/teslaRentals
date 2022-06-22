import React, { useEffect } from "react";
import '../../App.css';
import './Products.css';
import './Dashboard.css';
import Swiper, { Navigation, Pagination } from 'swiper';

export default function Products() {
  useEffect(() => {
    var swiper = new Swiper(".vehicles-slider",{
      modules: [ Navigation, Pagination ],
      observer: true,
      observeParents: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      slidesPerView:1,
      spaceBetween:20,
      freeMode:true,
      loop:true,
      grabCursor:true,
      centeredSlides:true,
      centerInsufficientSlides:false,
      preventClicks:false,
      preventClicksPropagation:false,
      autoplay:true,
      pagination:{
        el: '.swiper-pagination',
      clickable: true,
      },
      
      breakpoints:{
        0:{
          slidesPerView:1,
        },
        768:{
          slidesPerView:2,
        },
        991: {
          slidesPerView:3,
        },
      },
    },[]);
    });
  return (
    <section class = 'vehicles' id = 'vehicles'>
    <h1 class = 'heading'>popular <span>vehicles</span></h1>
    <div class = 'swiper vehicles-slider'>
      <div class= 'swiper-wrapper'>
        <div class = 'swiper-slide box'>
          <img src = 'images/img-15.jpg'className = 'models' alt =""></img>
          <div class = 'content'>
            <h8>Tesla Model S</h8>
            <div class = 'price'><span>price:</span>$135,000/- </div>
            <p>
              new
              <span class = 'fas fa-circle'></span> 2022
              <span class = 'fas fa-circle'></span> automatic
              <span class = 'fas fa-circle'></span> electric
              <span class = 'fas fa-circle'></span> 200mph
            </p>
            <a href = '#' class = 'btnn'>check out</a>
            </div>
        </div>

        <div class = 'swiper-slide box'>
          <img src = 'images/img-16.jpg'className = 'keke' alt =""></img>
          <div class = 'content'>
            <h8>Tesla Model Y</h8>
            <div class = 'price'><span>price:</span>$215,000/- </div>
            <p>
              new
              <span class = 'fas fa-circle'></span> 2022
              <span class = 'fas fa-circle'></span> automatic
              <span class = 'fas fa-circle'></span> electric
              <span class = 'fas fa-circle'></span> 200mph
            </p>
            <a href = '#' class = 'btnn'>check out</a>
            </div>
        </div>

        <div class = 'swiper-slide box'>
          <img src = 'images/img-17.jpg'className = 'models' alt =""></img>
          <div class = 'content'>
            <h8>Tesla Model 3</h8>
            <div class = 'price'><span>price:</span>$240,000/- </div>
            <p>
              new
              <span class = 'fas fa-circle'></span> 2022
              <span class = 'fas fa-circle'></span> automatic
              <span class = 'fas fa-circle'></span> electric
              <span class = 'fas fa-circle'></span> 200mph
            </p>
            <a href = '#' class = 'btnn'>check out</a>
            </div>
        </div>

        <div class = 'swiper-slide box'>
          <img src = 'images/img-18.jpg'className = 'keke' alt =""></img>
          <div class = 'content'>
            <h8>Tesla Model X</h8>
            <div class = 'price'><span>price:</span>$191,000/- </div>
            <p>
              new
              <span class = 'fas fa-circle'></span> 2022
              <span class = 'fas fa-circle'></span> automatic
              <span class = 'fas fa-circle'></span> electric
              <span class = 'fas fa-circle'></span> 200mph
            </p>
            <a href = '#' class = 'btnn'>check out</a>
            </div>
        </div>
      </div>
      <div class = "swiper-pagination"></div>
    </div>
  </section>
  );
}
