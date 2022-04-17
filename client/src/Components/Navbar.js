import React from 'react'
import '../css/nav.css'
import { Link } from 'react-router-dom'
// import Avatar from '@mui/material/Avatar'

// Click on the navigation button and get there using good'ol HMTL magic

const Navbar = () => {
  return (
    <header>
      <div className="app-flex">
        <h6 className="p-text">Ayoub Maimmadi</h6>
        <Link to="/something" target="_blank" rel="noreferrer">
          <button className="btn2">AM</button>
          {/* <Avatar className="btn2" src="a" alt="a" /> */}
        </Link>
      </div>
      <nav className="main-nav">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <a href="index.html" className="logo"></a>
        <ul className="navlinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exams">Exams</Link>
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
            <Link to="/edit">Edit</Link>
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
