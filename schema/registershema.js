const { required } = require('joi');
const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true,
        default : ""
    },
    email: {
        type : String,
        required : true,
    
    },
    password : {
        type : String,
        required : true,
        default : ""
    },
    gender : {
        type : String,
        required : true,
        default : ""
    },
    role:{
        type: String,
        required: true,
        default:"user"
    }
})
const register = mongoose.model("register",registerSchema)
module.exports = register;