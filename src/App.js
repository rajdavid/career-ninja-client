import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
const App = () => {
  return (
    <Router> 

        <Route exact path="/" component={Login} />
    </Router>

  )
}

export default App
