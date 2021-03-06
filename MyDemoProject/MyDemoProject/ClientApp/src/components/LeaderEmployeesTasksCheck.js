﻿import React, { Component } from "react";
import './TeamLeaderPage.css';



export class  extends Component {
    displayName = TeamLeaderPage.name;

    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            phraseList: [],
            taskList: [],
            phraseSelection: [],
            openTaskAss: '',
            newEmployeeAss: '',

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


    renderOpenTasks() {

        let openTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].employeeName == null) {
                openTasks.push(<tr><div className="OpenTasks">{this.state.taskList[i].taskTitle}
                    <div><input type="text" id="AssignEmployee" key={this.state.taskList[i].taskTitle} placeholder="Assign employee" onChange={e => this.setState({ ...this.state, newEmployeeAss: e.target.value })} />
                        <button id="AssignEmployeeButton"
                            onChange={e => this.setState({ ...this.state, openTaskAss: e.target.value })} onClick={this.UpdateDataToServer} className="btn btn-secondary btn-sm">OK</button></div></div>
                </tr>)
            }
        }
        return openTasks;
    }

    renderTasks0() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status !== "done      ") {
                if (this.state.employeeList[0].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks1() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status !== "done      ") {
                if (this.state.employeeList[1].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks2() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status !== "done      ") {
                if (this.state.employeeList[2].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks3() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status !== "done      ") {

                if (this.state.employeeList[3].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks4() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status !== "done      ") {

                if (this.state.employeeList[4].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks5() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].status !== "done      ") {

                if (this.state.employeeList[5].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }




    render() {

        return (

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

                    </tbody>
               
        );
    }
}