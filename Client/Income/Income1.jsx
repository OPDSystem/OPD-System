'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";

export default class Income1 extends Component {


    constructor(props) {
        super(props);
        this.total = 0;
    }

    getTotal(amount){
        this.total={amount}
    }



    render() {
        return <tr>
            <td>{this.props.incomes.data}</td>
        </tr>
    }

}
