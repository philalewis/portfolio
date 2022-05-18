import React from 'react'
import '../Styles/Resume.css'
import { Document } from 'react-pdf'
// import '../PhilLewisResume.png'
import '../PhilLewisResume.pdf'

// import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const Resume = () => {
  return (
    <section className="resume-page">
      <Document file={'../PhilLewisResume.pdf'} />
      {/* <img
        src={require('../PhilLewisResume.png')}
        alt="resume"
        className="resume-image"
      /> */}
    </section>
  )
}

export default Resume