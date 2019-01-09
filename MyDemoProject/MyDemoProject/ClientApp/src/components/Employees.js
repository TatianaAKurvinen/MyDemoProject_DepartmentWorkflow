import React, { Component } from "react";
import OpenTasks from "./OpenTasks";
import HeaderEmployee from "./HeaderEmployee";
import './Employees.css';



export class Employees extends Component {
    displayName = Employees.name;


    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            taskList: [],
            doneTask: [],
            employeeDone: []
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

            let tasks = [];
           
            for (let i = 0; i < this.state.taskList.length; i++) {
                let title = this.state.taskList[i].taskTitle;

                if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[0].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTaskCheckBox"> {this.state.taskList[i].taskTitle} <div><button id="DoneTaskButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={() =>this.UpdateDataToServer0(title)}>Task is done</button>
                        </div></div></tr>);

                      

                    }
                }
            }
            return tasks;
            }
        
    renderTasks1() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            let title = this.state.taskList[i].taskTitle;

            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[1].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTaskCheckBox"> {this.state.taskList[i].taskTitle} <div><button id="DoneTaskButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={() => this.UpdateDataToServer1(title)}>Task is done</button>
                    </div></div></tr>);



                }
            }
        }
        return tasks;
    }

    renderTasks2() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            let title = this.state.taskList[i].taskTitle;

            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[2].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTaskCheckBox"> {this.state.taskList[i].taskTitle} <div><button id="DoneTaskButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={() => this.UpdateDataToServer2(title)}>Task is done</button>
                    </div></div></tr>);



                }
            }
        }
        return tasks;
    }

    renderTasks3() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            let title = this.state.taskList[i].taskTitle;

            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[3].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTaskCheckBox"> {this.state.taskList[i].taskTitle} <div><button id="DoneTaskButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={() => this.UpdateDataToServer3(title)}>Task is done</button>
                    </div></div></tr>);



                }
            }
        }
        return tasks;
    }

    renderTasks4() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            let title = this.state.taskList[i].taskTitle;

            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[4].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTaskCheckBox"> {this.state.taskList[i].taskTitle} <div><button id="DoneTaskButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={() => this.UpdateDataToServer4(title)}>Task is done</button>
                    </div></div></tr>);



                }
            }
        }
        return tasks;
    }

    renderTasks5() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            let title = this.state.taskList[i].taskTitle;

            if (this.state.taskList[i].status !== "done") {
                if (this.state.employeeList[5].employeeName === this.state.taskList[i].employeeName) {
                    tasks.push(<tr><div className="EmployeeTaskCheckBox"> {this.state.taskList[i].taskTitle} <div><button id="DoneTaskButton" className="btn btn-secondary btn-sm" name={this.state.taskList[i].taskTitle} onClick={() => this.UpdateDataToServer5(title)}>Task is done</button>
                    </div></div></tr>);



                }
            }
        }
        return tasks;
    }



    UpdateDataToServer0 = (title) => {

        const { doneTask } = this.state.doneTask;
        const { employeeDone } = this.state.employeeList;

        fetch('https://localhost:44340/api/task/' + title, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: "done",
                EmployeeName: "Aki Jokinen",
                
              

            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
    }

    UpdateDataToServer1 = (title) => {

        const { doneTask } = this.state.doneTask;
        const { employeeDone } = this.state.employeeList;

        fetch('https://localhost:44340/api/task/' + title, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: "done",
                EmployeeName: "Antti Rantanen",



            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
    }

    UpdateDataToServer2 = (title) => {

        const { doneTask } = this.state.doneTask;
        const { employeeDone } = this.state.employeeList;

        fetch('https://localhost:44340/api/task/' + title, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: "done",
                EmployeeName: "Laura Virtanen",



            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
    }

    UpdateDataToServer3 = (title) => {

        const { doneTask } = this.state.doneTask;
        const { employeeDone } = this.state.employeeList;

        fetch('https://localhost:44340/api/task/' + title, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: "done",
                EmployeeName: "Melissa Aaltonen",



            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
    }

    UpdateDataToServer4 = (title) => {

        const { doneTask } = this.state.doneTask;
        const { employeeDone } = this.state.employeeList;

        fetch('https://localhost:44340/api/task/' + title, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: "done",
                EmployeeName: "Tomi Lahtinen",



            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
    }

    UpdateDataToServer5 = (title) => {

        const { doneTask } = this.state.doneTask;
        const { employeeDone } = this.state.employeeList;

        fetch('https://localhost:44340/api/task/' + title, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status: "done",
                EmployeeName: "Veera Korhonen",



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
                <div>
                    <HeaderEmployee />
                </div>
                
                

                <table>
                    <th>Open tasks</th>
                    
                    {this.renderEmployees()}
                    
                    <tbody>   
                            <OpenTasks />
                            
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
            </div>
        );
    }
}