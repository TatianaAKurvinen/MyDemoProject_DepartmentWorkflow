import React, { Component } from "react";
import DateTime from "./DateTime";
import './HeaderEmployee.css';

export default class HeaderEmployee extends Component {
    render() {

        return (

            <table>
                <tbody>

                    <td >
                        <p id="quoteE">
                        Onni ei tule valmiina, vaan omista teoista.
                        </p>    
                        </td>

                    <td id="root" id="time">
                        <DateTime />
                    </td>
                </tbody>
            </table>
        );
    }
}