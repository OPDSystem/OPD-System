const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

var CustomerSchema = new Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    description:[String]
});

var IncomeSchema = new Schema({

})

//IT16033856

var patientDetails = new Schema({
    fullName: {
        type: String,
        require: true
    },
    contactNumber: {
        type: Number,
        require: true
    },
    language: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    gudianContactNumber: {
        type: Number,
        require: true
    }
});

Mongoose.model("patientDetails", patientDetails);