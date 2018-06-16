"use strict";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Income from "./Income";
import Invoice from "./Invoice";
import Paymentdetails from "./Paymentdetails";
import Registeration from "./RegisterPatients";
import ManagePatients from "./ManagePatients";
import AppointmentView from "./AppointmentView";
import Appointment from "./Appointment";
import ClinicView from "./ClinicView";
import Clinic from "./Clinic";
import Questionnaire from "./Questionnaire";
import Queue from "./QueueView";
import AppointmentPay from "./AppointmentPay";
import Loyality from "./Loyality";
import Payment from "./Payment";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1 class="myheading">K.R.S.V HOSPITAL</h1>
          <Router>
            <div>
              <div className="column" class="mydesign1">
                <div>
                  <Link to="/">Dashboard</Link>
                </div>
                <div>
                  <Link to="/Registeration">Register Patient</Link>
                </div>
                <div>
                  <Link to="/ManagePatients">Manage Patients</Link>
                </div>
                <div>
                  <Link to="/Clinic">Add Doctors to Clinic</Link>
                </div>
                <div>
                  <Link to="/Appointment">Add Appointment</Link>
                </div>
                <div>
                  <Link to="/Queue">Queue</Link>
                </div>
                <div>
                  <Link to="/ClinicView">Clinic View</Link>
                </div>
                <div>
                  <Link to="/AppointmentView">Appointment View</Link>
                </div>
                <div>
                  <Link to="/Invoice">Billing</Link>
                </div>
                <div>
                  <Link to="/Income">Income Per Day</Link>
                </div>
                <div>
                  <Link to="/Paymentdetails">Patient Payment Details</Link>
                </div>
                <div>
                  <Link to="/Loyality">Calculate Loyality</Link>
                </div>
                <div>
                  <Link to="/Questionnaire">Questionnaire</Link>
                </div>
                <div>
                  <Link to="/AppointmentPay">Calculate Appointment Fee</Link>
                </div>
              </div>
              <Route
                exact
                path="/"
                render={props => {
                  return <Payment />;
                }}
              />
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
                path="/Registeration"
                render={props => {
                  return <Registeration />;
                }}
              />
              <Route
                path="/ManagePatients"
                render={props => {
                  return <ManagePatients />;
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
              <Route
                path="/AppointmentPay"
                render={props => {
                  return <AppointmentPay />;
                }}
              />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
