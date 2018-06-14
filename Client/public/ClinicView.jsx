'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import Searchclinic  from '../clinicView/SearchClinic';
import View from '../ClinicView/Clinics';

export default class ClinicView extends Component {
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

    getOneClinic(date){
        axios.get('http://localhost:8080/clinic/'+date).then(res => {
            this.setState({
				clinics: res.data.data
			});
        })
    }

   	render() {
        return <div>
           <h2>Clinic View</h2>
            <Searchclinic getOneClinic={date => this.getOneClinic(date)}/>
            <View clinics={this.state.clinics} getAllDoctors = {() => this.getAllDoctors()}/>
        </div>;
	}
}
