'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import Searchappointment  from '../AppointmentView/SearchAppointment';
import View from '../AppointmentView/Appointments';

export default class AppointmentView extends Component {
    constructor(props) {
        super(props);
        this.state={
        appointments:[]
        }
        this.getallAppointments();
    }

    getallAppointments() {
        axios.get('http://localhost:8080/appointment/').then(res => {
            this.setState({
				appointments: res.data.data
			});
        })
    }

    getOneAppointment(id){
        axios.get('http://localhost:8080/appointment/'+id).then(res => {
            this.setState({
				appointments: res.data.data
			});
        })
    }

   	render() {
        return <div>
           <h2>Appointment VIEW</h2>
            <Searchappointment getOneAppointment={id => this.getOneAppointment(id)}/>
            <View appointments={this.state.appointments} getallAppointments= {() => this.getallAppointments()}/>
        </div>;
	}
}
