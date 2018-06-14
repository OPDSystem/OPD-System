'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Queue                 from './Queue';


export default class Queues extends Component {
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
    return <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {
              this.patients.map(data => {
                  return <Queue key={data.id} patient={data} getAllPatient={() => this.props.getAllPatient()}/>
              })
          }
        </tbody>
      </table>
  </div>;
  }
}
