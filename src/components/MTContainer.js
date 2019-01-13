import React from 'react'
import MTController from './MTController'

const MTContainer = ({data}) => {
  return (
    <div className="mt-container">
      <div className="mt-container__pointer">
        <img src={data.pointingHand} />
      </div>
      <div className="mt-container__title" >
        <div className="mt-container__staff--one"></div>
        <div className="mt-container__staff--two"></div>
        <div className="mt-container__staff--three"></div>
        <div className="mt-container__staff--four"></div>
        <div className="mt-container__staff--five"></div>
        <div className="mt-container__trebleClef" style={{backgroundImage: `url(${data.trebleClef})`}}></div>
        <div className="mt-container__note note-five" id="noteID-one" style={{backgroundImage: `url(${data.noteOne})`}}>
          <h1>M</h1>
        </div>
        <div className="mt-container__note note-five" id="noteID-two" style={{backgroundImage: `url(${data.noteFour})`}}>
          <h1>u</h1>
        </div>
        <div className="mt-container__note note-two" id="noteID-three" style={{backgroundImage: `url(${data.noteThree})`}}>
          <h1>s</h1>
        </div>
        <div className="mt-container__note note-one" id="noteID-four" style={{backgroundImage: `url(${data.noteSix})`}}>
          <h1>i</h1>
        </div>
        <div className="mt-container__note note-two" id="noteID-five" style={{backgroundImage: `url(${data.noteTwo})`}}>
          <h1>c</h1>
        </div>
        <div className="mt-container__note note-two" id="noteID-six" style={{backgroundImage: `url(${data.noteFive})`}}>
          <h1>a</h1>
        </div>
        <div className="mt-container__note note-two" id="noteID-seven" style={{backgroundImage: `url(${data.noteThree})`}}>
          <h1>l</h1>
        </div>
        <div className="mt-container__note note-three" id="noteID-eight" style={{backgroundImage: `url(${data.noteTwo})`}}>
          <h1>T</h1>
        </div>
        <div className="mt-container__note note-four" id="noteID-nine" style={{backgroundImage: `url(${data.noteFour})`}}>
          <h1>h</h1>
        </div>
        <div className="mt-container__note note-three" id="noteID-ten" style={{backgroundImage: `url(${data.noteFive})`}}>
          <h1>e</h1>
        </div>
        <div className="mt-container__note note-three" id="noteID-eleven" style={{backgroundImage: `url(${data.noteOne})`}}>
          <h1>a</h1>
        </div>
        <div className="mt-container__note note-five" id="noteID-twelve" style={{backgroundImage: `url(${data.noteSix})`}}>
          <h1>t</h1>
        </div>
        <div className="mt-container__note note-two" id="noteID-thirteen" style={{backgroundImage: `url(${data.noteThree})`}}>
          <h1>r</h1>
        </div>
        <div className="mt-container__note note-two" id="noteID-fourteen" style={{backgroundImage: `url(${data.noteFive})`}}>
          <h1>e</h1>
        </div>
      </div>
      <MTController data={data} />
    </div>
  )
}

export default MTContainer
