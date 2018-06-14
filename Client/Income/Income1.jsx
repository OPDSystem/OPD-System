'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";

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
            <h3>Total Income:{this.total}</h3>
        </div>;
    }

}
