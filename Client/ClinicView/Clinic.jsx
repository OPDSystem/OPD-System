'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class Clinic extends Component {
    static get propTypes() {
        return {
            Clinic: PropTypes.object,
            getOneClinic: PropTypes.func,
            getAllDoctors:PropTypes.func

        }
    }

    constructor(props) {
        super(props);
        this.clinic = this.props.clinic;
        this.getOneClinic = this.props.getOneClinic;
        this.getAllDoctors = this.props.getAllDoctors;
    }

    update(id,time, date) {
      
        var updatedtime = prompt("Please enter updated time:", time);
        var updateddate = prompt("Please enter updated date:", date);
       
        axios.put('http://localhost:8080/clinic/' + id, {time:updatedtime,date:updateddate}).then(results => {
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
            <td>{this.clinic._id}</td>
            <td>{this.clinic.doctor}</td>
            <td>{this.clinic.time}</td>
            <td>{this.clinic.date}</td>
            <button onClick={(e) => this.update(this.clinic._id,this.clinic.time,this.clinic.date)}>Update</button>&nbsp;
            <button onClick={(e) => this.delete(this.clinic._id)}>Delete</button>
        </tr>
    }
}
