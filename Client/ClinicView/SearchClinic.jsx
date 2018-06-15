'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class SearchClinic extends Component{
    static get propTypes() {
        return {
           date: PropTypes.string

        }
    }

    constructor(props) {
        super(props);
        
    }

    ondateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.date = event.target.value;
    }

    

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        
        
            this.props.getOneClinic(this.date);
            
            
            
        }

    render() {
        return <div class="form">
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>Clinic Date:</label>
                <div/>
                <input type="date" min="2018-01-01" max="2018-12-31" onChange={event => this.ondateChange(event)}/>
                <div/>
                <button type="Submit">Find</button>
                </div>
            </form>
        </div>;
    }
}