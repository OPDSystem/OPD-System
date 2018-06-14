const express = require("express");
const questionnaireController = require("../Controllers/questionnaireController");

var router = express.Router();

router.post("/", function(request, response) {
    questionnaireController.addQuestionnaire(request.body).then(function(data) {
        response.status(data.status).send({message: data.message});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

router.put("/:id", function(request, response) {
    questionnaireController.editQuestionnaire(request.params.id, request.body).then(function(data) {
        response.status(data.status).send({message: data.message})
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

router.delete("/:id", function(request, response) {
    questionnaireController.deleteQuestionnaire(request.params.id).then(function(data) {
        response.status(data.status).send({message: data.message})
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

router.get("/", function(request, response) {
    questionnaireController.findAllQuestionnaire().then(function(data) {
        response.status(data.status).send({data: data.displayingQuestionnaires});
    }).catch(function(err) {
        response.status(err.status).send({message: err.message});
    });
});

module.exports = router;