import React from 'react'
import '../css/nav.css'

// Click on the navigation button and get there using good'ol HMTL magic

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
            <a href="#Homework">Homework</a>
          </li>
          <li>
            <a href="#Add">ADD / DEL</a>
          </li>
          <li>
            <a href="#Reviews">Reviews</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
