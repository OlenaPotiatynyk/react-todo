import React, {Component} from 'react';

export default class Form extends Component {
    state = {
        title: ''
    };

    onChange = (e) => this.setState({ title: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: Math.random().toString(36).substring(7),
            title: this.state.title,
            completed: false,
            archived: false
        });
        this.setState({ title: '' });
    };

    render() {
        return (
            <form className="form-group col-md-8 input-group mb-3" onSubmit={this.handleSubmit}>
                <input type="text"
                       name="title"
                       className="form-control"
                       placeholder="Add new task..."
                       value={this.state.title}
                       onChange={this.onChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary"
                                type="submit">
                            ADD NEW TASK
                        </button>
                    </div>
            </form>
        )
    }
}