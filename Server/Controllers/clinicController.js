const mongoose = require("../DBSchema/DBConfig");
const clinic = mongoose.model("clinic");

var Controller = function() {
    this.assigndoctor = function(data) {
        return new Promise(function(resolve, reject){

            var clinicdetails = new clinic({

                id:data.id,
                doctor:data.doctor,
                time:data.time,
                date:data.date,
                patients:data.patients
            });

            clinicdetails.save().then(function(data) {
                resolve({status: 200, message: "Successfully Added"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to assign doctor" + err});
            });
        });
    }

    this.updateClinic = function(id, data) {
        return new Promise(function(resolve, reject) {
            clinic.update({id: id}, data).then(function(data) {
                resolve({status: 200, message: "Successfully Updated"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to update clinic" + err});
            });
        });
    }

    this.deleteClinic = function(id) {
        return new Promise(function(resolve, reject) {
            clinic.remove({id : id}).then(function(data) {
                resolve({status: 200, message: "Successfully Deleted"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to delete clinic" + err});
            });
        });
    }

    this.findClinic = function(date) {
        return new Promise(function(resolve, reject) {
            clinic.find({date: date}).exec().then(function(data) {
                resolve({status: 200, clinicdata: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search clinic" + err});
            })
        })
    }

    this.findAllClinic = function() {
        return new Promise(function(resolve, reject) {
            clinic.find().exec().then(function(data) {
                resolve({status: 200, clinicsdata: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search clinics" + err});
            });
        });
    }
}

module.exports = new Controller();