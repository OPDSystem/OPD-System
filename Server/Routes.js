const Express = require('express');
const Routes = Express.Router();
var PaymentRoute = require('./Routers/PaymentRouter');
const patientRouter = require("./Routers/patientRouter")
var QuestionnaireRoute= require('./Routers/questionnaireRouter');
var QueueRoute= require('./Routers/queueRouter');

Routes.use('/payment/',PaymentRoute);
Routes.use('/patients/',patientRouter);
Routes.use('/Questionnaire/',QuestionnaireRoute);
Routes.use('/queue/',QueueRoute);


module.exports = Routes;