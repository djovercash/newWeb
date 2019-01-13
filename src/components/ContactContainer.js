import React from 'react'

class ContactContainer extends React.Component {
  state = {
    selected: "show-front"
  }

  handleSelectedFace = (event) => {
    if (event.target.innerText === "Resume") {
      this.setState({
        selected: "show-left"
      });
    } else if (event.target.innerText === "Follow Me") {
      this.setState({
        selected: "show-right"
      })
    } else if (event.target.innerText === "Good Causes") {
       this.setState({
         selected: "show-top"
       })
    } else if (event.target.innerText === "React Out") {
      this.setState({
        selected: "show-front"
      })
    } else {
      this.setState({
        selected: "show-front"
      })
    }
  }

  render() {
    console.log(this.state)
    let cubeClass = `contact-container__scene--cube ${this.state.selected}`
    return (
      <div className="contact-container">
        <div className="contact-container__options">
          <h1 onClick={this.handleSelectedFace}>Reach Out</h1>
          <h1 onClick={this.handleSelectedFace}>Resume</h1>
          <h1 onClick={this.handleSelectedFace}>Follow Me</h1>
          <h1 onClick={this.handleSelectedFace}>Good Causes</h1>
        </div>
        <div className="contact-container__scene">
          <div className={cubeClass}>
            <div className="scene--cube__face scene--cube__face--front">
              <h1>SAY HELLO</h1>
              <h3>YAS YAS YAS YAS</h3>
              <h3>YAS YAS YAS YAS</h3>
            </div>
            <div className="scene--cube__face scene--cube__face--back">back</div>
            <div className="scene--cube__face scene--cube__face--right">
              <h1>FOLLOW ME</h1>
              <div className="contact-container__following">
                <h5><a href="https://www.linkedin.com/in/drewovercash/" target="_blank" rel="noopener noreferrer"><img className="logo" src="icons/contact_icons/linkedin.png" alt="LinkedIn" /></a></h5>
                <h5><a href="https://github.com/djovercash" target="_blank" rel="noopener noreferrer"><img className="logo" src="icons/contact_icons/github.png" alt="Github" /></a></h5>
                <h5><a href="https://www.facebook.com/DrewOvercashMusic" target="_blank" rel="noopener noreferrer"><img className="logo" src="icons/contact_icons/facebook.png" alt="Facebook" /></a></h5>
                <h5><a href="https://www.twitter.com/djovercash" target="_blank" rel="noopener noreferrer"><img className="logo" src="icons/contact_icons/twitter.png" alt="Twitter" /></a></h5>
                <h5><a href="https://www.instagram.com/djovercash" target="_blank" rel="noopener noreferrer"><img className="logo" src="icons/contact_icons/instagram.png" alt="Instgram" /></a></h5>
              </div>
            </div>
            <div className="scene--cube__face scene--cube__face--left">
              <h1>RESUME</h1>
              <a href="https://github.com/djovercash/Resume/raw/master/DOvercash_Resume.pdf" download >Click Here</a>
            </div>
            <div className="scene--cube__face scene--cube__face--top">
              <h1>GOOD CAUSES</h1>
            </div>
            <div className="scene--cube__face scene--cube__face--bottom">bottom</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactContainer
