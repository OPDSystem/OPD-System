'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";


export default class Income2 extends Component {


    constructor(props) {
        super(props);
    
    }



    render() {
        return <tr>
            <td>{this.props.income2.total}</td>
        </tr>
    }

}
