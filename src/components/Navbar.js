import React from 'react'

const activateNavbar = (div) => {
  if(div.className.includes("navbar__dropdown")) {
    if(div.className.includes("active")) {
      div.className = "navbar__dropdown"
    } else {
      div.className = "navbar__dropdown active"
    }
  } else {
    var parentElement = div.parentElement
    activateNavbar(parentElement)
  }
}

const goingUp = (destination, currentLocation) => {
  setTimeout(function() {
    if(currentLocation !== destination) {
      var diff = currentLocation - destination
      if(diff > 20) {
        currentLocation = currentLocation - 20
        window.scrollTo(0, currentLocation)
        goingUp(destination, currentLocation)
      } else {
        currentLocation = currentLocation - diff
        window.scrollTo(0, currentLocation)
        goingUp(destination, currentLocation)
      }
    }
  }, 10)
}

const goingDown = (destination, currentLocation) => {
  setTimeout(function() {
    if(currentLocation !== destination) {
      var diff = destination - currentLocation
      if(diff > 20) {
        currentLocation = currentLocation + 20
        window.scrollTo(0, currentLocation)
        goingDown(destination, currentLocation)
      } else {
        currentLocation = currentLocation + diff
        window.scrollTo(0, currentLocation)
        goingDown(destination, currentLocation)
      }
    }
  }, 10)
}

// const home = (height) => {
//   setTimeout(function() {
//     if(height > 0) {
//       height = height - 20
//       window.scrollTo(0, height)
//       home(height)
//     }
//   }, 10)
// }

const locate = (location, destination) => {
  var element = window.top.document.querySelector(`.${destination}`).getBoundingClientRect()
  if(element.y < 0 ) {
    var elementAbs = location - Math.abs(element.y)
    goingUp(elementAbs, location)
  } else if (location > 0){
    var elementDown = element.y + location
    goingDown(elementDown, location)
  } else {
    goingDown(element.y, location)
  }
}

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__home">
        <h1 onClick={() => {locate(window.top.scrollY, "welcome-header__container")}} className="content-style_bold">DO</h1>
      </div>
      <div className="navbar__dropdown" onClick={(event) => activateNavbar(event.target)}>
        <button className="dropdown-button">
          <div className="dropdown-options">
            <p onClick={() => {locate(window.top.scrollY, "webDev-container")}} className="navbar-title"><span className="content-style_bold navbar-span">DO</span> Web Development</p>
            <img onClick={() => {locate(window.top.scrollY, "webDev-container")}} className="navbar-icon" src="./icons/web_icon.png" />
            <p onClick={() => {locate(window.top.scrollY, "mt-container")}} className="navbar-title"><span className="content-style_bold navbar-span">DO</span> Musical Theatre</p>
            <img onClick={() => {locate(window.top.scrollY, "mt-container")}} className="navbar-icon" src="./icons/mt_icon.png" />
            <p onClick={() => {locate(window.top.scrollY, "contact-container")}} className="navbar-title"><span className="content-style_bold navbar-span">DO</span> Contact</p>
            <img onClick={() => {locate(window.top.scrollY, "contact-container")}} className="navbar-icon" src="./icons/contact_icon.png" />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
