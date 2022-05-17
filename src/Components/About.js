import React from 'react'
import '../Styles/About.css'
import { aboutData } from '../data/about'

const About = () => {
  const list = (cat) => {
    return aboutData[cat].map(skill => {
      return <li key={skill}>{skill}</li>
    })
  }

  const getEducated = () => {

  }

  return (
    <section className="about-page">
      <section className='about-section'>
        <h2>About</h2>
        <section>
          <h3>Background</h3>
          <p>{ aboutData.background }</p>
        </section>
        <section>
          <h3>Skills</h3>
          <ul>
            { list('skills') }
          </ul>
        </section>
        <section>
          <h3>Hobbies</h3>
          <ul>
            { list('hobbies') }
          </ul>
        </section>
        <section>
          <h3>Education</h3>
          { getEducated() }
        </section>
      </section>
    </section>
  )
}

export default About