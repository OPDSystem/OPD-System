'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";
import Total       from './Incomes1'

export default class Income1 extends Component {


    constructor(props) {
        super(props);
        this.total = 0;
        this.state={
            totals:[]
        }
    }

    getTotal(amount){
        this.setState({
            totals:this.state.totals.concat({total:amount.total})
            
        })
    }



    render() {
        return <div>
            <Total totals={this.state.totals}/>
        </div>;
    }

}
