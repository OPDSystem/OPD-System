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

        let Amount;

            Amount = this.props.Amount.map(function (data) {
                return(
                    <Totalamo key={data.data} incomes={data} getdayamount={() => this.prop.getdayamount()} />
                );
            });
           
        


        return <div>
            <table>
                <tbody>
                <tr>
                    <th>Recipt Id</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                {Income}
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <th>Total Amount</th>
                </tr>
                {Amount}
                </tbody>
            </table>
        </div>;
    }

}