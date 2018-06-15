'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types"
import axios from "axios";

export default class Myqueue extends Component{
    static get propTypes() {
        return {
           id: PropTypes.string,
           hold:PropTypes.string,
           did: PropTypes.string

        }
    }

    constructor(props) {
        super(props);
       //this.hold ="Off Hold" ;
       this.state={
           des:[]
       }
    }

    delete(id,doctor){
        var pid= id;
        //var pdescription = "Fever";
        var pdoctor = doctor;
        var edoctor ="Vithusan";
        
        axios.get('http://localhost:8080/queue/des/'+ id).then(res => {
            this.setState({
				des: res.data.data
			});
        })
        axios.delete('http://localhost:8080/appointment/' + id).then(results => {
          if(results.status == 200) {
             console.log("Patients Redirect!!")
             axios.post('http://localhost:8080/appointment/',{id:pid, doctor:edoctor, description:this.state.des}).then(result => {
                if(result.status == 200) {
                    console.log("ADDED!!");
       }
     })
          }
      })
      
      }




    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.id = event.target.value;
    }

    onIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.did = event.target.value;
    }

        onHoldSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.getOnePatient(this.id);
            this.hold ="Hold";
           
             
        }
    
        onHoldOffSubmit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.props.getOnePatient(this.id);
                this.hold = "ON Process";
                
                 
            }
    

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
            this.props.getOnePatient(this.id);
            this.hold = "ON Process";
            this.status="";
            document.getElementById("queue").defaultValue ="ID";  
             
        }

        onRedirectSubmit(event) {
            event.preventDefault();
            event.stopPropagation();
            this.delete(this.did,this.id);
            this.props.getOnePatient(this.id);
            this.status="Patient ID:"+this.did+" Redirect Doctor Vithusan";    
             
                 
            }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
                <div>
                <label>Doctor Name:</label>
                <div />
                <select onChange={event => this.onNameChange(event)}>
                   <option value="none">Select Doctor</option>
                   <option value="Yaathra">Yaathra</option>
                   <option value="DivaTJ">Diva TJ</option>
                   <option value="KeerthanaVije">Keerthana Vije</option>
                   <option value="Tharish">Tharish Thiva</option>
                   <option value="Mithra">Mithra</option>
                   <option value="Vithusan">Vithusan</option>
                   </select>
                <div />
                <button type="submit">Find</button>
                </div>
            </form>
            <div>
            <form onSubmit={event => this.onHoldSubmit(event)}>
            <button type = "hold"> Hold </button>
            </form>
            </div>

            <div>
            <form onSubmit={event => this.onHoldOffSubmit(event)}>
            <button type = "hold"> ON Process </button>
            </form>
            </div>
        
            <div>
            <h2>Status : {this.hold} </h2>
            </div>

            <div>
            <form onSubmit={event => this.onRedirectSubmit(event)}>
            <div>
            <label for="queue">Redirect Patient Id :</label>
            <div />
            <input type="text1" id="queue" onChange={event => this.onIdChange(event)}/>
            <button type = "hold"> Redirect </button>
            </div>
            </form>
            </div>

            <div>
            <h4>{this.status} </h4>
            </div>
        </div>;
    }
}