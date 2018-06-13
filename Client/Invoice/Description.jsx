'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";

export default class Description extends Component {


    constructor(props) {
        super(props);

    }



    render() {
        return <tr>
            <td>{this.props.recipt.Description}</td>
            <td>{this.props.recipt.Unit}</td>
            <td>{this.props.recipt.Price}</td>
            <td>{this.props.recipt.Total}</td>
        </tr>
    }

}