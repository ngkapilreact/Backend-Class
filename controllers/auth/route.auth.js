let authContoller = require('./controller.auth');
let router = require('express').Router();

router.route('/login')
    .post(authContoller.login);

router.route('/register')
    .post(authContoller.register);

module.exports = router;