import React from 'react'
import '../Styles/App.css'
import About from './About'

const App = () => {
  return (
    <main>
      <header>
        <h1>Phil Lewis</h1>
        <p>Front End Software Engineer</p>
      </header>
      <About exact path="/about"/>
    </main>
  )
}

export default App;
