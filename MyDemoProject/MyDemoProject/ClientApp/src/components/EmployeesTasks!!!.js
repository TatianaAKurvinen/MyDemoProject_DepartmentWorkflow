import React, { Component } from "react";




export default class EmployeesTasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            taskList: []
            
        }
    }

    componentWillMount() {

        fetch('https://localhost:44340/api/task')
            .then(response => response.json())
            .then((task) => {
                this.setState({
                    taskList: task
                });
                console.log('task fetch');
            });

        fetch('https://localhost:44340/api/employee')
            .then(response => response.json())
            .then((employee) => {
                this.setState({
                    employeeList: employee

                });
                console.log('employee fetch');
            });

      
    }

    renderTasks() {

        let tasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {

            for (let index = 0; index < this.state.employeeList.length; index++) {
            
            if (this.state.taskList[i].employeeName === this.state.employeeList[index].employeeName) {

                tasks = [...[tasks[i]]];
                tasks.push(<tr>{this.state.taskList[i].taskTitle}</tr>)

            }
           
            }

            
            }
        
        return tasks;
            
        }
       
    



    render() {


        return (
       
            <td>
                {this.renderTasks()}
            </td>

            
        );
    }
}




