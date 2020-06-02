let mongoose = require('mongoose');
let schema = mongoose.Schema;

let supplierSchema = new schema({
    name:{
        type:String,
    },
    address: String,
    contactDetails: {
        phoneNumber: Number,
        email: String
    } 
})

let productSchema = new schema({
    name:{
        type:String,
        required:true,
    },
    price: {
        type:Number,
        required:true,
    },
    details: {
        type:String,
    },
    brand: {
        type:String,
        required:true, 
    },
    category:{
        type:String,
    },
    tags:[String],
    quality:{
        type:String,
        enum:['low','med','high'],
        default:'med',
    },
    color:{
        type:String,
    },
    quantity:{
        type:Number,
        required:true,
    },
    manuDate: {
        type: Date,
        default:Date.now,
    },
    expiryDate:{
        type: Date,
    },
    image:{
        type:String,
    },
    user: {
        type:schema.Types.ObjectId,
        ref:'user',
    },
    status:{
        type:String,
        enum:['available','sold','out of stock'],
        default:'available',
    },
    supplier: supplierSchema,
},{
    timestamps:true,
})
module.exports = mongoose.model('product',productSchema);