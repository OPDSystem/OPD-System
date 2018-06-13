'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import Searchpatient  from '../PatientView/SearchPatient';
import View from '../PatientView/Patients';

export default class PatientView extends Component {
    constructor(props) {
        super(props);
        this.state={
        patients:[]
        }
        this.getAllPatient();
    }

    getAllPatient() {
        axios.get('http://localhost:8080/patients/').then(res => {
            this.setState({
				patients: res.data.data
			});
        })
    }

    getOnePatient(id){
        axios.get('http://localhost:8080/patients/patientName/'+id).then(res => {
            this.setState({
				patients: res.data.data
			});
        })
    }

   	render() {
        return <div>
           <h2>PATIENT VIEW</h2>
            <Searchpatient getOnePatient={id => this.getOnePatient(id)}/>
            <View patients={this.state.patients} getOnePatient = {() => this.getOnePatient()}/>
        </div>;
	}
}