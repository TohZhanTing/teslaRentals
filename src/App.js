import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rentals from './components/pages/Rentals';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/Log In';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element ={<Home/>} />
          <Route path='/rentals' element ={<Rentals/>} />
          <Route path='/products' element ={<Products/>} />
          <Route path='/sign-up' element ={<SignUp/>} />
          <Route path = '/log-in' element = {<LogIn/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route path = '/services' element = {<Services/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
