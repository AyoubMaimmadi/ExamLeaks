import React, { useState, useEffect } from 'react'

// componets imports
import Navbar from './Navbar'
import SearchBar from './SearchBar'

// for dynamic routing between pages
import { Link } from 'react-router-dom'

const SignIN = () => {
  // initializing useState hooks for the sign in form
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const signIn = (e) => {
    // prevent default form submission
    e.preventDefault()
    // check if the username and password are correct
    if (username === 'admin' && password === 'admin') {
      alert('Welcome Admin')
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <>
      <section className="exam section">
        <Navbar />
        <SearchBar />
        <br />
        <br />
        <br />
        <div className="title">
          <h2 id="Add">
            Sign In
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
          <br />
          <br />
        </div>
      </section>
      <div className="uperuper">
        <div className="container myowncontainer">
          <form onSubmit={signIn}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => {
                    setusername(e.target.value)
                  }}
                />
              </div>

              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value)
                  }}
                />
              </div>

              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn3" value="Sign In"></input>
              </div>
            </div>
          </form>
          <div>
            <br />
            <h6 className="text-center">Sign up with an account? </h6>
            <Link to="/auth">
              <button className="btn4">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIN
