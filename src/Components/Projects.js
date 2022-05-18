import React from 'react'
import '../Styles/Projects.css'
import { projects } from '../data/projects'

const Projects = () => {
  const insertImages = (images) => {
    return images.map((image, i) => {
      return (
        <img key={i} src={image.src} alt={image.alt} />
      )
    })
  }

  const listTechnologies = (technologies) =>  {
    return technologies.map(tech => {
      return <li className="tech-li" key={tech}>{tech}</li>
    })
  }

  const buildProjects = () => {
    return projects.map((project, i) => {
      return (
        <article key={i} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          { insertImages(project.images) }
          <ul className="tech-list">Technologies Used:
            { listTechnologies(project.technologies) }
          </ul>
          <section>
            <a href={project.deployed} >
              <button className="project-link-button">
                Deployed Site
              </button>
            </a>
            <a href={project.repo} >
              <button className="project-link-button">
                Github Repo
              </button>
            </a>
            { project.backend &&
              <a href={project.backend} >
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
    <section>
      { buildProjects() }
    </section>
  )
}

export default Projects