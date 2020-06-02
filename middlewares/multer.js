var multer = require('multer');
module.exports = (filterType) => {

    var storage = multer.diskStorage({
        destination:  (req, file, cb) => {
            cb(null, './assets/images/');
        },
        filename:  (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });

    a = (req, file, cb) => {
        var mimetype = file.mimetype;
        var image = mimetype.split('/')[0];
        if (image == filterType) {
            cb(null, true);
        } else {
            req.invalidFileFormat = true;
            cb(null, false);
        }

    }
    var upload = multer({ storage: storage, fileFilter: a });

    return upload;
}
