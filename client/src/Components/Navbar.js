import React, { useState } from 'react'
// Lock icon to display in the avatar when the user not logged in
import LoockOutlinedIcon from '@material-ui/icons/LockOutlined'
import '../css/nav.css'

const Navbar = () => {
    return (
        <header>
            <nav className='main-nav'>
                <input type='checkbox' id='check' />
                <label htmlFor='check' className='menu-btn'>
                    <i className='fas fa-bars'></i>
                </label>
                <a href='index.html' className='logo'></a>
            </nav>
        </header>
    )
}

export default Navbar
