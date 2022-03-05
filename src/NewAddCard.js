import React, { useState, useEffect } from 'react'
import data from './data/ExamData'
import Uparrow from './Components/Uparrow'
import './css/newaddcard.css'

let password = 'ayoub'

// const getLocalStorage = () => {
//   let data = localStorage.getItem('data')
//   if (data) {
//     return JSON.parse(localStorage.getItem('data'))
//   } else {
//     return data
//   }
// }

const NewAddCard = () => {
  // let idCounter = data.length
  const img = './images/csc.png'
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [desc, setDesc] = useState('')
  const [key, setKey] = useState('')

  // const [list, setList] = useState(getLocalStorage())
  const [list, setList] = useState(data)

  const [ItemID, setItemID] = useState('')
  const [Delkey, setDelKey] = useState('')
  const [error, setError] = useState('Input Item Data to Add')
  const [delerror, setDelerror] = useState('Input Item ID to Delete')
  const [colorError, setColorError] = useState(false)

  // let id = Math.floor(new Date().getTime().toString() / 100000000)
  let id = new Date().getTime().toString()

  const sendData = (e) => {
    e.preventDefault()
    // e.target.reset()
    if (key === password) {
      const myitem = { id, title, category, name, img, link, desc }
      data.push(myitem)
      // setListmyitem])
      // const newArr = data.filter((item) => item.id !== id)
      // setList([...data, myitem])
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

  const EditData = (e) => {
    e.preventDefault()
    if (Delkey !== password) {
      setTimeout(() => setColorError(false), 700)
      setColorError(true)
    }
    if (Delkey === password) {
      // data.map((item) => {
      //   if (item.id === parseInt(ItemID)) {
      //     // data.splice(Delkey - 1, 1)
      //     // data.filter((item) => parseInt(item.id) != parseInt(Delkey))
      //   }
      // data.pop(item)
      // })
      setItemID('')
      setDelKey('')
      setTimeout(() => setDelerror('Imput New item ID to delete'), 1200)
      setDelerror('Deleted')
    } else {
      setDelerror('Sorry, You do not have permission to Delete!')
    }
  }

  // useEffect(() => {
  //   localStorage.setItem('data', JSON.stringify(data))
  // }, [data])

  return (
    <>
      <section className="exam section">
        <div className="title">
          <h2 id="Add">
            Add/Del Card
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
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
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn btn-info" value="+"></input>
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

      <div className="uperuper">
        <div className="container myowncontainer">
          <form onSubmit={EditData}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group pt-2 mx-auto">
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
                  className="form-control"
                  // className={`${colorError ? 'colorerror' : null}`}
                  placeholder="Admin key"
                  value={Delkey}
                  onChange={(e) => {
                    setDelKey(e.target.value)
                  }}
                />
              </div>
              <div className="d-flex justify-content-center pt-4">
                <input type="submit" className="btn btn-info" value="-"></input>
              </div>
              <Uparrow />
            </div>
          </form>
        </div>
      </div>

      <br />
      <br />
      <br />
    </>
  )
}

export default NewAddCard
