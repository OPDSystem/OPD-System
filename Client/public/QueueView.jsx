'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import SearchQueue from "../QueueView/SearchQueue";
import View from "../QueueView/Queues";


export default class QueueView extends Component {
    constructor(props) {
        super(props);
        this.state={
        patients:[]
        }
    
    }

    getOnePatient(id) {
        axios.get('http://localhost:8080/queue/'+ id).then(res => {
            this.setState({
				patients: res.data.data
			});
        })
    }

   
        
    

   	render() {
        return <div>
           <h2>MY PATIENTS VIEW</h2>
            <SearchQueue getOnePatient = {id => this.getOnePatient(id)} />
            <View patients={this.state.patients} />
        </div>;
	}
}