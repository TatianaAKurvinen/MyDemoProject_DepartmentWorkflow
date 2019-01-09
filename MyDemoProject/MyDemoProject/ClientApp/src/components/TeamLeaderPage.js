import React, { Component } from "react";
import HeaderLeader from "./HeaderLeader";
import './TeamLeaderPage.css';
import DoneTasks from "./DoneTasks";
import OpenTasksLeader from "./OpenTasksLeader";

export class TeamLeaderPage extends Component {
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
                    ...this.state,
                    employeeList: employee

                });
                console.log('employee fetch');
            });

        fetch('https://localhost:44340/api/task')
            .then(response => response.json())
            .then((task) => {
                this.setState({
                    ...this.state,
                    taskList: task
                });
                console.log('task fetch');
            });
    }

    renderEmployees() {

        let employees = [];

        for (let i = 0; i < this.state.employeeList.length; i++)
        {
            employees.push(<th> {this.state.employeeList[i].employeeName} </th>)
        }
        return employees;
    }



    renderTasks0() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++)
        {
            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[0].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks1() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++)
        {
            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[1].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks2() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++)
        {
            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[2].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks3() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++)
        {
            if (this.state.taskList[i].status !== "done") {

                if (this.state.employeeList[3].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks4() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++)
        {
            if (this.state.taskList[i].status !== "done") {

                if (this.state.employeeList[4].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    renderTasks5() {
    
        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++)
        {
            if (this.state.taskList[i].status !== "done") {

                if (this.state.employeeList[5].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTask"> {this.state.taskList[i].taskTitle}</div></tr>);
                }
            }
        }
        return tasks;
    }

    


    
    render() {

        return (

            <div>

                <table>
                    

                        <HeaderLeader />
                    
                </table>

                <table>
                    <th>Open tasks</th>

                    {this.renderEmployees()}

                    <tbody>
                        <OpenTasksLeader />
                       

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

                <DoneTasks />
            </div>
        );
    }
}