import React from 'react'
import '../css/nav.css'
import { Link } from 'react-router-dom'

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
            <Link to="/">Exams</Link>
          </li>
          <li>
            <Link to="/quiz">Quizes</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/homework">Homework</Link>
          </li>
          <li>
            <Link to="/syllabus">Syllabus</Link>
          </li>
          <li>
            <Link to="/edit">ADD / DEL</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
