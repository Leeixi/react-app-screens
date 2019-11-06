import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/JS/Header'
import Homepage from './screens/Homepage'
import Footer from './components/JS/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Homepage />
        <Footer />
      </div>
    )
  }
}

export default App
