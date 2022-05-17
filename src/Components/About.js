import React from 'react'
import '../Styles/About.css'
import { aboutData } from '../data/about'

const About = () => {

  const list = (cat) => {
    return aboutData[cat].map(thing => {
      return <li key={thing}>{thing}</li>
    })
  }

  const getEducated = () => {
    return aboutData.education.map(degree => {
      return (
        <article className="degree" key={degree.subject}>
          <h4>{degree.school}</h4>
          <p>{degree.subject}</p>
          <h4>{degree.year}</h4>
        </article>
      )
    })
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
        <section className="education-section">
          <h3>Education</h3>
          { getEducated() }
        </section>
      </section>
    </section>
  )
}

export default About