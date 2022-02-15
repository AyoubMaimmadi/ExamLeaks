import React, { useState, useRef, useEffect } from 'react'
import './nav.css'

const Navbar = () => {
  return (
    <header>
      <nav className="main-nav">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <a href="index.html" className="logo"></a>
        <ul className="navlinks">
          <li>
            <a href="#Exams">Exams</a>
          </li>
          <li>
            <a href="#Quizes">Quizes</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Homework">Homeworks</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
