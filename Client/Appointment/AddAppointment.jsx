'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types";
import axios   from 'axios';


export default class AddAppointment extends Component {
    static get propTypes() {
        return {
            AddAppointment: PropTypes.func,
            id:PropTypes.string,
            doctor: PropTypes.string,
            description:PropTypes.string,
            cid:PropTypes.string
        }
    }

    constructor(props) {
       super(props);
    }

    CheckName(id){
        axios.get('http://localhost:8080/patients/check/'+id).then(res => {
            this.setState({
                Check: res.data.data,     
            })

            document.getElementById("name").defaultValue = this.state.Check;
           
        })
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

     onIDChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.cid = event.target.value;
        
    }


    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
       
           this.props.addAppointment({id:this.cid, doctor:this.doctor, description:this.description});
           
        }
    
        onCheckSubmit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.CheckName(this.cid);
                
            }

    render() {
        return <div class ="form">
            
            <form onSubmit={event => this.onCheckSubmit(event)}>
                <div>
                <label for="date">Patient ID:</label>
                </div>
                <div>
                <input type="text" id="date" onChange={event => this.onIDChange(event)}/>
                <div />
                <button type="submit">Get Name</button>
                </div>
            </form>

            <form onSubmit={event => this.onSubmit(event)}>
               <label for="name">Patient Name:</label>
               <div/>
               <input type="text" id="name" disabled onChange={event => this.onIdChange(event)}/>
               <div/>
               <label>Doctor:</label>
               <div/>
               <select onChange={event => this.ondoctorChange(event)}>
                   <option value="none">Select Doctor</option>
                   <option value="Yaathra">Yaathra</option>
                   <option value="DivaTJ">Diva TJ</option>
                   <option value="KeerthanaVije">Keerthana Vije</option>
                   <option value="TharishThiva">Tharish Thiva</option>
                   <option value="Mithra">Mithra</option>
                   </select>
               <div/>
               <label>Description :</label>
               <div/>
               <input type="text" onChange={event => this.ondescriptionChange(event)}/>
               <div/>
               <button type="submit">Add</button>
            </form>
        </div>;
    }
}
