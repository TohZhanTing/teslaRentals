import React from 'react';
import '../App.css';
import './Components.css';

function Components() {
  return (
    <section class = 'icons-container'>
      <div class ='icons'>
        <i class = 'fas fa-home'></i>
        <div class ='content'>
          <h6>50+</h6>
          <p>branches</p>
        </div>
      </div>

      <div class = 'icons'>
        <i class='fas fa-car'></i>
        <div class = 'content'>
          <h6>2300+</h6>
          <p>Tesla sold</p>
        </div>
      </div>

      <div class = 'icons'>
        <i class = 'fas fa-users'></i>
        <div class ='content'>
          <h6>1000+</h6>
          <p>happy cilents</p>
        </div>
      </div>

      <div class = 'icons'>
        <i class = 'fas fa-car'></i>
        <div class ='content'>
          <h6>850+</h6>
          <p>new Tesla</p>
        </div>
      </div>

    </section>
  );
}

export default Components;