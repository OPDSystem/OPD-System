'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class Appointment extends Component {
    static get propTypes() {
        return {
            appointment: PropTypes.object,
            getOneAppointment: PropTypes.func,
            getallAppointments:PropTypes.func

        }
    }

    constructor(props) {
        super(props);
        this.appointment = this.props.appointment;
        this.getOneAppointment = this.props.getOneAppointment;
        this.getallAppointments = this.props.getallAppointments;
    }

    update(id, doctor ,description) {
        var updatedoctor = prompt("Please enter updated Doctor :",doctor );
        var updatedescription = prompt("Please enter updated description:", description);
        axios.put('http://localhost:8080/appointment/' + id, {doctor: updatedoctor, description:updatedescription}).then(results => {
            if(results.status == 200) {
                this.getOneAppointment();
            }

        })

    }

    delete(id) {
        axios.delete('http://localhost:8080/appointment/' + id).then(results => {
            if(results.status == 200) {
                this.getallAppointments();
            }
        })
    }

    render() {
        return <tr>
            <td>{this.appointment.id}</td>
            <td>{this.appointment.doctor}</td>
            <td>{this.appointment.description}</td>
            <button onClick={(e) => this.update(this.appointment.id,this.appointment.doctor,this.appointment.description)}>Update</button>&nbsp;
            <button onClick={(e) => this.delete(this.appointment.id)}>Delete</button>
        </tr>
    }
}
