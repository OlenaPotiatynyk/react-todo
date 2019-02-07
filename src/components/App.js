import React, { Component } from 'react';
import './../main.css';

import Header from './Header';
import TaskList from './TaskList';

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Header/>
                <TaskList/>
            </div>
        )
    }
}
