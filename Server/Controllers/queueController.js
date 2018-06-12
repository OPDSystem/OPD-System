const mongoose = require("../DBSchema/DBConfig");
const clinic = mongoose.model("clinic");
const patientDetails= mongoose.model("patientDetails");

var Controller= function(){
    this.viewQueue = function (id) {
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
    }

module.exports=new Controller();
 



