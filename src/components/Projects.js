import React from 'react'
import Project from './Project'

const Projects = ({data}) => {
  return (
    <div className="projects-border">
      <div className="projects-border__topLeft"></div>
      <div className="projects-border__left"></div>
      <div className="projects-border__bottom"></div>
      <div className="projects-border__right"></div>
      <div className="projects-border__topRight"></div>
      <div className="projects-container">
        <div className="projects-container__object--title">
          <h1><u>Current Projects</u></h1>
        </div>
        <div className="projects-container__list">
        {data.map(project => {
          var index = data.indexOf(project)
          return <Project key={index} data={project} id={index} />
        })}
        </div>
      </div>
    </div>
  )
}

export default Projects
