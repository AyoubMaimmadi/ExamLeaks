import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Icon from './Icon'
import { GoogleLogin } from 'react-google-login'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Auth = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [password2, setpassword2] = useState('')
  // const [user, setUser] = useState('AM')
  const [exist, setexist] = useState(false)

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({ type: 'AUTH', data: { result, token } })
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = () => {
    console.log('Google sign in was unseccessful. Try again later.')
  }

  return (
    <>
      {/* <button className="btn2">{user}</button> */}
      <section className="exam section">
        <Navbar />
        <SearchBar />
        <br />
        <br />
        <br />
        <div className="title">
          <h2 id="Add">
            Sign up
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
          <br />
          <br />
        </div>
      </section>
      <div className="uperuper">
        <div className="container myowncontainer">
          <form autoComplete="off" onSubmit={{}}>
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
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value)
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
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="password"
                  required
                  className="form-control"
                  placeholder="Repeat Password"
                  value={password2}
                  onChange={(e) => {
                    setpassword2(e.target.value)
                  }}
                />
              </div>
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn3" value="Sign up"></input>
              </div>
            </div>
          </form>
          {/* <Link to="/something" target="_blank"> */}
          <GoogleLogin
            clientId="274059436296-0fjasat9srs1rt3j1ij4hddag02h7vbm.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className="btn4"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
              >
                Use Google&nbsp;
                <Icon />
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          {/* </Link> */}
          <div>
            <br />
            <h6 className="text-center">Already have an account? </h6>
            <Link to="/sign-in">
              <button className="btn4">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
