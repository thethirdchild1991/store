import React from 'react';
import Header from './HeaderElement'
import Main from './MainElement'
import Footer from './FooterElement'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer /> 
    </Router>
  )
}

export default App;
