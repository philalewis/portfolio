import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../Styles/App.css'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'
import Resume from './Resume'
import Projects from './Projects'
import emailLogo from '../images/email-logo.svg'
import githubLogo from '../images/Github-logo.png'
import linkedinLogo from '../images/linkedin-logo.svg'

const App = () => {
  return (
    <main>
      <header>
        <h1>Phil Lewis</h1>
        <p>Front End Software Engineer</p>
        <section className="contact-info-section">
          <button className="contact-logo-button">
            <img
              className="contact-logo"
              src={emailLogo}
              alt="email logo"
            />
          </button>
          <button className="contact-logo-button">
            <img
              className="contact-logo"
              src={githubLogo}
              alt="github logo"
            />
          </button>
          <button className="contact-logo-button">
            <img
              className="contact-logo"
              src={linkedinLogo}
              alt="linkedin logo"
            />
          </button>
        </section>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </main>
  )
}

export default App;
