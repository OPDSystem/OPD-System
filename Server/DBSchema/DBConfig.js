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
    age: {
        type: Number,
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
    id:{
    type:String,
    require:true
    },
    doctor:{
        type: String,
        require:true
    },
    time:{
        type: Date,
        require: true
    },
    date:{
        type:Date,
        require:true
    },
    patients:[String]
})

var appointment= new Schema({
    
    id: {
        type: String, 
        require: true
},
   description: {
       type: String, 
       require: true
   },
   consult:{
       type:boolean,
       require:true
   }
    
})

var questionnaireSchema=new Schema({
    id:{
        type:String
    },
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



Mongoose.model("patientDetails", patientDetails);
Mongoose.model('Customer',CustomerSchema);
Mongoose.model('Income', IncomeSchema);
Mongoose.model('clinic',clinicschema);
Mongoose.model('Quessionnaire',questionnaireSchema);
Mongoose.model('Queue',description);

Mongoose.connect('mongodb://127.0.0.1:27017/OPD', function (err) {
    if(err)
    {
        console.log(err);
        process.exit(-1);
    }
    console.log("DB Connected");
})

module.exports = Mongoose;


