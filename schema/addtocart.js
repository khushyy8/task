const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    pname : {
        type : String,
        required : true,
        default : ""
    },
    description : {
        type : String,
        required : true
    },
    size : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    userName : {
        type : String,
        required : true
    }
})

const cart = mongoose.model("cart",cartSchema)
module.exports = cart;