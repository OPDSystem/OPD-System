const Express = require('express');
const Routes = Express.Router();
var PaymentRoute = require('./Routers/PaymentRouter');

Routes.use('/payment/',PaymentRoute);

module.exports = Routes;