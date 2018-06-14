'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import AppointmentPay                 from './AppointmentPay';

export default class AppointmentPays extends Component {
  static get propTypes() {
    return {
        apppays: PropTypes.array
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render() {
    this.apppays = this.props.apppays;
    return <div>
  </div>;
  }
}
