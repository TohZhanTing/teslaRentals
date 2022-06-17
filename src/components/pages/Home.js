import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Components from '../Components';
import Footer from '../Footer';
function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Components />
      <Footer />
    </>
  );
}

export default Home;
