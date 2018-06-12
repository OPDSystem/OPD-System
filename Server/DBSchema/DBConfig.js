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

var clinicschema= new Schema({
    clinicname:{
        type: String,
        require:true
    },
    time:{
        type: date,
        require: true
    },
    date:{
        type:date,
        require:true
    },
    doctor:{
        type:string,
        require:true
    },
    patients: [String]
})

var questionnaireSchema=new Schema({
     question : {
         type : String 
},
    answer1 : {
         type : String
},
    answer2 : {
          type : String
},
    answer3 : {
         type : String
},
    answer4 : {
        type : String
},
    answer5 : {
         type : String
}
});

var patientQueue= new Schema({
    patientId: {
         type: Schema.Types.ObjectId, ref: 'patient'
    },
         doctorId: {
             type: Schema.Types.ObjectId, ref: 'systemUser'
    },
         relative: {
             type: String, required: false
    },
        illness: {
            type: String, required: true
        }, // nature of the illness
         status: {
             type: String, required: true, default: 1
        }, // 1 - On the list, 0 - Appointed
         createdDateTime: {
              type: Date, default: Date.now 
        },
})

Mongoose.model("patientDetails", patientDetails);
Mongoose.model('Customer',CustomerSchema);
Mongoose.model('Income', IncomeSchema);
Mongoose.model('clinic',clinicschema);
Mongoose.model('Quessionnaire',questionnaireSchema);
Mongoose.model('Queue',patientQueue);

Mongoose.connect('mongodb://127.0.0.1:27017/OPD', function (err) {
    if(err)
    {
        console.log(err);
        process.exit(-1);
    }
    console.log("DB Connected");
})

module.exports = Mongoose;


