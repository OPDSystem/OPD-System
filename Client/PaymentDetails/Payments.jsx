'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Payment                 from './Payment';


export default class Payments extends Component {
  static get propTypes() {
    return {
      payments: PropTypes.array
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render() {
    this.payments = this.props.payments;
    return <div class="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Total Amount</th>
            
          </tr>
        </thead>
        <tbody>
          {
              this.payments.map(data => {
                  return <Payment key={data._id} payment={data} getAllPaymentDetails={() => this.props.getAllPaymentDetails()}/>
              })
          }
        </tbody>
      </table>
  </div>;
  }
}
