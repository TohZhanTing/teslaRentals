import React from 'react';
import '../App.css';
import { LogInButton } from './LogInButton';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
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

export default HeroSection;
