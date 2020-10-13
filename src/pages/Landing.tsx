import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/Logo.svg'

function Landing(){
    return (
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"></img>
       
  
        <main>
          <h1>Spread happiness around the World</h1>
          <p>Visit an orphanage and make a child's day better</p>
        </main>
  
        <div className="location">
          <strong>Australia</strong>
          <span>Brisbane</span>
        </div>
  
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
  
  
        </div>
      </div>
    );

}

export default Landing;