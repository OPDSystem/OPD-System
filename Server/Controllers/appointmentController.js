const mongoose = require("../DBSchema/DBConfig");
const appointment = mongoose.model("appointment");

var Controller = function() {
    this.doctorconsult = function() {
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
}