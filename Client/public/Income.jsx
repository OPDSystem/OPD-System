'use strict';

import React, {Component} from 'react';
import axios from 'axios';
import Getdate  from '../Income/Getdate';
import Income   from '../Income/Incomes';
//mport GetTotal from '../Income/Income1';

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
                Income: res.data.data,
                
            })
        })
       
    }

    getdaytotalincome(data){
        axios.get('http://localhost:8080/payment/income/fee/'+data).then(res => {
            this.setState({
                Amount: res.data.data,
                
            })
            console.log(Amount);
        })
       
    }

   
    
    
    render() {
        return <div>
            <h3>income</h3>
            <Getdate getdaytotalincome={data => this.getdaytotalincome(data)}/>
            <Income Income={this.state.Income} getdayincome = {() => this.getdayincome()} />
           
        </div>;
    }
}
