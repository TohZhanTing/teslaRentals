import React from 'react';
import '../App.css';
import { ButtonS } from './ButtonS';
import './ModelS.css';

function ModelS() {
  return (
    <div className='model-s'>
      <img src='/images/tesla-model-s.jpg'/>
      <h1>Model S</h1>
      <div className='teslaS-btns'>
        <ButtonS
          className='btns'
          buttonStyle='tesla--outline'
          buttonSize='tesla--large'
        >
          CUSTOM ORDER
        </ButtonS>
    </div>


    </div>
  );
}

export default ModelS;
