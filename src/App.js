import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/Log In';
import Dashboard from './components/pages/Dashboard';
import Rentals from './components/pages/Rentals';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element ={<Home/>} />
          <Route path='/services' element ={<Services/>} />
          <Route path='/products' element ={<Products/>} />
          <Route path='/sign-up' element ={<SignUp/>} />
          <Route path = '/log-in' element = {<LogIn/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route path='/rentals' element ={<Rentals/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
