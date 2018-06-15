'use strict';

import React, {Component} from 'react';
import AddDes from '../Invoice/AddDescription';
import Describ from '../Invoice/Descriptions';
import Pay from '../Invoice/PrintInvoice';

import axios   from 'axios';

export default class Invoice extends Component {
    constructor(props) {
        super(props);
     
        this.state ={
            Recipt:[],
            Check:[]
        }
    }

    addDescrib(data){
        this.setState({
            Recipt:this.state.Recipt.concat({Description:data.Description, Unit:data.Unit , Price:data.Price, Total:data.Total, Totalamount:data.Totalamount})
            
        })
     
    }

    addPatient(data){
        axios.post('http://localhost:8080/payment/customer',{name:data.name, date:data.date, amount:data.Totalamount}).then(result => {
   			if(result.status == 200) {
                   
                   console.log("ADDED Cus!!");
			}
		})
    }

    addIncome(data){
        axios.post('http://localhost:8080/payment/income',{ date:data.date, amount:data.Totalamount}).then(result => {
   			if(result.status == 200) {
                  
                   console.log("ADDED inc!!");
			}
		})
    }
   
   myFunction(){
    window.print();
   }
    
    
    
    render() {
        return <div class="mydesign2">
            <h3>BILLING</h3>
            <hr/>
            <AddDes addDescrib={data => this.addDescrib(data)} addPatient={data =>this.addPatient(data)} addIncome={data => this.addIncome(data)}/>
            <Describ Recipt={this.state.Recipt}/> 
            <a titlt="print screen" alt="print screen" onLoad={this.myFunction()} target="_blank">print</a>
           
        </div>;
    }
}
