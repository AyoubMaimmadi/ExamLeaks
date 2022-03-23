import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import { useDispatch } from 'react-redux'
import { createPost, deletePost } from './actions/posts'
import './css/newaddcard.css'

let password = 'ayoub'

const NewAddCard = () => {
  const img = './images/bot.png'
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')
  const [key, setKey] = useState('')
  const [ItemID, setItemID] = useState('')
  const [Delkey, setDelKey] = useState('')
  const [error, setError] = useState('Input Item Data to Add')
  const [delerror, setDelerror] = useState('Input Item ID to Delete')
  const [colorError, setColorError] = useState(false)
  const [colorError2, setColorError2] = useState(false)

  const dispatch = useDispatch()

  let id = new Date().getTime().toString()

  // Store data we got from the form in an item and add it to the list of Exams

  const sendData = (e) => {
    e.preventDefault()
    const myitem = { id, title, category, name, img, link, desc }

    if (key !== password) {
      setTimeout(() => setColorError(false), 700)
      setColorError(true)
      setKey('')
    }
    if (key === password) {
      dispatch(createPost(myitem)) // Add the new item to the database
      setTitle('')
      setCategory('')
      setName('')
      setLink('')
      setDesc('')
      setKey('')
      setTimeout(() => setError('Imput New Data'), 1200)
      setError('Added')
    } else {
      setError('Sorry, You do not have permission to add!')
    }
  }

  // Remove an Item based on it's ID

  const EditData = (e) => {
    e.preventDefault()

    if (Delkey !== password) {
      setTimeout(() => setColorError2(false), 700)
      setColorError2(true)
      setDelKey('')
    }
    if (Delkey === password) {
      dispatch(deletePost(ItemID))
      setItemID('')
      setDelKey('')
      setTimeout(() => setDelerror('Imput New item ID to delete'), 1200)
      setDelerror('Deleted')
    } else {
      setDelerror('Sorry, You do not have permission to Delete!')
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <section className="exam section">
        <Navbar />
        <SearchBar />

        <br />
        <div className="title">
          <h2 id="Add">
            Add Card
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
          <br />
          <br />
          <h4>{error}</h4>
        </div>
      </section>
      <div className="uperuper">
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
              <br />
              <br />
              <label for="myRadioId" className="radio">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  name="myRadioId"
                  id="myRadioId"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                &nbsp; Exam &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  name="myRadioId"
                  id="myRadioId"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                &nbsp; Quiz &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  name="myRadioId"
                  id="myRadioId"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                &nbsp; Project &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  name="myRadioId"
                  id="myRadioId"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                &nbsp; Homework &nbsp;
              </label>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className={`${
                    colorError ? 'form-control btn-danger' : 'form-control'
                  }`}
                  placeholder="Admin key"
                  value={key}
                  onChange={(e) => {
                    setKey(e.target.value)
                  }}
                />
              </div>
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn3" value="Add"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="uperuper">
        <div className="container myowncontainer">
          <form onSubmit={EditData}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group pt-2 mx-auto">
                <div className="title">
                  <h2 id="Add">Delete Card</h2>
                  <div className="underline"></div>
                  <br />
                </div>
                <div className="d-flex justify-content-center">
                  <br />
                  <h4>{delerror}</h4>
                </div>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Item ID"
                  value={ItemID}
                  onChange={(e) => {
                    setItemID(e.target.value)
                  }}
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  required
                  className={`${
                    colorError2 ? 'form-control btn-danger' : 'form-control'
                  }`}
                  placeholder="Admin key"
                  value={Delkey}
                  onChange={(e) => {
                    setDelKey(e.target.value)
                  }}
                />
              </div>
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn3" value="Del"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default NewAddCard
