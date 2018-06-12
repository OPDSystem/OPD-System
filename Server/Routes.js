const Express = require('express');
const Routes = Express.Router();
var PaymentRoute = require('./Routers/PaymentRouter');
const patientRouter = require("./Routers/patientRouter")

Routes.use('/payment/',PaymentRoute);
Routes.use('/patients/',patientRouter);


module.exports = Routes;