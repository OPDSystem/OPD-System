'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Describ                 from './Description';

export default class GetSubjects extends Component {



    constructor(props) {
        super(props);

    }

    componentWillReceiveProps(props) {
        this.setState(props)
    }

    render() {
        let Recipt;

            Recipt = this.props.Recipt.map(function (data) {
                return(
                    <Describ key={data.Description} recipt={data} addDescrib={() => this.prop.addDescrib()} />
                );
            });
        


        return <div class="table">
            <table>
                <tbody>
                <tr>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Price</th>
                    <th>Total Unit Price</th>

                </tr>
                {Recipt}
                </tbody>
            </table>
        </div>;
    }

}