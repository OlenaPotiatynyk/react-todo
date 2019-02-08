import React, {Component} from 'react';
import axios from 'axios';

import Task from './Task';
import Form from './Form';
import Search from './Search';

const databaseUrl = 'http://localhost:3000/';

export default class TaskList extends Component {

    state = {
        tasks: this.getTasks() || []
    };

    getTasks() {
        axios.get(databaseUrl + 'tasks/')
            .then((response) => {
                this.setState({
                    tasks: response.data
                });
            });
    }

    addTask = (task) => {
        axios.post(databaseUrl + 'tasks/', task)
            .then(() => {
                this.getTasks()
            });
    };

    filterTasks(value) {
        axios.get(databaseUrl + 'tasks/')
            .then((response) => {
                return response.data.filter((task) => task.title.search(value) >= 0);
            })
            .then((filteredTasks) => {
                this.setState({
                    tasks: filteredTasks
                })
            });
    };

    handleComplete = (task) => {
        axios.put(databaseUrl + 'tasks/' + task.id, {
            ...task,
            completed: !task.completed
        }).then(() => {
            this.getTasks()
        });
    };

    addToArchive = (task) => {
        axios.put(databaseUrl + 'tasks/' + task.id, {
            ...task,
            archived: !task.archived
        }).then(() => {
            this.getTasks()
        });
    };

    handleDelete = (id) => {
        axios.delete(databaseUrl + 'tasks/' + id)
            .then(() => {
                this.getTasks()
            });
    };

    render() {
        const taskElements = this.state.tasks.map(task =>
            <li key={task.id} className={task.archived ? "hide" : "list-group-item"}>
                <Task task={task}
                      toggleComplete={() => this.handleComplete(task)}
                      archivate={() => this.addToArchive(task)}
                      deleteTask={() => this.handleDelete(task.id)}
                />
            </li>
        );
        return (
            <div>
                <div className="form-row">
                    <Form onSubmit={this.addTask} />
                    <Search onSubmit={this.filterTasks.bind(this)} />
                </div>
                <ul className="list-group">
                    {taskElements}
                </ul>
                <p className={taskElements.length > 0 ? "hide" : ""}>
                    Your search did not match any tasks. Try one more time.
                </p>
            </div>
        )
    }
}