const express = require("express");
const queueController = require("../Controllers/queueController");

var router = express.Router();

router.get("/:doctor", function(request, response) {
    queueController.getQueue(request.params.doctor).then(function(data) {
        response.status(data.status).send({data: data.searchedPatient});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

module.exports = router;
