import React, { useState } from 'react'
import '../Styles/Contact.css'

const Contact = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')

  const sendEmail = () => {
    
  }

  return (
    <section className="contact-page">
      <form className="contact-form">
        <input
          type='text'
          value={name}
          className="input-field"
          onChange={event => setName(event.target.value)}
        />
        <input
          type='email'
          value={email}
          className="input-field"
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type='text'
          value={message}
          className="input-field"
          onChange={event => setMessage(event.target.value)}
        />
        <button
        className="send-email-button"
          onClick={event => sendEmail(event)}
        >Send</button>
      </form>
    </section>
  )
}

export default Contact