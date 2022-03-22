import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const SignIN = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [colorError, setColorError] = useState(false)

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
          <form onSubmit={{}}>
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
          <Link to="/something" target="_blank">
            <button className="btn4">Sign in with Outlook</button>
          </Link>
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
