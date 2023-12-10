import React, { useState } from 'react'
// Lock icon to display in the avatar when the user not logged in
import LoockOutlinedIcon from '@material-ui/icons/LockOutlined'
import '../css/nav.css'
// for dynamic routing between pages
import { Link } from 'react-router-dom'
// to display the user's avatar
import { Avatar } from '@material-ui/core'

// Navigate between pages/components using the '<Link to = '...'/>' component from react-router-dom

const Navbar = () => {
  return (
    <header>
      <div className='app-flex'>
        <h6 className='p-text'>AM</h6>
        <Link to='/something'>
          <Avatar className='btn2' src='./images/avatar.jpeg'>
            <LoockOutlinedIcon />
          </Avatar>
        </Link>
      </div>
      <nav className='main-nav'>
        <input type='checkbox' id='check' />
        <label htmlFor='check' className='menu-btn'>
          <i className='fas fa-bars'></i>
        </label>
        <a href='index.html' className='logo'></a>
        <ul className='navlinks'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/morocco'>Morocco</Link>
          </li>
          <li>
            <Link to='/spain'>Spain</Link>
          </li>
          <li>
            <Link to='/italy'>Italy</Link>
          </li>
          <li>
            <Link to='/thailand'>Thailand</Link>
          </li>
          <li>
            <Link to='/reviews'>Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
