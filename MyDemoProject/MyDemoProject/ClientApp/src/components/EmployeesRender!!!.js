import React, { Component } from "react";


export default class EmployeesRender extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeList: []
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
    }

    renderEmployees() {

        let employees = [];

        for (let i = 0; i < this.state.employeeList.length; i++) {
            employees.push(<th> {this.state.employeeList[i].employeeName} </th>)
        }
        return employees;
    }


    render() {

        console.log(this.state.taskList)

        return (

                   <th> {this.renderEmployees()} </th>
                    
        );
    }


}