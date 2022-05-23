import React from 'react'
import '../Styles/Projects.css'
import { projects } from '../data/projects'

const Projects = () => {
  const listTechnologies = (technologies) =>  {
    return technologies.map(tech => {
      return <li className="tech-li" key={tech}>{tech}</li>
    })
  }

  const listImages = (images) => {
    return images.map(image => {
      return <img
        src={image}
        key={image}
        alt='home page'
        className="project-image"
      />
    })
  }

  const buildProjects = () => {
    return projects.map((project, i) => {
      return (
        <article key={i} className="project-card">
          <h3 className="project-name">{ project.name }</h3>
          <p className="project-description">{ project.description }</p>
          <div className="tech-image-section">
            <ul className="tech-list">
              <p className="tech-used-title">Technologies Used:</p>
              { listTechnologies(project.technologies) }
            </ul>
            { listImages(project.images) }
          </div>
          <section>
            <a href={ project.deployed } >
              <button className="project-link-button">
                Deployed Site
              </button>
            </a>
            <a href={ project.repo } >
              <button className="project-link-button">
                Github Repo
              </button>
            </a>
            { project.backend &&
              <a href={ project.backend } >
                <button className="project-link-button">
                  Backend
                </button>
              </a>
            }
          </section>
        </article>
      )
    })
  }

  return (
    <section className="projects-section">
      { buildProjects() }
    </section>
  )
}

export default Projects