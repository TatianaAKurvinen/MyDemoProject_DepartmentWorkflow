import React, { Component } from "react";




export default class EmployeesTasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            taskList: [],

            
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

        return taskList;
    }
       
    



    render() {


        return (
       
            <td>
                
            </td>

            
        );
    }
}




