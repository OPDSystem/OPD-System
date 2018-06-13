'use strict';

import React, {Component} from 'react';
import AddDes from '../Invoice/AddDescription';
import Describ from '../Invoice/Descriptions';

export default class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state ={
            Recipt:[],
            Total:Number
        }
    }

    addDescrib(data){
        this.setState({
            Recipt:this.state.Recipt.concat({Description:data.Description, Unit:data.Unit , Price:data.Price, Total:data.Total, Totalamount:data.Totalamount})
            
        })
     
    }

    getTotal(data){
        this.setState({
            Total:this.state.Recipt.concat({Totalamount:data.Totalamount})
            
        })
     
    }
    
    render() {
        return <div>
            <h3>invoice</h3>
            <AddDes addDescrib={data => this.addDescrib(data)}/>
            <Describ Recipt={this.state.Recipt}/>
            <h3>Total Amount:{this.state.Recipt.Totalamount}</h3>
        </div>;
    }
}
