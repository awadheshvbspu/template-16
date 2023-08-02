import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Developers from './component/Developers';
import Subscribe from './component/Subscribe';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Developers/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
