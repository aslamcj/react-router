import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Home = () => (
    <div>
            <h2> Home </h2>
    </div>
);
const About = () => (
    <div>
            <h2> About Us </h2>
    </div>
);
const Topic = () => (
    <div>
        <h2>Topic</h2>
    </div>
);
const Topics = () => (
    <div>
      <h2> Topics </h2>
      <ul>
          <li><Link to="/topics/rendering">Rending with react </Link></li>
          <li><Link to="/topics/components">Components </Link></li>
          <li><Link to="/topics/pros-v-state">Props vs State </Link></li>
      </ul>
      <Route  path="/topics/rendering"  component={Topic} />
      <Route  path="/topics/components"  component={Topic} />
      <Route  path="/topics/pros-v-state"  component={Topic} />
    </div>
);


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/"  component={Home} />
                    <Route path="/about"  component={About} />
                    <Route path="/topics"  component={Topics} />
                </div>
            </Router>
        );
    }
}

export default App;
