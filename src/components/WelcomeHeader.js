import React from 'react'

const WelcomeHeader = () => {
  return (
    <div className="welcome-header__container">
      <div className="welcome-header__container--video" >
        <video autoPlay muted loop playsInline poster="./video/welcome_video_image.jpg">
          <source type="video/mp4" src="./video/welcome_video.mp4" />
        </video>
      </div>
      <div className="welcome-header__content">
        <div className="welcome-header__content--text">
          <h1 className="content-style_bold">DO MORE</h1>
          <h2>with Drew Overcash</h2>
        </div>
      </div>
    </div>
  )
}

export default WelcomeHeader
