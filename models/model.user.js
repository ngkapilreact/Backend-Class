var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// mongoose suppressor
mongoose.set('useCreateIndex', true);


var authSchema = new Schema({
    uname:{
        type:String,
        required:true,
        unique:true,
    },
    passwd:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    fName:{
        type:String,
    },
    lName:{
        type: String,
    },
    phoneNumber:{
        type:Number,
    },
    address:{
        type:String,
    },
    role:{
        type:Number,
        enum:[1,2,3],
        default:2,
    } 
},{
    timestamps:true,
})

module.exports = mongoose.model('user', authSchema);