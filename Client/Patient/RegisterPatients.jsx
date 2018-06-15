"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RegisterPatients extends Component {
  static get propTypes() {
    return {
      addPatient: PropTypes.func,
      id: PropTypes.string,
      name: PropTypes.string,
      contactnum: PropTypes.number,
      language: PropTypes.string,
      Age: PropTypes.number,
      gender: PropTypes.string,
      gadcontactnum: PropTypes.number
    };
  }

  constructor(props) {
    super(props);
  }

  onIdChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.id = event.target.value;
  }

  onPhoNumChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.contactnum = event.target.value;
  }

  onNameChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.name = event.target.value;
  }

  onLanguageChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.language = event.target.value;
  }

  onAgeChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.Age = event.target.value;
  }

  onGenderChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.gender = event.target.value;
  }

  onGPhoNumChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.gadcontactnum = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.addPatient({
      id: this.id,
      name: this.name,
      contactnum: this.contactnum,
      language: this.language,
      Age: this.Age,
      gender: this.gender,
      gadcontactnum: this.gadcontactnum
    });
  }

  render() {
    return (
      <div class="form">
        <form onSubmit={event => this.onSubmit(event)}>
          <label>id:</label>
          <div />
          <input type="text" onChange={event => this.onIdChange(event)} />
          <div />
          <label>Name:</label>
          <div />
          <input type="text" onChange={event => this.onNameChange(event)} />
          <div />
          <label>Phone Num:</label>
          <div />
          <input type="number" onChange={event => this.onPhoNumChange(event)} />
          <div />
          <label>Language:</label>
          <div />
          <input
            type="radio"
            name="language"
            value="Sinhala"
            onChange={event => this.onLanguageChange(event)}
          />
          Sinhala
          <input
            type="radio"
            name="language"
            value="Tamil"
            onChange={event => this.onLanguageChange(event)}
          />
          Tamil
          <input
            type="radio"
            name="language"
            value="English"
            onChange={event => this.onLanguageChange(event)}
          />
          English
          <div />
          <label>Age:</label>
          <div />
          <input
            type="number"
            min="1"
            max="115"
            onChange={event => this.onAgeChange(event)}
          />
          <div />
          <label>Gender:</label>
          <div />
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={event => this.onGenderChange(event)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={event => this.onGenderChange(event)}
          />
          Female
          <div />
          <label>Gudian Contact Num:</label>
          <div />
          <input
            type="number"
            onChange={event => this.onGPhoNumChange(event)}
          />
          <div />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
