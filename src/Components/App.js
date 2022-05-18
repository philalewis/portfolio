import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../Styles/App.css'
import About from './About'
import Navbar from './Navbar'
import Contact from './Contact'

const App = () => {
  return (
    <main>
      <header>
        <h1>Phil Lewis</h1>
        <p>Front End Software Engineer</p>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App;
