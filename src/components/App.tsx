import React from 'react';
import Header from './Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from './Authorize/Signin'
import Signup from './Authorize/Signup'
import Main from './Main/Main'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={Main} exact />
      <Route path="/signup" component={Signup} exact />
      <Route path="/signin" component={Signin} exact />
    </Router>
  )
}

export default App
