"use strict";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Income from "./Income";
import Invoice from "./Invoice";
import Paymentdetails from "./Paymentdetails";
import Patient from "./Patient";
import PatientView from "./PatientView";
import AppointmentView from "./AppointmentView";
import Appointment from "./Appointment";
import ClinicView from "./ClinicView";
import Clinic from "./Clinic";
import Questionnaire from "./Questionnaire";
import Queue from "./QueueView";
import Loyality from "./Loyality";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h3>payment</h3>
          <Router>
            <div>
              <div className="row">
                <div className="col-sm">
                  <Link to="/Invoice">Invoice</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Income">Income</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Paymentdetails">Paymentdetails</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Patient">Register Patient</Link>
                </div>
                <div className="col-sm">
                  <Link to="/PatientView">Patient View</Link>
                </div>
                <div className="col-sm">
                  <Link to="/AppointmentView">Appointment View</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Appointment">Add Appointment</Link>
                </div>
                <div className="col-sm">
                  <Link to="/ClinicView">Clinic View</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Clinic">Add Doctors to Clinic</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Questionnaire">Questionnaire</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Queue">Queue</Link>
                </div>
                <div className="col-sm">
                  <Link to="/Loyality">Calculate Loyality</Link>
                </div>
              </div>
              <Route
                exact
                path="/Invoice"
                render={props => {
                  return <Invoice />;
                }}
              />
              <Route
                path="/Income"
                render={props => {
                  return <Income />;
                }}
              />
              <Route
                path="/Paymentdetails"
                render={props => {
                  return <Paymentdetails />;
                }}
              />
              <Route
                path="/Patient"
                render={props => {
                  return <Patient />;
                }}
              />
              <Route
                path="/PatientView"
                render={props => {
                  return <PatientView />;
                }}
              />
              <Route
                path="/AppointmentView"
                render={props => {
                  return <AppointmentView />;
                }}
              />
              <Route
                path="/Appointment"
                render={props => {
                  return <Appointment />;
                }}
              />
              <Route
                path="/ClinicView"
                render={props => {
                  return <ClinicView />;
                }}
              />
              <Route
                path="/Clinic"
                render={props => {
                  return <Clinic />;
                }}
              />
              <Route
                path="/Questionnaire"
                render={props => {
                  return <Questionnaire />;
                }}
              />
              <Route
                path="/Queue"
                render={props => {
                  return <Queue />;
                }}
              />
              <Route
                path="/Loyality"
                render={props => {
                  return <Loyality />;
                }}
              />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
