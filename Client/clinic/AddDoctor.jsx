'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types";

export default class AddDoctor extends Component {
    static get propTypes() {
        return {
            AddDoctor: PropTypes.func,
            doctor: PropTypes.string,
            time:PropTypes.string,
            date:PropTypes.string,
        }
    }

    constructor(props) {
       super(props);
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
       
           this.props.addDoctor({doctor:this.doctor, time:this.time, date:this.date});
           
        }

    render() {
        return <div class="form">
            <form onSubmit={event => this.onSubmit(event)}>
               <label>doctor:</label>
               <div/>
               <select onChange={event => this.ondoctorChange(event)}>
                   <option value="none">Select Doctor</option>
                   <option value="Yaathra">Yaathra</option>
                   <option value="Diva TJ">Diva TJ</option>
                   <option value="Keerthana Vije">Keerthana Vije</option>
                   <option value="Tharish Thiva">Tharish Thiva</option>
                   <option value="Mithra">Mithra</option>
                   </select>
               <div/>
               <label>time :</label>
               <div/>
               <input type="time" onChange={event => this.ontimeChange(event)}/>
               <div/>
               <label>date:</label>
               <div/>
               <input type="date" min="2018-01-01" onChange={event => this.ondateChange(event)}/>
               <div/>
               <button type="submit">Add</button>
            </form>
        </div>;
    }
}
