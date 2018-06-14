'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import MyQueue  from '../QueueView/Myqueue';
import Register from '../Queue/Queues';

export default class QueueView extends Component {
    constructor(props) {
        super(props);
        this.state={
        patients:[]
        }
        this.getAllPatient();
    }

    getAllPatient(id) {
        axios.get('http://localhost:8080/appointment/').then(res => {
            this.setState({
				patients: res.data.data
			});
        })
    }

   
        
    

   	render() {
        return <div>
           <h2>MY PATIENTS VIEW</h2>
            
            <Register patients={this.state.patients} getAllPatient = {() => this.getAllPatient()}/>
        </div>;
	}
}