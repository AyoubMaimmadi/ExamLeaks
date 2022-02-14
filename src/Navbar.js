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

// export function Something() {
//   const aaa = [1, 2, 3, 4, 5, 6]
//   return aaa
// }

export default Navbar
