const mongoose = require("mongoose")
const register = require("../schema/registershema")
const responce = require("../utils/responcevalidate")


exports.getdata = (async(req,res) => {
    try {
        const data = await register.find({})
        return res.status(200).json(responce.successResponse(data, "data get sucessfully"))
    }
     catch (error) {
        return res.status(500).json(responce.errorResponse("server error"))
        
    }
})
exports.adddata =  (async(req,res) => {
    try {
        let user = await register.findOne({email : req.body.email})
        if (user && user.email != "") {
            return res.status(200).json(responce.errorResponse("User already exist"))
        }
        if (user && user.fname != "") {
            return res.status(200).json(responce.errorResponse("User already exist"))
        }

        let data = await register.create(req.body)
        return res.status(200).json(responce.successResponse(data, "data add sucessfully"))
    }
     catch (error) {
        return res.status(500).json(responce.errorResponse("server error"))
        
    }
})
// exports.adddata = 
// .single('profile'), async (req,res) => {
//         console.log("req.body",req.body)

//         try {
//             let data = await register.create(req.body)
            
//             return res.status(200).json(responce.successResponse(data, "data add sucessfully"))
//         }
//          catch (error) {
//             return res.status(500).json(responce.errorResponse("server error"))
            
//         }
//     }
// //    }
exports.deletedata = (async(req,res) => {
    try {
        if (req.query._id !== "") {
            return res.status(200).json(responce.errorResponse("Please enter user id"))   
        }
        const data = await register.findByIdAndDelete(req.query._id)
        return res.status(200).json(responce.successResponse(data, "data delete sucessfully"))
    }
     catch (error) {
        return res.status(500).json(responce.errorResponse("server error"))
    }
})
exports.editdata = (async(req,res) => {
    try {

        let user = await register.findOne({email : req.body.email})
        if (user && user.email != "") {
            return res.status(200).json(responce.errorResponse("User already exist"))
        }
        if (user && user.fname != "") {
            return res.status(200).json(responce.errorResponse("User already exist"))
        }
        const data = await register.findByIdAndUpdate(req.query._id,req.body)
        return res.status(200).json(responce.successResponse(data, "data edit sucessfully"))
    }
     catch (error) {
        return res.status(500).json(responce.errorResponse("server error"))
        
    }
})
exports.getbyid = (async(req,res) => {
    try {
        const data = await register.findById(req.query._id)
        return res.status(200).json(responce.successResponse(data, "id get sucessfully"))
    }
     catch (error) {
        return res.status(500).json(responce.errorResponse("server error"))
        
    }
})
exports.getdatabyrole = (async(req,res) => {
    try {
        const data = await register.find({"role" : "user"})
        return res.status(200).json(responce.successResponse(data, "data get sucessfully"))
    }
     catch (error) {
        return res.status(500).json(responce.errorResponse("server error"))
        
    }
})