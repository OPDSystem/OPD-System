'use strict';

import React, {Component} 	from 'react';
import PropTypes 			from "prop-types";

export default class AddPatient extends Component {
    static get propTypes() {
        return {
            addPatient: PropTypes.func,
            id:PropTypes.string,
            name: PropTypes.string,
            contactnum:PropTypes.number,
            language:PropTypes.string,
            Age:PropTypes.number,
            gender:PropTypes.string,
            gadcontactnum:PropTypes.number
        }
    }

    constructor(props) {
       super(props);
    }

    onIdChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.id = event.target.value;
     }

    onPhoNumChange(event) {
       event.preventDefault();
       event.stopPropagation();
       this.contactnum = event.target.value;
    }

    onNameChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.name = event.target.value;
     }

     onLanguageChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.language = event.target.value;
     }

     onAgeChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.Age = event.target.value;
     }

     onGenderChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.gender = event.target.value;
     }

     onGPhoNumChange(event) {
        event.preventDefault();
        event.stopPropagation();
        this.gadcontactnum = event.target.value;
     }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
       
           this.props.addPatient({id:this.id, name:this.name, contactnum:this.contactnum, language:this.language, Age:this.Age, gender:this.gender, gadcontactnum:this.gadcontactnum});
           
        
    }

    render() {
        return <div>
            <form onSubmit={event => this.onSubmit(event)}>
               <label>id:</label>
               <input type="text" onChange={event => this.onIdChange(event)}/>
               <label>Name:</label>
               <input type="text" onChange={event => this.onNameChange(event)}/>
               <label>Phone Num:</label>
               <input type="text" onChange={event => this.onPhoNumChange(event)}/>
               <label>Language:</label>
               <input type="text" onChange={event => this.onLanguageChange(event)}/>
               <label>Age:</label>
               <input type="text" onChange={event => this.onAgeChange(event)}/>
               <label>Gender:</label>
               <input type="text" onChange={event => this.onGenderChange(event)}/>
               <label>Gudian Contact Num:</label>
               <input type="text" onChange={event => this.onGPhoNumChange(event)}/>
               <button type="submit">Add</button>
            </form>
        </div>;
    }
}
