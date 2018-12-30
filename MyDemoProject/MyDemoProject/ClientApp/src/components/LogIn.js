import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export class LogIn extends Component {
    displayName = LogIn.name;

    render() {

        return (
            <div>
                <h2> Please, enter your E-mail and password to log in</h2>
                <div>
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                 </div> 

                 <div>
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" />
                 </div>

                <LinkContainer to={'/TeamLeader'}>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </LinkContainer>

                <LinkContainer to={'/Employees'}>
                    <button type="submit" className="btn btn-primary">Temporary button</button>
                </LinkContainer>
            </div>
        );
    }

}