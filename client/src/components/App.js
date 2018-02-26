import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/App.css'

import Header from './Header'
import Dashboard from './Dashboard'
import Attendance from './Attendance'
import Progress from './Progress'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/attendance" component={Attendance} />
            <Route path="/progressreports" component={Progress} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
