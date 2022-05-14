import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import emailjs from 'emailjs-com'

const Email = () => {
  // send email function using emailjs
  function sendEmail(e) {
    // prevent page from refreshing
    e.preventDefault()
    // initialize emailjs
    emailjs
      .sendForm(
        'gmail',
        'template_h4ehzyk',
        e.target,
        // user account id from emailjs when we created the account
        'user_lgllKkiV9b83P4UUBcDGr'
      )
      // returns a promise
      .then(
        (result) => {
          // output results to console for debugging
          console.log(result.text)
        },
        (error) => {
          // output errors to console for debuggings
          console.error(error.text)
        }
      )
    // clear the form after submitting
    e.target.reset()
  }
  return (
    <>
      <section className="exam section">
        <Navbar />
        <br />
        <div className="title">
          <h2 id="Add">
            Reach Us
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
      </section>

      <div>
        <br />
        <div className="container uperuper">
          <form autoComplete="off" onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto ">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control bg-light"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto ">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control bg-light"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-10 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn5 "
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Email
