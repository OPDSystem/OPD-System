'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import GetPay  from '../AppointmentPay/GetPay';
import View from '../AppointmentPay/AppointmentPays';

export default class AppointmentPay extends Component {
    constructor(props) {
        super(props);
        this.state={
        apppays:[]
        }
        this.getOneDoctor();
    }

    getOneDoctor(doctor){
        axios.get('http://localhost:8080/apppay/'+doctor).then(res => {
            this.setState({
				apppays: res.data.data
			});
        })
    }

   	render() {
        return <div class="mydesign2">
           <h2>Appointments Annual Pay</h2>
           <hr/>
            <GetPay getOneDoctor={date => this.getOneDoctor(date)}/>
            <View apppays={this.state.apppays} getOneDoctor = {() => this.getOneDoctor()}/>
        </div>;
	}
}
