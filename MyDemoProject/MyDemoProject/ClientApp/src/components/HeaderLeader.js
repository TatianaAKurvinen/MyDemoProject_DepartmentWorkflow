import React, { Component } from "react";
import DateTime from "./DateTime";
import TaskInputForm from "./TaskInputForm";
import './HeaderLeader.css';


export default class HeaderLeader extends Component {
    render() {

        return (
            <tbody>
            <td className="LeaderHeader">
                <TaskInputForm />
            </td>

                <td className="LeaderHeader" >
                    <p id="quote">
                Onni ei tule valmiina, vaan omista teoista.
                    </p>        
             </td>

                <td  id="time" className="LeaderHeader">
                <DateTime />
            </td>
                </tbody >
        );
    }
}