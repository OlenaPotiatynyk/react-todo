import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Task extends Component {

    render() {
        const {task} = this.props;
        return (
            <div className="d-flex justify-content-between align-items-center">
                <input className="toggle"
                       type="checkbox"
                       value={task.completed}
                       checked={task.completed}
                       onChange={this.props.toggleComplete}/>
                <h4 className={task.completed ? 'checked' : ''}>
                    {task.title}
                </h4>
                <div className={task.archived ? "hide" : "btn-group"}>
                    <Link to={/edit/ + task.id} className="btn btn-outline-info">
                        EDIT
                    </Link>
                    <button type="button" className="btn btn-outline-secondary" onClick={this.props.archivate}>
                        ARCHIVE
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.props.deleteTask}>
                        DELETE
                    </button>
                </div>
                <div className={task.archived ? "btn-group" : "hide"}>
                    <button type="button" className="btn btn-outline-secondary" onClick={this.props.archivate}>
                        GET FROM ARCHIVE
                    </button>
                </div>
            </div>
        )
    }
}