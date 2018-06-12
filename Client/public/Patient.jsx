'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import AddPatient  from '../Patient/AddPatient';
import Register from '../Patient/Patients';

export default class Patient extends Component {
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

   	addPatient(data) {
   		axios.post('http://localhost:8080/patients/',{id:data.id, fullName:data.name, contactNumber:data.contactnum, language:data.language, age:data.Age, gender:data.gender, gudianContactNumber:data.gadcontactnum}).then(result => {
   			if(result.status == 200) {
                   this.getAllPatient();
                   console.log("ADDED!!");
			}
		}).catch(err => {
			alert(err);
		})
   	}

   	render() {
        return <div>
           <h2>REGISTER PATIENTS</h2>
            <AddPatient addPatient={data => this.addPatient(data)}/>
            <Register patients={this.state.patients} getAllPatient = {() => this.getAllPatient()}/>
        </div>;
	}
}
