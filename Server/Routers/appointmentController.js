const mongoose = require("../DBSchema/DBConfig");
const appointment = mongoose.model("appointment");

var Controller = function() {
    this.doctorconsult = function(data) {
        return new Promise(function(resolve, reject){
            var appointmentdetails = new appointment({
                id:data.id,
                description:data.description,
                doctor:data.doctor
            });

            appointmentdetails.save().then(function(data) {
                resolve({status: 200, message: "Appointment made successfully"});
            }).catch(function(err) {
                reject({status: 500, message: "Appointment cannot be made" + err});
            });
        });
    }

    this.changedoc = function(id, data) {
        return new Promise(function(resolve, reject) {
            appointment.update({id: id}, data).then(function(data) {
                resolve({status: 200, message: "Successfully changed to another doctor"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to assign a new doctor" + err});
            });
        });
    }

    this.deleteappointment = function(id) {
        return new Promise(function(resolve, reject) {
            appointment.remove({id : id}).then(function(data) {
                resolve({status: 200, message: "Successfully Deleted"});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to delete Appointment" + err});
            });
        });
    }

    this.viewAppointment = function(id) {
        return new Promise(function(resolve, reject) {
            appointment.find({id: id}).exec().then(function(data) {
                resolve({status: 200, appointmentdata: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search Appointment" + err});
            })
        })
    }

    this.findAllAppointment = function() {
        return new Promise(function(resolve, reject) {
            appointment.find().exec().then(function(data) {
                resolve({status: 200, appointmentsdata: data});
            }).catch(function(err) {
                reject({status: 500, message: "Failed to search Appointments" + err});
            });
        });
    }

}

module.exports = new Controller();