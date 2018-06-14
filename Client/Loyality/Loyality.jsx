"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class Loyality extends Component {
  static get propTypes() {
    return {
      patient: PropTypes.object
    };
  }

  constructor(props) {
    super(props);
    this.patient = this.props.patient;
    this.totalLoyality = this.props.totalLoyality;
  }

  render() {
    return (
      <tr>
        <td>{this.patient.amount}</td>
      </tr>
    );
  }
}
