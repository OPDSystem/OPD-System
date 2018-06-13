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
        
        
            this.props.getdayincome(this.date);
            this.props.getdayamount(this.date);
            
            
        }

    render() {
        return <div class="form">
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>Description:</label>
                </div>
                <div>
                <input type="text" onChange={event => this.onDateChange(event)}/>
                <button type="submit">Find</button>
                </div>
            </form>
        </div>;
    }
}