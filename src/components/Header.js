import React, {Component} from 'react';

import Navigation from './Navigation';

export default class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">My tasks</h1>
                <br/>
                <Navigation/>
            </div>
        )
    }
};