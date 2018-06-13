'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import Getdate  from '../Income/Getdate';
import Income   from '../Income/Incomes';

export default class income extends Component {
    constructor(props) {
        super(props);
        this.state={
            Income:[],
            Amount:[]
        }
        
    }

    getdayincome(data){
        axios.get('http://localhost:8080/payment/income/'+data).then(res => {
            this.setState({
                Income: res.data.data
            })
        })
    }

    getdayamount(data){
        axios.get('http://localhost:8080/payment/income/fee'+data).then(res => {
            this.setState({
                Amount: res.data.data
            })
        })
    }

    
    
    render() {
        return <div>
            <h3>income</h3>
            <Getdate getdayincome={data => this.getdayincome(data)} getdayamount={ data => this.getdayamount(data)}/>
            <Income Income={this.state.Income} getdayincome = {() => this.getdayincome()} Amount={this.state.Amount} getdayamount={()=> this.getdayamount()}/>
            
        </div>;
    }
}