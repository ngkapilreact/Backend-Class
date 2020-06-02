let authRoute = require('./auth/route.auth');
let userRoute = require('./user/route.user');
let productRoute = require('./products/route.product');
let router = require('express').Router();


module.exports = (checkToken, authorize) => {
    router.use('/auth', authRoute);
    router.use('/user', checkToken, userRoute);
    router.use('/product',checkToken, productRoute);
    return router;
}