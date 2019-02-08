import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './../main.css';

import Header from './Header';
import TaskList from './TaskList';
import Editor from './Editor';
import Archive from './Archive';

export default class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <Route exact path="/" component={TaskList} />
                    <Route path="/edit/:id" component={Editor} />
                    <Route path="/archive" component={Archive} />
                </div>
            </Router>
        )
    }
}
