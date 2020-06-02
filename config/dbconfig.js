var mongoose = require('mongoose');
var config = require('./');
var Url = config.dbUrl + '/' + config.dbName;
mongoose.connect(Url,{ useNewUrlParser: true }, (err,done)=>{
    if(err){
        return console.log('Error in connection');
    }
    console.log('Connection successful at: ' + Url);
});