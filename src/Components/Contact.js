import React from 'react'
import emailLogo from '../images/email-logo.svg'
import githubLogo from '../images/Github-logo.png'
import linkedinLogo from '../images/linkedin-logo.svg'
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <section className="contact-info-section">
      <button
        className="contact-logo-button"
        onClick={() => {
          window.open(`mailto:phillewis1985@gmail.com`)
        }}
      >
        <img
          className="contact-logo"
          src={emailLogo}
          alt="email logo"
        />
      </button>
      <a
        href="https://github.com/philalewis"
        className="contact-logo-button"
      >
        <img
          className="contact-logo"
          src={githubLogo}
          alt="github logo"
        />
      </a>
      <a
      href="https://www.linkedin.com/in/philambroselewis/"
        className="contact-logo-button"
      >
        <img
          className="contact-logo"
          src={linkedinLogo}
          alt="linkedin logo"
        />
      </a>
    </section>
  )
}

export default Contact