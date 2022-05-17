import React from 'react'
import '../Styles/About.css'
import { aboutData } from '../data/about'

const About = () => {
  return (
    <section className="about-section">
      <h2>About</h2>
      <section>
        <h3>Background</h3>
        <p>{ aboutData.background }</p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript/TypeScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>REST</li>
          <li>GrphQL</li>
          <li>Express</li>
          <li>Mocha/Chai</li>
          <li>Cypress</li>
          <li>Git/Github</li>
          <li>Agile Methodology</li>
        </ul>
      </section>
      <section>
        <h3>Hobbies</h3>
        <ul>
          <li>Disc Golf</li>
          <li>Board games</li>
          <li>Cooking</li>
          <li>Hiking</li>
        </ul>
      </section>
    </section>
  )
}

export default About