import React from 'react';
import '../components/Header.css';
import hospitalGif from '../assets/hospital.gif'; // Correctly import the gif

export default function Header() { // Capitalized the component name
  return (
    <header>
      <nav>
        <span id="img-text">
          <img src={hospitalGif} alt="logo" />
          <h1>Healthcare <span>Services</span></h1>
        </span>
      </nav>
    </header>
  );
}
