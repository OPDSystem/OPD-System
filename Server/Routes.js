const Express = require('express');
const Routes = Express.Router();
var PaymentRoute = require('./Routers/PaymentRouter');
const patientRouter = require("./Routers/patientRouter")
var QuestionnaireRoute= require('./Routers/questionnaireRouter');
var QueueRoute= require('./Routers/queueRouter');
var clinicRoute=require('./Routers/clinicRouter');

Routes.use('/payment/',PaymentRoute);
Routes.use('/patients/',patientRouter);
Routes.use('/Questionnaire/',QuestionnaireRoute);
Routes.use('/queue/',QueueRoute);
Routes.use('/clinic/',clinicRoute);


module.exports = Routes;