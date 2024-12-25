import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar-container'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <a href="#home">Home</a>
        </li>
        <li className='navbar-item'>
          <a href="#about">About</a>
        </li>
        <li className='navbar-item'>
          <a href="#projects">Projects</a>
        </li>
        <li className='navbar-item'>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar