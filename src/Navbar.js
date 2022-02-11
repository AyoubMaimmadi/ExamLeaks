import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import './nav.css'

const Navbar = () => {
  return (
    <header>
      <nav class="main-nav">
        <input type="checkbox" id="check" />
        <label for="check" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <a href="index.html" class="logo"></a>
        <ul class="navlinks">
          <li>
            <a href="#">Exams</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Homeworks</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
