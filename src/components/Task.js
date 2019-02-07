import React, {Component} from 'react';

export default class Task extends Component {
    edit = () => {
        console.log('---', 'clicked');
    };

    render() {
        const {task} = this.props;
        return (
            <div className="d-flex justify-content-between align-items-center">
                <input className="toggle"
                       type="checkbox"
                       value={task.completed}
                       checked={task.completed}
                       onChange={this.props.toggleComplete}/>
                <h2 className={task.completed ? 'checked' : ''}>
                    {task.title}
                </h2>
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-info" onClick={this.edit}>
                        {'EDIT'}
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.props.deleteTask}>
                        {'DELETE'}
                    </button>
                </div>
            </div>
        )
    }
}