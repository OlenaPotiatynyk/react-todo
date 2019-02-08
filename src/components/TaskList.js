import React, {Component} from 'react';
import axios from 'axios';

import Task from './Task';
import Form from './Form';

export default class TaskList extends Component {

    state = {
        tasks: this.getTasks() || []
    };

    getTasks() {
        axios.get('http://localhost:3000/tasks')
            .then((response) => {
                this.setState({
                    tasks: response.data
                });
            });
    }

    addTask = (task) => {
        axios.post('http://localhost:3000/tasks/', {
            id: task.id,
            title: task.title,
            completed: task.completed
        }).then(() => {
            this.getTasks()
        });
        // this.setState({
        //     tasks: [task, ...this.state.tasks]
        // })
    };

    toggleComplete = (task) => {
        axios.put('http://localhost:3000/tasks/' + task.id, {
            id: task.id,
            title: task.title,
            completed: !task.completed
        }).then(() => {
            this.getTasks()
        });
    };

    handleDelete = (id) => {
        axios.delete('http://localhost:3000/tasks/' + id)
            .then(() => {
                this.getTasks()
            });
    };

    render() {
        const taskElements = this.state.tasks.map(task =>
            <li key={task.id} className="list-group-item">
                <Task task={task}
                      toggleComplete={() => this.toggleComplete(task)}
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