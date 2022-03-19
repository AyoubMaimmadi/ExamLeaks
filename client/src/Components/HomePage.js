import React from 'react'
import { Link } from 'react-router-dom'
import errorpage from '../css/errorpage.css'
import Navbar from './Navbar'
import SearchBar from './SearchBar'

const HomePage = () => {
  return (
    <>
      <main>
        <section id="home" className="exam section">
          <Navbar />
          <SearchBar />
          <div className="mainbox">
            <div className="err">&nbsp;A</div>
            <div className="far">&nbsp;U</div>
            <div className="err2">&nbsp;I</div>
            <div className="msg">
              A Website For Boosting AUIer's
              <h2>GPA</h2>
              <p>
                Visit <Link to="/reviews">Reviews</Link> to see your friends
                comments.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
