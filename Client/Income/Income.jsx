'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";

export default class Income extends Component {


    constructor(props) {
        super(props);

    }



    render() {
        return <tr>
            <td>{this.props.income.id}</td>
            <td>{this.props.income.date}</td>
            <td>{this.props.income.amount}</td>
        </tr>
    }

}
