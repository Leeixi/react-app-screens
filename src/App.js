import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/JS/Header'
import Pagination from './components/JS/Pagination'
import Footer from './components/JS/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pagination />
        <Footer />
      </div>
    )
  }
}

export default App
