'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Appointment                 from './Appointment';


export default class Patients extends Component {
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
          <th>Paatient ID</th>
            <th>Doctor ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
              this.appointments.map(data => {
                  return <Appointment key={data.id} appointment={data} getallAppointments={() => this.props.getallAppointments()}/>
              })
          }
        </tbody>
      </table>
  </div>;
  }
}
