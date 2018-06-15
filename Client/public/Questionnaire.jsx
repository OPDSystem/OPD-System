'use strict';

import React, {Component} from 'react';
import axios                from 'axios';
import AddQuestionnaire  from '../Questionnaire/AddQuestionnaire';
import Register from '../Questionnaire/Questionnaires';

export default class Quessionnaire extends Component {
    constructor(props) {
        super(props);
        this.state={
        questionnaires:[]
        }
        this.getAllQuestionnaire();
    }

    getAllQuestionnaire() {
        axios.get('http://localhost:8080/Questionnaire/').then(res => {
            this.setState({
                questionnaires: res.data.data
			});
        })
    }

    addQuestionnaire(data) {
   		axios.post('http://localhost:8080/Questionnaire/',{id:data.id, question:data.question, answer1:data.answer1, answer2:data.answer2, answer3:data.answer3, answer4:data.answer4, answer5:data.answer5}).then(result => {
   			if(result.status == 200) {
                   this.getAllQuestionnaire();
                   console.log("ADDED Questionnaire!!");
			}
		}).catch(err => {
			alert(err);
		})
   	}

   	render() {
        return <div class="mydesign2">
           <h2>Add Questionnaire</h2>
            <AddQuestionnaire addQuestionnaire={data => this.addQuestionnaire(data)}/>
            <Register  questionnaires={this.state.questionnaires} getAllQuestionnaire = {() => this.getAllQuestionnaire()}/>
        </div>;
	}
}
