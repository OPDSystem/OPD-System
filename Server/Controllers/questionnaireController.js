const mongoose = require("../DBSchema/DBConfig");
const questionnaire = mongoose.model("Quessionnaire");

var controller= function(){
    this.addQuestionnaire= function(data){
        return new Promise(function(resolve,reject){
            var questionnaireDetails= new questionnaire({
                question: data.question,
                answer1: data.answer1,
                answer2: data.answer2,
                answer3:data.answer3,
                answer4: data.answer4,
            }
            );
        })
    }
};