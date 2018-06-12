const Express = require('express');
const Controller = require('../Controllers/clinicController');
const router = Express.Router();

router.post('/clinic',function(req,res){
    Controller.addClinic(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/clinic/:Name',function (req,res) {
    Controller.findClinic(req.params.Name).then(function (data) {
        res.status(data.status).send({data:data.clinicdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.get('/clinic',function (req,res) {
    Controller.findAllClinic(req.params.date).then(function (data) {
        res.status(data.status).send({data:data.clinicsdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.put('/clinic/:Name',function (req,res) {
    Controller.updateClinic(req.params.Name,req.body).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});
