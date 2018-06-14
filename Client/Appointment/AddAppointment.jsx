'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types";

export default class AddAppointment extends Component {
    static get propTypes() {
        return {
            AddAppointment: PropTypes.func,
            id:PropTypes.string,
            doctor: PropTypes.string,
            description:PropTypes.string,
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

    ondoctorChange(event) {
       event.preventDefault();
       event.stopPropagation();
       this.doctor = event.target.value;
    }

    ondescriptionChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.description = event.target.value;
     }


    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
       
           this.props.addAppointment({id:this.id, doctor:this.doctor, description:this.description});
           
        }

    render() {
        return <div class ="form">
            <form onSubmit={event => this.onSubmit(event)}>
               <label>Patient ID:</label>
               <div/>
               <input type="text" onChange={event => this.onIdChange(event)}/>
               <div/>
               <label>Doctor ID:</label>
               <div/>
               <input type="text" onChange={event => this.ondoctorChange(event)}/>
               <div/>
               <label>description :</label>
               <div/>
               <input type="text" onChange={event => this.ondescriptionChange(event)}/>
               <div/>
               <button type="submit">Add</button>
            </form>
        </div>;
    }
}
