import React from 'react'

const activateProject = (div) => {
  if(div.className.includes("projects-container__project")) {
    if(div.className.includes("project-show")) {
      div.className = "projects-container__project"
      if(div.id === "second") {
        div.style.top = "33.3%"
      } else if (div.id === "third") {
        div.style.top = "66.6%"
      }
    } else {
      div.className="projects-container__project project-show"
      if(div.id === "second") {
        div.style.top = "0"
      } else if (div.id === "third") {
        div.style.top = "0"
      }
    }
  } else {
    var parentDiv = div.parentElement
    activateProject(parentDiv)
  }
}

const Project = ({data, id}) => {
  var projectStyle = {
    backgroundImage: data.backgroundImage,
    textAlign: data.textAlign,
    textFont: data.textFont,
    color: data.color
  }
  var ids = ["first", "second", "third"]
  return (
    <div onClick={(event) => {activateProject(event.target)}} className="projects-container__project" id={ids[id]} style={{backgroundImage: `url(${projectStyle.backgroundImage}`, textAlign: projectStyle.textAlign, fontFamily: projectStyle.textFont, color: projectStyle.color}}>
      <div className="project--title">
        <h1>{data.title}</h1>
      </div>
      <div className="project--content">
        <p>{data.paragraph}</p>
        <a><img src="./icons/github_icon.png"/></a>
        <a><img src="./icons/youtube_icon.png"/></a>
      </div>
    </div>
  )
}

export default Project
