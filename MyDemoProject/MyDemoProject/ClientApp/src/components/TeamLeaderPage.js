import React, { Component } from "react";

export class TeamLeaderPage extends Component {
    displayName = TeamLeaderPage.name;

    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            phraseList: [],
            taskList: [],
            phraseSelection: []

        }


    }

    componentWillMount() {

        fetch('https://localhost:44340/api/motivation')
            .then(response => response.json())
            .then((phrase) => {
                this.setState({
                    phraseList: phrase
                });
                console.log('motivation fetch');
            }

            );

        fetch('https://localhost:44340/api/employee')
            .then(response => response.json())
            .then((employee) => {
                this.setState({
                    employeeList: employee

                });
                console.log('employee fetch');
            }

            );

        fetch('https://localhost:44340/api/task')
            .then(response => response.json())
            .then((task) => {
                this.setState({
                    taskList: task
                });
                console.log('task fetch');
            }

            );



    }

    renderEmployees() {

        let employees = [];

        for (let i = 0; i < this.state.employeeList.length; i++) {
            employees.push(<th> {this.state.employeeList[i].employeeName} </th>)
        }
        return employees;


    }

    renderOpenTasks() {

        let openTasks = [];
        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].employeeName == null) {
                openTasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>)
            }

        }
        return openTasks;
    }

    renderTasks0() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[0].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }

    renderTasks1() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[1].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }

    renderTasks2() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[2].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }
    renderTasks3() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[3].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }
    renderTasks4() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[4].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }
    renderTasks5() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[5].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }
    renderTasks6() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[6].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }
    renderTasks7() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[7].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }
    renderTasks8() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[8].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }
    renderTasks9() {
        let tasks = [];


        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.employeeList[9].employeeName === this.state.taskList[i].employeeName) {
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>);
            }

        }


        return tasks;

    }


    render() {

        console.log(this.state.taskList)

        return (



            <div>

                <table>
                    <tbody>
                        <td>
                            <button className="btn btn-secondary btn-sm">Add new task</button>
                        </td>

                        test

                        <td>
                        //Here will be time and date
                        </td>
                    </tbody>
                </table>

                <table>
                    <th>Open tasks</th>

                    {this.renderEmployees()}

                    <tbody>
                        <td>

                            {this.renderOpenTasks()}

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

                        <td>
                            {this.renderTasks6()}
                        </td>

                        <td>
                            {this.renderTasks7()}
                        </td>

                        <td>
                            {this.renderTasks8()}
                        </td>

                        <td>
                            {this.renderTasks9()}
                        </td>



                    </tbody>
                </table>
            </div>
        );
    }
}