import React from 'react'
import Uparrow from './Uparrow'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import './add-card.css'

const AddCard = () => {
  // const [name, setName] = useState('')
  // const [company, setCompany] = useState('')
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'gmail',
        'service_ea5cfj4',
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

  // const sendFeedback = (templateId, variables) => {
  //   window.emailjs
  //     .send('gmail', templateId, variables)
  //     .then((res) => {
  //       console.log('success !')
  //       setName('')
  //       setCompany('')
  //       setPhone('')
  //       setEmail('')
  //       setMessage('')
  //     })
  //     .catch(
  //       (err) =>
  //         (document.querySelector('.form-message').innerHTML =
  //           "Une erreur s'est produite, veuillez réessayer.")
  //     )
  // }
  return (
    <main>
      <section className="exam section">
        <div className="title">
          <h2 id="Add">
            Add new Card
            <a className="scroll-link"></a>
          </h2>
          <div className="underline"></div>
        </div>
      </section>

      <form className="contact-form">
        <br />
        <div className="form-content">
          <input
            type="text"
            id="Class Name"
            name="Class Name"
            placeholder="Class Name"
            autoComplete="off"
          />
          <input type="text" id="company" name="School" placeholder="School" />
          <input type="text" id="phone" name="phone" placeholder="Class Code" />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="link"
              id="link"
              name="link"
              placeholder="link"
              autoComplete="off"
            />
          </div>
          <textarea
            id="Description"
            name="Description"
            placeholder="Description"
          />
        </div>
        <input
          className="button"
          type="button"
          value="Send"
          onClick={handleSubmit}
        />
        <div className="form-message"></div>
      </form>
      <Uparrow />
    </main>
  )
}

export default AddCard
