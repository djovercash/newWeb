import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeHeader from './components/WelcomeHeader'
import WDContainer from './components/WDContainer'
import MTContainer from './components/MTContainer'
import ContactContainer from './components/ContactContainer'
import Navbar from './components/Navbar'

import DATA from './data/data'

class App extends Component {
  state = {
    webDevelopment: [],
    musicalTheatre: {}
  }

  componentWillMount() {
    this.setState({
      webDevelopment: [...DATA.webDevelopment],
      musicalTheatre: {...DATA.musicalTheatre}
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <WelcomeHeader />
        <div className="main-content">
          <Navbar />
          <WDContainer data={this.state.webDevelopment} />
          <MTContainer data={this.state.musicalTheatre} />
          <ContactContainer />
        </div>
      </div>
    )
  }
}

export default App;
