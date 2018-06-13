'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import Searchpatient  from '../PatientView/SearchPatient';
import Register from '../Patient/Patients';

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

    }

   	render() {
        return <div>
           <h2>PATIENT VIEW</h2>
            <Searchpatient getOnePatient={id => this.getOnePatient(id)}/>
            <Register patients={this.state.patients} getAllPatient = {() => this.getAllPatient()}/>
        </div>;
	}
}
