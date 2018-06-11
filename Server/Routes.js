const Express = require('express');
const Routes = Express.Router();
var PaymentRoute = require('');

Routes.use('/payment/',PaymentRoute);

module.exports = Routes;