'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class PrintInvoice extends Component{
    constructor(props) {
        super(props);
        
    }

   
    render() {
        return <div>
            <h3> name:{this.props.name}</h3>
        </div>;
    }
}