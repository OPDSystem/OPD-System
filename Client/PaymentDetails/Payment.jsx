"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Payment extends Component {
  static get propTypes() {
    return {
      payment: PropTypes.object,
      getAllPaymentDetails: PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.payment = this.props.payment;
    this. getAllPaymentDetails = this.props. getAllPaymentDetails;
  }

  

  render() {
    return (
      <tr>
        <td>{this.payment.id}</td>
        <td>{this.payment.name}</td>
        <td>{this.payment.date}</td>
        <td>{this.payment.amount}</td>
        
      </tr>
    );
  }
}
