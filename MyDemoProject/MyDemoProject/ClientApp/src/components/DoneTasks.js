import React, { Component } from "react";


export default class DoneTasks extends Component {
    displayName = DoneTasks.name;

    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            taskList: []
        }
    }

    componentDidMount() {

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

    renderEmployees() {

        let employees = [];

        for (let i = 0; i < this.state.employeeList.length; i++) {
            employees.push(<th> {this.state.employeeList[i].employeeName} </th>)
        }
        return employees;
    }

    renderTasks0() {

        let doneTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status === "done      ") {
                if (this.state.employeeList[0].employeeName === this.state.taskList[i].employeeName) {
                    doneTasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}<div><button id="DeleteButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={this.DeleteDataOnServer}> Confirm</button>
                    </div></div></tr>);
                }
            }
        }
        return doneTasks;
    }

    renderTasks1() {

        let doneTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status === "done      ") {
                if (this.state.employeeList[1].employeeName === this.state.taskList[i].employeeName) {
                    doneTasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}<div><button id="DeleteButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={this.DeleteDataOnServer}>Confirm</button>
                            </div></div></tr>);
                }
            }
        }
        return doneTasks;
    }

    renderTasks2() {

        let doneTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status === "done      ") {
                if (this.state.employeeList[2].employeeName === this.state.taskList[i].employeeName) {
                    doneTasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}<div><button id="DeleteButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={this.DeleteDataOnServer}>Confirm</button>
                            </div></div></tr>);
                }
            }
        }
        return doneTasks;
    }

    renderTasks3() {

        let doneTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status === "done      ") {

                if (this.state.employeeList[3].employeeName === this.state.taskList[i].employeeName) {
                    doneTasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}<div><button id="DeleteButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={this.DeleteDataOnServer}>Confirm</button>
                            </div></div></tr>);
                }
            }
        }
        return doneTasks;
    }

    renderTasks4() {

        let doneTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status === "done      ") {

                if (this.state.employeeList[4].employeeName === this.state.taskList[i].employeeName) {
                    doneTasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}<div><button id="DeleteButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={this.DeleteDataOnServer}>Confirm</button>
                            </div></div></tr>);
                }
            }
        }
        return doneTasks;
    }

    renderTasks5() {

        let doneTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status === "done      ") {

                if (this.state.employeeList[5].employeeName === this.state.taskList[i].employeeName) {
                    doneTasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}<div><button id="DeleteButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={this.DeleteDataOnServer}>Confirm</button>
                            </div></div></tr>);
                }
            }
        }
        return doneTasks;
    }


  

    DeleteDataOnServer = () => {

        const { doneTask } = this.state;
        const { doneEmployee } = this.state;

        fetch('https://localhost:44340/api/task', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskTitle: doneTask,
                employeeName: doneEmployee

            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
    }


    render() {

        return (

                <table>
                    <th>Finished tasks</th>

                    {this.renderEmployees()}

                    <tbody>
                        <td>
                        
                        </td>

                        <td>
                            {this.renderTasks0()}
                        </td>

                        <td>
                            {this.renderTasks1()}
                        </td>

                        <td>
                            {this.renderTasks2()}
                        </td>

                        <td>
                            {this.renderTasks3()}
                        </td>

                        <td>
                            {this.renderTasks4()}
                        </td>

                        <td>
                            {this.renderTasks5()}
                        </td>

                    </tbody>
                </table>
            
        );
    }
}