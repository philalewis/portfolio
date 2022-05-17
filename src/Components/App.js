import React from 'react'
import { Route, Routes } from 'react-router-dom'
import '../Styles/App.css'
import About from './About'

const App = () => {
  return (
    <main>
      <header>
        <h1>Phil Lewis</h1>
        <p>Front End Software Engineer</p>
      </header>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
    </main>
  )
}

export default App;
