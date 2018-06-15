'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class GetPay extends Component{
    static get propTypes() {
        return {
           doctor: PropTypes.string

        }
    }

    constructor(props) {
        super(props);
        
    }

    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.doctor = event.target.value;
    }

    

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.getOneDoctor(this.doctor);
    }

    render() {
        return <div class="form">
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>Doctor Name:</label>
                <div/>
                <select onChange={event => this.onNameChange(event)}>
                   <option value="none">Select Doctor</option>
                   <option value="Yaathra">Yaathra</option>
                   <option value="DivaTJ">Diva TJ</option>
                   <option value="KeerthanaVije">Keerthana Vije</option>
                   <option value="Tharish">Tharish Thiva</option>
                   <option value="Mithra">Mithra</option>
                   </select>
                <div/>
                <button type="Submit">Find</button>
                </div>
            </form>
        </div>;
    }
}