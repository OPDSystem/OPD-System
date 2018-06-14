'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class Myqueue extends Component{
    static get propTypes() {
        return {
           name: PropTypes.string

        }
    }

    constructor(props) {
        super(props);
        
    }

    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.name = event.target.value;
    }

    

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
            this.props.getOnePatient(this.name);
             
        }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>DoctorID:</label>
                <input type="text" onChange={event => this.onNameChange(event)}/>
                <button type="submit">Find</button>
                </div>
            </form>
        </div>;
    }
}