import React, { Component } from "react";
import './LogIn.css';

export class LogIn extends Component {
    displayName = LogIn.name;

    constructor(props) {
        super(props);

        this.state = {
            employeeList: [],
            employeeName: '',
            
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

    checkEmployee = () => {
        let employeeName = this.state.employeeName;
        
        for (let i = 0; i < this.state.employeeList.length; i++)
        {
            if (this.state.employeeList[i].employeeName === employeeName && this.state.employeeList[i].title === "Päällikkö") {
                window.location.assign('/TeamLeader/');
            }
            else if (employeeName === this.state.employeeList[i].employeeName && this.state.employeeList[i].title === "Asiantuntija") {
                window.location.assign('/Employees/');
            }
           
        }
        
    }

    render() {

        console.log(this.state.employeeList);
        console.log(this.state);
        

        return (
            <div id="LogInStyle">

                <h2> Please, enter your name</h2>

                    <input type="text" className="form-control" id="LogInInput" placeholder="Enter your name" onChange={e => this.setState({ ...this.state, employeeName: e.target.value })} />

                <button type="submit" className="btn btn-primary" onClick={this.checkEmployee} >LogIn</button>
                
            </div>
        );
    }

}