import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../Styles/App.css'
import About from './About'
import Navbar from './Navbar'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
    <main>
      <header>
        <h1>Phil Lewis</h1>
        <p>Front End Software Engineer</p>
        <Contact />
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </main>
  )
}

export default App;
