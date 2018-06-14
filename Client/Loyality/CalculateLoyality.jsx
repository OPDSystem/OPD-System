"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchPatient extends Component {
  static get propTypes() {
    return {
      name: PropTypes.string
    };
  }

  constructor(props) {
    super(props);
  }

  onNameChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.name = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.totalLoyality(this.name);
  }

  render() {
    return (
      <div class="form">
        <form onSubmit={event => this.onSubmit(event)}>
          <div>
            <label>Patient Name:</label>
          </div>
          <div>
            <input type="text" onChange={event => this.onNameChange(event)} />
            <div />
            <button type="Submit">Find</button>
          </div>
        </form>
      </div>
    );
  }
}
