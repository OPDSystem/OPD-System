'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import GetPay  from '../AppointmentPay/GetPay';

export default class AppointmentPay extends Component {
    constructor(props) {
        super(props);
        this.state={
        apppays:[]
        }
    }

    getOneDoctor(doctor){
        axios.get('http://localhost:8081/apppay/'+doctor).then(res => {
            this.setState({
				apppays: res.data
			});
        })
    }

   	render() {
        return <div class="mydesign2">
           <h2>Appointments Annual Pay</h2>
           <hr/>
            <GetPay getOneDoctor={doctor => this.getOneDoctor(doctor)}/>
            <h3>Annual Pay : {this.state.apppays}</h3>
        </div>;
	}
}
