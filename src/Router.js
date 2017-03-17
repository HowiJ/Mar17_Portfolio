import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import ProjectPage from './components/project/Project';

const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ App }></Route>
        <Route strict path="/projects/" component={ ProjectPage }></Route>
      </div>
    </Router>
  )
}

export default RouterComponent;