// most required for config
require('./config/dbconfig');
var config = require('./config');

// Node module import
var express = require('express');
var app = express();
var morgan = require('morgan');
var path =require('path');
// var bodyParser = require('body-parser');
var cors = require('cors');

// File import from the project inc route
let checkToken = require('./middlewares/checktoken');
let authAdmin = require('./middlewares/authadmin');
let apiRoute = require('./controllers/api.route')(checkToken, authAdmin);

// All Middleware placed
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('', express.static(path.join(__dirname, 'assets')));

// Router config only for api
app.use('', apiRoute);

//No Url error middleware
app.use( (req, res, next) => {
    next({
        message: 'No URL registered. Sorry',
        status: 404,
    })
})

//Error Handling middleware
app.use((error,req,res,next) => {
    let message = error.message ||'Something fishy in code';
    let status = error.status || '400';
    res.status(status).json({
        message:message,
        status:status,
    })
})

// Server Create
app.listen(config.port, config.server, (error,server)=>{
    if(error){
       return console.log('Error in server creation');
    }
    console.log('Server created at: ' + config.server + ' at '+ config.port );
})