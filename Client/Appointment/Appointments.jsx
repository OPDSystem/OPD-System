'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Appointment       from './Appointment';


export default class getAppointmentvalue extends Component {
  static get propTypes() {
    return {
        appointments: PropTypes.array
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render() {
    this.appointments = this.props.appointments;
    return <div class="table">
      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Doctor</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
              this.appointments.map(data => {
                  return <Appointment key={data.id} appointment={data} getallAppointment={() => this.props.getallAppointment()}/>
              })
          }
        </tbody>
      </table>
  </div>;
  }
}
