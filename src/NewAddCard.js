import React from 'react'
import emailjs from 'emailjs-com'
import './newaddcard.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

const NewAddCard = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_h4ehzyk',
        e.target,
        'user_lgllKkiV9b83P4UUBcDGr'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <>
      <section className="exam section">
        <div className="title">
          <h2 id="Add">
            Add new Card
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
      </section>

      <div>
        <div className="container myowncontainer">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
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
                  className="btn btn-info"
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

export default NewAddCard
