const Express = require('express');
const Controller = require('../Controllers/appointmentController');
const router = Express.Router();

router.post('/',function(req,res){
    Controller.doctorconsult(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/:id',function (req,res) {
    Controller.viewAppointment(req.params.id).then(function (data) {
        res.status(data.status).send({data:data.appointmentdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    });
});

router.get('/',function (req,res) {
    Controller.findAllAppointment().then(function (data) {
        res.status(data.status).send({data:data.appointmentsdata});
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    });
});

router.put('/:id',function (req,res) {
    Controller.changedoc(req.params.id,req.body).then(function (response) {
        res.status(response.status).send(response);
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    })

});

router.delete("/:id", function(req, res) {
    Controller.deleteappointment(req.params.id).then(function(data) {
        res.status(data.status).send({message: data.message})
    }).catch(function(err) {
        res.status(err.status).send({message: err.message});
    });
});

module.exports = router;