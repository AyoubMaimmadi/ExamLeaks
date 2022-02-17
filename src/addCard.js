import React from 'react'
import Uparrow from './Uparrow'
import { useState } from 'react'
import './add-card.css'

const AddCard = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    sendFeedback('***TEMPLAYE_ID***', {
      name,
      company,
      phone,
      email,
      message,
    })
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        console.log('success !')
        setName('')
        setCompany('')
        setPhone('')
        setEmail('')
        setMessage('')
      })
      .catch(
        (err) =>
          (document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      )
  }
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
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Class Name"
            value={name}
            autoComplete="off"
          />
          <input
            type="text"
            id="company"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            placeholder="School"
            value={company}
          />
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Class Code"
            value={phone}
          />
          <div className="email-content">
            <label id="not-mail">Email non valide</label>
            <input
              type="mail"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="link"
              value={email}
              autoComplete="off"
            />
          </div>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Description"
            value={message}
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
