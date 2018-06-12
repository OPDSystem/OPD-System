const express = require("express");
const queueController = require("../Controllers/queueController");

var router = express.Router();

router.get("/id", function(request, response) {
    queueController.viewQueue().then(function(data) {
        response.status(data.status).send({data: data.viewedPatients});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

module.exports = router;
