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

    onIdChange(event) {
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
                <label>Doctor ID:</label>
                <div/>
                <input type="text" onChange={event => this.onIdChange(event)}/>
                <div/>
                <button type="Submit">Find</button>
                </div>
            </form>
        </div>;
    }
}