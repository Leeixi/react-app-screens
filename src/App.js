import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './screens/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './screens/form'
import List from './screens/list'

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/list'>
            <List />
          </Route>
          <Route path='/about'>
            <Form />
          </Route>
          <Route path='/table'>
            <Pagination />
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
