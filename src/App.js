import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import CustomNavbar from './components/CustomNavbar';
import News from './components/News';
const App = () => {
  return (
    <Router>

      <div>
        <CustomNavbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/news" exact component={News} />
      </div>
    </Router>

  );
}

export default App;
