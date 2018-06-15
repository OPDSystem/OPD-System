'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import AddDoctor  from '../clinic/AddDoctor';
import Register from '../Clinic/Clinics';

export default class Clinic extends Component {
    constructor(props) {
        super(props);
        this.state={
        clinics:[]
        }
        this.getAllDoctors();
    }

    getAllDoctors() {
        axios.get('http://localhost:8080/clinic/').then(res => {
            this.setState({
				clinics: res.data.data
			});
        })
    }

   	addDoctor(data) {
   		axios.post('http://localhost:8080/clinic/',{doctor:data.doctor, time:data.time, date:data.date}).then(result => {
   			if(result.status == 200) {
                   this.getAllDoctors();
                   console.log("ADDED!!");
			}
		}).catch(err => {
			alert(err);
		})
   	}

   	render() {
        return <div class="mydesign2">
           <h2>Add Doctors to Clinic</h2>
           <hr/>
            <AddDoctor addDoctor={data => this.addDoctor(data)}/>
            <Register clinics={this.state.clinics} getAllDoctors = {() => this.getAllDoctors()}/>
        </div>;
	}
}
