import React, { useState } from 'react'
import data from './data'
import './newaddcard.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

const NewCard = () => {
  const doSomething = (e) => {}

  return (
    <>
      {/* <section className="exam section">
        <div className="title">
          <h2 id="Add">
            Add new Card!
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
      </section> */}

      <div>
        <div className="container myowncontainer">
          <form onSubmit={doSomething}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Class Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
              </div>
              {/* <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="School"
                  name="School"
                />
              </div> */}
              {/* <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Class ID"
                  name="id"
                />
              </div> */}
              {/* <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Document link"
                  name="link"
                />
              </div> */}
              {/* <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Item description"
                  name="desc"
                />
              </div> */}
              {/* <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Admin password"
                  name="pass"
                />
              </div> */}
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

export default NewCard
