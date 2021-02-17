import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './routing/Routes'
import './App.css';

const App = () => {
  return (
    <div className='app' >
      <div className='inner-app'>
        <Router>
          <Route component={Routes} />
        </Router>
      </div>
    </div>
  )
}

export default App;
