'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import Questionnaire                 from './Questionnaire';


export default class Questionnaires extends Component {
  static get propTypes() {
    return {
      questionnaires: PropTypes.array
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props)
  }

  render() {
    this.questionnaires = this.props.questionnaires;
    return <div>
      <table>
        <thead>
          <tr>
            <th>QUE ID</th>
            <th>QUESTIONS</th>
            <th>ANSWER 1</th>
            <th>ANSWER 2</th>
            <th>ANSWER 3</th>
            <th>ANSWER 4</th>
            <th>ANSWER 5</th>
          </tr>
        </thead>
        <tbody>
          {
              this.questionnaires.map(data => {
                  return <Questionnaire key={data.id} questionnaire={data} getAllQuestionnaire={() => this.props.getAllQuestionnaire()}/>
              })
          }
        </tbody>
      </table>
  </div>;
  }
}
