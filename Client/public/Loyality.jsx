"use strict";

import React, { Component } from "react";
import axios from "axios";
import Searchpatient from "../Loyality/CalculateLoyality";
import View from "../Loyality/LoyalityInt";

export default class PatientView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
      totalLoyality: ""
    };
  }

  totalLoyality(id) {
    axios.get("http://localhost:8080/payment/customer/" + id).then(res => {
      this.setState({
        patients: res.data.data
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Loyality</h2>
        <Searchpatient totalLoyality={id => this.totalLoyality(id)} />
        <View patients={this.state.patients} />
      </div>
    );
  }
}
