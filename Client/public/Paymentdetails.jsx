'use strict';

import React, {Component} from 'react';

export default class Paymentdetails extends Component {
    constructor(props) {
        super(props);
        
    }

  getAllPaymentDetails() {
        axios.get("http://localhost:8081/customer/").then(res => {
          this.setState({
            payments: res.data
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
            <h3>Paymentdetails</h3>
        </div>;
    }
}
