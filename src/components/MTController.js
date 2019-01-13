import React from 'react';
import ReactPlayer from 'react-player'

class MTController extends React.Component {
  state = {
    selectedVideo: 0
  }

  changeVideo = (event) => {
    this.setState({
      selectedVideo: parseInt(event.id)
    })
  }
  render() {
    return (
      <div className="mt-container__controller">
        <div className="mt-container__controller--background" style={{backgroundImage: `url(${this.props.data.controller})`}}>
        </div>
        <div className="mt-container__controller--video">
          <ReactPlayer
             className='react-player'
             url={this.props.data.songs[this.state.selectedVideo].youtube}
             controls
             width='100%'
             height='100%'
           />
        </div>
        <div className="mt-container__controller--list">
          {this.props.data.songs.map(song => {
            var index = this.props.data.songs.indexOf(song)
            return <p id={index} className={this.state.selectedVideo === index ? "selected" : null} key={index} onClick={(event) => {this.changeVideo(event.target)}}>{song.title} {this.state.selectedVideo === index ? <span>&#10003;</span> : null}</p>
          })}
        </div>
        <div className="mt-container__controller--mario" style={{backgroundImage: `url(${this.props.data.mario})`}}></div>
      </div>
    )
  }
};

export default MTController;
