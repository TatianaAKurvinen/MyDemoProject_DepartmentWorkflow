import React, { Component } from "react";
import './LogIn.css';

export class LogIn extends Component {
    displayName = LogIn.name;

    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            employeeName: '',
            password: ''
            
        }
    }

    componentWillMount() {

        fetch('https://localhost:44340/api/employee')
            .then(response => response.json())
            .then((employee) => {
                this.setState({
                    ...this.state,
                    employeeList: employee,

                });
                console.log('employee fetch');
            });
    }

    checkEmployee = () => {
        let employeeName = this.state.employeeName;
        let password = this.state.password;

        for (let i = 0; i < this.state.employeeList.length; i++) {
            if (this.state.employeeList[i].employeeName === employeeName && this.state.employeeList[i].password === password) {
                if (this.state.employeeList[i].employeeName === employeeName && this.state.employeeList[i].title === "Päällikkö") {
                    window.location.assign('/TeamLeader/');
                }
                else if (employeeName === this.state.employeeList[i].employeeName && this.state.employeeList[i].title === "Asiantuntija") {
                    window.location.assign('/Employees/');
                }  
            }           
            }     
    }

    render() {

        console.log(this.state.employeeList);
        console.log(this.state);
        

        return (
            <div id="LogInStyle">

                <h2> Please, enter your name and password</h2>

                    <input type="text" className="form-control" id="LogInInput1" placeholder="Enter your name" onChange={e => this.setState({ ...this.state, employeeName: e.target.value })} />
                    <input type="password" className="form-control" id ="LogInInput2" placeholder="Enter your password" onChange={e => this.setState({ ...this.state, password: e.target.value })} />

                <button type="submit" className="btn btn-primary" onClick={this.checkEmployee} >LogIn</button>
                
            </div>
        );
    }

}