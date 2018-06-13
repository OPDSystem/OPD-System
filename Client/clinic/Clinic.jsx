'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class Patient extends Component {
    static get propTypes() {
        return {
            clinic: PropTypes.object,
            getAllDoctors: PropTypes.func

        }
    }

    constructor(props) {
        super(props);
        this.clinic = this.props.clinic;
        this.getAllDoctors = this.props.getAllDoctors;
    }

    update(id, doctor ,time, date, patients) {
        var updatedDoctor = prompt("Please enter updated Doctor:",doctor );
        var updatedtime = prompt("Please enter updated time:", time);
        var updateddate = prompt("Please enter updated date:", date);
        var updatedpatients = prompt("Please enter updated patients:", patients);
        axios.put('http://localhost:8080/clinic/' + id, {doctor: updatedDoctor, time:updatedtime,date:updateddate, patients:updatedpatients}).then(results => {
            if(results.status == 200) {
                this.getAllDoctors();
            }

        })

    }

    delete(id) {
        axios.delete('http://localhost:8080/clinic/' + id).then(results => {
            if(results.status == 200) {
                this.getAllDoctors();
            }
        })
    }

    render() {
        return <tr>
            <td>{this.clinic.id}</td>
            <td>{this.clinic.doctor}</td>
            <td>{this.clinic.time}</td>
            <td>{this.clinic.date}</td>
            <td>{this.clinic.patients}</td>
            <button onClick={(e) => this.update(this.clinic.id,this.clinic.doctor,this.clinic.time,this.clinic.date,this.clinic.patients)}>Update</button>&nbsp;
            <button onClick={(e) => this.delete(this.clinic.id)}>Delete</button>
        </tr>
    }
}
