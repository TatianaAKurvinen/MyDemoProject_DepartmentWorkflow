import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

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
        alert("wrong");
    }

    render() {

        console.log(this.state.employeeList);
        console.log(this.state);
        

        return (
            <div>
                <h2> Please, enter your name and password to log in</h2>
                <div>
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" onChange={e => this.setState({ ...this.state, employeeName: e.target.value })} />
                 </div> 

                <button type="submit" className="btn btn-primary" onClick={this.checkEmployee} > Submit</button>
                
            </div>
        );
    }

}