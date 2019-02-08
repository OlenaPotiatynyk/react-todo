import React, {Component} from 'react';

export default class Search extends Component {

    state = {
        title: ''
    };

    onChange = (e) => this.setState({ title: e.target.value });

    handleSearch = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.title);
        this.setState({ title: '' });
    };

    render() {
        return (
            <form className="form-group col-md-4 input-group mb-3" onSubmit={this.handleSearch}>
                <input type="text"
                       name="title"
                       className="form-control"
                       placeholder="Search..."
                       value={this.state.title}
                       onChange={this.onChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                            type="submit">
                        SEARCH
                    </button>
                </div>
            </form>
        )
    }
}