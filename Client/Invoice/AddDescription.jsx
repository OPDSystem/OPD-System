'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"
import axios   from 'axios';

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
            cid:PropTypes.string
           

        }
    }

    constructor(props) {
        super(props);
        this.Totalamount =0;
        this.state={
            Check:[]
        }
        
    }

    printfrom(printSectionId){
        let innerContents = document.getElementById(printSectionId).innerHTML;
        let popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head> <link rel="stylesheet" ></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
       }

    CheckName(id){
        axios.get('http://localhost:8080/patients/check/'+id).then(res => {
            this.setState({
                Check: res.data.data,     
            })

            document.getElementById("name").defaultValue = this.state.Check;
           
        })
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

    onIDChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.cid = event.target.value;
        
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

                onCheckSubmit(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.CheckName(this.cid);
                        
                    }

               

    render() {
        return <div >

            <form onSubmit={event => this.onCheckSubmit(event)}>
                <div>
                <label for="date">Patient ID:</label>
                </div>
                <div>
                <input type="text" id="date" onChange={event => this.onIDChange(event)}/>
                <div />
                <button type="submit">Get Name</button>
                </div>
            </form>




            <div class = "form">
            <form onSubmit={event => this.onNameSubmit(event)}>
                <div>
                <label for="name">Name:</label>
                <div />
                <input type="text" id="name" disabled onChange={event => this.onNameChange(event)}/>
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
            <div id="printSectionId">
            <h4>Patient ID  :{this.cid}</h4>
            <h4>Date        :{this.date}</h4>
            <h4>Total Amount:{this.Totalamount} </h4>
            </div>
            <div class ="form">
            <form onSubmit={event => this.onPaySubmit(event)}>
            <button type ="submit"> PAY </button>
            </form>
            <button type ="submit" onSubmit={this.printfrom('printSectionId')}> PRINT BILL </button>
            </div>
        </div>;
    }
}