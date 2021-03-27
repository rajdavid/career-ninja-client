import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login';
import Dashboard  from  './pages/dashboard/dashboard'
const App = () => {
  return (
    <Router> 

      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>

  )
}

export default App
