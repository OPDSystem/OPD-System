const mongoose = require("../DBSchema/DBConfig");
const clinic = mongoose.model("clinic");
const patientDetails= mongoose.model("patientDetails");
const description= mongoose.model("appointment");

var Controller= function(){
   /* this.viewQueue = function (id) {
        return new Promise(function (resolve, reject) {
            clinic.find({id:id}).exec().then(function (data) {
                patientDetails.find({id:{$in:data[0].id}}).exec().then(function (data) {
                    resolve({status: 200, message: "Successfully displaying my queue"});
                }).catch(function (reason) {
                    reject({status: 404, message: "Error" + reason});
                });
                }).catch(function (reason) {
                    reject({status:404, message:"Error" + reason})
            })

        })
    }

    this.getDescription=function(id){
        return new Promise(function (resolve, reject) {
            clinic.find({id:id}).exec().then(function (data) {
                description.find({id:{$in:data[0].id}}).exec().then(function (data) {
                    resolve({status: 200, message: "Successfully displaying my queue description"});
                }).catch(function (reason) {
                    reject({status: 404, message: "Error" + reason});
                });
                }).catch(function (reason) {
                    reject({status:404, message:"Error" + reason})
            })

        })
    }*/

    this.getQueue=function(doctor){
        return new Promise(function(resolve,reject){
            description.find({doctor:doctor}).exec().then(function(data){
                resolve({status: 200, searchedPatient: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search patient" + err});
            })
        })
    }

    this.getDescription=function(id){
        return new Promise(function(resolve,reject){
            description.find({id:id}).exec().then(function(data){
                resolve({status: 200, searchedPatient: data[0].description});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search patient" + err});
            })
        })
    }



    }

module.exports=new Controller();
 



