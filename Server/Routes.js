const Express = require('express');
const Routes = Express.Router();
var PaymentRoute = require('./Routers/PaymentRouter');
var QuestionnaireRoute= require('./Routers/questionnaireRouter');
var QueueRoute= require('./Routers/queueRouter');

Routes.use('/payment/',PaymentRoute);

module.exports = Routes;