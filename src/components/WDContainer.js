import React from 'react'
import Projects from './Projects'

const WDContainer = ({data}) => {
  return (
    <div className="webDev-container">
      <div className="webDev-container__vertical-line"></div>
      <div className="webDev-container__title">
        <h1>01100101 01100010 00100000 01000100 01100101 01110110 01100101 01101100 01101111 01110000 01101101 01100101 01101110 01110100 00001101</h1>
      </div>
      <div className="webDev-container__content">
        <div className="webDev-container__vertical-line" style={{opacity: 0}}></div>
        <div className="webDev-container__content--technologies">
          <p>Javascript</p>
          <p>Ruby</p>
          <p>HTML5</p>
          <p>CSS</p>
          <p>React</p>
          <p>and More...</p>
        </div>
      </div>
      <div className="webDev-container__projects">
        <Projects data={data}/>
      </div>
    </div>
  )
}

export default WDContainer
