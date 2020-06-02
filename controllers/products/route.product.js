let productController = require('./controller.product');
var multer = require('./../../middlewares/multer')('image');
let router = require('express').Router();

router.route('/')
    .get(productController.fetch)
    .post(multer.single('image'), productController.insert);

router.route('/search')
    .post(productController.search);
router.route('/:id')
    .get(productController.fetchSingle)
    .put(multer.single('image'), productController.update)
    .delete(productController.delete);
module.exports = router;