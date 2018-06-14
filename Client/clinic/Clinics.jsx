'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Clinic                 from './Clinic';


export default class Patients extends Component {
  static get propTypes() {
    return {
      clinics: PropTypes.array
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render() {
    this.clinics = this.props.clinics;
    return <div class="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>DOCTOR</th>
            <th>VISITING TIME</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {
              this.clinics.map(data => {
                  return <Clinic key={data.id} clinic={data} getAllDoctors={() => this.props.getAllDoctors()}/>
              })
          }
        </tbody>
      </table>
  </div>;
  }
}
