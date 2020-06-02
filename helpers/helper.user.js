
mapUser = (userNew, user) => {
    if(user.uname){
        userNew.uname = user.uname;
    }
    if(user.email){
        userNew.email = user.email;
    }
    if(user.address){
        userNew.address = user.address;
    }
    if(user.fName){
        userNew.fName = user.fName;
    }
    if(user.lName){
        userNew.lName = user.lName;
    }
    if(user.phoneNumber){
        userNew.phoneNumber = user.phoneNumber;
    }
    if(user.passwd){
        userNew.passwd = user.passwd;
    }
    if(user.phoneNumber){
        userNew.phoneNumber = user.phoneNumber;
    }
    if(user.role){
        userNew.role = user.role;
    }
    return userNew;
}
module.exports = mapUser;