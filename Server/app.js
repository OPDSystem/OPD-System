const Express = require('express');
const app = Express();
const Body = require('body-parser');
var Cors = require('cors');
var UserRoute = require('./Routes')

app.use(Body.json());
app.use(Body.urlencoded({extended:false}));
app.use(Cors());
app.use('/',UserRoute );

app.listen(8080,'localhost',function (err) {
    if(err)
    {
        console.log(err);
        process.exit(-1);
    }
    console.log("Server listen port 8080");
})
