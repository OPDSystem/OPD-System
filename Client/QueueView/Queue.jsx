"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Patient extends Component {
  static get propTypes() {
    return {
      patient: PropTypes.object,
      getOnePatient: PropTypes.func,
      
    };
  }

  constructor(props) {
    super(props);
    this.patient = this.props.patient;
    this.getOnePatient = this.props.getOnePatient;
    var status;
    
    
  }

   

  
  


  render() {
    return (
      <tr>
        <td>{this.patient.id}</td>
        <td>{this.patient.description}</td>
        
      </tr>
    );
  }
}