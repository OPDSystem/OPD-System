'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class PrintInvoice extends Component{
    constructor(props) {
        super(props);
        
    }

    printfrom(){
        var chart = new CanvasJS.Chart("chartContainer", {
            theme: "theme2",
            title:{
                text: "Print Chart using print() method"              
            },
            data: [              
            {
                type: "column",
                dataPoints: [
                    { label: "apple",  y: 10  },
                    { label: "orange", y: 15  },
                    { label: "banana", y: 25  },
                    { label: "mango",  y: 30  },
                    { label: "grape",  y: 28  }
                ]
            }
            ]
        });
      
        chart.render();
       }
        
   
    render() {
        return <div>
            
        </div>;
    }
}