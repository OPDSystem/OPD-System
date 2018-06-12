const mongoose = require("../DBSchema/DBConfig");
const clinic = mongoose.model("clinicschema");

var Controller = function() {
    this.addClinic = function() {
        return new Promise(function(resolve, reject){
            var clinic = new clinicdetails({
                Name: data.clinicname,
                time:data.time,
                date:data.date,
                doctor:data.doctor,
                patients:data.patients

            });

            clinic.save().then(function(data) {
                resolve({status: 200, message: "Successfully Added"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to add clinic" + err});
            });
        });
    }

    this.updateClinic = function(Name, data) {
        return new Promise(function(resolve, reject) {
            clinicdetails.update({clinicname: Name}, data).then(function(data) {
                resolve({status: 200, message: "Successfully Updated"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to update clinic" + err});
            });
        });
    }

    this.deleteClinic = function(Name) {
        return new Promise(function(resolve, reject) {
            clinicdetails.delete(Name).then(function(data) {
                resolve({status: 200, message: "Successfully Deleted"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to delete clinic" + err});
            });
        });
    }

    this.findClinic = function(Name) {
        return new Promise(function(resolve, reject) {
            clinicdetails.find({clinicname: Name}).exec().then(function(data) {
                resolve({status: 200, clinic: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search clinic" + err});
            })
        })
    }

    this.findAllClinic = function() {
        return new Promise(function(resolve, reject) {
            clinicdetails.find().exec().then(function(data) {
                resolve({status: 200, clinics: data});
            }).reject(function(err) {
                reject({status: 500, message: "Failed to search clinics" + err});
            });
        });
    }
}

module.exports = new Controller();