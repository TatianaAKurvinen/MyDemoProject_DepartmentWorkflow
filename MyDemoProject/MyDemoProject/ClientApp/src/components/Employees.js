import React, { Component } from "react";

export class Employees extends Component {
    displayName = Employees.name;

    state = {

        tasks: [
            "task1", "task2", "task3"
        ],

        employees: [
            "bobby", "tim", "carla"
        ]

    }

    render() {

        return (
            <div>

                <table>
                    <td>
                        <button className="btn btn-secondary btn-sm">Add new task</button>
                    </td>

                    <td>
                    //Here will be nice quotes from database
                    </td>

                    <td>
                    //Here will be time and date
                    </td>
                </table>

                <table>
                    <th>Open tasks</th>
                    {this.state.employees.map(employee => <th>{employee}</th>)};
                    <tr>
                        {this.state.tasks.map(task => <div>{task}</div>)};
                    </tr>


                </table>

            </div>
        );
    }

}