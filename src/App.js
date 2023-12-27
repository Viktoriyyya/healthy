import React, { Component } from 'react'
import logo from './imgs/logo_healthy.png'
import saladImage from './imgs/salad.png'
import DataPanels from './components/data-panels'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.panelsRef = React.createRef()
  }

  scrollToPanels = () => {
    this.panelsRef.current?.scrollIntoView({ behavior: 'smooth'})
  }

  render() {
    return (
      <div className="App">
        <section className="home">
          <img className="logo-healthy" src={logo} alt="logo" />
          <img className="salad" src={saladImage} alt="salad" />
          <div className="green-bg" />
          <div className="gray-bg" />
          <div className="welcome">
            <h1 className="welcome__text">
              Start your<br />
              <span>HEALTHY JOURNEY</span>
            </h1>
            <button className="welcome__button" onClick={this.scrollToPanels}>Start Now</button>
          </div>
        </section>
        <section className="panels" ref={this.panelsRef}>
          <DataPanels />
        </section>
        <footer>
          <img className="footer-logo" src={logo} alt="logo" />
          <div className="green-bg" />
          <div className="gray-bg" />
          <p className="footer-link">
            if you have any questions contact us at <br />
            <a href="mailto:viktoriyyya06@gmail.com">viktoriyyya06@gmail.com</a>
          </p>
        </footer>
      </div>
    )
  }
}
