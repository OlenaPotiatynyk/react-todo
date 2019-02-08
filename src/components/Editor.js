import React, { Component } from 'react';
import axios from 'axios';

export default class Editor extends Component {

    state = {
        title: this.getTask(this.props.match.params.id) || ''
    };

    getTask(id) {
        axios.get('http://localhost:3000/tasks/' + id)
            .then((response) => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    completed: response.data.completed
                });
            });
    }

    onChange = (e) => this.setState({ title: e.target.value });

    handleSave = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/tasks/' + this.state.id, {
            id: this.state.id,
            title: this.state.title,
            completed: this.state.completed
        })
            .then(() => {
                this.props.history.push('/')
            });
    };

    render() {
        return (
            <div>
                <form className="input-group mb-3" onSubmit={this.handleSave}>
                    <input type="text"
                           name="title"
                           className="form-control"
                           value={this.state.title}
                           onChange={this.onChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                type="submit">
                            SAVE CHANGES
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}