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
                answer5: data.answer5
            }
            );
            questionnaireDetails.save().then(function(data) {
                resolve({status: 200, message: "Successfully Added"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to add Questionnaire" + err});
            });
        })
    }

    this.editQuestionnaire= function(id,data){
        return new Promise(function(resolve, reject) {
            questionnaire.update({id: id}, data).then(function(data) {
                resolve({status: 200, message: "Successfully Updated questionnaire"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to update questionnaire" + err});
            });
        });
    }

    this.deleteQuestionnaire = function(id) {
        return new Promise(function(resolve, reject) {
            questionnaire.delete(id).then(function(data) {
                resolve({status: 200, message: "Successfully Deleted"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to delete patient" + err});
            });
        });
    }
};

module.exports = new Controller();