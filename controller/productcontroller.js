const mongoose = require("mongoose")
const product = require("../schema/productschema")

const response = require("../utils/responcevalidate")
exports.getdata = (async(req,res) => {
    try {
        const data = await product.find()
        return res.status(200).json(response.successResponse(data, "data get sucessfully"))
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error"))
        
    }
})
exports.adddata = (async(req,res) => {
    try {
        const data = await product.create(req.body)
        return res.status(200).json(response.successResponse(data, "data add sucessfully"))
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error"))
        
    }
})
exports.deletedata = (async(req,res) => {
    try {
        const data = await product.findByIdAndDelete(req.query._id)
        return res.status(200).json(response.successResponse(data, "data delete sucessfully"))
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error"))
        
    }
})
exports.editdata = (async(req,res) => {
    try {
        const data = await product.findByIdAndUpdate(req.query._id,req.body)
        return res.status(200).json(response.successResponse(data, "data edit sucessfully"))
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error"))
        
    }
})
exports.getbyid = (async(req,res) => {
    try {
        const data = await product.findById(req.query._id)
        return res.status(200).json(response.successResponse(data, "id get sucessfully"))
    }
     catch (error) {
        return res.status(500).json(response.errorResponse("server error"))
        
    }
})
