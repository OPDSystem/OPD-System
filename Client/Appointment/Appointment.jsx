'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class Appointment extends Component {
    static get propTypes() {
        return {
            appointment: PropTypes.object,
            getallAppointment: PropTypes.func

        }
    }

    constructor(props) {
        super(props);
        this.appointment = this.props.appointment;
        this.getallAppointment = this.props.getallAppointment;
    }

    update(id,description) {
        var updatedescription = prompt("Please enter updated description:", description);
        axios.put('http://localhost:8080/appointment/' + id, {description:updatedescription}).then(results => {
            if(results.status == 200) {
                this.getallAppointment();
            }

        })

    }

    delete(id) {
        axios.delete('http://localhost:8080/appointment/' + id).then(results => {
            if(results.status == 200) {
                this.getallAppointment();
            }
        })
    }

    render() {
        return <tr>
            <td>{this.appointment.id}</td>
            <td>{this.appointment.doctor}</td>
            <td>{this.appointment.description}</td>
            <button onClick={(e) => this.update(this.appointment.id,this.appointment.description)}>Update</button>&nbsp;
            <button onClick={(e) => this.delete(this.appointment.id)}>Delete</button>
        </tr>
    }
}
