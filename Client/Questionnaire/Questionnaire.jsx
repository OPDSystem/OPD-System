'use strict';
import React, {Component}   from 'react';
import PropTypes            from 'prop-types';
import axios                from 'axios';

export default class Questionnaire extends Component {
    static get propTypes() {
        return {
            questionnaire: PropTypes.object,
            getAllQuestionnaire: PropTypes.func

        }
    }

    constructor(props) {
        super(props);
        this.questionnaire= this.props.questionnaire;
        this.getAllQuestionnaire = this.props.getAllQuestionnaire;
    }

    update(id, question ,answer1, answer2, answer3, answer4, answer5) {
        var updatedquestion = prompt("Please enter updated question:",question );
        var updatedanswer1 = prompt("Please enter updated answer 1:", answer1);
        var updatedanswer2 = prompt("Please enter updated answer 2:", answer2);
        var updatedanswer3 = prompt("Please enter updated answer 3:", answer3);
        var updatedanswer4 = prompt("Please enter updated answer 4:", answer4);
        var updatedanswer5 = prompt("Please enter updated answer 5:", answer5);
        axios.put('http://localhost:8080/Questionnaire/' + id, {question: updatedquestion, answer1:updatedanswer1,answer2:updatedanswer2, answer3:updatedanswer3, answer4:updatedanswer4, answer5:updatedanswer5}).then(results => {
            if(results.status == 200) {
                this.getAllQuestionnaire();
            }

        })

    }

    delete(id) {
        axios.delete('http://localhost:8080/Questionnaire/' + id).then(results => {
            if(results.status == 200) {
                this.getAllQuestionnaire();
            }
        })
    }

    render() {
        return<tc>
           <li><b>Question ID:</b><td>{this.questionnaire.id}</td></li>
           <li><b>Question</b><td>{this.questionnaire.question}></td></li>
           <li><b>Answer 1</b><td>{this.questionnaire.answer1}</td></li>
            <li><b>Answer 2</b><td>{this.questionnaire.answer2}</td></li>
            <li><b>Answer 3</b><td>{this.questionnaire.answer3}</td></li>
           <li><b>Answer 4</b><td>{this.questionnaire.answer4}</td></li>
           <li><b>Answer 5</b><td>{this.questionnaire.answer5}</td></li>
           <button onClick={(e) => this.update(this.questionnaire.id,this.questionnaire.question,this.questionnaire.answer1,this.questionnaire.answer2,this.questionnaire.answer3,this.questionnaire.answer4,this.questionnaire.answer5)}><b>Update</b></button>&nbsp;
            <button onClick={(e) => this.delete(this.questionnaire.id)}><b>Delete</b></button>
        </tc>
       
    }
}
