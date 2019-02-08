import React, {Component} from 'react';
import axios from 'axios';

import Task from './Task';

const databaseUrl = 'http://localhost:3000/';

export default class Archive extends Component {

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

    addToArchive = (task) => {
        axios.put(databaseUrl + 'tasks/' + task.id, {
            ...task,
            archived: !task.archived
        }).then(() => {
            this.getTasks()
        });
    };

    render() {
        const taskElements = this.state.tasks.map(task =>
            <li key={task.id} className={task.archived ? "list-group-item" : "hide"}>
                <Task task={task}
                      archivate={() => this.addToArchive(task)}
                />
            </li>
        );
        return (
            <div>
                <ul className="list-group">
                    {taskElements}
                </ul>
            </div>
        )
    }
}