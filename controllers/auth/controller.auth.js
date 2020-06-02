let authQuery = require('./query.auth');
let config = require('./../../config');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

loginController = (req, res, next) => {
    let condition = {
        uname: req.body.uname
    };
    let pass = req.body.passwd;
    authQuery.login(condition)
        .then((data) => {
            bcrypt.compare(pass, data[0].passwd, (error, unhashed) => {
                if (error) {
                    return next(error);
                }
                if(unhashed == false){
                    return next({
                        message: 'Invalid Password credential',
                        status: 306,
                    })
                }
                if(unhashed ==true){
                jwt.sign({_id: data[0]}, config.jwtSecret, (error, generated) => {
                    if (error) {
                        return console.log('error in token');
                    } else {
                        res.status(200).json({
                            token: generated,
                            user: data[0]
                        });
                    }
                })
                }
            })

        })

        .catch(() => {
            next({
                message: 'Invalid Username credential',
                status: 306
            });
        })

}

registerController = (req, res, next) => {
    let data = req.body;
    bcrypt.hash(data.passwd, 12, (error, hashed) => {
        if (error) {
            return next(error);
        }
        data.passwd = hashed;
        authQuery.register(data)
            .then((data) => {
                console.log('Data is: ', data);
                res.status(200).json(data);
            })
            .catch((error) => {
                next(error);
            })
    });
}
module.exports = {
    login: loginController,
    register: registerController,
}