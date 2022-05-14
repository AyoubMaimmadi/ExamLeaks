import React, { useState, useEffect } from 'react'
// component imports
import Navbar from './Components/Navbar'
// hook for displatching actions to redux store
import { useDispatch } from 'react-redux'
// actions imports to be dispatched
import { createPost, deletePost } from './actions/posts'
import './css/newaddcard.css'

let password = 'admin'

const NewAddCard = () => {
  // we initialize useState Hooks to be able to access them from the component
  const img = './images/newCourse.png'
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')
  const [key, setKey] = useState('')
  const [ItemID, setItemID] = useState('')
  const [Delkey, setDelKey] = useState('')
  // default error message for the form of adding a new course: 'ADD CARD' to: Input Item Data to Add
  const [error, setError] = useState('Input Item Data to Add')
  const [delerror, setDelerror] = useState('Input Item ID to Delete')
  const [colorError, setColorError] = useState(false)
  const [colorError2, setColorError2] = useState(false)

  // we initialize useDispatch Hook to be able to dispatch actions to the redux store
  const dispatch = useDispatch()

  // and id variable to be assinged to the new course
  // this is not the same as the _id of the course in the database
  // _id is the id of the course in the database and it's automatically generated
  let id = new Date().getTime().toString()

  // FUNCTION: Store data we got from the form in an item and add it to the list of Exams
  const createCard = (e) => {
    // prevent default refreshing of the page
    e.preventDefault()
    // get the form data inside an object
    const myitem = { id, title, category, name, img, link, desc }
    // if the password is not correct, we change the color of the input field to red for 700ms
    if (key !== password) {
      setTimeout(() => setColorError(false), 700)
      setColorError(true)
      setKey('')
    }
    // if the password is correct, we dispatch the action createPost to add the course
    // to the list of courses in the database and we reset the form.
    // We also display an success message to the user
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
      // if the password is not correct, we also display an error message
      setError('Sorry, You do not have permission to add!')
    }
  }

  // FUNCTION: Remove an Item based on it's ID
  const deleteCard = (e) => {
    // prevent default refreshing of the page
    e.preventDefault()
    // if the password is not correct, we change the color of the input field to red for 700ms
    if (Delkey !== password) {
      setTimeout(() => setColorError2(false), 700)
      setColorError2(true)
      setDelKey('')
    }
    // if the password is correct, we dispatch the action deletePost to remove
    // the card and we reset the form. We also display an success message to the user
    if (Delkey === password) {
      dispatch(deletePost(ItemID))
      setItemID('')
      setDelKey('')
      setTimeout(() => setDelerror('Imput New item ID to delete'), 1200)
      setDelerror('Deleted')
    } else {
      // if the password is not correct, we also display an error message
      setDelerror('Sorry, You do not have permission to Delete!')
    }
  }

  return (
    <>
      <section className="exam section">
        <Navbar />

        <br />
        <div className="title">
          <h2 id="Add">
            Add Card
            <a className="scroll-link"></a>
          </h2>
          <br />
          <br />
          <h4 className="b-text">{error}</h4>
        </div>
      </section>
      <div className="uperuper">
        <div className="container myowncontainer">
          <form onSubmit={createCard}>
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                &nbsp; Homework &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  name="myRadioId"
                  id="myRadioId"
                  className="radio__input"
                />
                <div className="radio__radio"></div>
                &nbsp; Syllabus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      <div className="uperuper">
        <div className="container myowncontainer">
          <form onSubmit={deleteCard}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group pt-2 mx-auto">
                <div className="title">
                  <h2 id="Add">Delete Card</h2>
                  <br />
                </div>
                <div className="d-flex justify-content-center">
                  <br />
                  <h4 className="b-text">{delerror}</h4>
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
