'use strict';

import React, {Component} from 'react';
import axios from "axios";
import Search from "../PaymentDetails/GetPaymentDetails";
import View from "../PaymentDetails/Payments";

export default class Paymentdetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            payments:[]
        }
        this.getAllPaymentDetails();
    }

    getAllPaymentDetails() {
        axios.get("http://localhost:8080/payment/customer/").then(res => {
          this.setState({
            payments: res.data.data
          });
        });
      }
    
      getPaymentDetails(id) {
        axios.get("http://localhost:8080/payment/customer/" + id).then(res => {
          this.setState({
            payments: res.data.data
          });
        });
      }

    
    render() {
        return <div>
            <h3>PATIENT PAYMENT DETAILS</h3>
            <hr/>

            <Search getPaymentDetails={id => this.getPaymentDetails(id)} />
            <View
          payments={this.state.payments}
          getAllPaymentDetails={() => this.getAllPaymentDetails()}
        />

        </div>;
    }
}
