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
    const orderedDegrees = aboutData.education.sort((a, b) => {
      return b.year - a.year
    })
    return orderedDegrees.map(degree => {
      return (
        <article className="degree" key={degree.subject}>
          <h4 className="school-name">{degree.school}</h4>
          <p className="degree-type">{degree.degree}</p>
          <p className="school-subject">{degree.subject}</p>
          <h4 className="graduation-year">{degree.year}</h4>
        </article>
      )
    })
  }

  return (
    <section className="about-page">
      <section className='about-section'>
        <section className="about-subsection">
          <h3 className="about-section-header">Background</h3>
          <div className="background-photo-section">
            <img className="profile-pic" src={ aboutData.photo } alt="profile picture"/>
            <p>{ aboutData.background }</p>
          </div>
        </section>
        <section className="about-details">
          <section className="about-subsection about-details-section">
            <h3 className="about-section-header">Skills</h3>
            <ul>
              { list('skills') }
            </ul>
          </section>
          <section className="about-subsection about-details-section">
            <h3 className="about-section-header">Education</h3>
            { getEducated() }
          </section>
          <section className="about-subsection about-details-section">
            <h3 className="about-section-header">Hobbies</h3>
            <ul>
              { list('hobbies') }
            </ul>
          </section>
        </section>
      </section>
    </section>
  )
}

export default About