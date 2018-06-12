const mongoose = require("../DBSchema/DBConfig");
const patientDetails = mongoose.model("patientDetails");

var Controller = function() {
    this.addPatient = function() {
        return new Promise(function(resolve, reject){
            var patient = new patientDetails({
                id: data.id,
                fullName: data.fullName,
                contactNumber: data.contactNumber,
                language: data.language,
                dob: data.dob,
                gender: data.gender,
                gudianContactNumber: data.gudianContactNumber
            });

            patient.save().then(function(data) {
                resolve({status: 200, message: "Successfully Added"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to add patient" + err});
            });
        });
    }

    this.updatePatient = function(id, data) {
        return new Promise(function(resolve, reject) {
            patientDetails.update({id: id}, data).then(function(data) {
                resolve({status: 200, message: "Successfully Updated"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to update patient" + err});
            });
        });
    }

    this.deletePatient = function(id) {
        return new Promise(function(resolve, reject) {
            patientDetails.delete(id).then(function(data) {
                resolve({status: 200, message: "Successfully Deleted"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to delete patient" + err});
            });
        });
    }

    this.findAllPatient = function() {
        return new Promise(function(resolve, reject) {
            patientDetails.find().exec().then(function(data) {
                resolve({status: 200, searchedPatients: data});
            }).reject(function(err) {
                reject({status: 500, message: "Failed to search patients" + err});
            });
        });
    }
}

module.exports = new Controller();