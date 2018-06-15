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
