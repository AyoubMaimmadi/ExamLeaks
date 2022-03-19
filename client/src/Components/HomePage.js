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
          <div class="mainbox">
            <div class="err">&nbsp;A</div>
            <div class="far">&nbsp;U</div>
            <div class="err2">&nbsp;I</div>
            <div class="msg">
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
