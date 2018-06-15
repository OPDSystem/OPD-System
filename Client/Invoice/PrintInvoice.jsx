'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class PrintInvoice extends Component{
    constructor(props) {
        super(props);
        
    }

    printfrom(printSectionId){
        let innerContents = document.getElementById(printSectionId).innerHTML;
        let popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head> <link rel="stylesheet" ></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
       }
        
   
    render() {
        return <div>
            <a titlt="print screen" alt="print screen" onLoad={this.myFunction()} target="_blank">print</a>
        </div>;
    }
}