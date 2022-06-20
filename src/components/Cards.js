import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Tesla Models!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the world with Tesla Model Y'
              label='Tesla Model Y'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in with Tesla'
              label='Luxury'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Tesla and Model X Falcon Wing Door'
              label='Tesla Model X'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='With the lowest drag coefficient of any SUV, Model X is built for speed and range.'
              label='Adrenaline'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
