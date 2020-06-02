let jwt = require('jsonwebtoken');
let config = require('../config');
let authModel = require('./../models/model.user');
module.exports = ((req,res,next)=>{
    let token;
    if(req.headers.token){
        token = req.headers.token;
    }
    if(req.headers['x-access-token']){
        token = req.headers['x-access-token'];
    }
    if(req.headers['authorization']){
        token = req.headers['authorization']
    }
    if(req.query.token){
        token = req.query.token;
    }
    if(token){
        jwt.verify(token, config.jwtSecret, (error,decoded)=> {
            if(error){
                return next(error);
            }
            authModel.findById(decoded._id).exec((error,users)=>{
                if(error){
                    return next(error);
                }
                if (users) {
                    req.loggedInUser = users;
                    next();

                } else {
                    next({
                        message: 'User removed from system',
                        status: 400
                    })
                }

            })

        })
    }
    else{
        next({message:'Token not provided'});
    }
})