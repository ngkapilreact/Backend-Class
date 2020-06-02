let userQuery = require('./query.user');
let bcrypt = require('bcryptjs');

getProfile = (req,res,next) =>{
    let condition = {};
    console.log('Logged in User is: ', req.loggedInUser);
    userQuery.getUser(condition)
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((error)=>{
            next(error);
        })
}
getSingleProfile = (req,res,next) => {
    let condition = {_id:req.params.id};
    userQuery.getUser(condition)
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((error)=>{
            next(error);
        })
}
updateProfile = (req, res, next) => {
    let condition = req.body;
    userQuery.updateUser(req.params.id, condition)
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((error)=>{
            next(error);
        })
}
removeProfile = (req,res,next) =>{
    let condition = {_id:req.params.id};
    userQuery.removeUser(condition)
        .then((data)=>{
            res.status(200).json(data);
        })
        .catch((error)=>{
            next(error);
        })
}

module.exports = {
    allUser: getProfile,
    singleUser: getSingleProfile,
    updateUser: updateProfile,
    deleteUser: removeProfile,
}