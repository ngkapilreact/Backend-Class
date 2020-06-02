let productQuery = require('./query.product');

getProduct = (req,res,next) => {
    var condition = {};
    if(req.loggedInUser.uname != 'admin'){
        condition.user = req.loggedInUser._id;
    }
    productQuery.getProduct(condition)
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((error)=>{
            next(error);
        })
}
getSingleProduct = (req,res,next) => {
    let condition = {_id:req.params.id};
    productQuery.getProduct(condition)
        .then((data)=>{
            res.status(200).json(data[0]);
        })
        .catch((error)=>{
            next(error);
        })
}
updateProduct = (req,res,next) => {
    var reqData = req.body;
    if (req.file) {
        reqData.image = req.file.filename;
    }
    productQuery.putProduct(req.params.id, reqData)
        .then((data)=> {
            res.status(200).json(data);
        })
        .catch((error)=> {
            next(error);
        });


}

insertProduct = (req,res,next) => {
    var reqData = req.body;
        console.log('req.file is >>>', req.file)
        if (req.invalidFileFormat) {
            return next({
                message: 'Invalid file format'
            })
        }
        reqData.user = req.loggedInUser._id;
    if (req.file) {
        console.log('file in req data');
        reqData.image = req.file.filename;
    }
    productQuery.postProduct(reqData)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            next(error);
        });
}

deleteProduct = (req,res,next) => {
    let condition = {_id:req.params.id};
    productQuery.deleteProduct(condition)
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((error)=>{
            next(error);
        })
}
searchProduct = (req,res,next) => {
    let condition = {};
    productQuery.searchProduct(condition, req.body)
        .then((data)=> {
            res.status(200).json(data);
        })
        .catch((error)=>{
            next(error);
        })
}
module.exports = {
    fetch: getProduct,
    fetchSingle: getSingleProduct,
    insert: insertProduct,
    update: updateProduct,
    delete: deleteProduct,
    search: searchProduct,
}