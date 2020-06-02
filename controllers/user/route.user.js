let userController = require('./controller.user');
let router = require('express').Router();

router.route('/')
    .get(userController.allUser);

router.route('/:id')
    .get(userController.singleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
