import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Pagination from './screens/Pagination'
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
          <Route path='/form'>
            <Form />
          </Route>
          <Route path='/table'>
            <Pagination />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
