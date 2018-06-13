'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class AddDescription extends Component{
    static get propTypes() {
        return {
            Description: PropTypes.string,
            Unit: PropTypes.number,
            Price: PropTypes.number,
            Total:PropTypes.number,
            Totalamount:PropTypes.number

        }
    }

    constructor(props) {
        super(props);
        this.Totalamount =0;
    }

    onDescriptionChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.Description = event.target.value;
    }

    onUnitChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.Unit = event.target.value;
    }

    onPriceChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.Price = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.Total =(this.Unit * this.Price);
        this.Totalamount =(this.Totalamount + this.Total) ;
        
            this.props.addDescrib({Description:this.Description, Unit:this.Unit, Price:this.Price, Total:this.Total, Totalamount:this.Totalamount});
            
        }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>Description:</label>
                </div>
                <div>
                <input type="text" onChange={event => this.onDescriptionChange(event)}/>
                </div>
                <div>
                <label>Unit:</label>
                </div>
                <div>
                <input type="text" onChange={event => this.onUnitChange(event)}/>
                </div>
                <div>
                <label>Price:</label>
                </div>
                <div>
                <input type="text" onChange={event => this.onPriceChange(event)}/>
                </div>
                <div>
                <button type="submit">Add</button>
                </div>
            </form>
        </div>;
    }
}