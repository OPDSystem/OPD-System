'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import AddAppointment  from '../Appointment/AddAppointment';
import Register from '../Appointment/Appointments';

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state={
        appointments:[]
        }
        this.getallAppointment();
    }

    getallAppointment() {
        axios.get('http://localhost:8080/appointment/').then(res => {
            this.setState({
				appointments: res.data.data
			});
        })
    }

   	addAppointment(data) {
   		axios.post('http://localhost:8080/appointment/',{id:data.id, doctor:data.doctor, description:data.description}).then(result => {
   			if(result.status == 200) {
                   this.getallAppointment();
                   console.log("ADDED!!");
			}
		}).catch(err => {
			alert(err);
		})
   	}

   	render() {
        return <div>
           <h2>Add Appointments</h2>
            <AddAppointment addAppointment={data => this.addAppointment(data)}/>
            <Register appointments={this.state.appointments} getallAppointment = {() => this.getallAppointment()}/>
        </div>;
	}
}
