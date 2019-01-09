import React, { Component } from "react";


export default class OpenTasksLeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskList: [],
            
        }
        // this.UpdateDataToServer = this.UpdateDataToServer.bind(this);
        
    }

    componentDidMount() {


        fetch('https://localhost:44340/api/task')
            .then(response => response.json())
            .then((task) => {
                this.setState({
                    ...this.state,
                    taskList: task
                });
                console.log('task fetch');
            });

        
    }


    renderOpenTasksLeader() {

        let openTasks = [];

        for (let i = 0; i < this.state.taskList.length; i++) {

            let title = this.state.taskList[i].taskTitle;
            if (this.state.taskList[i].status !== "done") {
                if (this.state.taskList[i].employeeName === null) {
                    openTasks.push(<tr><div className="OpenTasks">{this.state.taskList[i].taskTitle}
                        <div><input type="text" id="AssignEmployee" key={this.state.taskList[i].taskTitle} placeholder="Assign employee" onChange={e => this.setState({ ...this.state, newEmployeeAss: e.target.value })} />
                            <button id="AssignEmployeeButton"
                                onClick={() => this.UpdateDataToServer(title)} className="btn btn-secondary btn-sm">OK</button></div></div>
                    </tr>)
                }
            }
        }
        return openTasks;
       
    }

    UpdateDataToServer = (title) => {

        const { openTaskAss } = this.state;
        const { newEmployeeAss } = this.state;

        console.log(newEmployeeAss + ': works');

        fetch('https://localhost:44340/api/task/'+title, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskTitle: openTaskAss,
                employeeName: newEmployeeAss,

            })

        }).then((response) => response.json())
            .then((responseJson) => {

            }).catch((error) => {
                console.error(error);
            });
        
    }


    render() {

        console.log(this.state.taskList)


        return (

            <td>

                {this.renderOpenTasksLeader()}

            </td>
                     
        );
    }

}