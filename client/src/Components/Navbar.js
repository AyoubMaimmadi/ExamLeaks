import React from 'react'
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
