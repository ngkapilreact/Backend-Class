module.exports = (req, res, next)=> {
    let loggedInUser = req.loggedInUser;
    if (loggedInUser.role == 'admin') {
        next();
    } else {
        next({
            message: 'You dont have access',
            status: 403
        });
    }
}
