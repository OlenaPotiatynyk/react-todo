import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="btn btn-secondary mr-2">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link to="/archive" className="btn btn-secondary">ARCHIVE</Link>
                </li>
            </ul>
        )
    }
};