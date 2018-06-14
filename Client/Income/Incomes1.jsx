'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Totalamo                 from './Income2';


export default class Incomes extends Component {



    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        let totals;

            totals = this.props.totals.map(function (data) {
                return(
                    <Totalamo  key={data._id} income2={data} getTotal={() => this.prop.getTotal()} />
                );
            });


        return <div class="table">
            <table>
                <thead>
                <tr>
                    <th>Total Income</th>
                    
                </tr>
                </thead>
                <tbody>
                {totals}
                </tbody>
            </table>
        </div>;
    }

}