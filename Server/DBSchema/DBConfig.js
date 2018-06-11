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
    id:{
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
    }
});

//IT16033856

var patientDetails = new Schema({
    id: {
        type: String,
        require: true
    },
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
Mongoose.model('Customer',CustomerSchema);
Mongoose.model('Income', IncomeSchema);

Mongoose.connect('mongodb://127.0.0.1:27017/OPD', function (err) {
    if(err)
    {
        console.log(err);
        process.exit(-1);
    }
    console.log("DB Connected");
})

module.exports = Mongoose;


