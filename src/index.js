import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <div>
                <Route exact path="/" component={App}> </Route>
                <Route path="/home" component={App}> </Route>
                <Route path="/login" render={()=> <h1>Welcome to Login page</h1>}> </Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
