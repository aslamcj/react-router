import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

/* Usage of 'Switch' to match Ambiguous Matches with React Router */
const About = () => (
    <div>
      <h2> About </h2>
    </div>
);

const Company = () => (
  <div>
    <h2> Company </h2>
  </div>
);

const User = ({match}) => (
  <div>
    <h2> User: {match.params.user} </h2>
  </div>
);



class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                  <ul>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/company">Company</Link></li>
                      <li><Link to="/aslam">Aslam</Link></li>
                      <li><Link to="/zahid">Zahid</Link></li>
                  </ul>
                  <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/company" component={Company} />
                    <Route path="/:user" component={User} />
                  </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
