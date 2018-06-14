'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";

export default class Income extends Component {

    static get propTypes() {
        return {
          total: PropTypes.number,
          getTotal:PropTypes.func
        };
      }

    constructor(props) {
        super(props);
        

    }



    render() {
        return <tr>
            <td>{this.props.income._id}</td>
            <td>{this.props.income.date}</td>
            <td>{this.props.income.amount}</td>
        </tr>
    }

}
