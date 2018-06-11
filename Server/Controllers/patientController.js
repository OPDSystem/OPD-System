const mongoose = require("../DBSchema/DBConfig");
const patientDetails = mongoose.model("patientDetails");

var Controller = function() {
    this.addPatient = function() {
        return new Promise(function(resolve, reject){
            var patient = new patientDetails({
                fullName: data.fullName,
                contactNumber: data.contactNumber,
                language: data.language,
                dob: data.dob,
                gender: data.gender,
                gudianContactNumber: data.gudianContactNumber
            });

            patient.save().then(function() {
                resolve({status: 200, message: "Successfully Added"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to add patient" + err});
            });
        });
    }
}

module.exports = new Controller();