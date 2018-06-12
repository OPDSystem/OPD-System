const express = require("express");
const patientController = require("../Controllers/patientController");

var router = express.Router();

router.get("/", function(request, response) {
    patientController.findAllPatient().then(function(data) {
        response.status(data.status).send({data: data.searchedPatients});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    })
})