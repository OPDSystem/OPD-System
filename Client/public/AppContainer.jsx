'use strict';

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';




import Income from './Income';
import Invoice from './Invoice';
import Paymentdetails from './Paymentdetails';
import Patient   from './Patient'


export default class AppContainer extends Component {
    constructor(props) {
        super(props);
    }




    render() {
        return <div>
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
                            <Link to="/Patient">Patient</Link>
                        </div>
                    </div>
                    <Route exact path="/Invoice" render={props => {
                        return <Invoice/>
                    }}/>
                    <Route path="/Income" render={props => {
                        return <Income/>
                    }}/>
                    <Route path="/Paymentdetails" render={props => {
                        return <Paymentdetails/>
                    }}/>
                    <Route path="/Patient" render={props => {
                        return <Patient/>
                    }}/>
                </div>
            </Router>
            
        </div>;
        </div>;
    }
}
