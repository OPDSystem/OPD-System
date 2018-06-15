'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class Myqueue extends Component{
    static get propTypes() {
        return {
           id: PropTypes.string,
           hold:PropTypes.string

        }
    }

    constructor(props) {
        super(props);
       //this.hold ="Off Hold" ;
    }

    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.id = event.target.value;
    }

        onHoldSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.getOnePatient(this.id);
            this.hold ="Hold";
           
             
        }
    
        onHoldOffSubmit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.props.getOnePatient(this.id);
                this.hold = "ON Process";
                
                 
            }
    

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
            this.props.getOnePatient(this.id);
            this.hold = "ON Process";
             
        }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>Doctor Name:</label>
                <div />
                <select onChange={event => this.onNameChange(event)}>
                   <option value="none">Select Doctor</option>
                   <option value="Yaathra">Yaathra</option>
                   <option value="DivaTJ">Diva TJ</option>
                   <option value="KeerthanaVije">Keerthana Vije</option>
                   <option value="Tharish">Tharish Thiva</option>
                   <option value="Mithra">Mithra</option>
                   </select>
                <div />
                <button type="submit">Find</button>
                </div>
            </form>
            <div>
            <form onSubmit={event => this.onHoldSubmit(event)}>
            <button type = "hold"> Hold </button>
            </form>
            </div>

            <div>
            <form onSubmit={event => this.onHoldOffSubmit(event)}>
            <button type = "hold"> ON Process </button>
            </form>
            </div>
        
            <div>
            <h2>Status : {this.hold} </h2>
            </div>
        </div>;
    }
}