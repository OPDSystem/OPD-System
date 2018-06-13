'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class SearchAppointment extends Component{
    static get propTypes() {
        return {
           id: PropTypes.string

        }
    }

    constructor(props) {
        super(props);
        
    }

    onIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.id = event.target.value;
    }

    

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        
        
            this.props.getOneAppointment(this.id);
            
            
            
        }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>Patient ID:</label>
                <input type="text" onChange={event => this.onIdChange(event)}/>
                <button type="Submit">Find</button>
                </div>
            </form>
        </div>;
    }
}