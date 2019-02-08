import React, {Component} from 'react';
import axios from 'axios';

const databaseUrl = 'http://localhost:3000/';

export default class Editor extends Component {

    state = {
        title: this.getTask(this.props.match.params.id) || ''
    };

    getTask(id) {
        axios.get(databaseUrl + 'tasks/' + id)
            .then((response) => {
                this.setState(response.data);
            });
    }

    onChange = (e) => this.setState({title: e.target.value});

    handleSave = (e) => {
        e.preventDefault();
        axios.put(databaseUrl + 'tasks/' + this.state.id, this.state)
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