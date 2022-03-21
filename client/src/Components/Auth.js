import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const Auth = () => {
  const [colorError3, setColorError3] = useState(false)
  const [username, setusername] = useState('')
  const [school, setschool] = useState('')
  const [review, setreview] = useState('')
  const [auiID, setauiID] = useState('')
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
                  placeholder="Title"
                  //   value={title}
                  //   onChange={(e) => {
                  //     setTitle(e.target.value)
                  //   }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="School"
                  //   value={category}
                  //   onChange={(e) => {
                  //     setCategory(e.target.value)
                  //   }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Class Code"
                  //   value={name}
                  //   onChange={(e) => {
                  //     setName(e.target.value)
                  //   }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Item link"
                  //   value={link}
                  //   onChange={(e) => {
                  //     setLink(e.target.value)
                  //   }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Item description"
                  //   value={desc}
                  //   onChange={(e) => {
                  //     setDesc(e.target.value)
                  //   }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  //   className={`${
                  //     colorError ? 'form-control btn-danger' : 'form-control'
                  //   }`}
                  placeholder="Admin key"
                  //   value={key}
                  //   onChange={(e) => {
                  //     setKey(e.target.value)
                  //   }}
                />
              </div>
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn3" value="Sign In"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Auth
