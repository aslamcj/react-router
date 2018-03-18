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
const Topic = ({match}) => console.log('match',match) || (
    <div>
        <h2>{match.params.topicId}</h2>
    </div>
);
{/*To insert URL Dynamically pass {match} to component which passed by Router*/}
const Topics = ({match}) => (
    <div>
      <h2> Topics </h2>
      <ul>
          <li><Link to="/topics/rendering">Rending with react </Link></li>
          <li><Link to="/topics/components">Components </Link></li>
          {/*To insert URL Dynamically*/}
          <li><Link to={`${match.url}/pros-v-state`}>Props vs State </Link></li>
      </ul>
      {/*To pass the values passed after topics as attrubuites*/}
      <Route  path="/topics/:topicId"  component={Topic} />
      {/*To assign default value before clicking links*/}
      <Route  exact path={match.url}  render={ ()=> (<h2>Please select a topic to see</h2>)} />
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
