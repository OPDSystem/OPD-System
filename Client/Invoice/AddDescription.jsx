'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"


export default class AddDescription extends Component{
    static get propTypes() {
        return {
            addPatient:PropTypes.func,
            addIncome:PropTypes.func,
            Description: PropTypes.string,
            Unit: PropTypes.number,
            Price: PropTypes.number,
            Total:PropTypes.number,
            Totalamount:PropTypes.number,
            name:PropTypes.string,
            data:PropTypes.string,

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

    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.name = event.target.value;
    }

    onDateChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.date = event.target.value;
    }

    onChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.date = event.target.value;
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.Total =(this.Unit * this.Price);
        this.Totalamount =(this.Totalamount + this.Total) ;
        
            this.props.addDescrib({Description:this.Description, Unit:this.Unit, Price:this.Price, Total:this.Total, Totalamount:this.Totalamount});
            
        }

        onNameSubmit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.name = this.name;
            this.date = this.date;
                
            }

            onPaySubmit(event) {
                event.preventDefault();
                event.stopPropagation();
                this.props.addPatient({name:this.name,date:this.date,Totalamount:this.Totalamount});
                this.props.addIncome({date:this.date,Totalamount:this.Totalamount});
                    
                }

    render() {
        return <div >
            <div class = "form">
            <form onSubmit={event => this.onNameSubmit(event)}>
                <div>
                <label for="name">Patient ID:</label>
                <div />
                <input type="text" id="name" onChange={event => this.onNameChange(event)}/>
                </div>
                <div>
                <label for ="Date">Date:</label>
                <div />
                <input type="date" id="Date" onChange={event => this.onDateChange(event)}/>
                </div>
            </form>
            </div>

            <div class = "form">
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label for="describ">Description:</label>
                <div />
                <input type="text" id="describ" onChange={event => this.onDescriptionChange(event)}/>
                </div>
                <div>
                <label for ="unit">Unit:</label>
                <div />
                <input type="number" id="unit" onChange={event => this.onUnitChange(event)}/>
                </div>
                <div>
                <label for="price">Price:</label>
                <div />
                <input type="number" id="price" onChange={event => this.onPriceChange(event)}/>
                </div>
                <div>
                <button type="submit">Add</button>
                </div>
            </form>
            </div>
            <div>
            <h4>Patient ID  :{this.name}</h4>
            <h4>Date        :{this.date}</h4>
            <h4>Total Amount:{this.Totalamount} </h4>
            </div>
            <div class ="form">
            <form onSubmit={event => this.onPaySubmit(event)}>
            <button type ="submit"> PAY </button>
            </form>
            </div>
        </div>;
    }
}