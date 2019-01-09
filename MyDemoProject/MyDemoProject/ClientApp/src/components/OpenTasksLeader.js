import React, { Component } from "react";


export default class OpenTasksLeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskList: []
        }
    }

    componentDidMount() {


        fetch('https://localhost:44340/api/task')
            .then(response => response.json())
            .then((task) => {
                this.setState({
                    taskList: task
                });
                console.log('task fetch');
            });

        
    }


    renderOpenTasksLeader() {

        let openTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {
            if (this.state.taskList[i].employeeName == null) {
                openTasks.push(<tr><div className="OpenTasks">{this.state.taskList[i].taskTitle}
                    <div><input type="text" id="AssignEmployee" key={this.state.taskList[i].taskTitle} placeholder="Assign employee" onChange={e => this.setState({ ...this.state, newEmployeeAss: e.target.value })} />
                        <button id="AssignEmployeeButton"
                            onChange={e => this.setState({ ...this.state, openTaskAss: e.target.value })} onClick={this.UpdateDataToServer} className="btn btn-secondary btn-sm">OK</button></div></div>
                </tr>)
            }
        }
        return openTasks;
    }

    UpdateDataToServer = () => {

        const { openTaskAss } = this.state;
        const { newEmployeeAss } = this.state;

        fetch('https://localhost:44340/api/task', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskTitle: openTaskAss,
                employeeName: newEmployeeAss

            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {

        console.log(this.state.tasksList)

        return (

            <td>

                {this.renderOpenTasksLeader()}

            </td>
                     
        );
    }

}