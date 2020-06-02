let userModel = require('./../../models/model.user');
let mapUser = require('./../../helpers/helper.user');

fetch = (condition) => {
    return new Promise((resolve,reject)=>{
        userModel.find(condition).exec((error,fetched)=>{
            if(error){
                return reject(error);
            }
            resolve(fetched);
        })
    })
}

update = (id, data) =>{
    return new Promise((resolve,reject)=>{
        userModel.findByIdAndUpdate(id).exec((error,profile)=>{
            if(error){
                reject(error);
            }
            if(profile){
                let mappModel = mapUser(profile, data);
                mappModel.save((error,update)=>{
                    if(error){
                        reject(error);
                    }
                    else{
                        resolve(update);
                    }
                })
            }
            else{
                reject({
                    message:'No user found',
                    status:404,
                })
            }
        })
    })
}
remove = (id) =>{
    return new Promise((resolve,reject)=>{   
    userModel.deleteOne(id).exec((error,deleted)=>{
        if(error){
            reject(error);
        }
        if(deleted){
            resolve(deleted);
        }
        else{
            reject({
                message:'User Already deleted',
                status:404,
            })
        }
    })
    })
}

module.exports = {
    getUser:fetch,
    updateUser:update,
    removeUser:remove,
}