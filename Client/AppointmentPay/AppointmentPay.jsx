'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class AppointmentPay extends Component {
    static get propTypes() {
        return {
            appointmentpay: PropTypes.object,
            getOneDoctor: PropTypes.func,
        }
    }

    constructor(props) {
        super(props);
        this.appointmentpay = this.props.appointmentpay;
        this.getOneDoctor = this.props.getOneDoctor;
    }

    render() {
        return <tr>
            
        </tr>
    }
}
