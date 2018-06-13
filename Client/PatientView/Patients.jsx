'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Patient                 from './Patient';


export default class Patients extends Component {
  static get propTypes() {
    return {
      patients: PropTypes.array
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render() {
    this.patients = this.props.patients;
    return <div class="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Num</th>
            <th>Language</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Gudian PhoNum</th>
          </tr>
        </thead>
        <tbody>
          {
              this.patients.map(data => {
                  return <Patient key={data.id} patient={data} getOnePatient={() => this.props.getOnePatient()}/>
              })
          }
        </tbody>
      </table>
  </div>;
  }
}
