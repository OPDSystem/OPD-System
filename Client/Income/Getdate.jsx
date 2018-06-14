'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class Getdate extends Component{
    static get propTypes() {
        return {
           Date: PropTypes.string

        }
    }

    constructor(props) {
        super(props);
        
    }

    onDateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.date = event.target.value;
    }

    

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        
        
            this.props.getdaytotalincome(this.date);
            this.props.getdayincome(this.date);
            
        }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label for="date">Description:</label>
                </div>
                <div>
                <input type="text" id="date" onChange={event => this.onDateChange(event)}/>
                <div />
                <button type="submit">Find</button>
                </div>
            </form>
        </div>;
    }
}