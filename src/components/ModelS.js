import React from 'react';
import '../App.css';
import './ModelS.css';
import { LogInButton } from './LogInButton';

function ModelS() {
  return (
    <div className='model-s'>
      <video src='/videos/teslaS.mp4' autoPlay loop muted className = "albert" />
      <h1>Roadster</h1>
      <div className='hero-btns'>
        <LogInButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </LogInButton>
        <LogInButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Log In <i className='far fa-play-circle' />
        </LogInButton>
      </div>
    </div>
  );
}

export default ModelS;
