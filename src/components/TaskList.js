import React, {Component} from 'react';

import Task from './Task';
import Form from './Form';
import tasks from '../tasks';

export default class TaskList extends Component {
    state = {
        tasks: tasks
    };

    addTask = (task) => {
        this.setState({
            tasks: [task, ...this.state.tasks]
        })
    };

    toggleComplete = (id) => {
        this.setState({
            tasks: this.state.tasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                } else {
                    return task;
                }
            })
        })
    };

    handleDelete = (id) => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        })
    };

    render() {
        const taskElements = this.state.tasks.map(task =>
            <li key={task.id} className="list-group-item">
                <Task task={task}
                      toggleComplete={() => this.toggleComplete(task.id)}
                      deleteTask={() => this.handleDelete(task.id)}
                />
            </li>
        );
        return (
            <div>
                <Form onSubmit={this.addTask}/>
                <ul className="list-group">
                    {taskElements}
                </ul>
            </div>
        )
    }
}