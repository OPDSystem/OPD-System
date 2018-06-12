'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class Patient extends Component {
    static get propTypes() {
        return {
            patient: PropTypes.object,
            getAllPatient: PropTypes.func

        }
    }

    constructor(props) {
        super(props);
        this.patient = this.props.patient;
        this.getAllPatient = this.props.getAllPatient;
    }

    update(id, fullName ,contactNumber, language, age, gender, gudianContactNumber) {
        var updatedName = prompt("Please enter updated Name:",fullName );
        var updatedconactnum = prompt("Please enter updated phonenumber:", contactNumber);
        var updatedlanguage = prompt("Please enter updated Language:", language);
        var updatedage = prompt("Please enter updated Age:", age);
        var updatedgender = prompt("Please enter updated Gender:", gender);
        var updatedgadcontactnum = prompt("Please enter updated Gudian PhoneNumber:", gudianContactNumber);
        axios.put('http://localhost:8080/patients/' + id, {fullName: updatedName, contactNumber:updatedconactnum,language:updatedlanguage, age:updatedage, gender:updatedgender, gudianContactNumber:updatedgadcontactnum}).then(results => {
            if(results.status == 200) {
                this.getAllPatient();
            }

        })

    }

    delete(id) {
        axios.delete('http://localhost:8080/patients/' + id).then(results => {
            if(results.status == 200) {
                this.getAllPatient();
            }
        })
    }

    render() {
        return <tr>
            <td>{this.patient.id}</td>
            <td>{this.patient.fullName}</td>
            <td>{this.patient.contactNumber}</td>
            <td>{this.patient.language}</td>
            <td>{this.patient.age}</td>
            <td>{this.patient.gender}</td>
            <td>{this.patient.gudianContactNumber}</td>
            <button onClick={(e) => this.update(this.patient.id,this.patient.fullName,this.patient.contactNumber,this.patient.language,this.patient.age,this.patient.gender,this.patient.gudianContactNumber)}>Update</button>&nbsp;
            <button onClick={(e) => this.delete(this.patient.id)}>Delete</button>
        </tr>
    }
}
