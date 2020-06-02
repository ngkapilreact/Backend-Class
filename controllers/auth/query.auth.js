let authModel = require('./../../models/model.user');
let authHelper = require('./../../helpers/helper.user');

loginQuery = (condition) => {
    return new Promise((resolve,reject)=>{
        authModel.find(condition).exec((error,login) => {
            if(error){
                return reject(error);
            }
            resolve(login);
        })
    })
}
registerQuery = (data) => {
    return new Promise((resolve,reject) =>{
        let newRegister = new authModel({});
        let newReg = authHelper(newRegister, data);
        newReg.save((error,registered)=>{
            if(error){
                return reject(error);
            }
            resolve(registered);
        })
    })
}

module.exports = {
    login:loginQuery,
    register:registerQuery,
}