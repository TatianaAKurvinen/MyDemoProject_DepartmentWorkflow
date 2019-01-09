import React, { Component } from "react";


export default class OpenTasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasksList: []
        }
    }

    componentWillMount() {


        fetch('https://localhost:44340/api/task')
            .then(response => response.json())
            .then((task) => {
                this.setState({
                    tasksList: task
                });
                console.log('task fetch');
            });

        
    }


    renderOpenTasks() {

        let openTasks = [];

        for (let i = 0; i < this.state.tasksList.length; i++) {
            if (this.state.tasksList[i].employeeName == null) {
                openTasks.push(<tr><div className="EmployeeTask"> {this.state.tasksList[i].taskTitle}</div></tr>);
            }
        }
        return openTasks;
    }

    render() {

        console.log(this.state.tasksList)

        return (

            <td>

                {this.renderOpenTasks()}

            </td>
                     
        );
    }

}