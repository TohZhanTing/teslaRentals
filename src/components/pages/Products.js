import React from 'react';
import '../../App.css';
import './Products.css';
import './Dashboard.css';

function Products() {
  return (
    <section class = 'vehicles' id = 'vehicles'>
      <h7 class = 'heading'>popular <span>vehicles</span></h7>
      <div class = 'vehicles-slider'>
        <div class= 'wrapper'>
          <div class = 'box'>
            <img src = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/8a74d206-66dc-4386-8c7a-88ff32174e7d/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD'></img>
            <div class = 'content'>
              <h8>new model</h8>
              <div class = 'price'><span>price:</span>$135,000/- </div>
              <p>
                <span class = 'fas fa-circle'></span> new
                <span class = 'fas fa-circle'></span> 2022
                <span class = 'fas fa-circle'></span> automatic
                <span class = 'fas fa-circle'></span> electric
                <span class = 'fas fa-circle'></span> 200mph
              </p>
              <a href = '#' class = 'btnn'>check out</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
