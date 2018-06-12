const express = require("express");
const patientController = require("../Controllers/patientController");

var router = express.Router();

router.get("/", function(request, response) {
    patientController.findAllPatient().then(function(data) {
        response.status(data.status).send({data: data.searchedPatients});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

router.get("/:id", function(request, response) {
    patientController.findPatient(request.params.id).then(function(data) {
        response.status(data.status).send({data: data.searchedPatient});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

router.post("/", function(request, response) {
    patientController.addPatient(request.body).then(function(data) {
        response.status(data.status).send({message: data.message});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

router.put("/:id", function(request, response) {
    patientController.updatePatient(request.params.id, request.body).then(function(data) {
        response.status(data.status).send({data: data.message})
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

router.delete("/:id", function(request, response) {
    patientController.deletePatient(request.params.id).then(function(data) {
        response.status(data.status).send({message: data.message})
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

module.exports = router;