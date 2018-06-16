'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"

//import {Layer, Rect, Stage, Group} from 'react-konva';

export default class PrintInvoice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
          };
          this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
          color: Konva.Util.getRandomColor()
        });
      }

    omponentDidMount() {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Basic Column Chart in React"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { y: 71, label: "Apple" },
                    { y: 55, label: "Mango" },
                    { y: 50, label: "Orange" },
                    { y: 65, label: "Banana" },
                    { y: 95, label: "Pineapple" },
                    { y: 68, label: "Pears" },
                    { y: 28, label: "Grapes" },
                    { y: 34, label: "Lychee" },
                    { y: 14, label: "Jackfruit" }
                ]
            }]
        });
        chart.render();
      }
        
   
    render() {
        return 
            <div>
        <Rect
                x={10} y={10} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={this.handleClick}
            />
        </div>;
    }
}