'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types";

export default class AddDoctor extends Component {
    static get propTypes() {
        return {
            AddDoctor: PropTypes.func,
            id:PropTypes.string,
            doctor: PropTypes.string,
            time:PropTypes.string,
            date:PropTypes.string,
            patients:PropTypes.string
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

    ontimeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.time = event.target.value;
     }

     ondateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.date = event.target.value;
     }

     onpatientChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.patients = event.target.value;
     }


    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
       
           this.props.addDoctor({id:this.id, doctor:this.doctor, time:this.time, date:this.date, patients:this.patients});
           
        }

    render() {
        return <div class="form">
            <form onSubmit={event => this.onSubmit(event)}>
               <label>id:</label>
               <div/>
               <input type="text" onChange={event => this.onIdChange(event)}/>
               <div/>
               <label>doctor:</label>
               <div/>
               <input type="text" onChange={event => this.ondoctorChange(event)}/>
               <div/>
               <label>time :</label>
               <div/>
               <input type="text" onChange={event => this.ontimeChange(event)}/>
               <div/>
               <label>date:</label>
               <div/>
               <input type="text" onChange={event => this.ondateChange(event)}/>
               <div/>
               <button type="submit">Add</button>
            </form>
        </div>;
    }
}
