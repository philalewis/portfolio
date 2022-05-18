import React, { useState } from 'react'
import '../Styles/Contact.css'

const Contact = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ subject, setSubject ] = useState('')

  const sendEmail = () => {
    window.open(`mailto:phillewis1985@gmail.com?subject=${subject}&body=${message}`)
  }

  return (
    <section className="contact-page">
      <form className="contact-form">
        <input
          type='text'
          value={name}
          className="input-field"
          placeholder="name"
          onChange={event => setName(event.target.value)}
        />
        <input
          type='email'
          value={email}
          className="input-field"
          placeholder="email address"
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type='text'
          value={subject}
          className="input-field"
          placeholder="subject"
          onChange={event => setSubject(event.target.value)}
        />
        <input
          type='text'
          value={message}
          className="input-field"
          placeholder="message"
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