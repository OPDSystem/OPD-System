const mongoose = require("../DBSchema/DBConfig");
const patientDetails = mongoose.model("patientDetails");

var Controller = function() {
    this.addPatient = function(data) {
        return new Promise(function(resolve, reject){
            var patient = new patientDetails({
                id: data.id,
                fullName: data.fullName,
                contactNumber: data.contactNumber,
                language: data.language,
                age: data.age,
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
            patientDetails.update({id : id}, data).then(function(data) {
                resolve({status: 200, message: "Successfully Updated"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to update patient" + err});
            });
        });
    }

    this.deletePatient = function(id) {
        return new Promise(function(resolve, reject) {
            patientDetails.remove({id: id}).then(function(data) {
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
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search patients" + err});
            });
        });
    }

    this.findPatient = function(id) {
        return new Promise(function(resolve, reject) {
            patientDetails.find({id: id}).exec().then(function(data) {
                resolve({status: 200, searchedPatient: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search patient" + err});
            })
        })
    }

    this.checkName = function(id) {
        return new Promise(function(resolve, reject) {
            patientDetails.find({id: id}).exec().then(function(data) {
                resolve({status: 200, searchedPatient: data[0].fullName});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search patient" + err});
            })
        })
    }

    this.findPatientByName = function(name) {
        return new Promise(function(resolve, reject) {
            patientDetails.find({fullName: name}).exec().then(function(data) {
                resolve({status: 200, patientByName: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search patient" + err});
            })
        })
    }
}

module.exports = new Controller();