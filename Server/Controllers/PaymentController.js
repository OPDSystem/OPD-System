const Mongoose = require('../DBSchema/DBConfig');
var CustomerSchema = Mongoose.model('Customer');
var IncomeSchema = Mongoose.model('Income');

var Controller = function(){
    this.AddCustomerPayment = function(data){
        return new Promise(function (resolve,reject) {
            var Customer = new CustomerSchema({
                id:data,id,
                name:data.name,
                date:data.date,
                amount:data.amount,
                description:data.description
            });
            Customer.save().then(function () {
                resolve({status:200,message:"Payment Details Insert successfully"});
            }).catch(function (err) {
                reject({status:500, message: "Payment Details Insert :" + err});
            })

        })
    }

    this.AddIncomeDetails = function(data){
        return new Promise(function (resolve,reject) {
            var Income = new IncomeSchema({
                id:data,id,
                date:data.date,
                amount:data.amount
            });
            Income.save().then(function () {
                resolve({status:200,message:"Income Details Insert successfully"});
            }).catch(function (err) {
                reject({status:500, message: "Income Details Insert :" + err});
            })

        })
    }

    this.GetCustomerPayment =function (id) {
        return new Promise(function (resolve, reject) {
            CustomerSchema.find({id:id}).exec().then(function (data) {
                resolve({status:200,customerdata : data});
            }).catch(function (reason) {
                reject({status:404 ,message:"Error" + reason});
            })
        })
    }

    this.UpdateCustomerPayment = function (id, data) {
        return new Promise(function (resolve,reject) {
            CustomerSchema.update({id : id}, data).then(function (data) {
                resolve({status:200,message:"update successfully"});
            }).catch(function (err) {
                reject({status:500, message: "Faild :" + err});
            })
        })

    }

    this.GetDayIncome =function (date) {
        return new Promise(function (resolve, reject) {
            IncomeSchema.find({date:date}).exec().then(function (data) {
                var totalamount = 0;
                for(var n =0; n<data.length; n++)
                {
                    totalamount += data[0].amount;
                }
                resolve({status:200, totalincome: totalamount});
            }).catch(function (reason) {
                reject({status:404 ,message:"Error" + reason});
            })
        })
    }
}

module.exports = new Controller();