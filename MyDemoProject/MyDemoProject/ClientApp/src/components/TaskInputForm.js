import React, { Component } from "react";
import './TaskInputForm.css';


export default class TaskInputForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            taskList: [],
            newTask: '',
            assignedEmployee: '',

        }
    }

    componentWillMount() {

        fetch('https://localhost:44340/api/employee')
            .then(response => response.json())
            .then((employee) => {
                this.setState({
                    employeeList: employee

                });
                console.log('employee fetch');
            });

        fetch('https://localhost:44340/api/task')
            .then(response => response.json())
            .then((task) => {
                this.setState({
                    taskList: task
                });
                console.log('task fetch');
            });
    }

    InsertDataToServer = () => {

        const { newTask } = this.state;
        const { assignedEmployee } = this.state;

        fetch('https://localhost:44340/api/task', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                taskTitle: newTask,
                employeeName: assignedEmployee,

            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });


    }
    render() {

        return (
            
                <div>

                    <input type="text" name="newTask" className="NewTaskInput"


                        placeholder="Enter new task"

                        onChange={e => this.setState({ ...this.state, newTask: e.target.value })}
                    />
                <input type="text" name="assignedEmployee" className="NewTaskInput"


                        placeholder="Assign employee"

                        onChange={e => this.setState({ ...this.state, assignedEmployee: e.target.value })}


                    />
                    <button id="NewTaskBtn"
                    onClick={this.InsertDataToServer} className="btn btn-primary"> Add new task </button>

                </div>
            
        );
    }
}