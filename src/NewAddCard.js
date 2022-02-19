import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './newaddcard.css'
import data from './data'
// import 'bootstrap/dist/css/bootstrap.min.css'

const NewAddCard = () => {
  let idCounter = data.length
  const img = './images/csc.png'
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')
  const [key, setKey] = useState('')
  let id = idCounter + 1

  const sendData = (e) => {
    e.preventDefault()

    if (key === 'admin') {
      const myitem = { id, title, category, name, img, link, desc }
      data.push(myitem)
      id += 1
    }
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
          <form onSubmit={sendData}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="School"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Class Code"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Item link"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Item description"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Admin key"
                  value={key}
                  onChange={(e) => {
                    setKey(e.target.value)
                  }}
                />
              </div>
              <div className="col-10 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-info"
                  value="submit"
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
