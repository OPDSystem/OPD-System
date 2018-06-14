'use strict';

const express = require('express'),
 mongoose = require('mongoose');

mongoose.connect('mongodb://opd:asdfgf007@ds159110.mlab.com:59110/opd-system', function (err) {
    if (err) {
        console.error(err);
        process.exit(-1);
    }

    console.log('Connected to the DB');
});

const app = express();

app.use(express.json());

app.use(express.static('dist'));
app.use(express.static(__dirname));

app.get('/', function(req, res)  {
    res.sendFile('index.html');
});

app.listen(3000,'localhost', function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening on port 3000');
});