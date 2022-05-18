import React from 'react'
import '../Styles/Resume.css'

const Resume = () => {
  return (
    <section className="resume-page">
      <img
        src={require('../PhilLewisResume.png')}
        alt="resume"
        className="resume-image"
      />
        <a
          href='PhilLewisResume.pdf'
          download
        >
          <button className="download-button">Download</button>
        </a>
    </section>
  )
}

export default Resume