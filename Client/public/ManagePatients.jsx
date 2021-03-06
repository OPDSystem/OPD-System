"use strict";

import React, { Component } from "react";
import axios from "axios";
import Searchpatient from "../PatientView/SearchPatient";
import View from "../PatientView/PatientsTable";

export default class ManagePatients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
    this.getAllPatient();
  }

  getAllPatient() {
    axios.get("http://localhost:8080/patients/").then(res => {
      this.setState({
        patients: res.data.data
      });
    });
  }

  getOnePatient(id) {
    axios.get("http://localhost:8080/patients/patientName/" + id).then(res => {
      this.setState({
        patients: res.data.data
      });
    });
  }

  render() {
    return (
      <div class="mydesign2">
        <h2>MANAGE PATIENTS</h2>
        <hr />
        <Searchpatient getOnePatient={id => this.getOnePatient(id)} />
        <View
          patients={this.state.patients}
          getAllPatient={() => this.getAllPatient()}
        />
      </div>
    );
  }
}
