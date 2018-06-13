'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Incomeamo                 from './Income';
import Totalamo                 from './Income1';


export default class Incomes extends Component {



    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        let Income;

            Income = this.props.Income.map(function (data) {
                return(
                    <Incomeamo key={data._id} income={data} getdayincome={() => this.prop.getdayincome()} />
                );
            });


        return <div class="table">
            <table>
                <thead>
                <tr>
                    <th>Recipt Id</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {Income}
                </tbody>
            </table>
        </div>;
    }

}