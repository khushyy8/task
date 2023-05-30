const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    pname : {
        type : String,
        required : true,
        default : ""
    },
    description : {
        type : String,
        required : true,
    },
    size : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
})

const product = mongoose.model("product",productSchema)
module.exports = product;